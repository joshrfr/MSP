import '../ResidentialTheme.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Phone, MessageSquare, CheckCircle, Sparkles } from 'lucide-react';
import Navbar from '../components/Navbar';
import ResidentialFooter from '../components/ResidentialFooter';

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
    <div className="how-it-works-page">
      <Navbar type="residential" />

      <section className="cyber-section">
        <h1 className="futuristic-title" style={{fontSize: '3rem', textAlign: 'center', marginBottom: '1rem'}}>How It Works</h1>
        <p className="cyber-subtitle" style={{fontSize: '1.2rem', textAlign: 'center', marginBottom: '4rem'}}>
          Getting started with TopTier HomeCare is simple
        </p>

        <div style={{display: 'flex', flexDirection: 'column', gap: '3rem'}}>
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} style={{display: 'flex', gap: '2rem', alignItems: 'flex-start'}}>
                <div className="cyber-step-number" style={{width: '80px', height: '80px'}}>
                  <Icon size={40} />
                </div>
                <div style={{flex: 1}}>
                  <h3 className="futuristic-title" style={{fontSize: '1.8rem', marginBottom: '0.5rem'}}>{step.title}</h3>
                  <p className="cyber-subtitle" style={{fontSize: '1.1rem', lineHeight: '1.8'}}>{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="cyber-info-box" style={{marginTop: '4rem'}}>
          <h3 className="futuristic-title" style={{fontSize: '1.5rem', marginBottom: '1rem'}}>Still Have Questions?</h3>
          <p className="cyber-subtitle" style={{marginBottom: '1.5rem'}}>We\'re here to help! Call us at (850) 610-3889 or browse our plans to get started.</p>
          <div style={{display: 'flex', gap: '1rem', flexWrap: 'wrap'}}>
            <button onClick={() => navigate('/residential#plans')} className="cyber-button" style={{padding: '0.75rem 1.5rem'}}>
              View Plans
            </button>
            <button onClick={() => window.open('tel:8506103889')} className="cyber-button-outline" style={{padding: '0.75rem 1.5rem'}}>
              Call Us
            </button>
          </div>
        </div>
      </section>
      
      <ResidentialFooter />
    </div>
  );
};

export default HowItWorks;