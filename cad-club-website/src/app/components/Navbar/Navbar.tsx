// components/Navbar/Navbar.tsx
"use client";
import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home"); // Assuming 'home' is the id of the hero section

  // Handle click events for navbar links
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false); // Close the menu on mobile devices
  };

  // Update active section based on scroll position
  useEffect(() => {
    const sections = ["home", "about", "activities", "gallery", "team"];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const sectionElement = document.getElementById(sectionId);
        if (sectionElement && sectionElement.offsetTop <= scrollPosition) {
          setActiveSection(sectionId);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once to set the initial active section

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <a href="#home" onClick={(e) => handleNavClick(e, "home")}>
          CAD Club / DesCo
        </a>
      </div>
      <div className={styles.menuIcon} onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX /> : <FiMenu />}
      </div>
      <ul className={`${styles.navLinks} ${menuOpen ? styles.active : ""}`}>
        <li>
          <a
            href="#about"
            onClick={(e) => handleNavClick(e, "about")}
            className={activeSection === "about" ? styles.activeLink : ""}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#activities"
            onClick={(e) => handleNavClick(e, "activities")}
            className={activeSection === "activities" ? styles.activeLink : ""}
          >
            Activities
          </a>
        </li>
        <li>
          <a
            href="#gallery"
            onClick={(e) => handleNavClick(e, "gallery")}
            className={activeSection === "gallery" ? styles.activeLink : ""}
          >
            Gallery
          </a>
        </li>
        <li>
          <a
            href="#team"
            onClick={(e) => handleNavClick(e, "team")}
            className={activeSection === "team" ? styles.activeLink : ""}
          >
            Team
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
