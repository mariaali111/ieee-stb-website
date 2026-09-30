import React, { useState } from 'react';
import { EventModel, EventCategory } from '../types/event';
import { EventCard } from './EventCard';
import { CategoryFilter } from './CategoryFilter';
import { Calendar, Filter, Sparkles } from 'lucide-react';

interface EventTimelineProps {
  events: EventModel[];
  onSelectEvent: (event: EventModel) => void;
  onRegisterEvent: (event: EventModel) => void;
}

export const EventTimeline: React.FC<EventTimelineProps> = ({
  events,
  onSelectEvent,
  onRegisterEvent,
}) => {
  const [selectedDay, setSelectedDay] = useState<number | 'all'>('all');
  const [selectedCategory, setSelectedCategory] = useState<EventCategory>('All');

  const categories: EventCategory[] = [
    'All',
    'Technical',
    'Coding & AI',
    'Robotics',
    'Creative & Art',
    'Workshop',
    'Gaming',
    'Paper Presentation',
  ];

  // Compute category counts
  const categoryCounts: Record<string, number> = {
    All: events.length,
  };
  events.forEach((ev) => {
    categoryCounts[ev.category] = (categoryCounts[ev.category] || 0) + 1;
  });

  // Filter events by Day & Category
  const filteredEvents = events.filter((ev) => {
    const matchDay = selectedDay === 'all' || ev.day === selectedDay;
    const matchCategory = selectedCategory === 'All' || ev.category === selectedCategory;
    return matchDay && matchCategory;
  });

  return (
    <section id="timeline" className="py-20 relative bg-cosmic-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cosmic-900 border border-crimson-600/40 text-crimson-400 font-mono text-xs uppercase tracking-widest mb-3">
            <Calendar className="w-3.5 h-3.5 text-crimson-500" />
            <span>8 Days • 8 Major Events</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white uppercase tracking-tight">
            IEEE WEEK <span className="text-crimson-500">TIMELINE</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-400 font-sans">
            Filter through consecutive days or event categories to inspect schedules, rulebooks, and registration gates.
          </p>
        </div>

        {/* Day Selector Ribbon (Days 1 to 8) */}
        <div className="mb-8">
          <div className="flex items-center justify-center gap-2 overflow-x-auto py-2 no-scrollbar">
            <button
              onClick={() => setSelectedDay('all')}
              className={`px-5 py-2.5 rounded-xl font-mono text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                selectedDay === 'all'
                  ? 'bg-crimson-800 text-white border border-crimson-500 shadow-[0_0_15px_rgba(220,38,38,0.4)]'
                  : 'bg-cosmic-900/80 text-gray-400 hover:text-white border border-white/10'
              }`}
            >
              All 8 Days
            </button>

            {[1, 2, 3, 4, 5, 6, 7, 8].map((dayNum) => {
              const dayEvent = events.find((e) => e.day === dayNum);
              const isActive = selectedDay === dayNum;

              return (
                <button
                  key={dayNum}
                  onClick={() => setSelectedDay(dayNum)}
                  className={`px-4 py-2.5 rounded-xl font-mono text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap flex items-center gap-2 ${
                    isActive
                      ? 'bg-crimson-900 text-white border border-crimson-500 shadow-[0_0_15px_rgba(220,38,38,0.4)]'
                      : 'bg-cosmic-900/60 text-gray-400 hover:text-white border border-white/10'
                  }`}
                >
                  <span>DAY 0{dayNum}</span>
                  {dayEvent?.isArtEvent && (
                    <Sparkles className="w-3 h-3 text-crimson-400 animate-pulse" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Category Filter Component */}
        <div className="mb-12">
          <CategoryFilter
            categories={categories}
            activeCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            categoryCounts={categoryCounts}
          />
        </div>

        {/* Events Grid View */}
        {filteredEvents.length > 0 ? (
          <div id="events" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredEvents.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                onSelectEvent={onSelectEvent}
                onRegister={onRegisterEvent}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 px-4 rounded-2xl bg-cosmic-900/50 border border-white/10">
            <Filter className="w-10 h-10 text-crimson-500 mx-auto mb-3 animate-bounce" />
            <h3 className="font-display font-bold text-xl text-white">No Events Match Filter</h3>
            <p className="text-sm text-gray-400 mt-1">
              Try switching your active category or selecting "All 8 Days" above.
            </p>
            <button
              onClick={() => {
                setSelectedDay('all');
                setSelectedCategory('All');
              }}
              className="mt-4 px-4 py-2 rounded-lg bg-crimson-800 text-white text-xs font-mono uppercase tracking-wider"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
