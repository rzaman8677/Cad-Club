// components/AboutSection/AboutSection.tsx
"use client";
import React from "react";
import styles from "./AboutSection.module.css";
import { motion } from "framer-motion";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className={styles.about}>
      <motion.h2
        className={styles.aboutHeading}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        About Us
      </motion.h2>
      <motion.p
        className={styles.aboutParagraph}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        The CAD Club / DesCo at Centennial High School is a hub for students
        passionate about computer-aided design and coding. We delve into the
        realms of virtual reality, 3D modeling, CNC machining, and more.
      </motion.p>
      <motion.div
        className={styles.features}
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            opacity: 1,
            transition: {
              delayChildren: 0.3,
              staggerChildren: 0.2,
            },
          },
          hidden: { opacity: 0 },
        }}
      >
        <motion.div
          className={styles.feature}
          variants={{ visible: { opacity: 1 }, hidden: { opacity: 0 } }}
        >
          <h3 className={styles.featureHeading}>Innovation</h3>
          <p className={styles.featureParagraph}>
            We foster an environment where creativity meets technology.
          </p>
        </motion.div>
        <motion.div
          className={styles.feature}
          variants={{ visible: { opacity: 1 }, hidden: { opacity: 0 } }}
        >
          <h3 className={styles.featureHeading}>Collaboration</h3>
          <p className={styles.featureParagraph}>
            Teamwork is at the core of our projects and initiatives.
          </p>
        </motion.div>
        <motion.div
          className={styles.feature}
          variants={{ visible: { opacity: 1 }, hidden: { opacity: 0 } }}
        >
          <h3 className={styles.featureHeading}>Learning</h3>
          <p className={styles.featureParagraph}>
            We believe in continuous learning and skill development.
          </p>
        </motion.div>
        <motion.div
          className={styles.feature}
          variants={{ visible: { opacity: 1 }, hidden: { opacity: 0 } }}
        >
          <h3 className={styles.featureHeading}>Mentorship</h3>
          <p className={styles.featureParagraph}>
            Experienced members guide newcomers through projects.
          </p>
        </motion.div>
        <motion.div
          className={styles.feature}
          variants={{ visible: { opacity: 1 }, hidden: { opacity: 0 } }}
        >
          <h3 className={styles.featureHeading}>Competitions</h3>
          <p className={styles.featureParagraph}>
            Participate in local and national design competitions.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
