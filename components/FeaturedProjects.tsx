import { projects } from "@/lib/projects";
import { Section, SectionHeading } from "./Section";
import { ProjectCard } from "./ProjectCard";
import { Reveal } from "./Reveal";

export function FeaturedProjects() {
  const [featured, ...rest] = projects;

  return (
    <Section id="projects" className="py-20 sm:py-28">
      <SectionHeading
        eyebrow="01 / Work"
        title="Featured projects"
        description="A few systems I've designed and shipped — spanning real-time backends, applied ML, and full-stack product."
      />

      <div className="grid gap-5 sm:gap-6">
        {/* Most prominent card, full width */}
        <Reveal>
          <ProjectCard project={featured} index={1} featured />
        </Reveal>

        {/* Remaining projects */}
        <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.08} className="h-full">
              <ProjectCard project={project} index={i + 2} />
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
