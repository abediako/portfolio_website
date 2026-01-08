import { useParams } from "react-router-dom";
import { projects } from "../data/projects";
import "./ProjectDetails.css";

function ProjectDetails() {
    const { slug } = useParams();
    const project = projects.find(
      proj => proj.slug === slug);

    if (!project) {
        return <div>Project not found!</div>;
    }

  return (
    <main className="project-details-page">
      <img 
        src={project.thumbnail} 
        alt={project.title} 
      />
      <h1>{project.title}</h1>
      <p>{project.shortDescription}</p>
      {/* <p>{project.fullDescription}</p> */}
      <div className="tags">
        {project.tags.map(tag => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </main>
  );
}

export default ProjectDetails;