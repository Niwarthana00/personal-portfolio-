// src/pages/Projects.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/projects.css';

const projectData = [
  { 
    id: 1, 
    category: 'Mobile application', 
    title: 'School Service Bus Notification App', 
    image: 'https://i.imgur.com/cpPwOou.png', 
    link: '',
    technologies: ['React Native', 'Node.js', 'MongoDB'],
    features: ['Real-time notifications', 'GPS tracking', 'Schedule management']
  },
  { 
    id: 2, 
    category: 'Mobile application', 
    title: 'Dog Nutrition Food App', 
    image: 'https://i.imgur.com/tB0qcze.png', 
    link: '',
    technologies: ['React Native', 'Firebase', 'Node.js'],
    features: ['Personalized meal plans', 'Nutrition tracking', 'Food recommendations']
  },
  { 
    id: 3, 
    category: 'Web application', 
    title: 'The Gallery Cafe Website', 
    image: 'https://i.imgur.com/vETc3Rj.png', 
    link: '',
    technologies: ['React', 'Node.js', 'MongoDB'],
    features: ['Online menu', 'Table reservations', 'Event bookings']
  },
  
  { 
    id: 4, 
    category: 'Web application', 
    title: 'Computer Shop Website', 
    image: 'https://i.imgur.com/W9oeDxX.png', 
    link: '',
    technologies: ['React', 'Node.js', 'MySQL'],
    features: ['Product catalog', 'Shopping cart', 'User authentication']
  },

  { 
    id: 5, 
    category: 'UI/UX Design', 
    title: 'School Service App UI Design', 
    image: 'https://i.imgur.com/9auYsFG.png', 
    link: '',
    technologies: ['Figma', 'Adobe XD'],
    features: ['User flow design', 'Interactive prototypes', 'Visual design system']
  },
  { 
    id: 6, 
    category: 'UI/UX Design', 
    title: 'Computer Shop Web Application UI Design', 
    image: 'https://i.imgur.com/JSh6xDj.png', 
    link: '',
    technologies: ['Figma', 'Adobe Photoshop'],
    features: ['Responsive design', 'User interface components', 'Design guidelines']
  },
  { 
    id: 7, 
    category: 'Desktop Application', 
    title: 'Employee Management System', 
    image: 'https://i.imgur.com/v4QMsYk.png', 
    link: '',
    technologies: ['Java', 'MySQL', 'JavaFX'],
    features: ['Employee records', 'Attendance tracking', 'Payroll management']
  },
  { 
    id: 8, 
    category: 'Desktop Application', 
    title: 'Computer Shop Admin Panel', 
    image: 'https://i.imgur.com/dSJH7XW.png', 
    link: '',
    technologies: ['Java', 'MySQL', 'Swing'],
    features: ['Inventory management', 'Sales tracking', 'Report generation']
  },
  { 
    id: 9, 
    category: 'Web application', 
    title: 'Bus reservation system (Gobus.lk)', 
    image: 'https://i.imgur.com/TPupm4r.png', 
    link: '',
    technologies: ['React', 'Node.js', 'MongoDB'],
    features: ['Seat booking', 'Route management', 'Payment integration']
  },
  { 
    id: 10, 
    category: 'UI/UX Design', 
    title: 'E-commerce shopping website', 
    image: 'https://i.imgur.com/sXqG5lS.png', 
    link: '',
    technologies: ['Figma', 'Adobe XD'],
    features: ['Shopping cart UI', 'Product catalog design', 'Checkout flow']
  }
];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const navigate = useNavigate();

  const filteredProjects = selectedCategory === 'All'
    ? projectData
    : projectData.filter((project) => project.category === selectedCategory);

  const handleProjectClick = (id) => {
    navigate(`/project/${id}`);
  };

  return (
    <div className="projects-container" id="projects">
      <h2>My Projects</h2>
      <p>
        The projects listed below are ones I've worked on. You can get an idea of my projects categorized under Web, App, UI/UX, and Desktop.
      </p>

      <div className="tab-menu">
        {['All', 'Mobile application', 'Web application', 'Desktop Application', 'UI/UX Design'].map((category) => (
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
              onClick={() => handleProjectClick(project.id)} 
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