import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const PageHero = ({
  label = "KS & COMPANY",
  title,
  highlight,
  description,
  buttonText,
  buttonLink = "/contact",
}) => {
  return (
    <section
      className="
        relative
        min-h-[400px]
        overflow-hidden
        bg-[#102b29]
        pt-24
        pb-14
        sm:pt-28
        sm:pb-16
      "
    >
      {/* =================================================
          BACKGROUND STRUCTURES
      ================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-[420px] w-[420px] rounded-full border border-white/5" />

        <div className="absolute -left-20 -top-20 h-[320px] w-[320px] rounded-full border border-white/5" />

        <div className="absolute right-[-120px] top-[-160px] h-[480px] w-[480px] rounded-full border border-white/5" />

        <div className="absolute right-[-40px] top-[-60px] h-[350px] w-[350px] rounded-full border border-white/5" />
      </div>

      {/* =================================================
          CONTENT
      ================================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[400px]
          max-w-[1280px]
          flex-col
          justify-center
          px-6
          sm:px-10
          lg:px-14
        "
      >
        {/* Label */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="flex items-center gap-4"
        >
          <div className="h-px w-14 bg-white/40" />

          <p className="text-xs font-semibold uppercase tracking-[5px] text-white/60">
            {label}
          </p>
        </motion.div>

        {/* Heading */}

        <motion.h1
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
            delay: 0.1,
          }}
          className="
            mt-5
            max-w-5xl
            text-4xl
            font-bold
            leading-[1.05]
            tracking-tight
            text-white
            sm:text-5xl
            lg:text-6xl
          "
        >
          {title}

          {highlight && (
            <>
              <br />

              <span className="text-white/60">{highlight}</span>
            </>
          )}
        </motion.h1>

        {/* Description */}

        {description && (
          <motion.div
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
              delay: 0.25,
            }}
            className="mt-5 max-w-3xl"
          >
            <p className="text-base leading-7 text-white/65 sm:text-lg">
              {description}
            </p>
          </motion.div>
        )}

        {/* Button */}

        {buttonText && (
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
              duration: 0.6,
              delay: 0.4,
            }}
            className="mt-7"
          >
            <Link
              to={buttonLink}
              className="
                inline-flex
                items-center
                gap-3
                bg-white
                px-7
                py-3.5
                text-sm
                font-semibold
                text-[#102b29]
                transition
                duration-300
                hover:-translate-y-1
                hover:bg-[#9bd66f]
                hover:shadow-[0_15px_35px_rgba(0,0,0,0.2)]
              "
            >
              {buttonText}

              <ArrowRight size={18} />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default PageHero;