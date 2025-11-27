import React from 'react';

export const technologyIcons = {
  'React': 'https://i.imgur.com/M2CLgU7.png',
  'MongoDB': 'https://i.imgur.com/7ySkjOw.png',
  'Node.js': 'https://i.imgur.com/7wMpRDf.png',
  'Flutter': 'https://cdn.freelogovectors.net/wp-content/uploads/2023/09/flutter_logo-freelogovectors.net_-180x133.png',
  'Firebase': 'https://i.imgur.com/iEOzzZE.png',
  '.NET': 'https://miro.medium.com/v2/resize:fit:1200/1*K6zMaeRnj8w-Ai8PJILUYA.png',
  'C#': 'https://miro.medium.com/v2/resize:fit:375/1*NhpIIUL7AFgKKn30gKoDUw.png',
  'SQL Server': 'https://i.imgur.com/WMQ7s2a.png',
  'Html': 'https://i.imgur.com/2BbESbX.png',
  'PHP': 'https://i.imgur.com/BIbj7eY.png',
  'Javascript': 'https://i.imgur.com/06Q3p4q.png',
  'Mysql': 'https://i.imgur.com/L7UVlwi.png',
  'Java': 'https://i.imgur.com/05ObANe.png',
  'MySQL': 'https://i.imgur.com/L7UVlwi.png',
  'MySQL': 'https://i.imgur.com/L7UVlwi.png',
  'Figma': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1667px-Figma-logo.svg.png',
  'Python': require('../img/blockchain/Python.png'),
  'HTML': require('../img/blockchain/html.png'),
  'CSS': require('../img/blockchain/CSS.png'),
};

const TechnologyIcon = ({ name }) => {
  // Fallback for unknown technology
  const defaultIcon = 'https://i.imgur.com/Pl3YN7K.png'; // Default icon URL
  const iconSrc = technologyIcons[name] || defaultIcon;

  return (
    <div className="tech-item">
      <img src={iconSrc} alt={name} className="tech-icon" />
      <span>{name}</span>
    </div>
  );
};

export default TechnologyIcon;
