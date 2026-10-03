'use client';

import { motion } from 'framer-motion';
import { FiCpu, FiCode, FiLayers, FiDatabase, FiTool, FiSliders } from 'react-icons/fi';
import styles from './SkillsSection.module.css';

const skillCategories = [
  {
    title: 'Languages',
    icon: <FiCode style={{ color: 'var(--primary)' }} />,
    skills: ['Python', 'JavaScript', 'TypeScript', 'C++', 'Java', 'PHP', 'SQL']
  },
  {
    title: 'Frameworks & Libraries',
    icon: <FiLayers style={{ color: 'var(--primary)' }} />,
    skills: ['React Native', 'Next.js', 'React.js', 'Node.js', 'Flutter', 'Apache Kafka', 'Apache Spark', 'Pandas', 'Numpy']
  },
  {
    title: 'Databases',
    icon: <FiDatabase style={{ color: 'var(--primary)' }} />,
    skills: ['TimescaleDB', 'PostgreSQL', 'MySQL', 'MongoDB', 'Firebase']
  },
  {
    title: 'Tools & Platforms',
    icon: <FiTool style={{ color: 'var(--primary)' }} />,
    skills: ['Power BI', 'ESP32 IoT', 'Docker', 'Debezium', 'Git/GitHub', 'CI/CD Pipelines', 'Postman']
  },
  {
    title: 'Technical Competencies',
    icon: <FiSliders style={{ color: 'var(--primary)' }} />,
    skills: ['Event-Driven Architecture', 'Computer Vision (YOLO)', 'Data Engineering', 'IoT Telemetry', 'Machine Learning', 'Data Analytics']
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
