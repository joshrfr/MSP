import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Monitor, HardDrive, Headphones, Wrench, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import ResidentialFooter from '../components/ResidentialFooter';
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
    <div className="residential-services-page">
      <Navbar type="residential" />

      <section className="cyber-section">
        <h1 className="futuristic-title" style={{fontSize: '3rem', textAlign: 'center', marginBottom: '1rem'}}>Our Services</h1>
        <p className="cyber-subtitle" style={{textAlign: 'center', marginBottom: '4rem', maxWidth: '800px', margin: '0 auto 4rem'}}>
          Professional IT support and services designed specifically for home users
        </p>

        <div className="cyber-grid">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="cyber-card"
              onClick={() => navigate(service.link)}
              style={{cursor: 'pointer'}}>
                <Icon size={48} className="cyber-icon" style={{marginBottom: '1rem'}} />
                <h3 className="futuristic-title" style={{fontSize: '1.5rem', marginBottom: '1rem'}}>{service.title}</h3>
                <p className="cyber-subtitle" style={{marginBottom: '1rem'}}>{service.description}</p>
                <div style={{color: 'var(--cyber-cyan)', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                  Learn More <ArrowRight size={20} />
                </div>
              </div>
            );
          })}
        </div>

        <div style={{textAlign: 'center', marginTop: '4rem'}}>
          <button onClick={() => navigate('/residential#plans')} className="cyber-button">
            View Our Plans
          </button>
        </div>
      </section>
      
      <ResidentialFooter />
    </div>
  );
};

export default ResidentialServices;