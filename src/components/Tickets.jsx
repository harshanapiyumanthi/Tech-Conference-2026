import React, { useState } from 'react';
import { TICKET_TIERS } from '../data/conferenceData';

export default function Tickets({ onSelectTier }) {
  const [currency, setCurrency] = useState('LKR');

  return (
    <section id="tickets" className="section-wrapper">
      <div className="container">
        <div className="section-header">
          <span className="badge">TICKETING & PASSES</span>
          <h2 className="section-title">
            Choose Your <span className="gradient-text">Conference Experience</span>
          </h2>
          <p className="section-subtitle">
            All passes include access to conference keynote sessions, hackathon exhibition, digital certificates, and conference lunch.
          </p>

          {/* Currency Toggle */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'rgba(255, 255, 255, 0.05)',
              padding: '0.35rem 0.5rem',
              borderRadius: 'var(--radius-full)',
              border: '1px solid var(--border-glass)',
              marginTop: '1.75rem'
            }}
          >
            <button
              onClick={() => setCurrency('LKR')}
              style={{
                padding: '0.4rem 1rem',
                borderRadius: 'var(--radius-full)',
                border: 'none',
                cursor: 'pointer',
                fontSize: '0.82rem',
                fontWeight: 700,
                background: currency === 'LKR' ? 'var(--primary)' : 'transparent',
                color: '#fff',
                transition: 'all 0.2s ease'
              }}
            >
              LKR (Sri Lanka)
            </button>
            <button
              onClick={() => setCurrency('USD')}
              style={{
                padding: '0.4rem 1rem',
                borderRadius: 'var(--radius-full)',
                border: 'none',
                cursor: 'pointer',
                fontSize: '0.82rem',
                fontWeight: 700,
                background: currency === 'USD' ? 'var(--primary)' : 'transparent',
                color: '#fff',
                transition: 'all 0.2s ease'
              }}
            >
              USD ($)
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            alignItems: 'stretch'
          }}
        >
          {TICKET_TIERS.map((tier) => {
            const price = currency === 'LKR' ? `LKR ${tier.priceLKR}` : `$${tier.priceUSD}`;

            return (
              <div
                key={tier.id}
                className="glass-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: '2.5rem 2rem',
                  border: tier.popular ? '2px solid var(--primary-light)' : '1px solid var(--border-glass)',
                  boxShadow: tier.popular ? '0 15px 40px rgba(124, 58, 237, 0.25)' : 'var(--shadow-card)',
                  transform: tier.popular ? 'scale(1.02)' : 'none',
                  background: tier.popular ? 'rgba(20, 27, 48, 0.9)' : 'var(--bg-card)'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#fff' }}>
                      {tier.name}
                    </h3>
                    <span
                      style={{
                        fontSize: '0.74rem',
                        fontWeight: 700,
                        padding: '0.25rem 0.65rem',
                        borderRadius: 'var(--radius-full)',
                        background: `${tier.color}22`,
                        color: tier.color,
                        border: `1px solid ${tier.color}55`,
                        textTransform: 'uppercase'
                      }}
                    >
                      {tier.badge}
                    </span>
                  </div>

                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.75rem', minHeight: '42px' }}>
                    {tier.description}
                  </p>

                  {/* Price */}
                  <div style={{ marginBottom: '2rem' }}>
                    <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2.6rem', fontWeight: 900, color: '#fff', lineHeight: 1 }}>
                      {price}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)', marginTop: '0.35rem' }}>
                      per attendee (taxes included)
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', marginBottom: '2.5rem' }}>
                    {tier.features.map((feat, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '0.9rem', color: '#e2e8f0' }}>
                        <span style={{ color: tier.color, fontWeight: 'bold' }}>✓</span>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => onSelectTier(tier.id)}
                  className={`btn ${tier.popular ? 'btn-primary' : 'btn-outline'}`}
                  style={{ width: '100%', padding: '0.95rem' }}
                >
                  Select {tier.name}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
