import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  CheckCircle2,
  ExternalLink,
  MapPin,
  Menu,
  Sparkles,
  X,
} from "lucide-react";

import "./styles.css";
import logo from "./assets/ieee-stb-logo.png";

import {
  aboutData,
  announcements,
  events,
  ieeeCommunities,
  socialLinks,
  techFiestaSchedule,
} from "./data/stage2Data";

import {
  branchInfo,
  leadership,
  cellLeads,
  teams,
} from "./data/teamData";


// ============================================================
// PROFILE PICTURES
// ============================================================

// Automatically load all images from:
// src/profile-pic/

const profilePictures = import.meta.glob(
  "./profile-pic/*.{jpg,jpeg,png,webp}",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
);



function getProfileImage(name) {
  const fileName = name
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

  const imageEntry = Object.entries(profilePictures).find(([path]) => {
    const pathFileName = path
      .split("/")
      .pop()
      .replace(/\.(jpg|jpeg|png|webp)$/i, "");

    return pathFileName === fileName;
  });

  return imageEntry ? imageEntry[1] : null;
}


// ============================================================
// NAVIGATION
// ============================================================

const navItems = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Team", "#team"],
  ["Events", "#events"],
  ["TECHFIEEEEST ’26", "#ieee-week"],
  ["Membership", "#membership"],
  ["Gallery", "#gallery"],
  ["Contact", "#contact"],
];


// ============================================================
// SOCIAL ICONS
// ============================================================

function SocialBrandIcon({ name }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": "true",
  };

  if (name === "Instagram") {
    return (
      <svg {...common} viewBox="0 0 24 24">
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="5"
          stroke="currentColor"
          strokeWidth="1.9"
        />
        <circle
          cx="12"
          cy="12"
          r="4.2"
          stroke="currentColor"
          strokeWidth="1.9"
        />
        <circle
          cx="17.3"
          cy="6.8"
          r="1.15"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (name === "Facebook") {
    return (
      <svg {...common} viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.3-1.6 1.6-1.6h1.7V3.5c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.2H7.3V13h2.8v8h3.4Z"
        />
      </svg>
    );
  }

  if (name === "YouTube") {
    return (
      <svg {...common} viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M21.6 7.1a2.9 2.9 0 0 0-2-2C17.9 4.6 12 4.6 12 4.6s-5.9 0-7.6.5a2.9 2.9 0 0 0-2 2C1.9 8.8 1.9 12 1.9 12s0 3.2.5 4.9a2.9 2.9 0 0 0 2 2c1.7.5 7.6.5 7.6.5s5.9 0 7.6-.5a2.9 2.9 0 0 0 2-2c.5-1.7.5-4.9.5-4.9s0-3.2-.5-4.9ZM10 15.7V8.3l6 3.7-6 3.7Z"
        />
      </svg>
    );
  }

  return (
    <svg {...common} viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M5.2 8.1A1.9 1.9 0 1 1 5.2 4.3a1.9 1.9 0 0 1 0 3.8ZM3.5 9.7h3.4V20H3.5V9.7Zm5.5 0h3.2v1.4h.1c.4-.8 1.5-1.7 3.5-1.7 3.7 0 4.3 2.4 4.3 5.6V20h-3.4v-4.4c0-1.1 0-2.6-1.6-2.6s-1.9 1.2-1.9 2.5V20H9V9.7Z"
      />
    </svg>
  );
}


// ============================================================
// ERROR BOUNDARY
// ============================================================

class AppErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error,
    };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            minHeight: "100vh",
            background: "#050806",
            color: "#f5f7f5",
            padding: "48px",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          <h1 style={{ color: "#4ade80" }}>
            Website runtime error
          </h1>

          <p>
            The page loaded, but the React application encountered
            an error.
          </p>

          <pre
            style={{
              whiteSpace: "pre-wrap",
              color: "#c5cbc6",
            }}
          >
            {String(
              this.state.error?.message ||
                this.state.error
            )}
          </pre>
        </div>
      );
    }

    return this.props.children;
  }
}


// ============================================================
// MAIN APP
// ============================================================

