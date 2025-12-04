# TTT MSP Design System & Style Guide
**Complete CSS Implementation Guide for app.tttmsp.com**

---

## 🎨 Complete Color Palette

### Primary Brand Colors
```css
--brand-primary: #87CEEB;        /* Sky Blue - Main brand color */
--brand-secondary: #00A3E0;      /* Bright Blue */
--brand-tertiary: #4682B4;       /* Steel Blue */
--brand-accent: #00D9FF;         /* Cyan - Accent/highlights */
--brand-warm: #6B7280;           /* Gray - Secondary buttons */
--brand-warm-light: #9CA3AF;     /* Light Gray */
```

**Usage:**
- `#87CEEB` (Sky Blue): Primary buttons, links, icons, hover states, borders on focus
- `#00A3E0` (Bright Blue): Secondary accents, tier badges
- `#4682B4` (Steel Blue): Gradients, button hover states
- `#00D9FF` (Cyan): Recommendation badges, call-to-action accents, glow effects
- `#6B7280` (Gray): Button gradients (warm tone mixing with sky blue)

---

### Background Colors (Dark Theme)
```css
/* Solid Backgrounds */
--bg-primary: linear-gradient(180deg, #1a1a2e 0%, #16213e 100%);
--bg-secondary: #0f3460;         /* Card backgrounds */
--bg-tertiary: #16213e;          /* Alternative sections */

/* Specific Background Shades */
#1a1a2e    /* Dark Navy - Primary gradient start */
#16213e    /* Deep Blue - Primary gradient end, cards */
#0f3460    /* Medium Blue - Secondary cards */
#0a192f    /* Darkest Navy - Residential footer start */
#0d1b2a    /* Dark Blue - Residential footer end */
#0f0f10    /* Near Black - App header fallback */
```

**Usage:**
- Main page background: `linear-gradient(180deg, #1a1a2e 0%, #16213e 100%)`
- Card backgrounds: `#0f3460` or `#16213e`
- Sections alternating: Use bg-primary gradient, then bg-tertiary solid

---

### Overlay & Accent Backgrounds
```css
--bg-overlay: rgba(135, 206, 235, 0.05);    /* Subtle blue tint */
--bg-accent: linear-gradient(135deg, #1a2a4e 0%, #16213e 100%);
--brand-hover: rgba(135, 206, 235, 0.15);   /* Hover state overlay */

/* Opacity Variations for Sky Blue (#87CEEB) */
rgba(135, 206, 235, 0.03)   /* Very subtle section backgrounds */
rgba(135, 206, 235, 0.05)   /* Recommended card backgrounds */
rgba(135, 206, 235, 0.1)    /* Icon wrapper backgrounds */
rgba(135, 206, 235, 0.15)   /* Badge backgrounds, hover states */
rgba(135, 206, 235, 0.2)    /* Border colors, active icon wrappers */
rgba(135, 206, 235, 0.3)    /* Navbar border, logo glow */
rgba(135, 206, 235, 0.4)    /* Medium borders, box shadows */
rgba(135, 206, 235, 0.5)    /* Strong glow effects */
rgba(135, 206, 235, 0.6)    /* Logo drop shadow */
rgba(135, 206, 235, 0.7)    /* Active logo glow */
rgba(135, 206, 235, 0.9)    /* Maximum logo hover glow */

/* Opacity Variations for Cyan Accent (#00D9FF) */
rgba(0, 217, 255, 0.05)     /* Recommendation section backgrounds */
rgba(0, 217, 255, 0.15)     /* Recommendation badge backgrounds */
rgba(0, 217, 255, 0.2)      /* Footer borders (residential) */
rgba(0, 217, 255, 0.3)      /* Footer borders, hero effects */
rgba(0, 217, 255, 0.5)      /* Social icon glow */
rgba(0, 217, 255, 0.6)      /* Residential logo glow */
rgba(0, 217, 255, 0.9)      /* Residential logo hover */
```

**Usage:**
- Pricing sections: `rgba(135, 206, 235, 0.03)`
- Recommended cards: `rgba(135, 206, 235, 0.05)`
- Hover overlays: `rgba(135, 206, 235, 0.15)`
- Borders: `rgba(135, 206, 235, 0.2)` to `0.4`

