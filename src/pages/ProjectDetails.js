import { useParams } from "react-router-dom";
import { projects } from "../data/projects";
import "./ProjectDetails.css";

function ProjectDetails() {
    const { id } = useParams();
    const project = projects.find(proj => proj.id === parseInt(id));

    if (!project) {
        return <div>Project not found</div>;
    }

  return (
    <main className="project-details-page">
      <h1>{project.title}</h1>
      <p>{project.shortDescription}</p>
      <img src={project.image} alt={project.title} />
      <p>{project.fullDescription}</p>
      <div className="tags">
        {project.tags.map(tag => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </main>
  );
}

export default ProjectDetails;