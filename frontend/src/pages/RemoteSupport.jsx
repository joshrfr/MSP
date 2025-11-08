import '../ResidentialTheme.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Headphones, Monitor, Clock, MessageSquare } from 'lucide-react';
import Navbar from '../components/Navbar';
import ResidentialFooter from '../components/ResidentialFooter';

const RemoteSupport = () => {
  const navigate = useNavigate();

  return (
    <div className="remote-support-page" style={{}}>
      <Navbar type="residential" />

      <section style={{padding: '6rem 2rem', maxWidth: '1000px', margin: '0 auto'}}>
        <div style={{textAlign: 'center', marginBottom: '3rem'}}>
          <Headphones size={64} style={{color: '#87CEEB', margin: '0 auto 1rem'}} />
          <h1 style={{color: '#fff', fontSize: '3rem', marginBottom: '1rem'}}>Remote Support</h1>
          <p style={{color: '#e0e0e0', fontSize: '1.2rem'}}>Get help from anywhere, anytime</p>
        </div>

        <div style={{background: 'rgba(135, 206, 235, 0.05)', padding: '2rem', borderRadius: '12px', border: '1px solid rgba(135, 206, 235, 0.2)', marginBottom: '2rem'}}>
          <h2 style={{color: '#87CEEB', fontSize: '2rem', marginBottom: '1rem'}}>How Remote Support Works</h2>
          <div style={{display: 'grid', gap: '2rem'}}>
            <div>
              <div style={{display: 'flex', gap: '1rem', alignItems: 'flex-start', marginBottom: '0.5rem'}}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: '#87CEEB',
                  color: '#0a0a1f',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  flexShrink: 0
                }}>1</div>
                <div>
                  <h3 style={{color: '#fff', fontSize: '1.3rem', marginBottom: '0.5rem'}}>Contact Us</h3>
                  <p style={{color: '#e0e0e0', fontSize: '1.1rem'}}>Call, email, or submit a ticket through our portal describing your issue.</p>
                </div>
              </div>
            </div>
            <div>
              <div style={{display: 'flex', gap: '1rem', alignItems: 'flex-start', marginBottom: '0.5rem'}}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: '#87CEEB',
                  color: '#0a0a1f',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  flexShrink: 0
                }}>2</div>
                <div>
                  <h3 style={{color: '#fff', fontSize: '1.3rem', marginBottom: '0.5rem'}}>Connect Remotely</h3>
                  <p style={{color: '#e0e0e0', fontSize: '1.1rem'}}>We\'ll send you a secure link. Click it and we\'ll connect to your computer (with your permission).</p>
                </div>
              </div>
            </div>
            <div>
              <div style={{display: 'flex', gap: '1rem', alignItems: 'flex-start', marginBottom: '0.5rem'}}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: '#87CEEB',
                  color: '#0a0a1f',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  flexShrink: 0
                }}>3</div>
                <div>
                  <h3 style={{color: '#fff', fontSize: '1.3rem', marginBottom: '0.5rem'}}>We Fix The Problem</h3>
                  <p style={{color: '#e0e0e0', fontSize: '1.1rem'}}>Watch as we troubleshoot and resolve your issue. We\'ll explain what we\'re doing as we go.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '2rem'}}>
          <div style={{background: 'rgba(135, 206, 235, 0.05)', padding: '2rem', borderRadius: '12px', border: '1px solid rgba(135, 206, 235, 0.2)'}}>
            <Monitor size={40} style={{color: '#87CEEB', marginBottom: '1rem'}} />
            <h3 style={{color: '#fff', fontSize: '1.3rem', marginBottom: '0.5rem'}}>What We Can Fix</h3>
            <p style={{color: '#e0e0e0'}}>Software issues, slow computers, virus removal, email problems, and much more.</p>
          </div>
          <div style={{background: 'rgba(135, 206, 235, 0.05)', padding: '2rem', borderRadius: '12px', border: '1px solid rgba(135, 206, 235, 0.2)'}}>
            <Clock size={40} style={{color: '#87CEEB', marginBottom: '1rem'}} />
            <h3 style={{color: '#fff', fontSize: '1.3rem', marginBottom: '0.5rem'}}>Response Times</h3>
            <p style={{color: '#e0e0e0'}}>Basic: 4 hours | Plus: 2 hours | Elite: 30 minutes</p>
          </div>
          <div style={{background: 'rgba(135, 206, 235, 0.05)', padding: '2rem', borderRadius: '12px', border: '1px solid rgba(135, 206, 235, 0.2)'}}>
            <MessageSquare size={40} style={{color: '#87CEEB', marginBottom: '1rem'}} />
            <h3 style={{color: '#fff', fontSize: '1.3rem', marginBottom: '0.5rem'}}>Support Hours</h3>
            <p style={{color: '#e0e0e0'}}>Basic: 9 AM-5 PM | Plus: 8 AM-8 PM | Elite: 24/7</p>
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
            Call Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default RemoteSupport;