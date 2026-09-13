import React from "react";
import ServiceDetailPage from "../../components/service-details/ServiceDetailPage";
import servicePagesData from "../../components/service-details/servicePagesData";

const Registration = () => {
  return <ServiceDetailPage data={servicePagesData.registration} />;
};

export default Registration;