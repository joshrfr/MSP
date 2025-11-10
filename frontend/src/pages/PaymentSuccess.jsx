import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { CheckCircle2, Loader2, XCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import ResidentialFooter from '../components/ResidentialFooter';

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('session_id');
  
  const [status, setStatus] = useState('checking'); // checking, success, error
  const [paymentDetails, setPaymentDetails] = useState(null);
  const [pollCount, setPollCount] = useState(0);
  const maxPolls = 5;

  useEffect(() => {
    if (!sessionId) {
      setStatus('error');
      return;
    }

    pollPaymentStatus();
  }, [sessionId]);

  const pollPaymentStatus = async (attempt = 0) => {
    if (attempt >= maxPolls) {
      setStatus('error');
      return;
    }

    try {
      const backendUrl = process.env.REACT_APP_BACKEND_URL || window.location.origin;
      const response = await fetch(`${backendUrl}/api/payments/checkout/status/${sessionId}`);
      
      if (!response.ok) {
        throw new Error('Failed to check payment status');
      }

      const data = await response.json();
      
      if (data.payment_status === 'paid') {
        setPaymentDetails(data);
        setStatus('success');
        return;
      } else if (data.status === 'expired') {
        setStatus('error');
        return;
      }

      // If still pending, poll again after 2 seconds
      setPollCount(attempt + 1);
      setTimeout(() => pollPaymentStatus(attempt + 1), 2000);
    } catch (error) {
      console.error('Error checking payment status:', error);
      if (attempt < maxPolls - 1) {
        setTimeout(() => pollPaymentStatus(attempt + 1), 2000);
      } else {
        setStatus('error');
      }
    }
  };

  return (
    <div className="payment-success-page" style={{minHeight: '100vh', background: '#0a0a1f'}}>
      {/* Header */}
      <Navbar type="residential" />

      <section style={{
        padding: '6rem 2rem',
        maxWidth: '800px',
        margin: '0 auto',
        textAlign: 'center'
      }}>
        {status === 'checking' && (
          <div>
            <Loader2 size={64} className="spinner" style={{
              color: '#87CEEB',
              margin: '0 auto 2rem',
              animation: 'spin 1s linear infinite'
            }} />
            <h1 style={{color: '#fff', fontSize: '2rem', marginBottom: '1rem'}}>
              Processing Your Payment...
            </h1>
            <p style={{color: '#e0e0e0', fontSize: '1.1rem'}}>
              Please wait while we confirm your payment (attempt {pollCount + 1}/{maxPolls})
            </p>
          </div>
        )}

        {status === 'success' && (
          <div>
            <div style={{
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              background: 'rgba(40, 167, 69, 0.2)',
              border: '3px solid #28a745',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 2rem'
            }}>
              <CheckCircle2 size={64} style={{color: '#28a745'}} />
            </div>
            <h1 style={{color: '#fff', fontSize: '2.5rem', marginBottom: '1rem'}}>
              Payment Successful!
            </h1>
            <p style={{color: '#e0e0e0', fontSize: '1.2rem', marginBottom: '2rem'}}>
              Thank you for subscribing to {paymentDetails?.metadata?.plan_name || 'our service'}
            </p>
            
            <div style={{
              background: 'rgba(135, 206, 235, 0.1)',
              padding: '2rem',
              borderRadius: '12px',
              border: '1px solid rgba(135, 206, 235, 0.3)',
              marginBottom: '2rem',
              textAlign: 'left'
            }}>
              <h3 style={{color: '#87CEEB', marginBottom: '1rem'}}>Order Summary</h3>
              <div style={{color: '#e0e0e0'}}>
                <p style={{marginBottom: '0.5rem'}}>
                  <strong>Plan:</strong> {paymentDetails?.metadata?.plan_name}
                </p>
                <p style={{marginBottom: '0.5rem'}}>
                  <strong>Amount:</strong> ${paymentDetails?.amount_total?.toFixed(2)} {paymentDetails?.currency?.toUpperCase()}/month
                </p>
                <p style={{marginBottom: '0.5rem'}}>
                  <strong>Email:</strong> {paymentDetails?.metadata?.user_email}
                </p>
              </div>
            </div>

            <div style={{
              background: 'rgba(40, 167, 69, 0.1)',
              padding: '1.5rem',
              borderRadius: '8px',
              border: '1px solid rgba(40, 167, 69, 0.3)',
              marginBottom: '2rem'
            }}>
              <p style={{color: '#e0e0e0', fontSize: '1rem'}}>
                A confirmation email has been sent to your email address. Our team will contact you within 24 hours to set up your service.
              </p>
            </div>

            <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap'}}>
              <button 
                onClick={() => navigate('/')}
                style={{
                  padding: '0.75rem 2rem',
                  background: '#87CEEB',
                  color: '#0a0a1f',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => e.target.style.background = '#5fb3d1'}
                onMouseLeave={(e) => e.target.style.background = '#87CEEB'}
              >
                Return to Home
              </button>
              <button 
                onClick={() => navigate('/residential')}
                style={{
                  padding: '0.75rem 2rem',
                  background: 'transparent',
                  color: '#87CEEB',
                  border: '2px solid #87CEEB',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => e.target.style.borderColor = '#5fb3d1'}
                onMouseLeave={(e) => e.target.style.borderColor = '#87CEEB'}
              >
                View Plans
              </button>
            </div>
          </div>
        )}

        {status === 'error' && (
          <div>
            <div style={{
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              background: 'rgba(220, 53, 69, 0.2)',
              border: '3px solid #dc3545',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 2rem'
            }}>
              <XCircle size={64} style={{color: '#dc3545'}} />
            </div>
            <h1 style={{color: '#fff', fontSize: '2.5rem', marginBottom: '1rem'}}>
              Payment Status Unknown
            </h1>
            <p style={{color: '#e0e0e0', fontSize: '1.2rem', marginBottom: '2rem'}}>
              We couldn't verify your payment status. Please check your email for confirmation or contact us.
            </p>
            
            <div style={{
              background: 'rgba(220, 53, 69, 0.1)',
              padding: '1.5rem',
              borderRadius: '8px',
              border: '1px solid rgba(220, 53, 69, 0.3)',
              marginBottom: '2rem'
            }}>
              <p style={{color: '#e0e0e0', fontSize: '1rem'}}>
                If you were charged, please contact us at <strong>(850) 610-3889</strong> or <strong>helpdesk@tttmsp.com</strong> with your session ID.
              </p>
              {sessionId && (
                <p style={{color: '#e0e0e0', fontSize: '0.9rem', marginTop: '1rem', fontFamily: 'monospace'}}>
                  Session ID: {sessionId}
                </p>
              )}
            </div>

            <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap'}}>
              <button 
                onClick={() => navigate('/')}
                style={{
                  padding: '0.75rem 2rem',
                  background: '#87CEEB',
                  color: '#0a0a1f',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => e.target.style.background = '#5fb3d1'}
                onMouseLeave={(e) => e.target.style.background = '#87CEEB'}
              >
                Return to Home
              </button>
              <button 
                onClick={() => window.open('tel:8506103889')}
                style={{
                  padding: '0.75rem 2rem',
                  background: 'transparent',
                  color: '#87CEEB',
                  border: '2px solid #87CEEB',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => e.target.style.borderColor = '#5fb3d1'}
                onMouseLeave={(e) => e.target.style.borderColor = '#87CEEB'}
              >
                Call Support
              </button>
            </div>
          </div>
        )}
      </section>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>

      <ResidentialFooter />
    </div>
  );
};

export default PaymentSuccess;
