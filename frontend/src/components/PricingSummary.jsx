import React, { useMemo } from 'react';
import { X, ArrowRight } from 'lucide-react';

const PricingSummary = ({ selectedServices, onRemove, onConsultation }) => {
  const total = useMemo(() => {
    return selectedServices.reduce((sum, service) => sum + service.price, 0);
  }, [selectedServices]);

  const recommendedTier = useMemo(() => {
    if (total < 500) return 'CORE';
    if (total < 3000) return 'CORE+';
    if (total < 6000) return 'PREMIUM';
    return 'ENTERPRISE';
  }, [total]);

  if (selectedServices.length === 0) {
    return (
      <div className="pricing-summary pricing-summary-empty">
        <div className="summary-icon-placeholder">
          <div className="summary-icon-circle" />
        </div>
        <h3>Build Your Plan</h3>
        <p>Select services to see your custom solution</p>
      </div>
    );
  }

  return (
    <div className="pricing-summary">
      <div className="summary-header">
        <h3>Your Custom Plan</h3>
        <span className="service-count">{selectedServices.length} services</span>
      </div>

      <div className="selected-services-list">
        {selectedServices.map((service) => (
          <div key={service.id} className="selected-service-item">
            <div className="selected-service-info">
              <span className="selected-service-name">{service.name}</span>
              <span className="selected-service-price">${service.price}/mo</span>
            </div>
            <button
              className="remove-service-btn"
              onClick={() => onRemove(service.id)}
              aria-label={`Remove ${service.name}`}
            >
              <X size={16} />
            </button>
          </div>
        ))}
      </div>

      <div className="summary-divider" />

      <div className="summary-total">
        <span className="total-label">Estimated Monthly</span>
        <span className="total-amount">${total.toLocaleString()}</span>
      </div>

      <div className="summary-tier">
        <span className="tier-label">Recommended Tier</span>
        <span className="tier-name">{recommendedTier}</span>
      </div>

      <button className="btn-primary summary-cta" onClick={onConsultation}>
        Book Consultation
        <ArrowRight size={20} />
      </button>
    </div>
  );
};

export default PricingSummary;
