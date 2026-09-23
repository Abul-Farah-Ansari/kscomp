import React from "react";
import ServiceDetailPage from "../../components/service-details/ServiceDetailPage";
import servicePagesData from "../../components/service-details/servicePagesData";

const Registration = () => {
  const registrationData = servicePagesData.find(
    (service) => service.id === "registration-services"
  );

  return <ServiceDetailPage data={registrationData} />;
};

export default Registration;