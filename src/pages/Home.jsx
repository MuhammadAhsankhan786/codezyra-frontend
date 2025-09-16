import React from "react";
import Navbar from "../components/Navbar";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";
import Services from "./Services";

const Home = () => {
  useGSAP(() => {
    gsap.from("#maintext", {
      duration: 1,
      x: -200,
      opacity: 0,
      stagger: 0.2,
    });
    gsap.from("#description", {
      duration: 1,
      x: 300,
      opacity: 0,
      stagger: 0.2,
    });
    gsap.from("#btn", {
      duration: 1,
      y: 100,
      opacity: 0,
      stagger: 0.2,
    });
  });

  return (
    <>
      <div
        id="home"
        className="min-h-screen font-poppins px-6 sm:px-10 md:px-16 lg:px-20 py-16 md:py-20 bg-[url('bg.jpg')] bg-cover bg-center m-0 bg-no-repeat flex items-center"
      >
        <div className="max-w-4xl">
          <h1
            id="maintext"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight md:leading-[1.2] font-black"
          >
            Get <em className="text-orange-600 not-italic">ready</em> for Your{" "}
            <br className="hidden sm:block" /> business{" "}
            <br className="hidden sm:block" /> & upgrade{" "}
            <em className="text-orange-600 not-italic">all aspects</em>
          </h1>
          <span className="w-16 sm:w-20 bg-white rounded-md h-1 block my-3"></span>
          <p
            id="description"
            className="text-white mt-4 md:mt-6 text-sm sm:text-base md:text-lg font-medium leading-relaxed"
          >
            We are a full-service digital agency that specializes in creating
            stunning websites, engaging social media campaigns, and effective
            marketing strategies to help your business thrive in the digital
            world.
          </p>
          <div id="btn" className="flex flex-col sm:flex-row gap-3 mt-6">
            <button className="py-2 px-4 rounded-md bg-[#43ba7f] hover:bg-[#36a76a] transition duration-300 text-center">
              <Link to="/about" className="no-underline text-white block">
                Discover More
              </Link>
            </button>

            <button className="py-2 px-4 rounded-md bg-orange-600 hover:bg-orange-700 transition duration-300 text-center">
              <Link to="/contact-us" className="no-underline text-white block">
                Contact Us
              </Link>
            </button>
          </div>
        </div>
      </div>
      <Services />
    </>
  );
};

export default Home;
