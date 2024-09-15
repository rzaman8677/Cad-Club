// components/TeamSection/TeamSection.tsx
"use client";
import React from "react";
import styles from "./TeamSection.module.css";
import { motion } from "framer-motion";
import Image from "next/image";

const members = [
  { name: "Raiyan Zaman", role: "President", image: "/images/raiyan.jpg" },
  {
    name: "Jacob Zhang",
    role: "Vice President",
    image: "/images/jacob.jpg",
  },
  {
    name: "Ayush Ghosh",
    role: "Member at Large",
    image: "/images/placeholder.jpg",
  },
  {
    name: "Daud Idrees",
    role: "Member at Large",
    image: "/images/daud.jpg",
  },
];

const TeamSection: React.FC = () => {
  return (
    <section className={styles.team}>
      <h2>Meet the Team</h2>
      <div className={styles.teamGrid}>
        {members.map((member, index) => (
          <motion.div
            key={index}
            className={styles.memberCard}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Image
              src={member.image}
              alt={member.name}
              width={150} // Define width for the image
              height={150} // Define height for the image
              style={{ borderRadius: "50%" }} // Add any additional styles directly
            />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
