'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiChevronLeft } from 'react-icons/fi';
import { projectData } from '../data/projects';
import styles from './AllProjectsDrawer.module.css';

export default function AllProjectsDrawer({ isOpen, onClose, onProjectSelect }) {
    const [filter, setFilter] = useState('All');

    const rawCategories = [...new Set(projectData.map(project => project.category))];
    const sortedCategories = rawCategories.sort((a, b) => {
        if (a === 'AI & ML') return -1;
        if (b === 'AI & ML') return 1;
        return a.localeCompare(b);
    });
    const categories = ['All', ...sortedCategories];
    
    const filteredProjects = filter === 'All' 
        ? projectData 
        : projectData.filter(project => project.category === filter);

    const truncateText = (text, maxLength) => {
        if (!text) return '';
        return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
    };

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            
            // Listen for sidebar clicks to close the drawer
            const handleNavClick = () => {
                onClose();
            };
            window.addEventListener('sidebarNavClicked', handleNavClick);
            
            return () => {
                document.body.style.overflow = 'unset';
                window.removeEventListener('sidebarNavClicked', handleNavClick);
            };
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className={styles.overlay} onClick={onClose}>
                <motion.div
                    className={styles.drawer}
                    initial={{ x: '100%' }}
                    animate={{ x: 0 }}
                    exit={{ x: '100%' }}
                    transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                    onClick={(e) => e.stopPropagation()}
                    <div className={styles.drawerContent}>
                        <div className={styles.topNav}>
                            <button onClick={onClose} className={styles.backBtn}>
                                <FiChevronLeft className={styles.backIcon} /> Back
                            </button>
                        </div>

                        <header className={styles.header}>
                            <span className={styles.subtitle}>Selected Work</span>
                            <h2 className={styles.title}>All Projects</h2>
                            <p className={styles.intro}>Explore my complete portfolio of work.</p>
                        </header>

                        {/* Filter Buttons */}
                        <div className={styles.filterContainer}>
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setFilter(category)}
                                    className={`${styles.filterBtn} ${filter === category ? styles.active : ''}`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>

                        {/* Projects Grid */}
                        <div className={styles.grid}>
                            {filteredProjects.map((project, index) => (
                                <motion.div
                                    key={project.id}
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: index * 0.05 }}
                                    className={styles.cardContainer}
                                >
                                    <div className={styles.card} onClick={() => onProjectSelect(project.id)}>
                                        <div className={styles.imgWrapper}>
                                            <img src={project.mainImage} alt={project.title} className={styles.image} />
                                        </div>

                                        <div className={styles.cardBody}>
                                            <h3 className={styles.projectTitle}>{project.title}</h3>
                                            <p className={styles.projectDesc}>
                                                {truncateText(project.overview, 100) || 'Detailed specifications and structural overview.'}
                                            </p>

                                            <div className={styles.techList}>
                                                {project.technologies.slice(0, 3).map((tech) => (
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
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
}
