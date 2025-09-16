import React from "react";
import Navbar from "../components/Navbar";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Users, Code, Globe, Rocket, Award, Lightbulb } from "lucide-react";

const About = () => {
  useGSAP(() => {
    gsap.from(".fade-up", {
      duration: 1,
      y: 80,
      stagger: 0.2,
      ease: "power3.out",
    });
    gsap.from(".fade-left", {
      duration: 1,
      x: -100,
      stagger: 0.2,
      ease: "power3.out",
    });
  });

  const features = [
    {
      icon: Users,
      title: "Creative Team",
      desc: "Passionate designers, developers, and strategists shaping the future of digital experiences.",
    },
    {
      icon: Code,
      title: "Cutting-Edge Tech",
      desc: "We craft websites and software using the latest frameworks and technologies.",
    },
    {
      icon: Globe,
      title: "Global Impact",
      desc: "Empowering businesses worldwide with innovative solutions and strategies.",
    },
    {
      icon: Rocket,
      title: "Innovation First",
      desc: "We turn ideas into groundbreaking digital products that drive growth.",
    },
    {
      icon: Award,
      title: "Proven Quality",
      desc: "Every project we deliver meets the highest standards of excellence.",
    },
    {
      icon: Lightbulb,
      title: "Smart Strategies",
      desc: "We align creativity with business goals to maximize your brand’s success.",
    },
  ];

  return (
    <>
      <Navbar />
      <div
        id="about"
        className="min-h-screen font-poppins px-6 sm:px-10 md:px-16 lg:px-20 py-20 
                   bg-[url('bg.jpg')] bg-cover bg-center bg-no-repeat flex items-center"
      >
        <div className="max-w-5xl mx-auto text-center text-white">
          <h1 className="fade-up text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            We Are <span className="text-orange-500">Codezyra</span>
          </h1>
          <span className="fade-up w-20 bg-orange-400 rounded-md h-1 block mx-auto my-5"></span>
          <p className="fade-up text-base sm:text-lg md:text-xl font-medium leading-relaxed max-w-3xl mx-auto opacity-90">
            At Codezyra, we combine creativity, strategy, and technology to
            deliver powerful digital experiences. Our team is dedicated to
            building solutions that not only look stunning but also drive real
            results for businesses worldwide.
          </p>
        </div>
      </div>

      <div
        className="py-20 px-6 sm:px-10 md:px-16 lg:px-20 
                      bg-gradient-to-br from-orange-50 via-orange-100 to-white"
      >
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="fade-up bg-white rounded-2xl shadow-lg p-8 flex flex-col 
                           items-center text-center border border-orange-100 
                           hover:border-orange-400 hover:shadow-orange-200 
                           hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <Icon className="w-12 h-12 text-orange-500" />
                <h3 className="text-xl font-bold mt-5 text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600 mt-3 text-sm sm:text-base">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-24 text-center fade-left">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to <span className="text-orange-600">Elevate</span> Your
            Brand?
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-8">
            Partner with Codezyra to create impactful websites, apps, and
            strategies that stand out in today’s digital landscape.
          </p>
          <a
            href="/contact"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 
                       rounded-lg shadow-lg font-semibold transition-all"
          >
            Get in Touch
          </a>
        </div>
      </div>

    </>
  );
};

export default About;
