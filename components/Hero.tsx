'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import data from '@/data/projects.json';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center px-6 py-20 overflow-hidden">
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-accent-blue/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-accent-blue/10 rounded-full blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
      >
        <div className="space-y-8 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-accent-blue text-xs font-medium"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-blue opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-blue"></span>
            </span>
            Available for new opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl lg:text-7xl font-bold tracking-tighter leading-tight"
          >
            I'm <span className="text-accent-blue">{data.profile.name}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-muted max-w-xl mx-auto lg:mx-0 leading-relaxed"
          >
            {data.profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <a
              href="#projects"
              className="px-8 py-3 bg-accent-blue text-background font-semibold rounded-full hover:bg-accent-blue-light transition-all transform hover:scale-105 text-center"
            >
              View My Work
            </a>
            <a
              href="/cv"
              className="px-8 py-3 bg-secondary-bg text-foreground font-semibold rounded-full border border-border hover:border-accent-blue transition-all text-center"
            >
              Download CV
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-accent-blue to-accent-blue-light rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative w-64 h-64 lg:w-80 lg:h-80 mx-auto rounded-full overflow-hidden border-4 border-secondary-bg shadow-2xl">
            <Image
              src="/assets/profile.jpg"
              alt={data.profile.name}
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
