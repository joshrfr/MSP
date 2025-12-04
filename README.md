# TTT MSP Platform

Enterprise-grade Managed Service Provider (MSP) platform with tier-based qualification system, automated billing, and third-party integrations.

---

## 📋 Project Overview

TTT MSP Platform is a comprehensive solution for managing enterprise Managed Service Provider services with three distinct service tiers:

- **Core+**: Small business IT support
- **Premium**: Mid-market infrastructure management
- **Enterprise**: Large-scale custom solutions

The platform features intelligent lead qualification, automated scoring, customer portal, and integrations with major business tools.

---

## 🏗️ Architecture

### Technology Stack

- **Backend**: NestJS 11 (TypeScript) with TypeORM
- **Frontend**: Next.js 14 (React) with Tailwind CSS
- **Database**: PostgreSQL 15
- **Deployment**: Docker Compose + Cloudflare Tunnel
- **Integrations**: Stripe, NinjaOne, QuickBooks, Calendly, SendGrid

### Services

```
Frontend (Next.js) ─────────┐
                             ├──→ Cloudflare Tunnel ──→ tttmsp.com
Backend (NestJS) ────────────┘
                             ├──→ api.tttmsp.com
PostgreSQL Database
```

---

## 📦 Database Schema

### Core Tables

#### **customers**
- `id` (UUID): Primary key
- `email` (varchar): Unique email
- `name`, `phone`, `company_name`: Contact info
- `tier` (enum): CORE_PLUS | PREMIUM | ENTERPRISE
- `stripe_customer_id`, `qbo_customer_id`, `ninjaone_org_id`: Third-party IDs
- `created_at`, `updated_at`: Timestamps

#### **subscriptions**
- `id` (UUID): Primary key
- `customer_id` (FK): Link to customer
- `stripe_subscription_id`, `plan_name`, `tier`: Plan details
- `status` (enum): ACTIVE | PAUSED | CANCELED | PAST_DUE
- `monthly_price` (decimal): Billing amount
- `next_billing_date`: Payment schedule

#### **core_plus_qualifications**
- `id` (UUID): Primary key
- `customer_email` (unique): Prospect email
- `business_type`, `current_it_support[]`, `tech_comfort_level`: Qualification inputs
- `pain_point`, `timeline`: Decision factors
- `auto_score` (0-100): Calculated score
- `qualification_status`: AUTO_APPROVED | MANUAL_REVIEW | QUALIFIED | NOT_QUALIFIED
- `sales_assigned`: Assigned rep
- `converted` (boolean): Conversion tracking

#### **premium_qualifications**
- Includes: `company_name`, `website`, `EIN`, `industry`, `employee_count`, `locations`
- IT infrastructure `items[]`, `security_posture` rating, `compliance_needs[]`
- Budget range, decision maker flag
- Similar scoring and status tracking as Core+

#### **enterprise_qualifications**
- Company info, contact details, current IT setup
- Project scope and timeline
- Custom handling (no auto-scoring)

#### **quotes**
- `id` (UUID): Primary key
- `quote_key` (unique): Shareable quote identifier
- `email`, `tier`: Quote details
- `configuration` (JSON): Custom options
- `price_monthly` (decimal): Monthly cost
- `status`: DRAFT | SENT | ACCEPTED | REJECTED | EXPIRED

---

## 🎯 Qualification Scoring Algorithms

### Core+ Scoring (0-100)

| Factor | Criteria | Points |
|--------|----------|--------|
| **Business Type** | small_business | 30 |
| | medium | 25 |
| | soho | 10 |
| **IT Support** | another_msp | 15 |
| | part_time | 10 |
| | none | 5 |
| **Tech Comfort** | level ≥ 3 | 25 |
| | level = 2 | 15 |
| | else | 5 |
| **Pain Point** | specific | 20 |
| | other | 10 |
| **Timeline Penalty** | just_exploring | -10 |

**Thresholds:**
- ≥ 70: Auto-approved
- < 70: Manual review

### Premium Scoring (0-100)

| Factor | Criteria | Points |
|--------|----------|--------|
| **Years in Business** | ≥ 5 years | 25 |
| | ≥ 3 years | 15 |
| | else | 5 |
| **Infrastructure** | ≥ 5 items | 20 |
| | ≥ 3 items | 12 |
| | else | 5 |
| **Security Posture** | rating ≥ 4 | 15 |
| | rating ≥ 3 | 10 |
| | else | 5 |
| **Compliance Needs** | > 0 items | 15 |
| | 0 items | 5 |
| **Budget** | ≥ $2,500 | 10 |
| | ≥ $1,000 | 7 |
| **Decision Maker** | present | 5 |
| **Timeline** | not exploring | 10 |

**Thresholds:**
- ≥ 85: Approved
- 70-84: Conditional approval
- 50-69: Schedule discovery call
- < 50: Not qualified

---

## 🔌 API Endpoints

### Qualification Endpoints
```
POST   /api/qualify/core-plus          Submit Core+ questionnaire
POST   /api/qualify/premium            Submit Premium questionnaire
POST   /api/qualify/enterprise         Submit Enterprise discovery
GET    /api/qualify/status/:id         Check qualification status
```

