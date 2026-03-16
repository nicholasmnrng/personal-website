'use client';

import { motion } from 'framer-motion';

// const stats = [
//   { value: '5+', label: 'Proyek Selesai' },
//   { value: '2+', label: 'Tahun Pengalaman' },
// ];

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "Prisma"]
  },
  {
    title: "Database",
    skills: ["PostgreSQL"]
  },
  {
    title: "Tools & DevOps",
    skills: ["Git", "Docker"]
  },
  {
    title: "Programming Languages",
    skills: ["TypeScript", "JavaScript", "Python"]
  },
  {
    title: "Networking",
    skills: ["Cisco Networking"]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            <span className="text-primary">──</span> About Me <span className="text-primary">──</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column - Stats & Avatar */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="glass rounded-card p-6">
              {/* Avatar */}
              <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary/30 shadow-lg">
                <img
                  src="/assets/profile2.jpg"
                  alt="Nicholas Christian Samuel Manurung"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Stats - Temporarily disabled */}
              {/* <div className="space-y-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center py-3 border-b border-white/5 last:border-0"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="text-3xl font-bold text-primary">{stat.value}</div>
                    <div className="text-sm text-text-muted">{stat.label}</div>
                  </motion.div>
                ))}
              </div> */}
            </div>
          </motion.div>

          {/* Right Column - Bio & Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="glass rounded-card p-6 sm:p-8">
              {/* Bio Text */}
              <div className="mb-8">
                <p className="text-text-primary text-lg leading-relaxed mb-4">
                 Halo! Saya Nicholas Christian Samuel Manurung, mahasiswa Sistem Informasi di Institut Teknologi Kalimantan yang memiliki minat pada bidang teknologi, analisis data, dan pengembangan sistem. Saya senang membangun solusi digital yang dapat membantu memecahkan masalah nyata melalui pemanfaatan teknologi dan data.
                </p>
                <p className="text-text-primary text-lg leading-relaxed mb-4">
                  Saat ini saya terus mengembangkan keterampilan dalam pengembangan aplikasi, analisis sistem, dan pengolahan data, serta aktif mengerjakan berbagai proyek untuk meningkatkan pengalaman dan kemampuan saya di bidang tersebut.
                </p>
                <p className="text-text-primary text-lg leading-relaxed">
                 Saya selalu tertarik untuk mempelajari hal baru dan terbuka untuk berkolaborasi dalam berbagai proyek menarik. Mari bersama-sama mewujudkan ide menjadi solusi nyata.
                </p>
              </div>

              {/* Skills */}
              <div>
                <h3 className="text-xl font-semibold text-text-primary mb-6">Technical Skills</h3>
                <motion.div
                  className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {skillCategories.map((category, categoryIndex) => (
                    <motion.div
                      key={category.title}
                      className="bg-surface rounded-lg border border-white/5 p-4"
                      variants={itemVariants}
                      whileHover={{ 
                        scale: 1.02, 
                        borderColor: '#06b6d4',
                        boxShadow: '0 0 15px rgba(6, 182, 212, 0.2)'
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <h4 className="text-lg font-semibold text-primary mb-3">{category.title}</h4>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-background rounded-md border border-white/5 text-text-primary font-mono text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
