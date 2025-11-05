from fastapi import FastAPI, APIRouter, UploadFile, File, Form
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone
import aiosmtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from email.mime.base import MIMEBase
from email import encoders


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