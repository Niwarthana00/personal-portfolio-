'use client';

import { motion } from 'framer-motion';
import { FiBookmark } from 'react-icons/fi';
import styles from './AboutSection.module.css';

export default function AboutSection() {
  return (
    <section className={styles.about} id="about">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <FiBookmark style={{ color: 'var(--primary)' }} /> About Me
      </motion.h2>

      <div className={styles.content}>
        <motion.div
          className={styles.bioSection}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p>
            I am a passionate and dedicated <strong>Software Engineer</strong> specializing in full-stack, mobile, and data science workflows. With 1+ years of professional experience across designing scalable backends, real-time structures, and hybrid mobile solutions, I focus on delivering optimized and clean architectures.
          </p>
          <p>
            My technical skills are centered around building high-performance automation pipelines, writing robust APIs, and structuring intuitive user experiences. I thrive on translating abstract customer requirements into fully deployable, production-ready applications.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
