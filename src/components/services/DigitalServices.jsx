import React from "react";
import { motion } from "framer-motion";

const DigitalServices = () => {
  const services = [
    {
      title: "PAN Card",
      text: "Assistance for new PAN card applications and applicable corrections.",
    },
    {
      title: "TAN Card",
      text: "Support for TAN registration and related documentation requirements.",
    },
    {
      title: "Digital Signature",
      text: "Assistance with digital signature certificate application requirements.",
    },
    {
      title: "PAN Aadhaar Linking",
      text: "Support for applicable PAN and Aadhaar linking requirements.",
    },
    {
      title: "Passport Application",
      text: "Guidance and assistance for online passport application processes.",
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
            Documentation Services
          </p>

          <h2 className="mt-6 text-5xl font-bold leading-tight text-[#102b29]">
            Digital &
            <br />
            Documentation Support.
          </h2>

          <p className="mt-7 text-lg leading-8 text-[#102b29]/70">
            Assistance for important personal, business and digital
            documentation requirements.
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

              <h3 className="mt-7 text-2xl font-semibold text-[#102b29]">
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

export default DigitalServices;