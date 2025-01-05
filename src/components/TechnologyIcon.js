import React from 'react';

export const technologyIcons = {
  'React': 'https://i.imgur.com/M2CLgU7.png',
  'MongoDB': 'https://i.imgur.com/7ySkjOw.png',
  'Node.js': 'https://i.imgur.com/7wMpRDf.png',
  'Flutter': 'https://cdn.freelogovectors.net/wp-content/uploads/2023/09/flutter_logo-freelogovectors.net_-180x133.png',
  'Firebase': 'https://i.imgur.com/iEOzzZE.png',
  'React Native': 'https://i.imgur.com/sZwDrBx.png', // Example React Native logo
  'Express.js': 'https://i.imgur.com/Dkz1IbP.png', // Example Express.js logo
  'Redux': 'https://i.imgur.com/Ha8YSU9.png', // Example Redux logo
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
