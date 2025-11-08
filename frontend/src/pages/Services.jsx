import React, { useState, useEffect } from 'react';
import NetworkAnimation from '../components/NetworkAnimation';
import RacingBlueLight from '../components/RacingBlueLight';
import Navbar from '../components/Navbar';
import BusinessFooter from '../components/BusinessFooter';
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
      <Navbar type="business" />
      <RacingBlueLight />

      {/* Hero Section */}
      <section className="hero-section hero-compact">
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
            <NetworkAnimation />
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
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-links">
              <li><a href="/strategic-services">Strategic Services</a></li>
              <li><a href="/it-services">IT Services</a></li>
              <li><a href="/cybersecurity">Cybersecurity</a></li>
              <li><a href="/cloud-infrastructure">Cloud Services</a></li>
              <li><a href="/it-solutions">IT Solutions</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-heading">Contact</h4>
            <ul className="footer-links">
              <li><a href="tel:8506103889">(850) 610-3889</a></li>
              <li><a href="mailto:helpdesk@tttmsp.com">helpdesk@tttmsp.com</a></li>
              <li>24/7 Support Available</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2026 TopTier Technologies. All Rights Reserved.</p>
        </div>
      </footer>

      <FloatingActionButton />
    </div>
  );
};

export default Services;
