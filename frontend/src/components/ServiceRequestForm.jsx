import React, { useState } from 'react';
import { Upload, Send } from 'lucide-react';
import './ServiceRequestForm.css';

const ServiceRequestForm = () => {
  const [formData, setFormData] = useState({
    service_type: 'Residential',
    description: '',
    name: '',
    email: '',
    phone: ''
  });
  const [file, setFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage({ type: '', text: '' });

    try {
      const backendUrl = process.env.REACT_APP_BACKEND_URL || '';
      const formDataToSend = new FormData();
      
      formDataToSend.append('service_type', formData.service_type);
      formDataToSend.append('description', formData.description);
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      
      if (file) {
        formDataToSend.append('file', file);
      }

      const response = await fetch(`${backendUrl}/api/contact`, {
        method: 'POST',
        body: formDataToSend
      });

      const result = await response.json();

      if (result.success) {
        setMessage({ type: 'success', text: result.message });
        // Reset form
        setFormData({
          service_type: 'Residential',
          description: '',
          name: '',
          email: '',
          phone: ''
        });
        setFile(null);
        // Clear file input
        const fileInput = document.getElementById('file-upload');
        if (fileInput) fileInput.value = '';
      } else {
        setMessage({ type: 'error', text: result.message });
      }
    } catch (error) {
      setMessage({ 
        type: 'error', 
        text: 'An error occurred. Please try calling us at (850) 610-3889.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="service-request-form-container">
      <h2 className="form-title">Get Started Today</h2>
      <p className="form-subtitle">Tell us about your IT needs, and we'll get back to you shortly.</p>
      
      <form onSubmit={handleSubmit} className="service-request-form">
        <div className="form-group">
          <label htmlFor="service_type">Service Type</label>
          <select
            id="service_type"
            name="service_type"
            value={formData.service_type}
            onChange={handleChange}
            required
            className="form-select"
          >
            <option value="Residential">Residential</option>
            <option value="Business">Business</option>
            <option value="Break-Fix">Break-Fix</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="name">Name (Optional)</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-input"
            placeholder="Your name"
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="email">Email (Optional)</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-input"
              placeholder="your.email@example.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone (Optional)</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="form-input"
              placeholder="(850) 610-3889"
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="description">Describe Your Issue or Service Request</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            className="form-textarea"
            rows="4"
            placeholder="Tell us what you need help with..."
          />
        </div>

        <div className="form-group">
          <label htmlFor="file-upload" className="file-upload-label">
            <Upload size={20} />
            <span>{file ? file.name : 'Upload File (Optional)'}</span>
          </label>
          <input
            type="file"
            id="file-upload"
            onChange={handleFileChange}
            className="file-input"
          />
        </div>

        {message.text && (
          <div className={`form-message ${message.type}`}>
            {message.text}
          </div>
        )}

        <button 
          type="submit" 
          className="form-submit-btn"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            'Submitting...'
          ) : (
            <>
              <Send size={20} />
              Submit Request
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default ServiceRequestForm;
