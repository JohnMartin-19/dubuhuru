export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
  twitter?: string;
}

export interface Solution {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  longDescription: string;
  icon: string;
  features: string[];
  benefits: string[];
  useCases: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  sector: string;
  country: string;
  impactArea: string;
  image: string;
  stats: {
    label: string;
    value: string;
  }[];
  completionDate: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: 'Climate' | 'ESG' | 'Tech' | 'Africa' | 'Donations';
  author: string;
  date: string;
  readTime: string;
  image: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  organization?: string;
  message: string;
  subject: string;
}
