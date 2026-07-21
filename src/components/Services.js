'use client';

import { motion } from 'framer-motion';
import { FaBrain, FaMobileAlt, FaLaptopCode, FaPaintBrush, FaDatabase } from 'react-icons/fa';
import styles from './Services.module.css';

const services = [
    {
        icon: <FaBrain />,
        title: "AI & Machine Learning",
        desc: "Developing intelligent solutions using advanced machine learning models, neural networks, and data analytics to solve complex problems."
    },
    {
        icon: <FaMobileAlt />,
        title: "App Design",
        desc: "Building powerful, user-friendly mobile applications for iOS and Android platforms."
    },
    {
        icon: <FaLaptopCode />,
        title: "Web Design",
        desc: "Designing and developing responsive, modern websites that elevate your online presence."
    },
    {
        icon: <FaPaintBrush />,
        title: "UI/UX",
        desc: "Crafting intuitive and visually appealing interfaces that deliver seamless user experiences."
    },
    {
        icon: <FaDatabase />,
        title: "Database",
        desc: "Designing and implementing efficient database systems using MongoDB, Firebase, and MySQL to support your application’s data needs."
    }
];

const skills = [
    { name: "Flutter", icon: "https://icon.icepanel.io/Technology/svg/Flutter.svg" },
    { name: "Java", icon: "https://icon.icepanel.io/Technology/svg/Java.svg" },
    { name: "Python", icon: "https://icon.icepanel.io/Technology/svg/Python.svg" },
    { name: ".NET", icon: "https://icon.icepanel.io/Technology/svg/.NET-core.svg" },
    { name: "C++", icon: "https://icon.icepanel.io/Technology/svg/C%2B%2B-%28CPlusPlus%29.svg" },
    { name: "C#", icon: "https://icon.icepanel.io/Technology/svg/C%23-%28CSharp%29.svg" },
    { name: "MySQL", icon: "https://icon.icepanel.io/Technology/svg/MySQL.svg" },
    { name: "PHP", icon: "https://icon.icepanel.io/Technology/svg/PHP.svg" },
    { name: "Laravel", icon: "https://icon.icepanel.io/Technology/svg/Laravel.svg" },
    { name: "Firebase", icon: "https://icon.icepanel.io/Technology/svg/Firebase.svg" },
    { name: "Figma", icon: "https://icon.icepanel.io/Technology/svg/Figma.svg" },
    { name: "Express js", icon: "https://icon.icepanel.io/Technology/png-shadow-512/Express.png" },
    { name: "React", icon: "https://icon.icepanel.io/Technology/svg/React.svg" },
    { name: "JavaScript", icon: "https://icon.icepanel.io/Technology/svg/JavaScript.svg" },
    { name: "Node js", icon: "https://icon.icepanel.io/Technology/svg/Node.js.svg" },
    { name: "MongoDB", icon: "https://icon.icepanel.io/Technology/svg/MongoDB.svg" },
    { name: "Machine Learning", icon: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg" },
];

export default function Services() {
    return (
        <section className={styles.section} id="services">
            <div className="container">

                {/* Services Section */}
                <div className={styles.title}>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        My Services
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        I specialize in delivering high-quality solutions, including AI-powered systems and Data Science to drive intelligent decision-making.
                    </motion.p>
                </div>

                <div className={styles.grid}>
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className={styles.card}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className={styles.iconWrapper}>
                                {service.icon}
                            </div>
                            <h3>{service.title}</h3>
                            <p>{service.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Skills Section */}
                <div className={styles.title}>
                    <h2>Technical Skills</h2>
                </div>

                <div className={styles.skillsContainer}>
                    <div className={styles.skillsGrid}>
                        {skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                className={styles.skillItem}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                            >
                                <img src={skill.icon} alt={skill.name} className={styles.skillIcon} />
                                <span className={styles.skillName}>{skill.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
