export interface ExperienceItem {
  id: number;
  type: 'work' | 'education' | 'certification';
  title: string;
  organization: string;
  period: string;
  description: string;
  technologies?: string[];
  details?: string[];
}

export const experience: ExperienceItem[] = [
  {
    id: 1,
    type: 'work',
    title: 'Internship',
    organization: 'PT. Pertamina Port & Logistics Shorebase Tanjung Batu ',
    period: 'January - february 2026',
    description: 'Mendukung operasional IT dan mengembangkan antarmuka aplikasi internal',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
    details: [
      'Memberikan dukungan teknis sebagai IT Support untuk memastikan perangkat dan sistem dapat digunakan dengan baik oleh pengguna.',
      'Mengembangkan antarmuka aplikasi IPMS (Information Presence Monitoring System) sebagai Frontend Developer.',
      'Mengimplementasikan fitur monitoring kehadiran dan pengajuan lembur pada aplikasi.',
      'Berkolaborasi dengan tim dalam analisis kebutuhan sistem dan pengembangan fitur aplikasi.',
      'Membantu pengujian sistem dan memastikan antarmuka aplikasi responsif dan mudah digunakan.',
 
    ],
  },
  // {
  //   id: 2,
  //   type: 'work',
  //   title: 'Freelance Developer',
  //   organization: 'Startup Y',
  //   period: '2022 – 2024',
  //   description: 'Bekerja dengan berbagai klien untuk membangun solusi digital custom.',
  //   technologies: ['Next.js', 'TypeScript', 'Prisma', 'AWS'],
  //   details: [
  //     'Menyelesaikan 15+ proyek untuk klien internasional',
  //     'Membangun API yang menangani 100k+ requests per hari',
  //     'Implementasi CI/CD pipeline untuk deployment otomatis',
  //   ],
  // },
  {
    id: 3,
    type: 'education',
    title: 'S1 Sistem Informasi',
    organization: 'Institut Teknologi Kalimantan',
    period: '2023 – Sekarang',
    description: 'Mahasiswa Aktif',
    technologies: [],
    details: [
      'IPK: 3.31 / 4.0',
      'Ketua Himpunan Mahasiswa Informatika 2022',
    ],
  },
  {
    id: 4,
    type: 'certification',
    title: 'Junior Networking Administrator (JNA) Certificate',
    organization: 'Kementrian komunikasi dan digital',
    period: '2025',
    description: 'Sertifikasi yang memvalidasi kemampuan dasar dalam konfigurasi jaringan, pengalamatan IP, pengelolaan perangkat jaringan, serta troubleshooting untuk menjaga konektivitas jaringan yang stabil.',
    technologies: [],
    details: [
      'Menerapkan konsep dasar jaringan komputer termasuk TCP/IP, subnetting, dan IP addressing.',
  'Melakukan konfigurasi dasar router dan switch menggunakan perangkat Cisco.',
  'Melakukan monitoring dan pengelolaan jaringan untuk memastikan konektivitas yang stabil.',
  'Melakukan troubleshooting untuk mengidentifikasi dan menyelesaikan masalah jaringan.',
  'Memahami dasar-dasar keamanan jaringan dan manajemen akses jaringan.',
    ],
  },
  // {
  //   id: 5,
  //   type: 'certification',
  //   title: 'Meta Front-End Developer Professional Certificate',
  //   organization: 'Meta (Coursera)',
  //   period: '2023',
  //   description: 'Program sertifikasi pengembangan front-end dari Meta.',
  //   technologies: ['React', 'JavaScript', 'CSS'],
  //   details: [
  //     '8 kursus komprehensif covering React, JavaScript, dan UI/UX',
  //     'Proyek akhir: Membangun aplikasi web full-featured',
  //   ],
  // },
];

export const timelineTypes = [
  { id: 'work', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'certification', label: 'Certifications' },
];
