import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/NavBar.css';

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDownloadCV = () => {
    window.open('https://drive.google.com/file/d/1sf-O4p5taKvgaKzW2FehUzGZbDh4AoOn/view?usp=sharing', '_blank');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigation = (e, path) => {
    e.preventDefault();

    if (path === '/' || path === 'top') {
      if (location.pathname !== '/') {
        navigate('/');
      } else {
        scrollToTop();
      }
    } else {
      const sectionId = path.replace('#', '');
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          scrollToSection(sectionId);
        }, 100);
      } else {
        scrollToSection(sectionId);
      }
    }

    setIsMenuOpen(false);
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    handleNavigation(e, 'top');
  };

  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      const sectionId = location.hash.replace('#', '');
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    }
  }, [location]);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <a href="/" onClick={handleLogoClick}>Niwarthana</a>
        </div>

        <div
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="/" onClick={(e) => handleNavigation(e, 'top')}>Home</a></li>
          <li><a href="#about" onClick={(e) => handleNavigation(e, '#about')}>Services</a></li>
          <li><a href="#projects" onClick={(e) => handleNavigation(e, '#projects')}>Projects</a></li>
          <li><a href="#contact" onClick={(e) => handleNavigation(e, '#contact')}>Contact Us</a></li>
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
