import React, { useState } from 'react';
import { TICKET_TIERS, CONFERENCE_INFO } from '../data/conferenceData';

export default function RegistrationModal({ isOpen, onClose, defaultTier, onRegistrationSuccess }) {
  const [tier, setTier] = useState(defaultTier || 'student');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    institution: '',
    studentId: '',
    workshop: 'ai-llm',
    dietary: 'none',
    tshirtSize: 'M'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ticketRef, setTicketRef] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email) {
      alert('Please fill in your name and email address.');
      return;
    }

    const randomRef = 'SLIIT-TC26-' + Math.floor(100000 + Math.random() * 900000);
    setTicketRef(randomRef);
    setIsSubmitted(true);
    if (onRegistrationSuccess) {
      onRegistrationSuccess(formData.fullName, tier, randomRef);
    }
  };

  const selectedTierObj = TICKET_TIERS.find((t) => t.id === tier) || TICKET_TIERS[0];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          ✕
        </button>

        {!isSubmitted ? (
          <div>
            <div style={{ marginBottom: '1.75rem' }}>
              <span className="badge badge-emerald">DELEGATE REGISTRATION</span>
              <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#fff', marginBottom: '0.4rem' }}>
                Secure Your <span className="gradient-text">Conference Pass</span>
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem' }}>
                {CONFERENCE_INFO.name} • {CONFERENCE_INFO.dates} • {CONFERENCE_INFO.hall}
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              {/* Pass Tier Selection */}
              <div className="form-group">
                <label className="form-label">Selected Pass Category</label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.6rem' }}>
                  {TICKET_TIERS.map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setTier(t.id)}
                      style={{
                        padding: '0.75rem 0.5rem',
                        borderRadius: 'var(--radius-md)',
                        border: tier === t.id ? '2px solid var(--primary-light)' : '1px solid var(--border-glass)',
                        background: tier === t.id ? 'rgba(124, 58, 237, 0.25)' : 'rgba(255, 255, 255, 0.03)',
                        color: tier === t.id ? '#fff' : 'var(--text-muted)',
                        cursor: 'pointer',
                        textAlign: 'center',
                        fontSize: '0.85rem',
                        fontWeight: 700
                      }}
                    >
                      <div>{t.name.split(' ')[0]}</div>
                      <div style={{ fontSize: '0.75rem', color: tier === t.id ? 'var(--cyan-light)' : 'var(--text-dim)' }}>
                        LKR {t.priceLKR}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Personal Info */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Harsha Bandara"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="form-input"
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                  <label className="form-label">Phone / WhatsApp</label>
                  <input
                    type="tel"
                    placeholder="+94 77 123 4567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">University / Organization</label>
                  <input
                    type="text"
                    placeholder="SLIIT / Company Name"
                    value={formData.institution}
                    onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                    className="form-input"
                  />
                </div>
              </div>

              {tier === 'student' && (
                <div className="form-group">
                  <label className="form-label">Student Registration ID * (For Student Discount)</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. IT21004820"
                    value={formData.studentId}
                    onChange={(e) => setFormData({ ...formData, studentId: e.target.value })}
                    className="form-input"
                  />
                </div>
              )}

              {/* Workshop preference & T-shirt */}
              <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                  <label className="form-label">Day 1 Hands-on Workshop Choice</label>
                  <select
                    value={formData.workshop}
                    onChange={(e) => setFormData({ ...formData, workshop: e.target.value })}
                    className="form-select"
                  >
                    <option value="ai-llm">AI: Fine-Tuning Open Source LLMs</option>
                    <option value="k8s">DevOps: Automated Kubernetes with ArgoCD</option>
                    <option value="zkp">Web3: Zero-Knowledge Proofs in Rust</option>
                    <option value="hackathon">24h Hackathon Participant</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Swag T-Shirt Size</label>
                  <select
                    value={formData.tshirtSize}
                    onChange={(e) => setFormData({ ...formData, tshirtSize: e.target.value })}
                    className="form-select"
                  >
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="2XL">2XL</option>
                  </select>
                </div>
              </div>

              {/* Submit CTA */}
              <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
                <button type="button" className="btn btn-outline" onClick={onClose}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary" style={{ padding: '0.85rem 2rem' }}>
                  Complete Registration (LKR {selectedTierObj.priceLKR})
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation & Instant Digital Badge View */
          <div style={{ textAlign: 'center', animation: 'fadeIn 0.3s ease' }}>
            <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>🎉</div>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#fff', marginBottom: '0.4rem' }}>
              Registration Confirmed!
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.75rem' }}>
              Your digital delegate pass has been created. A confirmation email has been sent to <strong>{formData.email}</strong>.
            </p>

            {/* Digital Badge Preview */}
            <div
              style={{
                background: 'linear-gradient(135deg, #131b32 0%, #1e1338 100%)',
                border: '2px solid rgba(124, 58, 237, 0.5)',
                borderRadius: 'var(--radius-lg)',
                padding: '2rem',
                maxWidth: '420px',
                margin: '0 auto 2rem auto',
                boxShadow: '0 15px 40px rgba(0, 0, 0, 0.7), 0 0 30px rgba(124, 58, 237, 0.25)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  right: '0',
                  height: '6px',
                  background: 'linear-gradient(90deg, #7C3AED, #06B6D4, #EC4899)'
                }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--cyan-light)', letterSpacing: '0.05em' }}>
                    SLIIT TECH CONF 2026
                  </div>
                  <div style={{ fontSize: '0.68rem', color: 'var(--text-dim)' }}>
                    OFFICIAL DELEGATE BADGE
                  </div>
                </div>
                <div
                  style={{
                    padding: '0.2rem 0.6rem',
                    borderRadius: 'var(--radius-full)',
                    background: `${selectedTierObj.color}22`,
                    color: selectedTierObj.color,
                    border: `1px solid ${selectedTierObj.color}66`,
                    fontSize: '0.72rem',
                    fontWeight: 800,
                    textTransform: 'uppercase'
                  }}
                >
                  {selectedTierObj.name}
                </div>
              </div>

              <div style={{ margin: '1.5rem 0' }}>
                <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff' }}>
                  {formData.fullName}
                </div>
                <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                  {formData.institution || 'Independent Delegate'}
                </div>
              </div>

              {/* Simulated QR Code */}
              <div
                style={{
                  width: '130px',
                  height: '130px',
                  margin: '0 auto 1.25rem auto',
                  background: '#ffffff',
                  borderRadius: '12px',
                  padding: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)'
                }}
              >
                <img
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=${encodeURIComponent(ticketRef)}`}
                  alt="Delegate Pass QR Code"
                  style={{ width: '100%', height: '100%' }}
                />
              </div>

              <div style={{ fontFamily: 'monospace', fontSize: '0.85rem', color: 'var(--cyan-light)', letterSpacing: '0.1em' }}>
                {ticketRef}
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
              <button
                className="btn btn-outline"
                onClick={() => {
                  alert(`Digital Pass Reference ${ticketRef} copied to clipboard!`);
                }}
              >
                Copy Pass Ref
              </button>
              <button
                className="btn btn-primary"
                onClick={() => {
                  setIsSubmitted(false);
                  onClose();
                }}
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
