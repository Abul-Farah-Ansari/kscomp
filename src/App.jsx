import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

import Home from "./pages/home";
import About from "./pages/About";
import Services from "./pages/Services";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* HOME */}
        <Route path="/" element={<Home />} />

        {/* ABOUT */}
        <Route path="/about" element={<About />} />

        {/* SERVICES */}
        <Route path="/services" element={<Services />} />

        {/* CONTACT */}
        <Route
          path="/contact"
          element={
            <div className="min-h-screen bg-[#f4f3ef] pt-32 text-center">
              Contact Page
            </div>
          }
        />

        {/* BLOG */}
        <Route
          path="/blog"
          element={
            <div className="min-h-screen bg-[#f4f3ef] pt-32 text-center">
              Blog Page
            </div>
          }
        />

        {/* CAREERS */}
        <Route
          path="/careers"
          element={
            <div className="min-h-screen bg-[#f4f3ef] pt-32 text-center">
              Careers Page
            </div>
          }
        />
      </Routes>

      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;