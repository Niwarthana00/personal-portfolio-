// src/components/Animation.js
import { useEffect } from 'react';

const roles = ["Data Scientist", "Machine Learning Engineer", "Software Engineer", "Frontend Developer", "Backend Developer"];

export const useAnimatedRoles = () => {
  useEffect(() => {
    let currentIndex = 0;
    const roleElement = document.querySelector('.animated-role');
    let currentText = '';
    let isDeleting = false;
    let speed = 150; // typing speed

    const typeEffect = () => {
      if (isDeleting) {
        // Remove character
        currentText = currentText.slice(0, -1);
        roleElement.textContent = currentText;
        if (currentText.length === 0) {
          isDeleting = false;
          currentIndex = (currentIndex + 1) % roles.length; // move to the next role
        }
      } else {
        // Add character
        currentText = roles[currentIndex].slice(0, currentText.length + 1);
        roleElement.textContent = currentText;
        if (currentText === roles[currentIndex]) {
          isDeleting = true;
        }
      }
    };

    // Start the typing effect
    const interval = setInterval(typeEffect, speed);

    // Cleanup interval when the component unmounts
    return () => clearInterval(interval);
  }, []);
};
