import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Nicholas Manurung portofolio',
  description: 'Portfolio & CV Digital - Full-Stack Developer specializing in React, Node.js, and modern web technologies.',
  keywords: ['Full-Stack Developer', 'React', 'Node.js', 'Portfolio', 'Web Developer'],
  authors: [{ name: 'Nicholas Christian Samuel Manurung' }],
  openGraph: {
    title: 'Nicholas Manurung - Full-Stack Developer',
    description: 'Portfolio & CV Digital - Full-Stack Developer specializing in React, Node.js, and modern web technologies.',
    type: 'website',
    locale: 'id_ID',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nicholas Manurung - Full-Stack Developer',
    description: 'Portfolio & CV Digital - Full-Stack Developer specializing in React, Node.js, and modern web technologies.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
