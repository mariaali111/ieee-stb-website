export type EventCategory = 
  | 'All'
  | 'Technical'
  | 'Coding & AI'
  | 'Robotics'
  | 'Creative & Art'
  | 'Workshop'
  | 'Gaming'
  | 'Paper Presentation';

export interface EventModel {
  id: string;
  day: number; // 1 to 8
  name: string; // Structured placeholder e.g. "EVENT DAY 1 - CODE CHRONICLES"
  category: EventCategory;
  date: string; // e.g. "October 12, 2026"
  time: string; // e.g. "10:00 AM - 04:00 PM IST"
  venue: string; // e.g. "Main Auditorium / Lab 4"
  description: string;
  poster: string; // Image URL or SVG preview gradient key
  organizer: string;
  rules: string[];
  eligibility: string;
  registrationDeadline: string;
  registrationLink?: string;
  isArtEvent: boolean;
  artDetails?: {
    theme?: string;
    allowedMediums?: string[];
    submissionFormat?: string;
    artistFeaturedNote?: string;
    galleryPreviewUrl?: string;
  };
  prizes?: string;
  contactPerson?: {
    name: string;
    role: string;
    phone: string;
    email: string;
  };
}

export interface EventRegistrationData {
  eventId: string;
  eventName: string;
  fullName: string;
  email: string;
  phone: string;
  college: string;
  department: string;
  yearOfStudy: string;
  ieeeMembershipStatus: 'Member' | 'Non-Member';
  ieeeMemberId?: string;
}
