import React, { useState } from 'react';
import '../styles/projects.css';

const projectData = [
  // App Design Projects
  { 
    id: 1, 
    category: 'App Design', 
    title: 'School Service Bus Notification App', 
    image: 'https://i.imgur.com/0tiwi75.jpeg', 
    link: 'https://github.com/Niwarthana00/school_service'
  },
  { 
    id: 2, 
    category: 'App Design', 
    title: 'Dog Nutrition Food App', 
    image: 'https://i.imgur.com/KvLI1Jq.jpeg', 
    link: 'https://github.com/Niwarthana00/Dog-Nutrition-Mobile-Application' 
  },
  // Web Design Projects
  { 
    id: 3, 
    category: 'Web Design', 
    title: 'The Gallery Cafe Website', 
    image: 'https://i.imgur.com/Vr1s6wK.png', 
    link: 'https://github.com/Niwarthana00/Restaurant-Management-System'  
  },
  { 
    id: 4, 
    category: 'Web Design', 
    title: 'Computer Shop Website', 
    image: 'https://i.imgur.com/H6TeWGc.png', 
    link: 'https://github.com/Niwarthana00/ICBT-SOC-TECHFIX-C-' 
  },
  // UI/UX Projects
  { 
    id: 5, 
    category: 'UI/UX', 
    title: 'School Service App UI Design', 
    image: 'https://i.imgur.com/2gzBJVv.png', 
    link: 'https://www.figma.com/design/qoMup9y2Nng8ancZiZyPFO/Untitled?node-id=0-1&node-type=canvas&t=4kN0id6DaBMZqrhp-0' 
  },
  { 
    id: 6, 
    category: 'UI/UX', 
    title: 'Computer Shop Web Application UI Design', 
    image: 'https://i.imgur.com/agWJuhw.png', 
    link: 'https://www.figma.com/design/6mhPp53w9ZBLulYghKEy0C/Untitled?node-id=0-1&node-type=canvas&t=6hP6V7q9jH08po1v-0' 
  },
  // Desktop Application Projects
  { 
    id: 7, 
    category: 'Desktop Application', 
    title: 'Employee Management System', 
    image: 'https://media.licdn.com/dms/image/v2/D5622AQEFJs_gsnxn7g/feedshare-shrink_800/feedshare-shrink_800/0/1724690228624?e=1738195200&v=beta&t=rzXz4KjFMxyOEQysaDY16Wt-ibiFSJh5UF_ZDYZ_p2o', 
    link: 'https://github.com/Niwarthana00/Employee_Management-_System' 
  },

  { 
    id: 8, 
    category: 'Desktop Application', 
    title: 'Computer Shop Admin Panel', 
    image: 'https://i.imgur.com/LhSLBuG.png', 
    link: 'https://github.com/Niwarthana00/ICBT-SOC-TECHFIX-C-' 
  },

  { 
    id: 9, 
    category: 'Web Design', 
    title: 'Gobus.lk(Bus reservation system)', 
    image: 'https://i.imgur.com/Oip7mZD.png', 
    link: 'https://github.com/Niwarthana00/gobus.lk' 
  },

];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects =
    selectedCategory === 'All'
      ? projectData
      : projectData.filter((project) => project.category === selectedCategory);

  const handleProjectClick = (link) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="projects-container" id="projects">
      <h2>My Projects</h2>
      <p>
        The projects listed below are ones I've worked on. You can get an idea of my projects categorized under Web, App, UI/UX, and Desktop.
      </p>
      <div className="tab-menu">
        {['All', 'App Design', 'Web Design', 'UI/UX', 'Desktop Application'].map((category) => (
          <button
            key={category}
            className={`tab-button ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="project-list">
        {filteredProjects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.category}</p>
            <button 
              onClick={() => handleProjectClick(project.link)}
              className="project-link-button"
            >
              View Project
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;