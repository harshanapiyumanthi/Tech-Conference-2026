import React from 'react';
import { SPONSORS } from '../data/conferenceData';

export default function Sponsors({ onShowToast }) {
  return (
    <section id="sponsors" className="section-wrapper" style={{ background: 'rgba(9, 13, 24, 0.7)' }}>
      <div className="container">
        <div className="section-header">
          <span className="badge badge-cyan">PARTNERS & SPONSORS</span>
          <h2 className="section-title">
            Supported by <span className="gradient-cyan-text">Global Industry Leaders</span>
          </h2>
          <p className="section-subtitle">
            We are proud to collaborate with world-leading cloud providers, software enterprises, and student developer communities.
          </p>
        </div>

        {/* Platinum Sponsors */}
        <div style={{ marginBottom: '3.5rem', textAlign: 'center' }}>
          <div style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--cyan-light)', marginBottom: '1.25rem' }}>
            Platinum Title Sponsors
          </div>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '1.5rem'
            }}
          >
            {SPONSORS.platinum.map((item, i) => (
              <div
                key={i}
                className="glass-card"
                style={{
                  minWidth: '220px',
                  padding: '1.75rem 2.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(6, 182, 212, 0.35)',
                  boxShadow: '0 8px 30px rgba(6, 182, 212, 0.1)'
                }}
              >
                <div style={{ fontSize: '1.35rem', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em' }}>
                  {item.logoText}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gold Sponsors */}
        <div style={{ marginBottom: '3.5rem', textAlign: 'center' }}>
          <div style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--primary-light)', marginBottom: '1.25rem' }}>
            Gold Innovation Partners
          </div>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '1.25rem'
            }}
          >
            {SPONSORS.gold.map((item, i) => (
              <div
                key={i}
                className="glass-card"
                style={{
                  minWidth: '180px',
                  padding: '1.25rem 2rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(124, 58, 237, 0.3)'
                }}
              >
                <div style={{ fontSize: '1.15rem', fontWeight: 700, color: '#e2e8f0' }}>
                  {item.logoText}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Community & Media Partners */}
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-dim)', marginBottom: '1.25rem' }}>
            Community & Student Chapters
          </div>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '1rem'
            }}
          >
            {SPONSORS.community.map((item, i) => (
              <div
                key={i}
                style={{
                  padding: '0.75rem 1.5rem',
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid var(--border-glass)',
                  fontSize: '0.88rem',
                  color: 'var(--text-muted)',
                  fontWeight: 600
                }}
              >
                {item.logoText}
              </div>
            ))}
          </div>
        </div>

        {/* Sponsor Callout Banner */}
        <div
          className="glass-card"
          style={{
            marginTop: '4rem',
            padding: '2.5rem',
            textAlign: 'center',
            background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.15) 0%, rgba(6, 182, 212, 0.1) 100%)',
            border: '1px solid rgba(124, 58, 237, 0.3)'
          }}
        >
          <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#fff', marginBottom: '0.5rem' }}>
            Interested in Sponsoring SLIIT Tech Conf 2026?
          </h3>
          <p style={{ color: 'var(--text-muted)', maxWidth: '620px', margin: '0 auto 1.5rem auto', fontSize: '0.94rem' }}>
            Gain direct brand visibility among 1,500+ top Sri Lankan engineering undergraduates, postgraduates, and industry tech leaders.
          </p>
          <button
            onClick={() => {
              if (onShowToast) onShowToast('Sponsorship Prospectus 2026 download started!', 'success');
              alert('Downloading SLIIT Tech Conference 2026 Sponsorship Deck (PDF)...');
            }}
            className="btn btn-primary"
          >
            Download Sponsorship Deck (PDF)
          </button>
        </div>
      </div>
    </section>
  );
}
