// components/Footer/Footer.tsx
import React from "react";
import styles from "./Footer.module.css"; // Make sure it's .scss since your style file is .scss

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.footerText}>
        &copy; {new Date().getFullYear()} CAD Club / DesCo at Centennial High
        School. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
