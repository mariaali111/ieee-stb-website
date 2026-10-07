import { ArrowUpRight, CalendarDays, MapPin } from "lucide-react";
import { events } from "../data/events";

export default function Events({ onSelectEvent }) {
  return (
    <section className="events-section section-block" id="events">
      <div className="section-heading split-heading">
        <div>
          <p className="eyebrow">EVENTS & ACTIVITIES</p>
          <h2>Learn. Build. Compete.</h2>
        </div>

        <p className="section-intro">
          Events conducted by IEEE AMU throughout the year.        
        </p>
      </div>

      <div className="event-grid">
        {events.map((event) => (
          <button
            className="event-card"
            key={event.number}
            type="button"
            onClick={() => onSelectEvent(event)}
            aria-label={`View details for ${event.title}`}
          >
            <div className="event-topline">
              <span>{event.category}</span>
              <span>{event.status}</span>
            </div>

            {event.image ? (
              <div className="event-thumb">
                <img src={event.image} alt="" />
              </div>
            ) : (
              <div className="event-icon">
                <CalendarDays size={20} />
              </div>
            )}

            <h3>{event.title}</h3>
            <p className="event-description">{event.description}</p>

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
              <span>View details</span>
              <ArrowUpRight size={16} />
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
