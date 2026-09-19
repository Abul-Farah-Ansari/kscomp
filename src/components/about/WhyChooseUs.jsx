import React from "react";
import { motion } from "framer-motion";

import image01 from "../../assets/about/why choose us/1.png";
import image02 from "../../assets/about/why choose us/2.png";
import image03 from "../../assets/about/why choose us/3.png";
import image04 from "../../assets/about/why choose us/4.png";
import image05 from "../../assets/about/why choose us/5.png";
import image06 from "../../assets/about/why choose us/6.png";

const WhyChooseUs = () => {
  const reasons = [
    {
      number: "01",
      title: "Personalized Solutions",
      text: "Providing personalized solutions based on each client's needs and circumstances.",
      image: image01,
    },
    {
      number: "02",
      title: "Compliance Support",
      text: "Helping clients maintain proper tax and regulatory compliance with reliable professional support.",
      image: image02,
    },
    {
      number: "03",
      title: "Financial & Business Advisory",
      text: "Supporting businesses with accounting, finance and strategic advisory to help them move forward with confidence.",
      image: image03,
    },
    {
      number: "04",
      title: "Tax & Insurance Solutions",
      text: "Providing suitable Tax & insurance solutions as part of our integrated professional support.",
      image: image04,
    },
    {
      number: "05",
      title: "Technology & Expertise",
      text: "Using technology and professional expertise to improve accuracy and efficiency in our services.",
      image: image05,
    },
    {
      number: "06",
      title: "Trust & Transparency",
      text: "Building relationships based on trust, transparency and integrity with every client we serve.",
      image: image06,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#f4f3ef] py-28 sm:py-36">

      {/* =====================================================
          ABSTRACT BACKGROUND SHAPES
      ===================================================== */}

      <div className="pointer-events-none absolute -left-32 top-10 h-[430px] w-[430px] rounded-full bg-[#102b29]/5" />

      <div className="pointer-events-none absolute left-[38%] top-[100px] h-[360px] w-[360px] rounded-full bg-[#102b29]/5" />

      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div className="relative mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-14">

        {/* ===================================================
            HEADER
        =================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* LABEL */}

          <div className="flex items-center gap-4">
            <div className="h-px w-14 bg-[#102b29]/50" />

            <p className="text-xs font-semibold uppercase tracking-[5px] text-[#102b29]/65">
              Why Choose Us
            </p>
          </div>

          {/* HEADING */}

          <h2 className="mt-8 max-w-4xl text-5xl font-bold leading-[1.1] tracking-tight text-[#102b29] sm:text-6xl">
            Professional Support
            <br />

            <span className="text-[#426b66]">
              Built Around Your Needs.
            </span>
          </h2>

          {/* DESCRIPTION */}

          <p className="mt-8 max-w-3xl text-lg leading-9 text-[#102b29]/70">
            We aim to provide practical, reliable and personalized support
            while helping our clients manage their financial and regulatory
            responsibilities with clarity, accuracy and confidence.
          </p>
        </motion.div>

        {/* ===================================================
            REASONS GRID
        =================================================== */}

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
              className="
                group
                relative
                min-h-[320px]
                overflow-hidden
                border
                border-[#102b29]/10
                bg-white
                transition-all
                duration-500
                hover:bg-[#102b29]
              "
            >

              {/* =================================================
                  NORMAL STATE — IMAGE ONLY
              ================================================= */}

              <div
                className="
                  absolute
                  inset-0
                  flex
                  items-center
                  justify-center
                  bg-white
                  p-5
                  transition-all
                  duration-500
                  group-hover:scale-[1.02]
                  group-hover:opacity-0
                "
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="
                    h-full
                    w-full
                    object-contain
                    object-center
                  "
                />
              </div>

              {/* =================================================
                  HOVER CONTENT
              ================================================= */}

              <div
                className="
                  relative
                  z-10
                  flex
                  min-h-[320px]
                  flex-col
                  justify-center
                  p-9
                  opacity-0
                  transition-all
                  duration-500
                  group-hover:opacity-100
                  sm:p-10
                "
              >

                {/* NUMBER */}

                <span
                  className="
                    text-sm
                    font-semibold
                    tracking-[4px]
                    text-[#c5a46d]
                  "
                >
                  {item.number}
                </span>

                {/* TITLE */}

                <h3
                  className="
                    mt-7
                    text-2xl
                    font-semibold
                    leading-tight
                    text-white
                  "
                >
                  {item.title}
                </h3>

                {/* DESCRIPTION */}

                <p
                  className="
                    mt-6
                    max-w-md
                    leading-8
                    text-white/70
                  "
                >
                  {item.text}
                </p>

                {/* GOLD ACCENT */}

                <div
                  className="
                    mt-7
                    h-px
                    w-10
                    bg-[#c5a46d]
                    transition-all
                    duration-500
                    group-hover:w-16
                  "
                />

              </div>

              {/* =================================================
                  CORNER DETAIL
              ================================================= */}

              <div
                className="
                  pointer-events-none
                  absolute
                  right-0
                  top-0
                  h-16
                  w-16
                  border-b
                  border-l
                  border-[#c5a46d]/0
                  transition-all
                  duration-500
                  group-hover:border-[#c5a46d]/30
                "
              />

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;