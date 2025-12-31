import "./Footer.css";
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-left">
                <h2>Audrey Bediako</h2>
                <p>This is some text in latin until I figure it out. 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Ut venenatis turpis in nunc rutrum sollicitudin.
                </p>
            </div>
            
            <div className="footer-center">
                <h3>Quick Links</h3>
                {/* not sure if this is how it works with routing yet */}
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About Me</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>

            <div className="footer-right">
                <div className="contact-icons">
                    <a href="https://github.com/abediako" target="_blank">
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/audreybediako/" target="_blank">
                        <FaLinkedin />
                    </a>
                    <a href="mailto:audrey.bediako27@gmail.com">
                        <FaEnvelope />
                    </a>
                </div>
                <div className = "spotify-player">
                    {/* Spotify embed code */}
                </div>
            </div>

        </footer>
    );
};
export default Footer;