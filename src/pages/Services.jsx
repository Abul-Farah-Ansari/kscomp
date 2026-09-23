import { useState } from "react";

import ServicesHero from "../components/services/ServicesHero";
import ServicesSearch from "../components/services/ServicesSearch";
import ServicesCategories from "../components/services/ServicesCategories";
import ServiceSection from "../components/services/ServiceSection";
import ServiceModal from "../components/services/ServiceModal";

import { servicesData } from "../components/services/servicesData";
import servicePagesData from "../components/service-details/servicePagesData";

/* =========================================================
   FIXED CATEGORY ORDER
========================================================= */

const CATEGORY_CONFIG = [
  {
    id: "taxation-services",
    number: "01",
    title: "Taxation Services",
  },
  {
    id: "insurance-services",
    number: "02",
    title: "Insurance Services",
  },
  {
    id: "accounting-services",
    number: "03",
    title: "Accounting Services",
  },
  {
    id: "registration-services",
    number: "04",
    title: "Registration Services",
  },
  {
    id: "hr-compliance-services",
    number: "05",
    title: "HR Compliance Services",
  },
  {
    id: "other-compliance",
    number: "06",
    title: "Other Compliance Services",
  },
  {
    id: "government-documentation",
    number: "07",
    title: "Government & Documentation Services",
  },
  {
    id: "finance-services",
    number: "08",
    title: "Loan & Finance Services",
  },
];

/* =========================================================
   GET CATEGORY DATA
========================================================= */

const getCategoryData = (config) => {
  // First source: servicesData
  const serviceData = servicesData.find(
    (item) => item.id === config.id
  );

  // Second source: servicePagesData
  const detailData = servicePagesData.find(
    (item) => item.id === config.id
  );

  /*
    Merge both sources.

    This is important because even if servicesData is
    missing a category, servicePagesData can still provide
    the detail information.
  */

  return {
    ...config,

    ...(detailData || {}),
    ...(serviceData || {}),

    id: config.id,

    number: config.number,

    category:
      serviceData?.category ||
      detailData?.category ||
      config.title,

    title:
      serviceData?.title ||
      detailData?.title ||
      config.title,

    shortDescription:
      serviceData?.shortDescription ||
      detailData?.shortDescription ||
      detailData?.description ||
      detailData?.overview ||
      "Professional assistance and expert support for your requirements.",

    description:
      serviceData?.description ||
      detailData?.description ||
      detailData?.overview ||
      "",

    services:
      serviceData?.services ||
      detailData?.services ||
      [],
  };
};

/* =========================================================
   COMPONENT
========================================================= */

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  /*
    IMPORTANT:
    Do NOT use .filter(Boolean) here.

    CATEGORY_CONFIG guarantees that all 8 sections
    are always rendered.
  */

  const orderedServices = CATEGORY_CONFIG.map(
    getCategoryData
  );

  return (
    <main className="overflow-x-hidden bg-[#f3f1ec]">

      {/* =================================================
          HERO
      ================================================= */}

      <ServicesHero />

      {/* =================================================
          SEARCH
      ================================================= */}

      <ServicesSearch
        servicesData={servicesData}
        onServiceClick={setSelectedService}
      />

      {/* =================================================
          8 CATEGORY CARDS
      ================================================= */}

      <ServicesCategories />

      {/* =================================================
          ALL 8 SERVICE DETAIL SECTIONS
      ================================================= */}

      {orderedServices.map((category, index) => (
        <ServiceSection
          key={category.id}
          category={category}
          dark={index % 2 === 0}
          onServiceClick={setSelectedService}
        />
      ))}

      {/* =================================================
          SERVICE MODAL
      ================================================= */}

      <ServiceModal
        selectedService={selectedService}
        servicesData={servicesData}
        onClose={() => setSelectedService(null)}
      />

    </main>
  );
};

export default Services;