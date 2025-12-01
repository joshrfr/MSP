import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './ServiceComparison.css';

const ServiceComparison = () => {
  const navigate = useNavigate();

  const tiers = [
    {
      name: 'Essential',
      subtitle: 'For Small Businesses',
      price: 'Custom',
      description: 'Perfect for startups and small teams',
      features: [
        'Remote support & monitoring',
        'Antivirus & malware protection',
        'Basic backup services',
        '24/7 emergency support',
        'Email support included'
      ],
      cta: 'Get Started',
      recommended: false
    },
    {
      name: 'Professional',
      subtitle: 'For Growing Businesses',
      price: 'Custom',
      description: 'Most popular choice for mid-size companies',
      features: [
        'All Essential features',
        'Advanced threat detection',
        'Managed firewall & VPN',
        'Cloud infrastructure management',
        'Priority phone support',
        'Quarterly security audits'
      ],
      cta: 'Get Started',
      recommended: true
    },
    {
      name: 'Enterprise',
      subtitle: 'For Large Organizations',
      price: 'Custom',
      description: 'Complete managed IT solution',
      features: [
        'All Professional features',
        'Dedicated account manager',
        'Advanced cybersecurity services',
        'Custom SLA agreements',
        'Proactive threat hunting',
        'Strategic IT planning & consulting',
        '24/7 onsite support available'
      ],
      cta: 'Schedule Demo',
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
