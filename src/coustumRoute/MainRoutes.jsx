import { Route, Routes } from "react-router-dom";
import About from "../pages/About.jsx";
import Home from "../pages/Home.jsx";
import ContactForm from "../pages/ContactForm.jsx";
import ContactSupport from "../components/ContactSupport";
import ServicesAdmin from "../pages/ServicesAdmin.jsx";
import AdminLogin from "../pages/AdminLogin.jsx";
import Services from "../pages/Services.jsx";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<ContactForm />} />
        <Route path="/contact-support" element={<ContactSupport />} />
        <Route path="/services" element={<Services />} />

        <Route path="/admin/services" element={<ServicesAdmin />} />
        <Route path="/admin/login" element={<AdminLogin />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
