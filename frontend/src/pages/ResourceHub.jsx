import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Download, FileText, Video, CheckSquare, Calculator, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import RacingBlueLight from '../components/RacingBlueLight';
import '../ResourceHub.css';

const ResourceHub = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('all');
  const [email, setEmail] = useState('');

  const resources = [
    {
      id: 1,
      type: 'guide',
      title: "Complete SMB Cybersecurity Guide",
      description: "Comprehensive 42-page PDF covering everything from firewall configuration to incident response planning.",
      fileSize: "3.2 MB",
      pages: "42 pages",
      featured: true
    },
    {
      id: 2,
      type: 'guide',
      title: "IT Budgeting Template for SMBs",
      description: "Excel template with formulas to plan your annual IT budget including hardware, software, and services.",
      fileSize: "850 KB",
      pages: "Excel"
    },
    {
      id: 3,
      type: 'guide',
      title: "Cloud Migration Checklist",
      description: "Step-by-step PDF checklist for planning and executing a successful cloud migration with minimal disruption.",
      fileSize: "1.5 MB",
      pages: "PDF"
    },
    {
      id: 4,
      type: 'guide',
      title: "Disaster Recovery Planning Guide",
      description: "Learn how to create a bulletproof DR plan including RTO/RPO calculations, backup strategies, and testing protocols.",
      fileSize: "2.8 MB",
      pages: "PDF"
    },
    {
      id: 5,
      type: 'guide',
      title: "Network Security Audit Template",
      description: "Comprehensive checklist to audit your network security posture and identify vulnerabilities before hackers do.",
      fileSize: "950 KB",
      pages: "PDF"
    },
    {
      id: 6,
      type: 'webinar',
      title: "Cybersecurity in 2025: What SMBs Need to Know",
      description: "45-minute webinar covering emerging threats, AI-powered security, and compliance requirements for 2025.",
      fileSize: "45 min",
      pages: "Video"
    },
    {
      id: 7,
      type: 'webinar',
      title: "Azure Migration Best Practices",
      description: "60-minute deep dive into planning, executing, and optimizing your Microsoft Azure cloud migration.",
      fileSize: "60 min",
      pages: "Video"
    },
    {
      id: 8,
      type: 'webinar',
      title: "Building Your IT Roadmap",
      description: "40-minute session on strategic IT planning, aligning technology with business goals, and budget forecasting.",
      fileSize: "40 min",
      pages: "Video"
    },
    {
      id: 9,
      type: 'checklist',
      title: "Pre-Migration Checklist for Cloud",
      description: "Essential checklist to complete before migrating to the cloud to ensure a smooth transition.",
      fileSize: "500 KB",
      pages: "PDF"
    },
    {
      id: 10,
      type: 'checklist',
      title: "New Employee IT Onboarding Checklist",
      description: "Ensure every new hire gets properly set up with accounts, devices, and security training.",
      fileSize: "400 KB",
      pages: "PDF"
    },
    {
      id: 11,
      type: 'checklist',
      title: "Monthly IT Maintenance Checklist",
      description: "Stay on top of routine IT maintenance with this comprehensive monthly checklist.",
      fileSize: "350 KB",
      pages: "PDF"
    },
    {
      id: 12,
      type: 'checklist',
      title: "Incident Response Checklist",
      description: "Step-by-step checklist for responding to security incidents and data breaches.",
      fileSize: "650 KB",
      pages: "PDF"
    },
    {
      id: 13,
      type: 'tool',
      title: "IT Budget Calculator",
      description: "Interactive calculator to estimate your IT costs based on employees, infrastructure, and services.",
      fileSize: "Tool",
      pages: "Web App"
    },
    {
      id: 14,
      type: 'tool',
      title: "ROI Calculator for Managed Services",
      description: "Calculate the return on investment of switching to managed IT services vs in-house IT.",
      fileSize: "Tool",
      pages: "Web App"
    }
  ];

  const filters = [
    { key: 'all', label: 'All Resources' },
    { key: 'guide', label: 'Guides & eBooks' },
    { key: 'webinar', label: 'Webinars' },
    { key: 'checklist', label: 'Checklists' },
    { key: 'tool', label: 'Tools' }
  ];

  const filteredResources = activeFilter === 'all'
    ? resources
    : resources.filter(resource => resource.type === activeFilter);

  const featuredResources = resources.filter(resource => resource.featured);

  const getIcon = (type) => {
    switch (type) {
      case 'guide':
        return <FileText size={32} />;
      case 'webinar':
        return <Video size={32} />;
      case 'checklist':
        return <CheckSquare size={32} />;
      case 'tool':
        return <Calculator size={32} />;
      default:
        return <Download size={32} />;
    }
  };

  const getTypeLabel = (type) => {
    const labels = {
      guide: 'Guide',
      webinar: 'Webinar',
      checklist: 'Checklist',
      tool: 'Interactive Tool'
    };
    return labels[type] || 'Resource';
  };

  const handleDownload = (resource) => {
    alert(`Downloading: ${resource.title}\n\nNote: Download functionality will be connected to your content delivery system.`);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`Thank you for subscribing with ${email}! You'll get new resources delivered to your inbox.`);
    setEmail('');
  };

  return (
    <div className="resource-hub-page">
      <Navbar type="business" />
      <RacingBlueLight />

      {/* Hero Section */}
      <section className="resource-hero">
        <div className="container">
          <h1 className="resource-hero-title">Resource Hub</h1>
          <p className="resource-hero-subtitle">
            Unlock insightful Downloads, Webinars, Courses & More
          </p>
        </div>
      </section>

      {/* Featured Resources */}
      {featuredResources.length > 0 && (
        <section className="resource-featured">
          <div className="container">
            <h2>Featured Resources</h2>
            <div className="featured-grid">
              {featuredResources.map(resource => (
                <div key={resource.id} className="featured-resource-card">
                  <div className="featured-icon">
                    {getIcon(resource.type)}
                  </div>
                  <h3>{resource.title}</h3>
                  <p>{resource.description}</p>
                  <div className="resource-meta">
                    <span>{resource.fileSize}</span>
                    <span className="meta-separator">•</span>
                    <span>{resource.pages}</span>
                  </div>
                  <button className="btn-primary" onClick={() => handleDownload(resource)}>
                    <Download size={18} />
                    Download Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Filter Tabs */}
      <section className="resource-filters">
        <div className="container">
          <div className="filter-tabs">
            {filters.map(filter => (
              <button
                key={filter.key}
                className={`filter-tab ${activeFilter === filter.key ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter.key)}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="resources-grid-section">
        <div className="container">
          <div className="resources-grid">
            {filteredResources.map(resource => (
              <div key={resource.id} className="resource-card">
                <div className="resource-icon">
                  {getIcon(resource.type)}
                </div>
                <div className="resource-type-badge">{getTypeLabel(resource.type)}</div>
                <h3 className="resource-title">{resource.title}</h3>
                <p className="resource-description">{resource.description}</p>
                <div className="resource-meta">
                  <span>{resource.fileSize}</span>
                  {resource.pages && (
                    <>
                      <span className="meta-separator">•</span>
                      <span>{resource.pages}</span>
                    </>
                  )}
                </div>
                <button className="resource-download-btn" onClick={() => handleDownload(resource)}>
                  <Download size={16} />
                  {resource.type === 'webinar' ? 'Watch Now' :
                   resource.type === 'tool' ? 'Use Tool' : 'Download'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="resource-newsletter">
        <div className="container">
          <h2>Get New Resources Delivered to Your Inbox</h2>
          <p>Be the first to know when we publish new guides, webinars, and tools.</p>
          <form className="newsletter-form" onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="newsletter-input"
            />
            <button type="submit" className="btn-primary">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* CTA Section */}
      <section className="resource-cta">
        <div className="container">
          <h2>Need Personalized Guidance?</h2>
          <p>Our IT experts are here to help you implement these strategies and more.</p>
          <button className="btn-primary" onClick={() => window.open('tel:8506103889')}>
            Schedule Free Consultation
            <ArrowRight size={20} />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ResourceHub;
