// pages/about/page.tsx
import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import styles from "./AboutPage.module.css";

const AboutPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>About Us | CAD Club / DesCo</title>
        <meta
          name="description"
          content="Learn more about the CAD Club / DesCo at Centennial High School."
        />
      </Head>
      <Navbar />
      <main className={styles.aboutPage}>
        <h1 className={styles.heading1}>About Our Club</h1>
        <p className={styles.paragraph}>
          The CAD Club / DesCo was established to provide students with hands-on
          experience in computer-aided design and programming. Our mission is to
          inspire creativity and innovation through collaborative projects and
          learning opportunities.
        </p>
        <h2 className={styles.heading2}>Our Mission</h2>
        <p className={styles.paragraph}>
          We aim to bridge the gap between theoretical knowledge and practical
          application by engaging in projects that have real-world impact. From
          designing prototypes to programming interactive devices, we cover a
          broad spectrum of activities.
        </p>
        <h2 className={styles.heading2}>Join Us</h2>
        <p className={styles.paragraph}>
          Interested in joining? We welcome students of all skill levels.
          Whether you&apos;re a seasoned programmer or just starting out,
          there&apos;s a place for you in our club.
        </p>
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;
