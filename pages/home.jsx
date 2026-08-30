import React from "react";

import Hero from "../components/home/Hero";
import IntroVideo from "../components/home/IntroVideo";
import FeatureCards from "../components/home/FeatureCards";
import About from "../components/home/About";
import Services from "../components/home/Services";
import FinancialManagement from "../components/home/FinancialManagement";
import Stats from "../components/home/Stats";
import CEOMessage from "../components/home/CEOMessage";
import Testimonials from "../components/home/Testimonials";
import Clients from "../components/home/Clients";
import FAQ from "../components/home/FAQ";
import QueryForm from "../components/home/QueryForm";

const Home = () => {
  return (
    <>
      <Hero />
      <IntroVideo />
      <FeatureCards />
      <About />
      <Services />
      <FinancialManagement />
      <Stats />
      <CEOMessage />
      <Testimonials />
      <Clients />
      <FAQ />
      <QueryForm />
    </>
  );
};

export default Home;