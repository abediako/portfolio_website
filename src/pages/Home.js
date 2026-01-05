import Hero from '../components/Hero/Hero';
import ScrollingSkills from '../components/ScrollingSkills/ScrollingSkills';
import FeaturedProjects from '../components/FeaturedProjects/FeaturedProjects';


export default function Home() {
  return (
    <>
      <div className="page">
        <Hero className="section" />
        <FeaturedProjects className="section" />
      </div>

      <ScrollingSkills className="section" />

      
    </>
    
  );
}
