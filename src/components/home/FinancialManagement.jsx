import React from "react";
import {
  ArrowRight,
  ArrowUpRight,
  TrendingUp,
  ShieldCheck,
  BarChart3,
  BriefcaseBusiness,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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
      {/* BACKGROUND DECORATION */}

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

      {/* MAIN CONTAINER */}

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
        {/* SECTION HEADER */}

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

        {/* MAIN CONTENT */}

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
          {/* LEFT CONTENT */}

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

                  const isGreen =
                    item.color === "green";

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
                {/* UPDATED LINK */}

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

          {/* RIGHT IMAGE */}

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
              lg:order-2
            "
          >
            {/* DECORATIVE FRAME */}

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.3,
                duration: 0.7,
              }}
              className="
                absolute
                -right-3
                -top-3

                h-full
                w-full

                rounded-2xl
                border
                border-[#285b68]/20
              "
            />

            {/* IMAGE */}

            <div
              className="
                relative
                z-10

                h-[360px]

                overflow-hidden
                rounded-2xl
                bg-[#153538]

                shadow-[0_20px_45px_rgba(22,58,55,0.12)]

                sm:h-[440px]

                lg:h-[430px]
              "
            >
              <motion.img
                initial={{ scale: 1.08 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1300&q=90"
                alt="Financial planning and analysis"
                className="
                  h-full
                  w-full
                  object-cover
                "
              />

              {/* IMAGE OVERLAY */}

              <div
                className="
                  absolute
                  inset-0

                  bg-gradient-to-t
                  from-[#09292c]/75
                  via-[#123c3e]/15
                  to-transparent
                "
              />

              {/* TOP LABEL */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: -15,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.45,
                  duration: 0.6,
                }}
                className="
                  absolute
                  left-5
                  top-5

                  sm:left-6
                  sm:top-6
                "
              >
                <div
                  className="
                    rounded-lg
                    border
                    border-white/15

                    bg-[#102e30]/65

                    px-3
                    py-2

                    backdrop-blur-md
                  "
                >
                  <p
                    className="
                      text-[8px]
                      uppercase
                      tracking-[1.7px]
                      text-white/50
                    "
                  >
                    Financial Advisory
                  </p>

                  <p
                    className="
                      mt-0.5
                      text-[11px]
                      font-medium
                      text-white
                    "
                  >
                    Clear • Practical • Reliable
                  </p>
                </div>
              </motion.div>

              {/* CENTER ICON */}

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.75,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.5,
                  duration: 0.65,
                }}
                className="
                  absolute
                  left-1/2
                  top-1/2

                  flex
                  h-[70px]
                  w-[70px]

                  -translate-x-1/2
                  -translate-y-1/2

                  items-center
                  justify-center

                  rounded-full

                  border
                  border-white/20

                  bg-[#102f32]/60

                  backdrop-blur-sm
                "
              >
                <TrendingUp
                  size={27}
                  strokeWidth={1.3}
                  className="text-[#9cc28a]"
                />
              </motion.div>

              {/* BOTTOM CONTENT */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.6,
                  duration: 0.7,
                }}
                className="
                  absolute
                  bottom-5
                  left-5
                  right-5

                  sm:bottom-7
                  sm:left-7
                  sm:right-7
                "
              >
                <p
                  className="
                    text-[9px]
                    uppercase
                    tracking-[1.8px]
                    text-[#a8c797]
                  "
                >
                  Better decisions begin with clarity.
                </p>

                <div className="mt-2.5 h-px w-full bg-white/15" />

                <div
                  className="
                    mt-2.5
                    flex
                    items-center
                    justify-between
                  "
                >
                  <span
                    className="
                      text-[11px]
                      text-white/65
                    "
                  >
                    K S &amp; Company
                  </span>

                  <ArrowUpRight
                    size={17}
                    strokeWidth={1.5}
                    className="text-white/70"
                  />
                </div>
              </motion.div>
            </div>

            {/* FLOATING INFO */}

            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.7,
                duration: 0.6,
              }}
              className="
                absolute
                -bottom-4
                left-5
                z-20

                rounded-xl

                border
                border-[#dce7e1]

                bg-white

                px-4
                py-3

                shadow-[0_12px_30px_rgba(20,55,55,0.10)]

                sm:left-7
              "
            >
              <p
                className="
                  text-[8px]
                  uppercase
                  tracking-[1.5px]
                  text-[#899294]
                "
              >
                Our Focus
              </p>

              <p
                className="
                  mt-1
                  text-[11px]
                  font-semibold
                  text-[#283638]
                "
              >
                Growth • Compliance • Strategy
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* BOTTOM BORDER */}

      <div className="absolute bottom-0 left-0 h-px w-full bg-[#dce5e0]" />
    </section>
  );
};

export default FinancialManagement;