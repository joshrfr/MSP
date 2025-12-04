import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown, Phone } from 'lucide-react';
import './Navbar.css';

const Navbar = ({ type = 'home' }) => {
  const navigate = useNavigate();
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleMouseEnter = (dropdown) => {
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  // Home page navigation - full mega-menu
  if (type === 'home') {
    return (
      <header className="navbar-header">
        <div className="navbar-content">
          <div className="logo-container" onClick={() => {
            navigate('/');
            window.scrollTo(0, 0);
          }} style={{cursor: 'pointer'}}>
            <img
              src="/images/8.png"
              alt="TopTier Technologies"
              className="header-logo"
            />
          </div>

          <nav className="navbar-nav">
            {/* Products & Services Mega Menu */}
            <div
              className="nav-dropdown mega-menu-dropdown"
              onMouseEnter={() => handleMouseEnter('products')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="nav-link dropdown-trigger">
                Products & Services <ChevronDown size={16} />
              </button>
              {activeDropdown === 'products' && (
                <div className="mega-menu">
                  <div className="mega-menu-column">
                    <h4 className="mega-menu-title">Strategic Services</h4>
                    <a href="/strategic-services" className="mega-menu-item">IT Strategy & Budgeting</a>
                    <a href="/strategic-services" className="mega-menu-item">IT Governance & Assessments</a>
                    <a href="/strategic-services" className="mega-menu-item">Transition & Project Management</a>
                    <a href="/strategic-services" className="mega-menu-item">Inventory Management</a>
                  </div>

                  <div className="mega-menu-column">
                    <h4 className="mega-menu-title">IT Services</h4>
                    <a href="/it-services" className="mega-menu-item">24/7 Network Support</a>
                    <a href="/it-services" className="mega-menu-item">24/7 Server Support</a>
                    <a href="/it-services" className="mega-menu-item">24/7 Helpdesk Support</a>
                    <a href="/it-services" className="mega-menu-item">Data Center Hosting</a>
                    <a href="/it-services" className="mega-menu-item">SQL Database Support</a>
                  </div>

                  <div className="mega-menu-column">
                    <h4 className="mega-menu-title">Cybersecurity</h4>
                    <a href="/cybersecurity" className="mega-menu-item">24/7 Security Operations Center</a>
                    <a href="/cybersecurity" className="mega-menu-item">NextGen Anti-virus & EDR</a>
                    <a href="/cybersecurity" className="mega-menu-item">AI-based Intrusion Detection</a>
                    <a href="/cybersecurity" className="mega-menu-item">Backup & Disaster Recovery</a>
                  </div>

                  <div className="mega-menu-column">
                    <h4 className="mega-menu-title">Cloud Services</h4>
                    <a href="/cloud-infrastructure" className="mega-menu-item">Azure Support & Maintenance</a>
                    <a href="/cloud-infrastructure" className="mega-menu-item">Infrastructure as a Service</a>
                    <a href="/cloud-infrastructure" className="mega-menu-item">Azure FinOps Services</a>
                  </div>

                  <div className="mega-menu-column">
                    <h4 className="mega-menu-title">IT Solutions</h4>
                    <a href="/it-solutions" className="mega-menu-item">Solution Selection & Procurement</a>
                    <a href="/it-solutions" className="mega-menu-item">ERP Implementation</a>
                    <a href="/it-solutions" className="mega-menu-item">Azure & O365 Migration</a>
                    <a href="/it-solutions" className="mega-menu-item">Digital Transformation</a>
                    <a href="/it-solutions" className="mega-menu-item">Infrastructure Refresh</a>
                  </div>
                </div>
              )}
            </div>

            {/* About Dropdown */}
            <div
              className="nav-dropdown"
              onMouseEnter={() => handleMouseEnter('about')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="nav-link dropdown-trigger">
                About <ChevronDown size={16} />
              </button>
              {activeDropdown === 'about' && (
                <div className="dropdown-menu">
                  <a href="/about" className="dropdown-item" onClick={(e) => {
                    e.preventDefault();
                    navigate('/about');
                    window.scrollTo(0, 0);
                  }}>About TopTier</a>
                  <a href="/about#mission" className="dropdown-item" onClick={(e) => {
                    e.preventDefault();
                    navigate('/about');
                    setTimeout(() => {
                      const element = document.getElementById('mission');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}>Mission & Vision</a>
                  <a href="/about#partners" className="dropdown-item" onClick={(e) => {
                    e.preventDefault();
                    navigate('/about');
                    setTimeout(() => {
                      const element = document.getElementById('partners');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}>Partners & Certifications</a>
                </div>
              )}
            </div>

            {/* Pricing Link */}
            <a href="/plan-selector" className="nav-link">Pricing</a>

            {/* FAQ Link */}
            <a href="/faq" className="nav-link">FAQ</a>

            {/* Blog Dropdown */}
            <div
              className="nav-dropdown"
              onMouseEnter={() => handleMouseEnter('blog')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="nav-link dropdown-trigger">
                Blog <ChevronDown size={16} />
              </button>
              {activeDropdown === 'blog' && (
                <div className="dropdown-menu">
                  <a href="/blog" className="dropdown-item">Technology Blog</a>
                  <a href="/diy-it" className="dropdown-item">DIY-IT Podcast</a>
                  <a href="/resources" className="dropdown-item">Resource Hub</a>
                </div>
              )}
            </div>

            <a href="tel:8506103889" className="nav-link call-button">
              <Phone size={18} />
              (850) 610-3889
            </a>
          </nav>
        </div>
      </header>
    );
  }

  // All other pages use the same full mega-menu navigation
  return (
    <header className="navbar-header">
      <div className="navbar-content">
        <div className="logo-container" onClick={() => {
          navigate('/');
          window.scrollTo(0, 0);
        }} style={{cursor: 'pointer'}}>
          <img
            src="/images/8.png"
            alt="TopTier Technologies"
            className="header-logo"
          />
        </div>

        <nav className="navbar-nav">
          <button onClick={() => {
            navigate('/');
            window.scrollTo(0, 0);
          }} className="nav-link" style={{border: 'none', background: 'none'}}>Home</button>

          {/* Products & Services Mega Menu */}
          <div
            className="nav-dropdown mega-menu-dropdown"
            onMouseEnter={() => handleMouseEnter('products')}
            onMouseLeave={handleMouseLeave}
          >
            <button className="nav-link dropdown-trigger">
              Products & Services <ChevronDown size={16} />
            </button>
            {activeDropdown === 'products' && (
              <div className="mega-menu">
                <div className="mega-menu-column">
                  <h4 className="mega-menu-title">Strategic Services</h4>
                  <a href="/strategic-services" className="mega-menu-item">IT Strategy & Budgeting</a>
                  <a href="/strategic-services" className="mega-menu-item">IT Governance & Assessments</a>
                  <a href="/strategic-services" className="mega-menu-item">Transition & Project Management</a>
                  <a href="/strategic-services" className="mega-menu-item">Inventory Management</a>
                </div>

                <div className="mega-menu-column">
                  <h4 className="mega-menu-title">IT Services</h4>
                  <a href="/it-services" className="mega-menu-item">24/7 Network Support</a>
                  <a href="/it-services" className="mega-menu-item">24/7 Server Support</a>
                  <a href="/it-services" className="mega-menu-item">24/7 Helpdesk Support</a>
                  <a href="/it-services" className="mega-menu-item">Data Center Hosting</a>
                  <a href="/it-services" className="mega-menu-item">SQL Database Support</a>
                </div>

                <div className="mega-menu-column">
                  <h4 className="mega-menu-title">Cybersecurity</h4>
                  <a href="/cybersecurity" className="mega-menu-item">24/7 Security Operations Center</a>
                  <a href="/cybersecurity" className="mega-menu-item">NextGen Anti-virus & EDR</a>
                  <a href="/cybersecurity" className="mega-menu-item">AI-based Intrusion Detection</a>
                  <a href="/cybersecurity" className="mega-menu-item">Backup & Disaster Recovery</a>
                </div>

                <div className="mega-menu-column">
                  <h4 className="mega-menu-title">Cloud Services</h4>
                  <a href="/cloud-infrastructure" className="mega-menu-item">Azure Support & Maintenance</a>
                  <a href="/cloud-infrastructure" className="mega-menu-item">Infrastructure as a Service</a>
                  <a href="/cloud-infrastructure" className="mega-menu-item">Azure FinOps Services</a>
                </div>

                <div className="mega-menu-column">
                  <h4 className="mega-menu-title">IT Solutions</h4>
                  <a href="/it-solutions" className="mega-menu-item">Solution Selection & Procurement</a>
                  <a href="/it-solutions" className="mega-menu-item">ERP Implementation</a>
                  <a href="/it-solutions" className="mega-menu-item">Azure & O365 Migration</a>
                  <a href="/it-solutions" className="mega-menu-item">Digital Transformation</a>
                  <a href="/it-solutions" className="mega-menu-item">Infrastructure Refresh</a>
                </div>
              </div>
            )}
          </div>

          {/* About Dropdown */}
          <div
            className="nav-dropdown"
            onMouseEnter={() => handleMouseEnter('about')}
            onMouseLeave={handleMouseLeave}
          >
            <button className="nav-link dropdown-trigger">
              About <ChevronDown size={16} />
            </button>
            {activeDropdown === 'about' && (
              <div className="dropdown-menu">
                <a href="/about" className="dropdown-item" onClick={(e) => {
                  e.preventDefault();
                  navigate('/about');
                  window.scrollTo(0, 0);
                }}>About TopTier</a>
                <a href="/about#mission" className="dropdown-item" onClick={(e) => {
                  e.preventDefault();
                  navigate('/about');
                  setTimeout(() => {
                    const element = document.getElementById('mission');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}>Mission & Vision</a>
                <a href="/about#partners" className="dropdown-item" onClick={(e) => {
                  e.preventDefault();
                  navigate('/about');
                  setTimeout(() => {
                    const element = document.getElementById('partners');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}>Partners & Certifications</a>
              </div>
            )}
          </div>

          {/* Pricing Link - scrolls to pricing on home page */}
          <a href="/#pricing" className="nav-link" onClick={(e) => {
            e.preventDefault();
            navigate('/');
            setTimeout(() => {
              const element = document.getElementById('pricing');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }}>Pricing</a>

          {/* FAQ Link */}
          <a href="/faq" className="nav-link">FAQ</a>

          {/* Blog Dropdown */}
          <div
            className="nav-dropdown"
            onMouseEnter={() => handleMouseEnter('blog')}
            onMouseLeave={handleMouseLeave}
          >
            <button className="nav-link dropdown-trigger">
              Blog <ChevronDown size={16} />
            </button>
            {activeDropdown === 'blog' && (
              <div className="dropdown-menu">
                <a href="/blog" className="dropdown-item">Technology Blog</a>
                <a href="/diy-it" className="dropdown-item">DIY-IT Podcast</a>
                <a href="/resources" className="dropdown-item">Resource Hub</a>
              </div>
            )}
          </div>

          <a href="tel:8506103889" className="nav-link call-button">
            <Phone size={18} />
            (850) 610-3889
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
