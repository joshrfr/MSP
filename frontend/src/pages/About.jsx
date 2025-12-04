import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Award, Users, Target, TrendingUp, Shield, Heart } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import RacingBlueLight from '../components/RacingBlueLight';
import './About.css';

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
      <section className="service-content">
        <div className="container">
          <div className="section-header">
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
            
            <div className="partners-grid">
              {partners.map((partner, index) => (
                <div key={index} className="partner-card">
                  <h3>{partner.name}</h3>
                  <p>{partner.certification}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="content-block highlight-block">
            <h2 className="content-title">Why Businesses Choose TopTier</h2>
            <div className="stats-grid">
              <div>
                <div className="stat-number">500+</div>
                <p className="stat-label">Successful Implementations</p>
              </div>
              <div>
                <div className="stat-number">15min</div>
                <p className="stat-label">Average Response Time</p>
              </div>
              <div>
                <div className="stat-number">24/7</div>
                <p className="stat-label">Monitoring & Support</p>
              </div>
              <div>
                <div className="stat-number">7+ yrs</div>
                <p className="stat-label">Average Client Relationship</p>
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
          <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn-primary" onClick={() => navigate('/services')}>
              Build Your Custom Plan
            </button>
            <button className="btn-secondary" onClick={() => window.open('https://app.tttmsp.com', '_blank')}>
              Customer Portal
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
      
    </div>
  );
};

export default About;
