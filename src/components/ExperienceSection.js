'use client';

import { motion } from 'framer-motion';
import { FiBriefcase } from 'react-icons/fi';
import styles from './ExperienceSection.module.css';

export default function ExperienceSection() {
  const experiences = [
    {
      role: 'Software Engineer',
      company: 'Triton Solutions',
      period: 'Jan 2026 – Present',
      bullets: [
        'Designed and implemented scalable backend infrastructures using Supabase, leveraging its real-time database and edge functions.',
        'Architected relational schemas in PostgreSQL, ensuring high performance for community-driven web and mobile applications.',
        'Developed secure authentication systems, real-time messaging, and matchmaking logic with automated notification services.',
        'Streamlined development workflows by implementing GitHub Actions for CI/CD automation.'
      ]
    },
    {
      role: 'Intern Software Engineer',
      company: 'SLIA Institute', 
      period: 'May 2025 – Dec 2025',
      bullets: [
        'Built websites with JWT authentication using React.js and Node.js following RESTful API architecture.',
        'Developed online ticket reservation system and Payment Portal with payment gateway integration.',
        'Designed UI/UX for all systems and created admin dashboards; managed servers, mail, and MySQL DBs.'
      ]
    },
    {
      role: 'Mobile Developer Intern',
      company: 'Synnex IT Solutions',
      period: 'Jan 2025 – May 2025',
      bullets: [
        'Developed cross-platform Android & iOS apps using Flutter following clean architecture patterns.',
        'Contributed to multiple client projects, enhancing both front-end and back-end functionalities.',
        'Implemented responsive UI components and integrated backend services for web and mobile platforms.',
        'Strengthened practical development skills in collaborative, real-world project environments.'
      ]
    }
  ];

  return (
    <section className={styles.experience} id="experience">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <FiBriefcase style={{ color: 'var(--primary)' }} /> Experience
      </motion.h2>

      <motion.div
        className={styles.timelineContainer}
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className={styles.timeline}>
          {experiences.map((item, idx) => (
            <div key={idx} className={styles.timelineItem}>
              <div className={styles.timelineDot} />
              <div className={styles.timelineHeader}>
                <h3 className={styles.degree}>{item.role}</h3>
                <span className={styles.period}>{item.period}</span>
              </div>
              <div className={styles.institution}>{item.company}</div>
              <ul className={styles.bulletList}>
                {item.bullets.map((bullet, bIdx) => (
                  <li key={bIdx}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
