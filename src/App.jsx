import React from "react";
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import Footer from './Footer';
import 'font-awesome/css/font-awesome.min.css';
import ParticleBackground from "./ParticleBackground";

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
