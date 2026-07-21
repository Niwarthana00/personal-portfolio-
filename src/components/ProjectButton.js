'use client';

import { motion } from 'framer-motion';
import styles from './Projects.module.css';

const ProjectButton = ({ link, text, primary = false }) => {
    if (!link) return null;
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={primary ? styles.btnPrimary : styles.btnSecondary}
        >
            {text}
        </a>
    );
};

export default ProjectButton;
