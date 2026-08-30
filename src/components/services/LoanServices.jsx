import React from "react";
import { motion } from "framer-motion";

const LoanServices = () => {
  const services = [
    {
      title: "Business Loan",
      text: "Financial solutions designed to support business expansion and operational requirements.",
    },
    {
      title: "Personal Loan",
      text: "Assistance in exploring financial options for important personal requirements.",
    },
    {
      title: "Car Loan",
      text: "Support for financing options related to purchasing a new or pre-owned vehicle.",
    },
    {
      title: "Home Loan",
      text: "Financial assistance options for purchasing, constructing or improving a home.",
    },
    {
      title: "Loan Against Property",
      text: "Funding options supported by the value of eligible residential or commercial property.",
    },
    {
      title: "Credit Card",
      text: "Assistance with understanding available credit card and related financial options.",
    },
  ];

  return (
    <section className="bg-[#f4f3ef] py-24 sm:py-32">

      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-14">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[5px] text-[#426b66]">
            Finance Advisor
          </p>

          <h2 className="mt-6 text-5xl font-bold leading-tight text-[#102b29] sm:text-6xl">
            Financial Solutions
            <br />
            For Every Goal.
          </h2>

          <p className="mt-7 text-lg leading-8 text-[#102b29]/70">
            Explore financial solutions designed around personal needs,
            business requirements, property goals and other important
            financial decisions.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              className="min-h-[280px] border border-[#102b29]/10 bg-white p-8"
            >
              <span className="text-xs font-semibold tracking-[4px] text-[#426b66]">
                0{index + 1}
              </span>

              <h3 className="mt-7 text-2xl font-semibold leading-tight text-[#102b29]">
                {service.title}
              </h3>

              <p className="mt-5 text-sm leading-7 text-[#102b29]/65">
                {service.text}
              </p>

              <div className="mt-8 h-px w-14 bg-[#102b29]/20" />
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default LoanServices;