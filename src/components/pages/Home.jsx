import React from 'react';
import '../../App.css';
import Cards from '../Cards/Index';
import HeroSection from '../HeroSection/Index';
import Footer from '../Footer/Index';
import Skills from '../Skills/index'
import WorkExp from '../Work/Index';

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
       <Skills/>
       <WorkExp/>
      <Footer />
    </>
  );
}

export default Home;
