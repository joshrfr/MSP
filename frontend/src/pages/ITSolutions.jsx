import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Cloud, Server, Repeat, Workflow, Database, Network } from 'lucide-react';
import Navbar from '../components/Navbar';
import BusinessFooter from '../components/BusinessFooter';
import RacingBlueLight from '../components/RacingBlueLight';

const ITSolutions = () => {
  const navigate = useNavigate();

  const solutions = [
    {
      icon: Workflow,
      title: 'Solution Selection & Procurement',
      description: 'Expert guidance in selecting and procuring the right technology solutions for your business needs.'
    },
    {
      icon: Database,
      title: 'ERP Implementation',
      description: 'Complete enterprise resource planning system implementation and integration services.'
    },
    {
      icon: Network,
      title: 'Communication Platform Implementation',
      description: 'Deploy modern communication platforms including VoIP, video conferencing, and collaboration tools.'
    },
    {
      icon: Cloud,
      title: 'Azure Migration',
      description: 'Seamless migration of your infrastructure to Microsoft Azure cloud platform.'
    },
    {
      icon: Cloud,
      title: 'O365 Migration',
      description: 'Smooth transition to Office 365 with minimal disruption to your business operations.'
    },
    {
      icon: Repeat,
      title: 'Digital Transformation',
      description: 'Comprehensive digital transformation strategy and implementation for modern businesses.'
    },
    {
      icon: Server,
      title: 'Server Refresh',
      description: 'Upgrade and modernize your server infrastructure with the latest technology.'
    },
    {
      icon: Network,
      title: 'Network Refresh',
      description: 'Enhance your network performance with cutting-edge networking equipment and design.'
    },
    {
      icon: Server,
      title: 'Workstation Refresh',
      description: 'Keep your team productive with modern workstations and endpoint devices.'
    },
    {
      icon: Database,
      title: 'Backup Strategy & Management',
      description: 'Comprehensive backup solutions to protect your critical business data.'
    }
  ];

  return (
    <div className="service-detail-page">
      <Navbar type="business" />
      <RacingBlueLight />

      {/* Breadcrumb */}
      <div className="breadcrumb-container">
        <div className="container">
          <span className="breadcrumb-item" onClick={() => navigate('/services')} style={{cursor: 'pointer'}}>Home</span>
          <span className="breadcrumb-separator">›</span>
          <span className="breadcrumb-item">IT Solutions</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="service-hero service-hero-compact">
        <div className="container">
          <h1 className="service-hero-title">IT Solutions</h1>
          <p className="service-hero-subtitle">
            Comprehensive technology solutions to modernize your infrastructure, streamline operations,
            and accelerate your digital transformation journey.
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="service-content">
        <div className="container">
          <div className="solutions-grid">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <div key={index} className="solution-card">
                  <div className="content-icon">
                    <Icon size={40} />
                  </div>
                  <h3 className="solution-title">{solution.title}</h3>
                  <p className="solution-description">{solution.description}</p>
                  <button className="btn-secondary" onClick={() => navigate('/services')}>
                    Learn More
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="service-cta">
        <div className="container">
          <h2>Ready to Transform Your IT Infrastructure?</h2>
          <p>Let's discuss how our solutions can modernize your business technology.</p>
          <button className="btn-primary" onClick={() => navigate('/services')}>
            Contact Us
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="services-footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>TopTier Technologies</h3>
            <p>Your trusted IT partner across Florida & Georgia</p>
          </div>
          <div className="footer-section">
            <h4>Services</h4>
            <a href="/strategic-services">Strategic Services</a>
            <a href="/it-services">IT Services</a>
            <a href="/cybersecurity">Cybersecurity</a>
            <a href="/cloud-infrastructure">Cloud Services</a>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <p>Email: helpdesk@tttmsp.com</p>
            <p>Phone: (850) 610-3889</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 TopTier Technologies. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ITSolutions;
