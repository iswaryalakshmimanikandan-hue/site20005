import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Jumpers from '../components/Jumpers';
import SectionDots from '../components/SectionDots';

import HeroWhiteboard from '../sections/HeroWhiteboard';
import AboutSection from '../sections/AboutSection';
import WhyAskJunoSection from '../sections/WhyAskJunoSection';
import PrinciplesSection from '../sections/PrinciplesSection';
import WhatWeDoSection from '../sections/WhatWeDoSection';
import ProductsSection from '../sections/ProductsSection';
import EngineeringSection from '../sections/EngineeringSection';
import ApproachSection from '../sections/ApproachSection';
import HowWeBuildSection from '../sections/HowWeBuildSection';
import IndustriesSection from '../sections/IndustriesSection';
import StoriesSection from '../sections/StoriesSection';
import PeopleSection from '../sections/PeopleSection';
import FaqSection from '../sections/FaqSection';
import ContactSection from '../sections/ContactSection';

export default function HomePage() {
  useEffect(() => {
    document.title = 'AskJuno — From idea to impact. Engineered.';
    // Handle anchor jump if present in URL
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, []);

  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Header />
      <SectionDots />
      <main id="main">
        <HeroWhiteboard />
        <AboutSection />
        <WhyAskJunoSection />
        <PrinciplesSection />
        <WhatWeDoSection />
        <ProductsSection />
        <EngineeringSection />
        <ApproachSection />
        <HowWeBuildSection />
        <IndustriesSection />
        <StoriesSection />
        <PeopleSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
      <Jumpers />
    </>
  );
}
