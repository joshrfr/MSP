import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import BusinessFooter from './BusinessFooter';
import { ArrowRight, ExternalLink } from 'lucide-react';

const AppRedirect = ({ title, description }) => {
  const navigate = useNavigate();

  return (
    <div className="redirect-page">
      <Navbar type="business" />

      <section className="redirect-section" style={{
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '80px 20px',
        textAlign: 'center'
      }}>
        <div className="redirect-content" style={{
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          <div style={{
            fontSize: '48px',
            marginBottom: '20px'
          }}>🚀</div>

          <h1 style={{
            fontSize: '32px',
            fontWeight: '700',
            color: 'var(--text-primary)',
            marginBottom: '20px'
          }}>
            {title || 'Business Plans Moving to Our Portal'}
          </h1>

          <p style={{
            fontSize: '18px',
            color: 'var(--text-secondary)',
            lineHeight: '1.6',
            marginBottom: '40px'
          }}>
            {description || 'Our business plans (CORE, CORE+, PREMIUM, ENTERPRISE) are now handled through our dedicated customer portal at app.tttmsp.com. This allows us to provide you with a better experience, real-time updates, and seamless onboarding.'}
          </p>

          <div style={{
            display: 'flex',
            gap: '20px',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <button
              className="btn-primary"
              onClick={() => {
                alert('Portal launching soon! For now, please call us at (850) 610-3889.');
                // Future: window.location.href = 'https://app.tttmsp.com/signup';
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}
            >
              Go to Business Portal
              <ExternalLink size={20} />
            </button>

            <button
              className="btn-secondary"
              onClick={() => navigate('/residential')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}
            >
              View Residential Plans
              <ArrowRight size={20} />
            </button>
          </div>

          <div style={{
            marginTop: '40px',
            padding: '20px',
            backgroundColor: 'var(--bg-secondary)',
            borderRadius: '8px',
            border: '1px solid var(--border-subtle)'
          }}>
            <p style={{
              fontSize: '16px',
              color: 'var(--text-secondary)',
              margin: '0'
            }}>
              <strong>Need help now?</strong><br />
              Call us at <a href="tel:8506103889" style={{ color: 'var(--brand-primary)', textDecoration: 'none' }}>(850) 610-3889</a> to discuss your business IT needs.
            </p>
          </div>
        </div>
      </section>

      <BusinessFooter />
    </div>
  );
};

export default AppRedirect;
