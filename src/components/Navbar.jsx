import React, { useState, useEffect } from 'react';

export default function Navbar({ onOpenRegister, onOpenCFP }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Tracks', href: '#tracks' },
    { name: 'Speakers', href: '#speakers' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'Tickets', href: '#tickets' },
    { name: 'Venue', href: '#venue' },
    { name: 'FAQ', href: '#faq' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 900,
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(7, 9, 19, 0.88)' : 'rgba(7, 9, 19, 0.4)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid transparent',
        boxShadow: scrolled ? '0 10px 30px rgba(0, 0, 0, 0.5)' : 'none',
        padding: scrolled ? '0.75rem 0' : '1.2rem 0'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            textDecoration: 'none'
          }}
        >
          <div
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #7C3AED 0%, #06B6D4 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              fontWeight: '800',
              fontSize: '1.2rem',
              boxShadow: '0 0 15px rgba(124, 58, 237, 0.5)'
            }}
          >
            ⚡
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.15rem', color: '#fff', lineHeight: 1.1 }}>
              SLIIT <span className="gradient-text">TECH 2026</span>
            </div>
            <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', letterSpacing: '0.05em' }}>
              MALABE CAMPUS
            </div>
          </div>
        </a>

        {/* Desktop Links */}
        <div style={{ display: 'none', alignItems: 'center', gap: '1.8rem', '@media (min-width: 960px)': { display: 'flex' } }} className="desktop-nav-links">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              style={{
                color: 'var(--text-muted)',
                textDecoration: 'none',
                fontSize: '0.92rem',
                fontWeight: 500,
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop Actions */}
        <div style={{ display: 'none', alignItems: 'center', gap: '0.85rem' }} className="desktop-nav-actions">
          <button
            onClick={onOpenCFP}
            className="btn btn-outline btn-sm"
            style={{ fontSize: '0.85rem' }}
          >
            Call for Papers
          </button>
          <button
            onClick={() => onOpenRegister()}
            className="btn btn-primary btn-sm"
          >
            Get Tickets
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="mobile-menu-toggle"
          aria-label="Toggle navigation menu"
          style={{
            background: 'rgba(255, 255, 255, 0.06)',
            border: '1px solid var(--border-glass)',
            color: '#fff',
            borderRadius: '8px',
            padding: '0.5rem 0.75rem',
            cursor: 'pointer',
            fontSize: '1.2rem',
            display: 'block'
          }}
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            background: 'rgba(9, 13, 24, 0.98)',
            borderBottom: '1px solid var(--border-glow)',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            animation: 'fadeIn 0.25s ease'
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              style={{
                color: 'var(--text-main)',
                textDecoration: 'none',
                fontSize: '1.05rem',
                fontWeight: 600,
                padding: '0.4rem 0'
              }}
            >
              {link.name}
            </a>
          ))}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '0.5rem' }}>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenCFP(); }}
              className="btn btn-outline"
              style={{ width: '100%' }}
            >
              Call for Papers
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenRegister(); }}
              className="btn btn-primary"
              style={{ width: '100%' }}
            >
              Get Tickets
            </button>
          </div>
        </div>
      )}

      {/* Responsive Inline CSS */}
      <style>{`
        @media (min-width: 960px) {
          .desktop-nav-links { display: flex !important; }
          .desktop-nav-actions { display: flex !important; }
          .mobile-menu-toggle { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
