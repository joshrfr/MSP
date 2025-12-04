import React from 'react';
import NetworkAnimation from '../components/NetworkAnimation';
import RacingBlueLight from '../components/RacingBlueLight';
import ServiceRequestForm from '../components/ServiceRequestForm';
import CallbackForm from '../components/CallbackForm';
import ChatWidget from '../components/ChatWidget';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowRight, CheckCircle2, Shield, Zap, Phone, TrendingUp, DollarSign } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { metrics, pricingTiers } from '../mock';

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
      <section className="hero-section hero-simplified" id="home">
        <div className="hero-background">
          <NetworkAnimation />
        </div>
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              TopTier Quality
            </h1>
            <p className="hero-tagline">
              Quality at the Heart.<br />
              Innovation Beyond Boundaries.
            </p>
            <p className="hero-subtitle">
              Enterprise-Grade IT Support.<br />
              Local Response. Transparent Pricing.
            </p>
            <div className="hero-buttons">
              <button
                className="btn-primary"
                onClick={() => {
                  document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View Plans
                <ArrowRight size={20} />
              </button>
              <a href="#services" className="btn-link" onClick={(e) => {
                e.preventDefault();
                document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
              }}>
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="features-section" id="services">
        <div className="features-content">
          <div className="section-header">
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle">
              Comprehensive managed IT services for organizations of all sizes
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

      {/* Pricing Plans */}
      <section className="pricing-section" id="pricing">
        <div className="pricing-content">
          <div className="section-header">
            <h2 className="section-title">Simple, Transparent Pricing</h2>
            <p className="section-subtitle">
              Choose the plan that fits your organization's needs
            </p>
          </div>

          <div className="pricing-grid">
            {pricingTiers.map((tier) => (
              <div key={tier.id} className={`pricing-card ${tier.recommended ? 'recommended' : ''}`}>
                {tier.recommended && <div className="recommended-badge">Most Popular</div>}
                <h3 className="pricing-tier-name">{tier.name}</h3>
                <div className="pricing-tier-price">{tier.priceRange}</div>
                <p className="pricing-tier-description">{tier.description}</p>
                <p className="pricing-tier-users">{tier.users}</p>
                <div className="pricing-tier-sla">SLA: {tier.sla}</div>
                <ul className="pricing-tier-features">
                  {tier.features.map((feature, idx) => (
                    <li key={idx}>
                      <CheckCircle2 size={16} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className="btn-primary"
                  onClick={() => window.open('https://app.tttmsp.com', '_blank')}
                >
                  Get Started
                  <ArrowRight size={18} />
                </button>
              </div>
            ))}
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
            Honest Pricing. No Surprises.
          </h2>
          <p className="pricing-description">
            Unlike other MSPs, we believe in complete transparency. No hidden fees. No unexpected charges. Just honest pricing for honest service.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginTop: '30px' }}>
            <button className="btn-primary" onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}>
              View Our Plans
              <ArrowRight size={20} />
            </button>
            <button className="btn-secondary" onClick={() => window.open('tel:8506103889')}>
              <Phone size={18} />
              Talk to an Expert
            </button>
          </div>
        </div>
      </section>

      {/* Callback Form Section */}
      <CallbackForm />

      {/* Final CTA */}
      <section className="final-cta-section">
        <div className="final-cta-content">
          <h2 className="final-cta-title">Let's Transform Your IT Operations</h2>
          <p className="final-cta-subtitle">
            Get in touch today for a free IT assessment and discover how TopTier can improve your business
          </p>

          <div className="final-cta-buttons">
            <button className="btn-primary" onClick={() => window.open('tel:8506103889')}>
              Call Now: (850) 610-3889
              <Phone size={20} />
            </button>
            <button className="btn-secondary" onClick={() => navigate('/services')}>
              Build Your Plan
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
      <Footer />

      {/* Chat Widget */}
      <ChatWidget />

    </div>
  );
};

export default Home;
