// components/ActivitiesSection/ActivitiesSection.tsx
"use client";
import React from "react";
import styles from "./ActivitiesSection.module.css";
import { motion } from "framer-motion";

const activities = [
  {
    title: "Virtual Reality Exploration",
    description: "Dive into immersive experiences using VR headsets.",
    icon: "🎮",
  },
  {
    title: "CAD Modeling",
    description: "Design intricate 3D models with professional software.",
    icon: "🖥️",
  },
  {
    title: "CNC Machining",
    description: "Learn to operate CNC machines for precise fabrication.",
    icon: "🛠️",
  },
  {
    title: "Raspberry Pi Projects",
    description: "Build and program mini-computers for various applications.",
    icon: "🔌",
  },
  {
    title: "Arduino Programming",
    description: "Create interactive electronic projects with Arduino.",
    icon: "💡",
  },
  {
    title: "3D Printing",
    description: "Bring your designs to life with 3D printing technology.",
    icon: "📐",
  },
  {
    title: "Software Development",
    description: "Develop software applications and tools.",
    icon: "💻",
  },
  {
    title: "Robotics",
    description: "Design and build robots for various tasks.",
    icon: "🤖",
  },
];

const ActivitiesSection: React.FC = () => {
  return (
    <section id="activities" className={styles.activities}>
      <h2 className={styles.activitiesHeading}>Our Activities</h2>
      <div className={styles.activityGrid}>
        {activities.map((activity, index) => (
          <motion.div
            key={index}
            className={styles.activityCard}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className={styles.icon}>{activity.icon}</div>
            <h3 className={styles.activityTitle}>{activity.title}</h3>
            <p className={styles.activityDescription}>{activity.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ActivitiesSection;
