'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiSend } from 'react-icons/fi';
import styles from './Contact.module.css';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState(null); // 'success', 'error', 'loading'

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        const apiPrimaryUrl = `https://niwaaa.onrender.com/api/v1/?name=${formData.name}&email=${formData.email}&message=${formData.message}`;

        try {
            const res = await fetch(apiPrimaryUrl, { method: 'POST' });
            if (res.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setStatus(null), 5000);
            } else {
                throw new Error('Failed');
            }
        } catch (error) {
            console.error("API Error", error);
            setStatus('error');
        }
    };

    return (
        <section className={styles.section} id="contact">
            <div className={styles.container}>
                <motion.div
                    className={styles.info}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <h2>Get in Touch</h2>
                    <h1>Let's Work Together</h1>
                    <p>
                        Have a project in mind or just want to say hi? I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                    </p>

                    <div className={styles.contactDetails}>
                        <div className={styles.detailItem}>
                            <div className={styles.iconBox}><FiMail /></div>
                            <div className={styles.detailText}>
                                <h3>Email</h3>
                                <p>sathyanjali00@gmail.com</p>
                            </div>
                        </div>
                        <div className={styles.detailItem}>
                            <div className={styles.iconBox}><FiMapPin /></div>
                            <div className={styles.detailText}>
                                <h3>Address</h3>
                                <p>Sri Lanka</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className={styles.formCard}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <form onSubmit={handleSubmit}>
                        <div className={styles.inputGroup}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                className={styles.input}
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className={styles.inputGroup}>
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                className={styles.input}
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className={styles.inputGroup}>
                            <textarea
                                name="message"
                                placeholder="Your Message..."
                                className={styles.textarea}
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className={styles.submitBtn} disabled={status === 'loading'}>
                            {status === 'loading' ? 'Sending...' : <>Send Message <FiSend /></>}
                        </button>

                        {status === 'success' && (
                            <div className={`${styles.message} ${styles.success}`}>
                                Message sent successfully!
                            </div>
                        )}
                        {status === 'error' && (
                            <div className={`${styles.message} ${styles.error}`}>
                                Something went wrong. Please try again.
                            </div>
                        )}
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
