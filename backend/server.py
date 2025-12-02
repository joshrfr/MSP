from fastapi import FastAPI, APIRouter, UploadFile, File, Form, Request, HTTPException
from fastapi.responses import JSONResponse
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional, Dict
import uuid
from datetime import datetime, timezone
import aiosmtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from email.mime.base import MIMEBase
from email import encoders
from emergentintegrations.payments.stripe.checkout import StripeCheckout, CheckoutSessionResponse, CheckoutStatusResponse, CheckoutSessionRequest


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Email configuration
SMTP_HOST = os.environ.get('SMTP_HOST', 'smtppro.zoho.com')
SMTP_PORT = int(os.environ.get('SMTP_PORT', 465))
SMTP_USERNAME = os.environ.get('SMTP_USERNAME', '')
SMTP_PASSWORD = os.environ.get('SMTP_PASSWORD', '')
SMTP_FROM_EMAIL = os.environ.get('SMTP_FROM_EMAIL', 'helpdesk@tttmsp.com')
SMTP_FROM_NAME = os.environ.get('SMTP_FROM_NAME', 'TopTier Technologies')

# Stripe configuration
STRIPE_API_KEY = os.environ.get('STRIPE_API_KEY', '')

# Define fixed residential plan packages (security: amounts defined on backend only)
RESIDENTIAL_PLANS = {
    "homecare_basic": {"name": "HomeCare Basic", "price_min": 50.00, "price_max": 80.00, "default": 65.00},
    "homecare_plus": {"name": "HomeCare Plus", "price_min": 95.00, "price_max": 135.00, "default": 115.00},
    "homecare_elite": {"name": "HomeCare Elite", "price_min": 155.00, "price_max": 179.00, "default": 167.00}
}

# Email sending function
async def send_email(to_email: str, subject: str, body: str, attachment_data: bytes = None, attachment_name: str = None):
    """Send email using Zoho SMTP"""
    try:
        message = MIMEMultipart()
        message['From'] = f"{SMTP_FROM_NAME} <{SMTP_FROM_EMAIL}>"
        message['To'] = to_email
        message['Subject'] = subject
        
        message.attach(MIMEText(body, 'html'))
        
        # Add attachment if provided
        if attachment_data and attachment_name:
            part = MIMEBase('application', 'octet-stream')
            part.set_payload(attachment_data)
            encoders.encode_base64(part)
            part.add_header('Content-Disposition', f'attachment; filename={attachment_name}')
            message.attach(part)
        
        # Send email
        if SMTP_PASSWORD:  # Only try to send if password is configured
            async with aiosmtplib.SMTP(hostname=SMTP_HOST, port=SMTP_PORT, use_tls=True) as smtp:
                await smtp.login(SMTP_USERNAME, SMTP_PASSWORD)
                await smtp.send_message(message)
            logger.info(f"Email sent successfully to {to_email}")
            return True
        else:
            logger.warning("SMTP password not configured. Email not sent.")
            return False
    except Exception as e:
        logger.error(f"Failed to send email: {str(e)}")
        return False


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")  # Ignore MongoDB's _id field
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

class ContactRequest(BaseModel):
    service_type: str
    description: str
    name: Optional[str] = None
    email: Optional[EmailStr] = None
    phone: Optional[str] = None

class PCBuildRequest(BaseModel):
    name: str
    email: EmailStr
    phone: Optional[str] = None
    cpu_preference: str
    ram: str
    storage: str
    use_case: str
    budget: str

class CheckoutRequest(BaseModel):
    plan_id: str
    origin_url: str
    user_email: Optional[str] = None
    user_name: Optional[str] = None

# Qualification Models
class CorePlusQualificationRequest(BaseModel):
    business_type: str
    current_support: List[str]
    tech_comfort: str
    pain_point: str
    timeline: str
    auto_score: float
    qualification_status: str
    timestamp: str

