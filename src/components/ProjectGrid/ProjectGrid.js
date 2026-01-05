import projects from "../../data/projects";
import ProjectCard from "../ProjectCard/ProjectCard";
import "./ProjectGrid.css";

function ProjectGrid() {
  return (
    <div className="project-grid">
      {projects.map(project => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
export default ProjectGrid;