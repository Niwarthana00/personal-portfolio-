// src/pages/Home.js
import React from 'react';
import NavBar from '../components/NavBar'; // Adjust this path if needed
import '../styles/Home.css';
import { useAnimatedRoles } from '../script/Animation.js';
import Services from './Services'; // Import Services from the pages folder
import Projects from './Projects.js';
import Contactus from './Contactus.js';
import Footer from '../components/Footer.js';

export default function Home() {
  useAnimatedRoles(); // Call the custom hook to start the typing effect

  return (
    <div className="home-container">
      <NavBar />
      <div className="hero-section" id="home">
        <div className="content">
          <h1>Hello, It's me</h1>
          <h2>Niwarthana Sathyanjali</h2>
          <h3>
            And I'm a <span className="animated-role"></span>
          </h3>
          <button 
            className="hire-button" 
            onClick={() => window.open('https://drive.google.com/file/d/1sf-O4p5taKvgaKzW2FehUzGZbDh4AoOn/view?usp=sharing', '_blank')}
          >
            Hire Me
          </button>
                    <div className="social-icons">
                    <div className="social-media-links">
            <a 
              href="https://web.facebook.com/nivarthana.sathayanjali/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook"></i>
            </a>
           
            <a 
              href="https://www.linkedin.com/in/niwarthana-sathyanjali-822323273/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a 
            href="mailto: sathyanjali00@gmail.com" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <i className="fas fa-envelope"></i>
          </a>
          <a 
            href="https://github.com/Niwarthana00" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
          </div>

          </div>
        </div>
        <div className="profile-pic">
          <img src="https://i.imgur.com/CRXNei4.png" alt="Niwarthana" />
        </div>
      </div>
      <Services />
      <Projects/>
      <Contactus/>
      <Footer/>
    </div>
  );
}
