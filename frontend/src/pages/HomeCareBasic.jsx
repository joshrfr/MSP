import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, Shield, Phone, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import ResidentialFooter from '../components/ResidentialFooter';

const HomeCareBasic = () => {
  const navigate = useNavigate();

  const features = [
    'Remote support for basic tech issues',
    'Virus and malware removal assistance',
    'Software installation guidance',
    'Email setup and troubleshooting',
    'Basic network connectivity help',
    'Password recovery support',
    'Standard business hours support (9 AM - 5 PM EST)',
    'Email ticket system access'
  ];

  const addons = [
    { name: 'Additional Device Support', price: '$15/month per device' },
    { name: 'Priority Support Upgrade', price: '$25/month' },
    { name: 'On-Site Visit (if needed)', price: '$125 per visit' }
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
          <span className="breadcrumb-item">HomeCare Basic</span>
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
            Perfect for Basic Home Users
          </div>
          <h1 className="service-hero-title">HomeCare Basic</h1>
          <div style={{fontSize: '2.5rem', fontWeight: 'bold', color: '#87CEEB', marginBottom: '1rem'}}>
            $50 - $80/month
          </div>
          <p className="service-hero-subtitle">
            Essential remote IT support for your home. Get help when you need it without breaking the bank.
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
              Our HomeCare Basic plan provides reliable remote support for everyday tech issues. Perfect for individuals 
              and families who need occasional help with their home technology.
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
                  <h3 style={{color: '#87CEEB', marginBottom: '0.5rem'}}>Submit a Support Ticket</h3>
                  <p style={{color: '#e0e0e0'}}>
                    Email us at helpdesk@tttmsp.com or use our online portal to describe your issue.
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
                  <h3 style={{color: '#87CEEB', marginBottom: '0.5rem'}}>We'll Respond During Business Hours</h3>
                  <p style={{color: '#e0e0e0'}}>
                    Our team will reach out within 4 hours during business hours (9 AM - 5 PM EST, Mon-Fri).
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
                  <h3 style={{color: '#87CEEB', marginBottom: '0.5rem'}}>Remote Support Session</h3>
                  <p style={{color: '#e0e0e0'}}>
                    We'll connect to your device remotely (with your permission) and resolve your issue.
                  </p>
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
          <h2>Need More Support?</h2>
          <p>Compare our HomeCare plans to find the perfect fit for your needs.</p>
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

export default HomeCareBasic;
