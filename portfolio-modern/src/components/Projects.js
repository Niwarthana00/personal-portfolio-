'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Projects.module.css';

const projectData = [
    {
        id: 14,
        category: 'AI & Machine Learning',
        title: 'AI-Powered Text Summarizer System',
        image: '/assets/AI-summery/main.png',
        link: 'https://github.com/Niwarthana00/tex-summery-AI',
        technologies: ['Python', 'PyTorch', 'ML'],
    },
    {
        id: 1,
        category: 'Mobile application',
        title: 'School Service Bus Notification App',
        image: 'https://i.imgur.com/cpPwOou.png',
        link: '',
        technologies: ['React Native', 'Node.js', 'MongoDB'],
    },
    {
        id: 2,
        category: 'Mobile application',
        title: 'Dog Nutrition Food App',
        image: 'https://i.imgur.com/tB0qcze.png',
        link: '',
        technologies: ['React Native', 'Firebase', 'Node.js'],
    },
    {
        id: 3,
        category: 'Web application',
        title: 'The Gallery Cafe Website',
        image: 'https://i.imgur.com/vETc3Rj.png',
        link: '',
        technologies: ['React', 'Node.js', 'MongoDB'],
    },
    {
        id: 11,
        category: 'Web application',
        title: 'Chain Flow',
        image: '/assets/blockchain/main.png',
        link: '',
        technologies: ['React', 'Blockchain', 'Web3.js', 'Solidity'],
    },
    {
        id: 13,
        category: 'Mobile application',
        title: 'Sahana - Disaster Relief App',
        image: '/assets/sahana/mainimg.png',
        link: 'https://github.com/Niwarthana00/flooding-Relief-app',
        technologies: ['Flutter', 'Firebase', 'Dart', 'Agora RTC'],
    },
    {
        id: 8,
        category: 'Desktop application',
        title: 'Computer Shop Admin Panel',
        image: 'https://i.imgur.com/dSJH7XW.png',
        link: '',
        technologies: ['Java', 'MySQL', 'Swing'],
    },
    {
        id: 5,
        category: 'UI/UX Design',
        title: 'School Service App UI Design',
        image: 'https://i.imgur.com/9auYsFG.png',
        link: '',
        technologies: ['Figma', 'Adobe XD'],
    }
];

const categories = ['All', 'AI & Machine Learning', 'Mobile application', 'Web application', 'Desktop application', 'UI/UX Design'];

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
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className={styles.card}
                            >
                                <div className={styles.imageWrapper}>
                                    <img src={project.image} alt={project.title} className={styles.image} />
                                    <div className={styles.overlay}>
                                        <span className={styles.viewBtn}>View Details</span>
                                    </div>
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
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}
