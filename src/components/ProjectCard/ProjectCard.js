import { Link } from "react-router-dom"; // changes URL without reloading the page; React-specific
import "./ProjectCard.css";

function ProjectCard({ project }) {
  return (
    <Link to={project.linkSlug} className="card">
      <div className="project-image">
        <img 
        src={project.thumbnail} 
        alt={project.title} 
      />
      </div>

      <div className="card-content">
        <h3>{project.title}</h3>
        <p>{project.shortDescription}</p>

        <div className="tags">
          {project.tags.map((tag,i) => (
            <span key={i}>{tag}</span>
          ))}
        </div>
      </div>
    </Link>
  );
}

export default ProjectCard;
