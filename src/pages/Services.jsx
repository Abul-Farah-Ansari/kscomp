import { useState } from "react";

import ServicesHero from "../components/services/ServicesHero";
import ServicesSearch from "../components/services/ServicesSearch";
import ServicesCategories from "../components/services/ServicesCategories";
import ServiceSection from "../components/services/ServiceSection";
import ServiceModal from "../components/services/ServiceModal";

import { servicesData } from "../components/services/servicesData";

/* =========================================
   SERVICES DISPLAY ORDER

   This controls the order of the sections
   appearing below the category cards.
========================================= */

const categoryOrder = [
  "taxation-services",
  "finance-services",
  "insurance-services",
  "accounting-services",
  "registration-services",
  "hr-compliance-services",
  "other-compliance",
  "government-documentation",
];

/* =========================================
   SERVICES PAGE
========================================= */

const Services = () => {
  const [selectedService, setSelectedService] =
    useState(null);

  /* =========================================
     ORDER SERVICES ACCORDING TO DESIGN
  ========================================== */

  const orderedServices = categoryOrder
    .map((id) =>
      servicesData.find(
        (category) => category.id === id
      )
    )
    .filter(Boolean);

  return (
    <main className="overflow-x-hidden bg-[#f3f1ec]">

      {/* =====================================
          SERVICES HERO
      ===================================== */}

      <ServicesHero />


      {/* =====================================
          SERVICE SEARCH
      ===================================== */}

      <ServicesSearch
        servicesData={servicesData}
        onServiceClick={setSelectedService}
      />


      {/* =====================================
          CATEGORY CARDS
      ===================================== */}

      <ServicesCategories />


      {/* =====================================
          SERVICE SECTIONS
      ===================================== */}

      {orderedServices.map((category, index) => (
        <ServiceSection
          key={category.id}

          /*
            We create a new category object here
            so the original servicesData remains
            untouched.
          */

          category={{
            ...category,

            /*
              The category number now follows
              the visual order.

              01 Taxation
              02 Finance
              03 Insurance
              04 Accounting
              05 Registration
              06 HR Compliance
              07 Other Compliance
              08 Government
            */

            number: String(index + 1).padStart(
              2,
              "0"
            ),
          }}

          /*
            Alternates dark and light sections.
          */

          dark={index % 2 === 0}

          onServiceClick={setSelectedService}
        />
      ))}


      {/* =====================================
          SERVICE DETAIL MODAL
      ===================================== */}

      <ServiceModal
        selectedService={selectedService}
        servicesData={servicesData}
        onClose={() =>
          setSelectedService(null)
        }
      />

    </main>
  );
};

export default Services;