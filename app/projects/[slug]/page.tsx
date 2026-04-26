import data from '@/data/projects.json';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = data.projects.find(p => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen pb-20 px-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="py-20 space-y-6">
        <Link
          href="/"
          className="text-sm text-accent-blue hover:underline flex items-center gap-2 transition-colors"
        >
          ← Back to all projects
        </Link>
        <h1 className="text-5xl font-bold tracking-tighter">{project.title}</h1>
        <div className="flex flex-wrap gap-2">
          {project.tags.map(tag => (
            <span key={tag} className="text-xs px-2 py-1 rounded-md bg-secondary-bg border border-border text-muted font-mono">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative aspect-video rounded-2xl overflow-hidden border border-border mb-16">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Storytelling Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-2 space-y-12">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold flex items-center gap-3">
              <span className="w-2 h-2 bg-accent-blue rounded-full"></span>
              The Problem
            </h2>
            <p className="text-muted leading-relaxed text-lg">
              {project.problem}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold flex items-center gap-3">
              <span className="w-2 h-2 bg-accent-blue rounded-full"></span>
              The Solution
            </h2>
            <p className="text-muted leading-relaxed text-lg">
              {project.solution}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold flex items-center gap-3">
              <span className="w-2 h-2 bg-accent-blue rounded-full"></span>
              The Result
            </h2>
            <p className="text-muted leading-relaxed text-lg italic font-medium">
              {project.result}
            </p>
          </section>
        </div>

        <div className="space-y-8">
          <div className="p-6 rounded-xl bg-secondary-bg border border-border space-y-6">
            <h3 className="font-bold text-lg">Quick Links</h3>
            <div className="flex flex-col gap-3">
              <Link
                href={project.link}
                target="_blank"
                className="flex items-center justify-between p-3 rounded-lg bg-background border border-border hover:border-accent-blue transition-all"
              >
                <span>GitHub Repo</span>
                <span className="text-accent-blue">↗</span>
              </Link>
              <Link
                href={project.link}
                target="_blank"
                className="flex items-center justify-between p-3 rounded-lg bg-background border border-border hover:border-accent-blue transition-all"
              >
                <span>Live Demo</span>
                <span className="text-accent-blue">↗</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
