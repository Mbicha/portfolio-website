import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 800);
      // Close menu when resizing to desktop
      if (window.innerWidth >= 800) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navItems = (
    <>
      <Link
        to={`/`}
        className="text text-2xl text-white font-thin hover:border-green-800 active:outline-1"
        onClick={closeMenu}
      >
        Home
      </Link>
      <Link
        to={`/about`}
        className="text text-2xl text-white font-thin hover:border-green-800 active:outline-1"
        onClick={closeMenu}
      >
        About
      </Link>
      <Link
        to={`/projects`}
        className="text text-2xl text-white font-thin hover:border-green-800 active:outline-1"
        onClick={closeMenu}
      >
        Projects
      </Link>
      <Link
        to={`/services`}
        className="text text-2xl text-white font-thin hover:border-green-800 active:outline-1"
        onClick={closeMenu}
      >
        Services
      </Link>
    </>
  );

  return (
    <header className="flex flex-row justify-between items-center p-2 shadow-md bg-black w-full h-24 sticky z-50">
      <img src="" alt="" srcSet="" className="w-2/5" />
      
      {isMobile ? (
        <>
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          
          {isOpen && (
            <div className="absolute top-24 right-0 bg-black w-full shadow-lg flex flex-col items-center space-y-4 py-4">
              {navItems}
            </div>
          )}
        </>
      ) : (
        <div className="flex flex-row w-3/5 justify-between">
          {navItems}
        </div>
      )}
    </header>
  );
};

export default NavBar;
