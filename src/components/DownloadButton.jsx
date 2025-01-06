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
      case 4:
        githubLink = 'https://github.com/Niwarthana00/ICBT-SOC-TECHFIX-C-';
        break;
      case 9:
        githubLink = 'https://github.com/Niwarthana00/gobus.lk';
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
    <button 
      className="download-btn flex items-center justify-center"
      onClick={handleDownload}
    >
      <Github className="w-5 h-5" />
      <span className="ml-6 new">View Repository</span>
    </button>
  );
};

export default DownloadButton;