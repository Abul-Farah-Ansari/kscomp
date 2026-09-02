import React from "react";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ShieldCheck,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

/* =========================================================
   BENEFITS DATA
========================================================= */

const benefits = [
  {
    icon: ShieldCheck,
    title: "Professional Expertise",
    text: "Reliable financial guidance backed by expertise.",
    color: "green",
  },
  {
    icon: Users,
    title: "Client Focused",
    text: "Solutions built around your financial goals.",
    color: "blue",
  },
  {
    icon: CheckCircle2,
    title: "Confidential & Reliable",
    text: "Your information is handled with care.",
    color: "green",
  },
  {
    icon: CheckCircle2,
    title: "Strategic Advisory",
    text: "Clear insights for better business decisions.",
    color: "blue",
  },
];

/* =========================================================
   ABOUT COMPONENT
========================================================= */

const About = () => {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-[#f7f9f7]

        py-16
        sm:py-20

        lg:min-h-screen
        lg:py-0
      "
    >
      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="
            absolute
            -right-40
            top-1/4
            h-[450px]
            w-[450px]
            rounded-full
            bg-[#326844]/[0.025]
            blur-3xl
          "
        />

        <div
          className="
            absolute
            -left-32
            bottom-0
            h-[300px]
            w-[300px]
            rounded-full
            bg-[#285b68]/[0.025]
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
          flex
          w-full
          max-w-[1380px]
          flex-col

          px-5
          sm:px-8

          lg:min-h-screen
          lg:justify-center
          lg:px-12
          lg:py-12
        "
      >
        {/* ===================================================
            HEADER
        ==================================================== */}

        <div
          className="
            grid
            grid-cols-1
            items-end
            gap-6

            lg:grid-cols-[1fr_290px]
            lg:gap-12
          "
        >
          {/* LEFT HEADER */}

          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
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
                About KS & Company
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.1,
                duration: 0.65,
              }}
              className="
                text-[36px]
                font-semibold
                leading-[1.05]
                tracking-[-1px]
                text-[#1e2d30]

                sm:text-[45px]

                lg:text-[clamp(40px,3.2vw,54px)]
              "
            >
              Professional advice.

              <span className="block text-[#285b68]">
                Personal understanding.
              </span>
            </motion.h2>
          </div>

          {/* RIGHT HEADER */}

          <motion.div
            initial={{ opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.2,
              duration: 0.6,
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
              Helping individuals and businesses make confident
              financial decisions through reliable advice and
              practical solutions.
            </p>
          </motion.div>
        </div>

        {/* ===================================================
            MAIN CONTENT
        ==================================================== */}

        <div
          className="
            mt-10
            grid
            grid-cols-1
            gap-10

            lg:grid-cols-[0.88fr_1.12fr]
            lg:items-center
            lg:gap-14
          "
        >
          {/* =================================================
              LEFT IMAGE
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -35,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
            }}
            className="
              relative
              h-[350px]

              sm:h-[420px]

              lg:h-[480px]
            "
          >
            {/* Image Frame */}

            <div
              className="
                absolute
                -bottom-3
                -left-3
                h-full
                w-full
                rounded-2xl
                border
                border-[#326844]/20
              "
            />

            {/* Image */}

            <div
              className="
                relative
                z-10

                h-full
                overflow-hidden
                rounded-2xl

                bg-[#173538]

                shadow-[0_20px_45px_rgba(22,58,55,0.12)]
              "
            >
              <motion.img
                initial={{ scale: 1.06 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.1,
                }}
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1300&q=90"
                alt="Professional business meeting"
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
                  from-[#0b292c]/75
                  via-transparent
                  to-[#0b292c]/10
                "
              />

              {/* COMPANY BADGE */}

              <div
                className="
                  absolute
                  left-5
                  top-5

                  lg:left-6
                  lg:top-6
                "
              >
                <div
                  className="
                    flex
                    items-center
                    gap-3

                    rounded-xl

                    border
                    border-white/15

                    bg-[#102e30]/70

                    px-3
                    py-2

                    backdrop-blur-md
                  "
                >
                  <div
                    className="
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-lg
                      bg-white
                    "
                  >
                    <span
                      className="
                        text-[10px]
                        font-bold
                        text-[#326844]
                      "
                    >
                      KS
                    </span>
                  </div>

                  <div>
                    <p
                      className="
                        text-[8px]
                        uppercase
                        tracking-[1.5px]
                        text-white/50
                      "
                    >
                      KS & Company
                    </p>

                    <p
                      className="
                        text-[10px]
                        font-medium
                        text-white
                      "
                    >
                      Chartered Accountants
                    </p>
                  </div>
                </div>
              </div>

              {/* BOTTOM IMAGE CONTENT */}

              <div
                className="
                  absolute
                  bottom-5
                  left-6
                  right-6

                  lg:bottom-6
                  lg:left-7
                  lg:right-7
                "
              >
                <p
                  className="
                    text-[9px]
                    font-medium
                    uppercase
                    tracking-[1.8px]
                    text-[#a8c797]
                  "
                >
                  Trusted • Professional • Reliable
                </p>

                <div className="mt-2 h-px w-full bg-white/15" />

                <div
                  className="
                    mt-2
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
                    Your financial goals, our priority.
                  </span>

                  <ArrowUpRight
                    size={17}
                    strokeWidth={1.5}
                    className="text-white/70"
                  />
                </div>
              </div>
            </div>

            {/* CA BADGE */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.7,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{ once: true }}
              transition={{
                delay: 0.4,
                type: "spring",
                stiffness: 180,
              }}
              className="
                absolute
                -bottom-4
                right-5
                z-20

                flex
                h-[68px]
                w-[68px]

                items-center
                justify-center

                rounded-full

                border-[4px]
                border-[#f7f9f7]

                bg-[#326844]

                shadow-lg
              "
            >
              <div className="text-center">
                <span
                  className="
                    block
                    text-[20px]
                    font-semibold
                    leading-none
                    text-white
                  "
                >
                  CA
                </span>

                <span
                  className="
                    mt-1
                    block
                    text-[6px]
                    uppercase
                    tracking-[1px]
                    text-white/70
                  "
                >
                  Experts
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* =================================================
              RIGHT CONTENT
          ================================================== */}

          <div>
            {/* SMALL LABEL */}

            <motion.div
              initial={{ opacity: 0, x: 15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2"
            >
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
                Who We Are
              </span>
            </motion.div>

            {/* MAIN HEADING */}

            <motion.h3
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.1,
                duration: 0.6,
              }}
              className="
                mt-3

                text-[30px]
                font-semibold
                leading-[1.1]
                tracking-[-0.6px]

                text-[#202d30]

                sm:text-[37px]

                lg:text-[clamp(30px,2.5vw,42px)]
              "
            >
              We work with you to make

              <span className="text-[#285b68]">
                {" "}
                financial matters simpler.
              </span>
            </motion.h3>

            {/* DESCRIPTION */}

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.2,
                duration: 0.6,
              }}
              className="
                mt-5
                max-w-[680px]
              "
            >
              <p
                className="
                  text-[13px]
                  leading-6
                  text-[#5e696c]

                  lg:text-[14px]
                  lg:leading-7
                "
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing
                elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
              </p>

              <p
                className="
                  mt-3
                  text-[13px]
                  leading-6
                  text-[#5e696c]

                  lg:text-[14px]
                  lg:leading-7
                "
              >
                Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur.
                We focus on providing clear, practical and dependable
                financial guidance.
              </p>
            </motion.div>

            {/* BENEFITS */}

            <div
              className="
                mt-6
                grid
                grid-cols-1
                gap-3

                sm:grid-cols-2
              "
            >
              {benefits.map((item, index) => {
                const Icon = item.icon;

                const isGreen =
                  item.color === "green";

                return (
                  <motion.div
                    key={item.title}
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
                      delay:
                        0.3 + index * 0.08,
                      duration: 0.45,
                    }}
                    whileHover={{
                      y: -3,
                    }}
                    className="
                      rounded-xl
                      border
                      border-[#e0e8e4]
                      bg-white
                      p-4

                      transition-all
                      duration-300

                      hover:border-[#326844]/25
                      hover:shadow-[0_10px_25px_rgba(25,65,55,0.07)]
                    "
                  >
                    <div
                      className="
                        flex
                        items-start
                        gap-3
                      "
                    >
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
                          strokeWidth={1.8}
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
                            text-[13px]
                            font-semibold
                            text-[#303b3d]
                          "
                        >
                          {item.title}
                        </h4>

                        <p
                          className="
                            mt-1
                            text-[11px]
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
                y: 12,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.65,
                duration: 0.5,
              }}
              className="
                mt-7
                flex
                items-center
                gap-5
              "
            >
              {/* DISCOVER MORE BUTTON */}

              <Link
                to="/about"
                className="
                  group
                  inline-flex
                  items-center
                  gap-2.5

                  rounded-md

                  bg-[#326844]

                  px-6
                  py-3

                  text-[12px]
                  font-semibold
                  text-white

                  shadow-[0_10px_25px_rgba(50,104,68,0.15)]

                  transition-all
                  duration-300

                  hover:-translate-y-0.5
                  hover:bg-[#285b68]
                "
              >
                Discover More

                <ArrowRight
                  size={16}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </Link>

              <span
                className="
                  hidden
                  text-[9px]
                  uppercase
                  tracking-[1.5px]
                  text-[#899294]

                  sm:block
                "
              >
                Trusted Financial Advisory
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;