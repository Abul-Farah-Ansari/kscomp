import React from "react";
import ServiceDetailPage from "../../components/service-details/ServiceDetailPage";
import servicePagesData from "../../components/service-details/servicePagesData";

const Finance = () => {
  const financeData = servicePagesData.find(
    (service) => service.id === "finance-services"
  );

  return <ServiceDetailPage data={financeData} />;
};

export default Finance;