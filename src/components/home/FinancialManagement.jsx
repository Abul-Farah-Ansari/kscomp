import React from "react";
import {
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  BarChart3,
  BriefcaseBusiness,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import financialManagementImage from "../../assets/mngmt/financial-mngmt.jpeg";

/* =========================================================
   SERVICES
========================================================= */

const services = [
  {
    icon: TrendingUp,
    title: "Financial Planning",
    text: "Plan your finances with clarity and confidence.",
    color: "green",
  },
  {
    icon: ShieldCheck,
    title: "Risk Management",
    text: "Identify financial risks and make informed decisions.",
    color: "blue",
  },
  {
    icon: BarChart3,
    title: "Business Analysis",
    text: "Turn financial information into practical insights.",
    color: "green",
  },
  {
    icon: BriefcaseBusiness,
    title: "Strategic Advisory",
    text: "Professional guidance for sustainable business growth.",
    color: "blue",
  },
];

/* =========================================================
   COMPONENT
========================================================= */

const FinancialManagement = () => {
  return (
    <section
      className="
        relative
        flex
        w-full
        overflow-hidden
        bg-[#f7f9f7]
        font-condensed

        lg:min-h-screen
        lg:items-center
      "
    >
      {/* =====================================================
          BACKGROUND DECORATION
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="
            absolute
            -right-40
            top-1/3
            h-[400px]
            w-[400px]
            rounded-full
            bg-[#285b68]/[0.025]
            blur-3xl
          "
        />

        <div
          className="
            absolute
            -left-32
            bottom-0
            h-[280px]
            w-[280px]
            rounded-full
            bg-[#326844]/[0.025]
            blur-3xl
          "
        />
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1380px]

          px-5
          py-14

          sm:px-8
          sm:py-16

          lg:px-12
          lg:py-8
        "
      >
        {/* ===================================================
            SECTION HEADER
        =================================================== */}

        <div
          className="
            grid
            grid-cols-1
            items-end
            gap-5

            lg:grid-cols-[1fr_300px]
            lg:gap-12
          "
        >
          {/* HEADING */}

          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-3 flex items-center gap-3"
            >
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
                Financial Management
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.1,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                max-w-[700px]

                text-[36px]
                font-semibold
                leading-[1.06]
                tracking-[-0.8px]
                text-[#1e2d30]

                sm:text-[44px]

                lg:text-[clamp(38px,3vw,50px)]
              "
            >
              Smarter financial decisions.

              <span className="block text-[#285b68]">
                Stronger business outcomes.
              </span>
            </motion.h2>
          </div>

          {/* INTRO */}

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.25,
              duration: 0.7,
            }}
            className="
              border-l
              border-[#326844]/25
              pl-5
              lg:pb-1
            "
          >
            <p
              className="
                text-[12px]
                leading-5
                text-[#687477]

                lg:text-[13px]
                lg:leading-6
              "
            >
              Practical financial guidance that helps you understand
              your numbers, manage risk and plan for what comes next.
            </p>
          </motion.div>
        </div>

        {/* ===================================================
            MAIN CONTENT
        =================================================== */}

        <div
          className="
            mt-8
            grid
            grid-cols-1
            gap-10

            lg:mt-10
            lg:grid-cols-[1.05fr_0.95fr]
            lg:items-center
            lg:gap-14
          "
        >
          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.75,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {/* SMALL HEADING */}

              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#326844]" />

                <span
                  className="
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[2px]
                    text-[#326844]
                  "
                >
                  Our Approach
                </span>
              </div>

              {/* MAIN HEADING */}

              <h3
                className="
                  mt-3
                  max-w-[620px]

                  text-[29px]
                  font-semibold
                  leading-[1.08]
                  tracking-[-0.6px]
                  text-[#202d30]

                  sm:text-[36px]

                  lg:text-[clamp(30px,2.5vw,40px)]
                "
              >
                Making complex financial matters

                <span className="text-[#285b68]">
                  {" "}
                  easier to understand.
                </span>
              </h3>

              {/* DESCRIPTION */}

              <div className="mt-4 max-w-[640px]">
                <p
                  className="
                    text-[13px]
                    leading-6
                    text-[#5e696c]

                    sm:text-[14px]
                    sm:leading-6
                  "
                >
                  Running a successful business is difficult enough
                  without having to deal with financial management.
                  Improper record keeping, tax planning and strategic
                  decision making can create challenges that affect
                  your business in the long run.
                </p>

                <p
                  className="
                    mt-3
                    text-[13px]
                    leading-6
                    text-[#5e696c]

                    sm:text-[14px]
                    sm:leading-6
                  "
                >
                  We understand the challenges that business owners
                  encounter while managing their finances. Our focus
                  is to provide clear and dependable guidance so you
                  can make informed decisions with greater confidence.
                </p>
              </div>

              {/* SERVICE POINTS */}

              <div
                className="
                  mt-6
                  grid
                  grid-cols-1
                  gap-3

                  sm:grid-cols-2
                "
              >
                {services.map((item, index) => {
                  const Icon = item.icon;

                  const isGreen = item.color === "green";

                  return (
                    <motion.div
                      key={item.title}
                      initial={{
                        opacity: 0,
                        y: 18,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{
                        once: true,
                        amount: 0.3,
                      }}
                      transition={{
                        delay: 0.2 + index * 0.08,
                        duration: 0.5,
                      }}
                      whileHover={{
                        y: -3,
                      }}
                      className="
                        rounded-xl
                        border
                        border-[#e0e8e4]
                        bg-white
                        p-3.5

                        shadow-[0_5px_18px_rgba(25,65,55,0.035)]

                        transition-shadow
                        duration-300

                        hover:shadow-[0_10px_25px_rgba(25,65,55,0.07)]
                      "
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`
                            flex
                            h-9
                            w-9
                            shrink-0
                            items-center
                            justify-center
                            rounded-lg

                            ${
                              isGreen
                                ? "bg-[#326844]/10"
                                : "bg-[#285b68]/10"
                            }
                          `}
                        >
                          <Icon
                            size={16}
                            strokeWidth={1.7}
                            className={
                              isGreen
                                ? "text-[#326844]"
                                : "text-[#285b68]"
                            }
                          />
                        </div>

                        <div>
                          <h4
                            className="
                              text-[12px]
                              font-semibold
                              text-[#303b3d]
                            "
                          >
                            {item.title}
                          </h4>

                          <p
                            className="
                              mt-1
                              text-[10px]
                              leading-4
                              text-[#7b8587]
                            "
                          >
                            {item.text}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* CTA */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 18,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: 0.55,
                  duration: 0.6,
                }}
                className="mt-6"
              >
                <Link
                  to="/services"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-3

                    rounded-md
                    bg-[#326844]

                    px-5
                    py-2.5

                    text-[12px]
                    font-semibold
                    text-white

                    shadow-[0_7px_18px_rgba(50,104,68,0.12)]

                    transition-all
                    duration-300

                    hover:-translate-y-0.5
                    hover:bg-[#285b68]
                  "
                >
                  Explore Our Services

                  <ArrowRight
                    size={16}
                    strokeWidth={1.8}
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* =================================================
              RIGHT SIDE — LOCAL IMAGE ONLY
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 45,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.85,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              order-1
              flex
              w-full
              items-center
              justify-center
              lg:order-2
            "
          >
            {/* =================================================
                ONLY LOCAL IMAGE
            ================================================= */}

            <motion.img
              initial={{
                opacity: 0,
                scale: 0.96,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              src={financialManagementImage}
              alt="Financial Management"
              className="
                block
                h-auto
                w-full
                max-w-[600px]
                object-contain

                sm:max-w-[650px]

                lg:max-w-[680px]
                lg:scale-105
              "
            />
          </motion.div>
        </div>
      </div>

      {/* =====================================================
          BOTTOM BORDER
      ===================================================== */}

      <div className="absolute bottom-0 left-0 h-px w-full bg-[#dce5e0]" />
    </section>
  );
};

export default FinancialManagement;