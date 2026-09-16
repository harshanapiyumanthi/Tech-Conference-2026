import React, { useState } from 'react';
import { CONFERENCE_INFO } from '../data/conferenceData';

export default function Venue() {
  const [activeTab, setActiveTab] = useState('halls');

  const venues = [
    {
      title: 'Main Auditorium (Computing Block)',
      desc: 'Capacity: 800+ seats. Host of Opening & Closing Ceremonies, Keynotes, and the Grand Hackathon Pitches.',
      features: ['Dual 4K Laser Projection', 'Dolby Surround Acoustics', 'Live Broadcast Green Room']
    },
    {
      title: 'Innovation Labs & Hackathon Arena',
      desc: 'Dedicated high-speed labs for Day 1 Hands-on Masterclasses and the 24h National Tech Hackathon.',
      features: ['Gigabit Fiber WiFi 6E', 'Dual Monitor Workstations', 'Cloud GPU Sandbox Access']
    },
    {
      title: 'Mini Theaters A & B',
      desc: 'Specialized parallel track rooms for Cybersecurity deep dives, WASM demos, and developer workshops.',
      features: ['Tiered Seating for 150', 'Interactive Q&A Microphones', 'Live Stream Recording']
    },
    {
      title: 'SLIIT Courtyard & Delegate Lounge',
      desc: 'Open-air networking hub with lunch buffets, coffee stations, sponsor partner booths, and tech demos.',
      features: ['Sponsor Exhibition Pods', 'Student Project Showcases', 'All-Day Espresso Bar']
    }
  ];

  const travelInfo = [
    {
      icon: '🚗',
      title: 'By Car / Taxi / PickMe',
      desc: 'Located on New Kandy Road (B263), Malabe. Just 5 minutes from the Outer Circular Expressway (Kothalawala Exit).'
    },
    {
      icon: '🚌',
      title: 'By Public Bus',
      desc: 'Bus routes 177 (Kollupitiya - Kaduwela), 143 (Colombo - Kaduwela), and 17 (Panadura - Kandy) stop right in front of SLIIT Gate.'
    },
    {
      icon: '🅿️',
      title: 'Campus Parking',
      desc: 'Free secured multi-level vehicle parking available for all registered conference delegates and VIP speakers.'
    }
  ];

  return (
    <section id="venue" className="section-wrapper">
      <div className="container">
        <div className="section-header">
          <span className="badge">LOCATION & CAMPUS GUIDE</span>
          <h2 className="section-title">
            SLIIT Main Campus, <span className="gradient-text">Malabe</span>
          </h2>
          <p className="section-subtitle">
            Experience world-class computing facilities, innovation incubators, and modern auditoriums surrounded by lush campus greenery.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', marginTop: '1.75rem' }}>
            <button
              onClick={() => setActiveTab('halls')}
              className={`btn btn-sm ${activeTab === 'halls' ? 'btn-primary' : 'btn-outline'}`}
            >
              Conference Halls & Labs
            </button>
            <button
              onClick={() => setActiveTab('travel')}
              className={`btn btn-sm ${activeTab === 'travel' ? 'btn-primary' : 'btn-outline'}`}
            >
              Getting Here & Parking
            </button>
          </div>
        </div>

        {activeTab === 'halls' ? (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.75rem'
            }}
          >
            {venues.map((v, i) => (
              <div key={i} className="glass-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#fff', marginBottom: '0.6rem' }}>
                    {v.title}
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                    {v.desc}
                  </p>
                </div>
                <div>
                  <div style={{ fontSize: '0.76rem', fontWeight: 700, color: 'var(--cyan-light)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                    Facilities
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    {v.features.map((f, j) => (
                      <div key={j} style={{ fontSize: '0.85rem', color: '#e2e8f0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{ color: 'var(--cyan-light)' }}>•</span>
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.75rem'
            }}
          >
            {travelInfo.map((t, i) => (
              <div key={i} className="glass-card">
                <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{t.icon}</div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#fff', marginBottom: '0.5rem' }}>
                  {t.title}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.94rem', lineHeight: 1.6 }}>
                  {t.desc}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Campus Map Callout */}
        <div
          className="glass-card"
          style={{
            marginTop: '3rem',
            padding: '2rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.5rem',
            background: 'linear-gradient(135deg, rgba(16, 24, 44, 0.9) 0%, rgba(26, 17, 48, 0.9) 100%)',
            border: '1px solid rgba(124, 58, 237, 0.3)'
          }}
        >
          <div>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#fff', marginBottom: '0.35rem' }}>
              Sri Lanka Institute of Information Technology (SLIIT)
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem' }}>
              New Kandy Rd, Malabe 10115, Sri Lanka • Lat 6.9147° N, Lon 79.9729° E
            </p>
          </div>
          <a
            href="https://maps.google.com/?q=SLIIT+Malabe+Campus"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline"
          >
            Open in Google Maps ↗
          </a>
        </div>
      </div>
    </section>
  );
}
