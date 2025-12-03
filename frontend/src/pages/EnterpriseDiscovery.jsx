import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Navbar from '../components/Navbar';
import BusinessFooter from '../components/BusinessFooter';
import '../Services.css';

const EnterpriseDiscovery = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    company_name: '',
    website: '',
    employee_count: '',
    contact_name: '',
    contact_email: '',
    contact_phone: '',
    current_it: '',
    pain_points: '',
    project_scope: '',
    timeline: '',
    contact_preference: 'email'
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/qualifications/enterprise', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString()
        })
      });

      if (response.ok) {
        setSubmitted(true);
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitted(true);
    }

    setLoading(false);
  };

  if (submitted) {
    return (
      <div className="services-page">
        <Navbar type="business" />
        <section style={{ padding: '100px 7.6923%', minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
            <CheckCircle2 size={80} style={{ color: '#28a745', marginBottom: '30px' }} />
            <h2 style={{ color: 'var(--text-primary)', fontSize: '36px', marginBottom: '20px' }}>
              Thank You!
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '18px', marginBottom: '30px' }}>
              We've received your information. Our sales team will contact you within 24 hours to schedule your discovery call.
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '30px' }}>
              In the meantime, feel free to call us at <strong>(850) 610-3889</strong>
            </p>
            <button
              onClick={() => navigate('/')}
              style={{
                padding: '12px 32px',
                background: '#87CEEB',
                color: '#000',
                border: 'none',
                borderRadius: '6px',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              Return Home
            </button>
          </div>
        </section>
        <BusinessFooter />
      </div>
    );
  }

  return (
    <div className="services-page">
      <Navbar type="business" />

      <section className="service-builder-section">
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <div style={{ marginBottom: '40px', textAlign: 'center' }}>
            <h2 className="section-title">Enterprise Discovery</h2>
            <p className="section-subtitle">
              Let's talk about your vision. Fill out this brief form and our team will reach out within 24 hours.
            </p>
          </div>

          <form onSubmit={handleSubmit} style={{
            backgroundColor: 'var(--bg-secondary)',
            padding: '40px',
            borderRadius: '12px',
            border: '1px solid var(--border-subtle)'
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {/* Company Info */}
              <div>
                <h3 style={{ color: 'var(--text-primary)', marginBottom: '16px' }}>Company Information</h3>

                <div style={{ marginBottom: '16px' }}>
                  <label style={{ color: 'var(--text-secondary)', display: 'block', marginBottom: '8px' }}>
                    Company Name *
                  </label>
                  <input
                    type="text"
                    name="company_name"
                    value={formData.company_name}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '12px',
                      backgroundColor: 'rgba(135, 206, 235, 0.05)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: '6px',
                      color: 'var(--text-primary)',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                <div style={{ marginBottom: '16px' }}>
                  <label style={{ color: 'var(--text-secondary)', display: 'block', marginBottom: '8px' }}>
                    Website
                  </label>
                  <input
                    type="url"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    placeholder="https://..."
                    style={{
                      width: '100%',
                      padding: '12px',
                      backgroundColor: 'rgba(135, 206, 235, 0.05)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: '6px',
                      color: 'var(--text-primary)',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                <div style={{ marginBottom: '16px' }}>
                  <label style={{ color: 'var(--text-secondary)', display: 'block', marginBottom: '8px' }}>
                    Number of Employees *
                  </label>
                  <input
                    type="number"
                    name="employee_count"
                    value={formData.employee_count}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '12px',
                      backgroundColor: 'rgba(135, 206, 235, 0.05)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: '6px',
                      color: 'var(--text-primary)',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>
              </div>

              {/* Contact Info */}
              <div>
                <h3 style={{ color: 'var(--text-primary)', marginBottom: '16px' }}>Your Contact Information</h3>

                <div style={{ marginBottom: '16px' }}>
                  <label style={{ color: 'var(--text-secondary)', display: 'block', marginBottom: '8px' }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="contact_name"
                    value={formData.contact_name}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '12px',
                      backgroundColor: 'rgba(135, 206, 235, 0.05)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: '6px',
                      color: 'var(--text-primary)',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                <div style={{ marginBottom: '16px' }}>
                  <label style={{ color: 'var(--text-secondary)', display: 'block', marginBottom: '8px' }}>
                    Email *
                  </label>
                  <input
                    type="email"
                    name="contact_email"
                    value={formData.contact_email}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '12px',
                      backgroundColor: 'rgba(135, 206, 235, 0.05)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: '6px',
                      color: 'var(--text-primary)',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                <div style={{ marginBottom: '16px' }}>
                  <label style={{ color: 'var(--text-secondary)', display: 'block', marginBottom: '8px' }}>
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="contact_phone"
                    value={formData.contact_phone}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '12px',
                      backgroundColor: 'rgba(135, 206, 235, 0.05)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: '6px',
                      color: 'var(--text-primary)',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>
              </div>

              {/* Business Details */}
              <div>
                <h3 style={{ color: 'var(--text-primary)', marginBottom: '16px' }}>About Your Project</h3>

                <div style={{ marginBottom: '16px' }}>
                  <label style={{ color: 'var(--text-secondary)', display: 'block', marginBottom: '8px' }}>
                    Current IT Situation *
                  </label>
                  <textarea
                    name="current_it"
                    value={formData.current_it}
                    onChange={handleChange}
                    placeholder="Tell us about your current IT setup and infrastructure"
                    required
                    rows={3}
                    style={{
                      width: '100%',
                      padding: '12px',
                      backgroundColor: 'rgba(135, 206, 235, 0.05)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: '6px',
                      color: 'var(--text-primary)',
                      boxSizing: 'border-box',
                      fontFamily: 'inherit',
                      resize: 'vertical'
                    }}
                  />
                </div>

                <div style={{ marginBottom: '16px' }}>
                  <label style={{ color: 'var(--text-secondary)', display: 'block', marginBottom: '8px' }}>
                    Your Main Challenges *
                  </label>
                  <textarea
                    name="pain_points"
                    value={formData.pain_points}
                    onChange={handleChange}
                    placeholder="What are your biggest IT challenges?"
                    required
                    rows={3}
                    style={{
                      width: '100%',
                      padding: '12px',
                      backgroundColor: 'rgba(135, 206, 235, 0.05)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: '6px',
                      color: 'var(--text-primary)',
                      boxSizing: 'border-box',
                      fontFamily: 'inherit',
                      resize: 'vertical'
                    }}
                  />
                </div>

                <div style={{ marginBottom: '16px' }}>
                  <label style={{ color: 'var(--text-secondary)', display: 'block', marginBottom: '8px' }}>
                    Project Scope *
                  </label>
                  <textarea
                    name="project_scope"
                    value={formData.project_scope}
                    onChange={handleChange}
                    placeholder="What are you trying to achieve?"
                    required
                    rows={3}
                    style={{
                      width: '100%',
                      padding: '12px',
                      backgroundColor: 'rgba(135, 206, 235, 0.05)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: '6px',
                      color: 'var(--text-primary)',
                      boxSizing: 'border-box',
                      fontFamily: 'inherit',
                      resize: 'vertical'
                    }}
                  />
                </div>

                <div style={{ marginBottom: '16px' }}>
                  <label style={{ color: 'var(--text-secondary)', display: 'block', marginBottom: '8px' }}>
                    When do you need this to start? *
                  </label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '12px',
                      backgroundColor: 'rgba(135, 206, 235, 0.05)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: '6px',
                      color: 'var(--text-primary)',
                      boxSizing: 'border-box'
                    }}
                  >
                    <option value="">Select timeline</option>
                    <option value="immediate">Immediately</option>
                    <option value="quarter">This quarter</option>
                    <option value="year">This year</option>
                    <option value="exploring">Just exploring</option>
                  </select>
                </div>
              </div>

              {/* Preferred Contact */}
              <div>
                <h3 style={{ color: 'var(--text-primary)', marginBottom: '16px' }}>How Should We Reach You?</h3>
                <div style={{ display: 'flex', gap: '16px' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                    <input
                      type="radio"
                      name="contact_preference"
                      value="email"
                      checked={formData.contact_preference === 'email'}
                      onChange={handleChange}
                    />
                    <span style={{ color: 'var(--text-secondary)' }}>Email</span>
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                    <input
                      type="radio"
                      name="contact_preference"
                      value="phone"
                      checked={formData.contact_preference === 'phone'}
                      onChange={handleChange}
                    />
                    <span style={{ color: 'var(--text-secondary)' }}>Phone</span>
                  </label>
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                style={{
                  padding: '14px 32px',
                  background: '#87CEEB',
                  color: '#000',
                  border: 'none',
                  borderRadius: '6px',
                  fontSize: '16px',
                  fontWeight: '600',
                  cursor: loading ? 'not-allowed' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  marginTop: '24px'
                }}
              >
                {loading ? 'Submitting...' : 'Submit & Schedule Discovery Call'}
                <ArrowRight size={18} />
              </button>
            </div>
          </form>
        </div>
      </section>

      <BusinessFooter />
    </div>
  );
};

export default EnterpriseDiscovery;
