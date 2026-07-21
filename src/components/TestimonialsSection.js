'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';
import styles from './TestimonialsSection.module.css';
import AllTestimonialsDrawer from './AllTestimonialsDrawer';

// ⚠️ Linked to SheetDB API for Google Form Responses
const SHEETDB_API_URL = 'https://sheetdb.io/api/v1/74rz3ugk787fn';

const defaultTestimonials = [
  {
    name: 'Sarah Jenkins',
    role: 'Product Manager at Triton Solutions',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
    text: "Niwarthana is a brilliant software engineer. She designed and delivered our database infrastructure on time with exceptional performance. Her Postgres architectures are clean and scalable."
  },
  {
    name: 'Michael Chen',
    role: 'Senior Technical Lead at SLIA Institute',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
    text: "Working with Niwarthana was a seamless experience. She is highly proficient in React and Node.js, and implemented a robust ticketing reservation system with payment gateway integration for us."
  },
  {
    name: 'Isabella Rodriguez',
    role: 'Operations Director at Synnex IT Solutions',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
    text: "Niwarthana's Flutter development skills are outstanding. During her internship, she contributed significantly to cross-platform deployments with clean, maintainable architecture patterns."
  }
];

const getFallbackInitialsAvatar = (name) => {
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(name || 'Client')}&background=161b22&color=ff6ac1&bold=true`;
};

// Helper function to extract Google Drive file ID from any URL format
const extractGoogleDriveFileId = (url) => {
  if (!url || typeof url !== 'string') return null;
  const matchId = url.match(/[?&]id=([a-zA-Z0-9_-]+)/) || url.match(/\/d\/([a-zA-Z0-9_-]+)/);
  return matchId ? matchId[1] : null;
};

// Helper function to translate Google Drive sharing links into direct renderable image links via wsrv.nl CORS proxy
const getDirectAvatarUrl = (url, name) => {
  if (!url || typeof url !== 'string') return getFallbackInitialsAvatar(name);
  
  if (url.includes('drive.google.com') || url.includes('googleusercontent.com')) {
    const fileId = extractGoogleDriveFileId(url);
    if (fileId) {
      // High-definition 400x400 HD avatar proxy via wsrv.nl from an 800px source thumbnail
      return `https://wsrv.nl/?url=https://drive.google.com/thumbnail?id=${fileId}&sz=w800&w=400&h=400&fit=cover&q=95`;
    }
  }
  
  return url;
};

