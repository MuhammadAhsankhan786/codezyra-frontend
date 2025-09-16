import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

import { ChevronDown } from "lucide-react"; 
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-black/60 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}>
      
      <div className="font-poppins max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <ScrollLink to="home" className="no-underline">
              <img src="logo.png" width={180} alt="CodeZyra Logo" />
            </ScrollLink>
          </div>

          <div className="hidden md:flex items-center space-x-10">
            <ScrollLink
              to="home"
              smooth={true}
              duration={300}
              offset={-70}
              className="text-[#fff] cursor-pointer no-underline hover:scale-105 hover:text-orange-600 transition-all duration-300"
            >
              Home
            </ScrollLink>
            <ScrollLink
              to="service"
              smooth={true}
              duration={300}
              offset={-70}
              className="text-[#fff] no-underline hover:scale-105 hover:text-orange-600 cursor-pointer transition-all duration-300"
            >
              Services
            </ScrollLink>
            <ScrollLink
              to="about"              
              smooth={true}
              duration={300}
              offset={-70}
              className="text-[#fff] cursor-pointer no-underline hover:scale-105 hover:text-orange-600 transition-all duration-300"
            >
              About
            </ScrollLink>

            <div className="relative group">
              <button className="text-[#fff]  no-underline hover:scale-105 hover:text-orange-600 transition-all duration-300 flex items-center">
                Pages
                <ChevronDown
                size={16}
                className="transition-transform text-white duration-300 group-hover:rotate-180"
              />
              </button>
              
              <div className="absolute    hidden transition-all duration-300 left-0 top-full text-sm  group-hover:block bg-white rounded-md shadow-lg  py-2 w-36 z-50">
                <RouterLink 
                  to="/about"
                  className="block px-4 cursor-pointer py-2 text-gray-800 hover:text-orange-600  no-underline hover:translate-x-2 duration-200"
                >
                  About Us
                </RouterLink>
                <RouterLink 
                  to="/about"
                  className="block cursor-pointer px-4 py-2 text-gray-800 hover:text-orange-600  no-underline hover:translate-x-2 duration-200"
                >
                  Our Services
                </RouterLink>
                <RouterLink 
                  to="/contact"
                  className="block px-4 cursor-pointer py-2 text-gray-800 hover:text-orange-600  no-underline hover:translate-x-2 duration-200"
                >
                  Contact Us
                </RouterLink>
              </div>
            </div>

            <ScrollLink
              to="testimonials"
              smooth={true}
              duration={300}  
              offset={-70}
              className="text-[#fff] cursor-pointer no-underline hover:scale-105 hover:text-orange-600 transition-all duration-300 flex items-center"
            >
              Testimonials
            </ScrollLink>
          </div>

          <button className="hidden md:block animate-bounce text-[#fff] font-semibold py-2 px-4 rounded-md bg-[#43ba7f] no-underline hover:bg-[#36a56f] transition-all duration-300">
            Contact Support
          </button>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-orange-400 focus:outline-none"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-4 flex flex-col items-center">
            <ScrollLink
              to="home"
              className="text-[#fff] cursor-pointer no-underline hover:scale-105 hover:text-orange-600 transition-all duration-300"
            >
              Home
            </ScrollLink>
            <ScrollLink
              to="service"
              className="text-[#fff] cursor-pointer no-underline hover:scale-105 hover:text-orange-600 transition-all duration-300"
            >
              Services
            </ScrollLink>
            <ScrollLink
              to="about"
              className="text-[#fff] cursor-pointer no-underline hover:scale-105 hover:text-orange-600 transition-all duration-300"
            >
              About
            </ScrollLink>
            <ScrollLink
              to="testimonials"
              className="text-[#fff] cursor-pointer no-underline hover:scale-105 hover:text-orange-600 transition-all duration-300"
            >
              Testimonials
            </ScrollLink>

            <div className="border-t border-gray-700 w-full my-2"></div>

            <RouterLink
              to="/about"
              className="text-[#fff] cursor-pointer no-underline hover:scale-105 hover:text-orange-600 transition-all duration-300"
            >
              About Us
            </RouterLink>
            <RouterLink
              to="/service"
              className="text-[#fff] cursor-pointer no-underline hover:scale-105 hover:text-orange-600 transition-all duration-300"
            >
              Our Services
            </RouterLink>
            <RouterLink
              to="/contact"
              className="text-[#fff] cursor-pointer no-underline hover:scale-105 hover:text-orange-600 transition-all duration-300"
            >
              Contact Us
            </RouterLink>

            <button className="mt-3 w-full text-center text-white font-semibold py-2 px-4 rounded-md bg-[#43ba7f] hover:bg-[#36a56f] transition-all duration-300">
              Contact Support
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
