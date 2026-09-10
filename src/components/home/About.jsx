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

// Local About image
import aboutImage from "../../assets/about.png";

/* =========================================================
   BENEFITS DATA
========================================================= */

const benefits = [
  {
    icon: ShieldCheck,
    title: "Professional Expertise",
    text: "Reliable financial guidance backed by professional expertise.",
    color: "green",
  },
  {
    icon: Users,
    title: "Client Focused",
    text: "Solutions designed around your financial and business goals.",
    color: "blue",
  },
  {
    icon: CheckCircle2,
    title: "Confidential & Reliable",
    text: "Your financial information is handled with care and confidentiality.",
    color: "green",
  },
  {
    icon: CheckCircle2,
    title: "Strategic Advisory",
    text: "Practical insights to help you make better financial decisions.",
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
              Helping individuals and businesses make confident financial
              decisions through reliable advice, practical solutions and
              professional support.
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
              LEFT IMAGE SECTION
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
            {/* ===============================================
                DECORATIVE BACK FRAME
            ================================================ */}

            <div
              className="
                absolute
                -bottom-3
                -left-3
                h-full
                w-full
                rounded-[22px]
                border
                border-[#326844]/20
              "
            />

            {/* ===============================================
                MAIN IMAGE CARD
            ================================================ */}

            <div
              className="
                group
                relative
                z-10

                h-full
                overflow-hidden
                rounded-[20px]

                bg-[#173538]

                shadow-[0_25px_55px_rgba(22,58,55,0.14)]

                transition-all
                duration-700

                hover:shadow-[0_30px_70px_rgba(22,58,55,0.18)]
              "
            >
              {/* IMAGE */}

              <motion.img
                initial={{ scale: 1.05 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                src={aboutImage}
                alt="Indian professionals working together in a modern accounting office"
                loading="lazy"
                className="
                  h-full
                  w-full
                  object-cover

                  transition-transform
                  duration-1000
                  ease-out

                  group-hover:scale-[1.025]
                "
              />

              {/* =============================================
                  VERY SUBTLE IMAGE VIGNETTE

                  This does NOT cover the artwork text.
              ============================================== */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0

                  bg-gradient-to-t
                  from-[#0b211f]/15
                  via-transparent
                  to-transparent

                  opacity-70
                "
              />

              {/* =============================================
                  SMALL FLOATING LABEL
              ============================================== */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: -10,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: 0.45,
                  duration: 0.5,
                }}
                className="
                  absolute
                  bottom-5
                  left-5
                  z-20

                  hidden

                  rounded-full
                  border
                  border-white/20

                  bg-[#0b211f]/75

                  px-4
                  py-2

                  shadow-lg
                  backdrop-blur-md

                  sm:block
                "
              >
                <div className="flex items-center gap-2">
                  <span
                    className="
                      h-1.5
                      w-1.5
                      rounded-full
                      bg-[#a8c797]
                    "
                  />

                  <span
                    className="
                      text-[8px]
                      font-semibold
                      uppercase
                      tracking-[1.8px]
                      text-white/80
                    "
                  >
                    Professional Financial Support
                  </span>
                </div>
              </motion.div>

              {/* =============================================
                  IMAGE BORDER HIGHLIGHT
              ============================================== */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  rounded-[20px]
                  border
                  border-white/10
                "
              />
            </div>

            {/* ===============================================
                FLOATING ACCENT
            ================================================ */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.7,
                y: 10,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.55,
                duration: 0.6,
                type: "spring",
                stiffness: 170,
              }}
              className="
                absolute
                -bottom-5
                right-6
                z-30

                flex
                items-center
                gap-3

                rounded-full

                border
                border-[#f7f9f7]

                bg-[#326844]

                px-4
                py-2.5

                shadow-[0_12px_30px_rgba(50,104,68,0.22)]
              "
            >
              <div
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-full
                  bg-white/15
                "
              >
                <CheckCircle2
                  size={16}
                  strokeWidth={1.8}
                  className="text-white"
                />
              </div>

              <div className="pr-1">
                <p
                  className="
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[1.5px]
                    text-white
                  "
                >
                  Trusted
                </p>

                <p
                  className="
                    text-[7px]
                    uppercase
                    tracking-[1px]
                    text-white/60
                  "
                >
                  Professional Advisory
                </p>
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
                KS & Company provides professional support across taxation,
                accounting, registrations, compliance, insurance and financial
                services. We work with individuals, professionals and
                businesses to simplify financial and regulatory requirements.
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
                Our approach is focused on clear communication, practical
                solutions and dependable professional assistance. From routine
                compliance to important financial decisions, our goal is to
                make the process easier and more understandable for our
                clients.
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
                      delay: 0.3 + index * 0.08,
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