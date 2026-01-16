import React from 'react';
import '../styles/services.css'; // Importing the CSS file
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Services() {
  return (
    <div>
      <div className="services-container" id="about">
        <h2 className="services-title">Services</h2>
        <p className="services-description">
          I specialize in delivering high-quality solutions, including <strong>AI-powered systems</strong> and <strong>Data Science</strong> to drive intelligent decision-making. My expertise also covers UI/UX design, mobile app development, responsive web design, and robust desktop applications to streamline your business processes.
        </p>
        <div className="services-cards">
          <div className="service-card">
            <i className="icon fas fa-brain"></i>
            <h3>AI & Machine Learning</h3>
            <p>Developing intelligent solutions using advanced machine learning models, neural networks, and data analytics to solve complex problems.</p>
          </div>
          <div className="service-card">
            <i className="icon fas fa-mobile-alt"></i>
            <h3>App Design</h3>
            <p>Building powerful, user-friendly mobile applications for iOS and Android platforms.</p>
          </div>
          <div className="service-card">
            <i className="icon fas fa-laptop-code"></i>
            <h3>Web Design</h3>
            <p>Designing and developing responsive, modern websites that elevate your online presence.</p>
          </div>
          <div className="service-card">
            <i className="icon fas fa-paint-brush"></i>
            <h3>UI/UX</h3>
            <p>Crafting intuitive and visually appealing interfaces that deliver seamless user experiences.</p>
          </div>
          <div className="service-card">
            <i className="icon fas fa-database"></i>
            <h3>Database</h3>
            <p>Designing and implementing efficient database systems using MongoDB, Firebase, and MySQL to support your application’s data needs.</p>
          </div>
        </div>
      </div>

      <div className="skills-container">
        <h2 className="skills-title">Skills</h2>
        <div className="skills-grid">
          <div className="skill-card">
            <img src="https://icon.icepanel.io/Technology/svg/Flutter.svg" alt="Flutter" />
            <p>Flutter</p>
          </div>
          <div className="skill-card">
            <img src="https://icon.icepanel.io/Technology/svg/Java.svg" alt="Java" />
            <p>Java</p>
          </div>
          <div className="skill-card">
            <img src="https://icon.icepanel.io/Technology/svg/Python.svg" alt="Python" />
            <p>Python</p>
          </div>
          <div className="skill-card">
            <img src="https://icon.icepanel.io/Technology/svg/.NET-core.svg" alt="Flutter" />
            <p>.NET</p>
          </div>
          <div className="skill-card">
            <img src="https://icon.icepanel.io/Technology/svg/C%2B%2B-%28CPlusPlus%29.svg" alt="Java" />
            <p>C++</p>
          </div>
          <div className="skill-card">
            <img src="https://icon.icepanel.io/Technology/svg/C%23-%28CSharp%29.svg" alt="Python" />
            <p>C#</p>
          </div>
          <div className="skill-card">
            <img src="https://icon.icepanel.io/Technology/svg/MySQL.svg" alt="Flutter" />
            <p>MY SQL</p>
          </div>
          <div className="skill-card">
            <img src="https://icon.icepanel.io/Technology/svg/PHP.svg" alt="Java" />
            <p>PHP</p>
          </div>
          <div className="skill-card">
            <img src="https://icon.icepanel.io/Technology/svg/Laravel.svg" alt="Python" />
            <p>Laraval</p>
          </div>
          <div className="skill-card">
            <img src="https://icon.icepanel.io/Technology/svg/Firebase.svg" alt="Flutter" />
            <p>Firebase</p>
          </div>
          <div className="skill-card">
            <img src="https://icon.icepanel.io/Technology/svg/Figma.svg" alt="Java" />
            <p>Figma</p>
          </div>
          <div className="skill-card">
            <img src="https://icon.icepanel.io/Technology/png-shadow-512/Express.png" alt="Python" />
            <p>Express js</p>
          </div>
          <div className="skill-card">
            <img src="https://icon.icepanel.io/Technology/svg/React.svg" alt="Java" />
            <p>React</p>
          </div>
          <div className="skill-card">
            <img src="https://icon.icepanel.io/Technology/svg/JavaScript.svg" alt="Python" />
            <p>Java script</p>
          </div>
          <div className="skill-card">
            <img src="https://icon.icepanel.io/Technology/svg/Node.js.svg" alt="Java" />
            <p>Node js</p>
          </div>
          <div className="skill-card">
            <img src="https://icon.icepanel.io/Technology/svg/MongoDB.svg" alt="MongoDB" />
            <p>MongoDB</p>
          </div>
          <div className="skill-card">
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg" alt="Machine Learning" />
            <p>Machine Learning</p>
          </div>

        </div>
      </div>
    </div>
  );
}
