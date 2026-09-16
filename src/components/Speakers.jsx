import React, { useState } from 'react';
import { SPEAKERS } from '../data/conferenceData';

export default function Speakers({ onSelectSpeaker }) {
  const [selectedTrack, setSelectedTrack] = useState('all');

  const filterTabs = [
    { id: 'all', label: 'All Speakers' },
    { id: 'ai-data', label: 'AI & Data' },
    { id: 'cloud-devops', label: 'Cloud & DevOps' },
    { id: 'cyber-web3', label: 'Cybersecurity' },
    { id: 'web-mobile', label: 'Next-Gen Web' }
  ];

  const filteredSpeakers = selectedTrack === 'all'
    ? SPEAKERS
    : SPEAKERS.filter(s => s.track === selectedTrack);

  return (
    <section id="speakers" className="section-wrapper">
      <div className="container">
        <div className="section-header">
          <span className="badge">DISTINGUISHED SPEAKERS</span>
          <h2 className="section-title">
            Learn from <span className="gradient-text">Global Industry Leaders</span>
          </h2>
          <p className="section-subtitle">
            Hear visionary keynotes and technical deep-dives from principal scientists, engineering directors, and top research faculties.
          </p>

          {/* Filter Tabs */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '0.6rem',
              marginTop: '2rem'
            }}
          >
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedTrack(tab.id)}
                style={{
                  padding: '0.55rem 1.2rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.86rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  border: selectedTrack === tab.id ? '1px solid var(--primary-light)' : '1px solid var(--border-glass)',
                  background: selectedTrack === tab.id ? 'rgba(124, 58, 237, 0.25)' : 'rgba(255, 255, 255, 0.03)',
                  color: selectedTrack === tab.id ? '#ffffff' : 'var(--text-muted)',
                  boxShadow: selectedTrack === tab.id ? '0 0 15px rgba(124, 58, 237, 0.3)' : 'none'
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Speakers Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '2rem'
          }}
        >
          {filteredSpeakers.map((speaker) => (
            <div
              key={speaker.id}
              className="glass-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '0',
                overflow: 'hidden',
                cursor: 'pointer'
              }}
              onClick={() => onSelectSpeaker(speaker)}
            >
              <div style={{ position: 'relative', height: '240px', overflow: 'hidden' }}>
                <img
                  src={speaker.avatar}
                  alt={speaker.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.4s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(15, 21, 38, 0.95) 0%, rgba(15, 21, 38, 0.2) 60%, transparent 100%)'
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    background: 'rgba(7, 9, 19, 0.7)',
                    backdropFilter: 'blur(8px)',
                    padding: '0.3rem 0.75rem',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    color: 'var(--cyan-light)',
                    border: '1px solid rgba(6, 182, 212, 0.3)'
                  }}
                >
                  {speaker.company}
                </div>
              </div>

              <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#fff', marginBottom: '0.25rem' }}>
                    {speaker.name}
                  </h3>
                  <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)', fontWeight: 500, marginBottom: '1rem' }}>
                    {speaker.role}
                  </div>
                  <p
                    style={{
                      fontSize: '0.92rem',
                      color: '#cbd5e1',
                      lineHeight: 1.5,
                      fontStyle: 'italic',
                      borderLeft: '2px solid var(--primary)',
                      paddingLeft: '0.75rem',
                      marginBottom: '1.25rem'
                    }}
                  >
                    "{speaker.talkTitle}"
                  </p>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderTop: '1px solid var(--border-glass)',
                    paddingTop: '0.85rem'
                  }}
                >
                  <span style={{ fontSize: '0.82rem', color: 'var(--primary-light)', fontWeight: 600 }}>
                    View Full Profile & Bio →
                  </span>
                  <span style={{ fontSize: '0.85rem' }}>✨</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
