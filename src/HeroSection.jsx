import React from 'react';

const HeroSection = () => (
  <section id="home" className="hero bg-gradient-to-r  text-white h-screen flex flex-col justify-center items-center text-center relative ">
    <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight mb-6 fadeIn" id="heading">
      Disaster Prepardness and <span className="bg-gradient-to-r from-purple-400 to-purple-700 text-transparent bg-clip-text">Emergency response</span>
    </h1>
    <p className="text-lg sm:text-xl mb-8 mx-auto slideUp  text-center text-neutral-300 max-w-4xl" id='normalText'>
      Information can save <span className="bg-gradient-to-r from-purple-400 to-purple-700 text-transparent bg-clip-text">LIVES!</span>
    </p>
    <a href="#features" className="bg-white #1E2A47 py-3 px-8 rounded-full text-lg font-semibold hoverScale bg-gradient-to-r from-purple-500 to-purple-800  text-white  shadow-neon hover:shadow-neon-hover" id='neon-button'>
      Safety Tips
    </a>
  </section>
);

export default HeroSection;
