import React from 'react';
import { STATS } from '../data/conferenceData';

export default function About() {
  const pillars = [
    {
      icon: '🚀',
      title: 'Innovation & Research',
      desc: 'Discover cutting-edge computational research, autonomous systems, and academic breakthroughs from SLIIT and global research laboratories.'
    },
    {
      icon: '💻',
      title: 'Hands-on Labs',
      desc: 'Deep-dive into live coding workshops, distributed systems debugging, smart contracts, and fine-tuning AI models in state-of-the-art campus labs.'
    },
    {
      icon: '🏆',
      title: '24-Hour Hackathon',
      desc: 'Compete with top undergraduate developer teams across Sri Lanka solving real-world challenges with an LKR 1,000,000+ prize pool.'
    },
    {
      icon: '🤝',
      title: 'Career & Industry Mixer',
      desc: 'Connect directly with engineering directors, technical recruiters, startup founders, and global tech sponsors looking for top tech talent.'
    }
  ];

  return (
    <section id="about" className="section-wrapper">
      <div className="container">
        {/* Stats Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.25rem',
            marginBottom: '5rem'
          }}
        >
          {STATS.map((stat, i) => (
            <div
              key={i}
              className="glass-card"
              style={{
                textAlign: 'center',
                padding: '1.75rem 1rem',
                border: '1px solid rgba(255, 255, 255, 0.08)'
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '2.4rem',
                  fontWeight: 800,
                  color: '#fff',
                  marginBottom: '0.4rem',
                  background: 'linear-gradient(135deg, #ffffff 0%, #a855f7 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                {stat.value}
              </div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Section Header */}
        <div className="section-header">
          <span className="badge">WHY ATTEND SLIIT TECH 2026</span>
          <h2 className="section-title">
            Where Sri Lanka’s <span className="gradient-text">Tech Visionaries Gather</span>
          </h2>
          <p className="section-subtitle">
            An immersive 3-day technical symposium created to bridge academic excellence, practical engineering craftsmanship, and high-impact enterprise innovation.
          </p>
        </div>

        {/* Pillars Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.75rem'
          }}
        >
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                padding: '2rem'
              }}
            >
              <div
                style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: '14px',
                  background: 'rgba(124, 58, 237, 0.15)',
                  border: '1px solid rgba(124, 58, 237, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.6rem'
                }}
              >
                {pillar.icon}
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff' }}>
                {pillar.title}
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.94rem', lineHeight: 1.6 }}>
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
