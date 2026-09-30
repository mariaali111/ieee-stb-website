import React, { useEffect } from 'react';
import { EventModel } from '../types/event';
import { X, Calendar, Clock, MapPin, Shield, Sparkles, User, Award, CheckCircle2, Phone, Mail } from 'lucide-react';

interface EventDetailsProps {
  event: EventModel | null;
  onClose: () => void;
  onOpenRegisterModal: (event: EventModel) => void;
}

export const EventDetails: React.FC<EventDetailsProps> = ({
  event,
  onClose,
  onOpenRegisterModal,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (event) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [event, onClose]);

  if (!event) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl overflow-y-auto animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="event-details-title"
    >
      <div className="relative w-full max-w-4xl my-8 bg-cosmic-950 rounded-2xl border border-white/15 shadow-2xl overflow-hidden glass-panel">
        
        {/* Header Artwork Banner */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-black">
          <img
            src={event.poster}
            alt={event.name}
            className="w-full h-full object-cover object-center opacity-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-cosmic-950 via-cosmic-950/50 to-transparent"></div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-gray-300 hover:text-white hover:bg-crimson-700/80 transition-colors focus:outline-none focus:ring-2 focus:ring-crimson-600"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Badges Overlay */}
          <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-md bg-crimson-800 text-white font-mono text-xs font-bold uppercase tracking-wider border border-crimson-500">
              DAY 0{event.day}
            </span>
            <span className="px-3 py-1 rounded-md bg-cosmic-900/90 text-gray-300 font-mono text-xs uppercase tracking-wider border border-white/10">
              {event.category}
            </span>
            {event.isArtEvent && (
              <span className="px-3 py-1 rounded-md bg-rose-950/90 text-crimson-300 font-mono text-xs font-bold uppercase tracking-wider border border-crimson-500/60 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-crimson-400" />
                Art & Creative Feature
              </span>
            )}
          </div>
        </div>

        {/* Details Content Container */}
        <div className="p-6 sm:p-8 max-h-[70vh] overflow-y-auto space-y-6">
          <div>
            <h2 id="event-details-title" className="font-display font-extrabold text-2xl sm:text-4xl text-white">
              {event.name}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-gray-300 leading-relaxed">
              {event.description}
            </p>
          </div>

          {/* Quick Schedule Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-xl bg-cosmic-900/80 border border-white/10 font-mono text-xs text-gray-300">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-crimson-400" />
              <div>
                <div className="text-gray-500 uppercase text-[10px]">Date</div>
                <div>{event.date}</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-crimson-400" />
              <div>
                <div className="text-gray-500 uppercase text-[10px]">Timing</div>
                <div>{event.time}</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-crimson-400" />
              <div>
                <div className="text-gray-500 uppercase text-[10px]">Venue</div>
                <div className="truncate">{event.venue}</div>
              </div>
            </div>
          </div>

          {/* Dedicated Art Event Details Block */}
          {event.isArtEvent && event.artDetails && (
            <div className="p-5 rounded-xl bg-gradient-to-r from-crimson-950/40 via-cosmic-900 to-crimson-950/40 border border-crimson-600/40 space-y-3">
              <div className="flex items-center gap-2 text-crimson-400 font-mono text-xs uppercase font-bold tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>Creative & Art Event Specifications</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-gray-300">
                <div>
                  <strong className="text-white block font-mono">Art Theme:</strong>
                  {event.artDetails.theme}
                </div>
                <div>
                  <strong className="text-white block font-mono">Accepted Mediums:</strong>
                  {event.artDetails.allowedMediums?.join(', ')}
                </div>
                <div>
                  <strong className="text-white block font-mono">Submission Specs:</strong>
                  {event.artDetails.submissionFormat}
                </div>
                <div>
                  <strong className="text-white block font-mono">Curator Note:</strong>
                  {event.artDetails.artistFeaturedNote}
                </div>
              </div>
            </div>
          )}

          {/* Rules & Eligibility */}
          <div className="space-y-3">
            <h3 className="font-display font-bold text-lg text-white flex items-center gap-2">
              <Shield className="w-4 h-4 text-crimson-400" />
              Rules & Guidelines
            </h3>
            <ul className="space-y-2">
              {event.rules.map((rule, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-crimson-500 flex-shrink-0 mt-0.5" />
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Organizer & Contact Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10 text-xs">
            <div>
              <div className="font-mono text-gray-500 uppercase">Organizing Society</div>
              <div className="font-semibold text-white mt-0.5">{event.organizer}</div>
              <div className="font-mono text-gray-400 mt-1">Eligibility: {event.eligibility}</div>
            </div>
            {event.contactPerson && (
              <div>
                <div className="font-mono text-gray-500 uppercase">Event Contact</div>
                <div className="font-semibold text-white mt-0.5">{event.contactPerson.name} ({event.contactPerson.role})</div>
                <div className="flex items-center gap-3 text-gray-400 mt-1 font-mono">
                  <span className="flex items-center gap-1"><Phone className="w-3 h-3 text-crimson-400" /> {event.contactPerson.phone}</span>
                  <span className="flex items-center gap-1"><Mail className="w-3 h-3 text-crimson-400" /> {event.contactPerson.email}</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Modal Footer CTA */}
        <div className="p-6 bg-cosmic-900/90 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs font-mono text-gray-400">
            Registration Deadline: <strong className="text-white">{event.registrationDeadline}</strong>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-1/2 sm:w-auto px-5 py-2.5 rounded-xl border border-white/15 text-xs font-mono text-gray-300 hover:text-white"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenRegisterModal(event);
              }}
              className="w-1/2 sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-crimson-700 via-crimson-600 to-crimson-800 text-white font-display font-bold text-xs uppercase tracking-wider border border-crimson-500 shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:shadow-[0_0_30px_rgba(220,38,38,0.8)]"
            >
              Register For Event
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
