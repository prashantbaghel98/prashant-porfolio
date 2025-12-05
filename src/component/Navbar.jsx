import React, { useState } from 'react';
import { Link } from 'react-scroll'; // for smooth scrolling

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white text-black border-2 border-white rounded-3xl p-2 sm:p-3 m-4">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="text-[tomato] text-[20px] font-semibold">
          PRASHANT PORTFOLIO
        </div>

        {/* Desktop Menu */}
        <ul className="hidden sm:flex gap-6 text-[18px]">
          <li>
            <Link to="home" smooth={true} duration={500} className="cursor-pointer hover:text-purple-500">
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500} className="cursor-pointer hover:text-purple-500">
              About Us
            </Link>
          </li>
          <li>
            <Link to="services" smooth={true} duration={500} className="cursor-pointer hover:text-purple-500">
              Services
            </Link>
          </li>
          <li>
            <Link to="portfolio" smooth={true} duration={500} className="cursor-pointer hover:text-purple-500">
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-purple-500">
              Contact
            </Link>
          </li>
        </ul>

        {/* Contact Button */}
        <div className="hidden sm:block">
          <Link to="contact" smooth={true} duration={500}>
            <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-1 px-4 rounded-2xl text-white hover:scale-105 duration-300">
              Connect With Me
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="sm:hidden flex -mt-2 sm:mt-0 items-center">
          <button onClick={toggleMenu} className="text-2xl focus:outline-none">
            {isOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="flex flex-col gap-4 mt-4 text-center sm:hidden">
          <li>
            <Link to="home" smooth={true} duration={500} onClick={toggleMenu} className="cursor-pointer hover:text-purple-500">
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500} onClick={toggleMenu} className="cursor-pointer hover:text-purple-500">
              About Us
            </Link>
          </li>
          <li>
            <Link to="services" smooth={true} duration={500} onClick={toggleMenu} className="cursor-pointer hover:text-purple-500">
              Services
            </Link>
          </li>
          <li>
            <Link to="portfolio" smooth={true} duration={500} onClick={toggleMenu} className="cursor-pointer hover:text-purple-500">
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500} onClick={toggleMenu} className="cursor-pointer hover:text-purple-500">
              Contact
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500} onClick={toggleMenu}>
              <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-1 px-4 rounded-2xl text-white hover:scale-105 duration-300">
                Connect With Me
              </button>
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
