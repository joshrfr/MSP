import React from 'react';
import Navbar from '../components/Navbar';
import BusinessFooter from '../components/BusinessFooter';
import { CheckCircle2, DollarSign, TrendingUp } from 'lucide-react';

const StripeIntegration = () => {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0a192f 0%, #112240 50%, #0a192f 100%)' }}>
      <Navbar type="business" />

      <section style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <DollarSign size={64} style={{ color: '#87CEEB', margin: '0 auto 1rem' }} />
          <h1 style={{ color: '#fff', fontSize: '3rem', marginBottom: '1rem' }}>Stripe Integration</h1>
          <p style={{ color: '#e0e0e0', fontSize: '1.2rem' }}>
            Powerful payment processing and monetization for SaaS platforms
          </p>
        </div>

        {/* SaaS Platform Model */}
        <div style={{ marginBottom: '3rem' }}>
          <h2 style={{ color: '#87CEEB', fontSize: '2rem', marginBottom: '1.5rem', borderBottom: '2px solid rgba(135, 206, 235, 0.3)', paddingBottom: '1rem' }}>
            SaaS Platform Overview
          </h2>
          <p style={{ color: '#cbd5e0', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            As a software as a service (SaaS) platform, TopTier Technologies extends integration of Stripe products to merchant connected accounts. Those merchants can access Stripe through our platform to accept payments from their own customers and receive payouts from their Stripe balance.
          </p>
        </div>

        {/* Monetization Models */}
        <div style={{ marginBottom: '3rem' }}>
          <h2 style={{ color: '#87CEEB', fontSize: '2rem', marginBottom: '1.5rem', borderBottom: '2px solid rgba(135, 206, 235, 0.3)', paddingBottom: '1rem' }}>
            Monetization Models
          </h2>

          {/* Stripe-owned Pricing Model */}
          <div style={{
            background: 'rgba(135, 206, 235, 0.05)',
            padding: '2rem',
            borderRadius: '12px',
            border: '1px solid rgba(135, 206, 235, 0.2)',
            marginBottom: '2rem'
          }}>
            <h3 style={{ color: '#87CEEB', fontSize: '1.5rem', marginBottom: '1rem' }}>Stripe-Owned Pricing Model</h3>
            <p style={{ color: '#cbd5e0', marginBottom: '1rem' }}>
              Your platform refers merchants to Stripe to process payments and use other financial products. In this model, the platform's connected accounts:
            </p>
            <ul style={{ color: '#cbd5e0', fontSize: '1rem', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
              <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <CheckCircle2 size={20} style={{ color: '#87CEEB', flexShrink: 0, marginTop: '2px' }} />
                Are the merchant of record for payments from their customers
              </li>
              <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <CheckCircle2 size={20} style={{ color: '#87CEEB', flexShrink: 0, marginTop: '2px' }} />
                Pay Stripe fees
              </li>
              <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <CheckCircle2 size={20} style={{ color: '#87CEEB', flexShrink: 0, marginTop: '2px' }} />
                Assume liability for their negative balances
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <CheckCircle2 size={20} style={{ color: '#87CEEB', flexShrink: 0, marginTop: '2px' }} />
                Process payments as direct charges
              </li>
            </ul>
            <div style={{ background: 'rgba(255, 155, 80, 0.1)', padding: '1.5rem', borderRadius: '8px', border: '1px solid rgba(255, 155, 80, 0.3)' }}>
              <p style={{ color: '#cbd5e0', margin: '0' }}>
                <strong style={{ color: '#ff9b50' }}>Revenue Opportunities:</strong> Charge connected accounts a subscription fee, per-transaction application fees, or qualify for revenue share from Stripe when merchants meet product activation targets.
              </p>
            </div>
          </div>

          {/* Buy Rate Model */}
          <div style={{
            background: 'rgba(135, 206, 235, 0.05)',
            padding: '2rem',
            borderRadius: '12px',
            border: '1px solid rgba(135, 206, 235, 0.2)'
          }}>
            <h3 style={{ color: '#87CEEB', fontSize: '1.5rem', marginBottom: '1rem' }}>Buy Rate Model</h3>
            <p style={{ color: '#cbd5e0', marginBottom: '1rem' }}>
              Your platform purchases and white labels payment processing and other products from Stripe, and offers them to your connected accounts. In this model, the platform's connected accounts:
            </p>
            <ul style={{ color: '#cbd5e0', fontSize: '1rem', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
              <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <CheckCircle2 size={20} style={{ color: '#87CEEB', flexShrink: 0, marginTop: '2px' }} />
                Don't pay Stripe fees
              </li>
              <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <CheckCircle2 size={20} style={{ color: '#87CEEB', flexShrink: 0, marginTop: '2px' }} />
                Are the merchant of record for payments from their customers
              </li>
              <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <CheckCircle2 size={20} style={{ color: '#87CEEB', flexShrink: 0, marginTop: '2px' }} />
                Are liable to the platform, not Stripe, for their negative balances
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <CheckCircle2 size={20} style={{ color: '#87CEEB', flexShrink: 0, marginTop: '2px' }} />
                Process payments as direct charges or destination on-behalf-of (OBO) charges
              </li>
            </ul>
            <div style={{ background: 'rgba(255, 155, 80, 0.1)', padding: '1.5rem', borderRadius: '8px', border: '1px solid rgba(255, 155, 80, 0.3)' }}>
              <p style={{ color: '#cbd5e0', margin: '0' }}>
                <strong style={{ color: '#ff9b50' }}>Revenue Opportunities:</strong> Charge connected accounts a subscription fee or per-transaction application fees using automated pricing logic.
              </p>
            </div>
          </div>
        </div>

        {/* Integration Details */}
        <div style={{ marginBottom: '3rem' }}>
          <h2 style={{ color: '#87CEEB', fontSize: '2rem', marginBottom: '1.5rem', borderBottom: '2px solid rgba(135, 206, 235, 0.3)', paddingBottom: '1rem' }}>
            Integration Status
          </h2>
          <div style={{
            background: 'rgba(40, 167, 69, 0.1)',
            padding: '2rem',
            borderRadius: '12px',
            border: '1px solid rgba(40, 167, 69, 0.3)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <TrendingUp size={32} style={{ color: '#28a745' }} />
              <h3 style={{ color: '#28a745', margin: '0', fontSize: '1.3rem' }}>Production Ready</h3>
            </div>
            <p style={{ color: '#cbd5e0', margin: '0' }}>
              Our Stripe integration is fully operational and ready to process payments. Merchants can seamlessly accept payments, manage their Stripe accounts, and track payouts through the TopTier Technologies platform.
            </p>
          </div>
        </div>
      </section>

      <BusinessFooter />
    </div>
  );
};

export default StripeIntegration;
