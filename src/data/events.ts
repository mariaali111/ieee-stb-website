import { EventModel } from '../types/event';

export const PLACEHOLDER_EVENTS: EventModel[] = [
  {
    id: 'day-1-tech-symposium',
    day: 1,
    name: 'Treasure Hunt: Pirates’ Quest',
    category: 'Technical',
    date: 'October 04, 2026',
    time: '10:00 AM - 04:00 PM IST',
    venue: 'Main Campus Auditorium / Hybrid Stream',
    description: 'Treasure Hunt',
    poster: 'src/assets/treasure-hunt.jpeg',
    organizer: 'IEEE Technical Chapter Lead',
    eligibility: 'Open to all registered university students',
    registrationDeadline: 'October 10, 2026',
    registrationLink: '#register',
    isArtEvent: false,
    prizes: 'Certificates + Special Technical Swag',
    rules: [
      '[Placeholder] Rule 1: Attendees must arrive 15 minutes prior to session commencement.',
      '[Placeholder] Rule 2: Valid Student ID card is mandatory for venue entrance.',
      '[Placeholder] Rule 3: Interactive Q&A requires registration via the official portal.'
    ],
    contactPerson: {
      name: 'Student Convener 1',
      role: 'Event Co-Ordinator',
      phone: '+91 98765 00001',
      email: 'day1.coordinator@university.edu'
    }
  },
  {
    id: 'day-2-code-sprint',
    day: 2,
    name: 'Chess Tournament',
    category: 'Coding & AI',
    date: 'October 05, 2026',
    time: '09:00 AM - 09:00 PM IST',
    venue: '[Placeholder] Computer Science Labs & Online Judge',
    description: 'Chess Tournament',
    poster: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
    organizer: '[Placeholder] IEEE Computer Society Student Chapter',
    eligibility: 'Solo participants or teams up to 3 members',
    registrationDeadline: 'October 11, 2026',
    registrationLink: '#register',
    isArtEvent: false,
    prizes: '[Placeholder] Prize Pool ₹25,000 + Internship Opportunities',
    rules: [
      '[Placeholder] Rule 1: All code must be written during the event duration.',
      '[Placeholder] Rule 2: Standard compilers (C++, Python, Java, Rust) allowed.',
      '[Placeholder] Rule 3: Plagiarism checks will be conducted by automated judge.'
    ],
    contactPerson: {
      name: '[Placeholder] Student Convener 2',
      role: 'Hackathon Lead',
      phone: '+91 98765 00002',
      email: 'day2.coordinator@university.edu'
    }
  },
  {
    id: 'day-3-robotics-arena',
    day: 3,
    name: 'Hackathon + IEEE Tech Quiz',
    category: 'Robotics',
    date: 'October 07, 2026',
    time: '11:00 AM - 05:00 PM IST',
    venue: '[Placeholder] Indoor Robotics Arena & Outdoor Testbed',
    description: 'Custom autonomous rover navigation through obstacle corridors, line tracking, and sensor payload deployment.',
    poster: 'src/assets/Hack-ieee.jpeg',
    organizer: '[Placeholder] IEEE Robotics & Automation Society (RAS)',
    eligibility: 'Teams of 2 to 4 members',
    registrationDeadline: 'October 12, 2026',
    registrationLink: '#register',
    isArtEvent: false,
    prizes: '[Placeholder] Prize Pool ₹20,000 + Hardware Development Kits',
    rules: [
      '[Placeholder] Rule 1: Bot dimensions must comply with maximum size limit (30cm x 30cm).',
      '[Placeholder] Rule 2: Pre-assembled commercial complete bots are prohibited.',
      '[Placeholder] Rule 3: Safety cut-off switch must be accessible on exterior.'
    ],
    contactPerson: {
      name: '[Placeholder] Student Convener 3',
      role: 'Robotics Marshall',
      phone: '+91 98765 00003',
      email: 'day3.coordinator@university.edu'
    }
  },
  {
    id: 'day-4-digital-art-cosmos',
    day: 4,
    name: 'Heritage Walk + Pitch Competition',
    category: 'Creative & Art',
    date: 'October 08, 2026',
    time: '10:00 AM - 06:00 PM IST',
    venue: '[Placeholder] Exhibition Gallery & Digital Metaspace',
    description: 'A flagship creative event highlighting cosmic digital art, futuristic 3D renders, sci-fi concept design, and procedural visual synthesis.',
    poster: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    organizer: '[Placeholder] IEEE Creative & Media Guild',
    eligibility: 'Open to individual artists, digital illustrators, & 3D designers',
    registrationDeadline: 'October 13, 2026',
    registrationLink: '#register',
    isArtEvent: true,
    artDetails: {
      theme: '[Placeholder] Cosmic Technology & Cybernetic Futures',
      allowedMediums: ['Digital Painting', '3D Blender / Maya Render', 'Generative Shader Art', 'Vector Sci-Fi Posters'],
      submissionFormat: 'PNG / MP4 (High Res 4K min), Source File Verification',
      artistFeaturedNote: 'Top entries will be featured in the IEEE International Student Branch Digital Magazine.',
      galleryPreviewUrl: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1200&q=80'
    },
    prizes: '[Placeholder] Prize Pool ₹15,000 + Wacom Digital Canvas Accessories',
    rules: [
      '[Placeholder] Rule 1: Works must align with the cosmic futuristic sci-fi theme.',
      '[Placeholder] Rule 2: Original artwork assets required; prompt log required for AI assisted elements.',
      '[Placeholder] Rule 3: High resolution export must be uploaded before deadline.'
    ],
    contactPerson: {
      name: '[Placeholder] Student Convener 4',
      role: 'Art Gallery Curator',
      phone: '+91 98765 00004',
      email: 'day4.art@university.edu'
    }
  },
  {
    id: 'day-5-ai-workshop',
    day: 5,
    name: 'Gaming Tournament',
    category: 'Workshop',
    date: 'October 09, 2026',
    time: '02:00 PM - 07:00 PM IST',
    venue: '[Placeholder] High Performance Computing Lab / Zoom',
    description: 'Hands-on masterclass building edge AI models, real-time computer vision pipelines, and fine-tuning neural architectures.',
    poster: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=1200&q=80',
    organizer: '[Placeholder] IEEE Computational Intelligence Society',
    eligibility: 'Basic knowledge of Python programming recommended',
    registrationDeadline: 'October 14, 2026',
    registrationLink: '#register',
    isArtEvent: false,
    prizes: '[Placeholder] IEEE Workshop Credential + Cloud Compute Credits',
    rules: [
      '[Placeholder] Rule 1: Laptop with internet connectivity required for hands-on labs.',
      '[Placeholder] Rule 2: Prerequisites repository will be shared 24 hours prior.',
      '[Placeholder] Rule 3: Mandatory attendance required for certification.'
    ],
    contactPerson: {
      name: '[Placeholder] Student Convener 5',
      role: 'Technical Instructor',
      phone: '+91 98765 00005',
      email: 'day5.workshop@university.edu'
    }
  },
  {
    id: 'day-6-generative-art-lab',
    day: 6,
    name: 'Retro Arcade Game Console Workshop',
    category: 'Creative & Art',
    date: 'October 11, 2026',
    time: '10:00 AM - 05:00 PM IST',
    venue: '[Placeholder] Design Studio & Online Creative Portal',
    description: 'Designing futuristic HUD interfaces, sci-fi cybernetic dashboards, dynamic web animations, and interactive artwork experience.',
    poster: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80',
    organizer: '[Placeholder] IEEE Design & User Experience Cell',
    eligibility: 'Solo or Pairs (Figma / Web / Shader Artists)',
    registrationDeadline: 'October 15, 2026',
    registrationLink: '#register',
    isArtEvent: true,
    artDetails: {
      theme: '[Placeholder] Sci-Fi Command Center & Cyber HUD Design',
      allowedMediums: ['Figma UI Prototypes', 'Three.js / WebGL Shaders', 'Motion Graphics', 'Interactive Canvas'],
      submissionFormat: 'Live Figma Prototype Link / Web URL / MP4 Video Showcase',
      artistFeaturedNote: 'Winning designs will inspire the next IEEE SB official web design framework.',
      galleryPreviewUrl: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=1200&q=80'
    },
    prizes: '[Placeholder] Prize Pool ₹15,000 + Premium Design Licenses',
    rules: [
      '[Placeholder] Rule 1: Submissions must include interactive prototype or video demo.',
      '[Placeholder] Rule 2: Open-source component libraries permitted with attribution.',
      '[Placeholder] Rule 3: Design layout must adhere to accessibility guidelines.'
    ],
    contactPerson: {
      name: '[Placeholder] Student Convener 6',
      role: 'UI/UX Design Lead',
      phone: '+91 98765 00006',
      email: 'day6.uiart@university.edu'
    }
  },
  {
    id: 'day-7-esports-arena',
    day: 7,
    name: 'Felicitation Ceremony',
    category: 'Gaming',
    date: 'October 12, 2026',
    time: '12:00 PM - 09:00 PM IST',
    venue: '[Placeholder] Student Center Gaming Hub / Discord LAN',
    description: 'High-stakes multiplayer tactical tournaments, strategy simulations, and speedrun challenges in cosmic gaming setups.',
    poster: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80',
    organizer: '[Placeholder] IEEE Gaming & Interactive Media Society',
    eligibility: 'Registered teams of 5 players',
    registrationDeadline: 'October 16, 2026',
    registrationLink: '#register',
    isArtEvent: false,
    prizes: '[Placeholder] Prize Pool ₹20,000 + Gaming Gear Accessories',
    rules: [
      '[Placeholder] Rule 1: Standard tournament rules and match formats apply.',
      '[Placeholder] Rule 2: Unsportsmanlike conduct results in immediate disqualification.',
      '[Placeholder] Rule 3: Players must use verified account IDs.'
    ],
    contactPerson: {
      name: '[Placeholder] Student Convener 7',
      role: 'eSports Manager',
      phone: '+91 98765 00007',
      email: 'day7.esports@university.edu'
    }
  }
];
