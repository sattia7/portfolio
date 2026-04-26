'use client';
import { motion } from 'framer-motion';
import data from '@/data/projects.json';

export default function SkillMatrix() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto" id="skills">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16 space-y-4"
      >
        <h2 className="text-4xl font-bold tracking-tight">Technical <span className="text-accent-blue">Capability</span></h2>
        <p className="text-muted max-w-2xl mx-auto">
          A comprehensive matrix of my expertise across the full software development lifecycle.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {data.skills.map((group, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="p-6 rounded-xl bg-secondary-bg border border-border hover:border-accent-blue/50 transition-colors group"
          >
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-accent-blue rounded-full"></span>
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {group.items.map((skill, sIdx) => (
                <motion.div
                  key={sIdx}
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col px-3 py-2 rounded-lg bg-background border border-border group-hover:border-accent-blue/30 transition-all"
                >
                  <span className="text-sm font-medium">{skill.name}</span>
                  <span className="text-[10px] text-muted uppercase tracking-wider font-bold">
                    {skill.level}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
