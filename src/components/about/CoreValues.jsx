import React from "react";
import { motion } from "framer-motion";

const CoreValues = () => {
  const values = [
    {
      number: "01",
      title: "Integrity",
      text: "We believe in honest and ethical professional practices.",
    },
    {
      number: "02",
      title: "Client First",
      text: "Our solutions begin with understanding our client's needs.",
    },
    {
      number: "03",
      title: "Accuracy",
      text: "We focus on precision in every financial and compliance assignment.",
    },
    {
      number: "04",
      title: "Transparency",
      text: "Clear communication and transparent processes build lasting trust.",
    },
    {
      number: "05",
      title: "Professional Excellence",
      text: "We continuously improve our knowledge, technology and service quality.",
    },
    {
      number: "06",
      title: "Long-Term Partnership",
      text: "We aim to grow with our clients, not simply serve them.",
    },
  ];

  return (
    <section className="bg-white py-28 sm:py-36">

      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-14">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-4">
            <div className="h-px w-14 bg-[#102b29]/50" />

            <p className="text-xs font-semibold uppercase tracking-[5px] text-[#102b29]/60">
              Our Core Values
            </p>
          </div>

          <h2 className="mt-8 text-4xl font-bold leading-tight text-[#102b29] sm:text-5xl">
            Principles That Define
            <br />
            How We Work.
          </h2>
        </motion.div>

        <div className="mt-20 grid border-l border-t border-[#102b29]/10 sm:grid-cols-2 lg:grid-cols-3">

          {values.map((value, index) => (
            <motion.div
              key={value.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.07,
              }}
              className="min-h-[280px] border-b border-r border-[#102b29]/10 p-9 sm:p-10"
            >
              <span className="text-sm font-semibold tracking-[4px] text-[#426b66]">
                {value.number}
              </span>

              <h3 className="mt-7 text-2xl font-semibold text-[#102b29]">
                {value.title}
              </h3>

              <p className="mt-5 leading-8 text-[#102b29]/65">
                {value.text}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default CoreValues;