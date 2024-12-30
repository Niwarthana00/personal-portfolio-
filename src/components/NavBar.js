import React, { useState } from 'react';
import '../styles/NavBar.css';

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDownloadCV = () => {
    window.open('https://drive.google.com/file/d/1sf-O4p5taKvgaKzW2FehUzGZbDh4AoOn/view?usp=sharing', '_blank');
};


  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <a href="/">Niwarthana</a>
        </div>

        {}
        <div 
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={toggleMenu}>Home</a></li>
          <li><a href="#about" onClick={toggleMenu}>Services</a></li>
          <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
          <li><a href="#blogs" onClick={toggleMenu}>Blogs</a></li>
          <li><a href="#contact" onClick={toggleMenu}>Contact Us</a></li>
          <li className="mobile-cv-button">
            <button onClick={handleDownloadCV}>Download CV</button>
          </li>
        </ul>

        <button 
          className="cv-button desktop-cv-button" 
          onClick={handleDownloadCV}
        >
          Download CV
        </button>
      </div>
    </nav>
  );
}