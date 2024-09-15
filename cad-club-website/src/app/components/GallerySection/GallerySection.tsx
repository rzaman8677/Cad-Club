// components/GallerySection/GallerySection.tsx
"use client";
import React from "react";
import styles from "./GallerySection.module.css";
import { motion } from "framer-motion";
import Image from "next/image";

// Add image paths manually or dynamically
const images = Array.from(
  { length: 26 },
  (_, i) => `/images/${i + 1}.webp`
);

const GallerySection: React.FC = () => {
  return (
    <section id="gallery" className={styles.gallery}>
      <h2 className={styles.galleryHeading}>Gallery</h2>
      <div className={styles.imageGrid}>
        {images.map((src, index) => (
          <motion.div
            key={index}
            className={styles.imageWrapper}
            whileHover={{ scale: 1.05 }}
          >
            <Image
              className={styles.image}
              src={src}
              alt={`Club Image ${index + 1}`}
              width={500} // Define the width
              height={300} // Set a fixed height for uniformity
              style={{ objectFit: "cover" }} // Ensures the image fills the box
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
