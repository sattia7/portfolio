import Hero from '@/components/Hero';
import SkillMatrix from '@/components/SkillMatrix';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import ProjectShowcase from '@/components/ProjectShowcase';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      <Hero />
      <SkillMatrix />
      <ExperienceTimeline />
      <ProjectShowcase />
      <ContactSection />
    </div>
  );
}
