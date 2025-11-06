import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, Shield, ArrowRight, ShoppingCart, X, Plus, Minus } from 'lucide-react';
import NetworkAnimation from '../components/NetworkAnimation';
import Navbar from '../components/Navbar';
import ServiceRequestForm from '../components/ServiceRequestForm';
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

      {/* Service Request Form */}
      <section className="service-request-section">
        <div className="container">
          <ServiceRequestForm />
        </div>
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

      {/* About Us Section */}
      <section className="about-section" id="about">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Choose TopTier for Your Home?</h2>
          </div>
          <div className="about-grid">
            <div className="about-card">
              <h3>Innovation</h3>
              <p>
                Leveraging cutting-edge technologies, fostering creative collaboration, and providing tailored 
                solutions that address evolving market needs and challenges. Optimizing infrastructure, ensuring 
                seamless migration, and providing scalable and secure platforms for enhanced operational efficiency 
                and flexibility.
              </p>
            </div>
            <div className="about-card">
              <h3>Hassle-Free IT</h3>
              <p>
                We handle all the technical complexities so you don't have to. From antivirus protection to system 
                monitoring, backups to remote support — everything is managed for you. Focus on what matters while 
                we keep your technology running smoothly.
              </p>
            </div>
            <div className="about-card">
              <h3>Local Support</h3>
              <p>
                Based in Florida and Georgia, we understand the unique needs of our community. With fast response 
                times and personalized service, you're never just a ticket number. We're your neighbors, dedicated 
                to keeping your home technology secure and efficient.
              </p>
            </div>
          </div>
        </div>
      </section>

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
            <div className="social-links">
              <a href="https://instagram.com/toptiertechnologies" target="_blank" rel="noopener noreferrer" className="social-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://facebook.com/toptiertechnologies" target="_blank" rel="noopener noreferrer" className="social-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://linkedin.com/company/toptiertechnologies" target="_blank" rel="noopener noreferrer" className="social-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-heading">Residential Services</h4>
            <ul className="footer-links">
              <li><a href="/residential/homecare-basic">HomeCare Basic</a></li>
              <li><a href="/residential/homecare-plus">HomeCare Plus</a></li>
              <li><a href="/residential/homecare-elite">HomeCare Elite</a></li>
              <li><a href="/residential/pc-builds">Custom PC & Server Builds</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-heading">Contact</h4>
            <ul className="footer-links">
              <li><a href="tel:8506103889">(850) 610-3889</a></li>
              <li><a href="mailto:helpdesk@tttmsp.com">helpdesk@tttmsp.com</a></li>
              <li>24/7 Support Available</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2026 TopTier Technologies. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Residential;
