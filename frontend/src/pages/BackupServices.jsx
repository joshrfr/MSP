import '../ResidentialTheme.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HardDrive, Cloud, History, Lock } from 'lucide-react';
import Navbar from '../components/Navbar';

const BackupServices = () => {
  const navigate = useNavigate();

  return (
    <div className="backup-page" style={{}}>
      <Navbar type="residential" />

      <section style={{padding: '6rem 2rem', maxWidth: '1000px', margin: '0 auto'}}>
        <div style={{textAlign: 'center', marginBottom: '3rem'}}>
          <Cloud size={64} style={{color: '#87CEEB', margin: '0 auto 1rem'}} />
          <h1 style={{color: '#fff', fontSize: '3rem', marginBottom: '1rem'}}>Backup Services</h1>
          <p style={{color: '#e0e0e0', fontSize: '1.2rem'}}>Never lose your important files again</p>
        </div>

        <div style={{background: 'rgba(135, 206, 235, 0.05)', padding: '2rem', borderRadius: '12px', border: '1px solid rgba(135, 206, 235, 0.2)', marginBottom: '2rem'}}>
          <h2 style={{color: '#87CEEB', fontSize: '2rem', marginBottom: '1rem'}}>What We Backup</h2>
          <div style={{display: 'grid', gap: '1rem'}}>
            <div style={{display: 'flex', gap: '1rem', alignItems: 'flex-start'}}>
              <HardDrive size={24} style={{color: '#87CEEB', flexShrink: 0, marginTop: '0.2rem'}} />
              <p style={{color: '#e0e0e0', fontSize: '1.1rem'}}>Documents, photos, videos, and personal files</p>
            </div>
            <div style={{display: 'flex', gap: '1rem', alignItems: 'flex-start'}}>
              <Cloud size={24} style={{color: '#87CEEB', flexShrink: 0, marginTop: '0.2rem'}} />
              <p style={{color: '#e0e0e0', fontSize: '1.1rem'}}>Automatic daily backups to secure cloud storage</p>
            </div>
            <div style={{display: 'flex', gap: '1rem', alignItems: 'flex-start'}}>
              <History size={24} style={{color: '#87CEEB', flexShrink: 0, marginTop: '0.2rem'}} />
              <p style={{color: '#e0e0e0', fontSize: '1.1rem'}}>Keep multiple versions of your files (up to 30 days)</p>
            </div>
            <div style={{display: 'flex', gap: '1rem', alignItems: 'flex-start'}}>
              <Lock size={24} style={{color: '#87CEEB', flexShrink: 0, marginTop: '0.2rem'}} />
              <p style={{color: '#e0e0e0', fontSize: '1.1rem'}}>Encrypted storage for maximum security</p>
            </div>
          </div>
        </div>

        <div style={{background: 'rgba(135, 206, 235, 0.05)', padding: '2rem', borderRadius: '12px', border: '1px solid rgba(135, 206, 235, 0.2)', marginBottom: '2rem'}}>
          <h3 style={{color: '#fff', fontSize: '1.5rem', marginBottom: '1rem'}}>Why Backup?</h3>
          <p style={{color: '#e0e0e0', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1rem'}}>
            Hard drives fail, laptops get stolen, and accidents happen. With our backup service, you\'ll never have to worry about losing precious family photos, important documents, or years of work.
          </p>
          <p style={{color: '#e0e0e0', fontSize: '1.1rem', lineHeight: '1.8'}}>
            If disaster strikes, we can restore your files quickly and easily - often within hours.
          </p>
        </div>

        <div style={{background: 'rgba(40, 167, 69, 0.1)', padding: '2rem', borderRadius: '12px', border: '1px solid rgba(40, 167, 69, 0.3)', marginBottom: '3rem'}}>
          <h3 style={{color: '#28a745', fontSize: '1.5rem', marginBottom: '1rem'}}>Included in HomeCare Plus & Elite</h3>
          <p style={{color: '#e0e0e0'}}>Cloud backup is included with HomeCare Plus (basic) and Elite (premium with more storage). Basic plan users can add it for a small monthly fee.</p>
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

export default BackupServices;