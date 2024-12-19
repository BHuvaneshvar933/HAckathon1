import React from "react";
import 'animate.css';

const FeaturesSection = () => (
  <section id="features" className="py-20 z-50">
    <div className="container mx-auto text-center">
      <h2 className="text-4xl sm:text-5xl font-bold mb-12 fadeInBottom" id="heading" data-aos="fade-up" data-aos-duration="2000">
        Our <span className="bg-gradient-to-br from-purple-400 to-purple-700 text-transparent bg-clip-text">Safety Measures</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        <div className="feature-card p-6 bg-gray-200 rounded-lg shadow-lg hover:shadow-xl transition hoverShadow" data-aos="fade-up" data-aos-duration="1000">
          <div className="icon mb-4">
            <i className="fas fa-cogs text-4xl text-purple-700"></i>
          </div>
          <h3 className="text-xl font-semibold mb-3 bg-gradient-to-br from-purple-400 to-purple-700 text-transparent bg-clip-text">
            Tsunami
          </h3>
          <p className="slideUp text-center text-neutral-700">
          Know what to do when disaster happens <a href="https://www.weather.gov/media/owlie/TsunamiSafety-OnePager-02-28-2019.pdf">here</a>
          </p>
          
        </div>
        <div className="feature-card p-6 bg-gray-200 rounded-lg shadow-lg hover:shadow-xl transition hoverShadow" data-aos="fade-up" data-aos-duration="1500">
          <div className="icon mb-4">
            <i className="fas fa-cloud text-4xl text-purple-700"></i>
          </div>
          <h3 className="text-xl font-semibold mb-3 bg-gradient-to-br from-purple-400 to-purple-700 text-transparent bg-clip-text">
            EarthQuake
          </h3>
          <p className="slideUp text-center text-neutral-700">
          Know what to do when disaster happens <a href="https://www.ucitymo.org/563/Safety-Tips">here</a>
          </p>
          
        </div>
        <div className="feature-card p-6 bg-gray-200 rounded-lg shadow-lg hover:shadow-xl transition hoverShadow" data-aos="fade-up" data-aos-duration="2000">
          <div className="icon mb-4">
            <i className="fas fa-lock text-4xl text-purple-700"></i>
          </div>
          <h3 className="text-xl font-semibold mb-3 bg-gradient-to-br from-purple-400 to-purple-700 text-transparent bg-clip-text">
            Floods
          </h3>
          <p className="slideUp text-center text-neutral-700">
          Know what to do when disaster happens <a href="https://nidm.gov.in/safety_flood.asp">here</a>
          </p>
          
        </div>
      </div>
    </div>
  </section>
);

export default FeaturesSection;
