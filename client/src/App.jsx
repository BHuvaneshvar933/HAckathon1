import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import Footer from './components/Footer';
import './App.css';
import SOSButton from './components/SosButton';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <Footer />
      <SOSButton/>
    </div>
  );
}

export default App;
