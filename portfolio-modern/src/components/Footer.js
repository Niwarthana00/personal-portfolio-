import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <p className={styles.text}>Made with ❤️ by Niwarthana Sathyanjali</p>
                <p className={styles.copy}>&copy; {new Date().getFullYear()} All Rights Reserved.</p>
            </div>
        </footer>
    );
}
