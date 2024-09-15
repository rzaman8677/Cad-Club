// components/HeroSection/HeroSection.tsx
"use client";
import React from "react";
import { motion } from "framer-motion";
import styles from "./HeroSection.module.css";

const HeroSection: React.FC = () => {
  return (
    <section id="home" className={styles.hero}>
      <motion.div
        className={styles.heroContent}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Designing the Future</h1>
        <p>
          Join us in exploring the world of Computer-Aided Design and Coding.
        </p>
      </motion.div>
    </section>
  );
};

export default HeroSection;
