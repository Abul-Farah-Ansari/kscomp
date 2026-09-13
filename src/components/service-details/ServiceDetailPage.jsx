import React from "react";
import { Link } from "react-router-dom";

import ServiceDetailHero from "./ServiceDetailHero";
import ServiceOverview from "./ServiceOverview";
import ServiceList from "./ServiceList";
import ServiceProcess from "./ServiceProcess";
import ServiceWhyChoose from "./ServiceWhyChoose";
import ServiceCTA from "./ServiceCTA";

const ServiceDetailPage = ({ data }) => {
  // Safety fallback if service data is missing
  if (!data) {
    return (
      <main className="flex min-h-[70vh] items-center justify-center bg-[#f4f1eb] px-6">
        <div className="text-center">
          {/* Error label */}
          <p className="mb-4 text-[10px] font-bold tracking-[0.28em] text-[#c5a46d]">
            SERVICE
          </p>

          {/* Heading */}
          <h1 className="font-serif text-3xl font-medium tracking-[-0.03em] text-[#0b211f] sm:text-4xl">
            Service not found
          </h1>

          {/* Description */}
          <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-[#0b211f]/60">
            The service you're looking for could not be found. Please return
            to our services page and select a service from the available
            categories.
          </p>

          {/* Back button */}
          <Link
            to="/services"
            className="group mt-7 inline-flex items-center justify-center rounded-full bg-[#0b211f] px-6 py-3 text-xs font-bold tracking-[0.08em] text-white transition-all duration-300 hover:bg-[#285b68]"
          >
            BACK TO SERVICES
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#f4f1eb]">
      {/* =========================================================
          01 — SERVICE HERO
      ========================================================= */}
      <ServiceDetailHero data={data} />

      {/* =========================================================
          02 — SERVICE OVERVIEW
      ========================================================= */}
      <ServiceOverview data={data} />

      {/* =========================================================
          03 — SERVICES WE PROVIDE
      ========================================================= */}
      <ServiceList data={data} />

      {/* =========================================================
          04 — OUR PROCESS
      ========================================================= */}
      <ServiceProcess data={data} />

      {/* =========================================================
          05 — WHY K S & COMPANY
      ========================================================= */}
      <ServiceWhyChoose data={data} />

      {/* =========================================================
          06 — FINAL CTA
      ========================================================= */}
      <ServiceCTA data={data} />
    </main>
  );
};

export default ServiceDetailPage;