import React from "react";
import ServiceDetailPage from "../../components/service-details/ServiceDetailPage";
import servicePagesData from "../../components/service-details/servicePagesData";

const GovernmentDocumentation = () => {
  const governmentDocumentationData = servicePagesData.find(
    (service) => service.id === "government-documentation"
  );

  return <ServiceDetailPage data={governmentDocumentationData} />;
};

export default GovernmentDocumentation;