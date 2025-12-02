import React, { useState } from 'react';
import { ArrowRight, Check, Shield, Zap, Users, Building2 } from 'lucide-react';
import Navbar from '../components/Navbar';
import BusinessFooter from '../components/BusinessFooter';
import FloatingActionButton from '../components/FloatingActionButton';
import '../Services.css';

const BusinessPlans = () => {
  const [businessUsers, setBusinessUsers] = useState([50]);
  const [propertyManagement, setPropertyManagement] = useState([10]);

  const calculateBusinessPrice = (users) => {
    // Simple pricing: $99 base + $5 per user per month
    return 99 + (users * 5);
  };

  const calculatePropertyPrice = (sites) => {
    // Simple pricing: $199 base + $25 per site per month
    return 199 + (sites * 25);
  };

  const businessPrice = calculateBusinessPrice(businessUsers[0]);
  const propertyPrice = calculatePropertyPrice(propertyManagement[0]);

  return (
    <div className="services-page">
      {/* Header */}
      <Navbar type="business" />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Simple Plans for Any Size Business
            </h1>
            <p className="hero-subtitle">
              No hidden fees. Simple prices. Just tell us how many people work for you, and we'll show you the price.
            </p>
            <div className="hero-buttons">
              <button
                className="btn-primary"
                onClick={() => document.getElementById('plans').scrollIntoView({ behavior: 'smooth' })}
              >
                View Plans
                <ArrowRight size={20} />
              </button>
              <button className="btn-secondary" onClick={() => window.open('tel:8506103889')}>
                Call Us
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section id="plans" className="service-builder-section">
        <div className="builder-container" style={{ gridTemplateColumns: '1fr' }}>
          <div className="builder-main">
            <div className="section-header">
              <h2 className="section-title">Pick Your Plan</h2>
              <p className="section-subtitle">All plans come with 24/7 help and a 90-day money-back guarantee</p>
            </div>

            {/* Business Plans */}
            <div className="service-category">
              <h3 className="category-title">
                <Zap style={{ display: 'inline', marginRight: '10px' }} size={24} />
                Business Plans
              </h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '30px' }}>
                For teams of any size who need IT help and security
              </p>

              <div style={{ backgroundColor: 'var(--bg-secondary)', padding: '40px', borderRadius: '8px', marginBottom: '40px', border: '1px solid var(--border-subtle)' }}>
                <h4 style={{ color: 'var(--text-primary)', fontSize: '20px', marginBottom: '20px' }}>
                  How many people work for you?
                </h4>

                <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginBottom: '20px' }}>
                  <input
                    type="range"
                    min="10"
                    max="200"
                    step="1"
                    value={businessUsers[0]}
                    onChange={(e) => setBusinessUsers([parseInt(e.target.value)])}
                    style={{
                      flex: 1,
                      height: '8px',
                      borderRadius: '5px',
                      background: 'linear-gradient(to right, var(--brand-primary) 0%, var(--brand-primary) ' + ((businessUsers[0] - 10) / 190 * 100) + '%, var(--border-subtle) ' + ((businessUsers[0] - 10) / 190 * 100) + '%, var(--border-subtle) 100%)',
                      outline: 'none',
                      cursor: 'pointer'
                    }}
                  />
                  <span style={{ color: 'var(--brand-primary)', fontSize: '24px', fontWeight: '600', minWidth: '60px' }}>
                    {businessUsers[0]}
                  </span>
                </div>

                <div style={{ backgroundColor: 'rgba(135, 206, 235, 0.1)', padding: '20px', borderRadius: '8px', marginBottom: '20px' }}>
                  <p style={{ color: 'var(--text-secondary)', margin: '0 0 10px 0' }}>Monthly Price</p>
                  <p style={{ fontSize: '36px', fontWeight: '600', color: 'var(--brand-primary)', margin: 0 }}>
                    ${businessPrice}
                    <span style={{ fontSize: '16px', color: 'var(--text-secondary)' }}>/month</span>
                  </p>
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <h5 style={{ color: 'var(--text-primary)', marginBottom: '15px' }}>What You Get:</h5>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {[
                      'Help anytime, 24/7',
                      'Protection from viruses and bad software',
                      'Backup your files in the cloud',
                      'Watch your network for problems',
                      'Keep your software up to date'
                    ].map((feature, idx) => (
                      <li key={idx} style={{ display: 'flex', gap: '10px', marginBottom: '10px', color: 'var(--text-secondary)' }}>
                        <Check size={20} style={{ color: 'var(--brand-primary)', flexShrink: 0 }} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  className="btn-primary"
                  style={{ width: '100%', justifyContent: 'center' }}
                  onClick={() => window.open('tel:8506103889')}
                >
                  Get Started
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>

            {/* Property Management Plans */}
            <div className="service-category">
              <h3 className="category-title">
                <Building2 style={{ display: 'inline', marginRight: '10px' }} size={24} />
                Property Manager Plans
              </h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '30px' }}>
                Control IT for all your properties from one place
              </p>

              <div style={{ backgroundColor: 'var(--bg-secondary)', padding: '40px', borderRadius: '8px', marginBottom: '40px', border: '1px solid var(--border-subtle)' }}>
                <h4 style={{ color: 'var(--text-primary)', fontSize: '20px', marginBottom: '20px' }}>
                  How many properties do you have?
                </h4>

                <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginBottom: '20px' }}>
                  <input
                    type="range"
                    min="1"
                    max="50"
                    step="1"
                    value={propertyManagement[0]}
                    onChange={(e) => setPropertyManagement([parseInt(e.target.value)])}
                    style={{
                      flex: 1,
                      height: '8px',
                      borderRadius: '5px',
                      background: 'linear-gradient(to right, var(--brand-primary) 0%, var(--brand-primary) ' + ((propertyManagement[0] - 1) / 49 * 100) + '%, var(--border-subtle) ' + ((propertyManagement[0] - 1) / 49 * 100) + '%, var(--border-subtle) 100%)',
                      outline: 'none',
                      cursor: 'pointer'
                    }}
                  />
                  <span style={{ color: 'var(--brand-primary)', fontSize: '24px', fontWeight: '600', minWidth: '60px' }}>
                    {propertyManagement[0]}
                  </span>
                </div>

                <div style={{ backgroundColor: 'rgba(135, 206, 235, 0.1)', padding: '20px', borderRadius: '8px', marginBottom: '20px' }}>
                  <p style={{ color: 'var(--text-secondary)', margin: '0 0 10px 0' }}>Monthly Price</p>
                  <p style={{ fontSize: '36px', fontWeight: '600', color: 'var(--brand-primary)', margin: 0 }}>
                    ${propertyPrice}
                    <span style={{ fontSize: '16px', color: 'var(--text-secondary)' }}>/month</span>
                  </p>
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <h5 style={{ color: 'var(--text-primary)', marginBottom: '15px' }}>What You Get:</h5>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {[
                      'Control all your properties in one place',
                      'Help 24/7 at every location',
                      'Watch security across all sites',
                      'Tenants and staff can log in',
                      'Fast help when emergencies happen'
                    ].map((feature, idx) => (
                      <li key={idx} style={{ display: 'flex', gap: '10px', marginBottom: '10px', color: 'var(--text-secondary)' }}>
                        <Check size={20} style={{ color: 'var(--brand-primary)', flexShrink: 0 }} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  className="btn-primary"
                  style={{ width: '100%', justifyContent: 'center' }}
                  onClick={() => window.open('tel:8506103889')}
                >
                  Get Started
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-section">
        <div className="why-choose-content">
          <div className="section-header">
            <h2 className="section-title">Why Pick TopTier?</h2>
            <p className="section-subtitle">Simple. Fast. Honest.</p>
          </div>

          <div className="metrics-grid">
            {[
              { icon: Shield, label: 'Money-Back Guarantee', desc: 'Not happy? We give your money back.' },
              { icon: Zap, label: 'Fast Answers', desc: 'We help you in 15 minutes.' },
              { icon: Users, label: 'Real People', desc: 'Talk to a real person every time.' }
            ].map((metric, idx) => (
              <div key={idx} className="metric-card">
                <metric.icon className="metric-icon" size={48} />
                <h4 style={{ color: 'var(--text-primary)', fontSize: '20px', marginBottom: '8px' }}>
                  {metric.label}
                </h4>
                <p style={{ color: 'var(--text-secondary)', margin: 0 }}>
                  {metric.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="recommendation-section">
        <div className="recommendation-content">
          <div style={{ textAlign: 'center' }}>
            <h2 className="section-title">
              90-Day Money-Back Guarantee
            </h2>
            <p className="section-subtitle" style={{ maxWidth: '700px', margin: '20px auto' }}>
              We know you'll like what we do. But if you don't, give us 90 days to make it right. If you're still not happy, we give your money back. No questions. No hassle.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="final-cta-section">
        <div className="final-cta-content">
          <h2 className="final-cta-title">Ready to Get Started?</h2>
          <p className="final-cta-subtitle">
            Give us a call or start your free consultation today.
          </p>
          <div className="final-cta-buttons">
            <button className="btn-primary" onClick={() => window.open('tel:8506103889')}>
              Call (850) 610-3889
              <ArrowRight size={20} />
            </button>
            <button className="btn-secondary" onClick={() => {
              if (window._3cxChat) window._3cxChat.show();
            }}>
              Chat With Us
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      <BusinessFooter />
      <FloatingActionButton />
    </div>
  );
};

export default BusinessPlans;
