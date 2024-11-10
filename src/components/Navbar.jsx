import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar bg-black text-white px-6 py-4 fixed w-full top-0 left-0 z-10 shadow-lg">
      <div className="flex justify-between items-center w-full max-w-screen-xl mx-auto">
        {/* Brand Name */}
        <div className="flex items-center">
          <a href="/" className="text-3xl font-semibold tracking-wider text-blue-500 hover:text-blue-400 transition duration-300">
            EMAM <span className="text-white">MAHADI</span>
          </a>
        </div>

        {/* Menu for large screens */}
        <div className="hidden sm:flex space-x-6">
          <ul className="flex space-x-6 text-lg font-medium">
            <li><a href="#about" className="hover:text-blue-400 transition duration-300">About</a></li>
            <li><a href="#experience-education" className="hover:text-blue-400 transition duration-300">Experience & Education</a></li>
            <li><a href="#skills" className="hover:text-blue-400 transition duration-300">Skills</a></li>
            <li><a href="#projects" className="hover:text-blue-400 transition duration-300">Projects</a></li>
            <li><a href="#contact" className="hover:text-blue-400 transition duration-300">Contact</a></li>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <div className="sm:hidden flex items-center">
          <button onClick={toggleMenu} className="text-3xl text-white">
            <span className="block">☰</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu when clicked */}
      <div className={`sm:hidden ${isMenuOpen ? "block" : "hidden"} mt-6`}>
        <ul className="flex flex-col items-center space-y-6 text-xl font-medium">
          <li><a href="#about" className="text-lg text-gray-800 hover:text-blue-500 transition duration-300">About</a></li>
          <li><a href="#experience-education" className="text-lg text-gray-800 hover:text-blue-500 transition duration-300">Experience & Education</a></li>
          <li><a href="#skills" className="text-lg text-gray-800 hover:text-blue-500 transition duration-300">Skills</a></li>
          <li><a href="#projects" className="text-lg text-gray-800 hover:text-blue-500 transition duration-300">Projects</a></li>
          <li><a href="#contact" className="text-lg text-gray-800 hover:text-blue-500 transition duration-300">Contact</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;