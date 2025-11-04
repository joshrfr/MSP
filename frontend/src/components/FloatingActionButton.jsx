import React, { useState } from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';

const FloatingActionButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const actions = [
    {
      icon: Phone,
      label: 'Call Us',
      action: () => window.open('tel:8506103889'),
      color: '#87ceeb'
    },
    {
      icon: MessageCircle,
      label: 'Chat',
      action: () => console.log('Open chat'),
      color: '#4682b4'
    },
    {
      icon: Calendar,
      label: 'Book',
      action: () => console.log('Open booking'),
      color: '#00FFD1'
    }
  ];

  return (
    <div className="floating-action-container">
      {isOpen && (
        <div className="floating-actions-list">
          {actions.map((action, index) => {
            const Icon = action.icon;
            return (
              <button
                key={index}
                className="floating-action-item"
                onClick={action.action}
                style={{ '--action-color': action.color }}
                title={action.label}
              >
                <Icon size={20} />
                <span className="action-label">{action.label}</span>
              </button>
            );
          })}
        </div>
      )}
      
      <button
        className={`floating-main-button ${isOpen ? 'floating-main-button-open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Contact options"
      >
        {isOpen ? <span className="close-icon">×</span> : <Phone size={24} />}
      </button>
    </div>
  );
};

export default FloatingActionButton;
