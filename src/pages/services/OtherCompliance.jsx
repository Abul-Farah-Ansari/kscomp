import React from "react";
import ServiceDetailPage from "../../components/service-details/ServiceDetailPage";
import servicePagesData from "../../components/service-details/servicePagesData";

const OtherCompliance = () => {
  return <ServiceDetailPage data={servicePagesData.otherCompliance} />;
};

export default OtherCompliance;