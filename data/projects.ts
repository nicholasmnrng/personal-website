export interface Project {
  id: number;
  title: string;
  description: string;
  category: 'web-app' | 'api' | 'mobile' | 'open-source';
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  thumbnail: string;
}

export const projects: Project[] = [
  {
    id: 3,
    title: 'WartaKini - News-app Reader',
    description: 'WartaKini-NewsApp adalah aplikasi mobile pembaca berita berbasis React Native + Expo dengan TypeScript dan Supabase sebagai backend. Aplikasi ini memungkinkan pengguna untuk membaca berita terkini dari Indonesia, menyimpan artikel favorit, membuat koleksi, dan mencari berita dengan berbagai kategori.',
    category: 'mobile',
    technologies: ['ReactNative', 'Expo', 'TypeScript', 'Supabase'],
    githubUrl: 'https://github.com/nicholasmnrng04/WartaKini---News-App.git',
    thumbnail: '/assets/LandingPageWartakini.jpg',
  },
  
];

export const categories = [
  { id: 'all', label: 'All' },
  { id: 'web-app', label: 'Web App' },
  { id: 'api', label: 'API' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'open-source', label: 'Open Source' },
];
