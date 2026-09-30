import React, { useState, useEffect } from 'react';
import { EventModel, EventRegistrationData } from '../types/event';
import { registrationService, RegistrationResult } from '../services/registrationService';
import { X, ShieldCheck, AlertCircle, Loader2, CheckCircle2, User, Mail, Phone, Building, GraduationCap, BadgeCheck } from 'lucide-react';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedEvent: EventModel | null;
  allEvents: EventModel[];
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({
  isOpen,
  onClose,
  selectedEvent,
  allEvents,
}) => {
  const [formData, setFormData] = useState<EventRegistrationData>({
    eventId: selectedEvent?.id || (allEvents[0]?.id || 'general'),
    eventName: selectedEvent?.name || (allEvents[0]?.name || 'IEEE Week 2026 Pass'),
    fullName: '',
    email: '',
    phone: '',
    college: '',
    department: '',
    yearOfStudy: '2nd Year',
    ieeeMembershipStatus: 'Non-Member',
    ieeeMemberId: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successResult, setSuccessResult] = useState<RegistrationResult | null>(null);

  // Update selected event if changed externally
  useEffect(() => {
    if (selectedEvent) {
      setFormData((prev) => ({
        ...prev,
        eventId: selectedEvent.id,
        eventName: selectedEvent.name,
      }));
    }
  }, [selectedEvent]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMsg) setErrorMsg(null);
  };

  const handleEventChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const eventId = e.target.value;
    const ev = allEvents.find((item) => item.id === eventId);
    setFormData((prev) => ({
      ...prev,
      eventId: eventId,
      eventName: ev ? ev.name : 'IEEE Week 2026 General Pass',
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMsg(null);

    try {
      const result = await registrationService.register(formData);
      setSuccessResult(result);
    } catch (err: any) {
      setErrorMsg(err?.message || 'An error occurred during registration. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setSuccessResult(null);
    setErrorMsg(null);
    setFormData({
      eventId: selectedEvent?.id || (allEvents[0]?.id || 'general'),
      eventName: selectedEvent?.name || (allEvents[0]?.name || 'IEEE Week 2026 Pass'),
      fullName: '',
      email: '',
      phone: '',
      college: '',
      department: '',
      yearOfStudy: '2nd Year',
      ieeeMembershipStatus: 'Non-Member',
      ieeeMemberId: '',
    });
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl overflow-y-auto animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="registration-modal-title"
    >
      <div className="relative w-full max-w-2xl bg-cosmic-950 rounded-2xl border border-white/15 shadow-2xl overflow-hidden glass-panel">
        
        {/* Header Ribbon */}
        <div className="p-6 bg-gradient-to-r from-cosmic-900 via-crimson-950 to-cosmic-900 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-crimson-900/50 border border-crimson-600/50 text-crimson-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h2 id="registration-modal-title" className="font-display font-extrabold text-xl text-white uppercase tracking-wider">
                IEEE WEEK REGISTRATION
              </h2>
              <p className="text-xs font-mono text-gray-400 mt-0.5">
                Secure your official participant pass & credential badge
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close registration modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
          {successResult ? (
            /* Success State */
            <div className="text-center py-8 space-y-4 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-crimson-900/60 border border-crimson-500 flex items-center justify-center mx-auto text-crimson-400 shadow-[0_0_25px_rgba(220,38,38,0.5)]">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="font-display font-bold text-2xl text-white">Registration Confirmed!</h3>
              <p className="text-sm text-gray-300 max-w-md mx-auto">
                {successResult.message}
              </p>
              
              <div className="p-4 rounded-xl bg-cosmic-900 border border-crimson-600/30 max-w-sm mx-auto font-mono text-xs text-left space-y-1.5">
                <div className="text-gray-500 uppercase text-[10px]">Pass Registration ID</div>
                <div className="text-crimson-400 font-bold text-sm">{successResult.registrationId}</div>
                <div className="text-gray-400 pt-1">Event: <span className="text-white">{formData.eventName}</span></div>
                <div className="text-gray-400">Participant: <span className="text-white">{formData.fullName}</span></div>
              </div>

              <div className="pt-4 flex justify-center gap-3">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-xl bg-crimson-800 hover:bg-crimson-700 text-white font-mono text-xs uppercase font-bold tracking-wider"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            /* Form State */
            <form onSubmit={handleSubmit} className="space-y-5">
              {errorMsg && (
                <div className="p-3.5 rounded-xl bg-crimson-950/80 border border-crimson-600 text-crimson-200 text-xs font-mono flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-crimson-400 flex-shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* Event Select Dropdown */}
              <div>
                <label className="block font-mono text-xs text-gray-300 uppercase tracking-wider mb-1.5">
                  Selected Event / Pass Track *
                </label>
                <select
                  name="eventId"
                  value={formData.eventId}
                  onChange={handleEventChange}
                  className="w-full px-4 py-2.5 rounded-xl bg-cosmic-900 border border-white/15 text-white font-sans text-sm focus:outline-none focus:border-crimson-500 focus:ring-1 focus:ring-crimson-500"
                >
                  {allEvents.map((ev) => (
                    <option key={ev.id} value={ev.id} className="bg-cosmic-950 text-white">
                      Day 0{ev.day}: {ev.name} ({ev.category})
                    </option>
                  ))}
                </select>
              </div>

              {/* Full Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-xs text-gray-300 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-crimson-400" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    placeholder="e.g. Alex Mercer"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl bg-cosmic-900 border border-white/15 text-white text-sm focus:outline-none focus:border-crimson-500"
                  />
                </div>
                <div>
                  <label className="block font-mono text-xs text-gray-300 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                    <Mail className="w-3.5 h-3.5 text-crimson-400" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="alex.mercer@university.edu"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl bg-cosmic-900 border border-white/15 text-white text-sm focus:outline-none focus:border-crimson-500"
                  />
                </div>
              </div>

              {/* Phone & College */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-xs text-gray-300 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5 text-crimson-400" />
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl bg-cosmic-900 border border-white/15 text-white text-sm focus:outline-none focus:border-crimson-500"
                  />
                </div>
                <div>
                  <label className="block font-mono text-xs text-gray-300 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                    <Building className="w-3.5 h-3.5 text-crimson-400" />
                    College / Institution *
                  </label>
                  <input
                    type="text"
                    name="college"
                    required
                    placeholder="e.g. Institute of Technology"
                    value={formData.college}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl bg-cosmic-900 border border-white/15 text-white text-sm focus:outline-none focus:border-crimson-500"
                  />
                </div>
              </div>

              {/* Department & Year */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-xs text-gray-300 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                    <GraduationCap className="w-3.5 h-3.5 text-crimson-400" />
                    Branch / Department
                  </label>
                  <input
                    type="text"
                    name="department"
                    placeholder="e.g. CSE / ECE / Mechanical"
                    value={formData.department}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl bg-cosmic-900 border border-white/15 text-white text-sm focus:outline-none focus:border-crimson-500"
                  />
                </div>
                <div>
                  <label className="block font-mono text-xs text-gray-300 uppercase tracking-wider mb-1.5">
                    Year of Study
                  </label>
                  <select
                    name="yearOfStudy"
                    value={formData.yearOfStudy}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl bg-cosmic-900 border border-white/15 text-white text-sm focus:outline-none focus:border-crimson-500"
                  >
                    <option value="1st Year">1st Year</option>
                    <option value="2nd Year">2nd Year</option>
                    <option value="3rd Year">3rd Year</option>
                    <option value="4th Year">4th Year</option>
                    <option value="Postgraduate / PhD">Postgraduate / PhD</option>
                  </select>
                </div>
              </div>

              {/* IEEE Membership Status */}
              <div className="p-4 rounded-xl bg-cosmic-900/60 border border-white/10 space-y-3">
                <div className="flex items-center gap-2 font-mono text-xs text-gray-300 uppercase font-bold">
                  <BadgeCheck className="w-4 h-4 text-crimson-400" />
                  <span>IEEE Membership Status</span>
                </div>
                <div className="flex items-center gap-6 text-xs text-gray-300 font-mono">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="ieeeMembershipStatus"
                      value="Non-Member"
                      checked={formData.ieeeMembershipStatus === 'Non-Member'}
                      onChange={handleChange}
                      className="accent-crimson-600"
                    />
                    <span>Non-Member</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="ieeeMembershipStatus"
                      value="Member"
                      checked={formData.ieeeMembershipStatus === 'Member'}
                      onChange={handleChange}
                      className="accent-crimson-600"
                    />
                    <span>Active IEEE Member</span>
                  </label>
                </div>

                {formData.ieeeMembershipStatus === 'Member' && (
                  <div className="pt-2 animate-fadeIn">
                    <input
                      type="text"
                      name="ieeeMemberId"
                      placeholder="Enter IEEE Member Number (e.g. 98765432)"
                      value={formData.ieeeMemberId || ''}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg bg-cosmic-950 border border-crimson-600/50 text-white font-mono text-xs focus:outline-none"
                    />
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-xl border border-white/15 text-xs font-mono text-gray-400 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-crimson-700 via-crimson-600 to-crimson-800 text-white font-display font-bold text-xs uppercase tracking-wider border border-crimson-500 shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:shadow-[0_0_30px_rgba(220,38,38,0.8)] flex items-center gap-2 disabled:opacity-50"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-white" />
                      Submitting...
                    </>
                  ) : (
                    'Confirm Registration'
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
