import React, { useState, useEffect } from 'react';
import { Shield, Menu, X, Calendar, Sparkles, ChevronRight } from 'lucide-react';
import { SITE_CONFIG } from '../data/site';

interface NavbarProps {
  onOpenRegisterModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenRegisterModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['hero', 'timeline', 'events', 'art-gallery', 'about', 'team', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'timeline', label: '7-Day Schedule' },
    { id: 'events', label: 'Events' },
    { id: 'art-gallery', label: 'Art Gallery', isSpecial: true },
    { id: 'about', label: 'About' },
    { id: 'team', label: 'Leadership' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#050608]/90 backdrop-blur-md border-b border-white/10 shadow-2xl py-3'
          : 'bg-gradient-to-b from-[#050608]/90 via-[#050608]/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand identity */}
        <button
          onClick={() => scrollToSection('hero')}
          className="flex items-center gap-3 group text-left focus:outline-none focus:ring-2 focus:ring-crimson-600 rounded-lg p-1"
          aria-label="IEEE Week 2026 Home"
        >

          <img className="relative w-40 h-10  flex items-center justify-center shadow-[0_0_15px_rgba(220,38,38,0.4)] group-hover:shadow-[0_0_25px_rgba(220,38,38,0.8)] transition-all"src='src/assets/Logos-removebg.png'></img>
          <div>
            <div className="font-display font-extrabold tracking-wider text-lg sm:text-xl text-white flex items-center gap-1.5 leading-none">
              IEEE <span className="text-crimson-500 font-black">WEEK</span>
              <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-crimson-950/80 border border-crimson-600/40 text-crimson-400">2026</span>
            </div>
            <div className="text-[11px] font-mono text-gray-400 tracking-tight leading-tight mt-0.5">
              {SITE_CONFIG.branchName}
            </div>
          </div>
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-cosmic-900/60 p-1.5 rounded-full border border-white/10 backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 relative ${
                  isActive
                    ? 'text-white bg-crimson-900/60 border border-crimson-600/50 shadow-[0_0_12px_rgba(220,38,38,0.3)]'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.isSpecial && (
                  <Sparkles className="w-3 h-3 inline-block mr-1 text-crimson-400 animate-pulse" />
                )}
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Desktop Action CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={() => {
              if (onOpenRegisterModal) {
                onOpenRegisterModal();
              } else {
                scrollToSection('timeline');
              }
            }}
            className="relative group overflow-hidden px-5 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-crimson-700 via-crimson-600 to-crimson-800 border border-crimson-500/50 shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:shadow-[0_0_30px_rgba(220,38,38,0.8)] transition-all duration-300 active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              Register Now
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-cosmic-800/80 border border-white/10 text-gray-300 hover:text-white hover:border-crimson-600/50 transition-colors focus:outline-none focus:ring-2 focus:ring-crimson-600"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-cosmic-950/95 backdrop-blur-xl border-b border-crimson-900/50 p-6 shadow-2xl transition-all animate-fadeIn">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium tracking-wider text-left transition-colors ${
                  activeSection === link.id
                    ? 'bg-crimson-950/80 text-white border border-crimson-600/40'
                    : 'text-gray-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                <span className="flex items-center gap-2">
                  {link.isSpecial && <Sparkles className="w-4 h-4 text-crimson-400" />}
                  {link.label}
                </span>
                <ChevronRight className="w-4 h-4 text-gray-500" />
              </button>
            ))}
            <div className="pt-4 border-t border-white/10">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenRegisterModal) onOpenRegisterModal();
                }}
                className="w-full py-3 rounded-lg text-sm font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-crimson-700 to-crimson-600 border border-crimson-500 text-center shadow-lg"
              >
                Register For IEEE Week
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
