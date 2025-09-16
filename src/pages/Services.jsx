import React, { useEffect, useRef, useState } from "react";
import About from "./AboutUs";
import {
  Search,
  Code,
  Layers,
  PenTool,
  Megaphone,
  ShoppingBag,
  Globe,
  Users,
  Film,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const iconMapping = {
  "SEO Optimization": <Search className="w-10 h-10 text-orange-600" />,
  "Full-Stack Web Applications": <Code className="w-10 h-10 text-orange-600" />,
  "CMS Websites": <Layers className="w-10 h-10 text-orange-600" />,
  "Graphics Design": <PenTool className="w-10 h-10 text-orange-600" />,
  "Digital Marketing": <Megaphone className="w-10 h-10 text-orange-600" />,
  "Shopify Development": <ShoppingBag className="w-10 h-10 text-orange-600" />,
  "WordPress Development": <Globe className="w-10 h-10 text-orange-600" />,
  "Social Media Marketing": <Users className="w-10 h-10 text-orange-600" />,
  Animations: <Film className="w-10 h-10 text-orange-600" />,
};

const Services = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const [services, setServices] = useState([]);

  // Fetch services from API
  const fetchServices = async () => {
    try {
      const res = await fetch("http://localhost:5002/api/services");
      const data = await res.json();
      setServices(data);
    } catch (err) {
      console.error("Failed to fetch services:", err);
    }
  };

  useEffect(() => {
    fetchServices();

    // Poll every 5 seconds for real-time updates
    const interval = setInterval(fetchServices, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        y: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
      gsap.from(descRef.current, {
        scrollTrigger: {
          trigger: descRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
      gsap.utils.toArray(".service-card").forEach((card, i) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          y: 60,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          delay: i * 0.1,
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, [services]);

  return (
    <>

      <section
        ref={containerRef}
        id="service"
        className="h-screen bg-[url('bg.jpg')] bg-cover bg-center bg-no-repeat py-20 bg-gray-50 font-poppins px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 flex justify-center items-center">
        <div className="text-center mb-16 px-2 sm:px-4">
          <h1
            ref={titleRef}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#fff]"
          >
            Our <span className="text-orange-600">Services</span>
          </h1>
          <p
            ref={descRef}
            className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-[#fff] max-w-3xl mx-auto"
          >
            We provide complete digital solutions to grow your business online.
            From web development to marketing, we cover everything.
          </p>
        </div>

      </section>

      <div className="max-w-7xl py-10 mx-auto">
        <div className="grid gap-8 sm:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service._id}
              className="service-card border shadow-2xl bg-[#fff] hover:shadow-xl transition-shadow duration-500 rounded-2xl p-6 flex flex-col">

              <div className="icon mb-5">{iconMapping[service.title] || <Layers className="w-10 h-10 text-orange-600" />}</div>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
                {service.title}
              </h2>
              <p className="text-gray-600 text-base flex-grow leading-relaxed">
                {service.description}
              </p>
              <button className="mt-6 py-3 px-5 bg-orange-600 hover:bg-orange-700 text-white rounded-md transition duration-300 text-base font-medium">
                <Link className="text-[#fff] no-underline " to={'/contact-us'}>Contact us</Link>
              </button>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <About />
        </div>
      </div>
    </>
  );
};

export default Services;
