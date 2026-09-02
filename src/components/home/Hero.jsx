import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Play,
  Sparkles,
  BadgeCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

import caLogo from "../../assets/CA.png";
import heroVideo from "../../assets/hero-video.mp4";

const Hero = () => {
  return (
    <section className="relative min-h-[850px] overflow-hidden bg-[#102b29] text-white sm:min-h-[900px] lg:min-h-[950px]">

      {/* ===================================== */}
      {/* FULL BACKGROUND VIDEO */}
      {/* ===================================== */}

      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
          "
        >
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark overlay for readability */}

        <div className="absolute inset-0 bg-[#102b29]/75" />

        {/* Left side stronger overlay */}

        <div
          className="
            absolute
            inset-y-0
            left-0
            w-full
            bg-gradient-to-r
            from-[#102b29]
            via-[#102b29]/90
            via-45%
            to-[#102b29]/35
            lg:w-[78%]
          "
        />

        {/* Bottom fade */}

        <div
          className="
            absolute
            bottom-0
            left-0
            right-0
            h-[280px]
            bg-gradient-to-t
            from-[#102b29]
            via-[#102b29]/70
            to-transparent
          "
        />

        {/* Subtle golden glow */}

        <div className="absolute right-[8%] top-[10%] h-[450px] w-[450px] rounded-full bg-[#d6aa4c]/10 blur-[140px]" />
      </div>

      {/* ===================================== */}
      {/* GRID OVERLAY */}
      {/* ===================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-[1]
          opacity-[0.025]
          [background-image:linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)]
          [background-size:65px_65px]
        "
      />

      {/* ===================================== */}
      {/* PARTICLES */}
      {/* ===================================== */}

      <div className="pointer-events-none absolute inset-0 z-[2]">
        <div className="absolute left-[8%] top-[16%] h-1.5 w-1.5 rounded-full bg-[#f4ca6b] shadow-[0_0_15px_#f4ca6b]" />

        <div className="absolute left-[42%] top-[30%] h-1 w-1 rounded-full bg-[#f4ca6b]" />

        <div className="absolute right-[12%] top-[20%] h-2 w-2 rounded-full bg-[#f4ca6b] shadow-[0_0_18px_#f4ca6b]" />

        <div className="absolute right-[28%] bottom-[18%] h-1.5 w-1.5 rounded-full bg-[#d6aa4c]" />

        <div className="absolute left-[20%] bottom-[25%] h-1 w-1 rounded-full bg-[#f4ca6b]" />
      </div>

      {/* ===================================== */}
      {/* MAIN CONTENT */}
      {/* ===================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[850px]
          max-w-[1500px]
          items-center
          px-5
          pb-20
          pt-32
          sm:px-8
          lg:min-h-[950px]
          lg:px-12
          xl:px-16
        "
      >
        <div className="grid w-full items-center gap-14 lg:grid-cols-[1fr_0.95fr] lg:gap-8">

          {/* ===================================== */}
          {/* LEFT CONTENT */}
          {/* ===================================== */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative z-20"
          >
            {/* Brand Label */}

            <div className="mb-7 flex items-center gap-4">
              <span className="h-px w-14 bg-gradient-to-r from-[#f2c86f] to-[#b98a31]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.42em] text-[#d9bc7b] sm:text-xs">
                KS & Company
              </span>
            </div>

            {/* Chartered Accountants */}

            <div className="mb-7 flex items-center gap-3">
              <BadgeCheck
                size={17}
                strokeWidth={1.7}
                className="text-[#e5bd67]"
              />

              <span className="text-[10px] font-semibold uppercase tracking-[0.38em] text-white/65 sm:text-xs">
                Chartered Accountants
              </span>
            </div>

            {/* Main Heading */}

            <h1 className="max-w-[800px] text-[52px] font-semibold leading-[0.95] tracking-[-0.04em] text-[#f4f1e9] sm:text-[72px] md:text-[88px] lg:text-[78px] xl:text-[94px]">
              Trusted Financial

              <span className="mt-2 block bg-gradient-to-r from-[#f6d681] via-[#d8ad53] to-[#9d7332] bg-clip-text text-transparent">
                Expertise
              </span>
            </h1>

            {/* Decorative Line */}

            <div className="mt-8 flex items-center gap-4">
              <div className="h-px w-24 bg-gradient-to-r from-[#d6aa4c] to-transparent" />

              <Sparkles
                size={16}
                strokeWidth={1.4}
                className="text-[#e5bd67]"
              />
            </div>

            {/* Cursive Text */}

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.25,
              }}
              className="
                mt-5
                text-[42px]
                italic
                leading-none
                text-[#e8dfcc]
                sm:text-[58px]
                lg:text-[62px]
              "
              style={{
                fontFamily:
                  '"Brush Script MT", "Segoe Script", "Lucida Handwriting", cursive',
              }}
            >
              For Growth.
            </motion.p>

            {/* Description */}

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.35,
              }}
              className="
                mt-10
                max-w-[650px]
                text-[16px]
                leading-8
                text-white/75
                sm:text-[17px]
                lg:text-[18px]
              "
            >
              We provide professional accounting, taxation, audit, and
              financial advisory services designed to help businesses make
              confident decisions and achieve sustainable growth.
            </motion.p>

            {/* Buttons */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.45,
              }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              {/* Services Button */}

              <Link
                to="/services"
                className="
                  group
                  inline-flex
                  items-center
                  gap-5
                  rounded-full
                  border
                  border-[#f0c968]/50
                  bg-gradient-to-r
                  from-[#f4d27a]
                  via-[#d9ae53]
                  to-[#b9822d]
                  px-7
                  py-4
                  text-sm
                  font-bold
                  text-[#102b29]
                  shadow-[0_10px_35px_rgba(218,174,83,0.18)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_15px_45px_rgba(218,174,83,0.3)]
                "
              >
                Explore Our Services

                <ArrowRight
                  size={19}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </Link>

              {/* About Button */}

              <Link
                to="/about"
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  border
                  border-[#d6aa4c]/40
                  bg-[#102b29]/30
                  px-6
                  py-4
                  text-sm
                  font-semibold
                  text-white/90
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:border-[#d6aa4c]/80
                  hover:bg-[#102b29]/60
                "
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#d6aa4c]/50 text-[#e6be69]">
                  <Play size={11} fill="currentColor" />
                </span>

                Discover More
              </Link>
            </motion.div>
          </motion.div>

          {/* ===================================== */}
          {/* RIGHT CA BADGE */}
          {/* ===================================== */}

          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{
              duration: 1,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              flex
              min-h-[560px]
              items-start
              justify-center
              pb-16
              lg:min-h-[690px]
            "
          >
            {/* Ambient Glow */}

            <div className="absolute top-[0%] h-[420px] w-[420px] rounded-full bg-[#d6aa4c]/10 blur-[100px] sm:h-[540px] sm:w-[540px]" />

            {/* Rotating Ring */}

            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 35,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute
                top-[4%]
                h-[480px]
                w-[480px]
                rounded-full
                border
                border-[#d6aa4c]/15
                sm:h-[610px]
                sm:w-[610px]
              "
            >
              <div className="absolute left-1/2 top-[-4px] h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-[#f4ca6b] shadow-[0_0_15px_#f4ca6b]" />

              <div className="absolute bottom-[8%] right-[8%] h-2 w-2 rounded-full bg-[#d6aa4c]" />
            </motion.div>

            {/* Second Ring */}

            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 45,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute
                top-[7%]
                h-[440px]
                w-[440px]
                rounded-full
                border
                border-dashed
                border-[#d6aa4c]/15
                sm:h-[570px]
                sm:w-[570px]
              "
            />

            {/* ===================================== */}
            {/* MAIN CIRCLE */}
            {/* ===================================== */}

            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                relative
                z-10
                mt-0
                flex
                h-[410px]
                w-[410px]
                flex-col
                items-center
                justify-center
                overflow-hidden
                rounded-full
                border
                border-[#e9c46d]/70
                bg-[radial-gradient(circle_at_30%_20%,rgba(41,70,63,0.92)_0%,rgba(23,53,48,0.94)_40%,rgba(16,43,41,0.96)_75%)]
                shadow-[0_0_0_10px_rgba(214,170,76,0.06),0_0_60px_rgba(214,170,76,0.2),inset_0_0_70px_rgba(0,0,0,0.4)]
                backdrop-blur-md
                sm:h-[530px]
                sm:w-[530px]
              "
            >
              {/* Inner Border */}

              <div className="pointer-events-none absolute inset-[14px] rounded-full border border-[#d6aa4c]/50 sm:inset-[18px]" />

              {/* Moving Reflection */}

              <motion.div
                animate={{
                  x: ["-180%", "180%"],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  repeatDelay: 2,
                  ease: "easeInOut",
                }}
                className="
                  pointer-events-none
                  absolute
                  inset-y-0
                  w-[35%]
                  rotate-[25deg]
                  bg-gradient-to-r
                  from-transparent
                  via-white/[0.12]
                  to-transparent
                  blur-xl
                "
              />

              {/* CA Logo */}

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="
                  relative
                  z-10
                  mb-4
                  flex
                  h-[92px]
                  w-[92px]
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#e4bf6d]
                  bg-[#f5f2e9]
                  p-3
                  shadow-[0_8px_30px_rgba(0,0,0,0.35)]
                  sm:h-[115px]
                  sm:w-[115px]
                "
              >
                <img
                  src={caLogo}
                  alt="Chartered Accountant India"
                  className="h-full w-full object-contain"
                />
              </motion.div>

              {/* 8+ */}

              <div className="relative z-10 text-center">
                <div className="bg-gradient-to-b from-[#ffe7a3] via-[#dcb55b] to-[#9d6c26] bg-clip-text text-[92px] font-semibold leading-none tracking-tight text-transparent sm:text-[125px]">
                  8+
                </div>

                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.45em] text-[#e5c271] sm:text-xs">
                  Years of
                </p>

                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.45em] text-[#e5c271] sm:text-xs">
                  Services
                </p>
              </div>

              {/* Divider */}

              <div className="relative z-10 mt-5 flex items-center gap-3">
                <span className="h-px w-12 bg-[#d6aa4c]/60" />

                <span className="h-1.5 w-1.5 rounded-full bg-[#f1ca70]" />

                <span className="h-px w-12 bg-[#d6aa4c]/60" />
              </div>

              {/* Name */}

              <p
                className="
                  relative
                  z-10
                  mt-5
                  text-center
                  text-[29px]
                  leading-tight
                  text-[#f3e5bf]
                  sm:text-[43px]
                "
                style={{
                  fontFamily:
                    '"Brush Script MT", "Segoe Script", "Lucida Handwriting", cursive',
                }}
              >
                Md. Khursheed Alam
              </p>

              {/* Designation */}

              <p className="relative z-10 mt-3 text-center text-[9px] font-semibold uppercase tracking-[0.32em] text-[#e3c278] sm:text-[11px]">
                Chartered Accountant
              </p>

              {/* Stars */}

              <div className="relative z-10 mt-5 flex items-center gap-2 text-[#e9c264]">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>

              {/* Light Dots */}

              <div className="absolute right-[13%] top-[15%] h-3 w-3 rounded-full bg-[#fff0ad] shadow-[0_0_25px_#f5cb6a]" />

              <div className="absolute bottom-[20%] left-[14%] h-2 w-2 rounded-full bg-[#e6ba5e] shadow-[0_0_15px_#e6ba5e]" />
            </motion.div>

            {/* Reflection Below */}

            <div
              className="
                pointer-events-none
                absolute
                bottom-[-80px]
                left-1/2
                h-[160px]
                w-[420px]
                -translate-x-1/2
                rounded-[50%]
                border-t
                border-[#d6aa4c]/15
                bg-gradient-to-b
                from-[#d6aa4c]/10
                to-transparent
                opacity-60
                blur-[18px]
                sm:w-[520px]
              "
            />

            {/* Animated Golden Flare */}

            <motion.div
              animate={{
                opacity: [0.35, 1, 0.35],
                scale: [0.9, 1.15, 0.9],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                right-[3%]
                top-[17%]
                h-4
                w-4
                rounded-full
                bg-[#ffe19a]
                shadow-[0_0_45px_12px_rgba(231,184,82,0.45)]
              "
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;