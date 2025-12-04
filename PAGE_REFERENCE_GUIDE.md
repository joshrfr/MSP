# Page-by-Page Reference Guide

**Complete Navigation & Content Reference for tttmsp.com**

---

## 📋 Quick Navigation Index

### Business Pages
1. [Home (/)](#home-)
2. [Services (/services)](#services-services)
3. [Business Plans (/business-plans)](#business-plans-business-plans)
4. [Plan Selector (/plan-selector)](#plan-selector-plan-selector)
5. [Questionnaire Core+ (/questionnaire-core-plus)](#questionnaire-core-questionnaire-core-plus)
6. [Questionnaire Premium (/questionnaire-premium)](#questionnaire-premium-questionnaire-premium)
7. [Enterprise Discovery (/enterprise-discovery)](#enterprise-discovery-enterprise-discovery)
8. [Strategic Services (/strategic-services)](#strategic-services-strategic-services)
9. [IT Services (/it-services)](#it-services-it-services)
10. [Cybersecurity (/cybersecurity)](#cybersecurity-cybersecurity)
11. [Cloud Infrastructure (/cloud-infrastructure)](#cloud-infrastructure-cloud-infrastructure)
12. [IT Solutions (/it-solutions)](#it-solutions-it-solutions)
13. [About (/about)](#about-about)

### Residential Pages
14. [Residential (/residential)](#residential-residential)
15. [HomeCare Basic (/residential/homecare-basic)](#homecare-basic-residentialhomecare-basic)
16. [HomeCare Plus (/residential/homecare-plus)](#homecare-plus-residentialhomecare-plus)
17. [HomeCare Elite (/residential/homecare-elite)](#homecare-elite-residentialhomecare-elite)
18. [Residential Services (/residential/services)](#residential-services-residentialservices)
19. [How It Works (/residential/how-it-works)](#how-it-works-residentialhow-it-works)
20. [Antivirus (/residential/antivirus)](#antivirus-residentialantivirus)
21. [Backup Services (/residential/backup)](#backup-services-residentialbackup)
22. [Remote Support (/residential/remote-support)](#remote-support-residentialremote-support)
23. [Residential About (/residential/about)](#residential-about-residentialabout)

### Payment & Integration
24. [Payment Success (/payment/success)](#payment-success-paymentsuccess)
25. [Stripe Integration (/stripe-integration)](#stripe-integration-stripe-integration)

---

## Business Pages

### **HOME** (`/`)

**File**: `src/pages/Home.jsx`

**Navigation**: `<Navbar type="home" />`

**Layout**: Full-width hero, multi-section scrollable page

#### Sections

##### 1. Hero Section
- **Title**: "Your Trusted IT Partner Across Florida & Georgia"
- **Tagline**: "Quality at the Heart, Innovation Beyond Boundaries"
- **Subtitle**: Description of services and transparency
- **CTAs**:
  - Primary: "Build Your Custom Plan" → Navigate to `/services`
  - Secondary: "Call (850) 610-3889" → Phone call

##### 2. Features Grid
Four feature cards:
- **Enterprise-Grade Security**: SOC 24×7 monitoring, AI threat detection
- **Lightning-Fast Response**: <15 min response time, 24×7 support
- **On-Premises & Cloud Solutions**: Hybrid infrastructure management
- **Transparent Pricing**: No hidden fees, upfront costs

##### 3. Why Choose Us
Three columns:
- **Complete Transparency**: No surprise fees, detailed reporting, clear SLAs
- **Proven Expertise**: Microsoft Partner, Fortinet specialist, Dell & Cisco partnerships
- **Innovation First**: AI-powered detection, cloud-native, automation

##### 4. Service Comparison
`<ServiceComparison />` component showing tier matrix

##### 5. Metrics Banner
- 99.9% Uptime Guarantee
- <15 min Response Time
- 100% Client Satisfaction
- 24/7 Support Available

##### 6. Trust Badges
Partner logos: Microsoft, Fortinet, Dell, Cisco

##### 7. Service Request Form
`<ServiceRequestForm />` - Contact form for inquiries

##### 8. Callback Form
`<CallbackForm />` - Request callback scheduling

**Footer**: `<BusinessFooter />`

**Components Used**:
- TechnicianAnimation
- RacingBlueLight
- ServiceComparison
- ChatWidget

**URL Parameters**: None

**State Management**: None (static content)

---

### **SERVICES** (`/services`)

**File**: `src/pages/Services.jsx`

**Navigation**: `<Navbar type="business" />`

**Purpose**: Interactive service builder - customers select services to build custom plan

#### Sections

##### 1. Hero Section
- **Title**: "Build Your Custom IT Plan"
- **Subtitle**: "Select the services you need. See your price in real-time."
- **CTA**: Scroll to service builder

##### 2. Service Builder (Main Feature)

**Layout**: Two-column layout
- Left: Service selection grid
- Right: Pricing summary (sticky)

**Service Categories** (from `mock.js`):

###### Strategic Services ($400-$800/mo)
- IT Strategy & Budgeting - $500/mo
- IT Governance & Assessments - $750/mo
- Project Management & Transitions - $800/mo
- Inventory Management & Analytics - $400/mo

###### IT Services ($600-$1,200/mo)
- 24×7 Network Support - $1,200/mo
- Server Support - $900/mo
- Helpdesk Support - $600/mo
- SQL Database & Documentation - $700/mo

###### Cybersecurity ($1,000-$1,800/mo)
- SOC 24×7 Monitoring - $1,500/mo
- MDR & EDR Solutions - $1,300/mo
- AI Threat Detection - $1,800/mo
- Backup & Disaster Recovery - $1,000/mo

###### Cloud & Infrastructure ($1,100-$2,000/mo)
- Azure & O365 Migration - $2,000/mo
- Cloud Hosting & Management - $1,400/mo
- Network Design & Low Voltage Cabling - $1,100/mo
- Server Refresh / Upgrades - $1,500/mo

**Interaction Flow**:
1. User clicks checkboxes to select services
2. Right sidebar updates with running total
3. User can remove services from summary
4. Click "Request Quote" → Opens contact form

**State Management**:
```javascript
const [selectedServices, setSelectedServices] = useState([]);
const [showSummary, setShowSummary] = useState(false);
```

**Components Used**:
- ServiceCard (multiple instances)
- PricingSummary
- ServiceRequestForm

**Footer**: `<BusinessFooter />`

---

### **BUSINESS PLANS** (`/business-plans`)

**File**: `src/pages/BusinessPlans.jsx`

**Navigation**: `<Navbar type="business" />`

**Purpose**: Simplified per-user pricing calculator

#### Sections

##### 1. Hero Section
- **Title**: "Simple Plans for Any Size Business"
- **Subtitle**: "No hidden fees. Simple prices. Just tell us how many people work for you."
- **CTAs**:
  - View Plans (scroll)
  - Call Us

##### 2. Business Plans Calculator

**Formula**: `$99 base + ($5 × users)`

**Interactive Elements**:
- Slider: 10-200 users
- Real-time price calculation
- User count display

**Example Pricing**:
- 10 users: $149/mo
- 50 users: $349/mo
- 100 users: $599/mo
- 200 users: $1,099/mo

**Features Included** (same for all sizes):
- 24/7 helpdesk support
- Security monitoring
- Cloud email support
- Monthly reporting
- 90-day money-back guarantee

##### 3. Property Management Plans

**Formula**: `$199 base + ($25 × sites)`

**Interactive Elements**:
- Slider: 1-50 sites
- Real-time price calculation

**Example Pricing**:
- 10 sites: $449/mo
- 25 sites: $824/mo
- 50 sites: $1,449/mo

**Features Included**:
- Multi-site management
- Centralized monitoring
- Tenant support
- Property owner portal

**State Management**:
```javascript
const [businessUsers, setBusinessUsers] = useState([50]);
const [propertyManagement, setPropertyManagement] = useState([10]);
```

**CTAs**: "Get Started" buttons → Contact form

**Footer**: `<BusinessFooter />`

---

### **PLAN SELECTOR** (`/plan-selector`)

**File**: `src/pages/PlanSelector.jsx`

**Navigation**: `<Navbar type="business" />`

**Purpose**: Route customers to appropriate questionnaire based on company size

#### Flow

**Question**: "How many people work at your company?"

**Options**:
1. **1-10 employees** → Navigate to `/questionnaire-core-plus`
2. **11-50 employees** → Navigate to `/questionnaire-premium`
3. **50+ employees** → Navigate to `/enterprise-discovery`

**UI Elements**:
- Three large option cards
- Icons for each size category
- Hover effects
- Clear descriptions

**Routing Logic**:
```javascript
const handleSelection = (range) => {
  if (range === '1-10') navigate('/questionnaire-core-plus');
  else if (range === '11-50') navigate('/questionnaire-premium');
  else navigate('/enterprise-discovery');
};
```

**Footer**: `<BusinessFooter />`

---

### **QUESTIONNAIRE CORE+** (`/questionnaire-core-plus`)

**File**: `src/pages/QuestionnaireCorePlus.jsx`

**Navigation**: `<Navbar type="business" />`

**Purpose**: Qualify small/medium businesses (1-50 employees) for Core+ tier

#### Questions (5 total)

##### Q1: Business Type
- Individual / SOHO (1-2 people)
- Small business (3-10 employees)
- Medium business (11-50 employees)
- Something else

##### Q2: Current IT Support
- No IT support (I do it myself)
- Part-time IT person
- Full-time IT staff
- Another IT service company
- Mix of above

##### Q3: Tech Comfort Level
- 1 - Can't turn it on/off
- 2 - Basic (email, web browsing)
- 3 - Intermediate (troubleshoot basics)
- 4 - Advanced (can manage devices)

##### Q4: Biggest IT Challenge
- Device/network outages (things break a lot)
- Security/ransomware concerns
- Can't find good IT support
- Current IT support is too expensive
- Need compliance help (HIPAA, etc)
- Other issue

##### Q5: Timeline
- Immediately (this week)
- Soon (this month)
- Planning ahead (1-3 months)
- Just exploring

#### Scoring Algorithm

**Total Points**: 100

**Business Size** (30 points max):
- Small business: +30
- SOHO: +10
- Medium business: +25
- Other: -5

**IT Support** (20 points max):
- Another MSP: +15
- Part-time: +10
- None: +5

**Tech Comfort** (25 points max):
- Level 3-4: +25
- Level 2: +15
- Level 1: +5

**Pain Points** (25 points max):
- Security concerns: +25
- Can't find support: +20
- Too expensive: +15
- Outages: +15
- Compliance: +20

#### Results

**70-100 points**: ✅ Core+ Plan Recommended
- Shows Core+ features
- Pricing: $65-85/user
- CTA: "Get Started with Core+"

**50-69 points**: 📞 Discovery Call Suggested
- "Let's talk about your needs"
- Schedule call form
- May recommend Core+ or Premium

**0-49 points**: ❌ Not a Good Fit
- "We might not be the best fit"
- Suggest alternatives or DIY resources

**UI Flow**:
1. Question card appears
2. User selects answer
3. Next button appears
4. Progress indicator updates
5. After Q5 → Calculate score → Show result

**State Management**:
```javascript
const [currentQuestion, setCurrentQuestion] = useState(0);
const [answers, setAnswers] = useState({});
const [submitted, setSubmitted] = useState(false);
const [result, setResult] = useState(null);
```

**Footer**: `<BusinessFooter />`

---

### **QUESTIONNAIRE PREMIUM** (`/questionnaire-premium`)

**File**: `src/pages/QuestionnairePremium.jsx`

**Navigation**: `<Navbar type="business" />`

**Purpose**: Qualify medium/large businesses (11-250 employees) for Premium tier

#### Additional Questions (Beyond Core+)

##### Q6: Compliance Requirements
- HIPAA (Healthcare)
- SOC 2 (SaaS/Tech)
- PCI DSS (Payment processing)
- GDPR (EU customers)
- None currently
- Not sure

##### Q7: Critical Systems
- On-premises servers
- Cloud infrastructure
- Hybrid environment
- Legacy systems
- Mostly SaaS

##### Q8: Disaster Recovery
- Have DR plan
- Need DR plan
- Don't know what DR is
- DR in place but outdated

#### Scoring Algorithm

**Total Points**: 125 (extended from Core+)

**Additional Scoring**:
- Compliance needs: +25
- Critical systems complexity: +15
- DR needs: +10

#### Results

**85-125 points**: ✅ Premium Plan Recommended
- Shows Premium features
- Pricing: $95-125/user
- Includes compliance support
- CTA: "Get Started with Premium"

**65-84 points**: 📞 Discovery Call
- May fit Premium or Core+
- Schedule consultation

**0-64 points**: ➡️ Core+ Recommended
- "Core+ might be a better fit"
- Link to Core+ details

**Footer**: `<BusinessFooter />`

---

### **ENTERPRISE DISCOVERY** (`/enterprise-discovery`)

**File**: `src/pages/EnterpriseDiscovery.jsx`

**Navigation**: `<Navbar type="business" />`

**Purpose**: Custom consultation for large enterprises (50+ employees)

#### Sections

##### 1. Hero
- **Title**: "Enterprise IT Solutions Tailored for You"
- **Subtitle**: "Custom solutions for organizations with complex needs"

##### 2. What to Expect
- Discovery call (60-90 minutes)
- Infrastructure assessment
- Compliance review
- Custom proposal
- Dedicated account manager

##### 3. Discovery Call Form

**Fields**:
- Company name
- Contact person
- Email
- Phone
- Number of employees
- Number of locations
- Current IT setup
- Compliance requirements
- Timeline
- Additional notes

**Submission**: Triggers sales team notification

##### 4. Enterprise Features
- SOC 24×7 Monitoring
- AI Threat Detection
- Custom SLAs
- Dedicated support team
- White-glove service
- Compliance management
- Strategic IT planning

##### 5. Case Studies (if available)
Examples of enterprise clients served

**Footer**: `<BusinessFooter />`

---

### **STRATEGIC SERVICES** (`/strategic-services`)

**File**: `src/pages/StrategicServices.jsx`

**Navigation**: `<Navbar type="business" />`

**Purpose**: Detail page for strategic IT services

#### Content

##### Services Offered
1. **IT Strategy & Budgeting**
   - Long-term IT planning
   - Budget forecasting
   - Technology roadmap
   - Price: $500/mo

2. **IT Governance & Assessments**
   - Policy development
   - Compliance audits
   - Risk assessments
   - Price: $750/mo

3. **Project Management & Transitions**
   - Migration planning
   - Vendor management
   - Change management
   - Price: $800/mo

4. **Inventory Management & Analytics**
   - Asset tracking
   - License management
   - Usage analytics
   - Price: $400/mo

**CTAs**: Request quote, Call now

**Footer**: `<BusinessFooter />`

---

### **IT SERVICES** (`/it-services`)

**File**: `src/pages/ITServices.jsx`

**Navigation**: `<Navbar type="business" />`

#### Services Offered

1. **24×7 Network Support** - $1,200/mo
2. **Server Support** - $900/mo
3. **Helpdesk Support** - $600/mo
4. **SQL Database & Documentation** - $700/mo

**Footer**: `<BusinessFooter />`

---

### **CYBERSECURITY** (`/cybersecurity`)

**File**: `src/pages/Cybersecurity.jsx`

**Navigation**: `<Navbar type="business" />`

#### Services Offered

1. **SOC 24×7 Monitoring** - $1,500/mo
2. **MDR & EDR Solutions** - $1,300/mo
3. **AI Threat Detection** - $1,800/mo
4. **Backup & Disaster Recovery** - $1,000/mo

**Footer**: `<BusinessFooter />`

---

### **CLOUD INFRASTRUCTURE** (`/cloud-infrastructure`)

**File**: `src/pages/CloudInfrastructure.jsx`

**Navigation**: `<Navbar type="business" />`

#### Services Offered

1. **Azure & O365 Migration** - $2,000/mo
2. **Cloud Hosting & Management** - $1,400/mo
3. **Network Design & Low Voltage Cabling** - $1,100/mo
4. **Server Refresh / Upgrades** - $1,500/mo

**Footer**: `<ResidentialFooter />`

---

### **IT SOLUTIONS** (`/it-solutions`)

**File**: `src/pages/ITSolutions.jsx`

**Navigation**: `<Navbar type="business" />`

**Purpose**: Overview of comprehensive IT solutions

**Footer**: `<BusinessFooter />`

---

### **ABOUT** (`/about`)

**File**: `src/pages/About.jsx`

**Navigation**: `<Navbar type="business" />`

#### Sections

1. **Company Overview**
   - Founded: 2010
   - Location: Florida & Georgia
   - Mission statement

2. **Our Team**
   - Certified technicians
   - Partnerships (Microsoft, Fortinet, Dell, Cisco)

3. **Values**
   - Transparency
   - Quality
   - Innovation

4. **Contact**

**Footer**: `<BusinessFooter />`

---

## Residential Pages

### **RESIDENTIAL** (`/residential`)

**File**: `src/pages/Residential.jsx`

**Navigation**: `<Navbar type="residential" />`

**Purpose**: Main landing page for residential/home office customers

#### Sections

##### 1. Hero Section
- **Title**: "Professional IT Support for Your Home"
- **Subtitle**: "From basic remote support to full concierge service"
- **Animation**: `<NetworkAnimation />` (3D network visual)

##### 2. Service Request Form
Quick inquiry form for general questions

##### 3. HomeCare Plans (Main Feature)

**Three Tiers**:

###### HomeCare Basic
- **Price**: $50-$179/mo
- **Badge**: "Best for Remote Workers"
- **Ideal For**: Remote/home-office users
- **Key Features**:
  - 30 mins free remote support/month
  - Antivirus protection
  - System monitoring
  - 5GB cloud backup
  - Email & phone support
- **SLA**: Next business day response
- **Onboarding**: $49 one-time
- **Addons**:
  - Extra support hours: $45/hr
  - Additional backup: $10/10GB

###### HomeCare Plus (Popular)
- **Price**: $179-$279/mo
- **Badge**: "Most Popular" (highlighted)
- **Ideal For**: Families & home offices
- **Key Features**:
  - Everything in Basic
  - 1 on-site visit/month (1 hr)
  - Endpoint backup with version history
  - Annual PC tune-up
  - Immutable backup option
- **SLA**: 4 business hours response
- **Onboarding**: $99 per household
- **Addons**:
  - MDR: $18/device
  - Wi-Fi AP management: $10/site

###### HomeCare Elite
- **Price**: $899-$1,799/mo
- **Badge**: "Premium Concierge"
- **Ideal For**: High-end homes & executives
- **Key Features**:
  - Concierge scheduling
  - Up to 8 on-site hrs/month
  - Full home network & IoT management
  - AV/EDR protection
  - Camera/NVR maintenance
- **SLA**: 1-hour response (8×5), after-hours by retainer
- **Onboarding**: $399 per site
- **Addons**:
  - 24×7 SOC relay: $249/site/mo
  - Advanced MDR: $29/device

##### 4. Shopping Cart Feature

**Flow**:
1. User clicks "Add to Cart" on plan
2. Modal appears showing addon selection
3. User selects addons (checkboxes with quantity)
4. Confirms add to cart
5. Floating cart button appears (bottom right)
6. Click cart → View cart sidebar
7. Click "Checkout" → Stripe payment

**State Management**:
```javascript
const [cart, setCart] = useState([]);
const [showCart, setShowCart] = useState(false);
const [selectedPlan, setSelectedPlan] = useState(null);
const [addons, setAddons] = useState({});
```

**Cart Features**:
- Multiple items
- Quantity adjustment
- Remove items
- Total calculation
- Checkout integration

##### 5. PC Build Form
Custom PC build request form for gaming/workstations

##### 6. Reviews Widget
Customer testimonials carousel

**Components Used**:
- NetworkAnimation
- ServiceRequestForm
- PCBuildForm
- ReviewsWidget
- FloatingActionButton (when cart has items)

**Footer**: `<ResidentialFooter />`

---

### **HOMECARE BASIC** (`/residential/homecare-basic`)

**File**: `src/pages/HomeCareBasic.jsx`

**Navigation**: `<Navbar type="residential" />`

**Purpose**: Detailed page for entry-level plan

#### Sections

##### 1. Hero
- Badge: "Perfect for Basic Home Users"
- Title: "HomeCare Basic"
- Price: $50-$80/month
- Subtitle: "Essential remote IT support"
- CTAs:
  - Get Started
  - Call (850) 610-3889

##### 2. What's Included
- Remote support for basic tech issues
- Virus and malware removal assistance
- Software installation guidance
- Email setup and troubleshooting
- Basic network connectivity help
- Password recovery support
- Standard business hours support (9 AM - 5 PM EST)
- Email ticket system access

##### 3. How It Works
1. Sign up online
2. Initial setup call
3. Install monitoring software
4. Access support when needed

##### 4. Addons
- Additional Device Support: $15/mo per device
- Priority Support Upgrade: $25/mo
- On-Site Visit (if needed): $125 per visit

##### 5. Comparison
Link to compare with Plus and Elite plans

**CTAs Throughout**: Get Started, Call Now

**Footer**: `<ResidentialFooter />`

---

### **HOMECARE PLUS** (`/residential/homecare-plus`)

**File**: `src/pages/HomeCarePlus.jsx`

**Navigation**: `<Navbar type="residential" />`

**Purpose**: Most popular residential plan detail page

#### Sections

##### 1. Hero
- Badge: "Most Popular Choice"
- Title: "HomeCare Plus"
- Price: $179-$279/month
- Subtitle: "Preventive care + on-site support"

##### 2. What's Included
- Everything in HomeCare Basic
- 1 on-site visit per month (1 hour)
- Endpoint backup with version history
- Annual PC tune-up and optimization
- Immutable backup option for NAS/VMs
- Semi-annual test restore
- 4-hour response time SLA
- Same-day recovery commitment

##### 3. Ideal For
- Families with multiple devices
- Home offices with business needs
- Users who prefer hands-on support
- Anyone wanting preventive maintenance

##### 4. Addons
- MDR (Managed Detection & Response): $18/device
- Wi-Fi AP management: $10/site
- Additional on-site hours: $85/hr

##### 5. Success Stories
Examples of how Plus plan helps families/home offices

**Footer**: `<ResidentialFooter />`

---

### **HOMECARE ELITE** (`/residential/homecare-elite`)

**File**: `src/pages/HomeCareElite.jsx`

**Navigation**: `<Navbar type="residential" />`

**Purpose**: Premium concierge-level service detail page

#### Sections

##### 1. Hero
- Badge: "Premium Concierge Service"
- Title: "HomeCare Elite"
- Price: $899-$1,799/month
- Subtitle: "White-glove IT care for your home"

##### 2. What's Included
- Concierge scheduling (dedicated contact)
- Up to 8 on-site hours per month
- Full home network management
- IoT device integration and management
- AV/EDR protection (Advanced security)
- Security camera and NVR maintenance
- 1-hour response time (8×5)
- After-hours support by retainer
- Quarterly restore tests
- Priority incident response

##### 3. Ideal For
- High-end homes with complex setups
- Executives working from home
- Tech-heavy households (smart home, cameras, NAS, servers)
- Users who want concierge-level service

##### 4. Addons
- 24×7 SOC relay: $249/site/mo (24/7 security monitoring)
- Advanced MDR: $29/device
- Additional on-site hours: $125/hr

##### 5. Concierge Features
- Dedicated support contact
- Proactive maintenance scheduling
- Technology consultation
- Vendor coordination

**Footer**: `<ResidentialFooter />`

---

### **RESIDENTIAL SERVICES** (`/residential/services`)

**File**: `src/pages/ResidentialServices.jsx`

**Navigation**: `<Navbar type="residential" />`

**Purpose**: Overview of all residential service offerings

#### Services Listed

1. **Antivirus Protection**
   - Details link: `/residential/antivirus`

2. **Backup Services**
   - Details link: `/residential/backup`

3. **Remote Support**
   - Details link: `/residential/remote-support`

4. **On-Site Support**
   - Included in Plus/Elite plans

5. **Network Setup**
   - Wi-Fi optimization
   - Router configuration

6. **Smart Home Integration**
   - IoT device setup
   - Automation

**Footer**: `<ResidentialFooter />`

---

### **HOW IT WORKS** (`/residential/how-it-works`)

**File**: `src/pages/HowItWorks.jsx`

**Navigation**: `<Navbar type="residential" />`

**Purpose**: Explain the residential service process

#### Steps

##### Step 1: Choose Your Plan
- Browse Basic, Plus, Elite
- Select addons
- Sign up online

##### Step 2: Initial Setup
- Schedule onboarding call
- Install monitoring software
- Configure backup
- Set preferences

##### Step 3: Ongoing Support
- Remote support available
- Scheduled on-site visits (Plus/Elite)
- Proactive monitoring
- Regular maintenance

##### Step 4: Get Help When Needed
- Email/phone support
- Ticket system
- Emergency support (Elite)

**FAQ Section**: Common questions

**Footer**: `<ResidentialFooter />`

---

### **ANTIVIRUS** (`/residential/antivirus`)

**File**: `src/pages/Antivirus.jsx`

**Navigation**: `<Navbar type="residential" />`

**Purpose**: Detail page for antivirus service

#### Content

##### What's Included
- Enterprise-grade antivirus software
- Real-time protection
- Automatic updates
- Malware removal
- Quarterly scans

##### Plans Including This
- ✅ HomeCare Basic
- ✅ HomeCare Plus
- ✅ HomeCare Elite

**CTA**: View Plans

**Footer**: `<ResidentialFooter />`

---

### **BACKUP SERVICES** (`/residential/backup`)

**File**: `src/pages/BackupServices.jsx`

**Navigation**: `<Navbar type="residential" />`

**Purpose**: Detail page for backup services

#### Content

##### What's Included
- Cloud backup
- Version history
- Automatic scheduling
- Test restores
- Immutable backups (Plus/Elite)

##### Plans Including This
- Basic: 5GB included
- Plus: Endpoint backup with version history
- Elite: Full backup with immutable option

**CTA**: View Plans

**Footer**: `<ResidentialFooter />`

---

### **REMOTE SUPPORT** (`/residential/remote-support`)

**File**: `src/pages/RemoteSupport.jsx`

**Navigation**: `<Navbar type="residential" />`

**Purpose**: Detail page for remote support

#### Content

##### What's Included
- Screen sharing support
- Remote troubleshooting
- Software installation
- Configuration help

##### Response Times
- Basic: Next business day
- Plus: 4 hours
- Elite: 1 hour

**CTA**: View Plans

**Footer**: `<ResidentialFooter />`

---

### **RESIDENTIAL ABOUT** (`/residential/about`)

**File**: `src/pages/ResidentialAbout.jsx`

**Navigation**: `<Navbar type="residential" />`

**Purpose**: About page specifically for residential customers

#### Content

- Company background
- Why we started residential services
- Our residential support team
- Service area (Florida & Georgia)
- Contact information

**Footer**: `<ResidentialFooter />`

---

## Payment & Integration Pages

### **PAYMENT SUCCESS** (`/payment/success`)

**File**: `src/pages/PaymentSuccess.jsx`

**Navigation**: `<Navbar type="residential" />`

**Purpose**: Confirmation page after successful Stripe checkout

#### Content

##### Success Message
- ✅ "Payment Successful!"
- "Thank you for choosing TopTier Technologies"

##### Order Summary
- Plan purchased
- Addons selected
- Total amount
- Billing frequency

##### Next Steps
1. Check email for confirmation
2. Expect onboarding call within 24 hours
3. Download monitoring software (link)
4. Access customer portal (future)

##### Support Contact
- Phone: (850) 610-3889
- Email: support@tttmsp.com

**URL Parameter**: `?session_id=xxx` (Stripe session ID)

**Footer**: `<ResidentialFooter />`

---

### **STRIPE INTEGRATION** (`/stripe-integration`)

**File**: `src/pages/StripeIntegration.jsx`

**Navigation**: `<Navbar type="business" />`

**Purpose**: Test/demo page for Stripe integration (likely hidden in production)

#### Content

- Stripe checkout test buttons
- Price ID testing
- Webhook simulation

**Status**: Development/testing page

**Footer**: `<BusinessFooter />`

---

## URL Structure Summary

### Business URLs
```
/                              # Home
/services                      # Service builder
/business-plans                # Per-user calculator
/plan-selector                 # Size-based routing
/questionnaire-core-plus       # Small biz questionnaire
/questionnaire-premium         # Medium biz questionnaire
/enterprise-discovery          # Enterprise inquiry
/strategic-services            # Service detail
/it-services                   # Service detail
/cybersecurity                 # Service detail
/cloud-infrastructure          # Service detail
/it-solutions                  # Service detail
/about                         # About us
```

### Residential URLs
```
/residential                   # Residential home
/residential/homecare-basic    # Plan detail
/residential/homecare-plus     # Plan detail
/residential/homecare-elite    # Plan detail
/residential/services          # Services overview
/residential/how-it-works      # Process explanation
/residential/antivirus         # Service detail
/residential/backup            # Service detail
/residential/remote-support    # Service detail
/residential/about             # About (residential)
```

### Utility URLs
```
/payment/success               # Payment confirmation
/stripe-integration            # Stripe testing
```

---

## Common Elements Across Pages

### All Pages Include:
1. Navbar (type-specific)
2. Footer (type-specific)
3. Phone number: (850) 610-3889
4. Service area: Florida & Georgia
5. Brand colors and styling

### Common CTAs:
- "Get Started"
- "Call Now"
- "Request Quote"
- "Schedule Discovery Call"

### Forms Present On:
- Home
- Services
- Residential
- Enterprise Discovery
- Contact sections

---

## Navigation Patterns

### Primary Navigation Paths

**For Business Users**:
```
Home → Services (builder) → Quote request
Home → Plan Selector → Questionnaire → Result
Home → Business Plans → Get Started
```

**For Residential Users**:
```
Home → Residential → Select plan → Add to cart → Checkout
Residential → Plan detail page → Get Started
Residential → How It Works → Plans
```

---

## Mobile Responsiveness

All pages are responsive with:
- Mobile navigation (hamburger menu)
- Stacked layouts on mobile
- Touch-friendly buttons
- Optimized images
- Simplified animations on mobile

---

**Last Updated**: December 2025
**Total Pages**: 25
**Maintained By**: TopTier Technologies Development Team
