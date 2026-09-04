import React from "react";
import { useNavigate } from "react-router-dom";

import {
  ChartNoAxesCombined,
  CircleDollarSign,
  BriefcaseBusiness,
} from "lucide-react";

import { motion } from "framer-motion";

/* =========================================================
   FEATURE CARDS DATA
========================================================= */

const cards = [
  {
    number: "01",
    title: "Tax Advisor",
    description:
      "Get expert guidance on tax planning, compliance, filing and strategies to help you manage your tax responsibilities effectively.",
    icon: ChartNoAxesCombined,
    type: "dark",
    animation: "left",
  },

  {
    number: "02",
    title: "Insurance Advisor",
    description:
      "Receive professional advice to understand, evaluate and choose suitable insurance solutions that protect you and your future.",
    icon: CircleDollarSign,
    type: "featured",
    animation: "bottom",
  },

  {
    number: "03",
    title: "Finance Advisor",
    description:
      "Make smarter financial decisions with expert guidance on financial planning, investments, business finances and long-term growth.",
    icon: BriefcaseBusiness,
    type: "light",
    animation: "right",
  },
];

/* =========================================================
   CARD ANIMATIONS
========================================================= */

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

/* =========================================================
   ICON ANIMATION
========================================================= */

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

/* =========================================================
   CONTENT ANIMATION
========================================================= */

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

/* =========================================================
   FEATURE CARDS
========================================================= */

