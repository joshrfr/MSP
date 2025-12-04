import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './ServiceComparison.css';

const ServiceComparison = () => {
  const navigate = useNavigate();

  const tiers = [
    {
      name: 'CORE',
      subtitle: 'Remote Workers & Home Offices',
      price: '$50-110/mo',
      description: '2-6 devices · 24h response',
      features: [
        'Backup & disaster recovery',
        'Antivirus protection',
        'System patching',
        'Email & phone support',
        'Remote support only'
      ],
      cta: 'Get Started',
      recommended: false
    },
    {
      name: 'CORE+',
      subtitle: 'Small Business',
      price: '$95/user/mo',
      description: '3-50 users · 1-4h response',
      features: [
        'RMM monitoring',
        'EDR (Endpoint Detection & Response)',
        'Dedicated account manager',
        'Quarterly business review (QBR)',
        'Priority support'
      ],
      cta: 'Get Started',
      recommended: false
    },
    {
      name: 'PREMIUM',
      subtitle: 'Mid-Market',
      price: '$145/user/mo',
      description: '50-250 users · 15min response (24/7)',
      features: [
        '24/7 support available',
        'Virtual CIO (vCIO)',
        'Monthly disaster recovery testing',
        'Compliance management',
        'Advanced security monitoring'
      ],
      cta: 'Get Started',
      recommended: true
    },
    {
      name: 'ENTERPRISE',
      subtitle: 'Large Organizations',
      price: '$150-175/user/mo',
      description: '250+ users · 30sec response (24/7)',
      features: [
        'Dedicated operations team',
        'SOC/NOC monitoring',
        'Custom IT strategy',
        'White-glove service',
        'Enterprise-grade security'
      ],
      cta: 'Schedule Call',
      recommended: false
    }
  ];

  return (
    <section className="service-comparison-section">
      <div className="comparison-container">
        <div className="comparison-header">
          <h2 className="comparison-title">Service Tiers Built for Your Business</h2>
          <p className="comparison-subtitle">
            Choose the perfect plan or build a custom solution tailored to your needs
          </p>
        </div>

        <div className="comparison-grid">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`comparison-card ${tier.recommended ? 'recommended' : ''}`}
            >
              {tier.recommended && (
                <div className="recommended-badge">MOST POPULAR</div>
              )}

              <div className="tier-header">
                <h3 className="tier-name">{tier.name}</h3>
                <p className="tier-subtitle">{tier.subtitle}</p>
                <div className="tier-price">{tier.price}</div>
                <p className="tier-description">{tier.description}</p>
              </div>

              <ul className="tier-features-list">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="feature-item">
                    <CheckCircle2 size={20} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`tier-cta-btn ${tier.recommended ? 'primary' : 'secondary'}`}
                onClick={() => navigate('/services')}
              >
                {tier.cta}
                <ArrowRight size={18} />
              </button>
            </div>
          ))}
        </div>

        <div className="comparison-footer">
          <p>
            All plans include 24/7 monitoring, technical support, and our no-hassle guarantee.
            <br />
            Not sure which plan is right for you?
          </p>
          <button className="footer-cta-btn" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            Request Your Free Assessment
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServiceComparison;
