import { useI18n } from "../i18n";
import { ProjectCard } from "./ProjectCard";
import { SectionContainer } from "./v2/SectionContainer";
import { SectionHeading } from "./v2/SectionHeading";

export function Projects() {
  const { projects, t } = useI18n();
  return (
    <section className="section v2-project-showcase" id="projects" aria-labelledby="projects-title">
      <SectionContainer>
        <SectionHeading
          eyebrow={t.projectsSection.eyebrow}
          title={t.projectsSection.title}
          description={t.projectsSection.description}
          id="projects-title"
        />
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
