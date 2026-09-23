import React from "react";
import ServiceDetailPage from "../../components/service-details/ServiceDetailPage";
import servicePagesData from "../../components/service-details/servicePagesData";

const HRCompliance = () => {
  const hrComplianceData = servicePagesData.find(
    (service) => service.id === "hr-compliance-services"
  );

  return <ServiceDetailPage data={hrComplianceData} />;
};

export default HRCompliance;