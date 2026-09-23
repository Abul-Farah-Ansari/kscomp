import React from "react";
import ServiceDetailPage from "../../components/service-details/ServiceDetailPage";
import servicePagesData from "../../components/service-details/servicePagesData";

const OtherCompliance = () => {
  const otherComplianceData = servicePagesData.find(
    (service) => service.id === "other-compliance"
  );

  return <ServiceDetailPage data={otherComplianceData} />;
};

export default OtherCompliance;