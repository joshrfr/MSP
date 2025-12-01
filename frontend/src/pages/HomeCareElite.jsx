import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, Crown, Phone, ArrowRight, Star } from 'lucide-react';
import Navbar from '../components/Navbar';
import ResidentialFooter from '../components/ResidentialFooter';
import './PlanDetail.css';

const HomeCareElite = () => {
  const navigate = useNavigate();

  const features = [
    'Everything in HomeCare Plus',
    '24/7 priority support (phone & email)',
    'Dedicated account manager',
    'Quarterly on-site visits included',
    'Complete home network optimization',
    'Smart home device setup and integration',
    'Advanced cybersecurity protection',
    'Automatic cloud backup for all devices',
    'Premium antivirus (up to 5 devices)',
    'VPN setup and configuration',
    'Home office optimization',
    'Technology consultation and planning',
    'White-glove concierge service'
  ];

  const addons = [
    { name: 'Additional On-Site Visit', price: '$75 per visit' },
    { name: 'Extra Device Support (beyond 5)', price: '$10/month per device' },
    { name: 'Home Theater Setup', price: '$250 one-time' }
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
          <span className="breadcrumb-item">HomeCare Elite</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="service-hero service-hero-compact plan-detail-hero">
        <div className="container">
          <div className="plan-detail-elite-badge">
            <Crown size={16} style={{display: 'inline', marginRight: '0.5rem'}} />
            Premium Concierge Service
          </div>
          <h1 className="service-hero-title plan-detail-title">HomeCare Elite</h1>
          <div className="plan-detail-pricing">
            $155 - $179/month
          </div>
          <p className="service-hero-subtitle">
            White-glove IT concierge for your home. 24/7 support, quarterly on-site visits, and a dedicated account manager who knows your tech inside and out.
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
              HomeCare Elite is our premium offering — a true concierge service for homeowners who demand the best. 
              With 24/7 support, quarterly on-site visits, and a dedicated account manager, we treat your home technology 
              with the same care we give enterprise clients.
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
                  <Star size={24} style={{color: '#FF6B35', flexShrink: 0, marginTop: '0.1rem', fill: '#FF6B35'}} />
                  <span style={{color: '#e0e0e0'}}>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="content-block highlight-block">
            <div className="content-icon">
              <Crown size={48} />
            </div>
            <h2 className="content-title">The Elite Experience</h2>
            <div style={{display: 'grid', gap: '1.5rem', marginTop: '2rem'}}>
              <div style={{display: 'flex', gap: '1rem'}}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: '#FF6B35',
                  color: '#1a1a2e',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  flexShrink: 0
                }}>1</div>
                <div>
                  <h3 style={{color: '#87CEEB', marginBottom: '0.5rem'}}>Dedicated Account Manager</h3>
                  <p style={{color: '#e0e0e0'}}>
                    You'll have a single point of contact who knows your setup, your preferences, and your family's tech needs.
                  </p>
                </div>
              </div>
              <div style={{display: 'flex', gap: '1rem'}}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: '#FF6B35',
                  color: '#1a1a2e',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  flexShrink: 0
                }}>2</div>
                <div>
                  <h3 style={{color: '#87CEEB', marginBottom: '0.5rem'}}>24/7 Priority Support</h3>
                  <p style={{color: '#e0e0e0'}}>
                    Call or email anytime, day or night. Elite members get the fastest response times — typically under 30 minutes.
                  </p>
                </div>
              </div>
              <div style={{display: 'flex', gap: '1rem'}}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: '#FF6B35',
                  color: '#1a1a2e',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  flexShrink: 0
                }}>3</div>
                <div>
                  <h3 style={{color: '#87CEEB', marginBottom: '0.5rem'}}>Quarterly On-Site Visits</h3>
                  <p style={{color: '#e0e0e0'}}>
                    We'll visit your home every quarter to optimize your network, update systems, and ensure everything is running perfectly.
                  </p>
                </div>
              </div>
              <div style={{display: 'flex', gap: '1rem'}}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: '#FF6B35',
                  color: '#1a1a2e',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  flexShrink: 0
                }}>4</div>
                <div>
                  <h3 style={{color: '#87CEEB', marginBottom: '0.5rem'}}>Proactive Technology Planning</h3>
                  <p style={{color: '#e0e0e0'}}>
                    We'll help you plan technology upgrades, recommend new devices, and keep your home tech ecosystem future-proof.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="content-block">
            <h2 className="content-title">Elite Service Highlights</h2>
            <div style={{
              marginTop: '2rem',
              padding: '2rem',
              background: 'rgba(135, 206, 235, 0.05)',
              borderRadius: '12px',
              border: '1px solid rgba(135, 206, 235, 0.2)'
            }}>
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem'}}>
                <div style={{textAlign: 'center'}}>
                  <div style={{fontSize: '2rem', fontWeight: 'bold', color: '#FF6B35'}}>24/7</div>
                  <p style={{color: '#e0e0e0', marginTop: '0.5rem'}}>Priority Support</p>
                </div>
                <div style={{textAlign: 'center'}}>
                  <div style={{fontSize: '2rem', fontWeight: 'bold', color: '#FF6B35'}}>&lt;30min</div>
                  <p style={{color: '#e0e0e0', marginTop: '0.5rem'}}>Response Time</p>
                </div>
                <div style={{textAlign: 'center'}}>
                  <div style={{fontSize: '2rem', fontWeight: 'bold', color: '#FF6B35'}}>4x/year</div>
                  <p style={{color: '#e0e0e0', marginTop: '0.5rem'}}>On-Site Visits</p>
                </div>
                <div style={{textAlign: 'center'}}>
                  <div style={{fontSize: '2rem', fontWeight: 'bold', color: '#FF6B35'}}>1-on-1</div>
                  <p style={{color: '#e0e0e0', marginTop: '0.5rem'}}>Dedicated Manager</p>
                </div>
              </div>
            </div>
          </div>

          <div className="content-block">
            <h2 className="content-title">Optional Add-Ons</h2>
            <p className="content-description">
              Customize your Elite experience with these additional services:
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
          <h2>Experience the Difference</h2>
          <p>Join our Elite members who enjoy true concierge-level IT support.</p>
          <button className="btn-primary" onClick={() => navigate('/residential#service-request')}>
            Get Started Today
          </button>
        </div>
      </section>

      {/* Footer */}
      
      
      <ResidentialFooter />
    </div>
  );
};

export default HomeCareElite;