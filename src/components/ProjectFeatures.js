import React from 'react';

const ProjectFeatures = ({ project }) => {
  const renderFeatures = () => {
    switch (project.id) {
      case 1: // School Bus Notification System
        return (
          <>
            <div>
              <h3 className="h3-class">1. Driver Panel:</h3>
              <ul className="ul-class">
                {project.features.driverPanel.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="h3-class">2. Parent Panel:</h3>
              <ul className="ul-class">
                {project.features.parentPanel.map((feature, index) => (
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
                {project.features.adminPanel.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="h3-class">2. Operator Panel:</h3>
              <ul className="ul-class">
                {project.features.operatorPanel.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="h3-class">3. Commuter Panel:</h3>
              <ul className="ul-class">
                {project.features.commuterPanel.map((feature, index) => (
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
                {project.features.userPanel.map((feature, index) => (
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
      case 9:
        return "The Bus Seat Reservation and Booking Web App offers three distinct user panels with tailored functionalities for admins, operators, and commuters:";
      case 2:
        return "The Dog Nutrition Food App simplifies pet care with personalized features designed for optimal pet nutrition management:";
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
