'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiLinkedin, FiGithub, FiExternalLink, FiCopy, FiCheck, FiFacebook } from 'react-icons/fi';
import styles from './ContactSection.module.css';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const emailAddress = 'sathyanjali00@gmail.com';

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error('Failed to copy email: ', err);
    }
  };

  return (
    <section className={styles.contact} id="contact">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <FiMail style={{ color: 'var(--primary)' }} /> Let's Connect
      </motion.h2>

      <p className={styles.intro}>
        Whether you have an upcoming project, are interested in IoT prototypes, 
        or want to talk about data analysis pipelines, feel free to reach out. 
        I'm always open to discussing new ideas and collaborations.
      </p>

      <div className={styles.grid}>
        {/* Email Card */}
        <motion.div
          className={styles.card}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <div className={styles.iconBox}>
            <FiMail />
          </div>
          <h3 className={styles.cardTitle}>Email Address</h3>
          <p className={styles.cardValue}>{emailAddress}</p>
          <button className={`btn btn-primary ${styles.copyBtn}`} onClick={copyToClipboard}>
            {copied ? (
              <>
                <FiCheck /> Copied!
              </>
            ) : (
              <>
                <FiCopy /> Copy Email
              </>
            )}
          </button>
        </motion.div>
      </div>

      {/* Social Network Bar */}
      <motion.div
        className={styles.socialGrid}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <a
          href="https://www.linkedin.com/in/niwarthana-sathyanjali-822323273/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialBtn}
        >
          <FiLinkedin /> LinkedIn
        </a>
        <a
          href="https://github.com/Niwarthana00"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialBtn}
        >
          <FiGithub /> GitHub
        </a>
        <a
          href="https://web.facebook.com/nivarthana.sathayanjali/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialBtn}
        >
          <FiFacebook /> Facebook
        </a>
      </motion.div>
    </section>
  );
}
