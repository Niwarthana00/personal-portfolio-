import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/projects.css';
import blockchainImage from '../img/blockchain/main.png';
import seatbookImage from '../img/seatbook/main.png';
import sahanaImage from '../img/sahana/mainimg.png';

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
    category: 'Desktop application',
    title: 'Employee Management System',
    image: 'https://i.imgur.com/v4QMsYk.png',
    link: '',
    technologies: ['Java', 'MySQL', 'JavaFX'],
    features: ['Employee records', 'Attendance tracking', 'Payroll management']
  },

  {
    id: 8,
    category: 'Desktop application',
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
    image: 'https://i.imgur.com/eGL2BSC.png',
    link: '',
    technologies: ['Figma', 'Adobe XD'],
    features: ['Shopping cart UI', 'Product catalog design', 'Checkout flow']
  },
  {
    id: 11,
    category: 'Web application',
    title: 'Chain Flow',
    image: blockchainImage,
    link: '',
    technologies: ['React', 'Blockchain', 'Web3.js', 'Solidity'],
    features: ['Decentralized transactions', 'Smart contracts', 'Blockchain integration', 'Secure wallet connection']
  },
  {
    id: 12,
    category: 'Web application',
    title: 'Online Seat Reservation System',
    image: seatbookImage,
    link: '',
    technologies: ['HTML', 'CSS', 'PHP', 'MySQL'],
    features: ['Hall layout visualization', 'Seat selection', 'Payment gateway']
  },
  {
    id: 13,
    category: 'Mobile application',
    title: 'Sahana - Disaster Relief Coordination App',
    image: sahanaImage,
    link: 'https://github.com/Niwarthana00/sahana',
    technologies: ['Flutter', 'Firebase', 'Dart', 'Agora RTC'],
    features: ['Real-time coordination', 'GPS-based aid requests', 'Voice Calling (Agora)']
  }

];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isMobileView, setIsMobileView] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const filteredProjects = selectedCategory === 'All'
    ? projectData
    : projectData.filter((project) => project.category === selectedCategory);

  const handleProjectClick = (id) => {
    navigate(`/project/${id}`);
  };

  const categories = [
    { full: 'All', short: 'All' },
    { full: 'Mobile application', short: 'Mobile' },
    { full: 'Web application', short: 'Web' },
    { full: 'Desktop application', short: 'Desktop' },
    { full: 'UI/UX Design', short: 'UI/UX' },
  ];

  return (
    <div className="projects-container" id="projects">
      <h2>My Projects</h2>
      <p>
        The projects listed below are ones I've worked on. You can get an idea of my projects categorized under Web, App, UI/UX, and Desktop.
      </p>

      <div className="tab-menu">
        {categories.map((category) => (
          <button
            key={category.full}
            className={`tab-button ${selectedCategory === category.full ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category.full)}
          >
            {isMobileView ? category.short : category.full}
          </button>
        ))}
      </div>

      <div className="project-list">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="project-card"
            onClick={() => handleProjectClick(project.id)}
            style={{ cursor: 'pointer' }}
          >
            <img src={project.image} alt={project.title} />
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.category}</p>
            </div>
            <div className="view-project">
              <span style={{ marginLeft: '80px' }}>View Project</span>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;