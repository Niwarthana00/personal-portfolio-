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
                    className={styles.content}
                >
                    <h1>Hello, It's me</h1>
                    <h2>Niwarthana Sathyanjali</h2>
                    <h3>
                        And I'm a <span className={styles.roleText}>{text}</span>
                    </h3>

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
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className={styles.imageWrapper}
                >
                    <div className={styles.circle1}></div>
                    <div className={styles.circle2}></div>
                    <img
                        src="https://i.imgur.com/CRXNei4.png"
                        alt="Niwarthana"
                        className={styles.profileImg}
                    />
                </motion.div>
            </div>
        </section>
    );
}
