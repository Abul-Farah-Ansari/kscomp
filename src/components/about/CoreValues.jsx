import React from "react";
import { motion } from "framer-motion";

const CoreValues = () => {
  const values = [
    {
      number: "01",
      title: "Integrity",
      text: "We believe trust begins with honesty, ethical conduct and responsible professional decisions.",
    },
    {
      number: "02",
      title: "Commitment",
      text: "We approach responsibilities with dedication and a consistent effort to provide dependable support.",
    },
    {
      number: "03",
      title: "Clarity",
      text: "Important information should be understandable. Clear communication remains central to our approach.",
    },
    {
      number: "04",
      title: "Consistency",
      text: "Reliable professional relationships are built through disciplined processes and dependable standards.",
    },
    {
      number: "05",
      title: "Respect",
      text: "Every client relationship deserves attention, understanding and professional respect.",
    },
    {
      number: "06",
      title: "Growth",
      text: "Continuous learning and improvement help us remain relevant and provide long-term value.",
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