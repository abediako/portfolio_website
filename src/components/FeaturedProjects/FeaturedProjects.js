import projects from '../../data/projects';
import ProjectCard from '../ProjectCard/ProjectCard';
import './FeaturedProjects.css';
import { Link } from 'react-router-dom';

export default function FeaturedProjects() {
  const featuredProjects = projects.filter(project => project.isFeatured);

  return (
    <div className="featured-projects">
      <h2 className="section-title">
        Featured Projects
      </h2>
      
      <div className="feature-grid">
        {featuredProjects.slice(0,3).map(project => (
          <ProjectCard key={project.slug} project={project} />
        ))} {/* take the first 3 featured projects and insert a card for them; generate repeated HTML from data*/}
      </div>

      <div className="viewMore">
        <Link to="/projects" className="viewMoreLink">
          View More
        </Link>
      </div>

    </div>
  );
}