import { useState } from "react";

import ServicesHero from "../components/services/ServicesHero";
import ServicesSearch from "../components/services/ServicesSearch";
import ServicesCategories from "../components/services/ServicesCategories";
import ServiceSection from "../components/services/ServiceSection";
import ServiceModal from "../components/services/ServiceModal";

import { servicesData } from "../components/services/servicesData";

const Services = () => {
  const [selectedService, setSelectedService] =
    useState(null);

  return (
    <>
      <ServicesHero />

      <ServicesSearch
        servicesData={servicesData}
        onServiceClick={setSelectedService}
      />

      <ServicesCategories />

      {servicesData.map((category, index) => (
        <ServiceSection
          key={category.id}
          category={category}
          dark={index % 2 === 0}
          onServiceClick={setSelectedService}
        />
      ))}

      <ServiceModal
        selectedService={selectedService}
        servicesData={servicesData}
        onClose={() => setSelectedService(null)}
      />
    </>
  );
};

export default Services;