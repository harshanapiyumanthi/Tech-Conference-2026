import React, { useState } from 'react';
import { SCHEDULE } from '../data/conferenceData';

export default function Schedule({ bookmarks, onToggleBookmark, onShowToast }) {
  const [activeDay, setActiveDay] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTrack, setSelectedTrack] = useState('all');

  const currentDayData = SCHEDULE.find((d) => d.day === activeDay) || SCHEDULE[0];

  const filteredSessions = currentDayData.sessions.filter((session) => {
    const matchesSearch =
      session.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      session.speaker.toLowerCase().includes(searchQuery.toLowerCase()) ||
      session.room.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesTrack =
      selectedTrack === 'all' ||
      session.track === selectedTrack ||
      session.track === 'all';

    return matchesSearch && matchesTrack;
  });

  const getBadgeTypeColor = (type) => {
    switch (type) {
      case 'Keynote':
        return { bg: 'rgba(124, 58, 237, 0.2)', text: '#c4b5fd', border: 'rgba(124, 58, 237, 0.4)' };
      case 'Workshop':
        return { bg: 'rgba(6, 182, 212, 0.2)', text: '#67e8f9', border: 'rgba(6, 182, 212, 0.4)' };
      case 'Hackathon':
      case 'Hackathon Demos':
        return { bg: 'rgba(236, 72, 153, 0.2)', text: '#f472b6', border: 'rgba(236, 72, 153, 0.4)' };
      case 'Career Fair':
        return { bg: 'rgba(16, 185, 129, 0.2)', text: '#6ee7b7', border: 'rgba(16, 185, 129, 0.4)' };
      default:
        return { bg: 'rgba(255, 255, 255, 0.08)', text: '#e2e8f0', border: 'rgba(255, 255, 255, 0.15)' };
    }
  };

  return (
    <section id="schedule" className="section-wrapper" style={{ background: 'rgba(8, 12, 22, 0.6)' }}>
      <div className="container">
        <div className="section-header">
          <span className="badge badge-emerald">AGENDA & TIMETABLE</span>
          <h2 className="section-title">
            3-Day Interactive <span className="gradient-text">Conference Schedule</span>
          </h2>
          <p className="section-subtitle">
            Plan your custom schedule across keynotes, hands-on development labs, networking events, and the 24h Hackathon.
          </p>

          {/* Day Switcher */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '1rem',
              marginTop: '2.5rem',
              flexWrap: 'wrap'
            }}
          >
            {SCHEDULE.map((day) => (
              <button
                key={day.day}
                onClick={() => setActiveDay(day.day)}
                style={{
                  padding: '1rem 1.8rem',
                  borderRadius: 'var(--radius-md)',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 0.25s ease',
                  border: activeDay === day.day ? '1px solid var(--primary-light)' : '1px solid var(--border-glass)',
                  background: activeDay === day.day ? 'rgba(124, 58, 237, 0.2)' : 'rgba(255, 255, 255, 0.03)',
                  boxShadow: activeDay === day.day ? '0 10px 25px rgba(124, 58, 237, 0.25)' : 'none'
                }}
              >
                <div style={{ fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: activeDay === day.day ? 'var(--cyan-light)' : 'var(--text-dim)', fontWeight: 700 }}>
                  Day 0{day.day}
                </div>
                <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#fff' }}>
                  {day.date.split(',')[0]}
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                  {day.date.split(',')[1]}
                </div>
              </button>
            ))}
          </div>

          {/* Search & Filter Bar */}
          <div
            style={{
              display: 'flex',
              gap: '1rem',
              marginTop: '2rem',
              flexWrap: 'wrap',
              justifyContent: 'center'
            }}
          >
            <input
              type="text"
              placeholder="🔍 Search sessions, speakers, or topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="form-input"
              style={{ maxWidth: '400px' }}
            />
            <select
              value={selectedTrack}
              onChange={(e) => setSelectedTrack(e.target.value)}
              className="form-select"
              style={{ maxWidth: '220px' }}
            >
              <option value="all">All Tracks</option>
              <option value="ai-data">AI & Machine Learning</option>
              <option value="cloud-devops">Cloud & DevOps</option>
              <option value="cyber-web3">Cybersecurity & Web3</option>
              <option value="web-mobile">Next-Gen Web & Mobile</option>
            </select>
          </div>
        </div>

        {/* Sessions List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', maxWidth: '900px', margin: '0 auto' }}>
          {filteredSessions.length === 0 ? (
            <div className="glass-card" style={{ textAlign: 'center', padding: '3rem' }}>
              <p style={{ color: 'var(--text-muted)' }}>No sessions found matching your search criteria.</p>
            </div>
          ) : (
            filteredSessions.map((session) => {
              const isBookmarked = bookmarks?.includes(session.id);
              const badgeStyle = getBadgeTypeColor(session.type);

              return (
                <div
                  key={session.id}
                  className="glass-card"
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1.5rem',
                    padding: '1.5rem 1.75rem',
                    borderLeft: isBookmarked ? '4px solid var(--primary-light)' : '1px solid var(--border-glass)'
                  }}
                >
                  {/* Time & Room */}
                  <div style={{ minWidth: '180px' }}>
                    <div style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--cyan-light)', fontFamily: 'var(--font-heading)' }}>
                      {session.time}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                      <span>📍</span>
                      <span>{session.room}</span>
                    </div>
                  </div>

                  {/* Title & Speaker */}
                  <div style={{ flex: 1, minWidth: '240px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem', flexWrap: 'wrap' }}>
                      <span
                        style={{
                          fontSize: '0.72rem',
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          padding: '0.2rem 0.55rem',
                          borderRadius: '4px',
                          background: badgeStyle.bg,
                          color: badgeStyle.text,
                          border: `1px solid ${badgeStyle.border}`
                        }}
                      >
                        {session.type}
                      </span>
                    </div>
                    <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#fff', marginBottom: '0.35rem' }}>
                      {session.title}
                    </h4>
                    <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                      Speaker: <strong style={{ color: '#e2e8f0' }}>{session.speaker}</strong>
                    </div>
                  </div>

                  {/* Bookmark Toggle */}
                  <div>
                    <button
                      onClick={() => {
                        onToggleBookmark(session.id);
                        onShowToast(
                          isBookmarked
                            ? `Removed "${session.title}" from saved schedule.`
                            : `Added "${session.title}" to saved schedule!`,
                          'info'
                        );
                      }}
                      className="btn btn-outline btn-sm"
                      style={{
                        borderColor: isBookmarked ? 'var(--primary-light)' : 'var(--border-glass)',
                        background: isBookmarked ? 'rgba(124, 58, 237, 0.25)' : 'rgba(255, 255, 255, 0.04)',
                        color: isBookmarked ? '#fff' : 'var(--text-muted)'
                      }}
                    >
                      {isBookmarked ? '★ Saved' : '☆ Save Session'}
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}
