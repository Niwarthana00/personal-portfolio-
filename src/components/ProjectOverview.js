import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProjectOverview = ({ project }) => {
  const navigate = useNavigate();

  const handleGoToProject = () => {
    let destination;
    switch (project.id) {
      case 5:
        destination = '/project/1';
        break;
      case 6:
        destination = '/project/4';
        break;
      default:
        destination = `/project/${project.id}`;
        break;
    }
    navigate(destination);
  };

  return (
    <section className="project-overview">
      <h2 className="title-over">
        {project.category === 'UI/UX' ? 'Project Details' : 'Project Overview'}
      </h2>
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

      {project.category === 'UI/UX' ? (
        <button
          onClick={handleGoToProject}
          className='style-project'
        >
          Go to Project
        </button>
      ) : (
        <>
          <h2 className="title-stack">Technology Stack</h2>
          <div className="stack-details">
            {project.techStack?.frontend && (
              <div className="frontend">
                <h3 className="title-over2">Frontend:</h3>
                <ul className="p-backend">
                  <li>{project.techStack.frontend}</li>
                </ul>
              </div>
            )}
            {project.techStack?.backend && project.techStack.backend.length > 0 && (
              <div className="backend">
                <h3 className="title-over2">Backend:</h3>
                <ul className="p-backend">
                  {project.techStack.backend.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </>
      )}
    </section>
  );
};

export default ProjectOverview;