### Quote Endpoints (To be implemented)
```
POST   /api/quotes                     Create quote
GET    /api/quotes/:key                Load quote by key
POST   /api/checkout                   Create Stripe checkout session
```

### Webhook Endpoints (To be implemented)
```
POST   /webhooks/stripe                Stripe events (subscription, payment)
POST   /webhooks/ninjaone              NinjaOne events
POST   /webhooks/calendly              Calendly events
```

### Portal Endpoints (To be implemented)
```
POST   /api/auth/login                 Customer portal login
GET    /api/portal/dashboard           Customer dashboard
GET    /api/portal/billing             Billing history
POST   /api/portal/support             Support requests
```

---

## 🎨 Frontend Pages

### Public Pages
- `/` - Homepage with feature overview
- `/plan-selector` - Choose service tier
- `/business-plans` - Detailed plan comparison
- `/questionnaire-core-plus` - 5-question qualification form
- `/questionnaire-premium` - 12-question detailed form
- `/enterprise-discovery` - Custom discovery form
- `/qualification-status/[id]` - Real-time status updates

### Portal Pages (Protected)
- `/portal/login` - Customer authentication
- `/portal/dashboard` - Service overview
- `/portal/billing` - Payment and subscription management
- `/portal/support` - Ticket creation and tracking
- `/portal/settings` - Account configuration

---

## 🚀 Deployment

### Docker Deployment

1. **Setup environment:**
   ```bash
   cp .env.example .env
   # Edit .env with your credentials
   ```

2. **Configure Cloudflare Tunnel:**
   ```bash
   # Create tunnel
   cloudflared tunnel create tttmsp-tunnel

   # Get credentials JSON from Cloudflare
   # Place in cloudflared/tttmsp-tunnel.json

   # Get token and add to .env as TUNNEL_TOKEN
   ```

3. **Deploy:**
   ```bash
   docker-compose up -d
   ```

4. **Routes:**
   - `tttmsp.com` → Frontend (port 3000)
   - `www.tttmsp.com` → Frontend (port 3000)
   - `api.tttmsp.com` → Backend API (port 3000)

### Database Initialization

PostgreSQL automatically creates tables on first startup via TypeORM synchronization (`synchronize: true`).

To manually create migrations:
```bash
cd backend
npm run migration:generate src/migrations/InitialSchema
npm run migration:run
```

---

## 🔐 Security

- **Cloudflare DDoS Protection**: All traffic protected by Cloudflare
- **HTTPS/TLS**: Automatic via Cloudflare
- **Environment Secrets**: Never commit `.env` file
- **API Authentication**: JWT tokens for portal access
- **Webhook Verification**: Stripe/NinjaOne signature validation
- **CORS**: Configured for specific domains only
- **Database**: Strong passwords required in production

---

## ⚙️ Environment Variables

See `.env.example` for complete list. Critical variables:

```env
# Cloudflare
TUNNEL_TOKEN=<your-tunnel-token>

# Database
DB_PASSWORD=<strong-password>

# Stripe
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# NinjaOne, QuickBooks, Calendly, SendGrid
(See .env.example)
```

---

## 📝 Implementation Checklist

- ✅ Database schema and entities
- ✅ Qualification scoring algorithms (Core+, Premium)
- ✅ Qualification API endpoints
- ✅ Frontend questionnaire pages
- ⬜ Frontend portal pages
- ⬜ Stripe integration (checkout, webhooks)
- ⬜ NinjaOne OAuth and API integration
- ⬜ QuickBooks OAuth and API integration
- ⬜ Calendly scheduling integration
- ⬜ SendGrid email templates
- ⬜ Quote generation service
- ⬜ Customer portal authentication
- ⬜ Billing dashboard
- ⬜ Webhook handlers (Stripe, NinjaOne, Calendly)
- ⬜ Comprehensive testing

---

## 🧪 Testing

```bash
# Backend
cd backend
npm run test              # Unit tests
npm run test:e2e         # End-to-end tests

# Frontend
cd frontend
npm run test              # Component tests
```

---

## 📞 Support & Troubleshooting

### Database Issues
```bash
# Check database logs
docker-compose logs db

# Restart database
docker-compose restart db
```

### Backend Issues
```bash
# Check API logs
docker-compose logs backend

# Verify health endpoint
curl http://localhost:3001/health
```

### Cloudflare Tunnel
```bash
# Check tunnel status
docker-compose logs cloudflared

# Verify DNS records
dig tttmsp.com @1.1.1.1
```

---

## 🎯 Deployment Deadline

**December 25, 2025** - Full platform production deployment

---

## 📄 License

CC0 1.0 Universal

---

## 🔗 Related Documentation

- [Component Documentation](./COMPONENT_DOCUMENTATION.md)
- [Page Reference Guide](./PAGE_REFERENCE_GUIDE.md)

---

**Last Updated**: December 4, 2025
**Version**: 2.0.0 (Enterprise MSP Platform)
