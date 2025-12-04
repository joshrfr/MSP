import React, { useState } from 'react';
import { Phone, Mail, User, Briefcase } from 'lucide-react';
import './CallbackForm.css';

const CallbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: 'business',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production, this would send to your backend/email service
    console.log('Form submitted:', formData);
    setSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        serviceType: 'business',
        message: ''
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section className="callback-section">
      <div className="callback-container">
        <div className="callback-header">
          <h2 className="callback-title">Get Your Free Assessment</h2>
          <p className="callback-subtitle">
            Our team will reach out to discuss your IT needs and provide a customized solution
          </p>
        </div>

        {submitted ? (
          <div className="callback-success">
            <div className="success-icon">✓</div>
            <h3>Thank you!</h3>
            <p>We've received your request. Our team will contact you shortly.</p>
          </div>
        ) : (
          <form className="callback-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">
                  <User size={18} />
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">
                  <Mail size={18} />
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@company.com"
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">
                  <Phone size={18} />
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(555) 123-4567"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="serviceType">
                  <Briefcase size={18} />
                  I Need Help With...
                </label>
                <select
                  id="serviceType"
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                >
                  <option value="business">IT Services</option>
                  <option value="cybersecurity">Cybersecurity</option>
                  <option value="cloud">Cloud Infrastructure</option>
                  <option value="strategic">Strategic Services</option>
                  <option value="other">Other/Not Sure</option>
                </select>
              </div>
            </div>

            <div className="form-group full-width">
              <label htmlFor="message">
                Tell us more (optional)
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Briefly describe your IT challenges or goals..."
                rows="4"
              />
            </div>

            <button type="submit" className="callback-submit-btn">
              Request Free Assessment
            </button>

            <p className="form-disclaimer">
              We'll typically respond within 1 business day. Your information is secure and never shared.
            </p>
          </form>
        )}
      </div>
    </section>
  );
};

export default CallbackForm;
