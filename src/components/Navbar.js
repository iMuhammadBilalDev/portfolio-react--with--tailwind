import React, { useState } from "react";
import { Link } from "react-scroll";
import imageB from "../assets/Bilal.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full bg-gray-900 text-white p-4 shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img src={imageB} alt="Logo" className="w-12 h-auto cursor-pointer" />
          <h1 className="text-2xl font-bold cursor-pointer">Portfolio</h1>
        </div>
        <button
          className="md:hidden p-2 focus:outline-none"
          onClick={handleToggle}
        >
          {isOpen ? (
            <span className="text-lg font-semibold">Close</span>
          ) : (
            <span className="text-lg font-semibold">Menu</span>
          )}
        </button>
        <ul
          className={`flex-col md:flex-row space-x-0 md:space-x-6 transition-all duration-300 ease-in-out ${
            isOpen ? "block" : "hidden"
          } md:flex cursor-pointer`}
        >
          <li className="hover:underline">
            <Link to="home" smooth={true} duration={500} onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li className="hover:underline">
            <Link to="about" smooth={true} duration={500} onClick={closeMenu}>
              About
            </Link>
          </li>
          <li className="hover:underline">
            <Link
              to="project"
              smooth={true}
              duration={500}
              onClick={closeMenu}
            >
              Projects
            </Link>
          </li>
          <li className="hover:underline">
            <Link to="contact" smooth={true} duration={500} onClick={closeMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
