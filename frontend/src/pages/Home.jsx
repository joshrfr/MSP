import React from 'react';
import NetworkAnimation from '../components/NetworkAnimation';
import { ArrowRight, CheckCircle2, DollarSign, Shield, Zap, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { metrics } from '../mock';

const Home = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Shield,
      title: 'Enterprise-Grade Security',
      description: 'SOC 24×7 monitoring, AI threat detection, and comprehensive cybersecurity solutions'
    },
    {
      icon: Zap,
      title: 'Lightning-Fast Response',
      description: 'Average response time under 15 minutes with 24×7 support availability'
    },
    {
      icon: TrendingUp,
      title: 'On-Premises & Cloud Solutions',
      description: 'We manage both on-premises hardware and cloud infrastructure - hybrid solutions that fit your needs'
    },
    {
      icon: DollarSign,
      title: 'Transparent Pricing',
      description: 'No hidden fees. Build your custom plan and see exact costs upfront'
    }
  ];

  const whyChooseUs = [
    {
      title: 'Complete Transparency',
      points: [
        'See all costs before you commit',
        'No surprise fees or hidden charges',
        'Detailed monthly reporting',
        'Clear service level agreements'
      ]
    },
    {
      title: 'Proven Expertise',
      points: [
        'Microsoft Partner certified',
        'Fortinet security specialists',
        'Dell & Cisco partnerships',
        'Serving Florida & Georgia since 2010'
      ]
    },
    {
      title: 'Innovation First',
      points: [
        'AI-powered threat detection',
        'Cloud-native infrastructure',
        'Cutting-edge automation',
        'Continuous improvement'
      ]
    }
  ];

  const iconMap = {
    Zap,
    Shield
  };

  return (
    <div className="home-page">
      {/* Header */}
      <header className="services-header">
        <div className="header-content">
          <div className="logo-container">
            <img
              src="https://customer-assets.emergentagent.com/job_managed-tech-hub/artifacts/dmi0lnjh_8.png"
              alt="TopTier Technologies"
              className="header-logo"
            />
          </div>
          <nav className="header-nav">
            <a href="/" className="nav-link">Home</a>
            <a href="/residential" className="nav-link">Residential</a>
            <a href="/services" className="nav-link">Business Services</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section" id="home">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Your Trusted IT Partner Across Florida & Georgia
            </h1>
            <p className="hero-subtitle">
              From cybersecurity to cloud solutions, we deliver enterprise-grade managed IT services with complete transparency. No hidden costs, no surprises — just reliable technology that powers your business.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary" onClick={() => navigate('/services')}>
                Build Your Custom Plan
                <ArrowRight size={20} />
              </button>
              <button className="btn-secondary" onClick={() => window.open('tel:8506103889')}>
                Call (850) 610-3889
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
          
          <div className="hero-spline">
            <NetworkAnimation />
          </div>
        </div>
        
        <div className="hero-pattern" />
      </section>

      {/* What We Offer */}
      <section className="features-section" id="about">
        <div className="features-content">
          <div className="section-header">
            <h2 className="section-title">What We Offer</h2>
            <p className="section-subtitle">
              Comprehensive managed IT services designed for businesses of all sizes
            </p>
          </div>

          <div className="features-grid">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="feature-card">
                  <div className="feature-icon-wrapper">
                    <Icon size={40} className="feature-icon" />
                  </div>
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="metrics-section">
        <div className="metrics-content">
          <h2 className="section-title">Results That Speak</h2>
          <div className="metrics-grid">
            {metrics.map((metric, index) => {
              const IconComponent = iconMap[metric.icon] || Zap;
              return (
                <div key={index} className="metric-card">
                  <IconComponent className="metric-icon" size={32} />
                  <div className="metric-value">{metric.label}</div>
                  <div className="metric-label">{metric.sublabel}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Links */}
      <section className="service-links-section">
        <div className="service-links-content">
          <div className="section-header">
            <h2 className="section-title">Choose Your Service Type</h2>
            <p className="section-subtitle">
              We provide specialized IT solutions for both homes and businesses
            </p>
          </div>

          <div className="service-types-grid">
            <div className="service-type-card" onClick={() => navigate('/residential')}>
              <h3>Residential IT Services</h3>
              <p>Professional IT support for your home — from basic remote help to full concierge service</p>
              <button className="btn-primary">
                View Residential Plans
                <ArrowRight size={20} />
              </button>
            </div>

            <div className="service-type-card" onClick={() => navigate('/services')}>
              <h3>Business IT Services</h3>
              <p>Enterprise-grade managed services — build your custom IT solution from 16 professional services</p>
              <button className="btn-primary">
                Build Your Business Plan
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-detailed-section" id="why-choose">
        <div className="why-choose-detailed-content">
          <div className="section-header">
            <h2 className="section-title">Why Choose TopTier Technologies</h2>
            <p className="section-subtitle">
              Three pillars that set us apart from other MSPs
            </p>
          </div>

          <div className="why-choose-grid">
            {whyChooseUs.map((section, index) => (
              <div key={index} className="why-choose-card">
                <h3 className="why-choose-card-title">{section.title}</h3>
                <ul className="why-choose-list">
                  {section.points.map((point, idx) => (
                    <li key={idx} className="why-choose-item">
                      <CheckCircle2 size={20} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transparent Pricing CTA */}
      <section className="transparent-pricing-section">
        <div className="transparent-pricing-content">
          <div className="pricing-badge">Transparent Pricing</div>
          <h2 className="pricing-title">
            Build Your Plan. See Your Price. No Surprises.
          </h2>
          <p className="pricing-description">
            Unlike other MSPs, we believe in complete transparency. Use our interactive service builder to select exactly what you need and see your monthly cost in real-time. No hidden fees. No unexpected charges. Just honest pricing for honest service.
          </p>
          <button className="btn-primary" onClick={() => navigate('/services')} style={{ margin: '0 auto', display: 'flex' }}>
            Start Building Your Plan
            <ArrowRight size={20} />
          </button>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta-section">
        <div className="final-cta-content">
          <h2 className="final-cta-title">Ready to Experience the Difference?</h2>
          <p className="final-cta-subtitle">
            Join businesses across Florida and Georgia who trust TopTier for their IT needs
          </p>
          
          <div className="final-cta-buttons">
            <button className="btn-primary" onClick={() => navigate('/services')}>
              Build Your Custom Plan
              <ArrowRight size={20} />
            </button>
            <button className="btn-secondary" onClick={() => window.open('tel:8506103889')}>
              Call (850) 610-3889
              <ArrowRight size={20} />
            </button>
          </div>

          <div className="trust-badges">
            <div className="trust-badge">Microsoft Partner</div>
            <div className="trust-badge">Fortinet Certified</div>
            <div className="trust-badge">Dell Technologies</div>
            <div className="trust-badge">Cisco Partner</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="services-footer">
        <div className="footer-content">
          <div className="footer-section">
            <img
              src="https://customer-assets.emergentagent.com/job_managed-tech-hub/artifacts/dmi0lnjh_8.png"
              alt="TopTier Technologies"
              className="footer-logo"
            />
            <p className="footer-description">
              Delivering cutting-edge managed IT services across Florida and Georgia.
            </p>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#why-choose">Why Choose Us</a></li>
              <li><a href="/services">Build Your Plan</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-links">
              <li><a href="/services#strategic">Strategic Services</a></li>
              <li><a href="/services#it-services">IT Services</a></li>
              <li><a href="/services#cybersecurity">Cybersecurity</a></li>
              <li><a href="/services#cloud">Cloud & Infrastructure</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-heading">Contact</h4>
            <ul className="footer-links">
              <li>(850) 610-3889</li>
              <li>info@toptiertech.com</li>
              <li>24/7 Support Available</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 TopTier Technologies. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
