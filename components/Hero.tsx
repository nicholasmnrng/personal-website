'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const roles = [
  'Information Systems Student',
  'Full-Stack Developer',
  'Problem Solver',
];

const techStack = [
  'JavaScript', 'TypeScript', 'Python', 'React', 'Next.js', 'Node.js',
  'PostgreSQL', 'Docker', 'AWS', 'Tailwind CSS',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    
    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayedRole.length < currentRole.length) {
          setDisplayedRole(currentRole.slice(0, displayedRole.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayedRole.length > 0) {
          setDisplayedRole(currentRole.slice(0, displayedRole.length - 1));
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedRole, isDeleting, roleIndex]);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-3.5rem)] lg:min-h-screen flex items-center justify-center relative pt-16 pb-10 px-4">
      {/* Background gradient mesh */}
      <div className="gradient-mesh" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Mobile: Avatar First, Desktop: Text First */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:hidden order-1"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-3xl opacity-30 animate-pulse" />
              
              {/* Avatar container */}
              <motion.div
                className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-primary/30 glow-cyan"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="/assets/profile.jpg"
                  alt="Nicholas Christian Samuel Manurung"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Left Content - Desktop */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <p className="text-text-muted text-base sm:text-lg mb-2 text-center lg:text-left">Hi There!</p>
            
            <motion.div 
              className="inline-block mb-4"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-text-primary bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent leading-tight text-center lg:text-left">
                Nicholas Christian Samuel Manurung - Profile
              </h1>
            </motion.div>

            <div className="text-base sm:text-lg lg:text-xl xl:text-2xl text-text-primary mb-6 h-8 sm:h-10 text-center lg:text-left">
              <span className="text-primary">╔</span>
              <span className="mx-2">{displayedRole}</span>
              <span className="text-primary animate-pulse">▌</span>
              <span className="text-primary">╗</span>
            </div>

            <p className="text-text-muted text-base sm:text-lg mb-8 max-w-lg leading-relaxed text-center lg:text-left">
              I'm Nicholas, an Information Systems student who enjoys developing applications and solving problems through technology.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center lg:justify-start">
              <motion.button
                onClick={scrollToProjects}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary to-secondary text-background font-semibold rounded-full text-sm sm:text-base"
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(6, 182, 212, 0.5)' }}
                whileTap={{ scale: 0.95 }}
              >
                ▶ Lihat Proyek Saya
              </motion.button>
              
              <motion.a
                href="/assets/cv.pdf"
                download
                className="px-6 sm:px-8 py-3 sm:py-4 border border-primary text-primary font-semibold rounded-full text-sm sm:text-base text-center"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(6, 182, 212, 0.1)' }}
                whileTap={{ scale: 0.95 }}
              >
                ↓ Unduh CV
              </motion.a>
            </div>

            {/* Tech Badge Marquee */}
            <div className="relative overflow-hidden">
              <div className="flex gap-3 sm:gap-4 animate-marquee">
                {[...techStack, ...techStack].map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 sm:px-4 py-2 bg-surface rounded-full text-xs sm:text-sm text-text-muted font-mono border border-white/5 whitespace-nowrap"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Content - Avatar - Desktop Only */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex justify-center lg:justify-end order-3"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-3xl opacity-30 animate-pulse" />
              
              {/* Avatar container */}
              <motion.div
                className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-primary/30 glow-cyan"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="/assets/profile.jpg"
                  alt="Nicholas Christian Samuel Manurung"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
