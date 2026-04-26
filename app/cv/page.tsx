import data from '@/data/projects.json';

export default function Resume() {
  return (
    <div className="min-h-screen py-20 px-6 max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-16 border-b border-border pb-12">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter">{data.profile.name}</h1>
          <p className="text-xl text-accent-blue font-medium">{data.profile.role}</p>
          <div className="flex flex-wrap gap-4 text-sm text-muted">
            <span>{data.profile.location}</span>
            <span>•</span>
            <span>{data.profile.email}</span>
          </div>
        </div>
        <a
          href="/assets/profile.jpg" // In real use this would be the PDF link
          download="Shady_Attia_CV.pdf"
          className="px-6 py-3 bg-accent-blue text-background font-bold rounded-full hover:bg-accent-blue-light transition-all"
        >
          Download PDF CV
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-1 space-y-12">
          <section className="space-y-6">
            <h2 className="text-lg font-bold uppercase tracking-widest text-muted border-b border-border pb-2">Skills</h2>
            {data.skills.map((group, idx) => (
              <div key={idx} className="space-y-3">
                <h3 className="text-sm font-bold text-accent-blue">{group.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill, sIdx) => (
                    <span key={sIdx} className="text-xs px-2 py-1 rounded-md bg-secondary-bg border border-border">
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </section>
        </div>

        <div className="md:col-span-2 space-y-12">
          <section className="space-y-8">
            <h2 className="text-lg font-bold uppercase tracking-widest text-muted border-b border-border pb-2">Experience</h2>
            {data.experience.map((exp, idx) => (
              <div key={idx} className="space-y-4">
                <div className="flex justify-between items-baseline">
                  <h3 className="text-xl font-bold">{exp.role} <span className="text-muted font-normal text-lg">@ {exp.company}</span></h3>
                  <span className="text-sm text-muted font-mono">{exp.period}</span>
                </div>
                <p className="text-muted leading-relaxed">{exp.description}</p>
                <ul className="space-y-2">
                  {exp.achievements.map((ach, aIdx) => (
                    <li key={aIdx} className="text-sm text-muted flex gap-3">
                      <span className="text-accent-blue">▹</span> {ach}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          <section className="space-y-8">
            <h2 className="text-lg font-bold uppercase tracking-widest text-muted border-b border-border pb-2">Key Projects</h2>
            <div className="grid grid-cols-1 gap-6">
              {data.projects.map((project, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <h3 className="font-bold text-lg">{project.title}</h3>
                    <span className="text-xs font-mono text-accent-blue">{project.category}</span>
                  </div>
                  <p className="text-sm text-muted">{project.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
