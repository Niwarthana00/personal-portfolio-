import React from 'react';

const ProjectFeatures = ({ project }) => {
  const renderFeatures = () => {
    if (!project.features) {
      return <p>Loading features...</p>;
    }

    // Check for the category 'UI/UX'
    if (project.category === 'UI/UX') {
      return <p>You can see all the features from school services mobile application</p>;
    }

    switch (project.id) {
      case 1: // School Bus Notification System
        return (
          <>
            <div>
              <h3 className="h3-class">1. Driver Panel:</h3>
              <ul className="ul-class">
                {Array.isArray(project.features.driverPanel) && project.features.driverPanel.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="h3-class">2. Parent Panel:</h3>
              <ul className="ul-class">
                {Array.isArray(project.features.parentPanel) && project.features.parentPanel.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </>
        );
      case 9: // GOBUS.LK Bus Seat Reservation System
        return (
          <>
            <div>
              <h3 className="h3-class">1. Admin Panel:</h3>
              <ul className="ul-class">
                {Array.isArray(project.features.adminPanel) && project.features.adminPanel.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="h3-class">2. Operator Panel:</h3>
              <ul className="ul-class">
                {Array.isArray(project.features.operatorPanel) && project.features.operatorPanel.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="h3-class">3. Commuter Panel:</h3>
              <ul className="ul-class">
                {Array.isArray(project.features.commuterPanel) && project.features.commuterPanel.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </>
        );
      case 2: // Dog Nutrition Food App
        return (
          <>
            <div>
              <h3 className="h3-class">1. User Panel:</h3>
              <ul className="ul-class">
                {Array.isArray(project.features.userPanel) && project.features.userPanel.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </>
        );
      case 3: // Restaurant Management System
        return (
          <>
            <div>
              <h3 className="h3-class">1. Customer Panel:</h3>
              <ul className="ul-class">
                {Array.isArray(project.features.customerPanel) && project.features.customerPanel.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="h3-class">2. Admin Panel:</h3>
              <ul className="ul-class">
                {Array.isArray(project.features.adminPanel) && project.features.adminPanel.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="h3-class">3. Staff Panel:</h3>
              <ul className="ul-class">
                {Array.isArray(project.features.staffPanel) && project.features.staffPanel.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </>
        );
      case 4: // Computer Shop Website
        return (
          <>
            <div>
              <h3 className="h3-class">1. Customer Panel:</h3>
              <ul className="ul-class">
                {Array.isArray(project.features.customerPanel) && project.features.customerPanel.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="h3-class">2. Admin Panel:</h3>
              <ul className="ul-class">
                {Array.isArray(project.features.adminPanel) && project.features.adminPanel.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="h3-class">3. Supplier Panel:</h3>
              <ul className="ul-class">
                {Array.isArray(project.features.supplierPanel) && project.features.supplierPanel.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </>
        );
      case 7: // Employee Management System
        return (
          <>
            <div>
              <h3 className="h3-class">1. HR Manager Panel:</h3>
              <ul className="ul-class">
                {Array.isArray(project.features.hrManagerPanel) && project.features.hrManagerPanel.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="h3-class">2. Admin Panel:</h3>
              <ul className="ul-class">
                {Array.isArray(project.features.adminPanel) && project.features.adminPanel.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="h3-class">3. OOP Concepts Used:</h3>
              <ul className="ul-class">
                {project.oopConcepts && Object.entries(project.oopConcepts).map(([concept, description], index) => (
                  <li key={index}>{`${concept.charAt(0).toUpperCase() + concept.slice(1)}: ${description}`}</li>
                ))}
              </ul>
            </div>
          </>
        );

        case 8: 
        return (
          <>
            <div>
              <h3 className="h3-class">1. Admin Panel:</h3>
              <ul className="ul-class">
                {Array.isArray(project.features.adminPanel) && project.features.adminPanel.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </>
        );
      default:
        return <p>No features available for this project.</p>;
    }
  };
 
  const renderDescription = () => {
    switch (project.id) {
      case 1:
        return "SchoolBus Connect offers two specialized panels tailored for drivers and parents:";
      case 2:
        return "The Dog Nutrition Food App simplifies pet care with personalized features designed for optimal pet nutrition management:";
      case 3:
        return "The Restaurant Management System provides three specialized panels for customers, administrators, and staff with features for online food ordering, table reservations, and order management:";
      case 4:
        return "The Computer Shop Website provides three specialized panels for customers, administrators, and suppliers with comprehensive features for managing the online computer shop:";
      case 5:
        return "The School Service App UI Design project focuses on creating a user-friendly interface for a school service app with interactive prototypes and visual design systems:";
        case 7:
        return "The Bus Seat Reservation and Booking Web App offers three distinct user panels with tailored functionalities for admins, operators, and commuters:";
      case 8:
          return "The Computer Shop Admin Panel provides an intuitive interface for administrators to manage the online computer shop with ease.";
      case 9:
            return "The Bus Seat Reservation and Booking Web App offers three distinct user panels with tailored functionalities for admins, operators, and commuters:";  
      default:
        return "Features for this project are not available.";
    }
  };
  
  return (
    
    <section className="features">
      
      <h2 className="feature-title">Features</h2>
      <hr
        style={{
          backgroundColor: "#e4e4e4",
          height: "2px",
          border: "none",
          marginBottom: "23px",
          marginTop: "-32px",
        }}
      />
      <p className="feature-p">{renderDescription()}</p>
      <div>{renderFeatures()}</div>
    </section>
  );
};

export default ProjectFeatures;