class PremiumQualificationRequest(BaseModel):
    company_name: str
    website: Optional[str] = None
    ein: Optional[str] = None
    years_business: str
    industry: str
    employee_count: str
    locations: str
    it_infrastructure: List[str] = []
    current_support: str
    security_posture: List[str] = []
    compliance_needs: List[str] = []
    main_challenges: str
    budget_range: Optional[str] = None
    timeline: str
    decision_maker: str
    contact_name: str
    contact_email: EmailStr
    contact_phone: Optional[str] = None
    auto_score: float
    qualification_status: str
    timestamp: str

class EnterpriseDiscoveryRequest(BaseModel):
    company_name: str
    website: Optional[str] = None
    employee_count: str
    contact_name: str
    contact_email: EmailStr
    contact_phone: Optional[str] = None
    current_it: str
    pain_points: str
    project_scope: str
    timeline: str
    contact_preference: str
    timestamp: str

class PaymentTransaction(BaseModel):
    id: str
    session_id: str
    plan_id: str
    plan_name: str
    amount: float
    currency: str
    payment_status: str
    status: str
    user_email: Optional[str] = None
    user_name: Optional[str] = None
    metadata: Dict[str, str]
    timestamp: str

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/contact")
async def submit_contact_request(
    service_type: str = Form(...),
    description: str = Form(...),
    name: str = Form(None),
    email: str = Form(None),
    phone: str = Form(None),
    file: UploadFile = File(None)
):
    """Handle service request form submissions"""
    try:
        # Prepare email body
        email_body = f"""
        <html>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <h2 style="color: #4682B4;">New Service Request from Website</h2>
            <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px;">
                <p><strong>Service Type:</strong> {service_type}</p>
                <p><strong>Description:</strong><br>{description}</p>
                {f'<p><strong>Name:</strong> {name}</p>' if name else ''}
                {f'<p><strong>Email:</strong> {email}</p>' if email else ''}
                {f'<p><strong>Phone:</strong> {phone}</p>' if phone else ''}
                <p><strong>Submitted:</strong> {datetime.now(timezone.utc).strftime('%Y-%m-%d %H:%M:%S UTC')}</p>
            </div>
        </body>
        </html>
        """
        
        # Handle file attachment
        attachment_data = None
        attachment_name = None
        if file:
            attachment_data = await file.read()
            attachment_name = file.filename
        
        # Send email to helpdesk
        await send_email(
            to_email=SMTP_FROM_EMAIL,
            subject=f"New {service_type} Service Request",
            body=email_body,
            attachment_data=attachment_data,
            attachment_name=attachment_name
        )
        
        # Store in database
        contact_doc = {
            "id": str(uuid.uuid4()),
            "service_type": service_type,
            "description": description,
            "name": name,
            "email": email,
            "phone": phone,
            "has_attachment": file is not None,
            "timestamp": datetime.now(timezone.utc).isoformat()
        }
        await db.contact_requests.insert_one(contact_doc)
        
        return {"success": True, "message": "Your request has been received — our team will follow up shortly."}
    except Exception as e:
        logger.error(f"Error processing contact request: {str(e)}")
        return {"success": False, "message": "An error occurred. Please try calling us at (850) 610-3889."}

@api_router.post("/pc-build-request")
async def submit_pc_build_request(request: PCBuildRequest):
    """Handle PC/Server build request submissions"""
    try:
        # Prepare email body
        email_body = f"""
        <html>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <h2 style="color: #4682B4;">New PC/Server Build Request</h2>
            <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px;">
                <p><strong>Name:</strong> {request.name}</p>
                <p><strong>Email:</strong> {request.email}</p>
                {f'<p><strong>Phone:</strong> {request.phone}</p>' if request.phone else ''}
                <hr style="border: 1px solid #ddd; margin: 15px 0;">
                <h3 style="color: #4682B4;">Build Specifications</h3>
                <p><strong>CPU Preference:</strong> {request.cpu_preference}</p>
                <p><strong>RAM:</strong> {request.ram}</p>
                <p><strong>Storage:</strong> {request.storage}</p>
                <p><strong>Use Case:</strong> {request.use_case}</p>
                <p><strong>Budget:</strong> {request.budget}</p>
                <p><strong>Submitted:</strong> {datetime.now(timezone.utc).strftime('%Y-%m-%d %H:%M:%S UTC')}</p>
            </div>
        </body>
        </html>
        """
        
        # Send email to helpdesk
        await send_email(
            to_email=SMTP_FROM_EMAIL,
            subject=f"New PC/Server Build Request - {request.name}",
            body=email_body
        )
        
        # Store in database
        build_doc = request.model_dump()
        build_doc['id'] = str(uuid.uuid4())
        build_doc['timestamp'] = datetime.now(timezone.utc).isoformat()
        await db.pc_build_requests.insert_one(build_doc)
        
        return {"success": True, "message": "Your build request has been received. We'll send you a quote shortly!"}
    except Exception as e:
        logger.error(f"Error processing PC build request: {str(e)}")
        return {"success": False, "message": "An error occurred. Please try calling us at (850) 610-3889."}

@api_router.post("/qualifications/core-plus")
async def submit_core_plus_qualification(request: CorePlusQualificationRequest):
    """Handle Core+ plan qualification submissions"""
    try:
        qual_doc = request.model_dump()
        qual_doc['id'] = str(uuid.uuid4())

        # Prepare email body based on qualification status
        if request.qualification_status == 'auto_approved':
            email_subject = f"✓ Core+ Qualification Approved - Reference ID: {qual_doc['id']}"
            sales_email_body = f"""
            <html>
            <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                <h2 style="color: #28a745;">Core+ Qualification AUTO-APPROVED</h2>
                <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px;">
                    <p><strong>Reference ID:</strong> {qual_doc['id']}</p>
                    <p><strong>Auto Score:</strong> {request.auto_score}/100</p>
                    <p><strong>Status:</strong> AUTO-APPROVED - Customer can proceed to checkout</p>
                    <hr style="border: 1px solid #ddd; margin: 15px 0;">
                    <h3>Qualification Details</h3>
                    <p><strong>Business Type:</strong> {request.business_type}</p>
                    <p><strong>Current IT Support:</strong> {', '.join(request.current_support)}</p>
                    <p><strong>Tech Comfort Level:</strong> {request.tech_comfort}/4</p>
                    <p><strong>Main Pain Point:</strong> {request.pain_point}</p>
                    <p><strong>Timeline:</strong> {request.timeline}</p>
                    <p><strong>Submitted:</strong> {request.timestamp}</p>
                </div>
            </body>
            </html>
            """
        else:
            email_subject = f"⏳ Core+ Qualification - Manual Review Needed - Reference ID: {qual_doc['id']}"
            sales_email_body = f"""
            <html>
            <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                <h2 style="color: #FF9800;">Core+ Qualification - MANUAL REVIEW</h2>
                <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px;">
                    <p><strong>Reference ID:</strong> {qual_doc['id']}</p>
                    <p><strong>Auto Score:</strong> {request.auto_score}/100</p>
                    <p><strong>Status:</strong> MANUAL REVIEW - Sales team to follow up within 2 hours</p>
                    <hr style="border: 1px solid #ddd; margin: 15px 0;">
                    <h3>Qualification Details</h3>
                    <p><strong>Business Type:</strong> {request.business_type}</p>
                    <p><strong>Current IT Support:</strong> {', '.join(request.current_support)}</p>
                    <p><strong>Tech Comfort Level:</strong> {request.tech_comfort}/4</p>
                    <p><strong>Main Pain Point:</strong> {request.pain_point}</p>
                    <p><strong>Timeline:</strong> {request.timeline}</p>
                    <p><strong>Submitted:</strong> {request.timestamp}</p>
                </div>
            </body>
            </html>
            """

        # Send alert email to sales team
        await send_email(
            to_email=SMTP_FROM_EMAIL,
            subject=email_subject,
            body=sales_email_body
        )

        # Store in database
        await db.core_plus_qualifications.insert_one(qual_doc)

        return {"success": True, "id": qual_doc['id'], "message": "Your qualification has been recorded."}
    except Exception as e:
        logger.error(f"Error processing Core+ qualification: {str(e)}")
        return {"success": False, "message": "An error occurred. Please try calling us at (850) 610-3889."}

@api_router.post("/qualifications/premium")
async def submit_premium_qualification(request: PremiumQualificationRequest):
    """Handle Premium plan qualification submissions"""
    try:
        qual_doc = request.model_dump()
        qual_doc['id'] = str(uuid.uuid4())

        # Map status to decision messaging
        status_messages = {
            'approved': '✓ APPROVED - High-fit candidate',
            'conditional': '⏳ CONDITIONAL - Needs review',
            'schedule_call': '📞 SCHEDULE CALL - Discovery required',
            'rejected': '❌ REJECTED - Not a fit at this time'
        }

        email_subject = f"{status_messages.get(request.qualification_status, 'Submission Received')} - Reference ID: {qual_doc['id']}"
        sales_email_body = f"""
        <html>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <h2 style="color: #4682B4;">Premium Plan Qualification Submitted</h2>
            <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px;">
                <p><strong>Reference ID:</strong> {qual_doc['id']}</p>
                <p><strong>Status:</strong> {status_messages.get(request.qualification_status, 'Pending Review')}</p>
                <p><strong>Auto Score:</strong> {request.auto_score}/100</p>
                <hr style="border: 1px solid #ddd; margin: 15px 0;">
                <h3>Company Information</h3>
                <p><strong>Company:</strong> {request.company_name}</p>
                <p><strong>Website:</strong> {request.website or 'Not provided'}</p>
                <p><strong>EIN:</strong> {request.ein or 'Not provided'}</p>
                <p><strong>Years in Business:</strong> {request.years_business}</p>
                <p><strong>Industry:</strong> {request.industry}</p>
                <p><strong>Employees:</strong> {request.employee_count}</p>
                <p><strong>Locations:</strong> {request.locations}</p>
                <hr style="border: 1px solid #ddd; margin: 15px 0;">
                <h3>Contact Information</h3>
                <p><strong>Name:</strong> {request.contact_name}</p>
                <p><strong>Email:</strong> {request.contact_email}</p>
                <p><strong>Phone:</strong> {request.contact_phone or 'Not provided'}</p>
                <hr style="border: 1px solid #ddd; margin: 15px 0;">
                <h3>IT & Infrastructure</h3>
                <p><strong>Current Support Model:</strong> {request.current_support}</p>
                <p><strong>Infrastructure:</strong> {', '.join(request.it_infrastructure) if request.it_infrastructure else 'Not specified'}</p>
                <p><strong>Security Posture:</strong> {', '.join(request.security_posture) if request.security_posture else 'Not assessed'}</p>
                <p><strong>Compliance Needs:</strong> {', '.join(request.compliance_needs) if request.compliance_needs else 'None'}</p>
                <p><strong>Main Challenges:</strong> {request.main_challenges}</p>
                <hr style="border: 1px solid #ddd; margin: 15px 0;">
                <h3>Business Details</h3>
                <p><strong>Budget Range:</strong> {request.budget_range or 'Not specified'}</p>
                <p><strong>Timeline:</strong> {request.timeline}</p>
                <p><strong>Decision Maker:</strong> {request.decision_maker}</p>
                <p><strong>Submitted:</strong> {request.timestamp}</p>
            </div>
        </body>
        </html>
        """

        # Send alert email to sales team
        await send_email(
            to_email=SMTP_FROM_EMAIL,
            subject=email_subject,
            body=sales_email_body
        )

        # Store in database
        await db.premium_qualifications.insert_one(qual_doc)

        return {"success": True, "id": qual_doc['id'], "message": "Your application has been received."}
    except Exception as e:
        logger.error(f"Error processing Premium qualification: {str(e)}")
        return {"success": False, "message": "An error occurred. Please try calling us at (850) 610-3889."}

@api_router.post("/qualifications/enterprise")
async def submit_enterprise_discovery(request: EnterpriseDiscoveryRequest):
    """Handle Enterprise plan discovery submissions"""
    try:
        discovery_doc = request.model_dump()
        discovery_doc['id'] = str(uuid.uuid4())
        discovery_doc['status'] = 'pending_outreach'

        # Prepare sales team email
        sales_email_body = f"""
        <html>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <h2 style="color: #FF6B6B;">NEW Enterprise Discovery Request</h2>
            <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px;">
                <p><strong>PRIORITY: HIGH - Reach out within 24 hours</strong></p>
                <p><strong>Reference ID:</strong> {discovery_doc['id']}</p>
                <hr style="border: 1px solid #ddd; margin: 15px 0;">
                <h3>Company Information</h3>
                <p><strong>Company:</strong> {request.company_name}</p>
                <p><strong>Website:</strong> {request.website or 'Not provided'}</p>
                <p><strong>Employees:</strong> {request.employee_count}</p>
                <hr style="border: 1px solid #ddd; margin: 15px 0;">
                <h3>Primary Contact</h3>
                <p><strong>Name:</strong> {request.contact_name}</p>
                <p><strong>Email:</strong> {request.contact_email}</p>
                <p><strong>Phone:</strong> {request.contact_phone or 'Not provided'}</p>
                <p><strong>Preferred Contact Method:</strong> {request.contact_preference.upper()}</p>
                <hr style="border: 1px solid #ddd; margin: 15px 0;">
                <h3>Business Details</h3>
                <p><strong>Current IT Situation:</strong></p>
                <p style="white-space: pre-wrap; background-color: #fff; padding: 10px; border-left: 4px solid #FF6B6B;">{request.current_it}</p>
                <p><strong>Main Challenges:</strong></p>
                <p style="white-space: pre-wrap; background-color: #fff; padding: 10px; border-left: 4px solid #FF6B6B;">{request.pain_points}</p>
                <p><strong>Project Scope:</strong></p>
                <p style="white-space: pre-wrap; background-color: #fff; padding: 10px; border-left: 4px solid #FF6B6B;">{request.project_scope}</p>
                <p><strong>Timeline:</strong> {request.timeline}</p>
                <p><strong>Submitted:</strong> {request.timestamp}</p>
            </div>
        </body>
        </html>
        """

        # Send alert email to sales team
        await send_email(
            to_email=SMTP_FROM_EMAIL,
            subject=f"🚨 NEW Enterprise Discovery Request - {request.company_name} - Reference ID: {discovery_doc['id']}",
            body=sales_email_body
        )

        # Store in database
        await db.enterprise_discovery.insert_one(discovery_doc)

        return {"success": True, "id": discovery_doc['id'], "message": "Your discovery request has been received."}
    except Exception as e:
        logger.error(f"Error processing Enterprise discovery: {str(e)}")
        return {"success": False, "message": "An error occurred. Please try calling us at (850) 610-3889."}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    
    # Convert to dict and serialize datetime to ISO string for MongoDB
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    # Exclude MongoDB's _id field from the query results
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    
    # Convert ISO string timestamps back to datetime objects
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks

@api_router.post("/payments/checkout/session")
async def create_checkout_session(request: CheckoutRequest, http_request: Request):
    """Create a Stripe checkout session for residential plans"""
    try:
        # Validate plan_id
        if request.plan_id not in RESIDENTIAL_PLANS:
            raise HTTPException(status_code=400, detail="Invalid plan ID")
        
        plan = RESIDENTIAL_PLANS[request.plan_id]
        amount = plan["default"]  # Use default price from backend (security: never trust frontend prices)
        
        # Build success and cancel URLs from provided origin
        success_url = f"{request.origin_url}/payment/success?session_id={{CHECKOUT_SESSION_ID}}"
        cancel_url = f"{request.origin_url}/residential"
        
        # Initialize Stripe checkout
        host_url = str(http_request.base_url).rstrip('/')
        webhook_url = f"{host_url}/api/webhook/stripe"
        stripe_checkout = StripeCheckout(api_key=STRIPE_API_KEY, webhook_url=webhook_url)
        
        # Create checkout session
        checkout_request = CheckoutSessionRequest(
            amount=amount,
            currency="usd",
            success_url=success_url,
            cancel_url=cancel_url,
            metadata={
                "plan_id": request.plan_id,
                "plan_name": plan["name"],
                "user_email": request.user_email or "guest",
                "user_name": request.user_name or "Guest User",
                "source": "residential_plans"
            }
        )
        
        session: CheckoutSessionResponse = await stripe_checkout.create_checkout_session(checkout_request)
        
        # Create payment transaction record (MANDATORY before redirect)
        transaction_doc = {
            "id": str(uuid.uuid4()),
            "session_id": session.session_id,
            "plan_id": request.plan_id,
            "plan_name": plan["name"],
            "amount": amount,
            "currency": "usd",
            "payment_status": "pending",
            "status": "initiated",
            "user_email": request.user_email,
            "user_name": request.user_name,
            "metadata": {
                "plan_id": request.plan_id,
                "plan_name": plan["name"]
            },
            "timestamp": datetime.now(timezone.utc).isoformat(),
            "processed": False  # Flag to prevent double processing
        }
        await db.payment_transactions.insert_one(transaction_doc)
        
        logger.info(f"Checkout session created: {session.session_id} for plan {request.plan_id}")
        
        return {"url": session.url, "session_id": session.session_id}
    
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error creating checkout session: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to create checkout session")

@api_router.get("/payments/checkout/status/{session_id}")
async def get_checkout_status(session_id: str, http_request: Request):
    """Get the status of a checkout session"""
    try:
        # Initialize Stripe checkout
        host_url = str(http_request.base_url).rstrip('/')
        webhook_url = f"{host_url}/api/webhook/stripe"
        stripe_checkout = StripeCheckout(api_key=STRIPE_API_KEY, webhook_url=webhook_url)
        
        # Get status from Stripe
        checkout_status: CheckoutStatusResponse = await stripe_checkout.get_checkout_status(session_id)
        
        # Check if we already processed this payment
        existing_transaction = await db.payment_transactions.find_one(
            {"session_id": session_id, "processed": True}
        )
        
        if existing_transaction:
            # Already processed, return cached status
            return {
                "status": existing_transaction.get("status"),
                "payment_status": existing_transaction.get("payment_status"),
                "amount_total": existing_transaction.get("amount"),
                "currency": existing_transaction.get("currency"),
                "metadata": existing_transaction.get("metadata", {}),
                "already_processed": True
            }
        
        # Update transaction in database if payment completed
        if checkout_status.payment_status == "paid":
            update_result = await db.payment_transactions.update_one(
                {"session_id": session_id, "processed": False},
                {
                    "$set": {
                        "payment_status": "paid",
                        "status": "complete",
                        "processed": True,
                        "completed_at": datetime.now(timezone.utc).isoformat()
                    }
                }
            )
            
            if update_result.modified_count > 0:
                logger.info(f"Payment successful and processed for session {session_id}")
                
                # Send confirmation email
                transaction = await db.payment_transactions.find_one({"session_id": session_id})
                if transaction and transaction.get("user_email"):
                    await send_payment_confirmation_email(transaction)
        
        elif checkout_status.status == "expired":
            await db.payment_transactions.update_one(
                {"session_id": session_id},
                {
                    "$set": {
                        "payment_status": "failed",
                        "status": "expired",
                        "updated_at": datetime.now(timezone.utc).isoformat()
                    }
                }
            )
        
        return {
            "status": checkout_status.status,
            "payment_status": checkout_status.payment_status,
            "amount_total": checkout_status.amount_total / 100,  # Convert from cents
            "currency": checkout_status.currency,
            "metadata": checkout_status.metadata
        }
    
    except Exception as e:
        logger.error(f"Error getting checkout status: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to get checkout status")

