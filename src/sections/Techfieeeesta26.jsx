import { techfieeeestaData, techFiestaSchedule } from "../data/techfieeeesta26";

export default function Techfieeeesta26() {
  return (
    <section className="ieee-preview section-block" id="ieee-week">
      <div className="ieee-preview-copy">
        <p className="eyebrow">{techfieeeestaData.eyebrow}</p>
        <h2>{techfieeeestaData.title}</h2>
        <p>{techfieeeestaData.text}</p>

        <img
          className="TECHFIEEEESTA-banner"
          src={techfieeeestaData.bannerSrc}
          alt={techfieeeestaData.bannerAlt}
        />
      </div>

      <div className="schedule-card">
        {techFiestaSchedule.map(([date, title, venue]) => (
          <div className="schedule-row" key={`${date}-${title}`}>
            <strong>{date}</strong>
            <span>{title}</span>
            <small>{venue}</small>
          </div>
        ))}
      </div>
    </section>
  );
}
