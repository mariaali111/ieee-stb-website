import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { EventTimeline } from '../components/EventTimeline';
import { ArtGallery } from '../components/ArtGallery';
import { About } from '../components/About';
import { Team } from '../components/Team';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import { EventDetails } from '../components/EventDetails';
import { RegistrationModal } from '../components/RegistrationModal';
import { PLACEHOLDER_EVENTS } from '../data/events';
import { EventModel } from '../types/event';

export const Home: React.FC = () => {
  const [selectedEventDetails, setSelectedEventDetails] = useState<EventModel | null>(null);
  const [registrationModalOpen, setRegistrationModalOpen] = useState(false);
  const [selectedRegistrationEvent, setSelectedRegistrationEvent] = useState<EventModel | null>(null);

  const handleOpenEventDetails = (event: EventModel) => {
    setSelectedEventDetails(event);
  };

  const handleCloseEventDetails = () => {
    setSelectedEventDetails(null);
  };

  const handleOpenRegistration = (event?: EventModel) => {
    setSelectedRegistrationEvent(event || PLACEHOLDER_EVENTS[0]);
    setRegistrationModalOpen(true);
  };

  const handleCloseRegistration = () => {
    setRegistrationModalOpen(false);
  };

  const handleExploreTimeline = () => {
    const el = document.getElementById('timeline');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleOpenArtGallerySection = () => {
    const el = document.getElementById('art-gallery');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-cosmic-950 text-gray-100 flex flex-col font-sans selection:bg-crimson-800 selection:text-white">
      {/* Fixed Sticky Glass Navbar */}
      <Navbar onOpenRegisterModal={() => handleOpenRegistration()} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section with Live 8-Day Countdown */}
        <Hero
          onOpenRegisterModal={() => handleOpenRegistration()}
          onExploreTimeline={handleExploreTimeline}
          onOpenArtGallery={handleOpenArtGallerySection}
        />

        {/* 8-Day Event Timeline & Filters */}
        <EventTimeline
          events={PLACEHOLDER_EVENTS}
          onSelectEvent={handleOpenEventDetails}
          onRegisterEvent={(ev) => handleOpenRegistration(ev)}
        />

        {/* Dedicated Art & Creative Showcase Gallery */}
        <ArtGallery
          events={PLACEHOLDER_EVENTS}
          onSelectEvent={handleOpenEventDetails}
          onRegisterEvent={(ev) => handleOpenRegistration(ev)}
        />

        {/* About IEEE Student Branch */}
        <About />

        {/* Organizing Leadership & Team */}
        <Team />

        {/* Support & Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <EventDetails
        event={selectedEventDetails}
        onClose={handleCloseEventDetails}
        onOpenRegisterModal={(ev) => handleOpenRegistration(ev)}
      />

      <RegistrationModal
        isOpen={registrationModalOpen}
        onClose={handleCloseRegistration}
        selectedEvent={selectedRegistrationEvent}
        allEvents={PLACEHOLDER_EVENTS}
      />
    </div>
  );
};
