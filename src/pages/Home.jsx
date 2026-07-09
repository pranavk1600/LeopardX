import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ClientStats from '../components/ClientStats';
import About from '../components/About';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import WhyChooseUs from '../components/WhyChooseUs';
import Team from '../components/Team';
import Process from '../components/Process';
import Technologies from '../components/Technologies';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ClientStats />
        <About />
        <Services />
        <Portfolio />
        <WhyChooseUs />
        <Team />
        <Process />
        <Technologies />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Home;