const FeatureCards = () => {
  const navigate = useNavigate();

  const handleReadMore = () => {
    navigate("/ceo-message");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section
      className="
        relative
        z-30

        /* =========================================
           HERO OVERLAP
        ========================================= */

        -mt-10
        pb-28

        sm:-mt-16
        sm:pb-32

        lg:-mt-20
        lg:pb-36
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1400px]
          px-5
          sm:px-8
          lg:px-10
        "
      >
        <div
          className="
            grid
            grid-cols-1
            items-stretch
            md:grid-cols-3
          "
        >
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
                  flex
                  min-h-[350px]
                  flex-col
                  items-center
                  justify-center
                  overflow-hidden
                  px-7
                  text-center
                  transition-all
                  duration-500

                  sm:min-h-[370px]
                  sm:px-9

                  lg:min-h-[390px]
                  lg:px-10

                  ${
                    /* =================================================
                       TAX CARD
                    ================================================= */

                    card.type === "dark"
                      ? `
                        bg-[#20252b]
                        text-white
                      `

                    /* =================================================
                       INSURANCE CARD
                       HERO BACKGROUND STYLE
                    ================================================= */

                      : card.type === "featured"
                      ? `
                        z-20

                        bg-[#102b29]
                        text-white

                        border
                        border-[#d8bb72]/30

                        shadow-[0_25px_70px_rgba(0,0,0,0.35)]

                        md:-my-7

                        before:absolute
                        before:inset-0
                        before:pointer-events-none
                        before:bg-gradient-to-br
                        before:from-[#d8bb72]/10
                        before:via-transparent
                        before:to-[#020b0a]/25

                        after:absolute
                        after:left-[12%]
                        after:right-[12%]
                        after:top-0
                        after:h-px
                        after:bg-gradient-to-r
                        after:from-transparent
                        after:via-[#e5ca82]/80
                        after:to-transparent
                      `

                    /* =================================================
                       FINANCE CARD
                    ================================================= */

                      : `
                        bg-[#f8faf9]
                        text-[#20252b]
                      `
                  }
                `}
              >

                {/* =================================================
                    GLOSSY EFFECT — MIDDLE CARD
                ================================================= */}

                {card.type === "featured" && (
                  <>
                    {/* Top Glow */}
                    <div className="pointer-events-none absolute -top-20 left-1/2 h-40 w-72 -translate-x-1/2 rounded-full bg-[#d8bb72]/10 blur-3xl" />

                    {/* Bottom Glow */}
                    <div className="pointer-events-none absolute -bottom-24 -left-16 h-48 w-48 rounded-full bg-[#d8bb72]/7 blur-3xl" />

                    {/* Gloss Reflection */}
                    <div className="pointer-events-none absolute left-[15%] top-[7%] h-[25%] w-[70%] rotate-[-20deg] rounded-full bg-white/[0.045] blur-xl" />

                    {/* Golden Corner Light */}
                    <div className="pointer-events-none absolute right-0 top-0 h-28 w-28 bg-gradient-to-bl from-[#d8bb72]/10 to-transparent" />

                    <div className="pointer-events-none absolute bottom-0 left-0 h-28 w-28 bg-gradient-to-tr from-[#d8bb72]/10 to-transparent" />
                  </>
                )}

                {/* =================================================
                    BACKGROUND NUMBER
                ================================================= */}

                <motion.span
                  initial={{
                    opacity: 0,
                    scale: 0.8,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.15 + 0.3,
                  }}
                  className={`
                    pointer-events-none
                    absolute
                    -bottom-8
                    right-2
                    select-none
                    text-[150px]
                    font-bold
                    leading-none

                    sm:text-[170px]

                    lg:text-[190px]

                    ${
                      card.type === "light"
                        ? "text-[#1e5260]/[0.045]"
                        : "text-white/[0.045]"
                    }
                  `}
                >
                  {card.number}
                </motion.span>

                {/* =================================================
                    ICON
                ================================================= */}

                <motion.div
                  variants={iconVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{
                    once: true,
                  }}
                  whileHover={{
                    scale: 1.12,
                    rotate: 5,
                  }}
                  className={`
                    relative
                    z-10
                    mb-6
                    flex
                    h-20
                    w-20
                    items-center
                    justify-center
                    transition-transform

                    ${
                      card.type === "dark"
                        ? "text-[#58a5a5]"

                        : card.type === "featured"
                        ? `
                          text-[#d8bb72]
                          drop-shadow-[0_0_14px_rgba(216,187,114,0.3)]
                        `

                        : "text-[#286577]"
                    }
                  `}
                >
                  <Icon
                    size={66}
                    strokeWidth={1.25}
                  />
                </motion.div>

                {/* =================================================
                    TITLE
                ================================================= */}

                <motion.h3
                  variants={contentVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: 0.15,
                  }}
                  className={`
                    relative
                    z-10
                    text-2xl
                    font-semibold
                    tracking-tight

                    sm:text-[27px]

                    ${
                      card.type === "light"
                        ? "text-[#20252b]"
                        : "text-white"
                    }
                  `}
                >
                  {card.title}
                </motion.h3>

                {/* =================================================
                    GOLD ACCENT FOR MIDDLE CARD
                ================================================= */}

                {card.type === "featured" && (
                  <div className="relative z-10 mt-3 flex items-center gap-2">
                    <span className="h-px w-7 bg-gradient-to-r from-transparent to-[#d8bb72]/70" />

                    <span className="h-1 w-1 rounded-full bg-[#d8bb72] shadow-[0_0_8px_rgba(216,187,114,0.7)]" />

                    <span className="h-px w-7 bg-gradient-to-l from-transparent to-[#d8bb72]/70" />
                  </div>
                )}

                {/* =================================================
                    DESCRIPTION
                ================================================= */}

                <motion.p
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
                    delay: 0.3,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`
                    relative
                    z-10
                    mt-5
                    max-w-[390px]
                    text-sm
                    leading-7

                    sm:text-[15px]

                    ${
                      card.type === "light"
                        ? "text-[#4d555a]"
                        : "text-white/70"
                    }
                  `}
                >
                  {card.description}
                </motion.p>

                {/* =================================================
                    BOTTOM ACCENT
                ================================================= */}

                <motion.div
                  initial={{
                    scaleX: 0,
                  }}
                  whileInView={{
                    scaleX: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
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
                        : card.type === "featured"
                        ? "bg-gradient-to-r from-transparent via-[#d8bb72] to-transparent"
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