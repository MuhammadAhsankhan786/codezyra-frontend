import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Testimonials from "./Testimonials";

gsap.registerPlugin(ScrollTrigger);
const AboutUs = () => {
  const headingRef = useRef(null);
  const sectionRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState("web");

  useEffect(() => {
    gsap.from(headingRef.current, {
      y: -50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    gsap.from(sectionRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  const projects = {
    web: [
      {
        title: "Website Redesign",
        budget: "$1,500 – $2,200",
        deadline: "2022 Dec 12",
        client: "Web Biz",
      },
      {
        title: "Website Renovation",
        budget: "$2,500 – $3,600",
        deadline: "2022 Dec 10",
        client: "Online Ads",
      },
      {
        title: "Marketing Plan",
        budget: "$2,500 – $4,200",
        deadline: "2022 Dec 8",
        client: "Web Biz",
      },
      {
        title: "All-new Website",
        budget: "$3,000 – $6,600",
        deadline: "2022 Dec 2",
        client: "Web Presence",
      },
    ],
    graphics: [
      {
        title: "Graphics Redesign",
        budget: "$500 – $800",
        deadline: "2022 Nov 24",
        client: "Media One",
      },
      {
        title: "Digital Graphics",
        budget: "$1,500 – $3,000",
        deadline: "2022 Nov 18",
        client: "Second Media",
      },
      {
        title: "New Artworks",
        budget: "$2,200 – $4,400",
        deadline: "2022 Nov 10",
        client: "Artwork Push",
      },
      {
        title: "Complex Arts",
        budget: "$1,100 – $2,400",
        deadline: "2022 Nov 3",
        client: "Media One",
      },
    ],
    coding: [
      {
        title: "Backend Coding",
        budget: "$2,000 – $5,000",
        deadline: "2022 Nov 28",
        client: "PHP MySQL",
      },
      {
        title: "New Web App",
        budget: "$1,500 – $3,000",
        deadline: "2022 Nov 18",
        client: "Python Programming",
      },
      {
        title: "Frontend Interactions",
        budget: "$3,000 – $6,000",
        deadline: "2022 Nov 10",
        client: "JavaScript",
      },
      {
        title: "Video Creations",
        budget: "$1,800 – $4,400",
        deadline: "2022 Nov 3",
        client: "Multimedia",
      },
    ],
    seo: [
      {
        title: "On-Page SEO",
        budget: "$500 – $1,200",
        deadline: "2022 Nov 25",
        client: "Rank Booster",
      },
      {
        title: "Off-Page SEO",
        budget: "$800 – $1,800",
        deadline: "2022 Nov 18",
        client: "Link Builders",
      },
      {
        title: "SEO Audit",
        budget: "$700 – $1,500",
        deadline: "2022 Nov 10",
        client: "Site Analyzer",
      },
      {
        title: "Keyword Research",
        budget: "$400 – $900",
        deadline: "2022 Nov 5",
        client: "SEO Hub",
      },
    ],
    marketing: [
      {
        title: "Facebook Ads",
        budget: "$1,000 – $2,500",
        deadline: "2022 Nov 28",
        client: "Ad Growth",
      },
      {
        title: "Instagram Campaign",
        budget: "$800 – $1,900",
        deadline: "2022 Nov 20",
        client: "Brand Boost",
      },
      {
        title: "LinkedIn Outreach",
        budget: "$1,200 – $2,800",
        deadline: "2022 Nov 12",
        client: "Biz Connect",
      },
      {
        title: "YouTube Ads",
        budget: "$900 – $2,200",
        deadline: "2022 Nov 5",
        client: "Video Reach",
      },
    ],
  };

  return (
    <>
      <Navbar />
      <div
        id="about"
        className="bg-gray-50 min-h-screen px-6 sm:px-10 py-12 font-poppins"
      >
        <div ref={headingRef} className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            About <span className="text-orange-600">Us</span>
          </h1>
          <p className="text-lg text-gray-600">Know Us Better</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <button
            onClick={() => setActiveCategory("web")}
            className={`px-5 py-2 rounded-full shadow-md text-sm md:text-base transition ${
              activeCategory === "web"
                ? "bg-orange-600 text-white"
                : "bg-white text-gray-800 hover:bg-orange-100"
            }`}
          >
            Web Design
          </button>
          <button
            onClick={() => setActiveCategory("graphics")}
            className={`px-5 py-2 rounded-full shadow-md text-sm md:text-base transition ${
              activeCategory === "graphics"
                ? "bg-orange-600 text-white"
                : "bg-white text-gray-800 hover:bg-orange-100"
            }`}
          >
            Graphics
          </button>
          <button
            onClick={() => setActiveCategory("coding")}
            className={`px-5 py-2 rounded-full shadow-md text-sm md:text-base transition ${
              activeCategory === "coding"
                ? "bg-orange-600 text-white"
                : "bg-white text-gray-800 hover:bg-orange-100"
            }`}
          >
            Web Coding
          </button>
          <button
            onClick={() => setActiveCategory("seo")}
            className={`px-5 py-2 rounded-full shadow-md text-sm md:text-base transition ${
              activeCategory === "seo"
                ? "bg-orange-600 text-white"
                : "bg-white text-gray-800 hover:bg-orange-100"
            }`}
          >
            SEO Optimization
          </button>
          <button
            onClick={() => setActiveCategory("marketing")}
            className={`px-5 py-2 rounded-full shadow-md text-sm md:text-base transition ${
              activeCategory === "marketing"
                ? "bg-orange-600 text-white"
                : "bg-white text-gray-800 hover:bg-orange-100"
            }`}
          >
            Social Media Marketing
          </button>
        </div>

        <div
          ref={sectionRef}
          className="overflow-x-auto shadow-md rounded-2xl bg-white p-6"
        >
          <table className="w-full border-collapse text-sm md:text-base">
            <thead>
              <tr className="bg-orange-600 text-white text-left">
                <th className="p-3">Project Title</th>
                <th className="p-3">Budget</th>
                <th className="p-3">Deadline</th>
                <th className="p-3">Client</th>
              </tr>
            </thead>
            <tbody>
              {projects[activeCategory].map((p, i) => (
                <tr
                  key={i}
                  className="border-b border-gray-200 hover:bg-orange-50 transition"
                >
                  <td className="p-3 font-medium text-gray-800">{p.title}</td>
                  <td className="p-3 text-gray-600">{p.budget}</td>
                  <td className="p-3 text-gray-600">{p.deadline}</td>
                  <td className="p-3 text-gray-600">{p.client}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-16 text-center">
          <button className="mt-6 px-6 py-3 bg-orange-600 text-white rounded-xl shadow hover:bg-orange-700 transition">
            Discover More
          </button>
        </div>
      </div>
      <Testimonials/>
    </>
  );
};

export default AboutUs;
