import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar bg-black text-white px-4 py-4">
      <div className="flex-1">
        <a className="btn btn-ghost lg:text-3xl md:text-2xl sm:text-xl">EMAM <span className="text-blue-500">MAHADI</span></a>
      </div>
      {/* Menu for small screens */}
      <div className="flex-none sm:hidden">
        <button onClick={toggleMenu} className="text-3xl">
          <span className="text-white">☰</span>
        </button>
      </div>
      {/* Menu for larger screens */}
      <div className={`flex-none sm:flex ${isMenuOpen ? "block" : "hidden"}`}>
        <ul className="menu menu-horizontal px-1 text-xl space-x-4">
          <li><a href="#about">About</a></li>
          <li><a href="#experience-education">Experience & Education</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      {/* Mobile Menu when clicked */}
      <div className={`sm:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <ul className="flex space-x-4 lg:text-xl md:text-sm mt-4">
          <li><a href="#about" className="py-2 px-4">About</a></li>
          <li><a href="#experience-education" className="py-2 px-4">Experience & Education</a></li>
          <li><a href="#skills" className="py-2 px-4">Skills</a></li>
          <li><a href="#projects" className="py-2 px-4">Projects</a></li>
          <li><a href="#contact" className="py-2 px-4">Contact</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
