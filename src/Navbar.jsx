import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className=" backdrop-blur-lg fixed top-0 left-0 w-full z-50 shadow-lg border-b border-neutral-700/80 " id="navbar">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-white text-3xl font-semibold" id='heading'>YourLogo</div>
        <div className="hidden md:flex space-x-9">
          <a href="#home" className="text-gray-400 hover:text-white ">Home</a>
          <a href="#features" id="navbuttons" className="text-gray-400 hover:text-white mx-4">Features</a>
          <a href="#contact" className="text-gray-400 hover:text-white mx-4">Contact</a>
        </div>
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="text-white focus:outline-none"
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`} />
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute top-0 left-0 right-0 mt-16 shadow-lg p-4 space-y-4">
          <a href="#home" className="text-gray-800 hover:text-blue-600 block">Home</a>
          <a href="#features" className="text-gray-800 hover:text-blue-600 block">Features</a>
          <a href="#contact" className="text-gray-800 hover:text-blue-600 block">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
