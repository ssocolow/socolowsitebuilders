'use client';

import { useState, useEffect } from 'react';

export default function Contact() {
  const [showPricing, setShowPricing] = useState(false);

  // Add ESC key functionality
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setShowPricing(false);
      }
    };

    if (showPricing) {
      document.addEventListener('keydown', handleEsc);
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [showPricing]);

  return (
    <>
      <section className="contact" id="contact">
        <h2 className="section-title">Ready to Get Started?</h2>
        <p style={{ fontSize: '1.3rem', marginBottom: '3rem', maxWidth: 600, marginLeft: 'auto', marginRight: 'auto' }}>
          Contact us today to discuss your project. We&apos;re excited to help bring your vision to life!
        </p>
        <div style={{ marginTop: '3rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
          <a
            href="https://forms.gle/kaguvcaoUPF1fDnX7"
            className="cta-button"
            style={{ fontSize: '1.1rem', padding: '1.2rem 3rem' }}
          >
            Start Your Project Now
          </a>
          <button
            onClick={() => setShowPricing(true)}
            className="cta-button"
            style={{ 
              fontSize: '1rem', 
              padding: '1rem 2.5rem',
              background: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.3)'
            }}
          >
            Pricing
          </button>
        </div>
      </section>

      {/* Pricing Modal */}
      {showPricing && (
        <div className="modal-overlay" onClick={() => setShowPricing(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="modal-close" 
              onClick={() => setShowPricing(false)}
            >
              ×
            </button>
            <h2>Our Pricing</h2>
            <div className="pricing-content">
              <div className="pricing-item">
                <h3>Tier 1</h3>
                <p className="price">$400</p>
                <p style={{ fontSize: '1.2rem', fontWeight: 'bold', lineHeight: '1.5' }}>We make the website, pay for two years of the domain, and give you full ownership.</p>
              </div>
              
              <div className="pricing-item featured">
                <h3>Tier 2</h3>
                <p className="price">$500</p>
                <p style={{ fontSize: '1.2rem', fontWeight: 'bold', lineHeight: '1.5' }}>After the final website version is delivered as in Tier 1, three future edits are included (additional pictures, new pages, etc).</p>
              </div>
              
              <div className="pricing-item">
                <h3>Website Updating</h3>
                <p className="price">Varies</p>
                <p style={{ fontSize: '1.2rem', fontWeight: 'bold', lineHeight: '1.5' }}>If you already have a site and want it updated/improved, we can do it! Pricing will vary depending on difficulty.</p>
              </div>
            </div>
            
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <a 
                href="https://forms.gle/kaguvcaoUPF1fDnX7" 
                className="cta-button"
                style={{ 
                  marginTop: '1rem',
                  background: '#667eea',
                  color: 'white',
                  border: '2px solid #667eea'
                }}
              >
                Get Started Today
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
} 