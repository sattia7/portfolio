'use client';
import { motion } from 'framer-motion';
import data from '@/data/projects.json';

export default function ExperienceTimeline() {
  return (
    <section className="py-20 px-6 max-w-4xl mx-auto" id="experience">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16 space-y-4"
      >
        <h2 className="text-4xl font-bold tracking-tight">Professional <span className="text-accent-blue">Journey</span></h2>
        <p className="text-muted max-w-2xl mx-auto">
          My evolution as an engineer, from first commits to architecting scalable systems.
        </p>
      </motion.div>

      <div className="relative border-l-2 border-border ml-4 md:ml-0 md:mx-auto max-w-3xl pl-8 space-y-12">
        {data.experience.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
            className="relative group"
          >
            <div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-background border-2 border-accent-blue group-hover:scale-125 transition-transform duration-300" />

            <div className="p-6 rounded-xl bg-secondary-bg border border-border hover:border-accent-blue/50 transition-all">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-xl font-bold">{exp.role}</h3>
                  <p className="text-accent-blue font-medium">{exp.company}</p>
                </div>
                <span className="text-sm text-muted font-mono">{exp.period}</span>
              </div>

              <p className="text-muted mb-6 leading-relaxed">
                {exp.description}
              </p>

              <ul className="space-y-3">
                {exp.achievements.map((achievement, aIdx) => (
                  <li key={aIdx} className="flex gap-3 text-sm text-muted">
                    <span className="text-accent-blue font-bold">▹</span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
