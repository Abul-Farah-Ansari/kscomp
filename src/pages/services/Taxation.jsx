import React from "react";
import ServiceDetailPage from "../../components/service-details/ServiceDetailPage";
import servicePagesData from "../../components/service-details/servicePagesData";

const Taxation = () => {
  return <ServiceDetailPage data={servicePagesData.taxation} />;
};

export default Taxation;