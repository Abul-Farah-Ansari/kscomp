import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import serviceDetailImage from "../../assets/service-detail.jpg";

const ServiceDetailHero = ({ data }) => {
  if (!data) return null;

  return (
    <section
      className="
        relative
        h-[100svh]
        min-h-[620px]
        w-full
        overflow-hidden
        bg-[#0b211f]
        text-white
        pt-[88px]
        box-border
      "
    >
      {/* =========================================================
          FULL HERO IMAGE
      ========================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 1.04,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute inset-0"
      >
        <img
          src={serviceDetailImage}
          alt={`${data.category} - K S & Company`}
          className="
            h-full
            w-full
            object-cover
            object-center
          "
        />
      </motion.div>

      {/* =========================================================
          DARK GREEN IMAGE OVERLAY
      ========================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[#0b211f]/55
        "
      />

      {/* =========================================================
          LEFT GRADIENT
      ========================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-r
          from-[#0b211f]/90
          via-[#0b211f]/55
          to-[#0b211f]/10
        "
      />

      {/* =========================================================
          BOTTOM GRADIENT
      ========================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          h-[42%]
          bg-gradient-to-t
          from-[#0b211f]/85
          via-[#0b211f]/30
          to-transparent
        "
      />

      {/* =========================================================
          DECORATIVE CIRCLES
      ========================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="
            absolute
            -right-[180px]
            -top-[180px]
            h-[600px]
            w-[600px]
            rounded-full
            border
            border-white/[0.07]
          "
        />

        <div
          className="
            absolute
            -right-[120px]
            -top-[120px]
            h-[470px]
            w-[470px]
            rounded-full
            border
            border-[#c5a46d]/20
          "
        />

        <div
          className="
            absolute
            right-[16%]
            top-[22%]
            h-2
            w-2
            rounded-full
            bg-[#c5a46d]
            shadow-[0_0_18px_rgba(197,164,109,0.8)]
          "
        />
      </div>

      {/* =========================================================
          MAIN CONTAINER
      ========================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          h-full
          min-h-0
          w-full
          max-w-[1500px]
          flex-col
          px-5
          sm:px-8
          lg:px-12
          xl:px-16
        "
      >
        {/* =======================================================
            HERO CONTENT AREA
        ======================================================== */}

        <div
          className="
            relative
            flex
            min-h-0
            flex-1
            items-center
            py-5
            sm:py-7
            lg:py-8
          "
        >
          {/* =====================================================
              DARK GREEN OVERLAPPING CARD
          ====================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -70,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.9,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              z-20
              w-full
              max-w-[720px]
              lg:w-[58%]
              xl:w-[55%]
            "
          >
            <div
              className="
                relative
                flex
                h-[430px]
                flex-col
                justify-center
                overflow-hidden
                bg-[#0b211f]/[0.97]
                px-6
                py-7
                shadow-[0_30px_80px_rgba(0,0,0,0.42)]
                sm:h-[455px]
                sm:px-9
                sm:py-8
                md:h-[470px]
                md:px-11
                lg:h-[485px]
                lg:px-12
                lg:py-9
                xl:h-[500px]
                xl:px-14
              "
            >
              {/* =================================================
                  INNER GOLD BORDER
              ================================================== */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-3
                  border
                  border-[#c5a46d]/20
                  sm:inset-4
                "
              />

              {/* =================================================
                  DECORATIVE CIRCLES
              ================================================== */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-[160px]
                  -top-[160px]
                  h-[380px]
                  w-[380px]
                  rounded-full
                  border
                  border-[#c5a46d]/10
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-[110px]
                  -top-[110px]
                  h-[280px]
                  w-[280px]
                  rounded-full
                  border
                  border-white/[0.04]
                "
              />

              {/* =================================================
                  CONTENT
              ================================================== */}

              <div
                className="
                  relative
                  z-10
                  flex
                  max-h-full
                  flex-col
                  justify-center
                "
              >
                {/* =================================================
                    NUMBER + LABEL
                ================================================== */}

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.65,
                    delay: 0.4,
                  }}
                  className="
                    mb-4
                    flex
                    shrink-0
                    items-center
                    gap-4
                    sm:mb-5
                  "
                >
                  <span
                    className="
                      font-serif
                      text-2xl
                      font-medium
                      leading-none
                      text-[#c5a46d]
                      sm:text-3xl
                    "
                  >
                    {data.number}
                  </span>

                  <span className="h-px w-8 bg-[#c5a46d]/60 sm:w-12" />

                  <span
                    className="
                      text-[7px]
                      font-semibold
                      uppercase
                      tracking-[2.2px]
                      text-white/45
                      sm:text-[8px]
                    "
                  >
                    Professional Services
                  </span>
                </motion.div>

                {/* =================================================
                    EYEBROW
                ================================================== */}

                <motion.p
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.65,
                    delay: 0.47,
                  }}
                  className="
                    mb-3
                    shrink-0
                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[3.5px]
                    text-[#c5a46d]
                    sm:mb-4
                    sm:text-[9px]
                    sm:tracking-[4px]
                  "
                >
                  {data.eyebrow}
                </motion.p>

                {/* =================================================
                    MAIN TITLE
                ================================================== */}

                <div
                  className="
                    max-h-[190px]
                    overflow-hidden
                    sm:max-h-[215px]
                  "
                >
                  <motion.h1
                    initial={{
                      opacity: 0,
                      y: 55,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.85,
                      delay: 0.54,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="
                      max-w-[670px]
                      font-serif
                      text-[38px]
                      font-medium
                      leading-[0.94]
                      tracking-[-1.7px]
                      text-white
                      sm:text-[48px]
                      sm:tracking-[-2px]
                      md:text-[56px]
                      lg:text-[clamp(45px,4.4vw,70px)]
                      xl:text-[76px]
                    "
                  >
                    {data.title}

                    <span className="block text-[#c5a46d]">
                      {data.titleAccent}
                    </span>
                  </motion.h1>
                </div>

                {/* =================================================
                    DESCRIPTION
                ================================================== */}

                <motion.p
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.75,
                    delay: 0.68,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    mt-5
                    max-w-[530px]
                    shrink-0
                    text-[11px]
                    leading-5
                    text-white/55
                    sm:mt-6
                    sm:text-[13px]
                    sm:leading-6
                    lg:text-[14px]
                    lg:leading-6
                  "
                >
                  {data.description}
                </motion.p>

                {/* =================================================
                    CTA
                ================================================== */}

                <motion.a
                  href="#service-overview"
                  initial={{
                    opacity: 0,
                    y: 18,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.65,
                    delay: 0.8,
                  }}
                  whileHover={{
                    y: -3,
                  }}
                  className="
                    group
                    mt-6
                    inline-flex
                    w-fit
                    shrink-0
                    items-center
                    gap-3
                    border
                    border-[#c5a46d]
                    bg-[#c5a46d]
                    px-5
                    py-3
                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[1.7px]
                    text-[#0b211f]
                    transition-all
                    duration-300
                    hover:bg-[#d5b97f]
                    sm:mt-7
                    sm:px-6
                    sm:py-3.5
                    sm:text-[9px]
                  "
                >
                  Explore Service

                  <span
                    className="
                      flex
                      h-6
                      w-6
                      items-center
                      justify-center
                      rounded-full
                      bg-[#0b211f]
                      text-[#c5a46d]
                      transition-transform
                      duration-300
                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                    "
                  >
                    <ArrowUpRight
                      size={13}
                      strokeWidth={1.8}
                    />
                  </span>
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* =====================================================
              FLOATING SERVICE NUMBER
          ====================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.7,
              delay: 0.75,
            }}
            className="
              absolute
              bottom-[7%]
              right-[5%]
              z-30
              hidden
              h-[95px]
              w-[95px]
              items-center
              justify-center
              rounded-full
              border
              border-[#c5a46d]/50
              bg-[#0b211f]/65
              backdrop-blur-md
              lg:flex
              xl:h-[105px]
              xl:w-[105px]
            "
          >
            <div className="text-center">
              <span
                className="
                  block
                  font-serif
                  text-2xl
                  leading-none
                  text-[#c5a46d]
                  xl:text-3xl
                "
              >
                {data.number}
              </span>

              <span
                className="
                  mt-2
                  block
                  text-[6px]
                  font-semibold
                  uppercase
                  tracking-[1.8px]
                  text-white/50
                "
              >
                Service
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailHero;