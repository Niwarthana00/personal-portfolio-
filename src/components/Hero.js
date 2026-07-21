'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiFacebook, FiMail, FiDownload, FiArrowRight } from 'react-icons/fi';
import styles from './Hero.module.css';

const roles = ["Software Engineer", "Full Stack Developer", "UI/UX Designer", "AI Enthusiast"];

export default function Hero() {
    const [roleIndex, setRoleIndex] = useState(0);
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentRole = roles[roleIndex];
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                setText(currentRole.substring(0, text.length + 1));
            } else {
                setText(currentRole.substring(0, text.length - 1));
            }

            if (!isDeleting && text === currentRole) {
                setTimeout(() => setIsDeleting(true), 1500);
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setRoleIndex((prev) => (prev + 1) % roles.length);
            }
        }, isDeleting ? 50 : 150);

        return () => clearTimeout(timeout);
    }, [text, isDeleting, roleIndex]);

    return (
        <section className={styles.hero} id="home">
            <div className={`container ${styles.container}`}>
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className={styles.sidebar}
                >
                    <div className={styles.profileCard}>
                        <div className={styles.avatarWrapper}>
                            <img
                                src="https://i.imgur.com/CRXNei4.png"
                                alt="Niwarthana"
                                className={styles.avatar}
                            />
                        </div>
                        <div className={styles.profileInfo}>
                            <h2 className={styles.name}>Niwarthana Sathyanjali</h2>
                            <p className={styles.username}>@Niwarthana00</p>
                            <p className={styles.title}>Full Stack Software Engineer</p>
                        </div>
                        <button className={styles.editButton}>Edit profile</button>
                        <div className={styles.profileStats}>
                            <div className={styles.statItem}>
                                <span className={styles.statValue}>2</span>
                                <span className={styles.statLabel}>Followers</span>
                            </div>
                            <div className={styles.statItem}>
                                <span className={styles.statValue}>1</span>
                                <span className={styles.statLabel}>Following</span>
                            </div>
                            <div className={styles.statItem}>
                                <span className={styles.statValue}>42</span>
                                <span className={styles.statLabel}>Projects</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className={styles.mainContent}
                >
                    <div className={styles.repoHeader}>
                        <span className={styles.repoOwner}>Niwarthana00</span>
                        <span className={styles.repoDivider}>/</span>
                        <span className={styles.repoName}>README.md</span>
                    </div>
                    <div className={styles.readmeCard}>
                        <h1 className={styles.readmeTitle}>Hello, welcome to my portfolio.</h1>
                        <p className={styles.readmeText}>
                            I'm Niwarthana Sathyanjali, a Full Stack Software Engineer building modern web experiences.
                            I create responsive projects with a clean GitHub-inspired design and a polished dark theme.
                        </p>
                        <div className={styles.buttons}>
                            <a href="/assets/cvmy.pdf" target="_blank" className="btn btn-primary">
                                Download CV <FiDownload />
                            </a>
                            <a href="#projects" className="btn btn-outline">
                                My Works <FiArrowRight />
                            </a>
                        </div>
                        <div className={styles.socials}>
                            <a href="https://github.com/Niwarthana00" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                                <FiGithub />
                            </a>
                            <a href="https://www.linkedin.com/in/niwarthana-sathyanjali-822323273/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                                <FiLinkedin />
                            </a>
                            <a href="https://web.facebook.com/nivarthana.sathayanjali/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                                <FiFacebook />
                            </a>
                            <a href="mailto:sathyanjali00@gmail.com" className={styles.socialIcon}>
                                <FiMail />
                            </a>
                        </div>
                    </div>
                    <div className={styles.quickInfo}>
                        <div className={styles.quickCard}>
                            <p className={styles.quickLabel}>Location</p>
                            <p className={styles.quickValue}>Sri Lanka</p>
                        </div>
                        <div className={styles.quickCard}>
                            <p className={styles.quickLabel}>Tech Stack</p>
                            <p className={styles.quickValue}>React, Next.js, Node, CSS</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