@api_router.post("/webhook/stripe")
async def stripe_webhook(request: Request):
    """Handle Stripe webhooks"""
    try:
        # Get raw body and signature
        body = await request.body()
        signature = request.headers.get("Stripe-Signature")
        
        if not signature:
            raise HTTPException(status_code=400, detail="Missing Stripe signature")
        
        # Initialize Stripe checkout
        host_url = str(request.base_url).rstrip('/')
        webhook_url = f"{host_url}/api/webhook/stripe"
        stripe_checkout = StripeCheckout(api_key=STRIPE_API_KEY, webhook_url=webhook_url)
        
        # Handle webhook
        webhook_response = await stripe_checkout.handle_webhook(body, signature)
        
        logger.info(f"Webhook received: {webhook_response.event_type} for session {webhook_response.session_id}")
        
        # Update transaction based on webhook event
        if webhook_response.event_type == "checkout.session.completed":
            if webhook_response.payment_status == "paid":
                update_result = await db.payment_transactions.update_one(
                    {"session_id": webhook_response.session_id, "processed": False},
                    {
                        "$set": {
                            "payment_status": "paid",
                            "status": "complete",
                            "processed": True,
                            "completed_at": datetime.now(timezone.utc).isoformat()
                        }
                    }
                )
                
                if update_result.modified_count > 0:
                    logger.info(f"Payment webhook processed for session {webhook_response.session_id}")
        
        return {"received": True}
    
    except Exception as e:
        logger.error(f"Webhook error: {str(e)}")
        raise HTTPException(status_code=400, detail=str(e))

async def send_payment_confirmation_email(transaction: dict):
    """Send payment confirmation email to customer"""
    try:
        email_body = f"""
        <html>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <h2 style="color: #87CEEB;">Payment Confirmation - TopTier Technologies</h2>
            <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px;">
                <p>Dear {transaction.get('user_name', 'Customer')},</p>
                <p>Thank you for subscribing to <strong>{transaction.get('plan_name')}</strong>!</p>
                <hr style="border: 1px solid #ddd; margin: 15px 0;">
                <h3 style="color: #87CEEB;">Order Details</h3>
                <p><strong>Plan:</strong> {transaction.get('plan_name')}</p>
                <p><strong>Amount:</strong> ${transaction.get('amount'):.2f} USD/month</p>
                <p><strong>Transaction ID:</strong> {transaction.get('session_id')}</p>
                <p><strong>Date:</strong> {datetime.now(timezone.utc).strftime('%Y-%m-%d %H:%M:%S UTC')}</p>
                <hr style="border: 1px solid #ddd; margin: 15px 0;">
                <h3 style="color: #87CEEB;">90-Day Satisfaction Guarantee</h3>
                <p style="background-color: #e8f4f8; padding: 15px; border-left: 4px solid #87CEEB;">
                    <strong>We stand behind our services.</strong> If you're not completely satisfied with your service within 90 days, we'll refund your money - no questions asked. Your satisfaction is our priority.
                </p>
                <hr style="border: 1px solid #ddd; margin: 15px 0;">
                <h3 style="color: #87CEEB;">Your Portal Access</h3>
                <p>Portal credentials and access instructions have been sent to your email. You can now log in to your account to manage your service.</p>
                <p><strong>Portal Link:</strong> <a href="https://portal.tttmsp.com" style="color: #87CEEB;">https://portal.tttmsp.com</a></p>
                <p>Our team will be in touch within 24 hours to set up your service and answer any questions you may have.</p>
                <p>If you have any questions, please contact us at (850) 610-3889 or reply to this email.</p>
                <p style="margin-top: 30px;">Best regards,<br><strong>The TopTier Technologies Team</strong></p>
            </div>
        </body>
        </html>
        """
        
        await send_email(
            to_email=transaction.get('user_email'),
            subject=f"Payment Confirmation - {transaction.get('plan_name')}",
            body=email_body
        )
        
        logger.info(f"Confirmation email sent to {transaction.get('user_email')}")
    except Exception as e:
        logger.error(f"Failed to send confirmation email: {str(e)}")

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()