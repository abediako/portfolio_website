import { Link } from "react-router-dom"; // changes URL without reloading the page; React-specific
import "./ProjectCard.css";

function ProjectCard({ project }) {
  return (
    <Link to={`/projects/${project.slug}`} className="card">
      <img 
        src={project.thumbnail} 
        alt={project.title} 
      />
      <div className="card-content">
        <h3>{project.title}</h3>
        <p>{project.shortDescription}</p>
        <div className="tags">
          {project.tags.map(tag => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </Link>
  );
}

export default ProjectCard;
