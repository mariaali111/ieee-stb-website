import { ArrowLeft, CalendarDays, MapPin } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { events } from "../data/events";

export default function EventDetails() {
  const { slug } = useParams();
  const event = events.find((item) => item.slug === slug);

  if (!event) {
    return (
      <section className="site-container py-24">
        <p className="text-sm text-white/50">Event not found.</p>
        <Link to="/events" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#51b1e5]"><ArrowLeft size={16} /> Back to events</Link>
      </section>
    );
  }

  return (
    <section className="hero-grid relative overflow-hidden">
      <div className="hero-glow pointer-events-none absolute inset-0" />
      <div className="site-container relative z-10 py-20 sm:py-24">
        <Link to="/events" className="inline-flex items-center gap-2 text-sm font-semibold text-white/50 transition hover:text-white"><ArrowLeft size={16} /> All events</Link>
        <div className="mt-10 max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[.25em] text-[#51b1e5]">{event.category}</p>
          <h1 className="mt-5 text-4xl font-semibold tracking-[-.04em] text-white sm:text-5xl">{event.title}</h1>
          <div className="mt-6 flex flex-wrap gap-5 text-sm text-white/45">
            <span className="flex items-center gap-2"><CalendarDays size={16} /> {event.date}</span>
            <span className="flex items-center gap-2"><MapPin size={16} /> {event.location}</span>
          </div>
          <p className="mt-8 text-base leading-8 text-white/55">{event.description}</p>
          <p className="mt-5 text-sm leading-7 text-white/35">This is a dummy event page for the prototype. Replace it with final event details, registration information and photos later.</p>
        </div>
      </div>
    </section>
  );
}
