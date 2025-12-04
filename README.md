# TopTier Technologies MSP Website

**Professional IT Services Platform for Business & Residential Customers**

---

## 🎯 Project Overview

TopTier Technologies (tttmsp.com) is a comprehensive managed IT services platform serving both **business** and **residential** customers across Florida & Georgia. The site features intelligent pricing tiers, interactive questionnaires, service builders, and integrated Stripe payment processing.

### Technology Stack

- **Frontend**: React 19 with React Router DOM
- **UI Framework**: Radix UI components + Custom CSS
- **Build Tool**: Create React App (CRA) with CRACO
- **Styling**: TailwindCSS + Custom CSS modules
- **Animations**: Spline 3D, Custom animations
- **Payment**: Stripe Integration
- **Icons**: Lucide React

---

## 📊 Current Site Structure

### Total Pages: 25

#### **Business Theme (13 pages)**
- Home (`/`)
- Business Plans (`/business-plans`)
- Plan Selector (`/plan-selector`)
- Questionnaire - Core+ (`/questionnaire-core-plus`)
- Questionnaire - Premium (`/questionnaire-premium`)
- Enterprise Discovery (`/enterprise-discovery`)
- Services (`/services`)
- Strategic Services (`/strategic-services`)
- IT Services (`/it-services`)
- Cybersecurity (`/cybersecurity`)
- Cloud Infrastructure (`/cloud-infrastructure`)
- IT Solutions (`/it-solutions`)
- About (`/about`)

#### **Residential Theme (11 pages)**
- Residential Home (`/residential`)
- HomeCare Basic (`/residential/homecare-basic`)
- HomeCare Plus (`/residential/homecare-plus`)
- HomeCare Elite (`/residential/homecare-elite`)
- Residential Services (`/residential/services`)
- How It Works (`/residential/how-it-works`)
- Antivirus (`/residential/antivirus`)
- Backup Services (`/residential/backup`)
- Remote Support (`/residential/remote-support`)
- Residential About (`/residential/about`)

#### **Payment & Integration (1 page)**
- Payment Success (`/payment/success`)
- Stripe Integration (`/stripe-integration`)

---

## 🏗️ Architecture

```
/MSP
├── backend/                  # Backend services (placeholder)
├── frontend/                 # React application
│   ├── public/
│   │   └── images/          # Static assets, logos
│   ├── src/
│   │   ├── components/      # Reusable components
│   │   │   ├── ui/         # Radix UI components
│   │   │   ├── Navbar.jsx
│   │   │   ├── BusinessFooter.jsx
│   │   │   ├── ResidentialFooter.jsx
│   │   │   ├── ChatWidget.jsx
│   │   │   ├── ServiceCard.jsx
│   │   │   ├── PricingSummary.jsx
│   │   │   └── ...
│   │   ├── pages/          # Route components
│   │   │   ├── Home.jsx
│   │   │   ├── BusinessPlans.jsx
│   │   │   ├── Residential.jsx
│   │   │   └── ...
│   │   ├── utils/          # Utility functions
│   │   │   └── payment.js  # Stripe integration
│   │   ├── App.js          # Main app + routing
│   │   ├── index.js        # Entry point
│   │   └── mock.js         # Mock data (pricing, plans)
│   └── package.json
└── tests/                   # Test files
```

---

## 💰 Current Pricing Structure

### **Residential Plans** (HomeCare)

| Plan | Price | Target Audience |
|------|-------|----------------|
| **HomeCare Basic** | $50-$179/mo | Remote/home-office users |
| **HomeCare Plus** | $179-$279/mo | Families & home offices (Popular) |
| **HomeCare Elite** | $899-$1,799/mo | High-end homes & executives |

### **Business Plans**

| Tier | Price Range | Target Audience |
|------|-------------|----------------|
| **SMB Essential** | $1,500-$3,000/mo | Small businesses |
| **Professional** | $3,000-$6,000/mo | Growing businesses (Recommended) |
| **Enterprise Compliant** | $6,000+/mo | Large organizations |

### **Business Simplified Pricing** (Business Plans Page)
- **Business Plan**: $99 base + $5/user/month
- **Property Management**: $199 base + $25/site/month

---

## 🔄 User Flows

### Business User Journey

1. **Landing** → Home page (`/`)
2. **Explore Services** → Services page (`/services`)
3. **Choose Path**:
   - **Option A**: Plan Selector → Questionnaire (Core+ or Premium) → Result/Discovery
   - **Option B**: Business Plans → Interactive calculator → Get Started
