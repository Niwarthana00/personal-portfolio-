import React from 'react';

const ProjectOverview = ({ project }) => {
  return (
    <section className="project-overview">
      <h2 className="title-over">Project Overview</h2>
      <hr
        style={{
          backgroundColor: "#e4e4e4",
          height: "2px",
          border: "none",
          marginBottom: "23px",
          marginTop: "-32px",
        }}
      />
      <p className="p-over">{project.overview}</p>

      <h2 className="title-stack">Technology Stack</h2>
      <div className="stack-details">
        {project.techStack.frontend && (
          <div className="frontend">
            <h3 className="title-over2">Frontend:</h3>
            <ul className="p-backend">
              <li>{project.techStack.frontend}</li>
            </ul>
          </div>
        )}
        {project.techStack.backend && project.techStack.backend.length > 0 && (
          <div className="backend">
            <h3 className="title-over2">Backend:</h3>
            <ul className="p-backend">
              {project.techStack.backend.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </div>
        )}
        {(!project.techStack.backend || project.techStack.backend.length === 0) && (
          <div className="backend">
            <h3 className="title-over2">Backend:</h3>
            <p className="p-backend">No backend technologies defined for this project.</p>
          </div>
        )}
      </div>
      </section>
  
  );
};

export default ProjectOverview;