---

### Text Colors
```css
/* Primary Text Colors */
--text-primary: #E8E8E8;         /* Main headings, body text */
--text-secondary: #cbd5e0;       /* Descriptions, secondary content */
--text-muted: #8892b0;           /* Subtle text, labels, meta */

/* Specific Text Shades */
#E8E8E8    /* Bright gray - Primary headings */
#cbd5e0    /* Light blue-gray - Body text, descriptions */
#B0C4DE    /* Light steel blue - Nav links default */
#8892b0    /* Muted blue-gray - Subtle labels */
#FFFFFF    /* Pure white - Button text on dark buttons */
#000000    /* Pure black - Text on bright buttons (sky blue) */
```

**Usage:**
- Headings (h1, h2, h3): `#E8E8E8`
- Paragraphs, descriptions: `#cbd5e0`
- Nav links (default): `#B0C4DE`
- Nav links (hover): `#87CEEB` (sky blue)
- Labels, meta text: `#8892b0`
- Text on sky blue buttons: `#000000`
- Text on dark buttons: `#FFFFFF`

---

### Border Colors
```css
--border-subtle: rgba(135, 206, 235, 0.2);   /* Default card borders */
--border-medium: rgba(135, 206, 235, 0.4);   /* Active borders */

/* Border Usage */
rgba(135, 206, 235, 0.2)    /* Card borders, dividers */
rgba(135, 206, 235, 0.3)    /* Navbar bottom border */
rgba(135, 206, 235, 0.4)    /* Hover borders, focus states */
```

---

## 🎨 Gradients & Effects

### Button Gradients
```css
/* Primary Button */
background: linear-gradient(135deg, #87CEEB 0%, #6B7280 100%);

/* Primary Button Hover */
background: linear-gradient(135deg, #6B7280 0%, #87CEEB 100%);

/* Recommended Badge */
background: linear-gradient(135deg, #87CEEB 0%, #87CEEB 100%);

/* Call Button (Navbar) */
background: linear-gradient(90deg, #4682B4, #87CEEB);

/* Price Display Gradient Text */
background: linear-gradient(135deg, #87CEEB 0%, #6B7280 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
```

### Backdrop & Blur Effects
```css
/* Navbar */
background: rgba(35, 48, 82, 0.92);
backdrop-filter: blur(10px);

/* Dropdown Menus */
background: rgba(35, 48, 82, 0.98);
backdrop-filter: blur(10px);
```

### Shadow Effects
```css
/* Navbar Shadow */
box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);

/* Card Hover Shadow */
box-shadow: 0 8px 32px rgba(135, 206, 235, 0.2);

/* Dropdown Shadow */
box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);

/* Mega Menu Shadow */
box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);

/* Button Hover Shadow */
box-shadow: 0 0 30px rgba(107, 114, 128, 0.5);

/* Call Button Hover Shadow */
box-shadow: 0 5px 20px rgba(70, 130, 180, 0.4);

/* Floating Action Button */
box-shadow: 0 8px 32px rgba(135, 206, 235, 0.4);
box-shadow: 0 12px 48px rgba(135, 206, 235, 0.6);  /* on hover */
```

### Glow Effects (Filter: Drop-Shadow)
```css
/* Logo Default */
filter: drop-shadow(0 0 15px rgba(135, 206, 235, 0.6));

/* Logo Hover */
filter: drop-shadow(0 0 25px rgba(135, 206, 235, 0.9))
        drop-shadow(0 0 40px rgba(135, 206, 235, 0.5));

/* Hero Spline/Animation */
filter: drop-shadow(0 0 80px rgba(0, 255, 209, 0.3));

/* Social Icon Hover */
box-shadow: 0 0 15px rgba(135, 206, 235, 0.5);
```

### Text Shadows
```css
/* Hero Tagline */
text-shadow: 0 0 20px rgba(135, 206, 235, 0.3);

/* Footer Heading (Residential) */
text-shadow: 0 0 10px rgba(0, 217, 255, 0.3);
```

---

## 📝 Typography

### Font Family
```css
font-family: 'Inter', system-ui, -apple-system,
             BlinkMacSystemFont, "Segoe UI", "Roboto",
             "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
             "Droid Sans", "Helvetica Neue", sans-serif;
```

