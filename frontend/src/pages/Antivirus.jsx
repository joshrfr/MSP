import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Eye, AlertTriangle, CheckCircle } from 'lucide-react';
import Navbar from '../components/Navbar';

const Antivirus = () => {
  const navigate = useNavigate();

  return (
    <div className="antivirus-page" style={{minHeight: '100vh', background: '#0a0a1f'}}>
      <Navbar type="residential" />

      <section style={{padding: '6rem 2rem', maxWidth: '1000px', margin: '0 auto'}}>
        <div style={{textAlign: 'center', marginBottom: '3rem'}}>
          <Shield size={64} style={{color: '#87CEEB', margin: '0 auto 1rem'}} />
          <h1 style={{color: '#fff', fontSize: '3rem', marginBottom: '1rem'}}>Antivirus & Monitoring</h1>
          <p style={{color: '#e0e0e0', fontSize: '1.2rem'}}>24/7 protection for your home devices</p>
        </div>

        <div style={{background: 'rgba(135, 206, 235, 0.05)', padding: '2rem', borderRadius: '12px', border: '1px solid rgba(135, 206, 235, 0.2)', marginBottom: '2rem'}}>
          <h2 style={{color: '#87CEEB', fontSize: '2rem', marginBottom: '1rem'}}>What\'s Included</h2>
          <div style={{display: 'grid', gap: '1rem'}}>
            <div style={{display: 'flex', gap: '1rem', alignItems: 'flex-start'}}>
              <CheckCircle size={24} style={{color: '#87CEEB', flexShrink: 0, marginTop: '0.2rem'}} />
              <p style={{color: '#e0e0e0', fontSize: '1.1rem'}}>Enterprise-grade antivirus software for all your devices</p>
            </div>
            <div style={{display: 'flex', gap: '1rem', alignItems: 'flex-start'}}>
              <Eye size={24} style={{color: '#87CEEB', flexShrink: 0, marginTop: '0.2rem'}} />
              <p style={{color: '#e0e0e0', fontSize: '1.1rem'}}>24/7 monitoring for threats and suspicious activity</p>
            </div>
            <div style={{display: 'flex', gap: '1rem', alignItems: 'flex-start'}}>
              <AlertTriangle size={24} style={{color: '#87CEEB', flexShrink: 0, marginTop: '0.2rem'}} />
              <p style={{color: '#e0e0e0', fontSize: '1.1rem'}}>Automatic threat removal and quarantine</p>
            </div>
            <div style={{display: 'flex', gap: '1rem', alignItems: 'flex-start'}}>
              <Shield size={24} style={{color: '#87CEEB', flexShrink: 0, marginTop: '0.2rem'}} />
              <p style={{color: '#e0e0e0', fontSize: '1.1rem'}}>Real-time protection against malware, ransomware, and viruses</p>
            </div>
          </div>
        </div>

        <div style={{background: 'rgba(135, 206, 235, 0.05)', padding: '2rem', borderRadius: '12px', border: '1px solid rgba(135, 206, 235, 0.2)', marginBottom: '2rem'}}>
          <h3 style={{color: '#fff', fontSize: '1.5rem', marginBottom: '1rem'}}>How It Works</h3>
          <p style={{color: '#e0e0e0', fontSize: '1.1rem', lineHeight: '1.8'}}>
            We install lightweight monitoring software on your computers that runs quietly in the background. It continuously scans for threats and sends us alerts if anything suspicious is detected. You can go about your day knowing we\'re watching over your devices 24/7.
          </p>
        </div>

        <div style={{background: 'rgba(40, 167, 69, 0.1)', padding: '2rem', borderRadius: '12px', border: '1px solid rgba(40, 167, 69, 0.3)', marginBottom: '3rem'}}>
          <h3 style={{color: '#28a745', fontSize: '1.5rem', marginBottom: '1rem'}}>Included in HomeCare Plus & Elite</h3>
          <p style={{color: '#e0e0e0'}}>Antivirus & Monitoring is included free with HomeCare Plus and Elite plans. HomeCare Basic users can add it for an additional fee.</p>
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
            cursor: 'pointer'
          }}>
            View Plans
          </button>
        </div>
      </section>
    </div>
  );
};

export default Antivirus;