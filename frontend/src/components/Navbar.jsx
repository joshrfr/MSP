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

  // Home page navigation - simple
  if (type === 'home') {
    return (
      <header className="navbar-header">
        <div className="navbar-content">
          <div className="logo-container" onClick={() => {
            navigate('/');
            window.scrollTo(0, 0);
          }} style={{cursor: 'pointer'}}>
            <img
              src="https://customer-assets.emergentagent.com/job_managed-tech-hub/artifacts/dmi0lnjh_8.png"
              alt="TopTier Technologies"
              className="header-logo"
            />
          </div>
          <nav className="navbar-nav">
            <a href="/" className="nav-link" onClick={(e) => {
              e.preventDefault();
              navigate('/');
              window.scrollTo(0, 0);
            }}>Home</a>
            <a href="/residential" className="nav-link">Residential</a>
            <a href="/services" className="nav-link">Business</a>
            <a href="tel:8506103889" className="nav-link call-button">
              <Phone size={18} />
              (850) 610-3889
            </a>
          </nav>
        </div>
      </header>
    );
  }

  // Residential navigation
  if (type === 'residential') {
    return (
      <header className="navbar-header">
        <div className="navbar-content">
          <div className="logo-container" onClick={() => {
            navigate('/');
            window.scrollTo(0, 0);
          }} style={{cursor: 'pointer'}}>
            <img
              src="https://customer-assets.emergentagent.com/job_managed-tech-hub/artifacts/dmi0lnjh_8.png"
              alt="TopTier Technologies"
              className="header-logo"
            />
          </div>
          
          <nav className="navbar-nav">
            <button onClick={() => {
              navigate('/');
              window.scrollTo(0, 0);
            }} className="nav-link" style={{border: 'none', background: 'none'}}>Home</button>
            
            {/* Plans Dropdown */}
            <div 
              className="nav-dropdown"
              onMouseEnter={() => handleMouseEnter('plans')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="nav-link dropdown-trigger">
                Plans <ChevronDown size={16} />
              </button>
              {activeDropdown === 'plans' && (
                <div className="dropdown-menu">
                  <a href="/residential/homecare-basic" className="dropdown-item">HomeCare Basic</a>
                  <a href="/residential/homecare-plus" className="dropdown-item">HomeCare Plus</a>
                  <a href="/residential/homecare-elite" className="dropdown-item">HomeCare Elite</a>
                </div>
              )}
            </div>

            <a href="/residential/services" className="nav-link">Services</a>

            {/* Support Dropdown */}
            <div 
              className="nav-dropdown"
              onMouseEnter={() => handleMouseEnter('support')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="nav-link dropdown-trigger">
                Support <ChevronDown size={16} />
              </button>
              {activeDropdown === 'support' && (
                <div className="dropdown-menu">
                  <a href="/residential/antivirus" className="dropdown-item">Antivirus & Monitoring</a>
                  <a href="/residential/backup" className="dropdown-item">Backup Services</a>
                  <a href="/residential/remote-support" className="dropdown-item">Remote Support</a>
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
                  <a href="/residential/about" className="dropdown-item">About TopTier</a>
                  <a href="/residential/how-it-works" className="dropdown-item">How It Works</a>
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

  // Business navigation
  return (
    <header className="navbar-header">
      <div className="navbar-content">
        <div className="logo-container" onClick={() => {
          navigate('/');
          window.scrollTo(0, 0);
        }} style={{cursor: 'pointer'}}>
          <img
            src="https://customer-assets.emergentagent.com/job_managed-tech-hub/artifacts/dmi0lnjh_8.png"
            alt="TopTier Technologies"
            className="header-logo"
          />
        </div>
        
        <nav className="navbar-nav">
          <button onClick={() => {
            navigate('/');
            window.scrollTo(0, 0);
          }} className="nav-link" style={{border: 'none', background: 'none'}}>Home</button>
          
          {/* Products & Services Dropdown */}
          <div 
            className="nav-dropdown"
            onMouseEnter={() => handleMouseEnter('services')}
            onMouseLeave={handleMouseLeave}
          >
            <button className="nav-link dropdown-trigger">
              Products & Services <ChevronDown size={16} />
            </button>
            {activeDropdown === 'services' && (
              <div className="dropdown-menu">
                <a href="/strategic-services" className="dropdown-item">Strategic Services</a>
                <a href="/it-services" className="dropdown-item">IT Services</a>
                <a href="/cybersecurity" className="dropdown-item">Cybersecurity Services</a>
                <a href="/cloud-infrastructure" className="dropdown-item">Cloud Services</a>
              </div>
            )}
          </div>

          {/* IT Solutions Dropdown */}
          <div 
            className="nav-dropdown"
            onMouseEnter={() => handleMouseEnter('solutions')}
            onMouseLeave={handleMouseLeave}
          >
            <button className="nav-link dropdown-trigger">
              IT Solutions <ChevronDown size={16} />
            </button>
            {activeDropdown === 'solutions' && (
              <div className="dropdown-menu">
                <a href="/it-solutions" className="dropdown-item">View All Solutions</a>
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
