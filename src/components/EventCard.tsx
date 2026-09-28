import { ArrowUpRight, CalendarDays, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import type { EventItem } from "../types";

type Props = { event: EventItem; index?: number };

export default function EventCard({ event, index = 1 }: Props) {
  return (
    <article className="soft-lift flex h-full flex-col overflow-hidden rounded-xl border border-white/10 bg-[#0c1015] transition duration-300 hover:border-[#0088cc]/30">
      <div className="event-visual relative flex h-44 items-end border-b border-white/10 p-5">
        <span className="absolute right-5 top-5 text-xs font-medium tracking-[.2em] text-white/20">0{index}</span>
        <span className="rounded-full border border-[#0088cc]/20 bg-[#00629b]/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[.15em] text-[#63bce9]">{event.category}</span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold tracking-[-.02em] text-white">{event.title}</h3>
        <div className="mt-4 flex flex-col gap-2 text-xs text-white/40">
          <div className="flex items-center gap-2"><CalendarDays size={14} /><span>{event.date}</span></div>
          <div className="flex items-center gap-2"><MapPin size={14} /><span>{event.location}</span></div>
        </div>
        <p className="mt-5 flex-1 text-sm leading-6 text-white/45">{event.description}</p>
        <Link to={`/events/${event.slug}`} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#51b1e5] transition hover:text-[#79ccf3]">View Event <ArrowUpRight size={16} /></Link>
      </div>
    </article>
  );
}
