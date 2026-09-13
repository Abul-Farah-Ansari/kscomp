import React from "react";
import { motion } from "framer-motion";

import feature1 from "../../assets/1.png";
import feature2 from "../../assets/2.png";
import feature3 from "../../assets/3.png";

/* =========================================================
   FEATURE CARDS DATA
========================================================= */

const cards = [
  {
    number: "01",
    image: feature1,
    type: "side",
    animation: "left",
    shineDelay: 0,
  },

  {
    number: "02",
    image: feature2,
    type: "featured",
    animation: "bottom",
    shineDelay: 1,
  },

  {
    number: "03",
    image: feature3,
    type: "side",
    animation: "right",
    shineDelay: 2,
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
   IMAGE ANIMATION
========================================================= */

const imageVariants = {
  hidden: {
    opacity: 0,
    scale: 0.96,
  },

  visible: {
    opacity: 1,
    scale: 1,

    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* =========================================================
   FEATURE CARDS
========================================================= */

const FeatureCards = () => {
  return (
    <section
      className="
        relative
        z-30

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
          {cards.map((card) => (
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
                group
                relative
                flex
                min-h-[350px]
                w-full
                items-center
                justify-center
                overflow-hidden

                transition-all
                duration-500

                sm:min-h-[370px]

                lg:min-h-[390px]

                ${
                  card.type === "featured"
                    ? `
                      z-20
                      bg-[#0b211f]

                      border
                      border-[#d8bb72]/70

                      shadow-[0_25px_70px_rgba(0,0,0,0.45)]

                      md:-my-7
                    `
                    : `
                      bg-[#f7f8f7]

                      border
                      border-white

                      shadow-[0_18px_50px_rgba(0,0,0,0.16)]
                    `
                }
              `}
            >
              {/* =================================================
                  OUTER GOLD BORDER — SIDE CARDS
              ================================================= */}

              {card.type === "side" && (
                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    z-20
                    border
                    border-[#c7a45d]/65
                  "
                />
              )}

              {/* =================================================
                  INNER WHITE BORDER — SIDE CARDS
              ================================================= */}

              {card.type === "side" && (
                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-[5px]
                    z-20
                    border
                    border-white/80

                    sm:inset-[6px]

                    lg:inset-[7px]
                  "
                />
              )}

              {/* =================================================
                  INNER GOLD FRAME — MIDDLE CARD
              ================================================= */}

              {card.type === "featured" && (
                <>
                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-[5px]
                      z-20
                      border
                      border-[#d8bb72]/35

                      sm:inset-[6px]

                      lg:inset-[7px]
                    "
                  />

                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-[10px]
                      z-20
                      border
                      border-[#d8bb72]/10

                      sm:inset-[12px]
                    "
                  />
                </>
              )}

              {/* =================================================
                  PNG IMAGE
              ================================================= */}

              <motion.img
                src={card.image}
                alt=""
                aria-hidden="true"
                variants={imageVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.25,
                }}
                className={`
                  relative
                  z-[1]
                  h-full
                  w-full
                  object-contain

                  transition-transform
                  duration-700
                  ease-out

                  group-hover:scale-[1.025]

                  ${
                    card.type === "featured"
                      ? "p-2 sm:p-2.5 lg:p-3"
                      : "p-2.5 sm:p-3 lg:p-3.5"
                  }
                `}
              />

              {/* =================================================
                  SIDE CARD PREMIUM LIGHT
              ================================================= */}

              {card.type === "side" && (
                <>
                  {/* Top Gold Highlight */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      left-[10%]
                      right-[10%]
                      top-0
                      z-30
                      h-px
                      bg-gradient-to-r
                      from-transparent
                      via-[#d8bb72]
                      to-transparent
                    "
                  />

                  {/* Bottom Gold Highlight */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      bottom-0
                      left-[10%]
                      right-[10%]
                      z-30
                      h-px
                      bg-gradient-to-r
                      from-transparent
                      via-[#d8bb72]/70
                      to-transparent
                    "
                  />

                  {/* Soft Golden Glow */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      -right-20
                      -top-20
                      z-10
                      h-44
                      w-44
                      rounded-full
                      bg-[#d8bb72]/[0.07]
                      blur-3xl
                    "
                  />

                  <div
                    className="
                      pointer-events-none
                      absolute
                      -bottom-20
                      -left-20
                      z-10
                      h-44
                      w-44
                      rounded-full
                      bg-[#d8bb72]/[0.06]
                      blur-3xl
                    "
                  />
                </>
              )}

              {/* =================================================
                  MIDDLE CARD — DARK GREEN + GOLD
              ================================================= */}

              {card.type === "featured" && (
                <>
                  {/* Top Golden Glow */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      -top-24
                      left-1/2
                      z-10
                      h-48
                      w-80
                      -translate-x-1/2
                      rounded-full
                      bg-[#d8bb72]/[0.12]
                      blur-3xl
                    "
                  />

                  {/* Bottom Golden Glow */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      -bottom-28
                      left-1/2
                      z-10
                      h-52
                      w-80
                      -translate-x-1/2
                      rounded-full
                      bg-[#d8bb72]/[0.07]
                      blur-3xl
                    "
                  />

                  {/* Premium Green Gradient */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      z-[2]
                      bg-gradient-to-br
                      from-[#173a35]/30
                      via-transparent
                      to-[#061613]/40
                    "
                  />

                  {/* Gloss Reflection */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      left-[12%]
                      top-[5%]
                      z-20
                      h-[28%]
                      w-[76%]
                      rotate-[-20deg]
                      rounded-full
                      bg-white/[0.045]
                      blur-xl
                    "
                  />

                  {/* Top Gold Line */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      left-[10%]
                      right-[10%]
                      top-0
                      z-30
                      h-px
                      bg-gradient-to-r
                      from-transparent
                      via-[#f0d78f]
                      to-transparent
                    "
                  />

                  {/* Bottom Gold Line */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      bottom-0
                      left-[10%]
                      right-[10%]
                      z-30
                      h-px
                      bg-gradient-to-r
                      from-transparent
                      via-[#d8bb72]
                      to-transparent
                    "
                  />
                </>
              )}

              {/* =================================================
                  SUBTLE IMAGE EDGE BLEND
              ================================================= */}

              <div
                className={`
                  pointer-events-none
                  absolute
                  inset-0
                  z-10

                  ${
                    card.type === "featured"
                      ? "bg-gradient-to-t from-[#061613]/10 via-transparent to-white/[0.025]"
                      : "bg-gradient-to-t from-black/[0.025] via-transparent to-white/[0.08]"
                  }
                `}
              />

              {/* =================================================
                  CONTINUOUS SHINE EFFECT
                  
                  Runs automatically every 3 seconds.
                  Each card has a small delay so the shine
                  travels across the cards sequentially.
              ================================================= */}

              <motion.div
                className="
                  pointer-events-none
                  absolute
                  inset-y-[-20%]
                  left-[-65%]
                  z-40
                  w-[38%]

                  rotate-[18deg]

                  bg-gradient-to-r
                  from-transparent
                  via-white/[0.45]
                  to-transparent

                  blur-[3px]
                "
                animate={{
                  left: ["-65%", "130%"],
                }}
                transition={{
                  duration: 0.85,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatDelay: 2.15,
                  delay: card.shineDelay,
                }}
              />

              {/* =================================================
                  GOLD SHINE — MIDDLE CARD
              ================================================= */}

              {card.type === "featured" && (
                <motion.div
                  className="
                    pointer-events-none
                    absolute
                    inset-y-[-20%]
                    left-[-70%]
                    z-40
                    w-[35%]

                    rotate-[18deg]

                    bg-gradient-to-r
                    from-transparent
                    via-[#f3d995]/[0.42]
                    to-transparent

                    blur-[4px]
                  "
                  animate={{
                    left: ["-70%", "130%"],
                  }}
                  transition={{
                    duration: 0.85,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatDelay: 2.15,
                    delay: card.shineDelay,
                  }}
                />
              )}

              {/* =================================================
                  HOVER PREMIUM LIGHT
              ================================================= */}

              <div
                className={`
                  pointer-events-none
                  absolute
                  inset-0
                  z-30
                  opacity-0
                  transition-opacity
                  duration-500
                  group-hover:opacity-100

                  ${
                    card.type === "featured"
                      ? "bg-gradient-to-br from-[#d8bb72]/[0.05] via-transparent to-white/[0.025]"
                      : "bg-gradient-to-br from-white/[0.16] via-transparent to-[#d8bb72]/[0.04]"
                  }
                `}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;