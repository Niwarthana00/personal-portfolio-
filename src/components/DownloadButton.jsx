import React from 'react';
import { Github } from 'lucide-react';
import '../styles/projectDetails.css';


const DownloadButton = ({ projectId }) => {
  const handleDownload = () => {
    let githubLink = '';

    switch (projectId) {
      case 1:
        githubLink = 'https://github.com/Niwarthana00/school_service';
        break;
      case 2:
        githubLink = 'https://github.com/Niwarthana00/Dog-Nutrition-Mobile-Application';
        break;
      case 3:
        githubLink = 'https://github.com/Niwarthana00/Restaurant-Management-System';
        break;
      case 4:
        githubLink = 'https://github.com/Niwarthana00/ICBT-SOC-TECHFIX-C-';
        break;
      case 5:
        githubLink = 'https://www.figma.com/design/qoMup9y2Nng8ancZiZyPFO/Untitled?t=0Twz1yqxla17zfAn-0Q9wQ';
        break;
      case 6:
        githubLink = 'https://www.figma.com/design/6mhPp53w9ZBLulYghKEy0C/Untitled?node-id=0-1&p=f&t=mAjpmDcYGDAquEVn-0';
        break;
      case 7:
        githubLink = 'https://github.com/Niwarthana00/Employee_Management-_System';
        break;
      case 8:
        githubLink = 'https://github.com/Niwarthana00/ICBT-SOC-TECHFIX-C-';
        break;
      case 9:
        githubLink = 'https://github.com/Niwarthana00/gobus.lk';
        break;
      case 10:
        githubLink = 'https://www.figma.com/design/aPuc9CCPb1oYM6w8Y3GAUa/shopping_site?t=FyiueG3jAoaK47Mx-0Q9wQ';
        break;
      case 11:
        githubLink = 'https://github.com/Niwarthana00/supplychain-managment-system';
        break;
      default:
        githubLink = '#';
    }

    if (githubLink !== '#') {
      window.open(githubLink, '_blank');
    } else {
      alert('Repository link not available for this project');
    }
  };

  return (
    <button className="view-project-btn" onClick={handleDownload}>
      {projectId === 10 || projectId === 6 || projectId === 5 ? 'View Design' : 'View Project'}
    </button>
  );
};

export default DownloadButton;