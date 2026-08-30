import React from "react";
import { motion } from "framer-motion";

const WhyOurServices = () => {
  const reasons = [
    {
      title: "Professional Guidance",
      text: "Practical support across important financial and compliance requirements.",
    },
    {
      title: "Multiple Services",
      text: "Taxation, insurance, finance and business support under one professional platform.",
    },
    {
      title: "Clear Process",
      text: "We focus on maintaining clarity and organised communication throughout the process.",
    },
    {
      title: "Long-Term Support",
      text: "Building dependable relationships as client requirements continue to evolve.",
    },
  ];

  return (
    <section className="bg-white py-24 sm:py-32">

      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-14">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[5px] text-[#426b66]">
            Why KS & Company
          </p>

          <h2 className="mt-6 text-5xl font-bold leading-tight text-[#102b29]">
            One Partner.
            <br />
            Multiple Solutions.
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="min-h-[260px] border border-[#102b29]/10 bg-[#f4f3ef] p-8"
            >
              <span className="text-xs font-semibold tracking-[4px] text-[#426b66]">
                0{index + 1}
              </span>

              <h3 className="mt-7 text-xl font-semibold text-[#102b29]">
                {reason.title}
              </h3>

              <p className="mt-5 text-sm leading-7 text-[#102b29]/65">
                {reason.text}
              </p>

              <div className="mt-8 h-px w-14 bg-[#102b29]/20" />
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default WhyOurServices;