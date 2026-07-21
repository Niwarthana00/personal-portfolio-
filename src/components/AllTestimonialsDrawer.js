'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiChevronLeft } from 'react-icons/fi';
import styles from './AllTestimonialsDrawer.module.css';

const getFallbackInitialsAvatar = (name) => {
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(name || 'Client')}&background=161b22&color=ff6ac1&bold=true`;
};

const getTruncatedText = (text, maxLength) => {
  if (!text) return '';
  return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
};

export default function AllTestimonialsDrawer({ isOpen, onClose, testimonials, onTestimonialSelect }) {
    
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            
            // Listen for sidebar clicks to close the drawer
            const handleNavClick = () => {
                onClose();
            };
            window.addEventListener('sidebarNavClicked', handleNavClick);
            
            return () => {
                document.body.style.overflow = 'unset';
                window.removeEventListener('sidebarNavClicked', handleNavClick);
            };
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const handleImageError = (e, name) => {
        e.target.onerror = null;
        e.target.src = getFallbackInitialsAvatar(name);
    };

    return (
        <AnimatePresence>
            <div className={styles.overlay} onClick={onClose}>
                <motion.div
                    className={styles.drawer}
                    initial={{ x: '100%' }}
                    animate={{ x: 0 }}
                    exit={{ x: '100%' }}
                    transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className={styles.drawerContent}>
                        <div className={styles.topNav}>
                            <button onClick={onClose} className={styles.backBtn}>
                                <FiChevronLeft className={styles.backIcon} /> Back
                            </button>
                        </div>

                        <header className={styles.header}>
                            <span className={styles.subtitle}>KIND WORDS</span>
                            <h2 className={styles.title}>All Testimonials</h2>
                            <p className={styles.intro}>Kind words from people I have worked with.</p>
                        </header>

                        {/* Grid */}
                        <div className={styles.grid}>
                            {testimonials.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: index * 0.05 }}
                                    className={styles.card}
                                    onClick={() => onTestimonialSelect(item)}
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
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
}
