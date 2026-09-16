import React, { useState } from 'react';
import { FAQS } from '../data/conferenceData';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const [selectedCat, setSelectedCat] = useState('All');

  const categories = ['All', 'General', 'Ticketing', 'Hackathon', 'Workshops'];

  const filteredFaqs = selectedCat === 'All'
    ? FAQS
    : FAQS.filter(f => f.category === selectedCat);

  return (
    <section id="faq" className="section-wrapper">
      <div className="container" style={{ maxWidth: '840px' }}>
        <div className="section-header">
          <span className="badge">FREQUENTLY ASKED QUESTIONS</span>
          <h2 className="section-title">
            Have <span className="gradient-text">Questions?</span>
          </h2>
          <p className="section-subtitle">
            Find everything you need to know about delegate registration, campus access, hackathon rules, and certificates.
          </p>

          {/* Category Filter */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCat(cat)}
                style={{
                  padding: '0.4rem 1rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  border: selectedCat === cat ? '1px solid var(--primary-light)' : '1px solid var(--border-glass)',
                  background: selectedCat === cat ? 'rgba(124, 58, 237, 0.25)' : 'rgba(255, 255, 255, 0.03)',
                  color: selectedCat === cat ? '#fff' : 'var(--text-muted)'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="glass-card"
                style={{
                  padding: '1.25rem 1.5rem',
                  border: isOpen ? '1px solid rgba(124, 58, 237, 0.4)' : '1px solid var(--border-glass)',
                  cursor: 'pointer'
                }}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h3 style={{ fontSize: '1.08rem', fontWeight: 700, color: '#fff', paddingRight: '1rem' }}>
                    {faq.question}
                  </h3>
                  <div
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      background: isOpen ? 'var(--primary)' : 'rgba(255, 255, 255, 0.05)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1rem',
                      color: '#fff',
                      transition: 'transform 0.2s ease',
                      transform: isOpen ? 'rotate(45deg)' : 'rotate(0)'
                    }}
                  >
                    +
                  </div>
                </div>

                {isOpen && (
                  <div style={{ marginTop: '1rem', paddingTop: '0.75rem', borderTop: '1px solid rgba(255, 255, 255, 0.06)', animation: 'fadeIn 0.2s ease' }}>
                    <p style={{ color: '#cbd5e1', fontSize: '0.94rem', lineHeight: 1.65 }}>
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
