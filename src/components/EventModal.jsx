import { ArrowUpRight, CalendarDays, CheckCircle2, MapPin, X } from "lucide-react";

export default function EventModal({ event, onClose, onOpenImage }) {
  if (!event) return null;

  return (
    <div className="event-modal-backdrop" role="presentation" onClick={onClose}>
      <div
        className="event-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="event-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" type="button" onClick={onClose} aria-label="Close event details">
          <X size={20} />
        </button>

        {event.image && (
          <button
            className="modal-poster"
            type="button"
            onClick={() => onOpenImage({ src: event.image, alt: `${event.title} poster` })}
          >
            <img src={event.image} alt={`${event.title} poster`} />
            <span className="poster-zoom-hint">CLICK TO VIEW LARGER</span>
          </button>
        )}

        <div className="modal-content">
          <p className="eyebrow">{event.category}</p>
          <h2 id="event-modal-title">{event.title}</h2>

          <div className="modal-meta">
            <span>
              <CalendarDays size={15} />
              {event.date}
            </span>
            <span>
              <MapPin size={15} />
              {event.location}
            </span>
          </div>

          <p className="modal-description">{event.description}</p>

          <div className="modal-details">
            {event.details?.map((detail) => (
              <div key={detail}>
                <CheckCircle2 size={16} />
                <span>{detail}</span>
              </div>
            ))}
          </div>

          {event.registrationUrl && (
            <a
              className="button primary modal-register"
              href={event.registrationUrl}
              target="_blank"
              rel="noreferrer"
            >
              Register for this event
              <ArrowUpRight size={17} />
            </a>
          )}

          {event.sourceNote && <p className="source-note">{event.sourceNote}</p>}
        </div>
      </div>
    </div>
  );
}
