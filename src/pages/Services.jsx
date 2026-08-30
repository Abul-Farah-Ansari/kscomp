import ServicesHero from "../components/services/ServicesHero";
import ServicesIntro from "../components/services/ServicesIntro";

import TaxationServices from "../components/services/TaxationServices";
import InsuranceServices from "../components/services/InsuranceServices";
import LoanServices from "../components/services/LoanServices";

import RegistrationServices from "../components/services/RegistrationServices";
import BusinessSupport from "../components/services/BusinessSupport";
import DigitalServices from "../components/services/DigitalServices";

import WhyOurServices from "../components/services/WhyOurServices";


const Services = () => {
  return (
    <>
      <ServicesHero />

      <ServicesIntro />

      {/* MAIN SERVICES */}
      <TaxationServices />
      <InsuranceServices />
      <LoanServices />

      {/* ADDITIONAL SERVICES */}
      <RegistrationServices />
      <BusinessSupport />
      <DigitalServices />

      <WhyOurServices />

    </>
  );
};

export default Services;