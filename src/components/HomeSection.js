'use client';

import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiEye, FiFacebook, FiSend } from 'react-icons/fi';
import styles from './HomeSection.module.css';

export default function HomeSection() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.intro}>
        {/* Main Role Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={styles.headline}
        >
          Software Engineer & Mobile App Developer
        </motion.h1>

        {/* Professional Summary */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={styles.description}
        >
          Specializing in data science, real-time web applications, and intuitive mobile solutions. Focused on writing clean, maintainable code and delivering high-performance software engineering solutions.
        </motion.p>

        {/* Call-to-action & Socials */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className={styles.actions}
        >
          <a href="https://drive.google.com/file/d/1EMtcEzucP5fJRvcqCOLCzNgyAg5_Bk01/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            <FiEye /> View CV
          </a>
          <a href="#contact" className="btn btn-outline">
            <FiSend /> Get in Touch
          </a>

          <div className={styles.socials}>
            <a
              href="https://github.com/Niwarthana00"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="GitHub Profile"
            >
              <FiGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/niwarthana-sathyanjali-822323273/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="LinkedIn Profile"
            >
              <FiLinkedin />
            </a>
            <a
              href="https://web.facebook.com/nivarthana.sathayanjali/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="Facebook Profile"
            >
              <FiFacebook />
            </a>
            <a
              href="mailto:sathyanjali00@gmail.com"
              className={styles.socialLink}
              aria-label="Email Me"
            >
              <FiMail />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
