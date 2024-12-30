// src/pages/Home.js
import React from 'react';
import NavBar from '../components/NavBar'; // Adjust this path if needed
import '../styles/Home.css';
import { useAnimatedRoles } from '../script/Animation.js';
import Services from './Services'; // Import Services from the pages folder
import Projects from './Projects.js';
import Blogs from './Blogs.js';
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
          <button className="hire-button">Hire Me</button>
          <div className="social-icons">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-linkedin"></i>
          </div>
        </div>
        <div className="profile-pic">
          <img src="https://i.imgur.com/CRXNei4.png" alt="Niwarthana" />
        </div>
      </div>
      <Services />
      <Projects/>
      <Blogs/>
      <Contactus/>
      <Footer/>
    </div>
  );
}
