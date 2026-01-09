import ProjectGrid from "../components/ProjectGrid/ProjectGrid";
import projects from "../data/projects";

export default function Projects() {
  return (
    <section className="projects-page">
      <h1>My Projects</h1>
      <ProjectGrid projects={projects} />
    </section>
  );
}
