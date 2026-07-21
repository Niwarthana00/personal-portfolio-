'use client';

import { motion } from 'framer-motion';
import { FiLayers, FiDatabase, FiCpu, FiLayout, FiSliders } from 'react-icons/fi';
import styles from './ServicesSection.module.css';

const servicesList = [
  {
    icon: <FiDatabase />,
    title: 'Data Analysis',
    desc: 'Transforming complex datasets into actionable business intelligence. Designing visual reports and statistical systems to drive strategic decisions.'
  },
  {
    icon: <FiCpu />,
    title: 'IoT Prototyping',
    desc: 'Developing firmware and physical schematics using microcontrollers, sensors, and actuator modules to interface software systems with physical environments.'
  },
  {
    icon: <FiLayout />,
    title: 'Software Development',
    desc: 'Engineering robust full-stack desktop, mobile, and web applications using structured technologies such as Next.js, Flutter, and SQL.'
  },
  {
    icon: <FiSliders />,
    title: 'UI/UX Design',
    desc: 'Designing user-friendly, responsive screen wireframes and functional layouts in Figma with intuitive user journeys and interactions.'
  }
];

export default function ServicesSection() {
  return (
    <section className={styles.services} id="services">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <FiLayers style={{ color: 'var(--primary)' }} /> Services I Offer
      </motion.h2>

      <div className={styles.grid}>
        {servicesList.map((service, index) => (
          <motion.div
            key={index}
            className={styles.card}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <div className={styles.iconWrapper}>
              {service.icon}
            </div>
            <h3 className={styles.title}>{service.title}</h3>
            <p className={styles.desc}>{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
