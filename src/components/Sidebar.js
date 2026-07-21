'use client';

import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { FiHome, FiUser, FiBriefcase, FiCpu, FiFolder, FiMail, FiMenu, FiX, FiMessageSquare } from 'react-icons/fi';
import styles from './Sidebar.module.css';

const navItems = [
  { id: 'home', label: 'Home', icon: <FiHome /> },
  { id: 'about', label: 'About', icon: <FiUser /> },
  { id: 'experience', label: 'Experience', icon: <FiBriefcase /> },
  { id: 'skills', label: 'Skills', icon: <FiCpu /> },
  { id: 'projects', label: 'Projects', icon: <FiFolder /> },
  { id: 'testimonials', label: 'Testimonials', icon: <FiMessageSquare /> },
  { id: 'contact', label: 'Contact', icon: <FiMail /> },
];

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isOpen, setIsOpen] = useState(false);
  
  const router = useRouter();
  const pathname = usePathname();

  // ScrollSpy to track active section
  useEffect(() => {
    if (pathname && pathname.startsWith('/project/')) {
      setActiveSection('projects');
      return;
    }

    const observerOptions = {
      root: null,
      rootMargin: '-25% 0px -55% 0px', // Trigger when section occupies the upper-middle region
      threshold: 0.1
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => {
      navItems.forEach((item) => {
        const el = document.getElementById(item.id);
        if (el) observer.unobserve(el);
      });
    };
  }, [pathname]);

  const handleNavClick = (id) => {
    setIsOpen(false);
    // Dispatch custom event to tell full-screen drawers to close
    if (typeof window !== 'undefined') {
        window.dispatchEvent(new Event('sidebarNavClicked'));
    }

    const element = document.getElementById(id);
    if (element) {
      const isMobile = window.innerWidth <= 768;
      const offset = isMobile ? 80 : 30; // Accounting for mobile sticky header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    } else {
      router.push(`/#${id}`);
    }
  };

  return (
    <>
      {/* Mobile Top Header */}
      <header className={styles.mobileHeader}>
        <div className={styles.mobileTitle}>
          <img src="/assets/niwa.png" alt="Profile" className={styles.mobileAvatar} />
          Niwarthana<span>.</span>
        </div>
        <button
          className={styles.hamburger}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Navigation Menu"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </header>

      {/* Mobile Backdrop Overlay */}
      {isOpen && <div className={styles.overlay} onClick={() => setIsOpen(false)} />}

      {/* Mobile Slide-in Drawer */}
      <div className={`${styles.mobileDrawer} ${isOpen ? styles.mobileDrawerOpen : ''}`}>
        <div className={styles.nav}>
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`${styles.navItem} ${activeSection === item.id ? styles.activeNavItem : ''}`}
              onClick={() => handleNavClick(item.id)}
            >
              <span className={styles.icon}>{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Desktop Fixed Sidebar */}
      <aside className={styles.sidebar}>
        <div className={styles.profileArea}>
          <div className={styles.avatarWrapper}>
            <img
              src="/assets/niwa.png"
              alt="Niwarthana Sathyanjali"
              className={styles.avatar}
            />
          </div>
          <h2 className={styles.name}>Niwarthana Sathyanjali</h2>
          <p className={styles.bioDescription}>
            Driven by a passion for continuous learning, building scalable systems, and solving complex problems! 💻✨
          </p>
        </div>

        <nav className={styles.nav}>
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`${styles.navItem} ${activeSection === item.id ? styles.activeNavItem : ''}`}
              onClick={() => handleNavClick(item.id)}
            >
              <span className={styles.icon}>{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
      </aside>
    </>
  );
}
