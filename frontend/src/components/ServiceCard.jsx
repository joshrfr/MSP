import React from 'react';
import * as Icons from 'lucide-react';

const ServiceCard = ({ service, isSelected, onToggle }) => {
  const IconComponent = Icons[service.icon] || Icons.Cpu;

  return (
    <div
      className={`service-card ${
        isSelected ? 'service-card-selected' : ''
      }`}
      onClick={onToggle}
    >
      <div className="service-icon-wrapper">
        <IconComponent className="service-icon" size={32} />
      </div>
      
      <h3 className="service-name">{service.name}</h3>
      <p className="service-benefit">{service.benefit}</p>
      
      <div className="service-price">
        ${service.price}/mo
      </div>
      
      <button
        className={`service-toggle-btn ${
          isSelected ? 'service-toggle-btn-active' : ''
        }`}
      >
        {isSelected ? (
          <>
            <Icons.Check size={16} />
            Added
          </>
        ) : (
          <>
            <Icons.Plus size={16} />
            Add to Plan
          </>
        )}
      </button>
    </div>
  );
};

export default ServiceCard;
