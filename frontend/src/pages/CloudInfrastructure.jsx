import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Cloud, Database, Layers, Zap, DollarSign, Lock } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import RacingBlueLight from '../components/RacingBlueLight';

const CloudInfrastructure = () => {
  const navigate = useNavigate();

  return (
    <div className="service-detail-page">
      <Navbar type="business" />
      <RacingBlueLight />

      {/* Breadcrumb */}
      <div className="breadcrumb-container">
        <div className="container">
          <span className="breadcrumb-item" onClick={() => navigate('/')} style={{cursor: 'pointer'}}>Home</span>
          <span className="breadcrumb-separator">›</span>
          <span className="breadcrumb-item">Cloud & Infrastructure</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="service-hero">
        <div className="container">
          <h1 className="service-hero-title">Cloud & Infrastructure Solutions</h1>
          <p className="service-hero-subtitle">
            Modern, scalable, and secure cloud infrastructure that grows with your business.
            From migration to management, we handle it all—Azure, AWS, hybrid solutions, and on-premises infrastructure.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="service-content">
        <div className="container">
          
          {/* Cloud Migration */}
          <div className="content-block">
            <div className="content-icon">
              <Cloud size={48} />
            </div>
            <h2 className="content-title">Cloud Migration Services</h2>
            <p className="content-description">
              Seamlessly move your infrastructure to the cloud with minimal disruption to your business operations.
              Our proven migration methodology ensures a smooth transition.
            </p>
            <ul className="content-list">
              <li>Comprehensive migration assessment and planning</li>
              <li>Application and data migration</li>
              <li>Legacy system modernization</li>
              <li>Testing and validation</li>
              <li>Post-migration optimization and support</li>
            </ul>
          </div>

          {/* Cloud Platforms */}
          <div className="content-block">
            <h2 className="content-title">Multi-Cloud Expertise</h2>
            <p className="content-description">
              We're certified partners with leading cloud providers, giving you flexibility and choice.
            </p>
            <div className="features-grid">
              <div className="feature-card">
                <Cloud size={32} />
                <h3>Microsoft Azure</h3>
                <p>Azure certified architects and engineers</p>
                <ul>
                  <li>Azure Virtual Machines</li>
                  <li>Azure Active Directory</li>
                  <li>Azure SQL Database</li>
                  <li>Azure Backup & Site Recovery</li>
                </ul>
              </div>
              <div className="feature-card">
                <Cloud size={32} />
                <h3>Amazon AWS</h3>
                <p>AWS certified solution architects</p>
                <ul>
                  <li>EC2 & Lambda</li>
                  <li>S3 & EBS Storage</li>
                  <li>RDS & DynamoDB</li>
                  <li>CloudWatch & CloudFormation</li>
                </ul>
              </div>
              <div className="feature-card">
                <Layers size={32} />
                <h3>Hybrid Solutions</h3>
                <p>Best of both on-premises and cloud</p>
                <ul>
                  <li>Azure Stack & AWS Outposts</li>
                  <li>VMware Cloud</li>
                  <li>Hybrid networking & VPN</li>
                  <li>Data synchronization</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Infrastructure Management */}
          <div className="content-block highlight-block">
            <div className="content-icon">
              <Layers size={48} />
            </div>
            <h2 className="content-title">Infrastructure Management</h2>
            <p className="content-description">
              Complete management of your IT infrastructure, whether it's in the cloud, on-premises, or a hybrid approach.
            </p>
            <div className="management-grid">
              <div className="mgmt-item">
                <h3>On-Premises Infrastructure</h3>
                <ul>
                  <li>Physical server management</li>
                  <li>Storage area networks (SAN)</li>
                  <li>Network switches and routers</li>
                  <li>Hardware lifecycle management</li>
                </ul>
              </div>
              <div className="mgmt-item">
                <h3>Virtualization</h3>
                <ul>
                  <li>VMware vSphere & Hyper-V</li>
                  <li>Virtual desktop infrastructure (VDI)</li>
                  <li>Container orchestration (Kubernetes)</li>
                  <li>Virtual machine optimization</li>
                </ul>
              </div>
              <div className="mgmt-item">
                <h3>Cloud Infrastructure</h3>
                <ul>
                  <li>Cloud resource provisioning</li>
                  <li>Auto-scaling and load balancing</li>
                  <li>Cloud security and compliance</li>
                  <li>Cost optimization and monitoring</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Storage Solutions */}
          <div className="content-block">
            <div className="content-icon">
              <Database size={48} />
            </div>
            <h2 className="content-title">Storage & Backup Solutions</h2>
            <p className="content-description">
              Protect your critical data with enterprise-grade backup and storage solutions.
            </p>
            <ul className="content-list">
              <li>Automated backup systems (local and cloud)</li>
              <li>Disaster recovery planning and testing</li>
              <li>Business continuity solutions</li>
              <li>Data archival and retention policies</li>
              <li>Rapid recovery from data loss or ransomware</li>
            </ul>
          </div>

          {/* Performance & Optimization */}
          <div className="content-block">
            <div className="content-icon">
              <Zap size={48} />
            </div>
            <h2 className="content-title">Performance Optimization</h2>
            <p className="content-description">
              Maximize the performance and efficiency of your infrastructure with continuous optimization.
            </p>
            <ul className="content-list">
              <li>Performance monitoring and analytics</li>
              <li>Resource utilization optimization</li>
              <li>Network latency reduction</li>
              <li>Application performance tuning</li>
              <li>Capacity planning and forecasting</li>
            </ul>
          </div>

          {/* Cost Optimization */}
          <div className="content-block highlight-block">
            <div className="content-icon">
              <DollarSign size={48} />
            </div>
            <h2 className="content-title">Cloud Cost Optimization</h2>
            <p className="content-description">
              Don't overpay for cloud resources. Our cost optimization services can reduce your cloud spending by 30-50%.
            </p>
            <div className="cost-features">
              <div className="cost-item">
                <h3>Right-Sizing</h3>
                <p>Match resources to actual usage needs</p>
              </div>
              <div className="cost-item">
                <h3>Reserved Instances</h3>
                <p>Save up to 70% with commitment discounts</p>
              </div>
              <div className="cost-item">
                <h3>Automated Scheduling</h3>
                <p>Turn off resources when not in use</p>
              </div>
              <div className="cost-item">
                <h3>Storage Tiering</h3>
                <p>Move infrequently accessed data to cheaper tiers</p>
              </div>
            </div>
            <p className="content-note">
              We provide detailed monthly reports showing your cloud spending with recommendations for optimization.
            </p>
          </div>

          {/* Security & Compliance */}
          <div className="content-block">
            <div className="content-icon">
              <Lock size={48} />
            </div>
            <h2 className="content-title">Security & Compliance</h2>
            <p className="content-description">
              Security and compliance are built into every infrastructure solution we deploy.
            </p>
            <ul className="content-list">
              <li>Network security and segmentation</li>
              <li>Identity and access management (IAM)</li>
              <li>Data encryption at rest and in transit</li>
              <li>Compliance frameworks (HIPAA, PCI-DSS, SOC 2)</li>
              <li>Security audits and assessments</li>
            </ul>
          </div>

          {/* Networking */}
          <div className="content-block">
            <h2 className="content-title">Network Infrastructure</h2>
            <p className="content-description">
              Reliable, high-performance networking that connects your users and systems.
            </p>
            <div className="standards-grid">
              <div className="standard-item">
                <h3>LAN/WAN Management</h3>
                <p>Enterprise-grade networking for all locations</p>
              </div>
              <div className="standard-item">
                <h3>SD-WAN Solutions</h3>
                <p>Software-defined networking for multi-site connectivity</p>
              </div>
              <div className="standard-item">
                <h3>VPN & Remote Access</h3>
                <p>Secure connectivity for remote workers</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="service-cta">
        <div className="container">
          <h2>Ready to Modernize Your Infrastructure?</h2>
          <p>Let's discuss how cloud and infrastructure solutions can transform your business.</p>
          <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn-primary" onClick={() => navigate('/services')}>
              Request a Consultation
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

export default CloudInfrastructure;