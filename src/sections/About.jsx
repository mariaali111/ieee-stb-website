import { ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";
import { aboutData, ieeeCommunities } from "../data/about";

export default function About() {
  return (
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
            <span>MISSION</span>
          </div>

          <div className="mission-list">
            {aboutData.mission.map((item, index) => (
              <div className="mission-item" key={item}>
                <span>0{index + 1}</span>
                <h3>{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="info-note">
        <CheckCircle2 size={18} />
        <p>{aboutData.note}</p>
      </div>

      <div className="about-subheading">
        <p className="eyebrow">IEEE COMMUNITIES</p>
        <h3>Different communities. One IEEE ecosystem.</h3>
      </div>

      <div className="community-grid">
        {ieeeCommunities.map((community) => (
          <article className="community-card" key={community.title}>
            <img src={community.short} alt={community.title} className="item-logo"/>
            <h3>{community.title}</h3>
            <p>{community.text}</p>

            {community.link && (
              <a href={community.link} target="_blank" rel="noreferrer">
                Visit community
                <ArrowUpRight size={15} />
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
