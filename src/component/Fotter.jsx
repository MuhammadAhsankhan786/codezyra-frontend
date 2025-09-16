import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 font-poppins">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <img src="logo.png" alt="CodeZyra Logo" className="w-40 mb-4" />
            <p className="text-sm leading-relaxed">
              CodeZyra is a modern digital agency building stunning websites,
              apps, and digital experiences to help businesses grow.
            </p>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <ScrollLink
                  to="home"
                  smooth={true}
                  duration={300}
                  offset={-70}
                  className="hover:text-orange-500 text-[#fff] cursor-pointer transition"
                >
                  Home
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="service"
                  smooth={true}
                  duration={300}
                  offset={-70}
                  className="hover:text-orange-500 text-[#fff] cursor-pointer transition"
                >
                  Services
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="about"
                  smooth={true}
                  duration={300}
                  offset={-70}
                  className="hover:text-orange-500 text-[#fff] cursor-pointer transition"
                >
                  About
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="testimonials"
                  smooth={true}
                  duration={300}
                  offset={-70}
                  className="hover:text-orange-500 text-[#fff] cursor-pointer transition"
                >
                  Testimonials
                </ScrollLink>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Pages</h3>
            <ul className="space-y-3">
              <li>
                <RouterLink
                  to="/about"
                  className="hover:text-orange-500 text-[#fff] transition"
                >
                  About Us
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  to="/service"
                  className="hover:text-orange-500 text-[#fff] transition"
                >
                  Our Services
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  to="/contact"
                  className="hover:text-orange-500 text-[#fff] transition"
                >
                  Contact Us
                </RouterLink>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Stay Updated</h3>
            <form className="flex items-center bg-gray-800 rounded-lg overflow-hidden">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 text-sm bg-gray-800 text-white outline-none"
              />
              <button
                type="submit"
                className="bg-orange-600 hover:bg-orange-500 px-4 py-2 text-sm font-semibold text-white transition"
              >
                Subscribe
              </button>
            </form>
            
            <div className="flex space-x-8 mt-5">
              <a href="#" className="hover:text-orange-500 transition">
                <Facebook size={20} className="text-[#fff] text-xl cursor-pointer hover:text-orange-500" />
              </a>
              <a href="#" className="hover:text-orange-500 transition">
                <Twitter size={20} className="text-[#fff] text-xl cursor-pointer  hover:text-orange-500" />
              </a>
              <a href="#" className="hover:text-orange-500 transition">
                <Instagram size={20} className="text-[#fff] text-xl cursor-pointer  hover:text-orange-500" />
              </a>
              <a href="#" className="hover:text-orange-500 transition">
                <Linkedin size={20} className="text-[#fff] text-xl cursor-pointer  hover:text-orange-500" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm">
          <p>© {new Date().getFullYear()} CodeZyra. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
