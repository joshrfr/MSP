# Component Documentation

**TopTier Technologies MSP Website - Component Reference**

---

## 📑 Table of Contents

1. [Navigation Components](#navigation-components)
2. [Layout Components](#layout-components)
3. [Forms](#forms)
4. [UI Elements](#ui-elements)
5. [Animations](#animations)
6. [Utility Components](#utility-components)

---

## Navigation Components

### **Navbar.jsx**

**Location**: `src/components/Navbar.jsx`

**Purpose**: Adaptive navigation bar that changes based on site section

**Props**:
```javascript
{
  type: 'home' | 'business' | 'residential'  // Controls navigation style
}
```

**Type Variations**:

#### 1. Home Navigation (`type="home"`)
```jsx
<Navbar type="home" />
```
**Links**:
- Home (scroll to top)
- Residential
- Business Plans
- Call (850) 610-3889

**Use Cases**: Landing page, general business pages

---

#### 2. Business Navigation (`type="business"`)
```jsx
<Navbar type="business" />
```
**Links**:
- Home
- Services (dropdown)
  - Strategic Services
  - IT Services
  - Cybersecurity
  - Cloud Infrastructure
  - IT Solutions
- Business Plans
- About
- Call (850) 610-3889

**Features**:
- Hover dropdown menus
- Active state tracking
- Smooth navigation

**Use Cases**: Business-focused pages, service pages, questionnaires

---

#### 3. Residential Navigation (`type="residential"`)
```jsx
<Navbar type="residential" />
```
**Links**:
- Home
- Plans (dropdown)
  - HomeCare Basic
  - HomeCare Plus
  - HomeCare Elite
- Services (dropdown)
  - Antivirus
  - Backup
  - Remote Support
- How It Works
- About
- Call (850) 610-3889

**Use Cases**: Residential pages, HomeCare plans

---

**State Management**:
```javascript
const [activeDropdown, setActiveDropdown] = useState(null);
```

**Event Handlers**:
- `handleMouseEnter(dropdown)` - Shows dropdown
- `handleMouseLeave()` - Hides dropdown
- Logo click → Navigate to home + scroll to top

**Styling**: `Navbar.css`

---

## Layout Components

### **BusinessFooter.jsx**

**Location**: `src/components/BusinessFooter.jsx`

**Purpose**: Footer for business-themed pages

**Sections**:
1. **Company Info**
   - Logo
   - Tagline
   - Description

2. **Quick Links**
   - Home
   - Services
   - Business Plans
   - About
   - Contact

3. **Services**
   - Strategic Services
   - IT Services
   - Cybersecurity
   - Cloud Infrastructure

4. **Contact**
   - Phone: (850) 610-3889
   - Email: support@tttmsp.com
   - Address: Florida & Georgia

5. **Legal**
   - Privacy Policy
   - Terms of Service
   - Copyright © 2025 TopTier Technologies

**Usage**:
```jsx
import BusinessFooter from '../components/BusinessFooter';

<BusinessFooter />
```

---

### **ResidentialFooter.jsx**

**Location**: `src/components/ResidentialFooter.jsx`

**Purpose**: Footer for residential-themed pages

**Sections**:
1. **Company Info**
   - Logo
   - Residential tagline
   - Description

2. **Plans**
   - HomeCare Basic
   - HomeCare Plus
   - HomeCare Elite

3. **Services**
   - Antivirus
   - Backup
   - Remote Support
   - How It Works

4. **Support**
   - Contact
   - FAQ (planned)
   - Service Request

5. **Legal**
   - Privacy Policy
   - Terms of Service
   - Copyright © 2025 TopTier Technologies

**Usage**:
```jsx
import ResidentialFooter from '../components/ResidentialFooter';

<ResidentialFooter />
```

---

## Forms

### **ServiceRequestForm.jsx**

**Location**: `src/components/ServiceRequestForm.jsx`

**Purpose**: General service request/inquiry form

**Fields**:
```javascript
{
  name: string,         // Required
  email: string,        // Required, validated
  phone: string,        // Required
  company: string,      // Optional
  serviceType: string,  // Dropdown selection
  message: string,      // Required
  urgency: string       // Low, Medium, High, Critical
}
```

**Service Types**:
- Strategic Services
- IT Services
- Cybersecurity
- Cloud Infrastructure
- Residential Support
- General Inquiry

**Validation**:
- Email format validation
- Phone format validation
- Required field checks

**Submission Flow**:
1. User fills form
2. Validate inputs
3. Submit to API (currently console.log)
4. Show success message
5. Clear form

**Usage**:
```jsx
import ServiceRequestForm from '../components/ServiceRequestForm';

<ServiceRequestForm />
```

**Future**: Connect to backend API for form processing

---

### **CallbackForm.jsx**

**Location**: `src/components/CallbackForm.jsx`

**Purpose**: Request callback from sales/support team

**Fields**:
```javascript
{
  name: string,           // Required
  phone: string,          // Required
  email: string,          // Required
  preferredTime: string,  // Dropdown
  notes: string           // Optional
}
```

**Preferred Time Options**:
- Morning (9 AM - 12 PM)
- Afternoon (12 PM - 5 PM)
- Evening (5 PM - 8 PM)
- Anytime

**Submission**:
- Validates all fields
- Currently logs to console
- Shows success notification
- Clears form on success

**Usage**:
```jsx
import CallbackForm from '../components/CallbackForm';

<CallbackForm />
```

---

### **PCBuildForm.jsx** (Residential-specific)

**Location**: `src/components/PCBuildForm.jsx`

**Purpose**: Custom PC build request form for residential customers

**Fields**:
```javascript
{
  name: string,
  email: string,
  budget: string,        // Dropdown ranges
  usage: string,         // Gaming, Work, Creative, etc.
  preferences: string[]  // Multi-select checkboxes
}
```

**Budget Ranges**:
- Under $1,000
- $1,000 - $2,000
- $2,000 - $3,500
- $3,500+

**Usage Types**:
- Gaming
- Work/Office
- Creative (Video editing, Design)
- General Use

**Usage**:
```jsx
import PCBuildForm from '../components/PCBuildForm';

<PCBuildForm />
```

---

## UI Elements

### **ServiceCard.jsx**

**Location**: `src/components/ServiceCard.jsx`

**Purpose**: Reusable card component for displaying services

**Props**:
```javascript
{
  service: {
    id: string,
    name: string,
    benefit: string,
    price: number,
    icon: string       // Lucide icon name
  },
  onToggle: function,  // Callback when selected
  isSelected: boolean
}
```

**Features**:
- Checkbox selection
- Icon display (Lucide React icons)
- Price formatting
- Hover effects
- Selected state styling

**Usage**:
```jsx
import ServiceCard from '../components/ServiceCard';

const service = {
  id: 'soc',
  name: 'SOC 24×7 Monitoring',
  benefit: 'Continuous threat detection',
  price: 1500,
  icon: 'Eye'
};

<ServiceCard
  service={service}
  onToggle={() => handleToggle(service.id)}
  isSelected={selectedServices.includes(service.id)}
/>
```

---

### **ServiceComparison.jsx**

**Location**: `src/components/ServiceComparison.jsx`

**Purpose**: Side-by-side comparison table for pricing tiers

**Props**:
```javascript
{
  tiers: Array<{
    id: string,
    name: string,
    description: string,
    priceRange: string,
    features: string[],
    recommended: boolean
  }>
}
```

**Features**:
- Responsive table layout
- Recommended badge
- Feature checkmarks
- CTA buttons per tier

**Usage**:
```jsx
import ServiceComparison from '../components/ServiceComparison';
import { pricingTiers } from '../mock';

<ServiceComparison tiers={pricingTiers} />
```

**Displays**:
- Feature matrix
- Price ranges
- Recommended tier highlighting
- "Get Started" CTAs

---

### **PricingSummary.jsx**

**Location**: `src/components/PricingSummary.jsx`

**Purpose**: Shopping cart / quote summary component

**Props**:
```javascript
{
  selectedServices: Array<Service>,
  onRemove: function,
  onSubmit: function
}
```

**Features**:
- Lists all selected services
- Shows individual prices
- Calculates total
- Remove button per item
- Submit quote button

**Calculations**:
```javascript
const total = selectedServices.reduce((sum, service) => sum + service.price, 0);
```

**Usage**:
```jsx
import PricingSummary from '../components/PricingSummary';

<PricingSummary
  selectedServices={selectedServices}
  onRemove={handleRemoveService}
  onSubmit={handleSubmitQuote}
/>
```

---

### **FloatingActionButton.jsx**

**Location**: `src/components/FloatingActionButton.jsx`

**Purpose**: Sticky CTA button (bottom right corner)

**Actions**:
- Call now
- Request quote
- Open chat (placeholder)

**Features**:
- Fixed positioning
- Animated on scroll
- Responsive hide/show
- Mobile-friendly

**Usage**:
```jsx
import FloatingActionButton from '../components/FloatingActionButton';

<FloatingActionButton />
```

**Positioning**: Bottom right, 20px from edges

---

### **ChatWidget.jsx**

**Location**: `src/components/ChatWidget.jsx`

**Purpose**: Live chat placeholder

**Status**: Placeholder only

**Future Integration**:
- Intercom
- Drift
- Tawk.to
- Custom chat solution

**Current Behavior**: Shows "Chat Coming Soon" message

**Usage**:
```jsx
import ChatWidget from '../components/ChatWidget';

<ChatWidget />
```

---

### **ReviewsWidget.jsx**

**Location**: `src/components/ReviewsWidget.jsx`

**Purpose**: Customer reviews/testimonials display

**Features**:
- Carousel layout
- Star ratings
- Customer photos
- Review text
- Company name

**Data Source**: Currently hardcoded, future: Google Reviews API

**Usage**:
```jsx
import ReviewsWidget from '../components/ReviewsWidget';

<ReviewsWidget />
```

---

## Animations

### **TechnicianAnimation.jsx**

**Location**: `src/components/TechnicianAnimation.jsx`

**Purpose**: Animated technician graphic for hero sections

**Technology**: CSS animations + SVG

**Features**:
- Animated character
- Floating effect
- Responsive sizing

**Usage**:
```jsx
import TechnicianAnimation from '../components/TechnicianAnimation';

<TechnicianAnimation />
```

**Use Cases**: Business page heroes

---

### **NetworkAnimation.jsx**

**Location**: `src/components/NetworkAnimation.jsx`

**Purpose**: 3D network visualization

**Technology**: Spline 3D (@splinetool/react-spline)

**Features**:
- 3D interactive network
- Particle effects
- Auto-rotate
- Responsive

**Configuration**:
```javascript
<Spline scene="https://prod.spline.design/..." />
```

**Usage**:
```jsx
import NetworkAnimation from '../components/NetworkAnimation';

<NetworkAnimation />
```

**Use Cases**: Residential hero, tech-focused sections

**Performance**: Lazy-loaded, fallback for mobile

---

### **RacingBlueLight.jsx**

**Location**: `src/components/RacingBlueLight.jsx`

**Purpose**: Animated light racing across top of page

**Technology**: Pure CSS animations

**Features**:
- Horizontal racing light
- Infinite loop
- Smooth transitions
- Lightweight

**Usage**:
```jsx
import RacingBlueLight from '../components/RacingBlueLight';

<RacingBlueLight />
```

**Use Cases**: Home page, hero sections

**CSS**:
```css
@keyframes race {
  from { left: -100%; }
  to { left: 100%; }
}
```

---

## Utility Components

### **payment.js**

**Location**: `src/utils/payment.js`

**Purpose**: Stripe payment integration utilities

**Functions**:

#### `initiateCheckout(planId, addons)`

**Parameters**:
```javascript
{
  planId: string,        // Plan identifier
  addons: Array<{
    id: string,
    quantity: number
  }>
}
```

**Returns**: Promise (redirects to Stripe Checkout)

**Flow**:
1. Validates plan + addons
2. Creates checkout session
3. Redirects to Stripe
4. Success → `/payment/success?session_id=xxx`
5. Cancel → Back to plans

**Environment Variables Required**:
```env
REACT_APP_STRIPE_PUBLIC_KEY=pk_test_...
```

**Usage**:
```javascript
import { initiateCheckout } from '../utils/payment';

const handleCheckout = async () => {
  await initiateCheckout('homecare-plus', [
    { id: 'mdr', quantity: 2 }
  ]);
};
```

**Stripe Products**:
- HomeCare Basic: `price_xxx`
- HomeCare Plus: `price_xxx`
- HomeCare Elite: `price_xxx`

**Addons**:
Each addon has a Stripe Price ID

**Error Handling**:
- Shows error toast on failure
- Logs to console
- Graceful fallback

---

## Component Relationships

### Home Page Component Tree

```
Home.jsx
├── Navbar (type="home")
├── RacingBlueLight
├── TechnicianAnimation
├── ServiceRequestForm
├── CallbackForm
├── ServiceComparison
├── ChatWidget
└── BusinessFooter
```

### Residential Page Component Tree

```
Residential.jsx
├── Navbar (type="residential")
├── NetworkAnimation
├── ServiceRequestForm
├── PCBuildForm
├── ReviewsWidget
├── FloatingActionButton
├── ChatWidget
└── ResidentialFooter
```

### Business Plans Component Tree

```
BusinessPlans.jsx
├── Navbar (type="business")
├── FloatingActionButton
└── BusinessFooter
```

### Services Page Component Tree

```
Services.jsx
├── Navbar (type="business")
├── ServiceCard (multiple)
├── PricingSummary
├── ServiceRequestForm
└── BusinessFooter
```

---

## Styling Guide

### Component-Specific CSS

**Navbar**: `Navbar.css`
**Forms**: Inline styles + global CSS
**Cards**: `Services.css`
**Animations**: Component-specific CSS

### Global CSS Files

- `App.css` - Global styles
- `Home.css` - Home page specific
- `Services.css` - Service pages
- `Residential.css` - Residential theme
- `ServiceDetail.css` - Detail pages

### CSS Variable Usage

All components use CSS variables for theming:

```jsx
<div style={{
  backgroundColor: 'var(--bg-secondary)',
  color: 'var(--text-primary)',
  border: '1px solid var(--border-subtle)'
}}>
```

---

## Best Practices

### 1. Import Order
```javascript
// React imports
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Third-party components
import { ArrowRight, Check } from 'lucide-react';

// Local components
import Navbar from '../components/Navbar';
import BusinessFooter from '../components/BusinessFooter';

// Data
import { residentialPlans } from '../mock';

// Styles
import '../Services.css';
```

### 2. Component Structure
```javascript
const ComponentName = ({ prop1, prop2 }) => {
  // State
  const [state, setState] = useState(initialValue);

  // Hooks
  const navigate = useNavigate();

  // Handlers
  const handleEvent = () => {
    // Logic
  };

  // Render
  return (
    <div>
      {/* JSX */}
    </div>
  );
};

export default ComponentName;
```

### 3. Props Validation
Use PropTypes or TypeScript (planned)

### 4. Event Handlers
- Use descriptive names: `handleButtonClick`, `handleFormSubmit`
- Keep handlers near related state
- Avoid inline functions for complex logic

### 5. Conditional Rendering
```javascript
{isVisible && <Component />}
{condition ? <ComponentA /> : <ComponentB />}
```

---

## Component Reusability

### High Reusability
- ServiceCard
- Navbar
- Footers
- Forms

### Medium Reusability
- PricingSummary
- ServiceComparison
- Animations

### Low Reusability (Page-Specific)
- Page layouts
- Custom sections

---

## Performance Considerations

### Lazy Loading
```javascript
const NetworkAnimation = lazy(() => import('../components/NetworkAnimation'));
```

### Memoization
```javascript
const MemoizedComponent = memo(Component);
```

### Event Delegation
Use parent handlers when possible

### Image Optimization
- Use WebP format
- Lazy load images below fold
- Proper sizing

---

## Accessibility

### ARIA Labels
```jsx
<button aria-label="Call TopTier Technologies">
  <Phone size={18} />
</button>
```

### Keyboard Navigation
- All interactive elements focusable
- Tab order logical
- Enter/Space triggers actions

### Screen Reader Support
- Semantic HTML
- Alt text on images
- ARIA roles where appropriate

---

## Testing

### Component Testing
```javascript
import { render, screen } from '@testing-library/react';
import ServiceCard from './ServiceCard';

test('renders service name', () => {
  render(<ServiceCard service={mockService} />);
  expect(screen.getByText('Service Name')).toBeInTheDocument();
});
```

---

## Future Improvements

### Planned
1. TypeScript migration
2. Storybook for component documentation
3. Unit tests for all components
4. E2E tests with Cypress
5. Component library extraction

---

**Last Updated**: December 2025
**Maintained By**: TopTier Technologies Development Team
