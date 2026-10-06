import { techfieeestData, techFiestaSchedule } from "../data/techfieeest26";

export default function Techfieeest26() {
  return (
    <section className="ieee-preview section-block" id="ieee-week">
      <div className="ieee-preview-copy">
        <p className="eyebrow">{techfieeestData.eyebrow}</p>
        <h2>{techfieeestData.title}</h2>
        <p>{techfieeestData.text}</p>

        <img
          className="techfieeesta-banner"
          src={techfieeestData.bannerSrc}
          alt={techfieeestData.bannerAlt}
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
