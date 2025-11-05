import React, { useState } from 'react';
import { Send, Monitor } from 'lucide-react';
import './PCBuildForm.css';

const PCBuildForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    cpu_preference: '',
    ram: '',
    storage: '',
    use_case: '',
    budget: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage({ type: '', text: '' });

    try {
      const backendUrl = process.env.REACT_APP_BACKEND_URL || '';
      const response = await fetch(`${backendUrl}/api/pc-build-request`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (result.success) {
        setMessage({ type: 'success', text: result.message });
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          cpu_preference: '',
          ram: '',
          storage: '',
          use_case: '',
          budget: ''
        });
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
    <div className="pc-build-form-container">
      <div className="pc-build-header">
        <Monitor size={40} />
        <h2 className="pc-build-title">Custom PC & Server Builds</h2>
        <p className="pc-build-subtitle">Get a custom-built system tailored to your exact needs and budget</p>
      </div>
      
      <form onSubmit={handleSubmit} className="pc-build-form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="form-input"
              placeholder="Your name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="form-input"
              placeholder="your.email@example.com"
            />
          </div>
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

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="cpu_preference">CPU Preference *</label>
            <select
              id="cpu_preference"
              name="cpu_preference"
              value={formData.cpu_preference}
              onChange={handleChange}
              required
              className="form-select"
            >
              <option value="">Select CPU</option>
              <option value="Intel i5">Intel Core i5</option>
              <option value="Intel i7">Intel Core i7</option>
              <option value="Intel i9">Intel Core i9</option>
              <option value="AMD Ryzen 5">AMD Ryzen 5</option>
              <option value="AMD Ryzen 7">AMD Ryzen 7</option>
              <option value="AMD Ryzen 9">AMD Ryzen 9</option>
              <option value="Server Grade">Server Grade (Xeon/EPYC)</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="ram">RAM *</label>
            <select
              id="ram"
              name="ram"
              value={formData.ram}
              onChange={handleChange}
              required
              className="form-select"
            >
              <option value="">Select RAM</option>
              <option value="8GB">8GB</option>
              <option value="16GB">16GB</option>
              <option value="32GB">32GB</option>
              <option value="64GB">64GB</option>
              <option value="128GB+">128GB or more</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="storage">Storage Requirements *</label>
          <select
            id="storage"
            name="storage"
            value={formData.storage}
            onChange={handleChange}
            required
            className="form-select"
          >
            <option value="">Select Storage</option>
            <option value="256GB SSD">256GB SSD</option>
            <option value="512GB SSD">512GB SSD</option>
            <option value="1TB SSD">1TB SSD</option>
            <option value="2TB SSD">2TB SSD</option>
            <option value="Multi-drive">Multiple Drives (RAID)</option>
            <option value="Custom">Custom Configuration</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="use_case">Primary Use Case *</label>
          <textarea
            id="use_case"
            name="use_case"
            value={formData.use_case}
            onChange={handleChange}
            required
            className="form-textarea"
            rows="3"
            placeholder="Gaming, video editing, software development, home server, etc."
          />
        </div>

        <div className="form-group">
          <label htmlFor="budget">Budget Range *</label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            required
            className="form-select"
          >
            <option value="">Select Budget</option>
            <option value="Under $1,000">Under $1,000</option>
            <option value="$1,000 - $1,500">$1,000 - $1,500</option>
            <option value="$1,500 - $2,500">$1,500 - $2,500</option>
            <option value="$2,500 - $5,000">$2,500 - $5,000</option>
            <option value="$5,000+">$5,000+</option>
          </select>
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
              Request Quote
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default PCBuildForm;