**Import:**
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
```

### Font Weights
- `300`: Light (rarely used)
- `400`: Regular (body text, descriptions)
- `500`: Medium (nav links, labels, buttons)
- `600`: Semibold (headings, subheadings, card titles)
- `700`: Bold (hero titles, section titles, mega menu titles)

### Font Sizes & Usage

#### Hero Sections
```css
/* Hero Title */
font-size: 66px;          /* Desktop */
font-size: 4rem;          /* Simplified hero */
font-weight: 600;
line-height: 1.1;
letter-spacing: -0.62px;
color: #E8E8E8;

/* Hero Tagline */
font-size: 1.8rem;
font-weight: 600;
font-style: italic;
color: #87CEEB;

/* Hero Subtitle */
font-size: 20px;
font-weight: 400;
line-height: 1.5;
color: #cbd5e0;

/* Mobile Hero Title */
@media (max-width: 768px) {
  font-size: 40px;         /* Services pages */
  font-size: 2.5rem;       /* Home page */
}
```

#### Section Titles
```css
/* Section Title (H2) */
font-size: 48px;
font-weight: 600;
line-height: 1.1;
letter-spacing: -0.02em;
color: #E8E8E8;

/* Section Subtitle */
font-size: 20px;
font-weight: 400;
line-height: 1.5;
color: #cbd5e0;

/* Mobile Section Title */
@media (max-width: 768px) {
  font-size: 32px;
}
```

#### Card & Component Typography
```css
/* Category Title */
font-size: 28px;
font-weight: 600;
line-height: 1.2;
color: #E8E8E8;

/* Card Title */
font-size: 24px;
font-weight: 600;
color: #E8E8E8;

/* Service/Feature Name */
font-size: 20px;
font-weight: 600;
line-height: 1.4;
color: #E8E8E8;

/* Card Description */
font-size: 16px;
font-weight: 400;
line-height: 1.4 - 1.6;
color: #cbd5e0;

/* Pricing Display */
font-size: 28-32px;
font-weight: 600;
color: #87CEEB;

/* Small Labels */
font-size: 14px;
font-weight: 500;
color: #8892b0;

/* Tiny Meta Text */
font-size: 12-13px;
font-weight: 500;
color: #8892b0;
```

#### Navigation
```css
/* Nav Link */
font-size: 0.95rem;
font-weight: 500;
color: #B0C4DE;
color: #87CEEB;  /* on hover */

/* Mega Menu Title */
font-size: 0.875rem;
font-weight: 700;
text-transform: uppercase;
letter-spacing: 0.5px;
color: #87CEEB;

/* Mega Menu Item */
font-size: 0.875rem;
color: #B0C4DE;
color: #87CEEB;  /* on hover */
```

#### Footer
```css
/* Footer Heading */
font-size: 1.1rem;
font-weight: 600;
text-transform: uppercase;
letter-spacing: 0.5px;
color: #87CEEB;  /* Business */
color: #00D9FF;  /* Residential */

/* Footer Link */
font-size: 0.95rem;
color: #cbd5e0;
color: #87CEEB;  /* hover - Business */
color: #00D9FF;  /* hover - Residential */

/* Footer Description */
font-size: 1rem;
color: #cbd5e0;

/* Copyright */
font-size: 0.9rem;
color: #8892b0;
```

---

## 📐 Layout & Spacing

### Maximum Widths
```css
/* Content Containers */
max-width: 1400px;        /* Standard sections */
max-width: 1600px;        /* Service builder (wide) */
max-width: 1200px;        /* Footer */
max-width: 900px;         /* Centered content (CTA, FAQ) */
max-width: 800px;         /* Final CTA */
max-width: 600px;         /* Narrow centered text */
```

### Padding & Margins

#### Section Padding
```css
/* Standard Sections */
padding: 100px 7.6923%;   /* Vertical: 100px, Horizontal: 7.6923% */

/* Compact Sections */
padding: 60px 7.6923%;

/* Large CTA Sections */
padding: 120px 7.6923%;

