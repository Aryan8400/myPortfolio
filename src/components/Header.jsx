import React, { useState } from 'react';

const Header = () => {
  // State to manage the visibility of the mobile menu
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the menu open or closed
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-gray-900 text-white py-4">
      <nav className="container mx-auto flex flex-wrap justify-between items-center px-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold">My Portfolio</h1>

        {/* Hamburger Icon for Mobile */}
        <div className="sm:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {/* Hamburger Icon (SVG) */}
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Full Navigation Menu for larger screens */}
        <ul className="hidden sm:flex sm:space-x-4 mt-2 sm:mt-0 justify-center items-center w-full sm:w-auto">
          <li><a href="#about" className="hover:text-gray-300">About</a></li>
          <li><a href="#projects" className="hover:text-gray-300">Projects</a></li>
          <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
        </ul>

        {/* Mobile Navigation Menu (only visible when toggled) */}
        {isOpen && (
          <ul className="flex flex-col space-y-4 mt-4 sm:hidden w-full">
            <li><a href="#about" className="hover:text-gray-300">About</a></li>
            <li><a href="#projects" className="hover:text-gray-300">Projects</a></li>
            <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;