import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, Users, Shield, Star } from 'lucide-react';
import Navbar from '../components/Navbar';
import ResidentialFooter from '../components/ResidentialFooter';
import '../ResidentialTheme.css';

const ResidentialAbout = () => {
  const navigate = useNavigate();

  return (
    <div className="residential-about-page">
      <Navbar type="residential" />

      <section className="cyber-section">
        <h1 className="futuristic-title" style={{fontSize: '3rem', textAlign: 'center', marginBottom: '2rem'}}>About TopTier Technologies</h1>
        <p className="cyber-subtitle" style={{fontSize: '1.2rem', textAlign: 'center', marginBottom: '4rem'}}>
          Your trusted residential IT partner
        </p>

        <div className="cyber-card" style={{padding: '3rem', marginBottom: '3rem'}}>
          <Heart size={48} className="cyber-icon" style={{marginBottom: '1rem'}} />
          <h2 className="futuristic-title" style={{fontSize: '2rem', marginBottom: '1rem'}}>Our Mission</h2>
          <p className="cyber-subtitle" style={{fontSize: '1.1rem', lineHeight: '1.8'}}>
            We believe everyone deserves reliable, professional IT support in their home. From helping families stay connected to supporting home offices and remote workers, we're here to make technology simple and stress-free.
          </p>
        </div>

        <div className="cyber-grid" style={{marginBottom: '3rem'}}>
          <div className="cyber-card">
            <Users size={40} className="cyber-icon" style={{marginBottom: '1rem'}} />
            <h3 className="futuristic-title" style={{fontSize: '1.5rem', marginBottom: '1rem'}}>Friendly Support</h3>
            <p className="cyber-subtitle">Our team speaks your language - no jargon, just clear explanations and genuine help.</p>
          </div>
          <div className="cyber-card">
            <Shield size={40} className="cyber-icon" style={{marginBottom: '1rem'}} />
            <h3 className="futuristic-title" style={{fontSize: '1.5rem', marginBottom: '1rem'}}>Trusted Service</h3>
            <p className="cyber-subtitle">Serving Florida and Georgia families since 2010 with reliable, honest service.</p>
          </div>
          <div className="cyber-card">
            <Star size={40} className="cyber-icon" style={{marginBottom: '1rem'}} />
            <h3 className="futuristic-title" style={{fontSize: '1.5rem', marginBottom: '1rem'}}>Quality First</h3>
            <p className="cyber-subtitle">We treat your home technology with the same care we give enterprise clients.</p>
          </div>
        </div>

        <div style={{textAlign: 'center'}}>
          <button onClick={() => navigate('/residential#plans')} className="cyber-button" style={{marginRight: '1rem'}}>
            View Plans
          </button>
          <button onClick={() => window.open('tel:8506103889')} className="cyber-button-outline">
            Call Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default ResidentialAbout;