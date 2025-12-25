import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <main>
      {projects.map(project => (
        <ProjectCard
          key={project.id}
          image={project.image}
          title={project.title}
          description={project.description}
          tags={project.tags}
        />
      ))}
    </main>
  );
}
