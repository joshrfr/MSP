import React from 'react';
import NetworkAnimation from '../components/NetworkAnimation';
import RacingBlueLight from '../components/RacingBlueLight';
import ServiceRequestForm from '../components/ServiceRequestForm';
import Navbar from '../components/Navbar';
import { ArrowRight, CheckCircle2, DollarSign, Shield, Zap, TrendingUp, Phone } from 'lucide-react';
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
      <Navbar type="home" />
      <RacingBlueLight />

      {/* Hero Section */}
      <section className="hero-section" id="home">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Your Trusted IT Partner Across Florida & Georgia
            </h1>
            <p className="hero-tagline">
              Quality at the Heart, Innovation Beyond Boundaries
            </p>
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

      {/* Service Request Form */}
      <section className="service-request-section">
        <div className="container">
          <ServiceRequestForm />
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
            <div className="social-links">
              <a href="https://instagram.com/toptiertechnologies" target="_blank" rel="noopener noreferrer" className="social-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://facebook.com/toptiertechnologies" target="_blank" rel="noopener noreferrer" className="social-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://linkedin.com/company/toptiertechnologies" target="_blank" rel="noopener noreferrer" className="social-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
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
              <li><a href="/strategic-services">Strategic Services</a></li>
              <li><a href="/it-services">IT Services</a></li>
              <li><a href="/cybersecurity">Cybersecurity</a></li>
              <li><a href="/cloud-infrastructure">Cloud & Infrastructure</a></li>
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
          <p>&copy; 2026 TopTier Technologies. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
