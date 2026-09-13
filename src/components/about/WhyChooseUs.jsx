import React from "react";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
  const reasons = [
    {
      number: "01",
      title: "Personalized Solutions",
      text: "Providing personalized solutions based on each client's needs and circumstances.",
    },
    {
      number: "02",
      title: "Compliance Support",
      text: "Helping clients maintain proper tax and regulatory compliance with reliable professional support.",
    },
    {
      number: "03",
      title: "Financial & Business Advisory",
      text: "Supporting businesses with accounting, finance and strategic advisory to help them move forward with confidence.",
    },
    {
      number: "04",
      title: "Tax & Insurance Solutions",
      text: "Providing suitable Tax & insurance solutions as part of our integrated professional support.",
    },
    {
      number: "05",
      title: "Technology & Expertise",
      text: "Using technology and professional expertise to improve accuracy and efficiency in our services.",
    },
    {
      number: "06",
      title: "Trust & Transparency",
      text: "Building relationships based on trust, transparency and integrity with every client we serve.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#f4f3ef] py-28 sm:py-36">

      {/* Abstract shapes */}
      <div className="absolute -left-32 top-10 h-[430px] w-[430px] rounded-full bg-[#102b29]/5" />

      <div className="absolute left-[38%] top-[100px] h-[360px] w-[360px] rounded-full bg-[#102b29]/5" />

      <div className="relative mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-14">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-4">
            <div className="h-px w-14 bg-[#102b29]/50" />

            <p className="text-xs font-semibold uppercase tracking-[5px] text-[#102b29]/65">
              Why Choose Us
            </p>
          </div>

          <h2 className="mt-8 max-w-4xl text-5xl font-bold leading-[1.1] tracking-tight text-[#102b29] sm:text-6xl">
            Professional Support
            <br />
            <span className="text-[#426b66]">
              Built Around Your Needs.
            </span>
          </h2>

          <p className="mt-8 max-w-3xl text-lg leading-9 text-[#102b29]/70">
            We aim to provide practical, reliable and personalized support
            while helping our clients manage their financial and regulatory
            responsibilities with clarity, accuracy and confidence.
          </p>
        </motion.div>

        {/* Reasons */}
        <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {reasons.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
              className="border border-[#102b29]/10 bg-white p-10 sm:p-12"
            >
              <span className="text-sm font-semibold tracking-[4px] text-[#426b66]">
                {item.number}
              </span>

              <h3 className="mt-7 text-3xl font-semibold leading-tight text-[#102b29]">
                {item.title}
              </h3>

              <p className="mt-6 max-w-md leading-8 text-[#102b29]/65">
                {item.text}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;