4. **Conversion** → Service Request Form or Phone Call

### Residential User Journey

1. **Landing** → Residential page (`/residential`)
2. **Browse Plans**:
   - HomeCare Basic
   - HomeCare Plus (Popular)
   - HomeCare Elite
3. **Add to Cart** → Select addons → Checkout (Stripe)
4. **Conversion** → Payment Success page

---

## 📄 Page Breakdown

### **HOME PAGE** (`/`)
**Purpose**: Main landing page showcasing TopTier Technologies' value proposition

**Key Sections**:
- Hero with CTA ("Build Your Custom Plan", "Call Us")
- Features (Security, Response Time, Hybrid Solutions, Transparent Pricing)
- Why Choose Us (Transparency, Expertise, Innovation)
- Service Comparison
- Metrics (99.9% Uptime, <15min Response, 24/7 Support)
- Trust Badges (Microsoft, Fortinet, Dell, Cisco)

**CTAs**:
- Primary: Navigate to Services
- Secondary: Phone call (850) 610-3889

---

### **PLAN SELECTOR** (`/plan-selector`)
**Purpose**: Interactive questionnaire system to guide customers to right tier

**Flow**:
- Simple question: "How many people work at your company?"
- Routes to:
  - 1-10 users → Core+ Questionnaire
  - 11-50 users → Premium Questionnaire
  - 50+ users → Enterprise Discovery

**Components**: Question cards with radio buttons

---

### **QUESTIONNAIRE - CORE+** (`/questionnaire-core-plus`)
**Purpose**: Qualify small/medium businesses for Core+ tier

**Questions** (5 total):
1. Business type (SOHO, Small, Medium)
2. Current IT support
3. Tech comfort level
4. Biggest IT challenge
5. Timeline for service

**Scoring Algorithm**:
- Business size: 30 points
- IT support: 20 points
- Tech comfort: 25 points
- Pain points: 25 points
- Total: 100 points

**Result Tiers**:
- 70+ points → Core+ Plan recommended
- 50-69 points → Discovery call suggested
- <50 points → Not a good fit

---

### **QUESTIONNAIRE - PREMIUM** (`/questionnaire-premium`)
**Purpose**: Qualify medium/large businesses for Premium tier

**Additional Questions**:
- Compliance requirements (HIPAA, SOC2)
- Critical systems
- Disaster recovery needs

**Result Tiers**:
- 80+ points → Premium Plan recommended
- 60-79 points → Discovery call
- <60 points → Core+ recommended instead

---

### **ENTERPRISE DISCOVERY** (`/enterprise-discovery`)
**Purpose**: Custom consultation for large enterprises (50+ users)

**Features**:
- Discovery call scheduling
- Custom requirements form
- Dedicated account manager
- White-glove service messaging

---

### **BUSINESS PLANS** (`/business-plans`)
**Purpose**: Simple calculator-based pricing for business customers

**Interactive Elements**:
- Slider: Number of users (10-200)
- Price calculation: $99 + ($5 × users)
- Property management slider: $199 + ($25 × sites)

**Features Included**:
- 24/7 support
- 90-day money-back guarantee
- All business essentials

---

### **SERVICES** (`/services`)
**Purpose**: Service catalog and custom plan builder

**Service Categories** (from `mock.js`):
1. **Strategic Services** ($400-$800/mo)
   - IT Strategy & Budgeting
   - IT Governance & Assessments
   - Project Management & Transitions
   - Inventory Management & Analytics

2. **IT Services** ($600-$1,200/mo)
   - 24×7 Network Support
   - Server Support
   - Helpdesk Support
   - SQL Database & Documentation

3. **Cybersecurity** ($1,000-$1,800/mo)
   - SOC 24×7 Monitoring
   - MDR & EDR Solutions
   - AI Threat Detection
   - Backup & Disaster Recovery

4. **Cloud & Infrastructure** ($1,100-$2,000/mo)
   - Azure & O365 Migration
   - Cloud Hosting & Management
   - Network Design & Low Voltage Cabling
   - Server Refresh / Upgrades

**Functionality**: Checkbox builder → Calculate total → Request quote

---

### **RESIDENTIAL** (`/residential`)
**Purpose**: Main landing page for residential customers

