'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { experience, timelineTypes } from '@/data/experience';
import TimelineItem from './TimelineItem';

export default function Experience() {
  const [activeTab, setActiveTab] = useState<'work' | 'education' | 'certification'>('work');

  const filteredExperience = experience.filter(item => item.type === activeTab);

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            <span className="text-primary">──</span> Experience & Education <span className="text-primary">──</span>
          </h2>
        </motion.div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex gap-2 p-1 bg-surface rounded-full">
            {timelineTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setActiveTab(type.id as 'work' | 'education' | 'certification')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeTab === type.id
                    ? 'bg-gradient-to-r from-primary to-secondary text-background'
                    : 'text-text-muted hover:text-text-primary'
                }`}
              >
                {type.label}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary via-secondary to-transparent" />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              {filteredExperience.map((item, index) => (
                <TimelineItem
                  key={item.id}
                  item={item}
                  index={index}
                  isLeft={index % 2 === 0}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredExperience.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-text-muted text-lg">No items in this category.</p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
