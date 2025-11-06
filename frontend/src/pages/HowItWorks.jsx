import '../ResidentialTheme.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Phone, MessageSquare, CheckCircle, Sparkles } from 'lucide-react';
import Navbar from '../components/Navbar';

const HowItWorks = () => {
  const navigate = useNavigate();

  const steps = [
    {
      icon: Phone,
      title: 'Step 1: Choose Your Plan',
      description: 'Select the HomeCare plan that fits your needs - Basic, Plus, or Elite. Not sure? Give us a call and we\'ll help you decide.'
    },
    {
      icon: MessageSquare,
      title: 'Step 2: Sign Up',
      description: 'Complete a quick signup process. We\'ll schedule a welcome call to understand your home tech setup.'
    },
    {
      icon: CheckCircle,
      title: 'Step 3: Get Set Up',
      description: 'We\'ll install monitoring software (if included in your plan) and run an initial health check on your devices.'
    },
    {
      icon: Sparkles,
      title: 'Step 4: Enjoy Peace of Mind',
      description: 'You\'re all set! Contact us anytime you need help via email, phone, or our support portal.'
    }
  ];

  return (
    <div className="how-it-works-page" style={{minHeight: '100vh', background: '#0a0a1f'}}>
      <Navbar type="residential" />

      <section style={{padding: '6rem 2rem', maxWidth: '1000px', margin: '0 auto'}}>
        <h1 style={{color: '#fff', fontSize: '3rem', textAlign: 'center', marginBottom: '1rem'}}>How It Works</h1>
        <p style={{color: '#e0e0e0', fontSize: '1.2rem', textAlign: 'center', marginBottom: '4rem'}}>
          Getting started with TopTier HomeCare is simple
        </p>

        <div style={{display: 'flex', flexDirection: 'column', gap: '3rem'}}>
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} style={{display: 'flex', gap: '2rem', alignItems: 'flex-start'}}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: 'rgba(135, 206, 235, 0.2)',
                  border: '2px solid #87CEEB',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Icon size={40} style={{color: '#87CEEB'}} />
                </div>
                <div style={{flex: 1}}>
                  <h3 style={{color: '#87CEEB', fontSize: '1.8rem', marginBottom: '0.5rem'}}>{step.title}</h3>
                  <p style={{color: '#e0e0e0', fontSize: '1.1rem', lineHeight: '1.8'}}>{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div style={{marginTop: '4rem', padding: '2rem', background: 'rgba(135, 206, 235, 0.1)', borderRadius: '12px', border: '1px solid rgba(135, 206, 235, 0.3)'}}>
          <h3 style={{color: '#87CEEB', fontSize: '1.5rem', marginBottom: '1rem'}}>Still Have Questions?</h3>
          <p style={{color: '#e0e0e0', marginBottom: '1.5rem'}}>We\'re here to help! Call us at (850) 610-3889 or browse our plans to get started.</p>
          <div style={{display: 'flex', gap: '1rem', flexWrap: 'wrap'}}>
            <button onClick={() => navigate('/residential#plans')} style={{
              padding: '0.75rem 1.5rem',
              background: '#87CEEB',
              color: '#0a0a1f',
              border: 'none',
              borderRadius: '8px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer'
            }}>
              View Plans
            </button>
            <button onClick={() => window.open('tel:8506103889')} style={{
              padding: '0.75rem 1.5rem',
              background: 'transparent',
              color: '#87CEEB',
              border: '2px solid #87CEEB',
              borderRadius: '8px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer'
            }}>
              Call Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;