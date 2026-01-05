import "./ScrollingSkills.css";
import css from "../../images_and_icons/css.png";
import js from "../../images_and_icons/js.png";
import react from "../../images_and_icons/react.png";
import figma from "../../images_and_icons/figma.png";
import unity from "../../images_and_icons/unity.png";
import python from "../../images_and_icons/python.jpg";
import java from "../../images_and_icons/java.png";
import html from "../../images_and_icons/html.png";
import git from "../../images_and_icons/git.png";
import r from "../../images_and_icons/r.jpg";

/*these are objects, not strings*/
const skills = [
  { type: "logo", label: "React", src: react },
  { type: "logo", label: "JavaScript", src: js },
  { type: "text", label: "HCI" },
  { type: "text", label: "Product Thinking" },
  { type: "text", label: "User Experience" },
  { type: "text", label: "Prototyping" },
  { type: "logo", label: "Figma", src: figma },
  { type: "logo", label: "Unity", src: unity },
  { type: "logo", label: "Python", src: python },
  { type: "logo", label: "Java", src: java },
  { type: "logo", label: "HTML", src: html },
  { type: "logo", label: "CSS", src: css },
  { type: "logo", label: "Git", src: git },
  { type: "logo", label: "R", src: r }
];

export default function ScrollingSkills() {
  return (
    <section className="scrolling-skills">
        <h2 className="skills-title">Skills and Technologies</h2>
        
        <div className="scrolling-container">
            <div className="scrolling-content">
                {[...skills, ...skills].map((skill, index) => (
                    skill.type === "logo" ? (
                            <img
                                key={index}
                                src={skill.src}
                                alt={skill.label}
                                className="skill-logo"
                            />
                        )
                    :(
                        <span key={index} className="skill-item">
                            {skill.label}
                        </span>
                    )
                ))}
            </div>
        </div>
    </section>
  )}