import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  CheckCircle2,
  Menu,
  MapPin,
  Sparkles,
  X,
} from "lucide-react";
import "./styles.css";
import logo from "./assets/ieee-stb-logo.png";
import { aboutData, announcements, events } from "./data/stage2Data";
import { branchInfo, leadership, cellLeads, teams, leadOnlyCells } from "./data/teamData";

const navItems = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Team", "#team"],
  ["Events", "#events"],
  ["IEEE Week", "#ieee-week"],
  ["Membership", "#membership"],
  ["Gallery", "#gallery"],
  ["Contact", "#contact"],
];

class AppErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ minHeight: "100vh", background: "#050806", color: "#f5f7f5", padding: "48px", fontFamily: "system-ui, sans-serif" }}>
          <h1 style={{ color: "#4ade80" }}>Website runtime error</h1>
          <p>The page loaded, but the React application encountered an error.</p>
          <pre style={{ whiteSpace: "pre-wrap", color: "#c5cbc6" }}>{String(this.state.error?.message || this.state.error)}</pre>
        </div>
      );
    }
    return this.props.children;
  }
}


function EventCard({ event, onSelect }) {
  return (
    <button
      className="event-card"
      type="button"
      onClick={() => onSelect(event)}
      aria-label={`View details for ${event.title}`}
    >
      <div className="event-topline">
        <span>{event.number}</span>
        <span>{event.category}</span>
      </div>
      {event.image ? (
        <div className="event-thumb">
          <img src={event.image} alt="" />
        </div>
      ) : (
        <div className="event-icon"><CalendarDays size={20} /></div>
      )}
      <h3>{event.title}</h3>
      <div className="event-meta">
        <span><CalendarDays size={14} />{event.date}</span>
        <span><MapPin size={14} />{event.location}</span>
      </div>
      <p className="event-description">{event.description}</p>
      <div className="event-footer">
        <span>{event.status}</span>
        <ArrowUpRight size={16} />
      </div>
    </button>
  );
}

