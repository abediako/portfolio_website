export default function ProjectCard({ title, description, tags, page, github, image, link }) {
  return (
    <article className="project-card">
      <img src={image} alt={`${title} screenshot`} />
      <h3>{title}</h3>
      <p>{description}</p>
      <ul>
        {tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </article>
  );
}
