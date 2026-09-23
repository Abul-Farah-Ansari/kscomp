import React from "react";
import ServiceDetailPage from "../../components/service-details/ServiceDetailPage";
import servicePagesData from "../../components/service-details/servicePagesData";

const Insurance = () => {
  const insuranceData = servicePagesData.find(
    (service) => service.id === "insurance-services"
  );

  return <ServiceDetailPage data={insuranceData} />;
};

export default Insurance;