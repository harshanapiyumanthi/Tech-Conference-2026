import React from 'react';
import CountdownTimer from './CountdownTimer';
import { CONFERENCE_INFO } from '../data/conferenceData';

export default function Hero({ onOpenRegister, onOpenCFP }) {
  const scrollToSchedule = (e) => {
    e.preventDefault();
    const el = document.getElementById('schedule');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '7.5rem',
        paddingBottom: '5rem',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Ambient background glow orbs */}
      <div
        style={{
          position: 'absolute',
          top: '10%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '650px',
          height: '650px',
          background: 'radial-gradient(circle, rgba(124, 58, 237, 0.22) 0%, rgba(6, 182, 212, 0.1) 45%, transparent 70%)',
          filter: 'blur(70px)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        {/* Event Banner Tag */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem' }}>
          <span className="badge badge-cyan" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#06B6D4', display: 'inline-block', boxShadow: '0 0 10px #06B6D4' }}></span>
            SLIIT FACULTY OF COMPUTING
          </span>
          <span className="badge">
            ANNUAL CONFERENCE 2026
          </span>
        </div>

        {/* Main Title */}
        <h1
          style={{
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            fontWeight: 900,
            lineHeight: 1.1,
            marginBottom: '1.25rem',
            letterSpacing: '-0.03em'
          }}
        >
          Explore the <span className="gradient-text">Future of Technology</span>
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
            color: 'var(--text-muted)',
            maxWidth: '780px',
            margin: '0 auto 1.5rem auto',
            lineHeight: 1.65
          }}
        >
          Sri Lanka's flagship technology gathering uniting 1,500+ student innovators, cloud architects, AI researchers, and engineering leaders for 3 days of code, masterclasses, and discovery at SLIIT Malabe Campus.
        </p>

        {/* Event Quick Info Pill */}
        <div
          style={{
            display: 'inline-flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1.5rem',
            padding: '0.75rem 1.6rem',
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid var(--border-glass)',
            borderRadius: 'var(--radius-full)',
            backdropFilter: 'blur(10px)',
            fontSize: '0.92rem',
            color: 'var(--text-main)',
            marginBottom: '1.5rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span>📅</span>
            <strong>{CONFERENCE_INFO.dates}</strong>
          </div>
          <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--text-dim)' }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span>📍</span>
            <span>{CONFERENCE_INFO.venue}</span>
          </div>
          <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--text-dim)' }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span>🎟️</span>
            <span style={{ color: 'var(--emerald)', fontWeight: 600 }}>Registrations Open</span>
          </div>
        </div>

        {/* Countdown Timer */}
        <CountdownTimer targetDate={CONFERENCE_INFO.isoDate} />

        {/* Action Buttons */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            flexWrap: 'wrap',
            marginTop: '2rem'
          }}
        >
          <button
            onClick={() => onOpenRegister()}
            className="btn btn-primary btn-lg"
          >
            <span>Register & Get Pass</span>
            <span>→</span>
          </button>
          <a
            href="#schedule"
            onClick={scrollToSchedule}
            className="btn btn-outline btn-lg"
          >
            Explore Agenda
          </a>
          <button
            onClick={onOpenCFP}
            className="btn btn-cyan btn-lg"
          >
            Submit Talk Proposal
          </button>
        </div>
      </div>
    </section>
  );
}
