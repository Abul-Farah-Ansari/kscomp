import React from "react";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import WhatsAppButton from "./components/WhatsappButton";

// ================================
// GLOBAL COMPONENTS
// ================================

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import CustomCursor from "./components/CustomCursor";
import Chatbot from "./components/chatbot/Chatbot";

// ================================
// MAIN PAGES
// ================================

import Home from "./pages/home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Career from "./pages/Career";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CompanyDocuments from "./pages/CompanyDocuments";

// ================================
// SERVICE DETAIL PAGES
// ================================

import Taxation from "./pages/services/Taxation";
import Insurance from "./pages/services/Insurance";
import Accounting from "./pages/services/Accounting";
import Registration from "./pages/services/Registration";
import HRCompliance from "./pages/services/HRCompliance";
import OtherCompliance from "./pages/services/OtherCompliance";
import GovernmentDocumentation from "./pages/services/GovernmentDocumentation";
import Finance from "./pages/services/Finance";

// ================================
// IT SERVICE DETAIL SYSTEM
// ================================

import ServiceDetailPage from "./components/service-details/ServiceDetailPage";
import servicePagesData from "./components/service-details/servicePagesData";

// Get IT Services data
const itServicesData = servicePagesData.find(
  (service) => service.id === "it-services"
);

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

        {/* =====================================
            HOME
        ===================================== */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* =====================================
            ABOUT
        ===================================== */}
        <Route
          path="/about"
          element={<About />}
        />

        {/* =====================================
            SERVICES OVERVIEW
        ===================================== */}
        <Route
          path="/services"
          element={<Services />}
        />

        {/* =====================================
            SERVICE DETAIL PAGES
        ===================================== */}

        {/* 01 — TAXATION */}
        <Route
          path="/services/taxation"
          element={<Taxation />}
        />

        {/* 02 — INSURANCE */}
        <Route
          path="/services/insurance"
          element={<Insurance />}
        />

        {/* 03 — ACCOUNTING */}
        <Route
          path="/services/accounting"
          element={<Accounting />}
        />

        {/* 04 — REGISTRATION */}
        <Route
          path="/services/registration"
          element={<Registration />}
        />

        {/* 05 — HR COMPLIANCE */}
        <Route
          path="/services/hr-compliance"
          element={<HRCompliance />}
        />

        {/* 06 — OTHER COMPLIANCE */}
        <Route
          path="/services/other-compliance"
          element={<OtherCompliance />}
        />

        {/* 07 — DOCUMENTATION SUPPORT */}
        <Route
          path="/services/government-documentation"
          element={<GovernmentDocumentation />}
        />

        {/* 08 — IT SERVICES */}
        <Route
          path="/services/it-services"
          element={
            <ServiceDetailPage
              data={itServicesData}
            />
          }
        />

        {/* 09 — LOAN & FINANCE */}
        <Route
          path="/services/finance"
          element={<Finance />}
        />

        {/* =====================================
            CONTACT
        ===================================== */}
        <Route
          path="/contact"
          element={<Contact />}
        />

        {/* =====================================
            CAREERS
        ===================================== */}
        <Route
          path="/careers"
          element={<Career />}
        />

        {/* =====================================
            PRIVACY POLICY
        ===================================== */}
        <Route
          path="/privacy-policy"
          element={<PrivacyPolicy />}
        />

        {/* =====================================
            COMPANY DOCUMENTS
        ===================================== */}
        <Route
          path="/company-documents"
          element={<CompanyDocuments />}
        />

        {/* =====================================
            404 FALLBACK
        ===================================== */}
        <Route
          path="*"
          element={<Home />}
        />

      </Routes>

      {/* WHATSAPP BUTTON */}
      <WhatsAppButton />

      {/* CHATBOT */}
      <Chatbot />

      {/* FOOTER */}
      <Footer />

      {/* SCROLL TO TOP */}
      <ScrollToTop />
    </>
  );
}

export default App;