import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Users, Building2, Zap } from 'lucide-react';
import Navbar from '../components/Navbar';
import BusinessFooter from '../components/BusinessFooter';
import '../Services.css';

const PlanSelector = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const tiers = [
    {
      id: 'core',
      title: 'Core Plan',
      icon: Users,
      subtitle: 'Individual / SOHO',
      description: 'You handle most IT yourself or have minimal needs',
      features: [
        'Best for: 1-2 people or home offices',
        'Price: $50-$250/month depending on service',
        'No qualification needed',
        'Start immediately',
        'Perfect for learning'
      ],
      color: '#87CEEB',
      recommendation: 'Open to anyone who wants to get started right now',
      cta: 'Get Core Plan',
      action: () => navigate('/business-plans?tier=core')
    },
    {
      id: 'core-plus',
      title: 'Core+ Plan',
      icon: Building2,
      subtitle: 'Small Business',
      description: 'Growing team that needs reliable IT support',
      features: [
        'Best for: 3-50 employees / 2-10 properties',
        'Price: $150-$450/month',
        '2-minute qualification quiz',
        'Fast approval (instant or 2 hours)',
        'Right-fit recommendations'
      ],
      color: '#00D9FF',
      recommendation: 'Most growing businesses qualify instantly',
      cta: 'Take Quick Quiz',
      action: () => navigate('/questionnaire-core-plus')
    },
    {
      id: 'premium',
      title: 'Premium Plan',
      icon: Zap,
      subtitle: 'Established Business',
      description: 'Serious businesses requiring comprehensive IT strategy',
      features: [
        'Best for: 50-250 employees / 10-30 properties',
        'Price: $500-$1,500/month',
        '10-minute detailed questionnaire',
        'Manual review + discovery call',
        'Custom SLA agreements'
      ],
      color: '#FFD700',
      recommendation: 'Requires verification but high success rate',
      cta: 'Start Premium Qualification',
      action: () => navigate('/questionnaire-premium')
    },
    {
      id: 'enterprise',
      title: 'Enterprise Plan',
      icon: Users,
      subtitle: 'Large Organization',
      description: 'Custom solutions for complex enterprise needs',
      features: [
        'Best for: 250+ employees / 30+ properties',
        'Price: $2,000-$10,000+/month',
        'Executive discovery call',
        'Custom proposal & negotiation',
        'White-glove implementation'
      ],
      color: '#FF6B6B',
      recommendation: 'Direct sales team engagement',
      cta: 'Contact Sales',
      action: () => navigate('/enterprise-discovery')
    }
  ];

  const handleSelect = (tier) => {
    setSelected(tier.id);
    setShowExplanation(true);
    // Auto-execute action after 2 seconds
    setTimeout(() => {
      tier.action();
    }, 2000);
  };

  if (selected) {
    const selectedTier = tiers.find(t => t.id === selected);
    return (
      <div className="services-page">
        <Navbar type="business" />
        <section style={{ padding: '100px 7.6923%', textAlign: 'center', minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <CheckCircle2 size={80} style={{ color: selectedTier.color, marginBottom: '30px' }} />
            <h2 style={{ color: 'var(--text-primary)', fontSize: '36px', marginBottom: '20px' }}>
              Perfect! {selectedTier.title} is right for you.
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '18px', marginBottom: '30px' }}>
              {selectedTier.recommendation}
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '16px' }}>
              Redirecting you in 2 seconds...
            </p>
          </div>
        </section>
        <BusinessFooter />
      </div>
    );
  }

  return (
    <div className="services-page">
      <Navbar type="business" />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Find Your Perfect Plan
            </h1>
            <p className="hero-subtitle">
              Answer a few quick questions and we'll recommend exactly what you need — no more, no less.
            </p>
          </div>
        </div>
      </section>

      {/* Plan Selector Section */}
      <section className="service-builder-section">
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ marginBottom: '60px', textAlign: 'center' }}>
            <h2 className="section-title">What Best Describes You?</h2>
            <p className="section-subtitle">Pick the option that sounds most like your situation</p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px',
            marginBottom: '60px'
          }}>
            {tiers.map((tier) => {
              const Icon = tier.icon;
              return (
                <div
                  key={tier.id}
                  onClick={() => handleSelect(tier)}
                  style={{
                    backgroundColor: 'var(--bg-secondary)',
                    border: `2px solid ${tier.color}`,
                    padding: '40px 32px',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    transform: 'scale(1)',
                    opacity: 1
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.02)';
                    e.currentTarget.style.boxShadow = `0 12px 48px ${tier.color}40`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <Icon size={48} style={{ color: tier.color, marginBottom: '20px' }} />

                  <h3 style={{ color: tier.color, fontSize: '24px', fontWeight: '600', margin: '0 0 8px 0' }}>
                    {tier.title}
                  </h3>

                  <p style={{ color: 'var(--text-secondary)', fontSize: '14px', fontWeight: '500', margin: '0 0 16px 0' }}>
                    {tier.subtitle}
                  </p>

                  <p style={{ color: 'var(--text-secondary)', fontSize: '16px', lineHeight: '1.6', margin: '0 0 20px 0' }}>
                    {tier.description}
                  </p>

                  <div style={{ marginBottom: '24px', paddingTop: '16px', borderTop: `1px solid var(--border-subtle)` }}>
                    <h4 style={{ color: 'var(--text-primary)', fontSize: '14px', fontWeight: '600', marginBottom: '12px', textAlign: 'left' }}>
                      Includes:
                    </h4>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      {tier.features.map((feature, idx) => (
                        <li key={idx} style={{
                          color: 'var(--text-secondary)',
                          fontSize: '13px',
                          marginBottom: '8px',
                          textAlign: 'left'
                        }}>
                          ✓ {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    style={{
                      width: '100%',
                      padding: '12px 20px',
                      background: tier.color,
                      color: '#000',
                      border: 'none',
                      borderRadius: '6px',
                      fontSize: '16px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
                    onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                  >
                    {tier.cta}
                    <ArrowRight size={18} />
                  </button>
                </div>
              );
            })}
          </div>

          {/* Info Section */}
          <div style={{
            backgroundColor: 'rgba(135, 206, 235, 0.05)',
            padding: '40px',
            borderRadius: '12px',
            border: '1px solid var(--border-subtle)',
            textAlign: 'center'
          }}>
            <h3 style={{ color: 'var(--text-primary)', fontSize: '24px', marginBottom: '16px' }}>
              Not Sure Which is Right for You?
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '16px', marginBottom: '24px' }}>
              No worries! Our team can help. Give us a quick call and we'll point you to the perfect plan.
            </p>
            <button
              onClick={() => window.open('tel:8506103889')}
              style={{
                padding: '12px 32px',
                background: 'transparent',
                color: '#87CEEB',
                border: '2px solid #87CEEB',
                borderRadius: '6px',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#87CEEB';
                e.currentTarget.style.color = '#000';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#87CEEB';
              }}
            >
              Call (850) 610-3889
            </button>
          </div>
        </div>
      </section>

      <BusinessFooter />
    </div>
  );
};

export default PlanSelector;
