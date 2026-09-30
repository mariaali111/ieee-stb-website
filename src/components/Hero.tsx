import React from 'react';
import { Shield, Sparkles, ChevronDown, Trophy, Users, Zap, Terminal } from 'lucide-react';
import { SITE_CONFIG } from '../data/site';
import { Countdown } from './Countdown';

interface HeroProps {
  onOpenRegisterModal: () => void;
  onExploreTimeline: () => void;
  onOpenArtGallery: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenRegisterModal,
  onExploreTimeline,
  onOpenArtGallery,
}) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 flex flex-col justify-center items-center overflow-hidden bg-cosmic-950 bg-cosmic-grid"
    >
      {/* Background Radial Glow & Sci-fi Atmosphere */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[500px] bg-radial-gradient from-crimson-900/30 via-crimson-950/10 to-transparent blur-3xl pointer-events-none"></div>
      
      {/* Animated Sci-Fi Accent Energy Rings */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full border border-crimson-600/10 animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full border border-white/5 pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">
        {/* Branch Institutional Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cosmic-900/90 border border-crimson-600/40 text-crimson-400 font-mono text-xs uppercase tracking-widest mb-6 shadow-[0_0_15px_rgba(220,38,38,0.2)] animate-float">
          <Shield className="w-3.5 h-3.5 text-crimson-500" />
          <span>{SITE_CONFIG.branchName} Presents</span>
          <span className="w-1.5 h-1.5 rounded-full bg-crimson-500 animate-ping"></span>
        </div>

        {/* Hero Title */}
        <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white uppercase leading-none drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)]">
          IEEE <span className="text-transparent bg-clip-text bg-gradient-to-r from-crimson-400 via-crimson-600 to-crimson-800">WEEK</span> 2026
        </h1>

        {/* Tagline */}
        <p className="mt-4 font-display font-semibold text-lg sm:text-2xl tracking-widest text-gray-300 uppercase">
          {SITE_CONFIG.tagline}
        </p>

        {/* Hero Subtitle Narrative */}
        <p className="mt-4 max-w-3xl mx-auto text-sm sm:text-base text-gray-400 font-sans leading-relaxed">
          {SITE_CONFIG.heroSubtitle}. Join us across <strong className="text-white">8 consecutive days</strong> for <strong className="text-white">8 major events</strong>, hackathons, robotics challenges, and digital art exhibitions.
        </p>

        {/* 8-Day Countdown Timer Component */}
        <Countdown targetDate={SITE_CONFIG.startDate} />

        {/* Hero Call to Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
          <button
            onClick={onOpenRegisterModal}
            className="px-8 py-3.5 rounded-xl font-display font-bold uppercase tracking-wider text-sm text-white bg-gradient-to-r from-crimson-700 via-crimson-600 to-crimson-800 border border-crimson-500 shadow-[0_0_30px_rgba(220,38,38,0.5)] hover:shadow-[0_0_45px_rgba(220,38,38,0.9)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
          >
            <Zap className="w-4 h-4 fill-current text-white" />
            Register For IEEE Week
          </button>

          <button
            onClick={onExploreTimeline}
            className="px-6 py-3.5 rounded-xl font-display font-semibold uppercase tracking-wider text-sm text-gray-200 bg-cosmic-900/80 hover:bg-cosmic-800 border border-white/15 hover:border-crimson-600/50 hover:text-white transition-all duration-300 flex items-center gap-2 backdrop-blur-md"
          >
            <Terminal className="w-4 h-4 text-crimson-400" />
            Explore 8-Day Timeline
          </button>

          <button
            onClick={onOpenArtGallery}
            className="px-6 py-3.5 rounded-xl font-display font-semibold uppercase tracking-wider text-sm text-crimson-300 bg-crimson-950/60 hover:bg-crimson-950 border border-crimson-700/50 hover:border-crimson-500 transition-all duration-300 flex items-center gap-2 backdrop-blur-md"
          >
            <Sparkles className="w-4 h-4 text-crimson-400" />
            Art & Creative Gallery
          </button>
        </div>

        {/* IEEE Week Statistics Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto mt-14 pt-10 border-t border-white/10">
          {SITE_CONFIG.stats.map((stat, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-cosmic-900/40 border border-white/5 backdrop-blur-sm">
              <div className="font-display font-extrabold text-2xl sm:text-3xl text-white">
                {stat.prefix || ''}{stat.value}{stat.suffix || ''}
              </div>
              <div className="font-mono text-xs text-gray-400 uppercase tracking-wider mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Down Scroll Indicator */}
      <button
        onClick={onExploreTimeline}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-gray-400 hover:text-crimson-400 transition-colors p-2 focus:outline-none"
        aria-label="Scroll down to timeline"
      >
        <ChevronDown className="w-6 h-6 animate-bounce" />
      </button>
    </section>
  );
};
