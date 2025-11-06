import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, Users, Shield, Star } from 'lucide-react';
import Navbar from '../components/Navbar';

const ResidentialAbout = () => {
  const navigate = useNavigate();

  return (
    <div className="residential-about-page" style={{minHeight: '100vh', background: '#0a0a1f'}}>
      <Navbar type="residential" />

      <section style={{padding: '6rem 2rem', maxWidth: '1000px', margin: '0 auto'}}>
        <h1 style={{color: '#fff', fontSize: '3rem', textAlign: 'center', marginBottom: '2rem'}}>About TopTier Technologies</h1>
        <p style={{color: '#e0e0e0', fontSize: '1.2rem', textAlign: 'center', marginBottom: '4rem'}}>
          Your trusted residential IT partner
        </p>

        <div style={{background: 'rgba(135, 206, 235, 0.05)', padding: '3rem', borderRadius: '12px', border: '1px solid rgba(135, 206, 235, 0.2)', marginBottom: '3rem'}}>
          <Heart size={48} style={{color: '#87CEEB', marginBottom: '1rem'}} />
          <h2 style={{color: '#87CEEB', fontSize: '2rem', marginBottom: '1rem'}}>Our Mission</h2>
          <p style={{color: '#e0e0e0', fontSize: '1.1rem', lineHeight: '1.8'}}>
            We believe everyone deserves reliable, professional IT support in their home. From helping families stay connected to supporting home offices and remote workers, we're here to make technology simple and stress-free.
          </p>
        </div>

        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '3rem'}}>
          <div style={{background: 'rgba(135, 206, 235, 0.05)', padding: '2rem', borderRadius: '12px', border: '1px solid rgba(135, 206, 235, 0.2)'}}>
            <Users size={40} style={{color: '#87CEEB', marginBottom: '1rem'}} />
            <h3 style={{color: '#fff', fontSize: '1.5rem', marginBottom: '1rem'}}>Friendly Support</h3>
            <p style={{color: '#e0e0e0'}}>Our team speaks your language - no jargon, just clear explanations and genuine help.</p>
          </div>
          <div style={{background: 'rgba(135, 206, 235, 0.05)', padding: '2rem', borderRadius: '12px', border: '1px solid rgba(135, 206, 235, 0.2)'}}>
            <Shield size={40} style={{color: '#87CEEB', marginBottom: '1rem'}} />
            <h3 style={{color: '#fff', fontSize: '1.5rem', marginBottom: '1rem'}}>Trusted Service</h3>
            <p style={{color: '#e0e0e0'}}>Serving Florida and Georgia families since 2010 with reliable, honest service.</p>
          </div>
          <div style={{background: 'rgba(135, 206, 235, 0.05)', padding: '2rem', borderRadius: '12px', border: '1px solid rgba(135, 206, 235, 0.2)'}}>
            <Star size={40} style={{color: '#87CEEB', marginBottom: '1rem'}} />
            <h3 style={{color: '#fff', fontSize: '1.5rem', marginBottom: '1rem'}}>Quality First</h3>
            <p style={{color: '#e0e0e0'}}>We treat your home technology with the same care we give enterprise clients.</p>
          </div>
        </div>

        <div style={{textAlign: 'center'}}>
          <button onClick={() => navigate('/residential#plans')} style={{
            padding: '1rem 2rem',
            background: '#87CEEB',
            color: '#0a0a1f',
            border: 'none',
            borderRadius: '8px',
            fontSize: '1.1rem',
            fontWeight: '600',
            cursor: 'pointer',
            marginRight: '1rem'
          }}>
            View Plans
          </button>
          <button onClick={() => window.open('tel:8506103889')} style={{
            padding: '1rem 2rem',
            background: 'transparent',
            color: '#87CEEB',
            border: '2px solid #87CEEB',
            borderRadius: '8px',
            fontSize: '1.1rem',
            fontWeight: '600',
            cursor: 'pointer'
          }}>
            Call Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default ResidentialAbout;