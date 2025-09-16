import { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import toast, { Toaster } from 'react-hot-toast';
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    website: "",
    budget: "",
    message: "",
    services: "",
  });

  useGSAP(() => {
    gsap.from(".fade-up", {
      duration: 1,
      y: 80,
      opacity: 0,
      stagger: 0.2,
      ease: "power3.out",
    });
    gsap.from(".fade-button", {
      duration: 1,
      scale: 0.8,
      y: 30,
      opacity: 0,
      ease: "back.out(1.7)",
      delay: 1,
    });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5002/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (res.ok) {
        toast.success("Message sent successfully ✅");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          website: "",
          budget: "",
          message: "",
          services: "",
        });
      } else {
        toast.error(`Error: ${data.message}`);
      }
    } catch {
      toast.error("Something went wrong ❌");
    }
  };

  return (
    <>
    
    <div
      className="min-h-screen w-full flex items-center justify-center bg-cover bg-center px-4 sm:px-6 md:px-10 lg:px-20 py-16"
      style={{ backgroundImage: "url('/contact-bg.jpg')" }}
    >
      <div className="w-full max-w-2xl bg-black/70 text-white p-6 sm:p-8 rounded-2xl shadow-2xl backdrop-blur-md">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center fade-up">
          Let's Connect
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="fade-up p-2 rounded-md bg-gray-900 border border-gray-700 placeholder-gray-400"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="fade-up p-2 rounded-md bg-gray-900 border border-gray-700 placeholder-gray-400"
              required
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="fade-up p-2 w-full rounded-md bg-gray-900 border border-gray-700 placeholder-gray-400"
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="fade-up p-2 w-full rounded-md bg-gray-900 border border-gray-700 placeholder-gray-400"
            required
          />

          <select
            name="services"
            value={formData.services}
            onChange={handleChange}
            className="fade-up p-2 w-full rounded-md bg-gray-900 border border-gray-700 placeholder-gray-400"
            required
          >
            <option value="">Select Service</option>
            <option>Web Development</option>
            <option>Mobile App Development</option>
            <option>UI/UX Design</option>
            <option>SEO Services</option>
            <option>Digital Marketing</option>
            <option>Other</option>
          </select>

          <input
            type="text"
            name="website"
            placeholder="Website URL (optional)"
            value={formData.website}
            onChange={handleChange}
            className="fade-up p-2 w-full rounded-md bg-gray-900 border border-gray-700 placeholder-gray-400"
          />

          <select
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="fade-up p-2 w-full rounded-md bg-gray-900 border border-gray-700 placeholder-gray-400"
            required
          >
            <option value="">Select Budget</option>
            <option>Less than $500</option>
            <option>$500 - $1000</option>
            <option>$1000 - $5000</option>
            <option>Above $5000</option>
          </select>

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="fade-up p-2 w-full rounded-md bg-gray-900 border border-gray-700 placeholder-gray-400"
            rows="4"
            required
          ></textarea>

          <button
            type="submit"
            className="fade-button bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-md w-full transition"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Toast Notifications */}
      <ToastContainer theme="dark" />
    </div>
    </>
  );
};

export default ContactForm;