export default function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState(defaultTestimonials);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);
  const [isAllTestimonialsOpen, setIsAllTestimonialsOpen] = useState(false);
  
  const displayedTestimonials = testimonials.slice(0, 6);

  useEffect(() => {
    if (!SHEETDB_API_URL) return;

    const fetchTestimonials = async () => {
      try {
        const res = await fetch(SHEETDB_API_URL);
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data) && data.length > 0) {
            // Map the exact Google Form column headers to portfolio fields
            const normalizedData = data.map(item => {
              const nameVal = item["Your Name"] || 'Client';
              const roleVal = item["Position / Job Title"] || '';
              const companyVal = item["University / Company Name"] || '';
              
              const combinedRole = roleVal && companyVal 
                ? `${roleVal} at ${companyVal}` 
                : (roleVal || companyVal || 'Contributor');

              return {
                name: nameVal,
                role: combinedRole,
                avatar: getDirectAvatarUrl(item["Profile Photo"], nameVal),
                text: item["Your Feedback"] || 'No feedback text provided.'
              };
            });
            setTestimonials(normalizedData);
          }
        }
      } catch (error) {
        console.error('Error fetching testimonials from SheetDB:', error);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedTestimonial(null);
    };

    fetchTestimonials();
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const getTruncatedText = (text, limit = 160) => {
    if (!text) return '';
    if (text.length <= limit) return text;
    return `${text.slice(0, limit)}...`;
  };

  const handleImageError = (e, name) => {
    const currentSrc = e.target.src;
    if (currentSrc.includes('wsrv.nl')) {
      const fileId = extractGoogleDriveFileId(currentSrc);
      if (fileId) {
        // Tier 2 Fallback: Try thumbnail proxy
        e.target.src = `https://drive.google.com/thumbnail?id=${fileId}&sz=w500`;
        return;
      }
    }
    
    if (currentSrc.includes('thumbnail?id=')) {
      const fileId = extractGoogleDriveFileId(currentSrc);
      if (fileId) {
        // Tier 3 Fallback: Try lh3 CDN
        e.target.src = `https://lh3.googleusercontent.com/d/${fileId}`;
        return;
      }
    }

    // Tier 4 Fallback: Initials Avatar
    e.target.onerror = null;
    e.target.src = getFallbackInitialsAvatar(name);
  };

  return (
    <section className={styles.testimonials} id="testimonials">
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <span className={styles.subtitle}>KIND WORDS</span>
        <h2 className={styles.title}>Testimonials</h2>
        <p className={styles.intro}>Kind words from people I have worked with.</p>
      </motion.div>

      <div className={styles.grid}>
        {displayedTestimonials.map((item, index) => {
          return (
            <motion.div
              key={index}
              className={styles.card}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              onClick={() => setSelectedTestimonial(item)}
            >
              <div>
                <p className={styles.text}>"{getTruncatedText(item.text, 160)}"</p>
              </div>
              
              <div className={styles.profile}>
                <div className={styles.avatarWrapper}>
                  <img 
                    src={item.avatar || getFallbackInitialsAvatar(item.name)} 
                    alt={item.name} 
                    className={styles.avatar} 
                    onError={(e) => handleImageError(e, item.name)}
                  />
                </div>
                <div className={styles.info}>
                  <span className={styles.name}>{item.name}</span>
                  <span className={styles.role}>{item.role}</span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div style={{ display: 'flex', justifyContent: 'flex-start', marginTop: '3rem' }}>
        <button 
          className="btn btn-outline"
          onClick={() => setIsAllTestimonialsOpen(true)}
        >
          See all testimonials
        </button>
      </div>

      {/* Slide-out Drawer Panel */}
      <AnimatePresence>
        {selectedTestimonial && (
          <motion.div
            className={styles.drawerOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedTestimonial(null)}
          >
            <motion.div
              className={styles.drawerPanel}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', ease: 'easeOut', duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className={styles.drawerClose} 
                onClick={() => setSelectedTestimonial(null)}
                aria-label="Close review"
              >
                <FiX />
              </button>

              <div className={styles.drawerContent}>
                <div className={styles.drawerBody}>
                  <p className={styles.drawerText}>
                    "{selectedTestimonial.text}"
                  </p>
                </div>

                <div className={styles.drawerProfile}>
                  <div className={styles.avatarWrapper} style={{ width: '56px', height: '56px' }}>
                    <img 
                      src={selectedTestimonial.avatar || getFallbackInitialsAvatar(selectedTestimonial.name)} 
                      alt={selectedTestimonial.name} 
                      className={styles.avatar} 
                      onError={(e) => handleImageError(e, selectedTestimonial.name)}
                    />
                  </div>
                  <div className={styles.info}>
                    <span className={styles.name} style={{ fontSize: '1rem' }}>
                      {selectedTestimonial.name}
                    </span>
                    <span className={styles.role} style={{ fontSize: '0.8rem' }}>
                      {selectedTestimonial.role}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Render All Testimonials Full-Screen Drawer */}
      <AllTestimonialsDrawer 
        isOpen={isAllTestimonialsOpen}
        onClose={() => setIsAllTestimonialsOpen(false)}
        testimonials={testimonials}
        onTestimonialSelect={(item) => {
            setSelectedTestimonial(item); // Open the individual Testimonial drawer on top
        }}
      />
    </section>
  );
}
