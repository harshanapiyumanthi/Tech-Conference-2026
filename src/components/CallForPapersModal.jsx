import React, { useState } from 'react';

export default function CallForPapersModal({ isOpen, onClose, onCFPSuccess }) {
  const [formData, setFormData] = useState({
    speakerName: '',
    email: '',
    company: '',
    track: 'ai-data',
    format: 'talk',
    title: '',
    abstract: '',
    portfolioUrl: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.speakerName || !formData.email || !formData.title) {
      alert('Please complete the required fields.');
      return;
    }

    setSubmitted(true);
    if (onCFPSuccess) {
      onCFPSuccess(formData.title);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          ✕
        </button>

        {!submitted ? (
          <div>
            <div style={{ marginBottom: '1.75rem' }}>
              <span className="badge badge-cyan">CALL FOR PAPERS (CFP)</span>
              <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#fff', marginBottom: '0.4rem' }}>
                Share Your Research & Expertise
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem' }}>
                We invite engineers, researchers, and tech pioneers to submit proposals for keynotes, tech talks, and hands-on lab workshops at SLIIT Tech Conference 2026.
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                  <label className="form-label">Speaker Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Dr. Kasun Silva"
                    value={formData.speakerName}
                    onChange={(e) => setFormData({ ...formData, speakerName: e.target.value })}
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Speaker Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="kasun@techcorp.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="form-input"
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                  <label className="form-label">Affiliation / Organization</label>
                  <input
                    type="text"
                    placeholder="Company or Research Lab"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Conference Track *</label>
                  <select
                    value={formData.track}
                    onChange={(e) => setFormData({ ...formData, track: e.target.value })}
                    className="form-select"
                  >
                    <option value="ai-data">Artificial Intelligence & ML</option>
                    <option value="cloud-devops">Cloud Native & DevOps</option>
                    <option value="cyber-web3">Cybersecurity & Web3</option>
                    <option value="web-mobile">Next-Gen Web & Mobile</option>
                  </select>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                  <label className="form-label">Session Format</label>
                  <select
                    value={formData.format}
                    onChange={(e) => setFormData({ ...formData, format: e.target.value })}
                    className="form-select"
                  >
                    <option value="talk">45-Minute Tech Talk</option>
                    <option value="workshop">90-Minute Hands-on Workshop</option>
                    <option value="lightning">20-Minute Lightning Talk</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">LinkedIn / Slide Deck / GitHub URL</label>
                  <input
                    type="url"
                    placeholder="https://linkedin.com/in/username"
                    value={formData.portfolioUrl}
                    onChange={(e) => setFormData({ ...formData, portfolioUrl: e.target.value })}
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Proposed Talk Title *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Distributed Consensus in Post-Quantum Networks"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Session Abstract & Takeaways *</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Summarize the core technical content, real-world case studies, and what attendees will learn..."
                  value={formData.abstract}
                  onChange={(e) => setFormData({ ...formData, abstract: e.target.value })}
                  className="form-textarea"
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', marginTop: '1.5rem' }}>
                <button type="button" className="btn btn-outline" onClick={onClose}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-cyan">
                  Submit CFP Proposal
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '2rem 0' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📬</div>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#fff', marginBottom: '0.5rem' }}>
              Proposal Received!
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', maxWidth: '460px', margin: '0 auto 2rem auto', lineHeight: 1.6 }}>
              Thank you for submitting <strong>"{formData.title}"</strong>. The SLIIT Technical Review Board will evaluate submissions and notify accepted speakers by October 15, 2026.
            </p>
            <button
              className="btn btn-primary"
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
