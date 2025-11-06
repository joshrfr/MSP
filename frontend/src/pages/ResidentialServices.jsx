import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Monitor, HardDrive, Headphones, Wrench, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import '../ResidentialTheme.css';

const ResidentialServices = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: Monitor,
      title: 'Antivirus & Monitoring',
      description: 'Protect your devices with enterprise-grade antivirus and 24/7 monitoring.',
      link: '/residential/antivirus'
    },
    {
      icon: HardDrive,
      title: 'Backup Services',
      description: 'Automatic cloud backups to keep your important files safe and recoverable.',
      link: '/residential/backup'
    },
    {
      icon: Headphones,
      title: 'Remote Support',
      description: 'Get help from our technicians remotely, whenever you need assistance.',
      link: '/residential/remote-support'
    },
    {
      icon: Wrench,
      title: 'PC & Server Builds',
      description: 'Custom-built computers and servers tailored to your specific needs.',
      link: '/residential#pc-builds'
    }
  ];

  return (
    <div className="residential-services-page" style={{minHeight: '100vh', background: '#0a0a1f'}}>
      <Navbar type="residential" />

      <section style={{padding: '6rem 2rem', maxWidth: '1200px', margin: '0 auto'}}>
        <h1 style={{color: '#fff', fontSize: '3rem', textAlign: 'center', marginBottom: '1rem'}}>Our Services</h1>
        <p style={{color: '#e0e0e0', fontSize: '1.2rem', textAlign: 'center', marginBottom: '4rem', maxWidth: '800px', margin: '0 auto 4rem'}}>
          Professional IT support and services designed specifically for home users
        </p>

        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem'}}>
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} style={{
                background: 'rgba(135, 206, 235, 0.05)',
                padding: '2rem',
                borderRadius: '12px',
                border: '1px solid rgba(135, 206, 235, 0.2)',
                cursor: 'pointer',
                transition: 'all 0.3s'
              }}
              onClick={() => navigate(service.link)}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#87CEEB';
                e.currentTarget.style.transform = 'translateY(-5px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(135, 206, 235, 0.2)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}>
                <Icon size={48} style={{color: '#87CEEB', marginBottom: '1rem'}} />
                <h3 style={{color: '#fff', fontSize: '1.5rem', marginBottom: '1rem'}}>{service.title}</h3>
                <p style={{color: '#e0e0e0', marginBottom: '1rem'}}>{service.description}</p>
                <div style={{color: '#87CEEB', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                  Learn More <ArrowRight size={20} />
                </div>
              </div>
            );
          })}
        </div>

        <div style={{textAlign: 'center', marginTop: '4rem'}}>
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
            View Our Plans
          </button>
        </div>
      </section>
    </div>
  );
};

export default ResidentialServices;