import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Server, Headphones, Clock, Shield, Wrench, Monitor } from 'lucide-react';

const ITServices = () => {
  const navigate = useNavigate();

  return (
    <div className="service-detail-page">
      {/* Header */}
      <header className="services-header">
        <div className="header-content">
          <div className="logo-container" onClick={() => navigate('/')} style={{cursor: 'pointer'}}>
            <img
              src="https://customer-assets.emergentagent.com/job_managed-tech-hub/artifacts/dmi0lnjh_8.png"
              alt="TopTier Technologies"
              className="header-logo"
            />
          </div>
          <nav className="header-nav">
            <a href="/" className="nav-link">Home</a>
            <a href="/residential" className="nav-link">Residential</a>
            <a href="/services" className="nav-link">Business Services</a>
          </nav>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="breadcrumb-container">
        <div className="container">
          <span className="breadcrumb-item" onClick={() => navigate('/')} style={{cursor: 'pointer'}}>Home</span>
          <span className="breadcrumb-separator">›</span>
          <span className="breadcrumb-item">Managed IT Services</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="service-hero">
        <div className="container">
          <h1 className="service-hero-title">Managed IT Services</h1>
          <p className="service-hero-subtitle">
            Comprehensive IT support and management services that keep your business running smoothly.
            24/7 monitoring, rapid response times, and proactive maintenance ensure maximum uptime.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="service-content">
        <div className="container">
          
          {/* Help Desk Support */}
          <div className="content-block">
            <div className="content-icon">
              <Headphones size={48} />
            </div>
            <h2 className="content-title">24/7 Help Desk Support</h2>
            <p className="content-description">
              Our responsive help desk team is available around the clock to resolve your IT issues quickly and efficiently.
            </p>
            <ul className="content-list">
              <li>Average response time under 15 minutes</li>
              <li>Multi-tiered support structure for complex issues</li>
              <li>Remote and on-site support options</li>
              <li>Ticketing system with full transparency</li>
              <li>Knowledge base for self-service support</li>
            </ul>
          </div>

          {/* Network Monitoring */}
          <div className="content-block">
            <div className="content-icon">
              <Monitor size={48} />
            </div>
            <h2 className="content-title">Proactive Network Monitoring</h2>
            <p className="content-description">
              We monitor your IT infrastructure 24/7 to identify and resolve issues before they impact your business.
            </p>
            <ul className="content-list">
              <li>Real-time monitoring of servers, networks, and endpoints</li>
              <li>Automated alerting and incident response</li>
              <li>Performance optimization and capacity planning</li>
              <li>Detailed reporting and analytics</li>
              <li>Predictive maintenance to prevent failures</li>
            </ul>
          </div>

          {/* Remote & Onsite Support */}
          <div className="content-block">
            <div className="content-icon">
              <Wrench size={48} />
            </div>
            <h2 className="content-title">Remote & On-Site Support</h2>
            <p className="content-description">
              Whether it's a quick fix or a complex project, our certified technicians are ready to help.
            </p>
            <ul className="content-list">
              <li>Rapid remote assistance for immediate issues</li>
              <li>Scheduled on-site visits for hardware and infrastructure</li>
              <li>Certified field technicians across Florida and Georgia</li>
              <li>Hardware installation and configuration</li>
              <li>Network infrastructure setup and optimization</li>
            </ul>
          </div>

          {/* Server Management */}
          <div className="content-block highlight-block">
            <div className="content-icon">
              <Server size={48} />
            </div>
            <h2 className="content-title">Server & Infrastructure Management</h2>
            <p className="content-description">
              Complete management of your on-premises and cloud servers to ensure reliability and performance.
            </p>
            <div className="features-grid">
              <div className="feature-card">
                <h3>On-Premises Servers</h3>
                <ul>
                  <li>Hardware maintenance and upgrades</li>
                  <li>Operating system updates and patches</li>
                  <li>Performance tuning and optimization</li>
                  <li>Backup and disaster recovery</li>
                </ul>
              </div>
              <div className="feature-card">
                <h3>Cloud Infrastructure</h3>
                <ul>
                  <li>Azure and AWS management</li>
                  <li>Virtual machine provisioning</li>
                  <li>Cloud cost optimization</li>
                  <li>Hybrid cloud integration</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Maintenance & Updates */}
          <div className="content-block">
            <div className="content-icon">
              <Clock size={48} />
            </div>
            <h2 className="content-title">Maintenance & Updates</h2>
            <p className="content-description">
              Regular maintenance keeps your systems secure, stable, and performing at their best.
            </p>
            <ul className="content-list">
              <li>Scheduled maintenance windows to minimize disruption</li>
              <li>Operating system and application patching</li>
              <li>Security updates and vulnerability remediation</li>
              <li>Hardware health checks and diagnostics</li>
              <li>Documentation of all changes and updates</li>
            </ul>
          </div>

          {/* Asset Management */}
          <div className="content-block">
            <h2 className="content-title">IT Asset Management</h2>
            <p className="content-description">
              Track, manage, and optimize your IT assets throughout their lifecycle.
            </p>
            <div className="standards-grid">
              <div className="standard-item">
                <h3>Inventory Management</h3>
                <p>Complete visibility into all hardware and software assets</p>
              </div>
              <div className="standard-item">
                <h3>License Compliance</h3>
                <p>Track software licenses and ensure compliance</p>
              </div>
              <div className="standard-item">
                <h3>Lifecycle Planning</h3>
                <p>Plan replacements and upgrades proactively</p>
              </div>
            </div>
          </div>

          {/* Service Level Agreements */}
          <div className="content-block highlight-block">
            <div className="content-icon">
              <Shield size={48} />
            </div>
            <h2 className="content-title">Service Level Agreements</h2>
            <p className="content-description">
              Our SLAs guarantee the level of service you can expect from our team.
            </p>
            <div className="sla-table">
              <div className="sla-row">
                <div className="sla-label">Critical Issues</div>
                <div className="sla-value">15-minute response time</div>
              </div>
              <div className="sla-row">
                <div className="sla-label">High Priority</div>
                <div className="sla-value">1-hour response time</div>
              </div>
              <div className="sla-row">
                <div className="sla-label">Standard Requests</div>
                <div className="sla-value">4-hour response time</div>
              </div>
              <div className="sla-row">
                <div className="sla-label">System Uptime</div>
                <div className="sla-value">99.9% guaranteed</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="service-cta">
        <div className="container">
          <h2>Experience Hassle-Free IT Management</h2>
          <p>Let our expert team handle your IT infrastructure while you focus on growing your business.</p>
          <button className="btn-primary" onClick={() => navigate('/services')}>
            Get Started Today
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
            <a href="/cloud-infrastructure">Cloud & Infrastructure</a>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <p>Email: helpdesk@tttmsp.com</p>
            <p>Phone: (555) 123-4567</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2024 TopTier Technologies. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ITServices;