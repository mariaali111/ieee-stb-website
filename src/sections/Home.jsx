import { ArrowRight, ArrowUpRight } from "lucide-react";
import { homeData, announcements } from "../data/home";

export default function Home({ goTo }) {
  return (
    <>
      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-content">
          <p className="eyebrow">{homeData.eyebrow}</p>

          <h1>
            {homeData.titleLine1}
            <span>{homeData.titleLine2}</span>
          </h1>

          <p className="hero-description">{homeData.description}</p>

          <div className="hero-actions">
            <a className="button primary" href="#events" onClick={() => goTo("#events")}>
              Explore events
              <ArrowUpRight size={17} />
            </a>
            <a className="button secondary" href="#about" onClick={() => goTo("#about")}>
              Discover IEEE
            </a>
          </div>

          <div className="hero-meta">
            <span>
              <i />
              {homeData.session}
            </span>
            <span>{homeData.branchTag}</span>
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

      {/* ANNOUNCEMENTS */}
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
    </>
  );
}
