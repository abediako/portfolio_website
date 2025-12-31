import "./Footer.css";
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useEffect, useState } from "react";
import spotifyMockData from "../../data/spotifyMock";

const Footer = () => {
    const [track, setTrack] = useState(null);

    useEffect(() => {
        /*simulate fetching data from Spotify API*/
        setTimeout(() => { /* simulates async behavior*/
            // In a real scenario, you would fetch data from Spotify API here
            // For now, we use mock data
            setTrack(spotifyMockData);
        }, 1000);
    }, []);

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
                <div className = {"spotify-player ${track ? 'playing' : ''}"}>
                    {track && (
                        <a
                            href={track.trackUrl}
                            target="_blank" /*makes it open in a new tab */
                            rel="noopener noreferrer"
                            className="spotify-track"
                        >
                            <img src={track.albumArt} alt="Album Art" className="album-art" />
                            <p className="daylist">Feeling Like: {track.daylist}</p>
                            <p className="track-name">{track.song}</p>
                            <p className="track-artist">{track.artist}</p>
                        </a>
                    )}
                </div>
            </div>

        </footer>
    );
};
export default Footer;