/* Hero Sections */
padding: 120px 7.6923% 60px;   /* Top 120px, Bottom 60px */
padding: 80px 7.6923% 40px;    /* Compact hero */

/* Navbar */
padding: 0 2rem;
height: 70px;

/* Footer */
padding: 2.5rem 2rem 1.5rem;
```

#### Component Spacing
```css
/* Card Padding */
padding: 32px;            /* Standard cards */
padding: 40px;            /* Feature cards */
padding: 40px 32px;       /* Tier cards */
padding: 32px 24px;       /* Pricing cards */

/* Margins Between Elements */
margin-bottom: 60px;      /* Section headers */
margin-bottom: 24px;      /* Card titles */
margin-bottom: 16px;      /* Subtitles, paragraphs */
margin-bottom: 12px;      /* List items */
margin-bottom: 8px;       /* Small gaps */

/* Grid Gaps */
gap: 40px;                /* Feature grids */
gap: 24px;                /* Service cards */
gap: 32px;                /* Tier comparison */
gap: 60px;                /* Value pillars */
gap: 2rem;                /* Footer sections (3rem horizontal) */
```

---

## 🎯 Component Styles

### Buttons

#### Primary Button
```css
.btn-primary {
  background: linear-gradient(135deg, #87CEEB 0%, #6B7280 100%);
  color: #000000;
  border: none;
  border-radius: 0;        /* Sharp corners */
  padding: 14px 24px;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.4s ease;
  min-height: 56px;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  line-height: 1.2;
}

.btn-primary:hover {
  background: linear-gradient(135deg, #6B7280 0%, #87CEEB 100%);
  box-shadow: 0 0 30px rgba(107, 114, 128, 0.5);
  transform: translateY(-2px);
}

.btn-primary:active {
  transform: scale(0.98);
}
```

#### Secondary Button
```css
.btn-secondary {
  background: rgba(255, 255, 255, 0.1);
  color: #FFFFFF;
  border: none;
  border-radius: 0;
  padding: 14px 24px;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.4s ease;
  min-height: 56px;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  line-height: 1.2;
}

.btn-secondary:hover {
  background: #FFFFFF;
  color: #000000;
  transform: translateY(-2px);
}
```

#### Call Button (Navbar)
```css
.call-button {
  background: linear-gradient(90deg, #4682B4, #87CEEB);
  color: #FFFFFF !important;
  padding: 0.625rem 1.25rem !important;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.call-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 20px rgba(70, 130, 180, 0.4);
}
```

---

### Cards

#### Feature Card
```css
.feature-card {
  background: #0f3460;
  border: 1px solid rgba(135, 206, 235, 0.2);
  padding: 40px;
  transition: all 0.4s ease;
}

.feature-card:hover {
  border-color: #87CEEB;
  transform: translateY(-4px);
  box-shadow: 0 8px 32px rgba(135, 206, 235, 0.2);
}

/* Icon Wrapper */
.feature-icon-wrapper {
  width: 80px;
  height: 80px;
  background: rgba(135, 206, 235, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  transition: background 0.3s ease;
}

.feature-card:hover .feature-icon-wrapper {
  background: rgba(135, 206, 235, 0.2);
}

.feature-icon {
  color: #87CEEB;
}
```

#### Pricing Card
```css
.pricing-card {
  background: #0f3460;
  border: 1px solid rgba(135, 206, 235, 0.2);
  padding: 32px 24px;
  transition: all 0.4s ease;
  position: relative;
  display: flex;
  flex-direction: column;
}

.pricing-card:hover {
  border-color: #87CEEB;
  transform: translateY(-4px);
  box-shadow: 0 8px 32px rgba(135, 206, 235, 0.2);
}

.pricing-card.recommended {
  border-color: #87CEEB;
  background: rgba(135, 206, 235, 0.05);
}

/* Recommended Badge */
.recommended-badge {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(135deg, #87CEEB 0%, #87CEEB 100%);
  color: #000000;
  padding: 6px 16px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  white-space: nowrap;
}
```

#### Metric Card
```css
.metric-card {
  text-align: center;
  padding: 40px 20px;
  background: #0f3460;
  border: 1px solid rgba(135, 206, 235, 0.2);
  transition: all 0.4s ease;
}

.metric-card:hover {
  border-color: #87CEEB;
  transform: translateY(-4px);
}

.metric-icon {
  color: #87CEEB;
  margin-bottom: 16px;
}

.metric-value {
  font-size: 48px;
  font-weight: 600;
  color: #87CEEB;
  margin-bottom: 8px;
}

.metric-label {
  font-size: 16px;
  color: #cbd5e0;
}
```

---

### Navbar

```css
.navbar-header {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: rgba(35, 48, 82, 0.92);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(135, 206, 235, 0.3);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
}

.navbar-content {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
}

.header-logo {
  height: 50px;
  filter: drop-shadow(0 0 15px rgba(135, 206, 235, 0.7))
          drop-shadow(0 0 25px rgba(135, 206, 235, 0.4));
  transition: filter 0.3s ease;
}

.header-logo:hover {
  filter: drop-shadow(0 0 20px rgba(135, 206, 235, 0.9))
          drop-shadow(0 0 35px rgba(135, 206, 235, 0.6));
}

.nav-link {
  color: #B0C4DE;
  font-weight: 500;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  position: relative;
}

.nav-link:hover {
  color: #87CEEB;
}

/* Underline animation */
.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #87CEEB, #4682B4);
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}
```

#### Mega Menu
```css
.mega-menu {
  position: absolute;
  top: 100%;
  left: -200px;
  margin-top: 0.5rem;
  min-width: 1000px;
  background: rgba(35, 48, 82, 0.98);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(135, 206, 235, 0.3);
  border-radius: 12px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 2rem;
  animation: dropdownFadeIn 0.3s ease;
}

.mega-menu-title {
  font-size: 0.875rem;
  font-weight: 700;
  color: #87CEEB;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid rgba(135, 206, 235, 0.2);
}

.mega-menu-item {
  padding: 0.5rem 0.75rem;
  color: #B0C4DE;
  font-size: 0.875rem;
  transition: all 0.2s ease;
  border-radius: 4px;
}

.mega-menu-item:hover {
  background: rgba(135, 206, 235, 0.1);
  color: #87CEEB;
  transform: translateX(4px);
}
```

---

### Footer

```css
.footer-business {
  background: linear-gradient(180deg, #1a1a2e 0%, #16213e 100%);
  border-top: 1px solid rgba(135, 206, 235, 0.3);
  padding: 2.5rem 2rem 1.5rem;
  color: #cbd5e0;
}

.footer-logo {
  height: 50px;
  filter: drop-shadow(0 0 15px rgba(135, 206, 235, 0.6));
  transition: filter 0.3s ease;
}

.footer-logo:hover {
  filter: drop-shadow(0 0 25px rgba(135, 206, 235, 0.9))
          drop-shadow(0 0 40px rgba(135, 206, 235, 0.5));
}

.footer-heading {
  font-size: 1.1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: #87CEEB;
}

.footer-links a {
  color: #cbd5e0;
  font-size: 0.95rem;
  transition: all 0.3s ease;
}

.footer-links a:hover {
  color: #87CEEB;
  transform: translateX(5px);
}

/* Social Icons */
.social-icon {
  color: #87CEEB;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid rgba(135, 206, 235, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.social-icon:hover {
  color: #fff;
  border-color: #87CEEB;
  box-shadow: 0 0 15px rgba(135, 206, 235, 0.5);
  transform: translateY(-2px);
}
```

---

## ✨ Animations & Transitions

### Standard Transition
```css
transition: all 0.3s ease;  /* Most elements */
transition: all 0.4s ease;  /* Buttons, cards */
transition: color 0.3s ease;  /* Text color changes */
transition: background 0.3s ease;  /* Background changes */
transition: filter 0.3s ease;  /* Logo glows */
```

### Transform Animations
```css
/* Hover Lift */
transform: translateY(-2px);  /* Buttons */
transform: translateY(-4px);  /* Cards */

/* Hover Slide */
transform: translateX(4px);   /* Mega menu items */
transform: translateX(5px);   /* Footer links */

/* Hover Scale */
transform: scale(1.05);       /* Logo */
transform: scale(1.1);        /* Floating button */

/* Active State */
transform: scale(0.98);       /* Button press */

/* Rotate */
transform: rotate(45deg);     /* Close icon */
```

### Fade In Animation
```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.service-card,
.metric-card,
.tier-card {
  animation: fadeInUp 0.6s ease forwards;
}
```

### Dropdown Animation
```css
@keyframes dropdownFadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.dropdown-menu {
  animation: dropdownFadeIn 0.2s ease;
}

.mega-menu {
  animation: dropdownFadeIn 0.3s ease;
}
```

---

## 📱 Responsive Breakpoints

```css
/* Desktop First Approach */

/* Large Desktop (default) */
/* 1400px max-width containers */

/* Medium Desktop/Laptop */
@media (max-width: 1200px) {
  /* Adjust grid columns */
  /* Smaller mega menu */
}

/* Tablet */
@media (max-width: 1024px) {
  /* Stack some layouts */
  /* Reduce nav spacing */
}

/* Small Tablet/Large Phone */
@media (max-width: 768px) {
  /* Single column layouts */
  /* Smaller fonts */
  /* Hide mega menu */
  /* Mobile navigation */
}

/* Phone */
@media (max-width: 480px) {
  /* Further size reductions */
  /* Full width buttons */
}
```

---

## 🎨 Special Effects

### Grid Pattern Overlay
```css
.hero-pattern {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image:
    repeating-linear-gradient(0deg, transparent, transparent 1px,
                               transparent 1px, transparent 7.6923%),
    repeating-linear-gradient(-90deg, rgba(135, 206, 235, 0.05),
                               rgba(135, 206, 235, 0.05) 1px,
                               transparent 1px, transparent 7.6923%);
  opacity: 0.3;
  pointer-events: none;
}
```

### Gradient Text
```css
.total-amount {
  background: linear-gradient(135deg, #87CEEB 0%, #6B7280 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

### Border Radius
```css
border-radius: 0;          /* Buttons, cards - Sharp corners */
border-radius: 4px;        /* Small elements */
border-radius: 8px;        /* Call button, dropdowns */
border-radius: 12px;       /* Mega menu, badges */
border-radius: 50%;        /* Social icons, circular elements */
```

---

## 📋 Quick Reference: Where Each Color is Used

### Sky Blue (#87CEEB)
- Primary buttons (gradient with gray)
- All icon colors
- Brand accent text (hover states)
- Border colors on hover/focus
- Logo glow effects
- Nav link hover
- Footer heading color
- Price displays
- Metric values
- Badge backgrounds

### Cyan (#00D9FF)
- Recommendation badges
- Special accent highlights
- Residential theme accents

### Steel Blue (#4682B4)
- Button gradients (mixed with sky blue)
- Call button gradient

### Gray (#6B7280)
- Button gradients (mixed with sky blue)
- Warm tone balance

### Navy Backgrounds
- `#1a1a2e` - Page background gradient start
- `#16213e` - Page background gradient end, cards
- `#0f3460` - Card backgrounds

### Navbar/Dropdown Background
- `rgba(35, 48, 82, 0.92)` - Navbar with blur
- `rgba(35, 48, 82, 0.98)` - Dropdowns with blur

### Text
- `#E8E8E8` - All headings
- `#cbd5e0` - All body text, descriptions
- `#B0C4DE` - Nav links default
- `#8892b0` - Subtle labels, meta

---

## 💡 Implementation Tips

1. **Always use the gradient backgrounds for main sections:**
   ```css
   background: linear-gradient(180deg, #1a1a2e 0%, #16213e 100%);
   ```

2. **Card hover states are essential:**
   - Border changes from `rgba(135, 206, 235, 0.2)` to `#87CEEB`
   - Add `transform: translateY(-4px)`
   - Add `box-shadow: 0 8px 32px rgba(135, 206, 235, 0.2)`

3. **Logo always has glow:**
   ```css
   filter: drop-shadow(0 0 15px rgba(135, 206, 235, 0.6));
   ```

4. **Buttons use sharp corners (border-radius: 0)**

5. **All interactive elements should have 0.3s-0.4s transitions**

6. **Use backdrop-filter: blur(10px) for overlays**

7. **Sky blue (#87CEEB) is your primary brand color - use it everywhere for consistency**

---

**End of Design System Guide**
