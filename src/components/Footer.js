import { FiGithub, FiLinkedin, FiMail, FiTwitter, FiFacebook } from 'react-icons/fi';
import styles from './Footer.module.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.container}`}>
                <div className={styles.top}>
                    <div className={styles.brand}>
                        <h2 className="gradient-text">Niwarthana.</h2>
                        <p className={styles.desc}>Building digital experiences with passion and precision.</p>
                    </div>

                    <div className={styles.links}>
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>

                    <div className={styles.socials}>
                        <h3>Connect</h3>
                        <div className={styles.socialIcons}>
                            <a href="https://github.com/Niwarthana00" target="_blank" rel="noopener noreferrer" className={styles.icon} aria-label="GitHub">
                                <FiGithub />
                            </a>
                            <a href="https://linkedin.com/in/niwarthana-abayawardhana-789a771b4" target="_blank" rel="noopener noreferrer" className={styles.icon} aria-label="LinkedIn">
                                <FiLinkedin />
                            </a>
                            <a href="mailto:niwa00@gmail.com" className={styles.icon} aria-label="Email">
                                <FiMail />
                            </a>
                            <a href="https://web.facebook.com/niwarthana.sathyanjali" target="_blank" rel="noopener noreferrer" className={styles.icon} aria-label="Facebook">
                                <FiFacebook />
                            </a>
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>&copy; {currentYear} Niwarthana Sathyanjali. All rights reserved.</p>
                    <p className={styles.madeWith}>Made with <span style={{ color: '#EA2861' }}>❤️</span> using Next.js</p>
                </div>
            </div>
        </footer>
    );
}
