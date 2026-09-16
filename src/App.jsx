import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Tracks from './components/Tracks';
import Speakers from './components/Speakers';
import SpeakerModal from './components/SpeakerModal';
import Schedule from './components/Schedule';
import Tickets from './components/Tickets';
import RegistrationModal from './components/RegistrationModal';
import CallForPapersModal from './components/CallForPapersModal';
import Venue from './components/Venue';
import Sponsors from './components/Sponsors';
import FAQ from './components/FAQ';
import ContactNewsletter from './components/ContactNewsletter';
import Toast from './components/Toast';
import Footer from './components/Footer';

export default function App() {
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState('student');
  const [isCFPOpen, setIsCFPOpen] = useState(false);
  const [bookmarks, setBookmarks] = useState([]);
  const [toasts, setToasts] = useState([]);

  const showToast = (message, type = 'info') => {
    const id = Date.now() + Math.random();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  const dismissToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const toggleBookmark = (sessionId) => {
    setBookmarks((prev) =>
      prev.includes(sessionId)
        ? prev.filter((id) => id !== sessionId)
        : [...prev, sessionId]
    );
  };

  const openRegisterWithTier = (tierId = 'student') => {
    setSelectedTier(tierId);
    setIsRegisterOpen(true);
  };

  const handleRegistrationSuccess = (name, tier, refCode) => {
    showToast(`Registration Successful! Pass ${refCode} assigned to ${name}.`, 'success');
  };

  const handleCFPSuccess = (title) => {
    showToast(`CFP proposal "${title}" submitted successfully!`, 'success');
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Navigation Header */}
      <Navbar
        onOpenRegister={() => openRegisterWithTier('student')}
        onOpenCFP={() => setIsCFPOpen(true)}
      />

      {/* Main Content Sections */}
      <main style={{ flex: 1 }}>
        <Hero
          onOpenRegister={() => openRegisterWithTier('student')}
          onOpenCFP={() => setIsCFPOpen(true)}
        />
        <About />
        <Tracks
          onSelectTrack={() => {
            const el = document.getElementById('speakers');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />
        <Speakers onSelectSpeaker={(spk) => setSelectedSpeaker(spk)} />
        <Schedule
          bookmarks={bookmarks}
          onToggleBookmark={toggleBookmark}
          onShowToast={showToast}
        />
        <Tickets onSelectTier={(tierId) => openRegisterWithTier(tierId)} />
        <Venue />
        <Sponsors onShowToast={showToast} />
        <FAQ />
        <ContactNewsletter onShowToast={showToast} />
      </main>

      {/* Footer */}
      <Footer
        onOpenRegister={() => openRegisterWithTier('student')}
        onOpenCFP={() => setIsCFPOpen(true)}
      />

      {/* Interactive Modals */}
      <SpeakerModal
        speaker={selectedSpeaker}
        onClose={() => setSelectedSpeaker(null)}
        onRegister={() => {
          setSelectedSpeaker(null);
          openRegisterWithTier('student');
        }}
      />

      <RegistrationModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
        defaultTier={selectedTier}
        onRegistrationSuccess={handleRegistrationSuccess}
      />

      <CallForPapersModal
        isOpen={isCFPOpen}
        onClose={() => setIsCFPOpen(false)}
        onCFPSuccess={handleCFPSuccess}
      />

      {/* Floating Micro-Notifications */}
      <Toast toasts={toasts} onDismiss={dismissToast} />
    </div>
  );
}
