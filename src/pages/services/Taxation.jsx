import React from "react";
import ServiceDetailPage from "../../components/service-details/ServiceDetailPage";
import servicePagesData from "../../components/service-details/servicePagesData";

const Taxation = () => {
  const taxationData = servicePagesData.find(
    (service) => service.id === "taxation-services"
  );

  return <ServiceDetailPage data={taxationData} />;
};

export default Taxation;