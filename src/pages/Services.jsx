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

   01 - Taxation Services
   02 - Insurance Services
   03 - Accounting Services
   04 - Registration Services
   05 - HR Compliance Services
   06 - Other Compliance Services
   07 - Government & Documentation Services
   08 - Loan & Finance Services
========================================= */

const categoryOrder = [
  "taxation-services",
  "insurance-services",
  "accounting-services",
  "registration-services",
  "hr-compliance-services",
  "other-compliance",
  "government-documentation",
  "finance-services",
];


/* =========================================
   CATEGORY NUMBERS

   These numbers are fixed and independent
   of the order inside servicesData.js.
========================================= */

const categoryNumbers = {
  "taxation-services": "01",
  "insurance-services": "02",
  "accounting-services": "03",
  "registration-services": "04",
  "hr-compliance-services": "05",
  "other-compliance": "06",
  "government-documentation": "07",
  "finance-services": "08",
};


/* =========================================
   SERVICES PAGE
========================================= */

const Services = () => {
  const [selectedService, setSelectedService] =
    useState(null);


  /* =========================================
     ORDER SERVICES ACCORDING TO DESIGN

     This explicitly builds the array using
     categoryOrder instead of relying on the
     order inside servicesData.js.
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

          /* ---------------------------------
             CATEGORY DATA
          --------------------------------- */

          category={{
            ...category,

            /*
              Fixed category number.

              01 Taxation
              02 Insurance
              03 Accounting
              04 Registration
              05 HR Compliance
              06 Other Compliance
              07 Government
              08 Loan & Finance
            */

            number:
              categoryNumbers[category.id] ||
              "01",
          }}


          /* ---------------------------------
             ALTERNATING SECTION BACKGROUND
          --------------------------------- */

          dark={index % 2 === 0}


          /* ---------------------------------
             SERVICE MODAL
          --------------------------------- */

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