import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/projectDetails.css';
import NavBar from '../components/NavBar';
import TechnologyIcon from '../components/TechnologyIcon';
import ProjectOverview from '../components/ProjectOverview';
import ProjectFeatures from '../components/ProjectFeatures';
import ProjectHeader from '../components/ProjectHeader';

const projectData = [
  {
    id: 1,
    category: 'Mobile Application',
    title: 'School Bus Notification System',
    mainImage: 'https://i.imgur.com/cpPwOou.png',
    thumbnails: [
      'https://i.imgur.com/Q31DWSn.jpeg',
      'https://i.imgur.com/HleknOK.jpeg',
      'https://i.imgur.com/cLf9zls.jpeg',
      'https://i.imgur.com/oWZmmgL.jpeg',
    ],
    technologies: ['Flutter', 'Firebase'],
    overview:
      'SchoolBus Connect is a comprehensive mobile application designed to streamline communication between school bus drivers and parents. The app provides real-time tracking of student status, instant notifications about delays or changes, QR code generation and scanning features, and a secure platform for managing student transportation.',
    techStack: {
      frontend: 'Developed with Flutter for seamless cross-platform compatibility',
      backend: ['Firebase Realtime Database'],
    },
    features: {
      driverPanel: [
        'QR Code Scanning: Scan student QR codes to update their status',
        'Real-Time Student Status: View and update student attendance status',
        'Student List: View the list of students on the route',
        'Student Details: View detailed information about each student',
        'Communication Hub: Real-time chat with parents',
        'Call Parents: View the parent\'s phone number for direct calls',
        'Profile Management: Update profile details, including profile picture',
      ],
      parentPanel: [
        'Real-Time Tracking: Monitor child status in real-time',
        'QR Code Generation: Generate QR codes for children based on their details',
        'Push Notifications: Receive alerts for changes in status',
        'Chat System: Communicate with drivers in real-time',
        'Payment Management: Make and track transportation payments',
        'Driver Call: View the driver\'s phone number for direct calls',
        'Driver Details: View detailed information about driver',
        'Profile Management: Update parent profile details, including profile picture',
      ],
    },
  },
  {
    id: 2,
    category: 'App Design',
    title: 'Dog Nutrition Food App',
    mainImage: 'https://i.imgur.com/cpPwOou.png',
    thumbnails: [
      'https://i.imgur.com/Q31DWSn.jpeg',
      'https://i.imgur.com/HleknOK.jpeg',
      'https://i.imgur.com/cLf9zls.jpeg',
      'https://i.imgur.com/oWZmmgL.jpeg',
    ],
    technologies: ['React Native', 'Firebase', 'Node.js'],
    overview:
      'This app offers personalized meal plans, nutrition tracking, and food recommendations for your pets. It simplifies pet care and ensures optimal nutrition.',
    techStack: {
      frontend: 'Developed with React Native for mobile compatibility',
      backend: ['Firebase', 'Node.js'],
    },
    features: {
      userPanel: [
        'User Authentication: Secure login and registration',
        'Product Catalog: Browse a wide range of nutritional food products',
        'Shopping Cart: Add items to your cart and proceed with a smooth checkout',
        'Educational Content: Access information about dog nutrition and care',
        'Payment Method: Multiple payment options for convenience',
      ],
    },
  },
  {
    id: 9,
    category: 'Web Application',
    title: 'GOBUS.LK Bus Seat Reservation System',
    mainImage: 'https://i.imgur.com/TpNv8yt.png',
    thumbnails: [
      'https://i.imgur.com/Gwj9LEm.png',
      'https://i.imgur.com/NNinfDr.png',
      'https://i.imgur.com/2JCEkw2.png',
      'https://i.imgur.com/W7b6Fjl.png',
    ],
    technologies: ['React', 'MongoDB', 'Node.js'],
    overview:
      'This web application simplifies the process of reserving and booking bus seats through a seamless user experience. It features a dynamic frontend that provides an intuitive interface for users to search for buses, view seat availability, and make reservations in real-time. The robust backend API supports advanced functionalities.',
    techStack: {
      frontend: 'Built with React, ensuring user-friendly interface.',
      backend: ['Node.js', 'Express', 'MongoDB as the database'],
    },
    features: {
      adminPanel: [
        'Add Booking: Admins can create bookings directly for commuters.',
        'Add Bus: Manage the fleet by adding bus details to the system.',
        'Add Route: Define and manage routes for buses.',
        'Manage Users: Oversee and manage commuter and operator accounts.',
        'Add Schedule: Create and update bus schedules.',
        'View Dashboard: Access a detailed dashboard with analytics and system insights.',
      ],
      operatorPanel: [
        'Add Booking: Operators can create bookings for commuters.',
        'Add Bus: Manage bus details.',
        'Add Route: Define and manage routes.',
        'Add Schedule: Create and update bus schedules.',
        'View Dashboard: Access analytics and operational data.',
      ],
      commuterPanel: [
        'Profile Management: Update personal information and preferences.',
        'Add Booking: Search for available buses, book seats, and manage reservations.',
      ],
    },
  },
];

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [modalImage, setModalImage] = useState(null);
  const project = projectData.find((p) => p.id === parseInt(id));

  if (!project) {
    return <div className="project-details-container">Project not found</div>;
  }

  return (
    <div className="project-details-container">
      <NavBar />
      <ProjectHeader project={project} />

      <div className="main-content">
        <div className="preview-section">
          <div className="main-preview">
            <img
              src={project.mainImage}
              alt={project.title}
              className="main-image"
              onClick={() => setModalImage(project.mainImage)}
            />
          </div>
          <div className="thumbnails">
            {project.thumbnails.map((thumb, index) => (
              <img
                key={index}
                src={thumb}
                alt={`Preview ${index + 1}`}
                className="thumbnail"
                onClick={() => setModalImage(thumb)}
              />
            ))}
          </div>
        </div>

        <div className="info-section">
          <div className="technologies-section">
            <h2 className="h2-title">Technologies</h2>
            <div className="tech-stack">
              {project.technologies.map((tech, index) => (
                <TechnologyIcon key={index} name={tech} />
              ))}
            </div>
          </div>

          <div className="main-features">
            <h2 className="h2-title">Main Features:</h2>
            <ul>
              {Object.keys(project.features).map((featureKey, index) => (
                <li key={index}>{featureKey.replace(/([A-Z])/g, ' $1')}</li>
              ))}
            </ul>
          </div>

          <button className="download-btn">Download</button>
        </div>
      </div>

      <div className="detailed-content">
        <ProjectOverview project={project} />
        <ProjectFeatures project={project} />
      </div>

      {modalImage && (
        <div className="modal" onClick={() => setModalImage(null)}>
          <div className="modal-content">
            <button className="close-btn" onClick={() => setModalImage(null)}>
              &times;
            </button>
            <img src={modalImage} alt="Preview" className="modal-image" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetails;