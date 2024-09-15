// pages/page.tsx
import React from 'react';
import Head from 'next/head';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import AboutSection from './components/AboutSection/AboutSection';
import ActivitiesSection from './components/ActivitiesSection/ActivitiesSection';
import GallerySection from './components/GallerySection/GallerySection';
import TeamSection from './components/TeamSection/TeamSection';
import Footer from './components/Footer/Footer';

const HomePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>CAD Club / DesCo | Centennial High School</title>
        <meta
          name="description"
          content="Official website of the CAD Club / DesCo at Centennial High School."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ActivitiesSection />
      <GallerySection />
      <TeamSection />
      <Footer />
    </>
  );
};

export default HomePage;
