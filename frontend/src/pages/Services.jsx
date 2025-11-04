import React, { useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, CheckCircle2, Zap, Clock, Heart, Shield } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import PricingSummary from '../components/PricingSummary';
import FloatingActionButton from '../components/FloatingActionButton';
import { serviceCategories, pricingTiers, metrics } from '../mock';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';

const Services = () => {
  const [selectedServices, setSelectedServices] = useState([]);
  const [showRecommendation, setShowRecommendation] = useState(false);

  useEffect(() => {
    if (selectedServices.length > 0) {
      setShowRecommendation(true);
    } else {
      setShowRecommendation(false);
    }
  }, [selectedServices]);

  const handleToggleService = (categoryId, service) => {
    setSelectedServices((prev) => {
      const isSelected = prev.some((s) => s.id === service.id);
      if (isSelected) {
        return prev.filter((s) => s.id !== service.id);
      } else {
        return [...prev, { ...service, categoryId }];
      }
    });
  };

  const handleRemoveService = (serviceId) => {
    setSelectedServices((prev) => prev.filter((s) => s.id !== serviceId));
  };

  const handleConsultation = () => {
    console.log('Opening consultation form with:', selectedServices);
    alert('Consultation booking feature will be integrated with ITFLOW in production!');
  };

  const getRecommendedTier = () => {
    const total = selectedServices.reduce((sum, s) => sum + s.price, 0);
    if (total < 3000) return pricingTiers[0];
    if (total < 6000) return pricingTiers[1];
    return pricingTiers[2];
  };

  const iconMap = {
    Zap,
    Clock,
    Heart,
    Shield
  };

  return (
    <div className="services-page">
      {/* Header */}
      <header className="services-header">
        <div className="header-content">
          <div className="logo-container" onClick={() => window.location.href = '/'} style={{ cursor: 'pointer' }}>
            <img
              src="https://customer-assets.emergentagent.com/job_managed-tech-hub/artifacts/dmi0lnjh_8.png"
              alt="TopTier Technologies"
              className="header-logo"
            />
          </div>
          <nav className="header-nav">
            <a href="/" className="nav-link">Home</a>
            <a href="/#about" className="nav-link">About Us</a>
            <a href="/#why-choose" className="nav-link">Why Choose Us</a>
            <a href="#service-builder" className="nav-link">Build Your Plan</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Build Your Perfect IT Solution.
            </h1>
            <p className="hero-subtitle">
              Select the services you need and we'll tailor a plan that fits your business — from small office to enterprise scale.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary" onClick={() => document.getElementById('service-builder').scrollIntoView({ behavior: 'smooth' })}>
                Start Building My Plan
                <ArrowRight size={20} />
              </button>
              <button className="btn-secondary" onClick={handleConsultation}>
                Talk to a Specialist
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
          
          <div className="hero-spline">
            <Spline scene="https://prod.spline.design/P2ba0KHl7vT5qxq5/scene.splinecode" />
          </div>
        </div>
        
        <div className="hero-pattern" />
      </section>

      {/* Service Builder Section */}
      <section id="service-builder" className="service-builder-section">
        <div className="builder-container">
          <div className="builder-main">
            <div className="section-header">
              <h2 className="section-title">Interactive Service Builder</h2>
              <p className="section-subtitle">
                Choose the services that match your business needs
              </p>
            </div>

            {serviceCategories.map((category) => (
              <div key={category.id} className="service-category">
                <h3 className="category-title">{category.title}</h3>
                <div className="services-grid">
                  {category.services.map((service) => (
                    <ServiceCard
                      key={service.id}
                      service={service}
                      isSelected={selectedServices.some((s) => s.id === service.id)}
                      onToggle={() => handleToggleService(category.id, service)}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Sticky Sidebar */}
          <div className="builder-sidebar">
            <PricingSummary
              selectedServices={selectedServices}
              onRemove={handleRemoveService}
              onConsultation={handleConsultation}
            />
          </div>
        </div>
      </section>

      {/* Recommendation Section */}
      {showRecommendation && (
        <section className="recommendation-section">
          <div className="recommendation-content">
            <div className="recommendation-badge">AI Recommendation</div>
            <h2 className="recommendation-title">
              Based on your selections, we recommend the {getRecommendedTier().name}
            </h2>
            <p className="recommendation-description">
              {getRecommendedTier().description}
            </p>

            <div className="tiers-comparison">
              {pricingTiers.map((tier) => {
                const isRecommended = tier.id === getRecommendedTier().id;
                return (
                  <div
                    key={tier.id}
                    className={`tier-card ${isRecommended ? 'tier-card-recommended' : ''}`}
                  >
                    {isRecommended && <div className="recommended-badge">Recommended</div>}
                    <h3 className="tier-name">{tier.name}</h3>
                    <p className="tier-price">{tier.priceRange}</p>
                    <p className="tier-description">{tier.description}</p>
                    <ul className="tier-features">
                      {tier.features.map((feature, index) => (
                        <li key={index} className="tier-feature">
                          <CheckCircle2 size={16} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>

            <button className="btn-primary recommendation-cta" onClick={handleConsultation}>
              Schedule a Discovery Call
              <ArrowRight size={20} />
            </button>
          </div>
        </section>
      )}

      {/* Why Choose TopTier */}
      <section className="why-choose-section">
        <div className="why-choose-content">
          <h2 className="section-title">Why Businesses Choose TopTier</h2>
          
          <div className="metrics-grid">
            {metrics.map((metric, index) => {
              const IconComponent = iconMap[metric.icon];
              return (
                <div key={index} className="metric-card">
                  <IconComponent className="metric-icon" size={32} />
                  <div className="metric-value">{metric.label}</div>
                  <div className="metric-label">{metric.sublabel}</div>
                </div>
              );
            })}
          </div>

          <div className="value-pillars">
            <div className="pillar">
              <h3>Reliability</h3>
              <p>24×7 monitoring and support ensures your systems are always running</p>
            </div>
            <div className="pillar">
              <h3>Innovation</h3>
              <p>Cutting-edge solutions powered by AI and cloud technologies</p>
            </div>
            <div className="pillar">
              <h3>Clarity</h3>
              <p>Transparent pricing and detailed reporting keep you informed</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="faq-content">
          <h2 className="section-title">Frequently Asked Questions</h2>
          
          <Accordion type="single" collapsible className="faq-accordion">
            <AccordionItem value="item-1">
              <AccordionTrigger>What areas do you serve?</AccordionTrigger>
              <AccordionContent>
                We provide managed IT services throughout Florida and Georgia, with on-site support available in major metropolitan areas.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger>How quickly can you respond to issues?</AccordionTrigger>
              <AccordionContent>
                Our average response time is less than 15 minutes for critical issues, with 24×7 monitoring and support available.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger>Can I customize my service package?</AccordionTrigger>
              <AccordionContent>
                Absolutely! Our interactive service builder lets you select exactly what you need. We'll work with you to create a tailored solution.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger>Do you offer month-to-month contracts?</AccordionTrigger>
              <AccordionContent>
                We offer flexible contract terms to fit your needs, including month-to-month options for certain service packages.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta-section">
        <div className="final-cta-content">
          <h2 className="final-cta-title">Ready to Modernize Your IT?</h2>
          <p className="final-cta-subtitle">
            Book a free consultation or start your customized plan today.
          </p>
          
          <div className="final-cta-buttons">
            <button className="btn-primary" onClick={handleConsultation}>
              Book a Consultation
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
          </div>
          
          <div className="footer-section">
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-links">
              <li><a href="#strategic">Strategic Services</a></li>
              <li><a href="#it-services">IT Services</a></li>
              <li><a href="#cybersecurity">Cybersecurity</a></li>
              <li><a href="#cloud">Cloud & Infrastructure</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-heading">Company</h4>
            <ul className="footer-links">
              <li><a href="#about">About Us</a></li>
              <li><a href="#case-studies">Case Studies</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#careers">Careers</a></li>
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
          <p>&copy; 2025 TopTier Technologies. All rights reserved.</p>
        </div>
      </footer>

      <FloatingActionButton />
    </div>
  );
};

export default Services;
