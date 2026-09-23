import React from "react";
import ServiceDetailPage from "../../components/service-details/ServiceDetailPage";
import servicePagesData from "../../components/service-details/servicePagesData";

const Accounting = () => {
  const accountingData = servicePagesData.find(
    (service) => service.id === "accounting-services"
  );

  return <ServiceDetailPage data={accountingData} />;
};

export default Accounting;