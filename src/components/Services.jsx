import React, { useState } from "react";
import {
  ShieldCheck,
  Landmark,
  ChartNoAxesCombined,
  Calculator,
  BriefcaseBusiness,
  FileCheck2,
  ArrowUpRight,
  Check,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Audit & Assurance",
    short:
      "Independent reviews that strengthen transparency and financial confidence.",
    description:
      "Our audit and assurance services help businesses maintain accurate reporting, strengthen internal controls and build confidence among stakeholders.",
    icon: ShieldCheck,
    details: ["Statutory Audit", "Internal Audit", "Financial Review"],
  },
  {
    number: "02",
    title: "Taxation Services",
    short:
      "Practical tax planning and reliable compliance support.",
    description:
      "We provide professional tax advisory and compliance support designed to help individuals and businesses manage their tax responsibilities effectively.",
    icon: Landmark,
    details: ["Income Tax", "GST Advisory", "Tax Planning"],
  },
  {
    number: "03",
    title: "Financial Management",
    short:
      "Better planning and stronger financial decision-making.",
    description:
      "Our financial management services provide practical insights that help businesses improve performance, manage resources and plan for sustainable growth.",
    icon: ChartNoAxesCombined,
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
    icon: Calculator,
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
    icon: BriefcaseBusiness,
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
    icon: FileCheck2,
    details: [
      "Statutory Compliance",
      "Regulatory Filing",
      "Corporate Compliance",
    ],
  },
];

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
      {/* BACKGROUND DECORATION */}

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


      {/* MAIN CONTAINER */}

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


        {/* ================= HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mb-8
            lg:mb-9
          "
        >

          {/* LABEL */}

          <div className="mb-3 flex items-center gap-3">

            <span className="h-[2px] w-9 bg-[#326844]" />

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


          {/* HEADER CONTENT */}

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
              KS & Company can support your financial journey.
            </p>

          </div>

        </motion.div>


        {/* ================= SERVICES GRID ================= */}

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

            const Icon = service.icon;

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

                onMouseEnter={() =>
                  setActiveCard(index)
                }

                onMouseLeave={() =>
                  setActiveCard(null)
                }

                className="
                  relative

                  h-[360px]

                  sm:h-[380px]

                  lg:h-[330px]

                  xl:h-[345px]

                  w-full
                "
              >


                {/* CARD */}

                <div
                  className="
                    relative

                    h-full
                    w-full

                    overflow-hidden

                    rounded-[20px]

                    bg-[#173538]

                    shadow-[0_14px_35px_rgba(18,50,48,0.12)]

                    transition-shadow
                    duration-500

                    hover:shadow-[0_22px_50px_rgba(18,50,48,0.20)]
                  "
                >


                  {/* ================= NORMAL CARD ================= */}

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
                      flex-col

                      p-6

                      sm:p-7

                      lg:p-6
                    "
                  >


                    {/* BACKGROUND GRADIENT */}

                    <div
                      className="
                        absolute
                        inset-0

                        bg-gradient-to-br
                        from-[#326844]/35
                        via-transparent
                        to-[#193d6b]/20
                      "
                    />


                    {/* BACKGROUND NUMBER */}

                    <span
                      className="
                        absolute

                        -right-2
                        -top-2

                        text-[90px]

                        font-semibold

                        leading-none

                        tracking-[-6px]

                        text-white/[0.04]
                      "
                    >
                      {service.number}
                    </span>


                    <div
                      className="
                        relative
                        z-10

                        flex
                        h-full
                        flex-col
                      "
                    >


                      {/* TOP */}

                      <div
                        className="
                          flex
                          items-start
                          justify-between
                        "
                      >

                        <div
                          className="
                            flex

                            h-12
                            w-12

                            items-center
                            justify-center

                            rounded-xl

                            border
                            border-white/10

                            bg-white/[0.07]

                            text-[#9acb7c]
                          "
                        >
                          <Icon
                            size={23}
                            strokeWidth={1.5}
                          />
                        </div>


                        <span
                          className="
                            text-[9px]

                            font-medium

                            tracking-[1.8px]

                            text-white/35
                          "
                        >
                          SERVICE {service.number}
                        </span>

                      </div>


                      {/* BOTTOM */}

                      <div className="mt-auto">

                        <h3
                          className="
                            text-[22px]

                            font-semibold

                            tracking-[-0.4px]

                            text-white

                            sm:text-[25px]
                          "
                        >
                          {service.title}
                        </h3>


                        <p
                          className="
                            mt-3

                            max-w-[420px]

                            text-[12px]

                            leading-6

                            text-white/60
                          "
                        >
                          {service.short}
                        </p>


                        <div
                          className="
                            mt-5

                            flex
                            items-center
                            gap-2

                            text-[10px]

                            font-medium

                            text-[#b9dca5]
                          "
                        >
                          Hover to explore

                          <ArrowUpRight
                            size={14}
                          />

                        </div>

                      </div>

                    </div>


                    {/* BOTTOM ACCENT */}

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



                  {/* ================= DETAILS CARD ================= */}

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

                          bg-[#edf4ef]

                          p-6

                          sm:p-7

                          lg:p-6
                        "
                      >


                        {/* TOP */}

                        <div
                          className="
                            flex
                            items-center
                            justify-between
                          "
                        >

                          <span
                            className="
                              text-[9px]

                              font-semibold

                              uppercase

                              tracking-[1.8px]

                              text-[#326844]
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


                        {/* DIVIDER */}

                        <div
                          className="
                            mt-4

                            h-px
                            w-full

                            bg-[#326844]/15
                          "
                        />


                        {/* TITLE */}

                        <h3
                          className="
                            mt-4

                            text-[21px]

                            font-semibold

                            tracking-[-0.3px]

                            text-[#193d3f]

                            sm:text-[24px]
                          "
                        >
                          {service.title}
                        </h3>


                        {/* DESCRIPTION */}

                        <p
                          className="
                            mt-3

                            text-[11px]

                            leading-5

                            text-[#405759]

                            sm:text-[12px]
                          "
                        >
                          {service.description}
                        </p>


                        {/* DETAILS */}

                        <div
                          className="
                            mt-4

                            space-y-2
                          "
                        >

                          {service.details.map((detail) => (

                            <div
                              key={detail}

                              className="
                                flex
                                items-center
                                gap-3

                                text-[11px]

                                font-medium

                                text-[#294346]
                              "
                            >

                              <span
                                className="
                                  flex

                                  h-6
                                  w-6

                                  shrink-0

                                  items-center
                                  justify-center

                                  rounded-full

                                  bg-[#326844]/10

                                  text-[#326844]
                                "
                              >
                                <Check
                                  size={12}
                                  strokeWidth={2}
                                />
                              </span>

                              {detail}

                            </div>

                          ))}

                        </div>


                        {/* BUTTON */}

                        <button
                          className="
                            group/btn

                            mt-auto

                            inline-flex
                            items-center
                            gap-3

                            self-start

                            text-[10px]

                            font-semibold

                            text-[#285b68]
                          "
                        >

                          View Full Service


                          <span
                            className="
                              flex

                              h-8
                              w-8

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
                            <ArrowUpRight
                              size={13}
                            />
                          </span>

                        </button>


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


        {/* ================= BOTTOM CTA ================= */}

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


          <button
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


            <ArrowUpRight
              size={15}

              className="
                transition-transform
                duration-300

                group-hover:translate-x-1
                group-hover:-translate-y-1
              "
            />

          </button>

        </motion.div>

      </div>

    </section>
  );
};

export default Services;