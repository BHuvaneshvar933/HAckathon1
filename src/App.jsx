import React from "react";
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import Footer from './Footer';
import 'font-awesome/css/font-awesome.min.css';
import ParticleBackground from "./ParticleBackground";
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Don't forget to import the AOS styles!

AOS.init();
const App = () => {
  return (
    
    <div>
      <ParticleBackground/>
      <Navbar />
      <HeroSection />
      
      <FeaturesSection />
      <Footer />
    </div>
  );
};

export default App;
