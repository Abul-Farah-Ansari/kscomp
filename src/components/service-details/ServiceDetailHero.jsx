import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import serviceDetailImage from "../../assets/service-details.png";

/* =========================================================
   SERVICE DETAIL HERO
========================================================= */

const ServiceDetailHero = ({ data }) => {
  if (!data) return null;

  /* =========================================================
     HERO CONTENT
  ========================================================= */

  const heroTitle =
    data.title ||
    data.category ||
    "Professional Services";

  const heroDescription =
    data.description ||
    data.shortDescription ||
    data.overview ||
    "";

  const serviceNumber = String(
    data.number || "01"
  ).padStart(2, "0");

  return (
    <section
      className="
        relative
        flex
        min-h-[100svh]
        w-full
        overflow-hidden

        bg-[#0b211f]
        text-white

        pt-[88px]
      "
    >
      {/* =====================================================
          FULL HERO BACKGROUND
      ===================================================== */}

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
        className="
          absolute
          inset-0
        "
      >
        <img
          src={serviceDetailImage}
          alt=""
          aria-hidden="true"
          className="
            h-full
            w-full
            object-cover
            object-center
          "
        />
      </motion.div>

      {/* =====================================================
          DARK OVERLAY
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0

          bg-[#0b211f]/30
        "
      />

      {/* =====================================================
          LEFT TEXT GRADIENT
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0

          bg-gradient-to-r
          from-[#071c1a]/95
          via-[#0b211f]/65
          to-[#0b211f]/10
        "
      />

      {/* =====================================================
          BOTTOM GRADIENT
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0

          h-[48%]

          bg-gradient-to-t
          from-[#071c1a]/90
          via-[#0b211f]/35
          to-transparent
        "
      />

      {/* =====================================================
          DECORATIVE CIRCLES
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          overflow-hidden
        "
      >
        {/* LARGE CIRCLE */}

        <div
          className="
            absolute

            -right-[180px]
            -top-[180px]

            h-[620px]
            w-[620px]

            rounded-full

            border
            border-white/[0.06]
          "
        />

        {/* GOLD CIRCLE */}

        <div
          className="
            absolute

            -right-[110px]
            -top-[110px]

            h-[470px]
            w-[470px]

            rounded-full

            border
            border-[#c5a46d]/20
          "
        />

        {/* GOLD DOT */}

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

        {/* SMALL DECORATIVE LINE */}

        <div
          className="
            absolute

            bottom-[17%]
            right-[10%]

            hidden

            h-px
            w-[110px]

            bg-gradient-to-r
            from-transparent
            to-[#c5a46d]/40

            lg:block
          "
        />
      </div>

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div
        className="
          relative
          z-10

          mx-auto

          flex
          min-h-[calc(100svh-88px)]
          w-full
          max-w-[1600px]

          items-center

          px-6
          py-16

          sm:px-10

          lg:px-16

          xl:px-20
        "
      >
        {/* =================================================
            TEXT AREA
        ================================================= */}

        <div
          className="
            relative

            w-full

            max-w-[900px]

            pt-8

            sm:pt-10

            lg:pt-0
          "
        >
          {/* =================================================
              SERVICE NUMBER
          ================================================= */}

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
              duration: 0.7,
              delay: 0.2,
            }}
            className="
              mb-7

              flex
              items-center
              gap-4
            "
          >
            <span
              className="
                text-[11px]
                font-semibold

                tracking-[0.28em]

                text-[#c5a46d]

                sm:text-[12px]
              "
            >
              {serviceNumber}
            </span>

            <span
              className="
                h-px
                w-12

                bg-[#c5a46d]/60
              "
            />

            <span
              className="
                text-[10px]
                font-medium

                uppercase

                tracking-[0.28em]

                text-white/45

                sm:text-[11px]
              "
            >
              Professional Services
            </span>
          </motion.div>

          {/* =================================================
              HERO TITLE
          ================================================= */}

          <motion.h1
            key={heroTitle}
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              max-w-[900px]

              text-[48px]
              font-semibold

              leading-[1.02]

              tracking-[-0.04em]

              text-white

              sm:text-[58px]

              md:text-[66px]

              lg:text-[76px]

              xl:text-[88px]
            "
          >
            {heroTitle}
          </motion.h1>

          {/* =================================================
              GOLD UNDERLINE
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              width: 0,
            }}
            animate={{
              opacity: 1,
              width: 90,
            }}
            transition={{
              duration: 0.8,
              delay: 0.25,
            }}
            className="
              mt-7

              h-[2px]

              bg-[#c5a46d]
            "
          />

          {/* =================================================
              DESCRIPTION
          ================================================= */}

          {heroDescription && (
            <motion.p
              key={heroDescription}
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                mt-7

                max-w-[720px]

                text-[15px]
                leading-7

                text-white/60

                sm:text-[16px]
                sm:leading-8

                lg:text-[17px]
              "
            >
              {heroDescription}
            </motion.p>
          )}

          {/* =================================================
              SERVICE CATEGORY
          ================================================= */}

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
              duration: 0.7,
              delay: 0.55,
            }}
            className="
              mt-8
            "
          >
            <span
              className="
                text-[11px]
                font-medium

                uppercase

                tracking-[0.22em]

                text-white/35
              "
            >
              {data.category}
            </span>
          </motion.div>

          {/* =================================================
              EXPLORE SERVICE BUTTON
          ================================================= */}

          <motion.a
            href="#service-overview"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{
              y: -3,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="
              group

              mt-9

              inline-flex

              items-center
              gap-4

              border
              border-[#c5a46d]

              bg-[#c5a46d]

              px-6
              py-3.5

              text-[10px]
              font-semibold

              uppercase

              tracking-[0.18em]

              text-[#102b29]

              shadow-[0_12px_35px_rgba(0,0,0,0.28)]

              transition-all
              duration-300

              hover:bg-transparent

              hover:text-[#c5a46d]

              sm:px-7
              sm:py-4

              sm:text-[11px]
            "
          >
            <span>
              Explore Service
            </span>

            <span
              className="
                flex
                h-7
                w-7

                items-center
                justify-center

                rounded-full

                bg-[#102b29]

                text-[#c5a46d]

                transition-transform
                duration-300

                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
              "
            >
              <ArrowUpRight
                size={14}
                strokeWidth={1.7}
              />
            </span>
          </motion.a>
        </div>
      </div>

      {/* =====================================================
          BOTTOM SERVICE INDICATOR
      ===================================================== */}

      <div
        className="
          absolute
          bottom-7
          left-6
          z-20

          hidden

          items-center
          gap-3

          sm:left-10
          sm:flex

          lg:left-16
          xl:left-20
        "
      >
        <span
          className="
            h-px
            w-8

            bg-white/20
          "
        />

        <span
          className="
            text-[9px]
            uppercase

            tracking-[0.25em]

            text-white/30
          "
        >
          K S &amp; Company
        </span>
      </div>

      {/* =====================================================
          SCROLL INDICATOR
      ===================================================== */}

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1.2,
          duration: 0.8,
        }}
        className="
          absolute
          bottom-8
          right-6
          z-20

          hidden

          items-center
          gap-3

          sm:flex

          lg:right-16
          xl:right-20
        "
      >
        <span
          className="
            text-[9px]

            uppercase

            tracking-[0.25em]

            text-white/30
          "
        >
          Explore
        </span>

        <span
          className="
            flex
            h-7
            w-7

            items-center
            justify-center

            rounded-full

            border
            border-white/15
          "
        >
          <ArrowUpRight
            size={12}
            strokeWidth={1.5}
            className="rotate-90 text-[#c5a46d]"
          />
        </span>
      </motion.div>
    </section>
  );
};

export default ServiceDetailHero;