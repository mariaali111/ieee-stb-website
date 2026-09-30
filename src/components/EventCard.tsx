import React from 'react';
import { EventModel } from '../types/event';
import { Calendar, Clock, MapPin, Sparkles, User, ChevronRight, Award } from 'lucide-react';

interface EventCardProps {
  event: EventModel;
  onSelectEvent: (event: EventModel) => void;
  onRegister: (event: EventModel) => void;
}

export const EventCard: React.FC<EventCardProps> = ({ event, onSelectEvent, onRegister }) => {
  return (
    <div
      className={`group relative rounded-2xl overflow-hidden transition-all duration-300 transform hover:-translate-y-1 ${
        event.isArtEvent
          ? 'bg-gradient-to-b from-cosmic-850 via-crimson-950/20 to-cosmic-950 border border-crimson-600/40 hover:border-crimson-500 shadow-[0_0_20px_rgba(220,38,38,0.15)] hover:shadow-[0_0_35px_rgba(220,38,38,0.35)]'
          : 'bg-cosmic-900/90 border border-white/10 hover:border-white/25 shadow-xl hover:shadow-2xl'
      }`}
    >
      {/* Top Banner Accent */}
      <div
        className={`h-1.5 w-full ${
          event.isArtEvent
            ? 'bg-gradient-to-r from-crimson-600 via-rose-500 to-crimson-800'
            : 'bg-gradient-to-r from-metallic-600 via-crimson-600 to-metallic-800'
        }`}
      ></div>

      {/* Poster / Artwork Header Image */}
      <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-black">
        <img
          src={event.poster}
          alt={event.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cosmic-950 via-cosmic-950/40 to-transparent"></div>

        {/* Day Badge */}
        <div className="absolute top-3 left-3 px-3 py-1 rounded-md bg-cosmic-950/90 backdrop-blur-md border border-white/15 text-white font-mono text-xs font-bold uppercase tracking-wider shadow-lg flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-crimson-500"></span>
          DAY 0{event.day}
        </div>

        {/* Art Event Special Badge */}
        {event.isArtEvent && (
          <div className="absolute top-3 right-3 px-3 py-1 rounded-md bg-crimson-950/90 backdrop-blur-md border border-crimson-500/60 text-crimson-300 font-mono text-[11px] font-bold uppercase tracking-wider shadow-lg flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-crimson-400 animate-pulse" />
            Art Showcase
          </div>
        )}

        {/* Category Badge */}
        {!event.isArtEvent && (
          <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md text-gray-300 font-mono text-[11px] font-medium uppercase tracking-wider">
            {event.category}
          </div>
        )}
      </div>

      {/* Card Content Body */}
      <div className="p-5 sm:p-6 flex flex-col justify-between flex-1">
        <div>
          {/* Date & Time */}
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-gray-400 mb-3">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-crimson-400" />
              {event.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-gray-500" />
              {event.time}
            </span>
          </div>

          {/* Event Title */}
          <h3
            onClick={() => onSelectEvent(event)}
            className="font-display font-bold text-lg sm:text-xl text-white group-hover:text-crimson-400 transition-colors cursor-pointer leading-snug line-clamp-2"
          >
            {event.name}
          </h3>

          {/* Description */}
          <p className="mt-2 text-xs sm:text-sm text-gray-300 line-clamp-2 leading-relaxed">
            {event.description}
          </p>

          {/* Venue & Organizer Details */}
          <div className="mt-4 pt-3 border-t border-white/10 space-y-1.5 text-xs text-gray-400">
            <div className="flex items-center gap-1.5 text-gray-300">
              <MapPin className="w-3.5 h-3.5 text-crimson-400 flex-shrink-0" />
              <span className="truncate">{event.venue}</span>
            </div>
            <div className="flex items-center gap-1.5 text-gray-400">
              <User className="w-3.5 h-3.5 text-gray-500 flex-shrink-0" />
              <span className="truncate">{event.organizer}</span>
            </div>
            {event.prizes && (
              <div className="flex items-center gap-1.5 text-amber-400 font-mono text-[11px]">
                <Award className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                <span className="truncate">{event.prizes}</span>
              </div>
            )}
          </div>
        </div>

        {/* Card Footer Actions */}
        <div className="mt-6 flex items-center justify-between gap-3 pt-3 border-t border-white/10">
          <button
            onClick={() => onSelectEvent(event)}
            className="text-xs font-mono text-gray-300 hover:text-white flex items-center gap-1 group/btn transition-colors focus:outline-none"
          >
            View Details
            <ChevronRight className="w-3.5 h-3.5 text-crimson-400 group-hover/btn:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => onRegister(event)}
            className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all duration-200 flex items-center gap-1.5 ${
              event.isArtEvent
                ? 'bg-crimson-800 hover:bg-crimson-700 text-white border border-crimson-500 shadow-[0_0_12px_rgba(220,38,38,0.3)]'
                : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
            }`}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};
