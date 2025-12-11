import React from 'react';

const ProjectHeader = ({ project }) => {
  const getProjectLogo = (projectId) => {
    switch (projectId) {
      case 1:
        return 'https://i.imgur.com/yXWum8p.png';
      case 2:
        return 'https://i.imgur.com/i1AL7bv.png';
      case 3:
        return 'https://i.imgur.com/m5sWi0H.png';
      case 4:
        return 'https://i.imgur.com/6o95acR.png';
      case 5:
        return 'https://i.imgur.com/yXWum8p.png';
      case 6:
        return 'https://i.imgur.com/6o95acR.png';
      case 7:
        return 'https://i.imgur.com/jmQhRkD.png';
      case 8:
        return 'https://i.imgur.com/6o95acR.png';
      case 9:
        return 'https://i.imgur.com/lkQ4X7s.png';
      case 10:
        return 'https://i.imgur.com/2hI3qwb.png';
      case 11:
        return require('../img/blockchain/logo.png');
      case 13:
        return require('../img/sahana/logo.png');
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
      case 4:
        return {
          ...baseStyle,
          height: '55px',
          width: '100px', // Specific height for ICBT SOC TECHFIX
        };
      case 9:
        return {
          ...baseStyle,
          height: '55px', // Specific height for GOBUS.LK
        };
      case 11:
        return {
          ...baseStyle,
          height: '80px', // Adjust height for Chain Flow logo
        };
      case 13:
        return {
          ...baseStyle,
          height: '70px',
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
