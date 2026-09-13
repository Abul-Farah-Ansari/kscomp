import React from "react";
import ServiceDetailPage from "../../components/service-details/ServiceDetailPage";
import servicePagesData from "../../components/service-details/servicePagesData";

const Accounting = () => {
  return (
    <ServiceDetailPage data={servicePagesData.accounting} />
  );
};

export default Accounting;