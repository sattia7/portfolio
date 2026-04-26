'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import data from '@/data/projects.json';

export default function ProjectShowcase() {
  const [activeFilter, setActiveFilter] = useState('All');
  const categories = ['All', ...new Set(data.projects.map(p => p.category))];

  const filteredProjects = activeFilter === 'All'
    ? data.projects
    : data.projects.filter(p => p.category === activeFilter);

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto" id="projects">
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-4xl font-bold tracking-tight">Featured <span className="text-accent-blue">Projects</span></h2>
        <p className="text-muted max-w-2xl mx-auto">
          A selection of my favorite works, focusing on scalability and technical challenges.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeFilter === cat
                ? 'bg-accent-blue text-background shadow-lg shadow-accent-blue/20'
                : 'bg-secondary-bg text-muted border border-border hover:border-accent-blue/50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, idx) => (
          <div
            key={idx}
            className="group relative p-4 rounded-2xl bg-secondary-bg border border-border hover:border-accent-blue/50 transition-all hover:-translate-y-2"
          >
            <div className="relative aspect-video rounded-xl overflow-hidden mb-6">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <Link
                  href={`/projects/${project.slug}`}
                  className="w-full py-2 bg-accent-blue text-background text-center text-sm font-bold rounded-lg"
                >
                  Case Study
                </Link>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] px-2 py-1 rounded-md bg-background border border-border text-muted font-mono">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-xl font-bold group-hover:text-accent-blue transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted line-clamp-2">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
