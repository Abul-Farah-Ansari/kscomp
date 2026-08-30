import React from "react";
import {
  ChartNoAxesCombined,
  CircleDollarSign,
  BriefcaseBusiness,
} from "lucide-react";
import { motion } from "framer-motion";

const cards = [
  {
    number: "01",
    title: "Financial & Business Advisory",
    description:
      "Make informed business decisions with clear financial insights, performance analysis, strategic planning and professional advisory support.",
    icon: ChartNoAxesCombined,
    type: "dark",
    animation: "left",
  },

  {
    number: "02",
    title: "Tax Planning & Compliance",
    description:
      "Optimize your tax position while staying compliant with evolving regulations through accurate planning, filing and expert guidance.",
    icon: CircleDollarSign,
    type: "featured",
    animation: "bottom",
  },

  {
    number: "03",
    title: "Audit & Assurance",
    description:
      "Build confidence in your financial reporting with thorough audits, reliable assurance and practical recommendations for stronger compliance.",
    icon: BriefcaseBusiness,
    type: "light",
    animation: "right",
  },
];

const cardVariants = {
  left: {
    hidden: {
      opacity: 0,
      x: -100,
      rotate: -2,
    },
    visible: {
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  },

  bottom: {
    hidden: {
      opacity: 0,
      y: 100,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.85,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  },

  right: {
    hidden: {
      opacity: 0,
      x: 100,
      rotate: 2,
    },
    visible: {
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  },
};

const iconVariants = {
  hidden: {
    opacity: 0,
    scale: 0.4,
    rotate: -15,
  },

  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.55,
      delay: 0.2,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const contentVariants = {
  hidden: {
    opacity: 0,
    y: 25,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const FeatureCards = () => {
  return (
    <section
      className="
        relative
        z-30
        -mt-20
        sm:-mt-24
        lg:-mt-28
        pb-28
        sm:pb-32
        lg:pb-36
      "
    >
      <div className="w-full max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-10">

        <div className="grid grid-cols-1 md:grid-cols-3 items-stretch">

          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.number}
                variants={cardVariants[card.animation]}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.25,
                }}
                whileHover={{
                  y: -10,
                  transition: {
                    duration: 0.3,
                    ease: "easeOut",
                  },
                }}
                className={`
                  relative
                  overflow-hidden
                  min-h-[350px]
                  sm:min-h-[370px]
                  lg:min-h-[390px]
                  flex
                  flex-col
                  items-center
                  justify-center
                  text-center
                  px-7
                  sm:px-9
                  lg:px-10
                  transition-shadow
                  duration-500

                  ${
                    card.type === "dark"
                      ? "bg-[#20252b] text-white"
                      : card.type === "featured"
                      ? "bg-gradient-to-br from-[#285b68] via-[#285f63] to-[#326844] text-white md:-my-7 z-20 shadow-[0_20px_50px_rgba(20,50,55,0.30)]"
                      : "bg-[#f8faf9] text-[#20252b]"
                  }
                `}
              >

                {/* Background number */}

                <motion.span
                  initial={{
                    opacity: 0,
                    scale: 0.8,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.15 + 0.3,
                  }}
                  className={`
                    absolute
                    -bottom-8
                    right-2
                    text-[150px]
                    sm:text-[170px]
                    lg:text-[190px]
                    font-bold
                    leading-none
                    pointer-events-none
                    select-none

                    ${
                      card.type === "light"
                        ? "text-[#1e5260]/[0.045]"
                        : "text-white/[0.045]"
                    }
                  `}
                >
                  {card.number}
                </motion.span>


                {/* ICON */}

                <motion.div
                  variants={iconVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.12,
                    rotate: 5,
                  }}
                  className={`
                    relative
                    z-10
                    w-20
                    h-20
                    flex
                    items-center
                    justify-center
                    mb-6
                    transition-transform

                    ${
                      card.type === "dark"
                        ? "text-[#58a5a5]"
                        : card.type === "featured"
                        ? "text-white"
                        : "text-[#286577]"
                    }
                  `}
                >
                  <Icon
                    size={66}
                    strokeWidth={1.25}
                  />
                </motion.div>


                {/* TITLE */}

                <motion.h3
                  variants={contentVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.15,
                  }}
                  className={`
                    relative
                    z-10
                    text-2xl
                    sm:text-[27px]
                    font-semibold
                    tracking-tight

                    ${
                      card.type === "light"
                        ? "text-[#20252b]"
                        : "text-white"
                    }
                  `}
                >
                  {card.title}
                </motion.h3>


                {/* DESCRIPTION */}

                <motion.p
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
                    duration: 0.6,
                    delay: 0.3,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`
                    relative
                    z-10
                    mt-5
                    max-w-[390px]
                    text-sm
                    sm:text-[15px]
                    leading-7

                    ${
                      card.type === "light"
                        ? "text-[#4d555a]"
                        : "text-white/70"
                    }
                  `}
                >
                  {card.description}
                </motion.p>


                {/* READ MORE */}

                <motion.button
                  type="button"
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.45,
                  }}
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  className={`
                    relative
                    z-10
                    mt-6
                    text-sm
                    sm:text-[15px]
                    font-semibold
                    transition-all
                    duration-300
                    hover:tracking-wide

                    ${
                      card.type === "dark"
                        ? "text-[#65aaa9] hover:text-white"
                        : card.type === "featured"
                        ? "text-white hover:text-[#d8ebe0]"
                        : "text-[#285b68] hover:text-[#326844]"
                    }
                  `}
                >
                  Read More
                </motion.button>


                {/* Hover bottom accent */}

                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.1 + 0.5,
                  }}
                  className={`
                    absolute
                    bottom-0
                    left-0
                    h-[3px]
                    w-full
                    origin-left

                    ${
                      card.type === "light"
                        ? "bg-gradient-to-r from-[#285b68] to-[#326844]"
                        : "bg-white/40"
                    }
                  `}
                />

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default FeatureCards;