**Key Features**:
- Hero with network animation
- Three plan tiers (Basic, Plus, Elite)
- Add-to-cart functionality
- Shopping cart with addons
- Service request form
- PC Build form (custom builds)

**Addons Available**:
- Extra support hours
- Additional backup storage
- MDR (Managed Detection & Response)
- Wi-Fi AP management
- 24×7 SOC relay

---

### **HOMECARE BASIC** (`/residential/homecare-basic`)
**Purpose**: Detail page for entry-level residential plan

**Pricing**: $50-$80/month

**Features**:
- Remote support for basic tech issues
- Virus/malware removal
- Software installation guidance
- Email setup & troubleshooting
- Password recovery
- Standard business hours (9 AM - 5 PM EST)

**Addons**:
- Additional device support: $15/mo per device
- Priority support upgrade: $25/mo
- On-site visit: $125 per visit

---

### **HOMECARE PLUS** (`/residential/homecare-plus`)
**Purpose**: Most popular residential plan (marked with badge)

**Pricing**: $179-$279/month

**Features**:
- Everything in Basic
- 1 on-site visit/month (1 hr)
- Endpoint backup with version history
- Annual PC tune-up
- Immutable backup option
- 4-hour response time

**Ideal For**: Families & home offices needing preventive care + on-site help

---

### **HOMECARE ELITE** (`/residential/homecare-elite`)
**Purpose**: Premium concierge-level residential service

**Pricing**: $899-$1,799/month

**Features**:
- Concierge scheduling
- Up to 8 on-site hrs/month
- Full home network & IoT management
- AV/EDR protection
- Camera/NVR maintenance
- 1-hour response time (8×5)
- Quarterly restore tests

**Ideal For**: High-end homes & executives

---

### **SERVICE DETAIL PAGES** (Antivirus, Backup, Remote Support)

**Common Structure**:
- Service hero section
- What's included
- How it works
- Pricing tiers
- CTA to main residential page

---

### **PAYMENT SUCCESS** (`/payment/success`)
**Purpose**: Confirmation page after successful Stripe payment

**Content**:
- Success message
- Order summary
- Next steps
- Support contact info

---

## 🧩 Key Components

### **Navbar.jsx**
**Purpose**: Adaptive navigation bar

**Types**:
- `type="home"` - Simple navigation (Home, Residential, Business Plans)
- `type="business"` - Business navigation with dropdowns
- `type="residential"` - Residential navigation with plan dropdowns

**Features**:
- Logo click → Navigate to home
- Phone number CTA
- Dropdown menus on hover

---

### **BusinessFooter.jsx & ResidentialFooter.jsx**
**Purpose**: Theme-specific footers

**Sections**:
- Company info
- Quick links
- Services
- Contact information
- Social media
- Copyright

---

### **ServiceCard.jsx**
**Purpose**: Reusable service display card

**Props**:
- Service name
- Description
- Price
- Icon
- Features list

---

### **ServiceComparison.jsx**
**Purpose**: Side-by-side tier comparison table

**Features**:
- Feature matrix
- Pricing display
- Recommended badges
- CTA buttons

---

### **PricingSummary.jsx**
**Purpose**: Cart/summary component for service builder

**Features**:
- Selected services list
- Price calculation
- Total display
- Remove items
- Submit quote request

---

### **ChatWidget.jsx**
**Purpose**: Live chat integration (placeholder)

**Future**: Integrate with Intercom, Drift, or custom chat

---

### **CallbackForm.jsx**
**Purpose**: Request callback form

**Fields**:
- Name
- Phone
- Email
- Preferred time
- Message

---

### **ServiceRequestForm.jsx**
**Purpose**: General service request form

**Fields**:
- Contact info
- Service type
- Description
- Urgency level

---

### **FloatingActionButton.jsx**
**Purpose**: Sticky CTA button

**Actions**:
- Call now
- Request quote
- Live chat

---

### **Animations**
- **TechnicianAnimation.jsx** - Animated technician graphic
- **RacingBlueLight.jsx** - Animated light effect
- **NetworkAnimation.jsx** - 3D network visualization (Spline)

---

## 🎨 Design System

### Colors (CSS Variables)

```css
--brand-primary: #0066cc (Blue)
--brand-secondary: #00a8e8 (Light Blue)
--bg-primary: #ffffff (White)
--bg-secondary: #f8f9fa (Light Gray)
--text-primary: #1a1a1a (Dark)
--text-secondary: #666666 (Gray)
--border-subtle: #e0e0e0 (Border)
--success: #28a745 (Green)
--warning: #ffc107 (Yellow)
--error: #dc3545 (Red)
```

