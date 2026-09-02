import React from "react";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

// ================================
// GLOBAL COMPONENTS
// ================================

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import WhatsAppButton from "./components/WhatsAppButton";
import CustomCursor from "./components/CustomCursor";
import Chatbot from "./components/chatbot/Chatbot";
import WhatsAppButton from "./components/WhatsAppButton";
// ================================
// PAGES
// ================================

import Home from "./pages/home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CompanyDocuments from "./pages/CompanyDocuments";

// ================================
// CAREERS PAGE
// ================================

const Careers = () => {
  return (
    <main className="min-h-screen bg-[#f4f3ef] pt-24">
      {/* HERO */}
      <section className="bg-[#102b29] px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs font-semibold tracking-[0.3em] text-white/50">
            JOIN OUR TEAM
          </p>

          <h1 className="mt-5 text-4xl font-bold text-white sm:text-5xl md:text-6xl">
            Careers at KS & Company
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
            Explore opportunities to learn, grow, and build a meaningful
            professional career with KS & Company.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-[#102b29]">
            Build Your Future With Us
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-[#102b29]/70">
            We believe great work comes from talented people who are curious,
            responsible, and committed to delivering value. Join our team and
            grow alongside experienced professionals.
          </p>
        </div>
      </section>
    </main>
  );
};

// ================================
// APP COMPONENT
// ================================

function App() {
  return (
    <>
      {/* CUSTOM CURSOR */}
      <CustomCursor />

      {/* NAVBAR */}
      <Navbar />

      {/* PAGE ROUTES */}
      <Routes>
        {/* HOME */}
        <Route path="/" element={<Home />} />

        {/* ABOUT */}
        <Route path="/about" element={<About />} />

        {/* SERVICES */}
        <Route path="/services" element={<Services />} />

        {/* CONTACT */}
        <Route path="/contact" element={<Contact />} />

        {/* CAREERS */}
        <Route path="/careers" element={<Careers />} />

        {/* PRIVACY POLICY */}
        <Route
          path="/privacy-policy"
          element={<PrivacyPolicy />}
        />

        {/* COMPANY DOCUMENTS */}
        <Route
          path="/company-documents"
          element={<CompanyDocuments />}
        />

        {/* 404 FALLBACK */}
        <Route path="*" element={<Home />} />
      </Routes>

      {/* CHATBOT */}
      <Chatbot />
     

      {/* FOOTER */}
      <Footer />

      {/* FLOATING WHATSAPP BUTTON */}
      <WhatsAppButton />
      <ScrollToTop />
    </>
  );
}

export default App;