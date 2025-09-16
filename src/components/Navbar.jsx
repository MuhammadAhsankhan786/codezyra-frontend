import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import ContactSupport from "../components/ContactSupport";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [services, setServices] = useState([]);

  const location = useLocation();

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await fetch("http://localhost:5002/api/services");
        const data = await res.json();
        setServices(data);
      } catch (err) {
        console.error("Error fetching services:", err);
      }
    };
    fetchServices();
  }, []);

  const renderHomeLink = () => {
    if (location.pathname === "/") {
      return (
        <ScrollLink
          to="home"
          smooth
          duration={300}
          offset={-70}
          className="text-white cursor-pointer hover:text-orange-600 transition-all duration-300 no-underline"
        >
          Home
        </ScrollLink>
      );
    } else {
      return (
        <RouterLink
          to="/"
          className="text-white cursor-pointer hover:text-orange-600 transition-all duration-300 no-underline"
        >
          Home
        </RouterLink>
      );
    }
  };

  

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/60 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="font-poppins max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <ScrollLink to="home" className="no-underline">
              <img src="logo.png" width={180} alt="Logo" />
            </ScrollLink>
          </div>

          <div className="hidden md:flex items-center space-x-10">
            {renderHomeLink()}

            

            <ScrollLink
              to="about"
              smooth
              duration={300}
              offset={-70}
              className="text-white cursor-pointer hover:text-orange-600 transition-all duration-300 no-underline"
            >
              About
            </ScrollLink>

            <div className="relative group">
              <button className="text-white flex items-center hover:text-orange-600 transition-all duration-300 no-underline">
                Pages
                <ChevronDown
                  size={16}
                  className="ml-1 transition-transform duration-300 group-hover:rotate-180"
                />
              </button>
              <div className="absolute hidden group-hover:block left-0 top-full bg-white rounded-md shadow-lg py-2 w-40 z-50">
                <RouterLink
                  to="/about"
                  className="block px-4 py-2 text-gray-800 hover:text-orange-600 no-underline"
                >
                  About Us
                </RouterLink>
                <RouterLink
                  to="/services"
                  className="block px-4 py-2 text-gray-800 hover:text-orange-600 no-underline"
                >
                  Our Services
                </RouterLink>
                <RouterLink
                  to="/contact-us"
                  className="block px-4 py-2 text-gray-800 hover:text-orange-600 no-underline"
                >
                  Contact Us
                </RouterLink>
              </div>
            </div>

            <ScrollLink
              to="testimonials"
              smooth
              duration={300}
              offset={-70}
              className="text-white cursor-pointer hover:text-orange-600 transition-all duration-300 no-underline"
            >
              Testimonials
            </ScrollLink>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="hidden md:block animate-bounce text-white font-semibold py-2 px-4 rounded-md bg-[#43ba7f] hover:bg-[#36a56f] transition-all duration-300"
          >
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
          <div className="px-2 pt-2 pb-3 flex flex-col items-center space-y-4">
            {renderHomeLink()}
            {services.length > 0 ? (
              services.map((service) => (
                <RouterLink
                  key={service._id}
                  to={`/services/${service._id}`}
                  className="text-white cursor-pointer hover:text-orange-600 no-underline"
                >
                  {service.title}
                </RouterLink>
              ))
            ) : (
              <p className="text-gray-400">No Services</p>
            )}

            <ScrollLink
              to="about"
              smooth
              duration={300}
              offset={-70}
              className="text-white cursor-pointer hover:text-orange-600 no-underline"
            >
              About
            </ScrollLink>

            <RouterLink
              to="/about"
              className="text-white cursor-pointer hover:text-orange-600 no-underline"
            >
              About Us
            </RouterLink>
            <RouterLink
              to="/service"
              className="text-white cursor-pointer hover:text-orange-600 no-underline"
            >
              Our Services
            </RouterLink>
            <RouterLink
              to="/contact-us"
              className="text-white cursor-pointer hover:text-orange-600 no-underline"
            >
              Contact Us
            </RouterLink>

            <ScrollLink
              to="testimonials"
              smooth
              duration={300}
              offset={-70}
              className="text-[#fff] cursor-pointer hover:text-orange-600 no-underline"
            >
              Testimonials
            </ScrollLink>

            <button
              onClick={() => setIsModalOpen(true)}
              className="mt-3 w-full text-center text-white font-semibold py-2 px-4 rounded-md bg-[#43ba7f] hover:bg-[#36a56f] transition-all duration-300"
            >
              Contact Support
            </button>
          </div>
        </div>
      )}

      <ContactSupport
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </nav>
  );
};

export default Navbar;
