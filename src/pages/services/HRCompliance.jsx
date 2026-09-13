import React from "react";
import ServiceDetailPage from "../../components/service-details/ServiceDetailPage";
import servicePagesData from "../../components/service-details/servicePagesData";

const HRCompliance = () => {
  return <ServiceDetailPage data={servicePagesData.hrCompliance} />;
};

export default HRCompliance;