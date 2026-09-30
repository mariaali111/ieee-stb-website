import React, { useState } from 'react';
import { SITE_CONFIG } from '../data/site';
import { Mail, Phone, MapPin, Send, HelpCircle, ChevronDown, CheckCircle2, AlertCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formState, setFormState] = useState({ name: '', email: '', subject: 'General Query', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="py-20 relative bg-cosmic-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cosmic-900 border border-crimson-600/40 text-crimson-400 font-mono text-xs uppercase tracking-widest mb-3">
            <Mail className="w-3.5 h-3.5 text-crimson-500" />
            <span>Support & Communications</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white uppercase tracking-tight">
            GET IN <span className="text-crimson-500">TOUCH</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-300 font-sans">
            Have questions regarding registrations, sponsorship, rules, or venue logistics? Connect directly with our team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Inquiry Form */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-cosmic-900/80 border border-white/10 shadow-2xl glass-panel">
            <h3 className="font-display font-bold text-xl text-white mb-4">
              Send Us a Message
            </h3>

            {submitted ? (
              <div className="p-6 text-center space-y-3 bg-crimson-950/40 border border-crimson-600/40 rounded-xl">
                <CheckCircle2 className="w-10 h-10 text-crimson-400 mx-auto" />
                <h4 className="font-display font-bold text-lg text-white">Message Received</h4>
                <p className="text-xs text-gray-300">
                  Thank you for reaching out! Our organizing committee will respond to your email within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormState({ name: '', email: '', subject: 'General Query', message: '' });
                  }}
                  className="px-4 py-2 rounded-lg bg-crimson-800 text-white font-mono text-xs uppercase tracking-wider"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono text-xs text-gray-300 uppercase mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="Alex Mercer"
                      className="w-full px-4 py-2.5 rounded-xl bg-cosmic-950 border border-white/15 text-white text-sm focus:outline-none focus:border-crimson-500"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-xs text-gray-300 uppercase mb-1">Your Email *</label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="alex@university.edu"
                      className="w-full px-4 py-2.5 rounded-xl bg-cosmic-950 border border-white/15 text-white text-sm focus:outline-none focus:border-crimson-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-xs text-gray-300 uppercase mb-1">Subject</label>
                  <select
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-cosmic-950 border border-white/15 text-white text-sm focus:outline-none focus:border-crimson-500"
                  >
                    <option value="General Query">General Query</option>
                    <option value="Event Rules Clarification">Event Rules Clarification</option>
                    <option value="Sponsorship & Partnership">Sponsorship & Partnership</option>
                    <option value="Art Gallery Submission">Art Gallery Submission</option>
                  </select>
                </div>

                <div>
                  <label className="block font-mono text-xs text-gray-300 uppercase mb-1">Message *</label>
                  <textarea
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Type your question or query here..."
                    className="w-full px-4 py-2.5 rounded-xl bg-cosmic-950 border border-white/15 text-white text-sm focus:outline-none focus:border-crimson-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-crimson-700 to-crimson-600 text-white font-display font-bold text-xs uppercase tracking-wider border border-crimson-500 shadow-lg flex items-center gap-2 hover:bg-crimson-500"
                >
                  <Send className="w-4 h-4" />
                  {isSubmitting ? 'Sending...' : 'Send Inquiry'}
                </button>
              </form>
            )}
          </div>

          {/* Contact Details & FAQs */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Cards */}
            <div className="p-6 rounded-2xl bg-cosmic-900/80 border border-white/10 space-y-4">
              <h4 className="font-display font-bold text-lg text-white">Direct Channels</h4>
              
              <div className="space-y-3 font-mono text-xs">
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="p-2 rounded-lg bg-crimson-950 border border-crimson-600/40 text-crimson-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-gray-500 text-[10px] uppercase">Official Email</div>
                    <div className="text-white">{SITE_CONFIG.contactEmail}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-gray-300">
                  <div className="p-2 rounded-lg bg-crimson-950 border border-crimson-600/40 text-crimson-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-gray-500 text-[10px] uppercase">Student Secretariat</div>
                    <div className="text-white">{SITE_CONFIG.contactPhone}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-gray-300">
                  <div className="p-2 rounded-lg bg-crimson-950 border border-crimson-600/40 text-crimson-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-gray-500 text-[10px] uppercase">Campus Location</div>
                    <div className="text-white">{SITE_CONFIG.venue}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQs Accordion */}
            <div className="p-6 rounded-2xl bg-cosmic-900/80 border border-white/10 space-y-4">
              <h4 className="font-display font-bold text-lg text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-crimson-400" />
                Frequently Asked Questions
              </h4>

              <div className="space-y-2">
                {SITE_CONFIG.faqs.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div key={idx} className="rounded-xl border border-white/10 overflow-hidden bg-cosmic-950/60">
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : idx)}
                        className="w-full p-3.5 text-left font-sans text-xs font-semibold text-white flex items-center justify-between gap-2"
                      >
                        <span>{faq.question}</span>
                        <ChevronDown className={`w-4 h-4 text-crimson-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {isOpen && (
                        <div className="px-3.5 pb-3.5 text-xs text-gray-300 leading-relaxed border-t border-white/5 pt-2">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