### Typography
- **Headings**: System font stack (Inter, SF Pro, Segoe UI)
- **Body**: 16px base
- **Titles**: 32-48px
- **Subtitles**: 18-24px

### Spacing
- **Section padding**: 80px vertical
- **Component padding**: 20-40px
- **Grid gap**: 20-30px

---

## 🔌 Integrations

### Stripe Payment
**File**: `src/utils/payment.js`

**Function**: `initiateCheckout(planId, addons)`

**Flow**:
1. User selects plan + addons
2. Click "Checkout"
3. Redirect to Stripe Checkout
4. Success → `/payment/success`
5. Cancel → Back to plans page

**Price IDs**: Stored in environment variables (not in repo)

---

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Mobile Optimizations
- Hamburger menu on Navbar
- Stacked layouts
- Touch-friendly buttons (min 44px)
- Simplified animations

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- Yarn package manager

### Installation

```bash
# Clone the repository
git clone <repo-url>
cd MSP

# Install dependencies
cd frontend
yarn install

# Start development server
yarn start
```

### Build for Production

```bash
yarn build
```

---

## 🔧 Configuration

### Environment Variables
Create `.env` file in `/frontend`:

```env
REACT_APP_STRIPE_PUBLIC_KEY=pk_test_...
REACT_APP_API_URL=https://api.tttmsp.com
```

---

## 📝 Data Management

### Mock Data (`src/mock.js`)

**Contains**:
- `serviceCategories` - All business services with pricing
- `pricingTiers` - Tier definitions
- `residentialPlans` - HomeCare plan details
- `trustBadges` - Partner logos
- `metrics` - Company statistics

**Usage**: Import directly into components

```javascript
import { residentialPlans, serviceCategories } from '../mock';
```

---

## 🧪 Testing

**Directory**: `/tests`

**Run tests**:
```bash
yarn test
```

---

## 🎯 Business Logic

### Questionnaire Scoring
**Location**: `QuestionnaireCorePlus.jsx`, `QuestionnairePremium.jsx`

**Algorithm**:
1. Assign points to each answer
2. Sum total score
3. Match score to tier thresholds
4. Display recommendation

### Price Calculation
**Business Plans**:
```javascript
price = basePrice + (users × pricePerUser)
```

**Residential**:
- Fixed tiers with price ranges
- Addons calculated per quantity

---

## 📊 Analytics & Tracking

**Recommended Tools**:
- Google Analytics 4
- Hotjar (heatmaps)
- Microsoft Clarity
- Facebook Pixel

**Track**:
- Page views
- Form submissions
- Button clicks
- Quote requests
- Payment conversions

---

## 🔐 Security

### Best Practices
- Never commit API keys
- Use environment variables
- Stripe webhook verification
- Input validation on forms
- HTTPS only in production

---

## 🐛 Known Issues

1. **No backend API** - Currently using mock data
2. **Stripe integration** - Price IDs need configuration
3. **Form submissions** - Need API endpoint
4. **Chat widget** - Placeholder only

---

## 📈 Future Enhancements

### Phase 1: NEW 4-TIER PRICING (Current Task)
- Update to CORE, CORE+, PREMIUM, ENTERPRISE
- Unify residential + business under one system
- See `TTTMSP_COM_MIGRATION_GUIDE.md`

### Phase 2: Backend Integration
- Build Node.js/Express API
- Connect forms to database
- Email notifications
- CRM integration

### Phase 3: Customer Portal (app.tttmsp.com)
- User authentication
- Service dashboard
- Ticket management
- Billing portal

### Phase 4: Advanced Features
- Live chat integration
- Real-time support status
- Knowledge base
- Video tutorials

---

## 👥 Team

**Development**: TopTier Technologies
**Location**: Florida & Georgia
**Contact**: (850) 610-3889

---

## 📄 License

Proprietary - TopTier Technologies

---

## 📚 Additional Documentation

- `TTTMSP_COM_MIGRATION_GUIDE.md` - Guide for updating to new 4-tier pricing
- `test_result.md` - Testing documentation

---

## 🆘 Support

**Issues**: Contact development team
**Phone**: (850) 610-3889
**Email**: support@tttmsp.com

---

**Last Updated**: December 2025
**Version**: 1.0.0 (Pre-4-tier-migration)
