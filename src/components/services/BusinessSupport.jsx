import React from "react";
import { motion } from "framer-motion";

const BusinessSupport = () => {
  const services = [
    {
      title: "Accounting",
      text: "Support for organised bookkeeping, accounting records and financial documentation.",
    },
    {
      title: "HR Compliance",
      text: "Assistance with important employee and statutory compliance requirements.",
    },
    {
      title: "15CA & 15CB",
      text: "Professional support for applicable foreign remittance documentation.",
    },
    {
      title: "Project Reports",
      text: "Preparation assistance for loan and cash credit project report requirements.",
    },
  ];

  return (
    <section className="bg-[#102b29] py-24 sm:py-32">

      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-14">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[5px] text-white/50">
            Professional Support
          </p>

          <h2 className="mt-6 text-5xl font-bold leading-tight text-white">
            Supporting Your
            <br />
            Business Operations.
          </h2>

          <p className="mt-7 text-lg leading-8 text-white/65">
            Additional services designed to support important business,
            documentation and operational requirements.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="min-h-[280px] border border-white/10 bg-white/[0.03] p-8"
            >
              <span className="text-xs font-semibold tracking-[4px] text-white/40">
                0{index + 1}
              </span>

              <h3 className="mt-7 text-2xl font-semibold text-white">
                {service.title}
              </h3>

              <p className="mt-5 text-sm leading-7 text-white/60">
                {service.text}
              </p>

              <div className="mt-8 h-px w-14 bg-white/20" />
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default BusinessSupport;