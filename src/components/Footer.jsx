import React from 'react';
import { CONFERENCE_INFO } from '../data/conferenceData';

export default function Footer({ onOpenRegister, onOpenCFP }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        background: '#040710',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        padding: '4.5rem 0 2rem 0',
        position: 'relative'
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '3rem',
            marginBottom: '3.5rem'
          }}
        >
          {/* Brand Col */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  background: 'linear-gradient(135deg, #7C3AED 0%, #06B6D4 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontWeight: '800'
                }}
              >
                ⚡
              </div>
              <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.2rem', color: '#fff' }}>
                SLIIT <span className="gradient-text">TECH 2026</span>
              </div>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              Sri Lanka's premier annual computing and technology conference. Hosted by the Faculty of Computing, SLIIT Malabe Campus.
            </p>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>
              {CONFERENCE_INFO.dates} • Malabe, Sri Lanka
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1.2rem' }}>
              Quick Navigation
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <a href="#about" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.88rem' }}>About Conference</a>
              <a href="#tracks" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.88rem' }}>4 Tech Tracks</a>
              <a href="#speakers" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.88rem' }}>Distinguished Speakers</a>
              <a href="#schedule" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.88rem' }}>3-Day Agenda</a>
              <a href="#tickets" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.88rem' }}>Ticket Passes</a>
            </div>
          </div>

          {/* Community & Delegates */}
          <div>
            <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1.2rem' }}>
              Delegates & Authors
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <button
                onClick={onOpenCFP}
                style={{ background: 'none', border: 'none', padding: 0, textAlign: 'left', color: 'var(--cyan-light)', cursor: 'pointer', fontSize: '0.88rem' }}
              >
                Call for Papers (CFP)
              </button>
              <button
                onClick={() => onOpenRegister()}
                style={{ background: 'none', border: 'none', padding: 0, textAlign: 'left', color: 'var(--text-muted)', cursor: 'pointer', fontSize: '0.88rem' }}
              >
                Student Registration Pass
              </button>
              <a href="#venue" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.88rem' }}>Campus Venue & Transport</a>
              <a href="#faq" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.88rem' }}>Attendee FAQ</a>
              <a href="#sponsors" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.88rem' }}>Sponsorship Package</a>
            </div>
          </div>

          {/* Campus Location */}
          <div>
            <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1.2rem' }}>
              Campus Address
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '1rem' }}>
              Sri Lanka Institute of Information Technology,<br />
              New Kandy Road, Malabe,<br />
              Sri Lanka
            </p>
            <div style={{ display: 'flex', gap: '0.8rem' }}>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  textDecoration: 'none'
                }}
              >
                fb
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  textDecoration: 'none'
                }}
              >
                in
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  textDecoration: 'none'
                }}
              >
                git
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
            paddingTop: '2rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem'
          }}
        >
          <div style={{ fontSize: '0.84rem', color: 'var(--text-dim)' }}>
            © {new Date().getFullYear()} SLIIT Tech Conference. All Rights Reserved. Faculty of Computing, SLIIT.
          </div>

          <button
            onClick={scrollToTop}
            className="btn btn-outline btn-sm"
            style={{ fontSize: '0.8rem' }}
          >
            ↑ Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
}
