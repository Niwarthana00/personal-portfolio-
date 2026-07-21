'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Projects.module.css';

import { projectData } from '../data/projects';

const categories = ['All', 'Mobile Application', 'Web Application', 'Desktop Application', 'UI/UX Design', 'AI & Machine Learning'];

export default function Projects() {
    const [filter, setFilter] = useState('All');

    const filteredProjects = filter === 'All'
        ? projectData
        : projectData.filter(p => p.category === filter);

    return (
        <section className={styles.section} id="projects">
            <div className="container">
                <div className={styles.title}>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Featured Projects
                    </motion.h2>
                    <p>A selection of my recent work across various domains.</p>
                </div>

                <div className={styles.tabs}>
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`${styles.tab} ${filter === cat ? styles.active : ''}`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <motion.div layout className={styles.grid}>
                    <AnimatePresence mode='popLayout'>
                        {filteredProjects.map((project) => (
                            <div key={project.id} style={{ display: 'contents' }}>
                                <motion.div
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                    className=""
                                >
                                    <Link href={`/project/${project.id}`} className={styles.card}>
                                        <div className={styles.imageWrapper}>
                                            <img src={project.mainImage} alt={project.title} className={styles.image} />
                                        </div>
                                        <div className={styles.content}>
                                            <span className={styles.category}>{project.category}</span>
                                            <h3 className={styles.cardTitle}>{project.title}</h3>
                                            <div className={styles.techStack}>
                                                {project.technologies.map(tech => (
                                                    <span key={tech} className={styles.techTag}>{tech}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            </div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}
