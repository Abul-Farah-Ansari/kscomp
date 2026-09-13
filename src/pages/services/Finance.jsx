import React from "react";
import ServiceDetailPage from "../../components/service-details/ServiceDetailPage";
import servicePagesData from "../../components/service-details/servicePagesData";

const Finance = () => {
  return <ServiceDetailPage data={servicePagesData.finance} />;
};

export default Finance;