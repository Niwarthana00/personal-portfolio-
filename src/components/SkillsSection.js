'use client';

import { motion } from 'framer-motion';
import { FiCpu, FiCode, FiLayers, FiDatabase, FiTool, FiSliders } from 'react-icons/fi';
import styles from './SkillsSection.module.css';

const skillCategories = [
  {
    title: 'Languages',
    icon: <FiCode style={{ color: 'var(--primary)' }} />,
    skills: ['Python', 'C++', 'Java', 'PHP']
  },
  {
    title: 'Frameworks & Libraries',
    icon: <FiLayers style={{ color: 'var(--primary)' }} />,
    skills: ['React.js', 'Node.js', 'Flutter', 'ASP.NET', 'Laravel', 'Numpy', 'Pandas', 'Apache Spark', 'Apache Kafka']
  },
  {
    title: 'Databases',
    icon: <FiDatabase style={{ color: 'var(--primary)' }} />,
    skills: ['MySQL', 'MongoDB', 'Firebase', 'PostgreSQL']
  },
  {
    title: 'Tools & Platforms',
    icon: <FiTool style={{ color: 'var(--primary)' }} />,
    skills: ['Docker', 'Git/GitHub', 'CI/CD Pipelines', 'Postman', 'VS Code', 'Debezium', 'Looker Studio']
  },
  {
    title: 'Technical Competencies',
    icon: <FiSliders style={{ color: 'var(--primary)' }} />,
    skills: ['JWT Authentication', 'Payment Gateway Integration', 'Machine Learning', 'Data Analytics', 'Data Pipelines']
  }
];

export default function SkillsSection() {
  return (
    <section className={styles.skills} id="skills">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <FiCpu style={{ color: 'var(--primary)' }} /> Skills & Technologies
      </motion.h2>

      <motion.div
        className={styles.card}
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        {skillCategories.map((category, index) => (
          <div key={index} className={styles.categoryRow}>
            <div className={styles.categoryLabel}>
              {category.icon}
              <span>{category.title}</span>
            </div>
            <div className={styles.tagsContainer}>
              {category.skills.map((skill, sIdx) => (
                <span key={sIdx} className={styles.skillTag}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
