'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { projectData } from '../data/projects';
import styles from './ProjectsSection.module.css';
import ProjectDrawer from './ProjectDrawer';
import AllProjectsDrawer from './AllProjectsDrawer';

export default function ProjectsSection() {
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [isAllProjectsOpen, setIsAllProjectsOpen] = useState(false);
  
  // Show specific 3 projects on the home page
  const targetIds = [15, 1, 11];
  const filteredProjects = targetIds.map(id => projectData.find(p => p.id === id)).filter(Boolean);

  const truncateText = (text, maxLength) => {
    if (!text) return '';
    return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
  };

  return (
    <section className={styles.projects} id="projects">
      <div className={styles.header}>
        <span className={styles.subtitle}>Selected Work</span>
        <h2 className={styles.title}>Projects</h2>
        <p className={styles.intro}>A selection of things I have built over the last few years.</p>
      </div>



      {/* Projects Grid */}
      <div className={styles.grid}>
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className={styles.cardContainer}
          >
            <div className={styles.card} onClick={() => setSelectedProjectId(project.id)} style={{ cursor: 'pointer' }}>
              <div className={styles.imgWrapper}>
                <img src={project.mainImage} alt={project.title} className={styles.image} />
              </div>

              <div className={styles.cardBody}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDesc}>
                  {truncateText(project.overview, 140) || 'Detailed specifications and structural overview.'}
                </p>

                <div className={styles.techList}>
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span key={tech} className={styles.techTag}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'flex-start', marginTop: '3rem' }}>
        <button 
          className="btn btn-outline"
          onClick={() => setIsAllProjectsOpen(true)}
        >
          See all projects
        </button>
      </div>

      {/* Render Project Details Drawer if a project is selected */}
      <ProjectDrawer 
        project={projectData.find(p => p.id === selectedProjectId)} 
        onClose={() => setSelectedProjectId(null)} 
      />

      {/* Render All Projects Full-Screen Drawer */}
      <AllProjectsDrawer 
        isOpen={isAllProjectsOpen}
        onClose={() => setIsAllProjectsOpen(false)}
        onProjectSelect={(id) => {
            // Keep the 'All Projects' drawer open so we can go back to it
            setSelectedProjectId(id);    // Open the individual Project Details drawer
        }}
      />
    </section>
  );
}
