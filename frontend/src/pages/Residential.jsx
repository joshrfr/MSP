import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, Shield, ArrowRight, ShoppingCart, X, Plus, Minus } from 'lucide-react';
import NetworkAnimation from '../components/NetworkAnimation';
import Navbar from '../components/Navbar';
import PCBuildForm from '../components/PCBuildForm';
import { residentialPlans } from '../mock';

const Residential = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [addons, setAddons] = useState({});

  const addToCart = (plan) => {
    setSelectedPlan(plan);
    setAddons({});
  };

  const handleAddonChange = (addonName, quantity) => {
    setAddons(prev => ({
      ...prev,
      [addonName]: Math.max(0, quantity)
    }));
  };

  const confirmAddToCart = () => {
    if (selectedPlan) {
      const cartItem = {
        id: Date.now(),
        plan: selectedPlan,
        addons: Object.entries(addons)
          .filter(([_, qty]) => qty > 0)
          .map(([name, quantity]) => {
            const addon = selectedPlan.addons.find(a => a.name === name);
            return { ...addon, quantity };
          })
      };
      setCart([...cart, cartItem]);
      setSelectedPlan(null);
      setAddons({});
      setShowCart(true);
    }
  };

  const removeFromCart = (itemId) => {
    setCart(cart.filter(item => item.id !== itemId));
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      const planPrice = (item.plan.priceMin + item.plan.priceMax) / 2;
      const addonsPrice = item.addons.reduce((sum, addon) => sum + (addon.price * addon.quantity), 0);
      return total + planPrice + addonsPrice;
    }, 0);
  };

  return (
    <div className="residential-page">
      {/* Header */}
      <Navbar type="residential" />

      {/* Cart Button - Floating */}
      {cart.length > 0 && (
        <button 
          className="floating-cart-button" 
          onClick={() => setShowCart(!showCart)}
        >
          <ShoppingCart size={24} />
          <span className="cart-badge">{cart.length}</span>
        </button>
      )}

      {/* Hero Section */}
      <section className="hero-section hero-compact">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Professional IT Support for Your Home
            </h1>
            <p className="hero-subtitle">
              From basic remote support to full concierge service — choose the residential plan that fits your lifestyle. Simple, transparent pricing with no surprises.
            </p>
          </div>
          
          <div className="hero-spline">
            <NetworkAnimation />
          </div>
        </div>
        
        <div className="hero-pattern" />
      </section>

      {/* Plans Section */}
      <section className="residential-plans-section">
        <div className="plans-container">
          <div className="section-header">
            <h2 className="section-title">Choose Your Plan</h2>
            <p className="section-subtitle">
              All plans include expert support, regular maintenance, and peace of mind
            </p>
          </div>

          <div className="plans-grid">
            {residentialPlans.map((plan) => (
              <div key={plan.id} className={`plan-card ${plan.popular ? 'plan-popular' : ''}`}>
                {plan.popular && <div className="popular-tag">Most Popular</div>}
                
                <h3 className="plan-name">{plan.name}</h3>
                <div className="plan-price-large">
                  {plan.priceDisplay}
                  <span className="price-period">/mo</span>
                </div>
                <p className="plan-ideal">{plan.idealFor}</p>

                <div className="plan-divider" />

                <div className="plan-features">
                  <h4 className="features-title">What's Included</h4>
                  <ul className="features-list">
                    {plan.inclusions.map((item, idx) => (
                      <li key={idx}>
                        <CheckCircle2 size={18} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="plan-features">
                  <h4 className="features-title">Security & Reliability</h4>
                  <ul className="features-list security-list">
                    {plan.security.map((item, idx) => (
                      <li key={idx}>
                        <Shield size={18} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="plan-sla">
                  <div className="sla-item">
                    <strong>Response Time:</strong> {plan.sla.response}
                  </div>
                  <div className="sla-item">
                    <strong>Restore Target:</strong> {plan.sla.restore}
                  </div>
                  {plan.sla.afterHours && (
                    <div className="sla-item">
                      <strong>After Hours:</strong> {plan.sla.afterHours}
                    </div>
                  )}
                </div>

                <div className="plan-onboarding">
                  <strong>Setup Fee:</strong> {plan.onboarding}
                </div>

                <button 
                  className="btn-primary plan-select"
                  onClick={() => addToCart(plan)}
                >
                  Select Plan
                  <ArrowRight size={20} />
                </button>

                {plan.upgradePath && (
                  <p className="upgrade-path">
                    Upgrade to: <strong>{plan.upgradePath}</strong>
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Modal */}
      {selectedPlan && (
        <div className="modal-overlay" onClick={() => setSelectedPlan(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Customize Your {selectedPlan.name}</h3>
              <button className="modal-close" onClick={() => setSelectedPlan(null)}>
                <X size={24} />
              </button>
            </div>

            <div className="modal-body">
              <div className="base-plan-summary">
                <h4>Base Plan</h4>
                <div className="summary-price">
                  {selectedPlan.priceDisplay}/mo
                </div>
              </div>

              {selectedPlan.addons && selectedPlan.addons.length > 0 && (
                <>
                  <div className="modal-divider" />
                  <h4>Add Optional Services</h4>
                  <div className="addons-list">
                    {selectedPlan.addons.map((addon, idx) => (
                      <div key={idx} className="addon-item">
                        <div className="addon-info">
                          <span className="addon-name">{addon.name}</span>
                          <span className="addon-price">+${addon.price}/{addon.unit}</span>
                        </div>
                        <div className="addon-quantity">
                          <button 
                            className="qty-btn"
                            onClick={() => handleAddonChange(addon.name, (addons[addon.name] || 0) - 1)}
                          >
                            <Minus size={16} />
                          </button>
                          <span className="qty-display">{addons[addon.name] || 0}</span>
                          <button 
                            className="qty-btn"
                            onClick={() => handleAddonChange(addon.name, (addons[addon.name] || 0) + 1)}
                          >
                            <Plus size={16} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>

            <div className="modal-footer">
              <button className="btn-primary" onClick={confirmAddToCart}>
                Add to Cart
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Cart Sidebar */}
      {showCart && (
        <div className="cart-sidebar">
          <div className="cart-header">
            <h3>Your Cart</h3>
            <button className="cart-close" onClick={() => setShowCart(false)}>
              <X size={24} />
            </button>
          </div>

          <div className="cart-body">
            {cart.length === 0 ? (
              <div className="cart-empty">
                <ShoppingCart size={48} />
                <p>Your cart is empty</p>
              </div>
            ) : (
              <>
                {cart.map((item) => (
                  <div key={item.id} className="cart-item">
                    <div className="cart-item-header">
                      <h4>{item.plan.name}</h4>
                      <button 
                        className="cart-item-remove"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <X size={18} />
                      </button>
                    </div>
                    <div className="cart-item-price">
                      {item.plan.priceDisplay}/mo
                    </div>
                    {item.addons.length > 0 && (
                      <div className="cart-item-addons">
                        <strong>Add-ons:</strong>
                        {item.addons.map((addon, idx) => (
                          <div key={idx} className="cart-addon">
                            {addon.name} × {addon.quantity}: +${addon.price * addon.quantity}/{addon.unit}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </>
            )}
          </div>

          {cart.length > 0 && (
            <div className="cart-footer">
              <div className="cart-total">
                <span>Estimated Monthly:</span>
                <span className="total-amount">${calculateTotal().toFixed(2)}</span>
              </div>
              <button 
                className="btn-primary"
                onClick={() => window.open('tel:8506103889')}
                style={{ width: '100%', justifyContent: 'center' }}
              >
                Contact Us to Complete Order
                <ArrowRight size={20} />
              </button>
              <p className="cart-note">
                Call us or we'll reach out to finalize your service setup
              </p>
            </div>
          )}
        </div>
      )}

      {/* PC Build Form Section */}
      <section className="pc-build-section">
        <div className="container">
          <PCBuildForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="services-footer">
        <div className="footer-content">
          <div className="footer-section">
            <img
              src="https://customer-assets.emergentagent.com/job_managed-tech-hub/artifacts/dmi0lnjh_8.png"
              alt="TopTier Technologies"
              className="footer-logo"
            />
            <p className="footer-description">
              Professional IT support for homes across Florida and Georgia.
            </p>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-links">
              <li><a href="/residential">Residential Plans</a></li>
              <li><a href="/services">Business Services</a></li>
              <li><a href="/strategic-services">Strategic Services</a></li>
              <li><a href="/it-services">IT Services</a></li>
              <li><a href="/cybersecurity">Cybersecurity</a></li>
              <li><a href="/cloud-infrastructure">Cloud & Infrastructure</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-heading">Contact</h4>
            <ul className="footer-links">
              <li>(850) 610-3889</li>
              <li>info@toptiertech.com</li>
              <li>24/7 Support Available</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 TopTier Technologies. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Residential;
