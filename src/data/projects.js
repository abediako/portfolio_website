import Anchor_thumbnail from "../images_and_icons/Anchor_thumnail.png";
import HiddenGuide_thumbnail from "../images_and_icons/HiddenGuide_thumbnail.png";
import LineLabyrinth_thumbnail from "../images_and_icons/LineLabyrinth_thumbnail.png";
import ReignX_thumbnail from "../images_and_icons/ReignX_thumbnail.png";
import Reimagining_thumbnail from "../images_and_icons/Reimagining_thumbnail.png";
import TravelMate_thumbnail from "../images_and_icons/TravelMate_thumnail.png";
import fill from "../images_and_icons/fill_in.png";



export const projects = [
  {
    slug: "reimagining-middle-school-cs-lab",
    title: "Reimagining A Middle School CS Lab",
    featured: false,
    shortDescription:
      "Redesigned a middle school computer science maker space to be more accessible, engaging, and age-appropriate through hands-on design and project planning.",
    problem:
      "The existing computer science lab lacked structure and accessibility for middle school students, limiting engagement and learning outcomes.",
    actions: [
      "Led planning and coordination for a redesigned maker space experience",
      "Created Gantt charts and maintained project documentation",
      "Facilitated design decisions focused on accessibility and student engagement"
    ],
    outcome:
      "Delivered a structured, student-centered maker space design that balanced creativity with technical learning goals.",
    skills: ["Project Management", "UX Design", "Educational Design"],
    tools: ["Documentation Tools", "Planning Frameworks"],
    tags: ["HCI", "Education", "Leadership"],
    thumbnail: Reimagining_thumbnail,
    linkSlug: "/projects/reimagining-middle-school-cs-lab",
  },
  {
    slug: "line-labyrinth",
    title: "Line Labyrinth",
    featured: false,
    shortDescription:
      "Designed an interactive digital experience exploring user perception, movement, and play through experimental interface design.",
    problem:
      "Traditional interfaces often limit creative exploration of movement and interaction.",
    actions: [
      "Explored interaction design principles in a creative computing context",
      "Designed experimental user interactions emphasizing play and discovery",
      "Developed and iterated on visual and interaction mechanics"
    ],
    outcome:
      "Produced an interactive project that emphasized experiential learning and creative interaction design.",
    skills: ["Interaction Design", "Creative Computing", "Prototyping"],
    tools: ["Creative Coding Tools"],
    tags: ["HCI", "Creative Tech"],
    thumbnail: LineLabyrinth_thumbnail,
    linkSlug: "/projects/line-labyrinth"
  },
  {
    slug: "travelmate",
    title: "TravelMate",
    featured: false,
    shortDescription:
      "Designed a travel planning app concept focused on improving navigation and user experience for travelers.",
    problem:
      "Travelers often struggle with fragmented tools when planning and navigating trips.",
    actions: [
      "Collaborated in a hackathon team to ideate a travel-focused solution",
      "Designed user flows and core app features",
      "Contributed to product vision and user experience decisions"
    ],
    outcome:
      "Delivered a cohesive product concept emphasizing usability and traveler needs.",
    skills: ["Product Design", "UX Thinking", "Collaboration"],
    tools: ["Design & Prototyping Tools"],
    tags: ["Product", "Hackathon"],
    thumbnail: TravelMate_thumbnail,
    linkSlug: "/projects/travelmate"
  },
  {
    slug: "hidden-guide",
    title: "Hidden Guide",
    featured: false,
    shortDescription:
      "Designed a location-based discovery app concept that helps users uncover overlooked local spaces through community-driven insights.",
    problem:
      "Popular discovery platforms prioritize well-known locations, leaving meaningful local spaces hidden.",
    actions: [
      "Collaborated in a cross-functional hackathon team",
      "Rapidly prototyped user flows and screens in Figma",
      "Pivoted to high-fidelity prototyping to support a strong demo narrative"
    ],
    outcome:
      "Presented a compelling product vision grounded in user-centered design and storytelling.",
    skills: ["Product Thinking", "UX Design", "Rapid Prototyping"],
    tools: ["Figma"],
    tags: ["HCI", "Product", "Hackathon"],
    thumbnail: HiddenGuide_thumbnail,
    linkSlug: "/projects/hidden-guide"
  },

  {
    slug: "reignx-academy-hci",
    title: "ReignX Academy: HCI in Software Development",
    featured: true,
    shortDescription:
      "Led an HCI-focused software development initiative emphasizing user-centered design and inclusive team collaboration.",
    problem:
      "Technical projects often undervalue human-centered design and team alignment.",
    actions: [
      "Acted as project manager overseeing planning and execution",
      "Integrated HCI principles into software development workflows",
      "Coordinated team efforts and maintained project alignment"
    ],
    outcome:
      "Delivered a user-centered development process that balanced technical execution with human needs.",
    skills: ["Leadership", "HCI", "Project Management"],
    tools: ["Planning & Collaboration Tools"],
    tags: ["HCI", "Leadership", "Product"],
    thumbnail: ReignX_thumbnail,
    linkSlug: "/projects/reignx-academy"
  },
  {
    slug: "anchor",
  title: "Anchor",
  featured: true,
  shortDescription:
    "Led user research and problem framing for a digital wellness concept focused on motivating real-world connection rather than reducing screen time.",
  problem:
    "Existing digital wellness solutions focus on restriction and willpower, failing to address motivation and behavior design for sustained real-world engagement.",
  actions: [
    "Conducted 30+ user interviews with university students to uncover behavioral pain points",
    "Identified demand for low-effort, real-world micro-challenges over traditional screen-time blockers",
    "Defined target customer segments (TAM/SAM/SOM) within the $20B+ digital wellness market",
    "Analyzed usability and behavioral failures of existing wellness apps",
    "Collaborated with a cross-disciplinary team to pitch a validated product concept to stakeholders"
  ],
  outcome:
    "Reframed digital wellness as a behavior and motivation problem, delivering a research-backed product concept grounded in user needs and market opportunity.",
  skills: [
    "User Research",
    "Product Thinking",
    "Behavior Design",
    "Market Analysis",
    "Storytelling"
  ],
  tools: ["Interview Methods", "Market Research Frameworks"],
  tags: ["Product", "HCI", "User Research"],
  thumbnail: Anchor_thumbnail,
  linkSlug: "/projects/anchor"
},
{
  slug: "extern-bereal",
  title: "BeReal Product Management Externship",
  featured: true,
  shortDescription:
    "Analyzed BeReal’s end-to-end user journey to identify activation, engagement, and retention opportunities through a behavioral and UX lens.",
  problem:
    "As BeReal’s initial novelty declined, sustaining user engagement required deeper understanding of user behavior across onboarding and core features.",
  actions: [
    "Mapped the end-to-end BeReal user journey across onboarding and daily use",
    "Identified key activation, engagement, and retention drop-off points",
    "Synthesized qualitative research into journey maps and opportunity areas",
    "Conducted competitive benchmarking of direct and adjacent social platforms",
    "Evaluated feature differentiation, positioning, and engagement mechanics"
  ],
  outcome:
    "Developed research-backed product recommendations and opportunity hypotheses grounded in user behavior and competitive context.",
  skills: [
    "Product Strategy",
    "User Journey Mapping",
    "Competitive Analysis",
    "UX Research",
    "Behavioral Analysis"
  ],
  tools: ["Figma", "Research Synthesis Frameworks"],
  tags: ["Product", "HCI", "Social Media"],
  thumbnail: fill,
  linkSlug: "/projects/extern-bereal"
}

];
export default projects;


