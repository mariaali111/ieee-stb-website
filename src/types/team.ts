export interface TeamMember {
  id: string;
  name: string;
  role: string;
  category: 'Lead Core' | 'Technical Team' | 'Workshop and Project Cell' | 'Editorial' | 'Graphics Core' | 'Event Management' | 'Public Relations' | 'Volunteer Corps';
  avatar: string;
  department: string;
  linkedin?: string;
  github?: string;
  email?: string;
  quote?: string;
}
