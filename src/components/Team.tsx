import React, { useState } from 'react';
import { TEAM_MEMBERS } from '../data/team';
import { TeamMember } from '../types/team';
import { Users, Linkedin, Github, Mail, Quote } from 'lucide-react';

export const Team: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Lead Core', 'Technical Team', 'Creative & Art', 'Operations', 'Faculty Advisor'];

  const filteredTeam = TEAM_MEMBERS.filter(
    (member) => activeCategory === 'All' || member.category === activeCategory
  );

  return (
    <section id="team" className="py-20 relative bg-cosmic-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cosmic-900 border border-crimson-600/40 text-crimson-400 font-mono text-xs uppercase tracking-widest mb-3">
            <Users className="w-3.5 h-3.5 text-crimson-500" />
            <span>Organizing Executive Committee</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white uppercase tracking-tight">
            LEADERSHIP & <span className="text-crimson-500">TEAM</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-300 font-sans">
            The dedicated student leads, faculty advisors, and creative directors driving IEEE Week 2026.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto py-2 no-scrollbar mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-medium uppercase tracking-wider transition-all whitespace-nowrap ${
                activeCategory === cat
                  ? 'bg-crimson-800 text-white border border-crimson-500 shadow-[0_0_12px_rgba(220,38,38,0.3)]'
                  : 'bg-cosmic-900/60 text-gray-400 hover:text-white border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredTeam.map((member) => (
            <div
              key={member.id}
              className="group relative rounded-2xl bg-cosmic-900/70 border border-white/10 hover:border-crimson-600/50 p-6 transition-all duration-300 shadow-xl overflow-hidden"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-crimson-600 to-transparent"></div>

              <div className="flex items-center gap-4">
                {/* Member Avatar */}
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-crimson-600/40 group-hover:border-crimson-500 transition-colors flex-shrink-0">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Member Title */}
                <div>
                  <h3 className="font-display font-bold text-lg text-white group-hover:text-crimson-400 transition-colors">
                    {member.name}
                  </h3>
                  <div className="text-xs font-mono text-crimson-400 font-semibold mt-0.5">
                    {member.role}
                  </div>
                  <div className="text-[11px] text-gray-400 truncate mt-0.5 max-w-[200px]">
                    {member.department}
                  </div>
                </div>
              </div>

              {/* Quote note */}
              {member.quote && (
                <div className="mt-4 pt-3 border-t border-white/10 flex items-start gap-2 text-xs text-gray-300 italic">
                  <Quote className="w-4 h-4 text-crimson-500 flex-shrink-0 rotate-180" />
                  <span>"{member.quote}"</span>
                </div>
              )}

              {/* Social Links */}
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center gap-3">
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label={`${member.name} LinkedIn profile`}
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                )}
                {member.github && (
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label={`${member.name} GitHub profile`}
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
                {member.email && (
                  <a
                    href={`mailto:${member.email}`}
                    className="text-gray-400 hover:text-crimson-400 transition-colors"
                    aria-label={`Email ${member.name}`}
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
