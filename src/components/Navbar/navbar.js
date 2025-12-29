import { useState } from 'react';
import './navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
    
    return (
        <header>
            <div>
                 <nav className="container">
                    <div className="nav-brand">
                        <h2>Audrey Bediako</h2>
                    </div>
                    <button className="menu-toggle" onClick={toggleMenu}>
                        {isOpen ? 'Close' : 'Menu'}
                    </button>
                    <ul className={ `nav-links ${isOpen ? 'open' : ''}` }>
                        <li>
                            <a href="/about">About</a>
                        </li>
                        <li>
                            <a href="/experience">Experience</a>
                        </li>
                        <li>
                            <a href="/projects">Projects</a>
                        </li>
                        <li>
                            <a href="/contact">Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
 
export default Navbar;