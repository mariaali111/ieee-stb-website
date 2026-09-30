import React, { useState } from 'react';
import { EventModel } from '../types/event';
import { Sparkles, Maximize2, ExternalLink, Calendar, Info, Layers, Eye } from 'lucide-react';

interface ArtGalleryProps {
  events: EventModel[];
  onSelectEvent: (event: EventModel) => void;
  onRegisterEvent: (event: EventModel) => void;
}

export const ArtGallery: React.FC<ArtGalleryProps> = ({
  events,
  onSelectEvent,
  onRegisterEvent,
}) => {
  // Filter all events where isArtEvent is true or category is Creative & Art
  const artEvents = events.filter((ev) => ev.isArtEvent || ev.category === 'Creative & Art');
  const [activeArtIndex, setActiveArtIndex] = useState(0);
  const [previewModalUrl, setPreviewModalUrl] = useState<string | null>(null);

  if (artEvents.length === 0) return null;

  const activeEvent = artEvents[activeArtIndex] || artEvents[0];

  return (
    <section id="art-gallery" className="py-20 relative bg-gradient-to-b from-cosmic-950 via-cosmic-900 to-cosmic-950 border-t border-crimson-900/40">
      {/* Background Radial Sci-Fi Crimson Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-radial-gradient from-crimson-900/15 to-transparent blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-crimson-950/80 border border-crimson-600/50 text-crimson-400 font-mono text-xs uppercase tracking-widest mb-3 shadow-[0_0_15px_rgba(220,38,38,0.3)]">
            <Sparkles className="w-3.5 h-3.5 text-crimson-400 animate-pulse" />
            <span>Creative & Visual Art Showcase</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white uppercase tracking-tight">
            THE DIGITAL <span className="text-crimson-500">COSMOS GALLERY</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-300 font-sans">
            Explore futuristic 3D renders, generative art masterclasses, shader design, and visual concept competitions featured throughout IEEE Week.
          </p>
        </div>

        {/* Featured Main Art Showcase Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-3xl bg-cosmic-950/80 border border-crimson-600/40 p-6 sm:p-8 shadow-[0_0_40px_rgba(220,38,38,0.15)] glass-panel-crimson mb-12">
          
          {/* Large Artwork Preview Frame */}
          <div className="lg:col-span-7 relative group rounded-2xl overflow-hidden bg-black aspect-video sm:aspect-[16/10] border border-white/10 shadow-2xl">
            <img
              src={activeEvent.artDetails?.galleryPreviewUrl || activeEvent.poster}
              alt={activeEvent.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cosmic-950 via-transparent to-transparent opacity-80"></div>

            {/* Hover Actions */}
            <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 backdrop-blur-xs">
              <button
                onClick={() => setPreviewModalUrl(activeEvent.artDetails?.galleryPreviewUrl || activeEvent.poster)}
                className="p-3 rounded-full bg-cosmic-900 border border-white/20 text-white hover:bg-crimson-700 transition-colors shadow-lg"
                aria-label="Enlarge image preview"
              >
                <Maximize2 className="w-5 h-5" />
              </button>
            </div>

            {/* Day Badge */}
            <div className="absolute top-4 left-4 px-3 py-1 rounded-md bg-black/80 backdrop-blur-md border border-crimson-500 text-white font-mono text-xs font-bold uppercase tracking-wider">
              DAY 0{activeEvent.day} ARTWORK
            </div>
          </div>

          {/* Artwork Info & Registration Panel */}
          <div className="lg:col-span-5 space-y-5">
            <div className="inline-block px-3 py-1 rounded-md bg-crimson-950 border border-crimson-700 text-crimson-400 font-mono text-xs uppercase tracking-wider">
              {activeEvent.category}
            </div>

            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white leading-tight">
              {activeEvent.name}
            </h3>

            <p className="text-sm text-gray-300 leading-relaxed">
              {activeEvent.description}
            </p>

            {/* Art Specific Details */}
            {activeEvent.artDetails && (
              <div className="space-y-2 p-4 rounded-xl bg-cosmic-900/90 border border-white/10 text-xs font-mono text-gray-300">
                <div>
                  <strong className="text-crimson-400 uppercase">Theme: </strong>
                  {activeEvent.artDetails.theme}
                </div>
                <div>
                  <strong className="text-crimson-400 uppercase">Mediums: </strong>
                  {activeEvent.artDetails.allowedMediums?.join(', ')}
                </div>
                <div>
                  <strong className="text-crimson-400 uppercase">Format: </strong>
                  {activeEvent.artDetails.submissionFormat}
                </div>
              </div>
            )}

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onRegisterEvent(activeEvent)}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-crimson-700 via-crimson-600 to-crimson-800 text-white font-display font-bold text-xs uppercase tracking-wider border border-crimson-500 shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:shadow-[0_0_30px_rgba(220,38,38,0.8)] transition-all"
              >
                Submit Art / Register
              </button>

              <button
                onClick={() => onSelectEvent(activeEvent)}
                className="px-5 py-3 rounded-xl bg-cosmic-900 border border-white/15 hover:border-white/30 text-white text-xs font-mono flex items-center gap-1.5"
              >
                <Info className="w-3.5 h-3.5 text-crimson-400" />
                View Rulebook
              </button>
            </div>
          </div>
        </div>

        {/* Gallery Selection Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {artEvents.map((artEv, idx) => {
            const isSelected = idx === activeArtIndex;
            return (
              <div
                key={artEv.id}
                onClick={() => setActiveArtIndex(idx)}
                className={`group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 border ${
                  isSelected
                    ? 'border-crimson-500 bg-crimson-950/40 shadow-[0_0_25px_rgba(220,38,38,0.3)] scale-[1.02]'
                    : 'border-white/10 bg-cosmic-900/60 hover:border-crimson-600/50'
                }`}
              >
                <div className="h-40 w-full overflow-hidden bg-black relative">
                  <img
                    src={artEv.artDetails?.galleryPreviewUrl || artEv.poster}
                    alt={artEv.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cosmic-950 via-transparent to-transparent"></div>
                  <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded bg-black/80 font-mono text-[10px] text-white">
                    DAY 0{artEv.day}
                  </div>
                </div>

                <div className="p-4 space-y-1">
                  <div className="font-mono text-[10px] text-crimson-400 uppercase tracking-widest">
                    {artEv.category}
                  </div>
                  <h4 className="font-display font-bold text-sm text-white truncate">
                    {artEv.name}
                  </h4>
                  <p className="text-xs text-gray-400 line-clamp-1">
                    {artEv.artDetails?.theme || artEv.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Lightbox Modal for Large Image Preview */}
        {previewModalUrl && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            onClick={() => setPreviewModalUrl(null)}
          >
            <div className="relative max-w-5xl max-h-[90vh] overflow-hidden rounded-2xl border border-white/20">
              <img src={previewModalUrl} alt="Artwork Large Preview" className="w-full h-auto max-h-[85vh] object-contain" />
              <button
                onClick={() => setPreviewModalUrl(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/80 text-white"
              >
                <Maximize2 className="w-5 h-5 rotate-45" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
