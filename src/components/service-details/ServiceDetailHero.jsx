import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import serviceDetailImage from "../../assets/service-details.png";

/* =========================================================
   SERVICE HERO IMAGES

   Folder:
   src/assets/heroimages/

   1.png → Taxation
   2.png → Insurance
   3.png → Accounting
   4.png → Registration
   5.png → HR Compliance
   6.png → Other Compliance
   7.png → Government & Documentation
   8.png → Loan & Finance
========================================================= */

const heroImages = import.meta.glob(
  "../../assets/heroimages/*.{png,jpg,jpeg,webp,avif,PNG,JPG,JPEG,WEBP,AVIF}",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
);

/* =========================================================
   FIND IMAGE BY SERVICE NUMBER
========================================================= */

const getHeroImage = (number) => {
  const targetNumber = String(number || "")
    .replace(/^0+/, "")
    .trim();

  const entry = Object.entries(heroImages).find(
    ([path]) => {
      const fileName = path
        .split("/")
        .pop()
        ?.split(".")[0]
        ?.trim();

      return fileName === targetNumber;
    }
  );

  return entry?.[1] || null;
};

/* =========================================================
   COMPONENT
========================================================= */

const ServiceDetailHero = ({ data }) => {
  if (!data) return null;

  const serviceImage = getHeroImage(data.number);

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
          FULL HERO BACKGROUND
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

      {/* =========================================================
          DARK GREEN OVERLAY
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

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          overflow-hidden
        "
      >
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
              SERVICE IMAGE CARD

              Slightly taller + narrower
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
              max-w-[780px]
              lg:w-[62%]
              xl:w-[60%]
            "
          >

            {/* =================================================
                IMAGE CARD
            ================================================== */}

            <div
              className="
                relative
                h-[470px]
                w-full
                overflow-hidden
                bg-[#0b211f]
                shadow-[0_30px_80px_rgba(0,0,0,0.42)]
                sm:h-[495px]
                md:h-[515px]
                lg:h-[525px]
                xl:h-[540px]
              "
            >

              {/* =================================================
                  SERVICE IMAGE
              ================================================== */}

              {serviceImage ? (
                <motion.img
                  initial={{
                    opacity: 0,
                    scale: 1.05,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    duration: 1,
                    delay: 0.35,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  src={serviceImage}
                  alt={data.category || "Professional Service"}
                  className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-cover
                    object-center
                  "
                />
              ) : (
                <div
                  className="
                    absolute
                    inset-0
                    flex
                    items-center
                    justify-center
                    bg-[#0b211f]
                  "
                >
                  <span className="text-sm text-white/40">
                    Service Image
                  </span>
                </div>
              )}

              {/* =================================================
                  SUBTLE BOTTOM OVERLAY

                  Keeps button readable without hiding image.
              ================================================== */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-x-0
                  bottom-0
                  h-[35%]
                  bg-gradient-to-t
                  from-[#0b211f]/55
                  to-transparent
                "
              />

              {/* =================================================
                  INNER GOLD BORDER
              ================================================== */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-3
                  z-10
                  border
                  border-[#c5a46d]/25
                  sm:inset-4
                "
              />

              {/* =================================================
                  EXPLORE SERVICE BUTTON

                  REAL REACT / HTML
              ================================================== */}

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
                  duration: 0.7,
                  delay: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -4,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="
                  group
                  absolute
                  bottom-7
                  left-7
                  z-30
                  inline-flex
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
                  shadow-[0_12px_35px_rgba(0,0,0,0.35)]
                  transition-all
                  duration-300
                  hover:bg-[#d5b97f]
                  hover:shadow-[0_16px_40px_rgba(0,0,0,0.4)]
                  sm:bottom-9
                  sm:left-9
                  sm:px-6
                  sm:py-3.5
                  sm:text-[9px]
                  md:bottom-10
                  md:left-10
                  lg:bottom-11
                  lg:left-11
                "
              >

                <span>
                  Explore Service
                </span>

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

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default ServiceDetailHero;