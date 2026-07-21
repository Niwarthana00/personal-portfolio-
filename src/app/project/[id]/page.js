'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiCheckCircle, FiArrowLeft } from 'react-icons/fi';
import { projectData } from '../../../data/projects';
import Sidebar from '@/components/Sidebar';
import styles from './page.module.css';

export default function ProjectDetails() {
    const { id } = useParams();
    const router = useRouter();
    const project = projectData.find((p) => p.id === parseInt(id));

    // Modal state
    const [modalImage, setModalImage] = useState(null);
    // Selected active image (static slideshow alternative)
    const [selectedImage, setSelectedImage] = useState('');
    // Tab state
    const [activeTab, setActiveTab] = useState('Overview');

    useEffect(() => {
        if (project) {
            setSelectedImage(project.mainImage);
        }
    }, [project]);

    if (!project) {
        return (
            <div className="flex-center" style={{ minHeight: '100vh', flexDirection: 'column', gap: '1rem', backgroundColor: '#0d1117' }}>
                <h2 style={{ color: 'white' }}>Project not found</h2>
                <button onClick={() => router.push('/')} className="btn btn-outline">Go Back</button>
            </div>
        );
    }

    const thumbnails = project.thumbnails || [];
    const projectImages = [project.mainImage, ...thumbnails];

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
        <div className="app-container">
            <Sidebar />
            
            <main className="main-content" style={{ backgroundColor: '#0d1117', minHeight: '100vh', color: '#c9d1d9', width: '100%' }}>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className={`container ${styles.page}`}
                >
                    {/* Breadcrumbs Navigation */}
                    <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
                        <Link href="/">Home</Link>
                        <span className={styles.separator}>&gt;</span>
                        <Link href="/#projects">Projects</Link>
                        <span className={styles.separator}>&gt;</span>
                        <Link href={`/?category=${encodeURIComponent(project.category)}#projects`} className={styles.activeBreadcrumb}>
                            {project.category}
                        </Link>
                    </nav>


                    <header className={styles.header}>
                        <div className={styles.titleContainer}>

                            <div className={styles.titleText}>
                                <span className={styles.category} style={{ color: 'var(--primary)', fontSize: '0.85rem' }}>{project.category}</span>
                                <h1 className={styles.title} style={{ color: 'white', fontSize: '2rem', fontWeight: '600', marginTop: '0.25rem' }}>{project.title}</h1>
                            </div>
                        </div>
                    </header>

                    {/* Top Section: Media Grid */}
                    <div className={styles.mediaGrid}>
                        {/* Left Column: Images */}
                        <div className={styles.imageColumn}>
                            <div className={styles.mainImageWrapper}>
                                <img
                                    src={selectedImage || project.mainImage}
                                    alt={project.title}
                                    className={styles.mainImage}
                                    onClick={() => setModalImage(selectedImage || project.mainImage)}
                                    style={{ cursor: 'pointer' }}
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

                        {/* Right Column: Video Placeholder */}
                        <div className={styles.videoColumn}>
                            <div className={styles.videoPlaceholder}>
                                <div className={styles.playButton}>
                                    <div className={styles.playTriangle}></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Section: Tabs and Content */}
                    <div className={styles.bottomSection}>
                        {/* Tabs Navigation */}
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

                        {/* Tab Content */}
                        <div className={styles.tabContent}>
                            {activeTab === 'Overview' && (
                                <div className={styles.textContent}>
                                    <p className={styles.text}>{project.overview}</p>
                                    
                                    {/* Action Buttons moved here as requested */}
                                    <div className={styles.actionButtons}>
                                        <a href={project.liveLink || "#"} target={project.liveLink ? "_blank" : "_self"} rel="noopener noreferrer" className={styles.actionBtn}>
                                            <FiExternalLink /> Live demo
                                        </a>
                                        <a href={project.link || "#"} target={project.link ? "_blank" : "_self"} rel="noopener noreferrer" className={styles.actionBtn}>
                                            <FiGithub /> Git hub
                                        </a>
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
                </motion.div>
            </main>

            {/* Image Modal */}
            {modalImage && (
                <div className={styles.modalOverlay} onClick={() => setModalImage(null)}>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <button className={styles.closeBtn} onClick={() => setModalImage(null)} style={{ background: '#161b22', border: '1px solid #30363d' }}>
                            &times;
                        </button>
                        <img src={modalImage} alt="Fullscreen View" className={styles.modalImage} />
                    </div>
                </div>
            )}
        </div>
    );
}
