import "./Hero.css";
import audreyImage from "../../images_and_icons/audreyImage.JPG";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";



export default function Hero() {
    
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/about");
    }
    
    return (
        <section className="hero-section">
            <div className="hero-image-wrapper">
                <div className="hero-image-frame">
                    <img
                        src={audreyImage}
                        alt="Audrey Bediako"
                        className="hero-image"
                    />
                </div>
            </div>

            <div className="hero-text">
                <h1 className="hero-title">Audrey Bediako</h1>
                <p className="hero-bio">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis
                    turpis in nunc rutrum sollicitudin. Integer eu erat sit amet lorem
                    iaculis dictum.
                </p>

                <div className="hero-icons">
                    <a href="https://www.linkedin.com/in/audreybediako/"><FaLinkedin /></a>
                    <a href="mailto:audrey.bediako27@gmail.com"><MdEmail /></a>
                    <a href="https://github.com/abediako"><FaGithub /></a>
                </div>

                <button onClick={handleClick} className="hero-button">Learn More!</button>
            </div>
        </section>
    );
}
