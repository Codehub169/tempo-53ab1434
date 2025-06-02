import React from 'react';
import Head from 'next/head';
import HeroSection from '../components/HeroSection';
import StorySection from '../components/StorySection';
import ServicesSection from '../components/ServicesSection';
import WhyHueneuSection from '../components/WhyHueneuSection';
import ContactSection from '../components/ContactSection';

const HomePage = () => {
  return (
    <>
      <Head>
        <title>hueneu - Designs that whisper loud stories.</title>
        <meta name="description" content="Hueneu is a design studio crafting identities, packaging, and creative projects where stories find their aesthetic." />
        <link rel="icon" href="/hueneu-logo.svg" />
      </Head>
      <main>
        <HeroSection />
        <StorySection />
        <ServicesSection />
        <WhyHueneuSection />
        <ContactSection />
      </main>
    </>
  );
};

export default HomePage;