import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown, Phone } from 'lucide-react';
import './Navbar.css';

const Navbar = ({ simple = false }) => {
  const navigate = useNavigate();
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleMouseEnter = (dropdown) => {
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  if (simple) {
    // Simple navigation for home/residential pages
    return (
      <header className="navbar-header simple">
        <div className="navbar-content">
          <div className="logo-container" onClick={() => navigate('/')} style={{cursor: 'pointer'}}>
            <img
              src="https://customer-assets.emergentagent.com/job_managed-tech-hub/artifacts/dmi0lnjh_8.png"
              alt="TopTier Technologies"
              className="header-logo"
            />
          </div>
          <nav className="navbar-nav">
            <a href="/" className="nav-link">Home</a>
            <a href="/residential" className="nav-link">Residential</a>
            <a href="/services" className="nav-link">Business Services</a>
            <a href="tel:8506103889" className="nav-link call-button">
              <Phone size={18} />
              (850) 610-3889
            </a>
          </nav>
        </div>
      </header>
    );
  }

  // Full navigation with dropdowns for business pages
  return (
    <header className="navbar-header">
      <div className="navbar-content">
        <div className="logo-container" onClick={() => navigate('/')} style={{cursor: 'pointer'}}>
          <img
            src="https://customer-assets.emergentagent.com/job_managed-tech-hub/artifacts/dmi0lnjh_8.png"
            alt="TopTier Technologies"
            className="header-logo"
          />
        </div>
        
        <nav className="navbar-nav">
          <a href="/" className="nav-link">Home</a>
          
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
                <a href="/cybersecurity" className="dropdown-item">Cybersecurity</a>
                <a href="/cloud-infrastructure" className="dropdown-item">Cloud & Infrastructure</a>
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
                <a href="/residential" className="dropdown-item">Residential</a>
                <a href="/services" className="dropdown-item">Business</a>
              </div>
            )}
          </div>

          <a href="/services" className="nav-link">Verticals</a>

          {/* About Us Dropdown */}
          <div 
            className="nav-dropdown"
            onMouseEnter={() => handleMouseEnter('about')}
            onMouseLeave={handleMouseLeave}
          >
            <button className="nav-link dropdown-trigger">
              About Us <ChevronDown size={16} />
            </button>
            {activeDropdown === 'about' && (
              <div className="dropdown-menu">
                <a href="/" className="dropdown-item">About TopTier</a>
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
