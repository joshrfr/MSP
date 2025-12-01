import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, Shield, Phone, ArrowRight, Clock } from 'lucide-react';
import Navbar from '../components/Navbar';
import ResidentialFooter from '../components/ResidentialFooter';
import './PlanDetail.css';

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
      <section className="service-hero service-hero-compact plan-detail-hero">
        <div className="container">
          <div className="plan-detail-badge">
            Most Popular Plan
          </div>
          <h1 className="service-hero-title plan-detail-title">HomeCare Plus</h1>
          <div className="plan-detail-pricing">
            $95 - $135/month
          </div>
          <p className="service-hero-subtitle">
            Comprehensive IT support with proactive monitoring. Perfect for families and home offices.
          </p>
          <div className="plan-detail-cta-buttons">
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
      
      
      <ResidentialFooter />
    </div>
  );
};

export default HomeCarePlus;