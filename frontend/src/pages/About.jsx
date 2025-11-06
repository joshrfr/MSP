import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Award, Users, Target, TrendingUp, Shield, Heart } from 'lucide-react';
import Navbar from '../components/Navbar';
import RacingBlueLight from '../components/RacingBlueLight';

const About = () => {
  const navigate = useNavigate();

  const values = [
    {
      icon: Shield,
      title: 'Quality First',
      description: 'We never compromise on quality. Every solution is built to enterprise standards.'
    },
    {
      icon: Heart,
      title: 'Customer-Centric',
      description: 'Your success is our success. We build lasting partnerships, not just vendor relationships.'
    },
    {
      icon: TrendingUp,
      title: 'Innovation',
      description: 'We stay ahead of technology trends to keep your business competitive.'
    },
    {
      icon: Target,
      title: 'Transparency',
      description: 'No hidden fees. No surprises. Just honest pricing and clear communication.'
    }
  ];

  const partners = [
    { name: 'Microsoft', certification: 'Gold Partner' },
    { name: 'Fortinet', certification: 'Certified Security Expert' },
    { name: 'Dell Technologies', certification: 'Premier Partner' },
    { name: 'Cisco', certification: 'Select Partner' },
    { name: 'Datto', certification: 'Blue Diamond' },
    { name: 'AWS', certification: 'Partner Network' }
  ];

  return (
    <div className="about-page">
      {/* Header */}
      <Navbar type="business" />
      <RacingBlueLight />

      {/* Breadcrumb */}
      <div className="breadcrumb-container">
        <div className="container">
          <span className="breadcrumb-item" onClick={() => navigate('/')} style={{cursor: 'pointer'}}>Home</span>
          <span className="breadcrumb-separator">›</span>
          <span className="breadcrumb-item">About Us</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="service-hero service-hero-compact">
        <div className="container">
          <h1 className="service-hero-title">About TopTier Technologies</h1>
          <p className="service-hero-subtitle">
            Florida & Georgia's Trusted IT Partner — Quality at the Heart, Innovation Beyond Boundaries
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="service-content" id="mission">
        <div className="container">
          <div className="content-block">
            <div className="content-icon">
              <Target size={48} />
            </div>
            <h2 className="content-title">Our Mission</h2>
            <p className="content-description">
              At TopTier Technologies, our mission is to empower businesses across Florida and Georgia with reliable, 
              innovative IT solutions that drive growth and protect what matters most. We believe technology should be 
              an enabler, not a barrier, and we're committed to making enterprise-grade IT accessible to organizations 
              of all sizes.
            </p>
          </div>

          <div className="content-block">
            <div className="content-icon">
              <Users size={48} />
            </div>
            <h2 className="content-title">Our Story</h2>
            <p className="content-description">
              Founded in 2010, TopTier Technologies was born from a simple observation: businesses needed an IT partner 
              they could trust — one that combined technical expertise with genuine care for their success. Over the years, 
              we've grown from a small team to a full-service managed service provider, but our core values remain unchanged.
            </p>
            <p className="content-description">
              Today, we serve hundreds of businesses across Florida and Georgia, from small offices to large enterprises. 
              Our average client relationship spans over 7 years — a testament to the trust and value we deliver every day.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="service-content" style={{background: 'rgba(135, 206, 235, 0.05)'}}>
        <div className="container">
          <div className="section-header" style={{textAlign: 'center', marginBottom: '3rem'}}>
            <h2 className="section-title">Our Core Values</h2>
            <p className="section-subtitle">
              These principles guide everything we do
            </p>
          </div>

          <div className="solutions-grid">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="solution-card">
                  <div className="solution-icon">
                    <Icon size={32} />
                  </div>
                  <h3 className="solution-title">{value.title}</h3>
                  <p className="solution-description">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partners & Certifications Section */}
      <section className="service-content" id="partners">
        <div className="container">
          <div className="content-block">
            <div className="content-icon">
              <Award size={48} />
            </div>
            <h2 className="content-title">Partners & Certifications</h2>
            <p className="content-description">
              We partner with industry leaders to deliver best-in-class solutions. Our certifications demonstrate our 
              commitment to technical excellence and continuous improvement.
            </p>
            
            <div className="partners-grid" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '1.5rem',
              marginTop: '2rem'
            }}>
              {partners.map((partner, index) => (
                <div key={index} style={{
                  background: 'rgba(135, 206, 235, 0.1)',
                  padding: '1.5rem',
                  borderRadius: '8px',
                  border: '1px solid rgba(135, 206, 235, 0.3)'
                }}>
                  <h3 style={{color: '#87CEEB', fontSize: '1.25rem', marginBottom: '0.5rem'}}>{partner.name}</h3>
                  <p style={{color: '#e0e0e0', fontSize: '0.95rem'}}>{partner.certification}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="content-block highlight-block">
            <h2 className="content-title">Why Businesses Choose TopTier</h2>
            <div className="stats-grid" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '2rem',
              marginTop: '2rem'
            }}>
              <div style={{textAlign: 'center'}}>
                <div style={{fontSize: '3rem', fontWeight: 'bold', color: '#87CEEB'}}>500+</div>
                <p style={{color: '#e0e0e0', marginTop: '0.5rem'}}>Successful Implementations</p>
              </div>
              <div style={{textAlign: 'center'}}>
                <div style={{fontSize: '3rem', fontWeight: 'bold', color: '#87CEEB'}}>15min</div>
                <p style={{color: '#e0e0e0', marginTop: '0.5rem'}}>Average Response Time</p>
              </div>
              <div style={{textAlign: 'center'}}>
                <div style={{fontSize: '3rem', fontWeight: 'bold', color: '#87CEEB'}}>24/7</div>
                <p style={{color: '#e0e0e0', marginTop: '0.5rem'}}>Monitoring & Support</p>
              </div>
              <div style={{textAlign: 'center'}}>
                <div style={{fontSize: '3rem', fontWeight: 'bold', color: '#87CEEB'}}>7+ yrs</div>
                <p style={{color: '#e0e0e0', marginTop: '0.5rem'}}>Average Client Relationship</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="service-cta">
        <div className="container">
          <h2>Ready to Partner with TopTier?</h2>
          <p>Let's discuss how we can help your business thrive with reliable, innovative IT solutions.</p>
          <button className="btn-primary" onClick={() => navigate('/services')}>
            Build Your Custom Plan
          </button>
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
    </div>
  );
};

export default About;
