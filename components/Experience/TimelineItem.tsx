'use client';

import { motion } from 'framer-motion';
import { ExperienceItem } from '@/data/experience';

interface TimelineItemProps {
  item: ExperienceItem;
  index: number;
  isLeft: boolean;
}

export default function TimelineItem({ item, index, isLeft }: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`relative flex items-center gap-8 ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}
    >
      {/* Content */}
      <div className={`flex-1 ${isLeft ? 'text-right' : 'text-left'}`}>
        <div className="glass rounded-card p-6 inline-block">
          <span className="text-primary font-mono text-sm">{item.period}</span>
          <h3 className="text-xl font-bold text-text-primary mt-1">{item.title}</h3>
          <p className="text-secondary font-medium mb-2">{item.organization}</p>
          <p className="text-text-muted text-sm mb-3">{item.description}</p>
          
          {item.technologies && item.technologies.length > 0 && (
            <div className={`flex flex-wrap gap-2 ${isLeft ? 'justify-end' : 'justify-start'}`}>
              {item.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-surface rounded-full text-xs text-text-muted font-mono border border-white/5"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Timeline dot */}
      <div className="relative flex-shrink-0">
        <div className="w-4 h-4 bg-primary rounded-full shadow-lg shadow-primary/50 z-10 relative" />
        <div className="absolute inset-0 bg-primary/30 rounded-full animate-ping" />
      </div>

      {/* Empty space for alignment */}
      <div className="flex-1" />
    </motion.div>
  );
}
