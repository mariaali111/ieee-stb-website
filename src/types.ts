export type EventItem = {
  slug: string;
  title: string;
  date: string;
  category: string;
  location: string;
  description: string;
};

export type TeamMember = {
  name: string;
  role: string;
  initials: string;
};

export type GalleryItem = {
  id: number;
  title: string;
  category: string;
};

export type ActivityItem = {
  title: string;
  description: string;
};
