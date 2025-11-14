import React from 'react';
import { Star, ExternalLink } from 'lucide-react';

const ReviewsWidget = () => {
  return (
    <section style={{
      padding: '4rem 2rem',
      maxWidth: '1200px',
      margin: '0 auto'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 style={{
          fontSize: '2.5rem',
          fontWeight: '600',
          color: '#fff',
          marginBottom: '1rem'
        }}>
          What Our Customers Say
        </h2>
        <p style={{
          fontSize: '1.1rem',
          color: '#cbd5e0',
          marginBottom: '2rem'
        }}>
          Trusted by hundreds of satisfied customers across Florida and Georgia
        </p>
      </div>

      {/* Reviews Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
        marginBottom: '3rem'
      }}>
        {/* Thumbtack Review Card */}
        <div style={{
          background: 'rgba(135, 206, 235, 0.05)',
          border: '1px solid rgba(135, 206, 235, 0.2)',
          borderRadius: '12px',
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column'
        }}>
          <div style={{ marginBottom: '1rem' }}>
            <img
              src="https://cdn.thumbtackstatic.com/fe-assets-web/media/logos/thumbtack/wordmark.svg"
              alt="Thumbtack"
              style={{ height: '30px', marginBottom: '1rem' }}
            />
            <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '0.5rem' }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="#ff9b50" color="#ff9b50" />
              ))}
            </div>
            <p style={{ color: '#ff9b50', fontWeight: '600', margin: '0.5rem 0', fontSize: '0.9rem' }}>
              10 reviews • 89 days ago
            </p>
          </div>

          <h4 style={{
            color: '#87CEEB',
            fontSize: '1.1rem',
            fontWeight: '600',
            marginBottom: '0.5rem',
            margin: 0
          }}>
            Nancy R.
          </h4>

          <p style={{
            color: '#cbd5e0',
            fontSize: '0.95rem',
            lineHeight: '1.6',
            marginBottom: '1.5rem',
            flex: 1
          }}>
            "I would have chosen all 5 of the previous question. I loved Josh! I had a mess with everything on my computer and Josh took care of all my issues. He's so good! A very large thank you out to Josh!"
          </p>

          <a
            href="https://www.thumbtack.com/fl/tallahassee/junk-removal/toptier-technologies/service/478749340358516739"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: '#87CEEB',
              textDecoration: 'none',
              fontWeight: '600',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.color = '#ff9b50';
              e.target.style.transform = 'translateX(5px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.color = '#87CEEB';
              e.target.style.transform = 'translateX(0)';
            }}
          >
            See all reviews <ExternalLink size={16} />
          </a>
        </div>

        {/* Google Reviews Card */}
        <div style={{
          background: 'rgba(135, 206, 235, 0.05)',
          border: '1px solid rgba(135, 206, 235, 0.2)',
          borderRadius: '12px',
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column'
        }}>
          <div style={{ marginBottom: '1rem' }}>
            <div style={{
              fontSize: '1.3rem',
              fontWeight: '700',
              color: '#4285f4',
              marginBottom: '1rem'
            }}>
              Google Reviews
            </div>
            <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '0.5rem' }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="#fbbf24" color="#fbbf24" />
              ))}
            </div>
            <p style={{ color: '#cbd5e0', fontWeight: '600', margin: '0.5rem 0', fontSize: '0.9rem' }}>
              Highly Rated • Read Reviews
            </p>
          </div>

          <h4 style={{
            color: '#87CEEB',
            fontSize: '1.1rem',
            fontWeight: '600',
            marginBottom: '0.5rem',
            margin: 0
          }}>
            TopTier Technologies
          </h4>

          <p style={{
            color: '#cbd5e0',
            fontSize: '0.95rem',
            lineHeight: '1.6',
            marginBottom: '1.5rem',
            flex: 1
          }}>
            Check out our Google profile to read reviews from our satisfied customers and learn more about our services and expertise.
          </p>

          <a
            href="https://share.google/qiyo2iL50qS335cyK"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: '#87CEEB',
              textDecoration: 'none',
              fontWeight: '600',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.color = '#ff9b50';
              e.target.style.transform = 'translateX(5px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.color = '#87CEEB';
              e.target.style.transform = 'translateX(0)';
            }}
          >
            View on Google <ExternalLink size={16} />
          </a>
        </div>
      </div>

      {/* Call to Action */}
      <div style={{
        background: 'rgba(255, 155, 80, 0.1)',
        border: '1px solid rgba(255, 155, 80, 0.3)',
        borderRadius: '12px',
        padding: '2rem',
        textAlign: 'center'
      }}>
        <p style={{
          color: '#cbd5e0',
          fontSize: '1rem',
          margin: 0,
          lineHeight: '1.6'
        }}>
          Ready to experience the TopTier Technologies difference? Choose a plan below and join hundreds of satisfied customers who trust us with their IT needs.
        </p>
      </div>
    </section>
  );
};

export default ReviewsWidget;
