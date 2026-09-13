import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

import image5 from "../../assets/5.png";
import image6 from "../../assets/6.png";
import image7 from "../../assets/7.png";
import image8 from "../../assets/8.png";
import image9 from "../../assets/9.png";
import image10 from "../../assets/10.png";

/* =========================================================
   SERVICES DATA
========================================================= */

const services = [
  {
    number: "01",
    title: "Audit & Assurance",
    short:
      "Independent reviews that strengthen transparency and financial confidence.",
    description:
      "Our audit and assurance services help businesses maintain accurate reporting, strengthen internal controls and build confidence among stakeholders.",
    icon: "mdi:shield-check-outline",
    image: image5,
    details: [
      "Statutory Audit",
      "Internal Audit",
      "Financial Review",
    ],
  },

  {
    number: "02",
    title: "Taxation Services",
    short:
      "Practical tax planning and reliable compliance support.",
    description:
      "We provide professional tax advisory and compliance support designed to help individuals and businesses manage their tax responsibilities effectively.",
    icon: "mdi:receipt-text-check-outline",
    image: image6,
    details: [
      "Income Tax",
      "GST Advisory",
      "Tax Planning",
    ],
  },

  {
    number: "03",
    title: "Financial Management",
    short:
      "Better planning and stronger financial decision-making.",
    description:
      "Our financial management services provide practical insights that help businesses improve performance, manage resources and plan for sustainable growth.",
    icon: "mdi:chart-line",
    image: image7,
    details: [
      "Financial Planning",
      "Cash Flow Analysis",
      "Performance Review",
    ],
  },

  {
    number: "04",
    title: "Accounting & Bookkeeping",
    short:
      "Accurate records for complete financial clarity.",
    description:
      "We maintain structured and accurate financial records that give businesses better control, visibility and confidence in their day-to-day finances.",
    icon: "mdi:calculator-variant-outline",
    image: image8,
    details: [
      "Bookkeeping",
      "Financial Statements",
      "MIS Reporting",
    ],
  },

  {
    number: "05",
    title: "Business Advisory",
    short:
      "Strategic guidance for important business decisions.",
    description:
      "Our advisory services help businesses identify challenges, evaluate opportunities and make informed decisions for long-term success.",
    icon: "mdi:briefcase-outline",
    image: image9,
    details: [
      "Business Strategy",
      "Growth Advisory",
      "Risk Assessment",
    ],
  },

  {
    number: "06",
    title: "Compliance & Regulatory",
    short:
      "Reliable support for important statutory requirements.",
    description:
      "We help businesses understand and manage statutory and regulatory responsibilities with a structured and dependable approach.",
    icon: "mdi:file-check-outline",
    image: image10,
    details: [
      "Statutory Compliance",
      "Regulatory Filing",
      "Corporate Compliance",
    ],
  },
];

/* =========================================================
   SERVICES COMPONENT
========================================================= */

