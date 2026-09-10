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
   04 - Loan & Finance Services
   05 - Registration Services
   06 - HR Compliance Services
   07 - Other Compliance Services
   08 - Government & Documentation Services
========================================= */

const categoryOrder = [
  "taxation-services",
  "insurance-services",
  "accounting-services",
  "finance-services",
  "registration-services",
  "hr-compliance-services",
  "other-compliance",
  "government-documentation",
];


/* =========================================
   CATEGORY NUMBERS

   Keep these fixed so the category number
   always matches the design order.
========================================= */

const categoryNumbers = {
  "taxation-services": "01",
  "insurance-services": "02",
  "accounting-services": "03",
  "finance-services": "04",
  "registration-services": "05",
  "hr-compliance-services": "06",
  "other-compliance": "07",
  "government-documentation": "08",
};


/* =========================================
   SERVICES PAGE
========================================= */

const Services = () => {
  const [selectedService, setSelectedService] =
    useState(null);


  /* =========================================
     ORDER SERVICES ACCORDING TO DESIGN

     This ensures the detailed service
     sections appear in exactly the same
     order as the category cards.
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
              Fixed category number based on
              the actual design order.

              01 Taxation
              02 Insurance
              03 Accounting
              04 Loan & Finance
              05 Registration
              06 HR Compliance
              07 Other Compliance
              08 Government
            */

            number:
              categoryNumbers[category.id] ||
              String(index + 1).padStart(
                2,
                "0"
              ),
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