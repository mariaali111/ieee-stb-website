import { useEffect, useState } from "react";

import { navItems } from "./config/navItems";

import Navbar from "./components/Navbar";
import EventModal from "./components/EventModal";
import ImageLightbox from "./components/ImageLightbox";

import Home from "./sections/Home";
import About from "./sections/About";
import Team from "./sections/Team";
import Events from "./sections/Events";
import Techfieeeesta26 from "./sections/Techfieeeesta26";
import Membership from "./sections/Membership";
//import Gallery from "./sections/Gallery";
import Contact from "./sections/Contact";

export default function App() {
  const [open, setOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [lightboxImage, setLightboxImage] = useState(null);
  const [activeSection, setActiveSection] = useState(window.location.hash || "#home");

  // Active nav tab follows the actual section positions while scrolling
  /*useEffect(() => {
    const updateActiveSection = () => {
      const marker = window.scrollY + 120;
      const sections = navItems
        .map(([, href]) => document.querySelector(href))
        .filter(Boolean);

      let current = "#home";
      for (const section of sections) {
        if (section.offsetTop <= marker) current = `#${section.id}`;
      }
      setActiveSection(current);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    window.addEventListener("hashchange", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
      window.removeEventListener("hashchange", updateActiveSection);
    };
  }, []);*/

  const goTo = (href) => {
    setActiveSection(href);
    setOpen(false);
  };

  return (
    <div className="site-shell">
      <div className="grid-overlay" />
      <div className="ambient ambient-a" />
      <div className="ambient ambient-b" />

      <Navbar open={open} setOpen={setOpen} activeSection={activeSection} goTo={goTo} />

      <main>
        <Home goTo={goTo} />
        <About />
        <Team />
        <Events onSelectEvent={setSelectedEvent} />
        <Techfieeeesta26 />
        <Membership />
        {/*Gallery onOpenImage={setLightboxImage}*/}
        <Contact />
      </main>

      <EventModal
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
        onOpenImage={setLightboxImage}
      />
      <ImageLightbox image={lightboxImage} onClose={() => setLightboxImage(null)} />
    </div>
  );
}
