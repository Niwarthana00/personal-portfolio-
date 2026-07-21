'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSmartphone, FiCheck, FiChevronLeft, FiChevronRight, FiGithub } from 'react-icons/fi';
import styles from './MobileAppSection.module.css';

const screenshots = [
  '/assets/sahana/mainimg.png',
  '/assets/sahana/1.jpeg',
  '/assets/sahana/2.jpeg',
  '/assets/sahana/3.jpeg',
  '/assets/sahana/4.jpeg',
];

const features = [
  'Real-Time Aid Requests: Localization via GPS coordinate markers mapped instantly using Google Maps.',
  'Dual Interface Access: Tailored modules for Beneficiaries requesting supplies and Volunteers accepting tasks.',
  'Direct Voice Channel: In-app VoIP voice communication powered by the Agora RTC SDK.',
  'Firebase Real-time Store: Synchronized instant messaging and help request state tracking (Pending, Assigned, Completed).'
];

const techStack = ['Flutter', 'Dart', 'Firebase Auth', 'Cloud Firestore', 'Agora RTC SDK', 'Google Maps API'];

export default function MobileAppSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play the mockup screens
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % screenshots.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  return (
    <section className={styles.section} id="mobile-app">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <FiSmartphone style={{ color: 'var(--primary)' }} /> Mobile App Showcase
      </motion.h2>

      <div className={styles.container}>
        {/* App Info Area */}
        <motion.div
          className={styles.details}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <span className={styles.appSubtitle}>Featured Project</span>
            <h3 className={styles.appTitle}>Sahana — Disaster Relief App</h3>
          </div>

          <p className={styles.desc}>
            Sahana is a disaster relief coordination platform engineered to connect disaster victims 
            directly with nearby volunteer networks. By providing localized maps and direct communication 
            pipelines, Sahana ensures quick and targeted resource distribution during emergencies.
          </p>

          <div className={styles.featuresList}>
            {features.map((feature, idx) => (
              <div key={idx} className={styles.featureItem}>
                <FiCheck className={styles.checkIcon} />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          <div className={styles.techStack}>
            {techStack.map((tech) => (
              <span key={tech} className="tag">
                {tech}
              </span>
            ))}
          </div>

          <div className={styles.btnArea}>
            <a
              href="https://github.com/Niwarthana00/flooding-Relief-app"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <FiGithub /> Source Code
            </a>
          </div>
        </motion.div>

        {/* CSS Phone Mockup Slider */}
        <motion.div
          className={styles.mockupArea}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <button className={`${styles.navBtn} ${styles.prevBtn}`} onClick={prevSlide} aria-label="Previous screenshot">
            <FiChevronLeft />
          </button>

          <div className={styles.phoneMockup}>
            <div className={styles.notch}>
              <div className={styles.notchCamera} />
              <div className={styles.notchSpeaker} />
            </div>

            <div className={styles.screenContent}>
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentSlide}
                  src={screenshots[currentSlide]}
                  alt={`Sahana Screen ${currentSlide + 1}`}
                  className={styles.slideImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </AnimatePresence>
            </div>

            {/* Slider Dots */}
            <div className={styles.controls}>
              {screenshots.map((_, idx) => (
                <button
                  key={idx}
                  className={`${styles.dot} ${currentSlide === idx ? styles.activeDot : ''}`}
                  onClick={() => setCurrentSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          <button className={`${styles.navBtn} ${styles.nextBtn}`} onClick={nextSlide} aria-label="Next screenshot">
            <FiChevronRight />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
