import React from 'react';
import { Shield, ArrowUp, Instagram, Linkedin, Twitter, Github, Heart } from 'lucide-react';
import { SITE_CONFIG } from '../data/site';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-cosmic-950 border-t border-white/10 text-gray-400 py-12 relative overflow-hidden">
      {/* Accent Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-crimson-900/10 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-crimson-900/80 border border-crimson-600/50 flex items-center justify-center text-white">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <div className="font-display font-extrabold text-xl text-white tracking-wider">
                  IEEE <span className="text-crimson-500">WEEK</span> 2026
                </div>
                <div className="text-[11px] font-mono text-gray-400">{SITE_CONFIG.branchName}</div>
              </div>
            </div>

            <p className="text-xs text-gray-400 max-w-sm leading-relaxed">
              8 days of technical symposiums, speed coding, robotics arenas, digital art exhibitions, and paper presentations. Engineered with precision by the IEEE Student Branch.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a href={SITE_CONFIG.socials.instagram} target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-cosmic-900 border border-white/10 hover:border-crimson-500 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href={SITE_CONFIG.socials.linkedin} target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-cosmic-900 border border-white/10 hover:border-crimson-500 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href={SITE_CONFIG.socials.twitter} target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-cosmic-900 border border-white/10 hover:border-crimson-500 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
              <a href={SITE_CONFIG.socials.github} target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-cosmic-900 border border-white/10 hover:border-crimson-500 hover:text-white transition-colors" aria-label="GitHub">
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs font-mono">
              <li><a href="#hero" className="hover:text-crimson-400 transition-colors">Home</a></li>
              <li><a href="#timeline" className="hover:text-crimson-400 transition-colors">8-Day Timeline</a></li>
              <li><a href="#events" className="hover:text-crimson-400 transition-colors">All 8 Events</a></li>
              <li><a href="#art-gallery" className="hover:text-crimson-400 transition-colors">Art & Creative Gallery</a></li>
              <li><a href="#about" className="hover:text-crimson-400 transition-colors">About Student Branch</a></li>
              <li><a href="#team" className="hover:text-crimson-400 transition-colors">Leadership Committee</a></li>
            </ul>
          </div>

          {/* Legal / IEEE Notes */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
              IEEE Disclaimer & Compliance
            </h4>
            <p className="text-[11px] text-gray-400 leading-relaxed">
              IEEE and the IEEE logo are registered trademarks of the Institute of Electrical and Electronics Engineers, Inc. All event names and assets are structured placeholders for the upcoming IEEE Week.
            </p>
            <div className="p-3 rounded-lg bg-cosmic-900 border border-white/5 font-mono text-[10px] text-gray-400">
              IEEE Student Branch • All Rights Reserved © 2026
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-400">
          <div className="flex items-center gap-1">
            Designed & Engineered for IEEE Week 2026
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-cosmic-900 border border-white/10 hover:border-crimson-500 text-gray-300 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-crimson-400" />
          </button>
        </div>
      </div>
    </footer>
  );
};
