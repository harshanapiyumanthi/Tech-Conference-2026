import React, { useState } from 'react';
import { CONFERENCE_INFO } from '../data/conferenceData';

export default function ContactNewsletter({ onShowToast }) {
  const [newsEmail, setNewsEmail] = useState('');
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!newsEmail) return;
    onShowToast(`Subscribed ${newsEmail} to conference updates!`, 'success');
    setNewsEmail('');
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!contactData.name || !contactData.email || !contactData.message) {
      alert('Please fill out all fields.');
      return;
    }
    onShowToast(`Thank you ${contactData.name}! Your message has been sent to the organizing committee.`, 'success');
    setContactData({ name: '', email: '', subject: 'General Inquiry', message: '' });
  };

  return (
    <section id="contact" className="section-wrapper" style={{ background: 'rgba(7, 10, 20, 0.8)' }}>
      <div className="container">
        {/* Newsletter Section */}
        <div
          className="glass-card"
          style={{
            padding: '3rem 2rem',
            textAlign: 'center',
            marginBottom: '4.5rem',
            background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.12) 0%, rgba(6, 182, 212, 0.08) 100%)',
            border: '1px solid rgba(124, 58, 237, 0.3)'
          }}
        >
          <span className="badge badge-cyan">STAY UPDATED</span>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#fff', marginBottom: '0.5rem' }}>
            Subscribe to Conference Bulletins
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '580px', margin: '0 auto 1.75rem auto', fontSize: '0.96rem' }}>
            Get exclusive keynote announcements, workshop registration alerts, and speaker schedule drops directly in your inbox.
          </p>

          <form
            onSubmit={handleNewsletterSubmit}
            style={{
              display: 'flex',
              maxWidth: '480px',
              margin: '0 auto',
              gap: '0.6rem',
              flexWrap: 'wrap'
            }}
          >
            <input
              type="email"
              required
              placeholder="Enter your email address..."
              value={newsEmail}
              onChange={(e) => setNewsEmail(e.target.value)}
              className="form-input"
              style={{ flex: 1, minWidth: '220px' }}
            />
            <button type="submit" className="btn btn-primary">
              Subscribe
            </button>
          </form>
        </div>

        {/* Contact Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem'
          }}
        >
          {/* Left Info */}
          <div>
            <span className="badge">GET IN TOUCH</span>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1rem' }}>
              Have Questions for the <span className="gradient-text">Organizing Team?</span>
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.65, marginBottom: '2rem' }}>
              Whether you are an attendee, student club leader, university delegation, or corporate sponsor, our organizing desk is here to assist you.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(124, 58, 237, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', color: '#c4b5fd' }}>
                  📧
                </div>
                <div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>Email Helpdesk</div>
                  <div style={{ fontSize: '0.95rem', color: '#fff', fontWeight: 600 }}>{CONFERENCE_INFO.contactEmail}</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(6, 182, 212, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', color: '#67e8f9' }}>
                  📞
                </div>
                <div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>Phone Hotline</div>
                  <div style={{ fontSize: '0.95rem', color: '#fff', fontWeight: 600 }}>{CONFERENCE_INFO.contactPhone}</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(16, 185, 129, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', color: '#6ee7b7' }}>
                  🏛️
                </div>
                <div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>Host Department</div>
                  <div style={{ fontSize: '0.95rem', color: '#fff', fontWeight: 600 }}>{CONFERENCE_INFO.organizer}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Inquiry Form */}
          <div className="glass-card" style={{ padding: '2rem' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#fff', marginBottom: '1.25rem' }}>
              Send a Direct Message
            </h3>
            <form onSubmit={handleContactSubmit}>
              <div className="form-group">
                <label className="form-label">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="Full Name"
                  value={contactData.name}
                  onChange={(e) => setContactData({ ...contactData, name: e.target.value })}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="name@domain.com"
                  value={contactData.email}
                  onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Subject</label>
                <select
                  value={contactData.subject}
                  onChange={(e) => setContactData({ ...contactData, subject: e.target.value })}
                  className="form-select"
                >
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Ticketing Support">Ticketing Support</option>
                  <option value="Hackathon Registration">Hackathon Registration</option>
                  <option value="Corporate Sponsorship">Corporate Sponsorship</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea
                  rows={3}
                  required
                  placeholder="How can our committee assist you?"
                  value={contactData.message}
                  onChange={(e) => setContactData({ ...contactData, message: e.target.value })}
                  className="form-textarea"
                />
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
