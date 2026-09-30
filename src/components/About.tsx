import React from 'react';
import { Shield, Globe, Award, Cpu, Flame, Target } from 'lucide-react';
import { SITE_CONFIG } from '../data/site';

export const About: React.FC = () => {
  const values = [
    {
      icon: Cpu,
      title: 'Cosmic Innovation',
      desc: 'Advancing humanity through frontier technology, neural systems, autonomous robotics, and edge computing.',
    },
    {
      icon: Flame,
      title: 'Competitive Mastery',
      desc: '8 intense days of algorithmic hackathons, battle arenas, hardware challenges, and creative visual showcases.',
    },
    {
      icon: Target,
      title: 'Peer Leadership',
      desc: 'Nurturing student engineers, researchers, designers, and project managers through hands-on mentorship.',
    },
    {
      icon: Globe,
      title: 'Global IEEE Network',
      desc: 'Direct connection to international IEEE chapters, research publications, standards bodies, and industry conferences.',
    },
  ];

  return (
    <section id="about" className="py-20 relative bg-cosmic-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cosmic-900 border border-crimson-600/40 text-crimson-400 font-mono text-xs uppercase tracking-widest mb-3">
            <Shield className="w-3.5 h-3.5 text-crimson-500" />
            <span>Institutional Profile</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white uppercase tracking-tight">
            ABOUT <span className="text-crimson-500">{SITE_CONFIG.branchName}</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-300 font-sans">
            The IEEE Student Branch is a hub for technology enthusiasts, creative minds, and problem solvers committed to engineering a better tomorrow.
          </p>
        </div>

        {/* Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          <div className="lg:col-span-7 space-y-5 text-gray-300 text-sm sm:text-base leading-relaxed">
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-white leading-snug">
              Architecting The Annual Flagship <span className="text-crimson-400">IEEE WEEK 2026</span>
            </h3>
            <p>
              IEEE Week is our premier annual technical festival bringing together student researchers, developers, artists, and industry mentors for 8 consecutive days of immersive learning, competition, and discovery.
            </p>
            <p>
              Our vision for 2026 combines high-caliber technical challenges with futuristic visual aesthetics, ensuring that every participant—whether coding an AI model or designing digital shader art—experiences an unparalleled standard of excellence.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10 font-mono text-xs">
              <div className="p-3 rounded-lg bg-cosmic-900 border border-white/10">
                <span className="text-crimson-400 font-bold block text-sm">IEEE SECTION</span>
                <span className="text-gray-400">Recognized Student Chapter</span>
              </div>
              <div className="p-3 rounded-lg bg-cosmic-900 border border-white/10">
                <span className="text-crimson-400 font-bold block text-sm">FLAGSHIP STATUS</span>
                <span className="text-gray-400">8 Days • 8 Events</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-crimson-600/40 shadow-2xl glass-panel-crimson p-6 space-y-4">
              <div className="text-xs font-mono text-crimson-400 uppercase tracking-widest flex items-center gap-1.5">
                <Award className="w-4 h-4" />
                <span>Institutional Pillars</span>
              </div>
              
              <ul className="space-y-3 text-xs sm:text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-crimson-500 mt-1.5"></span>
                  <span><strong>Research & Development:</strong> Encouraging paper submissions, patent drafts, and open-source contributions.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-crimson-500 mt-1.5"></span>
                  <span><strong>Women in Engineering (WIE):</strong> Fostering inclusive tech representation and leadership workshops.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-crimson-500 mt-1.5"></span>
                  <span><strong>Robotics & Automation (RAS):</strong> Hands-on hardware prototyping, ROS tutorials, and autonomous bot trials.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-crimson-500 mt-1.5"></span>
                  <span><strong>Creative & Digital Media Guild:</strong> Pioneering futuristic HUD design, generative art, and cinematic event visuals.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 4 Core Pillars Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, idx) => {
            const Icon = v.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-cosmic-900/80 border border-white/10 hover:border-crimson-600/50 transition-all duration-300 space-y-3"
              >
                <div className="w-12 h-12 rounded-xl bg-crimson-950 border border-crimson-600/40 flex items-center justify-center text-crimson-400">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="font-display font-bold text-lg text-white">
                  {v.title}
                </h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {v.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
