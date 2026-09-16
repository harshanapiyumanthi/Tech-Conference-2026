import React from 'react';

export default function SpeakerModal({ speaker, onClose, onRegister }) {
  if (!speaker) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          ✕
        </button>

        <div style={{ display: 'flex', gap: '1.75rem', alignItems: 'flex-start', flexWrap: 'wrap', marginBottom: '1.75rem' }}>
          <img
            src={speaker.avatar}
            alt={speaker.name}
            style={{
              width: '120px',
              height: '120px',
              borderRadius: '20px',
              objectFit: 'cover',
              border: '2px solid rgba(124, 58, 237, 0.4)',
              boxShadow: '0 8px 25px rgba(124, 58, 237, 0.3)'
            }}
          />
          <div style={{ flex: 1, minWidth: '220px' }}>
            <span className="badge badge-cyan" style={{ marginBottom: '0.5rem' }}>
              {speaker.company}
            </span>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#fff', marginBottom: '0.35rem' }}>
              {speaker.name}
            </h2>
            <div style={{ fontSize: '1rem', color: 'var(--text-muted)', fontWeight: 500, marginBottom: '0.8rem' }}>
              {speaker.role}
            </div>

            {/* Social Links */}
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {speaker.socials?.linkedin && (
                <a
                  href={speaker.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: '#38bdf8',
                    textDecoration: 'none',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    background: 'rgba(56, 189, 248, 0.1)',
                    padding: '0.3rem 0.75rem',
                    borderRadius: '6px',
                    border: '1px solid rgba(56, 189, 248, 0.25)'
                  }}
                >
                  LinkedIn ↗
                </a>
              )}
              {speaker.socials?.github && (
                <a
                  href={speaker.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: '#c4b5fd',
                    textDecoration: 'none',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    background: 'rgba(196, 181, 253, 0.1)',
                    padding: '0.3rem 0.75rem',
                    borderRadius: '6px',
                    border: '1px solid rgba(196, 181, 253, 0.25)'
                  }}
                >
                  GitHub ↗
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Talk Highlight Box */}
        <div
          style={{
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(124, 58, 237, 0.25)',
            borderRadius: 'var(--radius-md)',
            padding: '1.25rem 1.5rem',
            marginBottom: '1.5rem'
          }}
        >
          <div style={{ fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--cyan-light)', marginBottom: '0.4rem' }}>
            Featured Presentation / Talk
          </div>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff', lineHeight: 1.4 }}>
            "{speaker.talkTitle}"
          </h3>
        </div>

        {/* Biography */}
        <div style={{ marginBottom: '2rem' }}>
          <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.6rem' }}>
            Biography
          </h4>
          <p style={{ color: '#e2e8f0', fontSize: '0.96rem', lineHeight: 1.7 }}>
            {speaker.bio}
          </p>
        </div>

        {/* Modal Action */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', borderTop: '1px solid var(--border-glass)', paddingTop: '1.25rem' }}>
          <button className="btn btn-outline" onClick={onClose}>
            Close
          </button>
          <button
            className="btn btn-primary"
            onClick={() => {
              onClose();
              if (onRegister) onRegister();
            }}
          >
            Attend this Session
          </button>
        </div>
      </div>
    </div>
  );
}
