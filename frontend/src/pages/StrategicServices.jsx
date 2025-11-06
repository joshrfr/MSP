import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TrendingUp, Target, Briefcase, Users, FileText, Calendar } from 'lucide-react';
import Navbar from '../components/Navbar';
import RacingBlueLight from '../components/RacingBlueLight';

const StrategicServices = () => {
  const navigate = useNavigate();

  return (
    <div className="service-detail-page">
      {/* Header */}
      <Navbar type="business" />
      <RacingBlueLight />

      {/* Breadcrumb */}
      <div className="breadcrumb-container">
        <div className="container">
          <span className="breadcrumb-item" onClick={() => navigate('/')} style={{cursor: 'pointer'}}>Home</span>
          <span className="breadcrumb-separator">›</span>
          <span className="breadcrumb-item">IT Strategy & Planning</span>
        </div>
      </div>

      {/* Hero Section - Compact */}
      <section className="service-hero service-hero-compact">
        <div className="container">
          <h1 className="service-hero-title">IT Strategy & Planning</h1>
          <p className="service-hero-subtitle">
            TopTier's approach to partnerships is highly strategic. IT is a support service for any organization,
            meant to be an enabler to help organizations reach their strategic goals.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="service-content">
        <div className="container">
          
          {/* Strategy Section */}
          <div className="content-block">
            <div className="content-icon">
              <Target size={48} />
            </div>
            <h2 className="content-title">Strategy</h2>
            <p className="content-description">
              Our strategic approach ensures that your IT infrastructure aligns perfectly with your business objectives.
              We analyze, plan, and implement solutions that drive growth and efficiency.
            </p>
            <ul className="content-list">
              <li>Comprehensive IT assessment and gap analysis</li>
              <li>Technology roadmap development aligned with business goals</li>
              <li>Digital transformation planning and execution</li>
              <li>Risk assessment and mitigation strategies</li>
            </ul>
          </div>

          {/* Expertise Section */}
          <div className="content-block">
            <div className="content-icon">
              <Briefcase size={48} />
            </div>
            <h2 className="content-title">Expertise</h2>
            <p className="content-description">
              With decades of combined experience, our team brings deep technical knowledge and industry best practices
              to every engagement.
            </p>
            <ul className="content-list">
              <li>Microsoft Partner certified professionals</li>
              <li>Fortinet security specialists on staff</li>
              <li>ITIL and COBIT framework expertise</li>
              <li>Industry-specific compliance knowledge</li>
            </ul>
          </div>

          {/* Experience Section */}
          <div className="content-block">
            <div className="content-icon">
              <TrendingUp size={48} />
            </div>
            <h2 className="content-title">Experience</h2>
            <p className="content-description">
              Serving businesses across Florida and Georgia since 2010, we've helped organizations of all sizes
              achieve their technology goals.
            </p>
            <ul className="content-list">
              <li>Over 500 successful implementations</li>
              <li>Multi-industry experience (healthcare, finance, manufacturing)</li>
              <li>Proven track record of cost optimization</li>
              <li>Long-term client relationships (average 7+ years)</li>
            </ul>
          </div>

          {/* Communication Section */}
          <div className="content-block highlight-block">
            <div className="content-icon">
              <Users size={48} />
            </div>
            <h2 className="content-title">Communication</h2>
            <p className="content-description">
              Communication is among the most important components of a successful partnership. Below is our typical communication cadence:
            </p>
            <div className="communication-grid">
              <div className="comm-item">
                <Calendar size={24} />
                <strong>Budget Meetings:</strong> Annual
              </div>
              <div className="comm-item">
                <Calendar size={24} />
                <strong>Quarterly Reviews:</strong> Quarterly
              </div>
              <div className="comm-item">
                <Calendar size={24} />
                <strong>Service Reviews:</strong> Monthly or bi-weekly
              </div>
              <div className="comm-item">
                <Calendar size={24} />
                <strong>Project Meetings:</strong> As needed
              </div>
            </div>
          </div>

          {/* Software Section */}
          <div className="content-block">
            <div className="content-icon">
              <FileText size={48} />
            </div>
            <h2 className="content-title">Software & Tools</h2>
            <p className="content-description">
              We've invested in state-of-the-art IT Service Management Software (ITSM) so you don't have to. These tools include:
            </p>
            <div className="tools-grid">
              <div className="tool-item">
                <strong>Datto:</strong> RMM for reporting/management
              </div>
              <div className="tool-item">
                <strong>Auvik:</strong> Network reporting/management
              </div>
              <div className="tool-item">
                <strong>IT Glue:</strong> Documentation
              </div>
              <div className="tool-item">
                <strong>BrightGauge:</strong> Reporting dashboard
              </div>
              <div className="tool-item">
                <strong>ScalePad:</strong> Asset management
              </div>
              <div className="tool-item">
                <strong>SmartSheet:</strong> Project management
              </div>
            </div>
          </div>

          {/* Standards Section */}
          <div className="content-block">
            <h2 className="content-title">Standards</h2>
            <p className="content-description">
              We've adopted the most effective and time-tested standards for IT:
            </p>
            <div className="standards-grid">
              <div className="standard-item">
                <h3>ITIL</h3>
                <p>Standards for Help Desk operations</p>
              </div>
              <div className="standard-item">
                <h3>COBIT</h3>
                <p>For Enterprise IT Department Management</p>
              </div>
              <div className="standard-item">
                <h3>NIST</h3>
                <p>For comprehensive Security frameworks</p>
              </div>
            </div>
          </div>

          {/* IT Budgeting Section */}
          <div className="content-block highlight-block">
            <h2 className="content-title">IT Budgeting & Forecasting</h2>
            <p className="content-description">
              Our clients value the comprehensive 5-year budgets we prepare annually. These budgets cover:
            </p>
            <ul className="content-list">
              <li>Hardware renewals (including labor costs)</li>
              <li>Licensing renewals</li>
              <li>Domain and SSL renewals</li>
              <li>Project initiatives</li>
              <li>Hosted services</li>
              <li>Security initiatives</li>
            </ul>
            <p className="content-note">
              Our cost projections are typically accurate within ±5%, giving you transparency and confidence in future spending.
            </p>
          </div>

          {/* Innovation Section */}
          <div className="content-block">
            <h2 className="content-title">Innovative Technology Products & Services</h2>
            <p className="content-description">
              Since technology is core to our business, we dedicate resources to educational endeavors including peer groups,
              ongoing training, and industry conventions. We stay ahead of emerging technologies and educate our clients along the way.
            </p>
            <p className="content-description">
              Our annual budget meetings and quarterly reviews provide opportunities to introduce new technologies and collectively
              work solutions into future budgets. Our R&D team continuously evaluates the best products and services for our clients.
            </p>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="service-cta">
        <div className="container">
          <h2>Ready to Transform Your IT Strategy?</h2>
          <p>Let's discuss how our strategic approach can help your organization achieve its goals.</p>
          <button className="btn-primary" onClick={() => navigate('/services')}>
            Schedule a Consultation
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
            <p>Phone: (850) 610-3889</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 TopTier Technologies. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default StrategicServices;