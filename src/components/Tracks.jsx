import React from 'react';
import { TRACKS } from '../data/conferenceData';

export default function Tracks({ onSelectTrack }) {
  return (
    <section id="tracks" className="section-wrapper" style={{ background: 'rgba(10, 14, 26, 0.4)' }}>
      <div className="container">
        <div className="section-header">
          <span className="badge badge-cyan">EXPLORE SPECIALIZED TRACKS</span>
          <h2 className="section-title">
            Curated Knowledge Across <span className="gradient-cyan-text">4 Tech Frontiers</span>
          </h2>
          <p className="section-subtitle">
            Tailor your experience with deep-dive tracks designed for software architects, data scientists, security researchers, and full-stack developers.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.75rem'
          }}
        >
          {TRACKS.map((track) => (
            <div
              key={track.id}
              className="glass-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderTop: `3px solid ${track.color}`,
                cursor: 'pointer'
              }}
              onClick={() => onSelectTrack && onSelectTrack(track.id)}
            >
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1.25rem'
                  }}
                >
                  <div
                    style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '12px',
                      background: track.badgeColor,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.5rem',
                      boxShadow: `0 0 15px ${track.badgeColor}`
                    }}
                  >
                    {track.icon}
                  </div>
                  <span
                    style={{
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      color: track.color,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}
                  >
                    Track
                  </span>
                </div>

                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.75rem', color: '#fff' }}>
                  {track.title}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  {track.description}
                </p>
              </div>

              <div>
                <div style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-dim)', marginBottom: '0.6rem', textTransform: 'uppercase' }}>
                  Key Topics
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                  {track.topics.map((topic, i) => (
                    <span
                      key={i}
                      style={{
                        fontSize: '0.78rem',
                        padding: '0.25rem 0.65rem',
                        borderRadius: 'var(--radius-sm)',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        color: '#e2e8f0'
                      }}
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
