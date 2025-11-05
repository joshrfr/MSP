import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Lock, Eye, AlertTriangle, TrendingUp, Globe } from 'lucide-react';

const Cybersecurity = () => {
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
          <span className="breadcrumb-item">Cybersecurity Services</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="service-hero">
        <div className="container">
          <h1 className="service-hero-title">Cybersecurity Services</h1>
          <p className="service-hero-subtitle">
            Protect your network from modern threats with 24/7 SOC monitoring, AI-powered threat detection,
            and comprehensive security solutions. In today's digital landscape, cybersecurity isn't optional—it's essential.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="service-content">
        <div className="container">
          
          {/* Why Cybersecurity Matters */}
          <div className="content-block highlight-block">
            <div className="content-icon">
              <AlertTriangle size={48} />
            </div>
            <h2 className="content-title">Why Cybersecurity Is Critical Today</h2>
            <p className="content-description">
              With the explosive growth of internet connectivity, cyber threats have become more sophisticated and frequent.
              Businesses face constant attacks from ransomware, phishing, data breaches, and advanced persistent threats.
            </p>
            <div className="threat-stats">
              <div className="stat-item">
                <h3>300%</h3>
                <p>Increase in cyberattacks since 2020</p>
              </div>
              <div className="stat-item">
                <h3>$4.45M</h3>
                <p>Average cost of a data breach in 2023</p>
              </div>
              <div className="stat-item">
                <h3>43%</h3>
                <p>Of cyberattacks target small businesses</p>
              </div>
            </div>
            <p className="content-note">
              The growing internet means more connected devices, more attack vectors, and more opportunities for bad actors.
              Protecting your business isn't just about technology—it's about survival in the digital economy.
            </p>
          </div>

          {/* SOC Monitoring */}
          <div className="content-block">
            <div className="content-icon">
              <Eye size={48} />
            </div>
            <h2 className="content-title">24/7 Security Operations Center (SOC)</h2>
            <p className="content-description">
              Our Security Operations Center monitors your network around the clock, detecting and responding to threats
              in real-time before they can cause damage.
            </p>
            <ul className="content-list">
              <li>Continuous monitoring of network traffic and system logs</li>
              <li>Real-time threat detection and alerting</li>
              <li>Incident response and remediation</li>
              <li>Threat intelligence integration</li>
              <li>Detailed security reporting and analytics</li>
            </ul>
          </div>

          {/* Threat Detection */}
          <div className="content-block">
            <div className="content-icon">
              <TrendingUp size={48} />
            </div>
            <h2 className="content-title">AI-Powered Threat Detection</h2>
            <p className="content-description">
              Leverage cutting-edge artificial intelligence and machine learning to identify threats that traditional
              security tools miss.
            </p>
            <ul className="content-list">
              <li>Behavioral analysis to detect anomalous activity</li>
              <li>Automated threat hunting and investigation</li>
              <li>Zero-day threat identification</li>
              <li>Advanced malware detection and analysis</li>
              <li>Predictive threat intelligence</li>
            </ul>
          </div>

          {/* Security Services */}
          <div className="content-block">
            <div className="content-icon">
              <Shield size={48} />
            </div>
            <h2 className="content-title">Comprehensive Security Services</h2>
            <p className="content-description">
              A multi-layered security approach that protects every aspect of your IT infrastructure.
            </p>
            <div className="features-grid">
              <div className="feature-card">
                <Lock size={32} />
                <h3>Endpoint Protection</h3>
                <p>EDR (Endpoint Detection & Response) on all devices</p>
              </div>
              <div className="feature-card">
                <Shield size={32} />
                <h3>Firewall Management</h3>
                <p>Next-gen firewalls with advanced threat prevention</p>
              </div>
              <div className="feature-card">
                <Eye size={32} />
                <h3>Email Security</h3>
                <p>Anti-phishing, anti-spam, and email encryption</p>
              </div>
              <div className="feature-card">
                <Globe size={32} />
                <h3>Web Filtering</h3>
                <p>Block malicious websites and control internet access</p>
              </div>
            </div>
          </div>

          {/* Vulnerability Management */}
          <div className="content-block">
            <h2 className="content-title">Vulnerability Management</h2>
            <p className="content-description">
              Proactively identify and remediate security weaknesses before attackers can exploit them.
            </p>
            <ul className="content-list">
              <li>Regular vulnerability scans and penetration testing</li>
              <li>Patch management for operating systems and applications</li>
              <li>Security configuration assessments</li>
              <li>Compliance auditing (HIPAA, PCI-DSS, SOC 2)</li>
              <li>Risk assessment and remediation planning</li>
            </ul>
          </div>

          {/* Security Awareness */}
          <div className="content-block">
            <h2 className="content-title">Security Awareness Training</h2>
            <p className="content-description">
              Your employees are your first line of defense. We provide comprehensive training to help them recognize
              and respond to security threats.
            </p>
            <ul className="content-list">
              <li>Phishing simulation campaigns</li>
              <li>Interactive security training modules</li>
              <li>Social engineering awareness</li>
              <li>Password hygiene and best practices</li>
              <li>Incident reporting procedures</li>
            </ul>
          </div>

          {/* Compliance & Standards */}
          <div className="content-block highlight-block">
            <h2 className="content-title">Security Standards & Compliance</h2>
            <p className="content-description">
              We implement industry-leading security frameworks to protect your business and ensure regulatory compliance.
            </p>
            <div className="standards-grid">
              <div className="standard-item">
                <h3>NIST Cybersecurity Framework</h3>
                <p>Comprehensive security controls and best practices</p>
              </div>
              <div className="standard-item">
                <h3>CIS Controls</h3>
                <p>Critical security controls for effective cyber defense</p>
              </div>
              <div className="standard-item">
                <h3>ISO 27001</h3>
                <p>International standard for information security management</p>
              </div>
            </div>
          </div>

          {/* Incident Response */}
          <div className="content-block">
            <div className="content-icon">
              <AlertTriangle size={48} />
            </div>
            <h2 className="content-title">Incident Response & Recovery</h2>
            <p className="content-description">
              When a security incident occurs, rapid response is critical. Our team is ready to contain, investigate,
              and recover from any security breach.
            </p>
            <ul className="content-list">
              <li>24/7 incident response hotline</li>
              <li>Forensic analysis and investigation</li>
              <li>Containment and eradication of threats</li>
              <li>Business continuity and disaster recovery</li>
              <li>Post-incident review and improvement</li>
            </ul>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="service-cta">
        <div className="container">
          <h2>Protect Your Business from Cyber Threats</h2>
          <p>Don't wait until it's too late. Let's secure your organization with enterprise-grade cybersecurity.</p>
          <button className="btn-primary" onClick={() => navigate('/services')}>
            Schedule a Security Assessment
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

export default Cybersecurity;