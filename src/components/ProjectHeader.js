import React from 'react';

const ProjectHeader = ({ project }) => {
  const getProjectLogo = (projectId) => {
    switch (projectId) {
      case 1: 
        return 'https://i.imgur.com/yXWum8p.png'; 
      case 2: 
        return 'https://i.imgur.com/T4FJyY8.png'; 
      case 9: 
        return 'https://i.imgur.com/lkQ4X7s.png'; 
      default:
        return '/images/default-logo.png'; 
    }
  };

  const getLogoStyle = (projectId) => {
    const baseStyle = {
      width: 'auto',
      height: '60px',
      objectFit: 'contain',
    };

    switch (projectId) {
      case 1: 
        return {
          ...baseStyle,
          height: '65px', // Specific height for School Bus Connect
        };
      case 2: 
        return {
          ...baseStyle,
          height: '70px', // Specific height for Dog Nutrition Food App
        };
      case 9: 
        return {
          ...baseStyle,
          height: '55px', // Specific height for GOBUS.LK
        };
      default:
        return baseStyle;
    }
  };

  return (
    <div className="project-header">
      <div className="logo-container">
        <img 
          src={getProjectLogo(project.id)} 
          alt={`${project.title} Logo`} 
          className="project-logo"
          style={getLogoStyle(project.id)}
        />
        <h1 className="title">{project.title}</h1>
      </div>
    </div>
  );
};

export default ProjectHeader;
