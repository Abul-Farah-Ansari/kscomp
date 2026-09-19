import React from "react";
import { motion } from "framer-motion";

import image01 from "../../assets/about/Bottom/01.png";
import image02 from "../../assets/about/Bottom/02.png";
import image03 from "../../assets/about/Bottom/03.png";
import image04 from "../../assets/about/Bottom/04.png";
import image05 from "../../assets/about/Bottom/05.png";
import image06 from "../../assets/about/Bottom/06.png";

const CoreValues = () => {
  const values = [
    {
      number: "01",
      title: "Integrity",
      text: "We believe in honest and ethical professional practices.",
      image: image01,
    },
    {
      number: "02",
      title: "Client First",
      text: "Our solutions begin with understanding our client's needs.",
      image: image02,
    },
    {
      number: "03",
      title: "Accuracy",
      text: "We focus on precision in every financial and compliance assignment.",
      image: image03,
    },
    {
      number: "04",
      title: "Transparency",
      text: "Clear communication and transparent processes build lasting trust.",
      image: image04,
    },
    {
      number: "05",
      title: "Professional Excellence",
      text: "We continuously improve our knowledge, technology and service quality.",
      image: image05,
    },
    {
      number: "06",
      title: "Long-Term Partnership",
      text: "We aim to grow with our clients, not simply serve them.",
      image: image06,
    },
  ];

  return (
    <section className="bg-white py-28 sm:py-36">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-14">

        {/* =====================================================
            SECTION HEADER
        ===================================================== */}

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

        {/* =====================================================
            CORE VALUES GRID
        ===================================================== */}

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
              className="
                group
                relative
                min-h-[280px]
                overflow-hidden
                border-b
                border-r
                border-[#102b29]/10
                bg-white
                transition-all
                duration-500
                hover:bg-[#102b29]
              "
            >
              {/* =================================================
                  IMAGE
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
                  src={value.image}
                  alt={value.title}
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
                  min-h-[280px]
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
                    text-white/55
                    transition-all
                    duration-500
                    group-hover:text-[#c5a46d]
                  "
                >
                  {value.number}
                </span>

                {/* HEADING */}

                <h3
                  className="
                    mt-7
                    text-2xl
                    font-semibold
                    text-white
                  "
                >
                  {value.title}
                </h3>

                {/* DESCRIPTION */}

                <p
                  className="
                    mt-5
                    leading-8
                    text-white/70
                  "
                >
                  {value.text}
                </p>

                {/* BOTTOM LINE */}

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
                  SMALL HOVER ACCENT
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

export default CoreValues;