const Services = () => {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <section
      id="services"
      className="
        relative
        w-full
        overflow-hidden
        bg-[#f4f7f5]
        py-14
        sm:py-16
        lg:min-h-screen
        lg:flex
        lg:items-center
        lg:py-6
      "
    >

      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div
          className="
            absolute
            -right-32
            top-1/3
            h-[400px]
            w-[400px]
            rounded-full
            bg-[#326844]/5
            blur-3xl
          "
        />

        <div
          className="
            absolute
            -left-32
            bottom-0
            h-[260px]
            w-[260px]
            rounded-full
            bg-[#285b68]/5
            blur-3xl
          "
        />

      </div>

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1600px]
          px-5
          sm:px-8
          lg:px-10
          xl:px-14
        "
      >

        {/* ===================================================
            HEADER
        ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-8 lg:mb-9"
        >

          <div className="mb-3 flex items-center gap-3">

            <span
              className="
                h-[2px]
                w-9
                bg-[#326844]
              "
            />

            <span
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[2.4px]
                text-[#326844]
              "
            >
              Our Services
            </span>

          </div>

          <div
            className="
              flex
              flex-col
              justify-between
              gap-5
              lg:flex-row
              lg:items-end
            "
          >

            <h2
              className="
                max-w-[700px]
                text-[34px]
                font-semibold
                leading-[1.05]
                tracking-[-0.8px]
                text-[#1e2d30]
                sm:text-[44px]
                lg:text-[clamp(38px,3vw,52px)]
              "
            >
              Expertise designed for

              <span className="block text-[#285b68]">
                every financial need.
              </span>
            </h2>

            <p
              className="
                max-w-[300px]
                border-l
                border-[#326844]/20
                pl-4
                text-[12px]
                leading-5
                text-[#687477]
                lg:mb-1
              "
            >
              Explore our professional services and discover how
              K S & Company can support your financial journey.
            </p>

          </div>

        </motion.div>

        {/* ===================================================
            SERVICES GRID
        ==================================================== */}

        <div
          className="
            grid
            w-full
            grid-cols-1
            gap-4
            md:grid-cols-2
            xl:grid-cols-3
            xl:gap-5
          "
        >

          {services.map((service, index) => {

            const isActive = activeCard === index;

            return (
              <motion.div
                key={service.number}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
                className="
                  relative
                  h-[300px]
                  w-full
                  sm:h-[320px]
                  lg:h-[285px]
                  xl:h-[295px]
                "
              >

                {/* =================================================
                    MAIN CARD
                ================================================== */}

                <div
                  className="
                    relative
                    h-full
                    w-full
                    overflow-hidden
                    rounded-[20px]
                    bg-[#f4f7f5]
                    border
                    border-[#102b29]/10
                    shadow-[0_14px_35px_rgba(18,50,48,0.10)]
                    transition-all
                    duration-500
                    hover:border-[#326844]/20
                    hover:shadow-[0_22px_50px_rgba(18,50,48,0.18)]
                  "
                >

                  {/* =================================================
                      PNG IMAGE ONLY
                  ================================================== */}

                  <motion.div
                    animate={{
                      opacity: isActive ? 0 : 1,
                      scale: isActive ? 0.98 : 1,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className="
                      absolute
                      inset-0
                      z-10
                      flex
                      items-center
                      justify-center
                      p-3
                      sm:p-4
                    "
                  >

                    <img
                      src={service.image}
                      alt={service.title}
                      className="
                        h-full
                        w-full
                        object-contain
                        object-center
                        transition-transform
                        duration-700
                        hover:scale-[1.03]
                      "
                    />

                    {/* Subtle bottom gradient */}

                    <div
                      className="
                        pointer-events-none
                        absolute
                        inset-x-0
                        bottom-0
                        h-16
                        bg-gradient-to-t
                        from-white/30
                        to-transparent
                      "
                    />

                    {/* Bottom accent */}

                    <div
                      className="
                        absolute
                        bottom-0
                        left-0
                        h-[3px]
                        w-full
                        bg-gradient-to-r
                        from-[#75b43c]
                        via-[#326844]
                        to-[#285b68]
                      "
                    />

                  </motion.div>

                  {/* =================================================
                      HOVER DETAILS CARD
                  ================================================== */}

                  <AnimatePresence>

                    {isActive && (

                      <motion.div
                        initial={{
                          opacity: 0,
                          scale: 1.03,
                        }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                        }}
                        exit={{
                          opacity: 0,
                          scale: 0.98,
                        }}
                        transition={{
                          duration: 0.32,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="
                          absolute
                          inset-0
                          z-30
                          flex
                          flex-col
                          overflow-hidden
                          bg-white
                          p-5
                          sm:p-6
                          lg:p-5
                          xl:p-6
                        "
                      >

                        {/* DETAILS HEADER */}

                        <div
                          className="
                            flex
                            items-center
                            justify-between
                          "
                        >

                          <span
                            className="
                              text-[8px]
                              font-semibold
                              uppercase
                              tracking-[1.8px]
                              text-[#326844]
                              sm:text-[9px]
                            "
                          >
                            Service Overview
                          </span>

                          <span
                            className="
                              text-[11px]
                              font-semibold
                              text-[#285b68]
                            "
                          >
                            {service.number}
                          </span>

                        </div>

                        {/* ICON + DIVIDER */}

                        <div
                          className="
                            mt-2
                            flex
                            items-center
                          "
                        >

                          <div
                            className="
                              flex
                              h-9
                              w-9
                              shrink-0
                              items-center
                              justify-center
                              rounded-lg
                              bg-[#326844]/10
                              text-[#326844]
                            "
                          >

                            <Icon
                              icon={service.icon}
                              className="h-5 w-5"
                            />

                          </div>

                          <div
                            className="
                              ml-3
                              h-px
                              flex-1
                              bg-[#326844]/15
                            "
                          />

                        </div>

                        {/* TITLE */}

                        <h3
                          className="
                            mt-3
                            text-[19px]
                            font-semibold
                            leading-tight
                            tracking-[-0.3px]
                            text-[#193d3f]
                            sm:text-[21px]
                            xl:text-[22px]
                          "
                        >
                          {service.title}
                        </h3>

                        {/* DESCRIPTION */}

                        <p
                          className="
                            mt-2
                            text-[10px]
                            leading-[1.45]
                            text-[#405759]
                            sm:text-[11px]
                            xl:text-[11px]
                          "
                        >
                          {service.description}
                        </p>

                        {/* SERVICE DETAILS */}

                        <div
                          className="
                            mt-3
                            space-y-1.5
                          "
                        >

                          {service.details.map((detail) => (

                            <div
                              key={detail}
                              className="
                                flex
                                items-center
                                gap-2.5
                                text-[10px]
                                font-medium
                                text-[#294346]
                                sm:text-[11px]
                              "
                            >

                              <span
                                className="
                                  flex
                                  h-5
                                  w-5
                                  shrink-0
                                  items-center
                                  justify-center
                                  rounded-full
                                  bg-[#326844]/10
                                  text-[#326844]
                                "
                              >

                                <Icon
                                  icon="mdi:check"
                                  className="h-3 w-3"
                                />

                              </span>

                              <span className="leading-5">
                                {detail}
                              </span>

                            </div>

                          ))}

                        </div>

                        {/* VIEW FULL SERVICE */}

                        <Link
                          to="/services"
                          className="
                            group/btn
                            mt-auto
                            inline-flex
                            items-center
                            gap-2
                            self-start
                            text-[9px]
                            font-semibold
                            text-[#285b68]
                            sm:text-[10px]
                          "
                        >

                          View Full Service

                          <span
                            className="
                              flex
                              h-7
                              w-7
                              items-center
                              justify-center
                              rounded-full
                              bg-[#326844]
                              text-white
                              transition-transform
                              duration-300
                              group-hover/btn:translate-x-1
                              group-hover/btn:-translate-y-1
                            "
                          >

                            <Icon
                              icon="mdi:arrow-top-right"
                              className="h-3.5 w-3.5"
                            />

                          </span>

                        </Link>

                        {/* ACCENT */}

                        <div
                          className="
                            absolute
                            bottom-0
                            left-0
                            h-[3px]
                            w-full
                            bg-gradient-to-r
                            from-[#75b43c]
                            via-[#326844]
                            to-[#285b68]
                          "
                        />

                      </motion.div>

                    )}

                  </AnimatePresence>

                </div>

              </motion.div>
            );
          })}

        </div>

        {/* ===================================================
            BOTTOM CTA
        ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="
            mt-8
            flex
            flex-col
            justify-between
            gap-4
            border-t
            border-[#dce5e0]
            pt-5
            sm:flex-row
            sm:items-center
            lg:mt-7
          "
        >

          <div>

            <p
              className="
                text-[13px]
                font-medium
                text-[#263b3e]
              "
            >
              Need a tailored solution?
            </p>

            <p
              className="
                mt-1
                text-[11px]
                text-[#7a8587]
              "
            >
              Speak with our professionals to discuss your requirements.
            </p>

          </div>

          {/* CTA BUTTON */}

          <Link
            to="/services"
            className="
              group
              inline-flex
              items-center
              gap-3
              self-start
              rounded-md
              bg-[#326844]
              px-5
              py-2.5
              text-[11px]
              font-semibold
              text-white
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-[#285b68]
              hover:shadow-lg
              sm:self-auto
            "
          >

            Explore All Services

            <Icon
              icon="mdi:arrow-top-right"
              className="
                h-4
                w-4
                transition-transform
                duration-300
                group-hover:translate-x-1
                group-hover:-translate-y-1
              "
            />

          </Link>

        </motion.div>

      </div>
    </section>
  );
};

export default Services;