function App() {
  const [open, setOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [lightboxImage, setLightboxImage] = useState(null);
  const [activeSection, setActiveSection] = useState(
    window.location.hash || "#home"
  );

  useEffect(() => {
    const updateActiveSection = () => {
      const marker = window.scrollY + 120;
      const sections = navItems
        .map(([, href]) => document.querySelector(href))
        .filter(Boolean);

      let current = "#home";
      for (const section of sections) {
        if (section.offsetTop <= marker) {
          current = `#${section.id}`;
        }
      }

      setActiveSection(current);
    };

    let frame = null;
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        updateActiveSection();
        frame = null;
      });
    };

    const onHashChange = () => {
      const hash = window.location.hash;
      if (hash && navItems.some(([, href]) => href === hash)) {
        setActiveSection(hash);
      }
      updateActiveSection();
    };

    updateActiveSection();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    window.addEventListener("hashchange", onHashChange);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateActiveSection);
      window.removeEventListener("hashchange", onHashChange);
    };
  }, []);

  const goTo = (href) => {
    setActiveSection(href);
    setOpen(false);
  };

  return (
    <div className="site-shell">
      <div className="grid-overlay" />
      <div className="ambient ambient-a" />
      <div className="ambient ambient-b" />

      <header className="navbar">
        <a className="brand" href="#home" onClick={() => setOpen(false)}>
          <img src={logo} alt="Aligarh Muslim University IEEE Student Branch" />
          <div className="brand-copy">
            <strong>IEEE STUDENT BRANCH</strong>
            <span>ZHCET · AMU</span>
          </div>
        </a>

        <nav className={open ? "nav-links open" : "nav-links"}>
          {navItems.map(([label, href]) => (
            <a
              key={label}
              className={activeSection === href ? "active" : ""}
              href={href}
              onClick={() => goTo(href)}
            >
              {label}
            </a>
          ))}
        </nav>

        <button
          className="menu-button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="eyebrow">ALIGARH MUSLIM UNIVERSITY · IEEE STUDENT BRANCH</p>
            <h1>
              Engineering ideas.
              <span>Building tomorrow.</span>
            </h1>
            <p className="hero-description">
              A student-driven community at ZHCET focused on technology,
              innovation, collaboration and learning beyond the classroom.
            </p>

            <div className="hero-actions">
              <a className="button primary" href="#events" onClick={() => goTo("#events")}>
                Explore events <ArrowUpRight size={17} />
              </a>
              <a className="button secondary" href="#about" onClick={() => goTo("#about")}>
                Discover the branch
              </a>
            </div>

            <div className="hero-meta">
              <span><i /> Academic Session 2026–27</span>
              <span>IEEE STB ZHCET · AMU</span>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="orbit orbit-three" />
            <div className="core">
              <div className="core-inner">IEEE</div>
            </div>
            <div className="visual-label top">01 / CREATE</div>
            <div className="visual-label bottom">TECH · COMMUNITY · IMPACT</div>
          </div>

          <div className="scroll-cue">
            <span>SCROLL TO EXPLORE</span>
            <div />
          </div>
        </section>

        <section className="announcement-band" aria-label="Announcements">
          <div className="section-kicker">
            <span className="status-dot" />
            Latest from the branch
          </div>
          <div className="announcement-ticker">
            {announcements.map((item) => (
              <a key={item.title} href={item.href} onClick={() => goTo(item.href)}>
                <span>{item.tag}</span>
                <strong>{item.title}</strong>
                <ArrowRight size={16} />
              </a>
            ))}
          </div>
        </section>

        <section className="about-section section-block" id="about">
          <div className="section-heading">
            <p className="eyebrow">{aboutData.eyebrow}</p>
            <h2>{aboutData.title}</h2>
          </div>

          <div className="about-grid">
            <div className="about-main">
              <p className="lead">{aboutData.intro}</p>
              <div className="vision-card">
                <span>01 / VISION</span>
                <p>{aboutData.vision}</p>
              </div>
            </div>

            <div className="mission-card">
              <div className="card-title">
                <Sparkles size={17} />
                <span>WHAT WE AIM TO DO</span>
              </div>
              <div className="mission-list">
                {aboutData.mission.map((item, index) => (
                  <div className="mission-item" key={item}>
                    <span>0{index + 1}</span>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="info-note">
            <CheckCircle2 size={18} />
            <p>{aboutData.note}</p>
          </div>
        </section>

        <section className="team-section section-block" id="team">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">OUR TEAM</p>
              <h2>People behind the branch.</h2>
            </div>
            <div className="team-intro-copy">
              <p className="section-intro">
                The team directory is organized by leadership, cell leads and working groups,
                so names and roles can be updated without changing the page structure.
              </p>
              <p className="team-official-note">
                Official team selection · Academic Session {branchInfo.academicSession} ·
                Notice dated {branchInfo.selectionNoticeDate}
              </p>
            </div>
          </div>

          <div className="team-leadership-grid">
            {leadership.map((person) => (
              <article className="person-card featured-person" key={person.name}>
                <span>{person.role}</span>
                <h3>{person.name}</h3>
              </article>
            ))}
          </div>

          <div className="team-subheading">
            <p className="eyebrow">CELL LEADS</p>
            <h3>Leads across the branch.</h3>
          </div>

          <div className="lead-grid">
            {cellLeads.map((person, index) => (
              <article className="person-card" key={person.name}>
                <div className="person-number">0{index + 1}</div>
                <span>{person.role}</span>
                <h3>{person.name}</h3>
              </article>
            ))}
          </div>

          <div className="team-subheading">
            <p className="eyebrow">WORKING GROUPS</p>
            <h3>Built around different strengths.</h3>
          </div>

          <div className="team-groups">
            {teams.map((team, index) => (
              <article className="team-group" key={team.name}>
                <div className="team-group-head">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{team.name}</h3>
                </div>
                {team.lead && (
                  <p className="team-lead">
                    <strong>Lead</strong> {team.lead}
                  </p>
                )}
                {team.members.length > 0 && (
                  <div className="member-list">
                    {team.members.map((member) => (
                      <span key={member}>{member}</span>
                    ))}
                  </div>
                )}
              </article>
            ))}
            {leadOnlyCells.map((cell, index) => (
              <article className="team-group team-group-lead-only" key={cell.name}>
                <div className="team-group-head">
                  <span>{String(teams.length + index + 1).padStart(2, "0")}</span>
                  <h3>{cell.name}</h3>
                </div>
                <p className="team-lead">
                  <strong>Lead</strong> {cell.lead}
                </p>
                <p className="team-no-members">
                  No additional members are listed in the official selection notice.
                </p>
              </article>
            ))}
          </div>

          <p className="team-data-note">
            Team names and roles are kept in <code>src/data/teamData.js</code> so the directory
            can be updated later as the branch changes.
          </p>
        </section>

        <section className="events-section section-block" id="events">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">EVENTS & ACTIVITIES</p>
              <h2>Learn. Build. Compete.</h2>
            </div>
            <p className="section-intro">
              Upcoming activities from the TECHFIEEEEST ’26 / IEEE Week programme.
              Each event includes its date and location so the schedule is easy to follow.
            </p>
          </div>

          <div className="event-grid">
            {events.map((event) => (
              <EventCard key={event.number} event={event} onSelect={setSelectedEvent} />
            ))}
          </div>
        </section>

        <section className="ieee-preview section-block" id="ieee-week">
          <div>
            <p className="eyebrow">TECHFIEEEEST ’26 · IEEE WEEK</p>
            <h2>All IEEE Week events, in one place.</h2>
            <p>
              The events listed above are part of IEEE Week. The same complete event lineup is
              shown here with the schedule, dates and locations so this section works as the
              dedicated IEEE Week view.
            </p>
          </div>

          <div className="ieee-week-events">
            {events.map((event) => (
              <EventCard key={event.number} event={event} onSelect={setSelectedEvent} />
            ))}
          </div>
        </section>

        <section className="next-section" id="membership">
          <p className="eyebrow">COMING LATER</p>
          <h2>IEEE Membership.</h2>
        </section>

        <section className="next-section" id="gallery">
          <p className="eyebrow">COMING LATER</p>
          <h2>Gallery.</h2>
        </section>

        <section className="next-section" id="contact">
          <p className="eyebrow">COMING LATER</p>
          <h2>Contact the branch.</h2>
        </section>
      </main>

      {selectedEvent && (
        <div
          className="event-modal-backdrop"
          role="presentation"
          onClick={() => setSelectedEvent(null)}
        >
          <div
            className="event-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="event-modal-title"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              type="button"
              onClick={() => setSelectedEvent(null)}
              aria-label="Close event details"
            >
              <X size={20} />
            </button>

            {selectedEvent.image && (
              <button
                className="modal-poster"
                type="button"
                onClick={() =>
                  setLightboxImage({
                    src: selectedEvent.image,
                    alt: `${selectedEvent.title} poster`,
                  })
                }
                aria-label={`View ${selectedEvent.title} poster larger`}
              >
                <img src={selectedEvent.image} alt={`${selectedEvent.title} poster`} />
                <span className="poster-zoom-hint">CLICK TO VIEW LARGER</span>
              </button>
            )}

            <div className="modal-content">
              <p className="eyebrow">{selectedEvent.category}</p>
              <h2 id="event-modal-title">{selectedEvent.title}</h2>
              <p className="modal-date">{selectedEvent.date}</p>
              <p className="modal-description">{selectedEvent.description}</p>

              <div className="modal-details">
                {selectedEvent.details?.map((detail) => (
                  <div key={detail}>
                    <CheckCircle2 size={16} />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>

              {selectedEvent.registrationUrl && (
                <a
                  className="button primary modal-register"
                  href={selectedEvent.registrationUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Register for this event <ArrowUpRight size={17} />
                </a>
              )}

              {selectedEvent.sourceNote && (
                <p className="source-note">{selectedEvent.sourceNote}</p>
              )}
            </div>
          </div>
        </div>
      )}

      {lightboxImage && (
        <div
          className="image-lightbox"
          role="presentation"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="lightbox-close"
            type="button"
            onClick={() => setLightboxImage(null)}
            aria-label="Close image viewer"
          >
            <X size={22} />
          </button>
          <div
            className="lightbox-frame"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={lightboxImage.src} alt={lightboxImage.alt} />
          </div>
          <span className="lightbox-caption">Click outside to close</span>
        </div>
      )}
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <AppErrorBoundary>
    <App />
  </AppErrorBoundary>
);
