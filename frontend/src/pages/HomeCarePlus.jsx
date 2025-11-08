import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, Shield, Phone, ArrowRight, Clock } from 'lucide-react';
import Navbar from '../components/Navbar';
import ResidentialFooter from '../components/ResidentialFooter';

const HomeCarePlus = () => {
  const navigate = useNavigate();

  const features = [
    'Everything in HomeCare Basic',
    'Extended support hours (8 AM - 8 PM EST)',
    'Proactive system monitoring and maintenance',
    'Antivirus software included',
    'Monthly system health check-ups',
    'Priority response time (2 hours)',
    'Basic cybersecurity consultation',
    'Cloud backup setup and monitoring',
    'Smart home device support',
    'Email and phone support channels'
  ];

  const addons = [
    { name: 'Additional Device Support', price: '$15/month per device' },
    { name: 'On-Site Visit (if needed)', price: '$100 per visit' },
    { name: 'Premium Antivirus Upgrade', price: '$10/month' }
  ];

  return (
    <div className="plan-detail-page">
      {/* Header */}
      <Navbar type="residential" />

      {/* Breadcrumb */}
      <div className="breadcrumb-container">
        <div className="container">
          <span className="breadcrumb-item" onClick={() => navigate('/')} style={{cursor: 'pointer'}}>Home</span>
          <span className="breadcrumb-separator">›</span>
          <span className="breadcrumb-item" onClick={() => navigate('/residential')} style={{cursor: 'pointer'}}>Residential</span>
          <span className="breadcrumb-separator">›</span>
          <span className="breadcrumb-item">HomeCare Plus</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="service-hero service-hero-compact" style={{background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)'}}>
        <div className="container">
          <div className="plan-badge" style={{
            display: 'inline-block',
            padding: '0.5rem 1rem',
            background: 'rgba(135, 206, 235, 0.2)',
            border: '1px solid #87CEEB',
            borderRadius: '20px',
            color: '#87CEEB',
            fontSize: '0.9rem',
            marginBottom: '1rem'
          }}>
            Most Popular Plan
          </div>
          <h1 className="service-hero-title">HomeCare Plus</h1>
          <div style={{fontSize: '2.5rem', fontWeight: 'bold', color: '#87CEEB', marginBottom: '1rem'}}>
            $95 - $135/month
          </div>
          <p className="service-hero-subtitle">
            Comprehensive IT support with proactive monitoring. Perfect for families and home offices.
          </p>
          <div style={{display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap'}}>
            <button className="btn-primary" onClick={() => navigate('/residential#service-request')}>
              Get Started
              <ArrowRight size={20} />
            </button>
            <button className="btn-secondary" onClick={() => window.open('tel:8506103889')}>
              <Phone size={18} />
              Call (850) 610-3889
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="service-content">
        <div className="container">
          <div className="content-block">
            <h2 className="content-title">What's Included</h2>
            <p className="content-description">
              Our most popular plan combines proactive monitoring with comprehensive support. Ideal for families 
              who want peace of mind and small home offices that need reliable tech support.
            </p>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1rem',
              marginTop: '2rem'
            }}>
              {features.map((feature, index) => (
                <div key={index} style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.75rem',
                  padding: '1rem',
                  background: 'rgba(135, 206, 235, 0.05)',
                  borderRadius: '8px',
                  border: '1px solid rgba(135, 206, 235, 0.2)'
                }}>
                  <CheckCircle2 size={24} style={{color: '#87CEEB', flexShrink: 0, marginTop: '0.1rem'}} />
                  <span style={{color: '#e0e0e0'}}>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="content-block highlight-block">
            <div className="content-icon">
              <Shield size={48} />
            </div>
            <h2 className="content-title">How It Works</h2>
            <div style={{display: 'grid', gap: '1.5rem', marginTop: '2rem'}}>
              <div style={{display: 'flex', gap: '1rem'}}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: '#87CEEB',
                  color: '#1a1a2e',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  flexShrink: 0
                }}>1</div>
                <div>
                  <h3 style={{color: '#87CEEB', marginBottom: '0.5rem'}}>We Monitor Your Systems</h3>
                  <p style={{color: '#e0e0e0'}}>
                    Our proactive monitoring detects issues before they become problems.
                  </p>
                </div>
              </div>
              <div style={{display: 'flex', gap: '1rem'}}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: '#87CEEB',
                  color: '#1a1a2e',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  flexShrink: 0
                }}>2</div>
                <div>
                  <h3 style={{color: '#87CEEB', marginBottom: '0.5rem'}}>Priority Support When You Need It</h3>
                  <p style={{color: '#e0e0e0'}}>
                    Contact us via email or phone during extended hours (8 AM - 8 PM EST). Priority response within 2 hours.
                  </p>
                </div>
              </div>
              <div style={{display: 'flex', gap: '1rem'}}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: '#87CEEB',
                  color: '#1a1a2e',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  flexShrink: 0
                }}>3</div>
                <div>
                  <h3 style={{color: '#87CEEB', marginBottom: '0.5rem'}}>Monthly Check-ups</h3>
                  <p style={{color: '#e0e0e0'}}>
                    We'll perform monthly system health checks to keep everything running smoothly.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="content-block">
            <div className="content-icon">
              <Clock size={48} />
            </div>
            <h2 className="content-title">Extended Support Hours</h2>
            <p className="content-description">
              Unlike our Basic plan, HomeCare Plus offers extended support hours to accommodate busy schedules:
            </p>
            <div style={{
              marginTop: '2rem',
              padding: '2rem',
              background: 'rgba(135, 206, 235, 0.05)',
              borderRadius: '12px',
              border: '1px solid rgba(135, 206, 235, 0.2)'
            }}>
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem'}}>
                <div style={{textAlign: 'center'}}>
                  <div style={{fontSize: '2rem', fontWeight: 'bold', color: '#87CEEB'}}>8 AM - 8 PM</div>
                  <p style={{color: '#e0e0e0', marginTop: '0.5rem'}}>Monday - Friday</p>
                </div>
                <div style={{textAlign: 'center'}}>
                  <div style={{fontSize: '2rem', fontWeight: 'bold', color: '#87CEEB'}}>2 Hours</div>
                  <p style={{color: '#e0e0e0', marginTop: '0.5rem'}}>Priority Response Time</p>
                </div>
                <div style={{textAlign: 'center'}}>
                  <div style={{fontSize: '2rem', fontWeight: 'bold', color: '#87CEEB'}}>24/7</div>
                  <p style={{color: '#e0e0e0', marginTop: '0.5rem'}}>Proactive Monitoring</p>
                </div>
              </div>
            </div>
          </div>

          <div className="content-block">
            <h2 className="content-title">Optional Add-Ons</h2>
            <p className="content-description">
              Customize your plan with these optional services:
            </p>
            <div style={{
              display: 'grid',
              gap: '1rem',
              marginTop: '2rem'
            }}>
              {addons.map((addon, index) => (
                <div key={index} style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '1.5rem',
                  background: 'rgba(135, 206, 235, 0.05)',
                  borderRadius: '8px',
                  border: '1px solid rgba(135, 206, 235, 0.2)'
                }}>
                  <span style={{color: '#e0e0e0', fontSize: '1.1rem'}}>{addon.name}</span>
                  <span style={{color: '#87CEEB', fontWeight: 'bold', fontSize: '1.1rem'}}>{addon.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Compare Plans CTA */}
      <section className="service-cta">
        <div className="container">
          <h2>Compare All HomeCare Plans</h2>
          <p>See how our plans stack up and choose the one that's right for you.</p>
          <button className="btn-primary" onClick={() => navigate('/residential#plans')}>
            Compare All Plans
          </button>
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
              Professional IT support for your home.
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
            <h4 className="footer-heading">Plans</h4>
            <ul className="footer-links">
              <li><a href="/residential/homecare-basic">HomeCare Basic</a></li>
              <li><a href="/residential/homecare-plus">HomeCare Plus</a></li>
              <li><a href="/residential/homecare-elite">HomeCare Elite</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-heading">Contact</h4>
            <ul className="footer-links">
              <li><a href="tel:8506103889">(850) 610-3889</a></li>
              <li><a href="mailto:helpdesk@tttmsp.com">helpdesk@tttmsp.com</a></li>
              <li>8 AM - 8 PM EST</li>
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

export default HomeCarePlus;