function App() {
  const [open, setOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [lightboxImage, setLightboxImage] = useState(null);

  const [activeSection, setActiveSection] = useState(
    window.location.hash || "#home"
  );


  // ==========================================================
  // ACTIVE NAVIGATION SECTION
  // ==========================================================

  useEffect(() => {
    const updateActiveSection = () => {
      const marker = window.scrollY + 120;

      const sections = navItems
        .map(([, href]) =>
          document.querySelector(href)
        )
        .filter(Boolean);

      let current = "#home";

      for (const section of sections) {
        if (section.offsetTop <= marker) {
          current = `#${section.id}`;
        }
      }

      setActiveSection(current);
    };

    updateActiveSection();

    window.addEventListener(
      "scroll",
      updateActiveSection,
      { passive: true }
    );

    window.addEventListener(
      "resize",
      updateActiveSection
    );

    window.addEventListener(
      "hashchange",
      updateActiveSection
    );

    return () => {
      window.removeEventListener(
        "scroll",
        updateActiveSection
      );

      window.removeEventListener(
        "resize",
        updateActiveSection
      );

      window.removeEventListener(
        "hashchange",
        updateActiveSection
      );
    };
  }, []);


  // ==========================================================
  // NAVIGATION FUNCTION
  // ==========================================================

  const goTo = (href) => {
    setActiveSection(href);
    setOpen(false);
  };


  // ==========================================================
  // RENDER
  // ==========================================================

  return (
    <div className="site-shell">

      <div className="grid-overlay" />
      <div className="ambient ambient-a" />
      <div className="ambient ambient-b" />


      {/* ======================================================
          NAVBAR
      ====================================================== */}

      <header className="navbar">

        <a
          className="brand"
          href="#home"
          onClick={() => goTo("#home")}
          aria-label="IEEE Student Branch ZHCET AMU home"
        >
          <img
            src={logo}
            alt="Aligarh Muslim University IEEE Student Branch logo"
          />

          <div className="brand-copy">
            <strong>IEEE STUDENT BRANCH</strong>
            <span>ZHCET · AMU</span>
          </div>
        </a>


        <nav
          className={
            open
              ? "nav-links open"
              : "nav-links"
          }
        >
          {navItems.map(([label, href]) => (
            <a
              key={label}
              className={
                activeSection === href
                  ? "active"
                  : ""
              }
              href={href}
              onClick={() => goTo(href)}
            >
              {label}
            </a>
          ))}
        </nav>


        <button
          className="menu-button"
          aria-label={
            open
              ? "Close menu"
              : "Open menu"
          }
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <X size={22} />
          ) : (
            <Menu size={22} />
          )}
        </button>

      </header>


      {/* ======================================================
          MAIN
      ====================================================== */}

      <main>


        {/* ====================================================
            HERO
        ==================================================== */}

        <section
          className="hero"
          id="home"
        >
          <div className="hero-content">

            <p className="eyebrow">
              ALIGARH MUSLIM UNIVERSITY · IEEE STUDENT BRANCH
            </p>

            <h1>
              Engineering ideas.
              <span>Building tomorrow.</span>
            </h1>

            <p className="hero-description">
              A student-driven community at ZHCET focused on
              technology, innovation, collaboration and learning
              beyond the classroom.
            </p>

            <div className="hero-actions">

              <a
                className="button primary"
                href="#events"
                onClick={() => goTo("#events")}
              >
                Explore events
                <ArrowUpRight size={17} />
              </a>

              <a
                className="button secondary"
                href="#about"
                onClick={() => goTo("#about")}
              >
                Discover IEEE
              </a>

            </div>


            <div className="hero-meta">
              <span>
                <i />
                Academic Session 2026–27
              </span>

              <span>
                IEEE STB ZHCET · AMU
              </span>
            </div>

          </div>


          <div
            className="hero-visual"
            aria-hidden="true"
          >
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="orbit orbit-three" />

            <div className="core">
              <div className="core-inner">
                IEEE
              </div>
            </div>

            <div className="visual-label top">
              01 / CREATE
            </div>

            <div className="visual-label bottom">
              TECH · COMMUNITY · IMPACT
            </div>
          </div>


          <div className="scroll-cue">
            <span>SCROLL TO EXPLORE</span>
            <div />
          </div>

        </section>


        {/* ====================================================
            ANNOUNCEMENTS
        ==================================================== */}

        <section
          className="announcement-band"
          aria-label="Announcements"
        >

          <div className="section-kicker">
            <span className="status-dot" />
            Latest from the branch
          </div>

          <div className="announcement-ticker">

            {announcements.map((item) => (
              <a
                key={item.title}
                href={item.href}
                onClick={() => goTo(item.href)}
              >
                <span>{item.tag}</span>

                <strong>
                  {item.title}
                </strong>

                <ArrowRight size={16} />
              </a>
            ))}

          </div>

        </section>


        {/* ====================================================
            ABOUT
        ==================================================== */}

        <section
          className="about-section section-block"
          id="about"
        >

          <div className="section-heading">

            <p className="eyebrow">
              {aboutData.eyebrow}
            </p>

            <h2>
              {aboutData.title}
            </h2>

          </div>


          <div className="about-grid">

            <div className="about-main">

              <p className="lead">
                {aboutData.intro}
              </p>

              <div className="vision-card">
                <span>01 / VISION</span>

                <p>
                  {aboutData.vision}
                </p>
              </div>

            </div>


            <div className="mission-card">

              <div className="card-title">
                <Sparkles size={17} />
                <span>MISSION</span>
              </div>

              <div className="mission-list">

                {aboutData.mission.map(
                  (item, index) => (
                    <div
                      className="mission-item"
                      key={item}
                    >
                      <span>
                        0{index + 1}
                      </span>

                      <p>{item}</p>
                    </div>
                  )
                )}

              </div>

            </div>

          </div>


          <div className="info-note">
            <CheckCircle2 size={18} />

            <p>
              {aboutData.note}
            </p>
          </div>


          <div className="about-subheading">

            <p className="eyebrow">
              IEEE COMMUNITIES
            </p>

            <h3>
              Different communities. One IEEE ecosystem.
            </h3>

          </div>


          <div className="community-grid">

            {ieeeCommunities.map(
              (community) => (
                <article
                  className="community-card"
                  key={community.title}
                >

                  <div className="community-badge">
                    {community.short}
                  </div>

                  <h3>
                    {community.title}
                  </h3>

                  <p>
                    {community.text}
                  </p>

                  {community.link && (
                    <a
                      href={community.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Visit community
                      <ArrowUpRight size={15} />
                    </a>
                  )}

                </article>
              )
            )}

          </div>

        </section>


        {/* ====================================================
            TEAM
        ==================================================== */}

        <section
          className="team-section section-block"
          id="team"
        >

          {/* --------------------------------------------------
              TEAM HEADING
          -------------------------------------------------- */}

          <div className="section-heading split-heading">

            <div>

              <p className="eyebrow">
                OUR TEAM
              </p>

              <h2>
                People behind the branch.
              </h2>

            </div>


            <div className="team-intro-copy">

              <p className="section-intro">
                Selected office bearers, cell leads and
                working-group members for the academic session.
              </p>

              <p className="team-official-note">
                Official team selection · Academic Session{" "}
                {branchInfo.academicSession} · Notice dated{" "}
                {branchInfo.selectionNoticeDate}
              </p>

            </div>

          </div>


          {/* --------------------------------------------------
              LEADERSHIP
          -------------------------------------------------- */}

          <div className="team-subheading">

            <p className="eyebrow">
              LEADERSHIP
            </p>

            <h3>
              Branch leadership.
            </h3>

          </div>


          <div className="leadership-card-grid">

            {leadership.map((person) => {

              const image = getProfileImage(
                person.name
              );

              return (
                <article
                  className="team-person-card leadership-card"
                  key={person.name}
                >

                  {/* PROFILE IMAGE */}

                  <div className="person-image">

                    {image ? (
                      <img
                        src={image}
                        alt={`${person.name} profile`}
                      />
                    ) : (
                      <span>
                        {person.name
                          .split(" ")
                          .map((n) => n[0])
                          .slice(0, 2)
                          .join("")}
                      </span>
                    )}

                  </div>


                  <div>

                    <h3>
                      {person.name}
                    </h3>

                    <p>
                      {person.role}
                    </p>

                    <span>
                      IEEE STB ZHCET · AMU
                    </span>

                  </div>

                </article>
              );
            })}

          </div>


          {/* --------------------------------------------------
              CELL LEADS
          -------------------------------------------------- */}

          <div className="team-subheading">

            <p className="eyebrow">
              CELL LEADS
            </p>

            <h3>
              Leads across the branch.
            </h3>

          </div>


          <div className="lead-card-grid">

            {cellLeads.map((person) => {

              const image = getProfileImage(
                person.name
              );

              return (
                <article
                  className="team-person-card"
                  key={person.name}
                >

                  {/* PROFILE IMAGE */}

                  <div className="person-image">

                    {image ? (
                      <img
                        src={image}
                        alt={`${person.name} profile`}
                      />
                    ) : (
                      <span>
                        {person.name
                          .split(" ")
                          .map((n) => n[0])
                          .slice(0, 2)
                          .join("")}
                      </span>
                    )}

                  </div>


                  <div>

                    <h3>
                      {person.name}
                    </h3>

                    <p>
                      {person.role}
                    </p>

                    <span>
                      {person.role.replace(
                        " Lead",
                        ""
                      )}
                    </span>

                  </div>


                  <ArrowUpRight
                    className="card-arrow"
                    size={17}
                  />

                </article>
              );
            })}

          </div>


          {/* --------------------------------------------------
              TEAM MEMBERS
          -------------------------------------------------- */}

          <div className="team-subheading">

            <p className="eyebrow">
              TEAM MEMBERS
            </p>

            <h3>
              Working together across cells.
            </h3>

          </div>


          <div className="member-card-grid">

            {teams
              .flatMap((team) =>
                team.members.map(
                  (member) => ({
                    member,
                    cell: team.name,
                  })
                )
              )
              .map(({ member, cell }) => {

                const image =
                  getProfileImage(member);

                return (
                  <button
                    className="team-person-card member-card"
                    key={`${cell}-${member}`}
                    type="button"
                  >

                    {/* PROFILE IMAGE */}

                    <div className="person-image">

                      {image ? (
                        <img
                          src={image}
                          alt={`${member} profile`}
                        />
                      ) : (
                        <span>
                          {member
                            .split(" ")
                            .map((n) => n[0])
                            .slice(0, 2)
                            .join("")}
                        </span>
                      )}

                    </div>


                    <div>

                      <h3>
                        {member}
                      </h3>

                      <p>
                        Cell Member
                      </p>

                      <span>
                        {cell}
                      </span>

                    </div>


                    <ArrowUpRight
                      className="card-arrow"
                      size={17}
                    />

                  </button>
                );
              })}

          </div>


          {/* --------------------------------------------------
              ALL TEAM / LEAD ONLY CELLS
          -------------------------------------------------- */}

          

        </section>


        {/* ====================================================
            EVENTS
        ==================================================== */}

        <section
          className="events-section section-block"
          id="events"
        >

          <div className="section-heading split-heading">

            <div>

              <p className="eyebrow">
                EVENTS & ACTIVITIES
              </p>

              <h2>
                Learn. Build. Compete.
              </h2>

            </div>

            <p className="section-intro">
              Event cards now show the key details at a
              glance — including date and venue — while the
              full card opens for more information.
            </p>

          </div>


          <div className="event-grid">

            {events.map((event) => (

              <button
                className="event-card"
                key={event.number}
                type="button"
                onClick={() =>
                  setSelectedEvent(event)
                }
                aria-label={`View details for ${event.title}`}
              >

                <div className="event-topline">
                  <span>{event.category}</span>
                  <span>{event.status}</span>
                </div>


                {event.image ? (
                  <div className="event-thumb">
                    <img
                      src={event.image}
                      alt=""
                    />
                  </div>
                ) : (
                  <div className="event-icon">
                    <CalendarDays size={20} />
                  </div>
                )}


                <h3>
                  {event.title}
                </h3>

                <p className="event-description">
                  {event.description}
                </p>


                <div className="event-meta">

                  <span>
                    <CalendarDays size={14} />
                    {event.date}
                  </span>

                  <span>
                    <MapPin size={14} />
                    {event.location}
                  </span>

                </div>


                <div className="event-footer">

                  <span>
                    View details
                  </span>

                  <ArrowUpRight size={16} />

                </div>

              </button>

            ))}

          </div>

        </section>


        {/* ====================================================
            IEEE WEEK
        ==================================================== */}

        <section
          className="ieee-preview section-block"
          id="ieee-week"
        >

          <div className="ieee-preview-copy">

            <p className="eyebrow">
              TECHFIEEEEST ’26
            </p>

            <h2>
              IEEE Week at ZHCET.
            </h2>

            <p>
              A week of technical, creative and community
              activities. The schedule below is kept editable
              so confirmed venues and details can be updated
              later.
            </p>

            <img
              className="techfieeesta-banner"
              src="/branding/techfieeesta-banner.jpg"
              alt="IEEE Studios TECHFIEEEESTA banner"
            />

          </div>


          <div className="schedule-card">

            {techFiestaSchedule.map(
              ([date, title, venue]) => (

                <div
                  className="schedule-row"
                  key={`${date}-${title}`}
                >

                  <strong>
                    {date}
                  </strong>

                  <span>
                    {title}
                  </span>

                  <small>
                    {venue}
                  </small>

                </div>

              )
            )}

          </div>

        </section>


        {/* ====================================================
            MEMBERSHIP
        ==================================================== */}

        <section
          className="next-section"
          id="membership"
        >

          <p className="eyebrow">
            MEMBERSHIP
          </p>

          <h2>
            IEEE Membership.
          </h2>

          <p>
            Membership information, benefits and registration
            guidance will be added here.
          </p>

        </section>


        {/* ====================================================
            GALLERY
        ==================================================== */}

        <section
          className="next-section"
          id="gallery"
        >

          <p className="eyebrow">
            GALLERY
          </p>

          <h2>
            Moments from the branch.
          </h2>

          <p>
            The gallery will be populated with verified
            Student Branch images once the original gallery
            assets are available.
          </p>

        </section>


        {/* ====================================================
            CONTACT
        ==================================================== */}

        <section
          className="contact-section section-block"
          id="contact"
        >

          <div className="section-heading">

            <p className="eyebrow">
              CONTACT & SOCIALS
            </p>

            <h2>
              Stay connected with IEEE STB ZHCET.
            </h2>

          </div>


          <div className="contact-grid">

            <div className="contact-copy">

              <p>
                Follow the official IEEE Student Branch,
                AMU profiles for announcements, events,
                workshops and community updates.
              </p>


              <div className="contact-note">

                <MapPin size={18} />

                <span>
                  Zakir Husain College of Engineering &
                  Technology, Aligarh Muslim University
                </span>

              </div>

            </div>


            <div className="social-grid">

              {socialLinks.map((social) => (

                <a
                  className="social-card"
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                >

                  <div
                    className={`social-icon social-icon-${social.name.toLowerCase()}`}
                  >
                    <SocialBrandIcon
                      name={social.name}
                    />
                  </div>


                  <div>

                    <strong>
                      {social.name}
                    </strong>

                    <span>
                      {social.handle}
                    </span>

                  </div>


                  <ExternalLink size={16} />

                </a>

              ))}

            </div>

          </div>

        </section>

      </main>


      {/* ======================================================
          EVENT MODAL
      ====================================================== */}

      {selectedEvent && (

        <div
          className="event-modal-backdrop"
          role="presentation"
          onClick={() =>
            setSelectedEvent(null)
          }
        >

          <div
            className="event-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="event-modal-title"
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            <button
              className="modal-close"
              type="button"
              onClick={() =>
                setSelectedEvent(null)
              }
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
              >

                <img
                  src={selectedEvent.image}
                  alt={`${selectedEvent.title} poster`}
                />

                <span className="poster-zoom-hint">
                  CLICK TO VIEW LARGER
                </span>

              </button>

            )}


            <div className="modal-content">

              <p className="eyebrow">
                {selectedEvent.category}
              </p>

              <h2 id="event-modal-title">
                {selectedEvent.title}
              </h2>


              <div className="modal-meta">

                <span>
                  <CalendarDays size={15} />
                  {selectedEvent.date}
                </span>

                <span>
                  <MapPin size={15} />
                  {selectedEvent.location}
                </span>

              </div>


              <p className="modal-description">
                {selectedEvent.description}
              </p>


              <div className="modal-details">

                {selectedEvent.details?.map(
                  (detail) => (

                    <div key={detail}>

                      <CheckCircle2 size={16} />

                      <span>
                        {detail}
                      </span>

                    </div>

                  )
                )}

              </div>


              {selectedEvent.registrationUrl && (

                <a
                  className="button primary modal-register"
                  href={selectedEvent.registrationUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Register for this event
                  <ArrowUpRight size={17} />
                </a>

              )}


              {selectedEvent.sourceNote && (

                <p className="source-note">
                  {selectedEvent.sourceNote}
                </p>

              )}

            </div>

          </div>

        </div>

      )}


      {/* ======================================================
          IMAGE LIGHTBOX
      ====================================================== */}

      {lightboxImage && (

        <div
          className="image-lightbox"
          role="presentation"
          onClick={() =>
            setLightboxImage(null)
          }
        >

          <button
            className="lightbox-close"
            type="button"
            onClick={() =>
              setLightboxImage(null)
            }
            aria-label="Close image viewer"
          >
            <X size={22} />
            <span>Close</span>
          </button>


          <div
            className="lightbox-frame"
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            <img
              src={lightboxImage.src}
              alt={lightboxImage.alt}
            />

          </div>


          <span className="lightbox-caption">
            Click outside or use Close to return
          </span>

        </div>

      )}

    </div>
  );
}


// ============================================================
// REACT ROOT
// ============================================================

createRoot(
  document.getElementById("root")
).render(
  <AppErrorBoundary>
    <App />
  </AppErrorBoundary>
);