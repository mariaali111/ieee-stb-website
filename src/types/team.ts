export interface TeamMember {
  id: string;
  name: string;
  role: string;
  category: 'Lead Core' | 'Technical Team' | 'Creative & Art' | 'Operations' | 'Faculty Advisor';
  avatar: string;
  department: string;
  linkedin?: string;
  github?: string;
  email?: string;
  quote?: string;
}
