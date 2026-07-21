'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiGithub, FiCheckCircle, FiX, FiFigma } from 'react-icons/fi';
import styles from './ProjectDrawer.module.css';

export default function ProjectDrawer({ project, onClose }) {
    // Modal state
    const [modalImage, setModalImage] = useState(null);
    // Selected active image
    const [selectedImage, setSelectedImage] = useState('');
    // Tab state
    const [activeTab, setActiveTab] = useState('Overview');

    useEffect(() => {
        if (project) {
            setSelectedImage(project.mainImage);
            setActiveTab('Overview');
            // Prevent scrolling on body when drawer is open
            document.body.style.overflow = 'hidden';
        }
        
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [project]);

    if (!project) return null;

    const thumbnails = project.thumbnails || [];

    // Safe features access
    const featuresList = [];
    if (project.features) {
        if (Array.isArray(project.features.keyFeatures)) {
            featuresList.push(...project.features.keyFeatures);
        } else {
            Object.entries(project.features).forEach(([key, value]) => {
                if (Array.isArray(value)) {
                    featuresList.push(...value);
                }
            });
        }
    }

    return (
        <AnimatePresence>
            <div className={styles.overlay} onClick={onClose}>
                <motion.div
                    className={styles.drawer}
                    initial={{ x: '100%' }}
                    animate={{ x: 0 }}
                    exit={{ x: '100%' }}
                    transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                    onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside drawer
                >
                    <button className={styles.closeBtn} onClick={onClose} aria-label="Close">
                        <FiX />
                    </button>

                    <div className={styles.drawerContent}>
                        <header className={styles.header}>
                            <div className={styles.titleText}>
                                <span className={styles.category}>{project.category}</span>
                                <h2 className={styles.title}>{project.title}</h2>
                            </div>
                        </header>

                        {/* Top Section: Media Grid */}
                        <div className={styles.mediaGrid}>
                            <div className={styles.mainImageWrapper}>
                                <img
                                    src={selectedImage || project.mainImage}
                                    alt={project.title}
                                    className={styles.mainImage}
                                    onClick={() => setModalImage(selectedImage || project.mainImage)}
                                    style={{ cursor: 'zoom-in' }}
                                />
                            </div>

                            {thumbnails.length > 0 && (
                                <div className={styles.thumbnails}>
                                    {thumbnails.slice(0, 4).map((thumb, index) => {
                                        const isCurrent = (selectedImage === thumb);
                                        return (
                                            <img
                                                key={index}
                                                src={thumb}
                                                alt={`Thumbnail ${index + 1}`}
                                                className={`${styles.thumbnail} ${isCurrent ? styles.active : ''}`}
                                                onClick={() => setSelectedImage(thumb)}
                                            />
                                        );
                                    })}
                                </div>
                            )}
                        </div>

                        {/* Bottom Section: Tabs and Content */}
                        <div className={styles.bottomSection}>
                            <div className={styles.tabsNav}>
                                {['Overview', 'Key features', 'Tech stack'].map((tab) => (
                                    <button
                                        key={tab}
                                        className={`${styles.tabBtn} ${activeTab === tab ? styles.activeTab : ''}`}
                                        onClick={() => setActiveTab(tab)}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </div>
                            
                            <div className={styles.tabLine}></div>

                            <div className={styles.tabContent}>
                                {activeTab === 'Overview' && (
                                    <div className={styles.textContent}>
                                        <p className={styles.text}>{project.overview}</p>
                                        
                                        <div className={styles.actionButtons}>
                                            <a 
                                                href={project.liveLink || "#!"} 
                                                target={project.liveLink ? "_blank" : "_self"} 
                                                rel="noopener noreferrer" 
                                                className={`${styles.actionBtn} ${!project.liveLink ? styles.disabledBtn : ''}`}
                                                onClick={(e) => { if (!project.liveLink) e.preventDefault(); }}
                                            >
                                                <FiExternalLink /> Live demo
                                            </a>
                                            
                                            {project.technologies?.includes('Figma') ? (
                                                <a 
                                                    href={project.link || "#!"} 
                                                    target={project.link ? "_blank" : "_self"} 
                                                    rel="noopener noreferrer" 
                                                    className={`${styles.actionBtn} ${!project.link ? styles.disabledBtn : ''}`}
                                                    onClick={(e) => { if (!project.link) e.preventDefault(); }}
                                                >
                                                    <FiFigma /> Figma
                                                </a>
                                            ) : (
                                                <a 
                                                    href={project.link || "#!"} 
                                                    target={project.link ? "_blank" : "_self"} 
                                                    rel="noopener noreferrer" 
                                                    className={`${styles.actionBtn} ${!project.link ? styles.disabledBtn : ''}`}
                                                    onClick={(e) => { if (!project.link) e.preventDefault(); }}
                                                >
                                                    <FiGithub /> Git hub
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                )}

                                {activeTab === 'Key features' && (
                                    <div className={styles.textContent}>
                                        {featuresList.length > 0 ? (
                                            <div className={styles.featureList}>
                                                {featuresList.map((feature, idx) => (
                                                    <div key={idx} className={styles.featureItem}>
                                                        <FiCheckCircle className={styles.checkIcon} />
                                                        <span>{feature}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        ) : (
                                            <p className={styles.text}>No key features listed.</p>
                                        )}
                                    </div>
                                )}

                                {activeTab === 'Tech stack' && (
                                    <div className={styles.textContent}>
                                        {project.techStack ? (
                                            <div className={styles.detailedTech}>
                                                {project.techStack.frontend && (
                                                    <div className={styles.techCategory}>
                                                        <span className={styles.techLabel}>Frontend:</span>
                                                        <p className={styles.techValue}>{project.techStack.frontend}</p>
                                                    </div>
                                                )}
                                                {project.techStack.backend && (
                                                    <div className={styles.techCategory}>
                                                        <span className={styles.techLabel}>Backend:</span>
                                                        <div className={styles.techList}>
                                                            {Array.isArray(project.techStack.backend) ? (
                                                                project.techStack.backend.map(t => (
                                                                    <span key={t} className="tag">{t}</span>
                                                                ))
                                                            ) : (
                                                                <p className={styles.techValue}>{project.techStack.backend}</p>
                                                            )}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        ) : (
                                            <div className={styles.techList}>
                                                {project.technologies.map(tech => (
                                                    <span key={tech} className="tag">{tech}</span>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </motion.div>
                
                {/* Image Modal inside Drawer */}
                {modalImage && (
                    <div className={styles.modalOverlay} onClick={(e) => { e.stopPropagation(); setModalImage(null); }}>
                        <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                            <button className={styles.modalCloseBtn} onClick={() => setModalImage(null)}>
                                &times;
                            </button>
                            <img src={modalImage} alt="Fullscreen View" className={styles.modalImage} />
                        </div>
                    </div>
                )}
            </div>
        </AnimatePresence>
    );
}
