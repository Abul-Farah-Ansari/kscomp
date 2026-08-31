import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import ScheduleAppointmentModal from "../../components/ScheduleAppointmentModal";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=2200&q=90",
    eyebrow: "Chartered Accountants",
    title: "Financial Expertise.",
    highlight: "Trusted Guidance.",
    description:
      "Strategic accounting, taxation, audit and advisory solutions for individuals, businesses and growing enterprises.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=2200&q=90",
    eyebrow: "Business Advisory",
    title: "Smarter Decisions.",
    highlight: "Stronger Businesses.",
    description:
      "Practical financial insights and professional advisory services designed to help your business move forward with confidence.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=2200&q=90",
    eyebrow: "Tax & Compliance",
    title: "Simplifying Finance.",
    highlight: "Securing Your Future.",
    description:
      "Reliable taxation, compliance and financial management solutions built around your goals and long-term success.",
  },
];

const BAR_COUNT = 14;

const randomBarOrder = [
  5, 11, 2, 8, 0, 13, 6,
  3, 10, 1, 12, 7, 4, 9,
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  // Appointment Modal State
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);


  /* =====================================================
      AUTO CAROUSEL
  ===================================================== */

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);

      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);


  /* =====================================================
      CHANGE SLIDE
  ===================================================== */

  const changeSlide = (index) => {
    if (index === current) return;

    setDirection(index > current ? 1 : -1);

    setCurrent(index);
  };


  const slide = slides[current];


  /* =====================================================
      CONTENT ANIMATION
  ===================================================== */

  const contentContainer = {
    hidden: {},

    visible: {
      transition: {
        staggerChildren: 0.13,
        delayChildren: 0.25,
      },
    },

    exit: {
      transition: {
        staggerChildren: 0.06,
        staggerDirection: -1,
      },
    },
  };


  const contentItem = {
    hidden: {
      opacity: 0,
      y: 45,
      filter: "blur(8px)",
    },

    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",

      transition: {
        duration: 0.75,
        ease: [0.22, 1, 0.36, 1],
      },
    },

    exit: {
      opacity: 0,
      y: -25,
      filter: "blur(5px)",

      transition: {
        duration: 0.4,
      },
    },
  };


  return (
    <>
      <section
        className="
          relative
          min-h-[780px]
          w-full
          overflow-hidden
          bg-[#171923]
          sm:min-h-[820px]
          lg:min-h-[850px]
        "
      >

        {/* =====================================================
            BACKGROUND SLIDES
        ====================================================== */}

        <AnimatePresence mode="sync">
          <motion.div
            key={`background-${current}`}
            className="
              absolute
              inset-0
              overflow-hidden
            "
          >
            {Array.from({ length: BAR_COUNT }).map((_, index) => {
              const randomDelay =
                randomBarOrder[index] * 0.045;

              const revealFromTop =
                (index + current) % 2 === 0;

              return (
                <motion.div
                  key={`${current}-bar-${index}`}
                  initial={{
                    clipPath: revealFromTop
                      ? "inset(0 0 100% 0)"
                      : "inset(100% 0 0 0)",
                  }}
                  animate={{
                    clipPath: "inset(0 0 0% 0)",
                  }}
                  exit={{
                    opacity: 0,
                    transition: {
                      duration: 0.35,
                    },
                  }}
                  transition={{
                    duration: 0.8,
                    delay: randomDelay,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    absolute
                    inset-y-0
                    will-change-[clip-path]
                  "
                  style={{
                    left: `${(index / BAR_COUNT) * 100}%`,
                    width: `${100 / BAR_COUNT + 0.2}%`,

                    backgroundImage: `url("${slide.image}")`,

                    backgroundSize: `${BAR_COUNT * 100}% 100%`,

                    backgroundPosition: `${
                      BAR_COUNT === 1
                        ? 0
                        : (index / (BAR_COUNT - 1)) * 100
                    }% center`,

                    backgroundRepeat: "no-repeat",
                  }}
                />
              );
            })}
          </motion.div>
        </AnimatePresence>


        {/* =====================================================
            DARK OVERLAY
        ====================================================== */}

        <div className="absolute inset-0 bg-[#11131c]/55" />


        {/* =====================================================
            LEFT GRADIENT
        ====================================================== */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-[#11131c]/95
            via-[#171923]/75
            to-[#171923]/20
          "
        />


        {/* =====================================================
            PURPLE GLOW
        ====================================================== */}

        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, -25, 0],
            scale: [1, 1.08, 1],
            opacity: [0.55, 0.8, 0.55],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            pointer-events-none
            absolute
            -left-32
            top-1/3
            h-[420px]
            w-[420px]
            rounded-full
            bg-[#4A3675]/15
            blur-[120px]
          "
        />


        {/* =====================================================
            GREEN GLOW
        ====================================================== */}

        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, 25, 0],
            scale: [1, 1.1, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            pointer-events-none
            absolute
            bottom-0
            right-0
            h-[420px]
            w-[420px]
            rounded-full
            bg-[#205030]/10
            blur-[130px]
          "
        />


        {/* =====================================================
            HERO CONTENT
        ====================================================== */}

        <div
          className="
            relative
            z-10
            flex
            min-h-[780px]
            items-center
            sm:min-h-[820px]
            lg:min-h-[850px]
          "
        >

          <div
            className="
              mx-auto
              w-full
              max-w-[1400px]
              px-5
              pt-20
              sm:px-8
              lg:px-12
            "
          >

            <AnimatePresence mode="wait">

              <motion.div
                key={current}
                variants={contentContainer}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="
                  max-w-[760px]
                  text-white
                "
              >

                {/* EYEBROW */}

                <motion.div
                  variants={contentItem}
                  className="mb-6 flex items-center gap-3"
                >

                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{
                      duration: 0.7,
                      delay: 0.25,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="
                      h-px
                      w-10
                      origin-left
                      bg-[#8B78B5]
                    "
                  />

                  <span
                    className="
                      text-[11px]
                      font-medium
                      uppercase
                      tracking-[3px]
                      text-white/70
                      sm:text-xs
                    "
                  >
                    {slide.eyebrow}
                  </span>

                </motion.div>


                {/* HEADING */}

                <motion.h1
                  variants={contentItem}
                  className="
                    text-[40px]
                    font-semibold
                    leading-[1.02]
                    tracking-[-1.5px]
                    sm:text-5xl
                    md:text-6xl
                    lg:text-7xl
                    xl:text-[76px]
                  "
                >

                  {slide.title}

                  <span
                    className="
                      mt-2
                      block
                      font-['Cormorant_Garamond']
                      text-[1.08em]
                      font-semibold
                      italic
                      tracking-[-0.02em]
                      text-[#A995D0]
                      drop-shadow-[0_8px_20px_rgba(169,149,208,0.18)]
                      sm:text-[1.12em]
                    "
                  >
                    {slide.highlight}
                  </span>

                </motion.h1>


                {/* DESCRIPTION */}

                <motion.p
                  variants={contentItem}
                  className="
                    mt-7
                    max-w-[620px]
                    text-sm
                    leading-7
                    text-white/65
                    sm:text-base
                    lg:text-lg
                  "
                >
                  {slide.description}
                </motion.p>


                {/* =================================================
                    BUTTONS
                ================================================= */}

                <motion.div
                  variants={contentItem}
                  className="
                    mt-9
                    flex
                    flex-wrap
                    items-center
                    gap-3
                    sm:gap-4
                  "
                >

                  {/* PRIMARY BUTTON */}

                  <button
                    type="button"
                    onClick={() => setIsAppointmentOpen(true)}
                    className="
                      group
                      inline-flex
                      items-center
                      gap-2
                      rounded-md
                      border
                      border-[#4D8054]
                      bg-[#3F7045]
                      px-6
                      py-3.5
                      text-sm
                      font-semibold
                      text-white
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:bg-[#4D8054]
                      hover:shadow-[0_12px_30px_rgba(63,112,69,0.35)]
                      sm:px-7
                    "
                  >

                    Book a Consultation

                    <span
                      className="
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                    >
                      →
                    </span>

                  </button>


                  {/* SECONDARY BUTTON */}

                  <a
                    href="/services"
                    className="
                      inline-flex
                      items-center
                      rounded-md
                      border
                      border-white/25
                      bg-white/5
                      px-6
                      py-3.5
                      text-sm
                      font-medium
                      text-white
                      backdrop-blur-sm
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-[#8B78B5]/60
                      hover:bg-[#4A3675]/30
                      sm:px-7
                    "
                  >
                    Explore Our Services
                  </a>

                </motion.div>


                {/* TRUST POINTS */}

                <motion.div
                  variants={contentItem}
                  className="
                    mt-10
                    flex
                    flex-wrap
                    items-center
                    gap-x-7
                    gap-y-3
                    text-xs
                    text-white/55
                  "
                >

                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#4D8054]" />

                    Professional Expertise
                  </div>


                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#8B78B5]" />

                    Confidential & Reliable
                  </div>


                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#4A6A8A]" />

                    Client Focused
                  </div>

                </motion.div>

              </motion.div>

            </AnimatePresence>

          </div>

        </div>


        {/* =====================================================
            SLIDE NUMBER
        ====================================================== */}

        <motion.div
          key={`number-${current}`}
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
            delay: 0.4,
          }}
          className="
            absolute
            bottom-28
            left-6
            z-[100]
            text-xs
            tracking-[2px]
            text-white/50
            sm:bottom-32
            sm:left-10
            lg:bottom-36
          "
        >

          <span className="font-medium text-white">
            0{current + 1}
          </span>

          <span className="mx-2">/</span>

          0{slides.length}

        </motion.div>


        {/* =====================================================
            SLIDE INDICATORS
        ====================================================== */}

        <div
          className="
            absolute
            bottom-28
            right-6
            z-[100]
            flex
            items-center
            gap-2
            sm:bottom-32
            sm:right-10
            lg:bottom-36
          "
        >

          {slides.map((_, index) => (

            <button
              key={index}
              type="button"
              onClick={() => changeSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`
                relative
                h-[3px]
                overflow-hidden
                rounded-full
                transition-all
                duration-500

                ${
                  index === current
                    ? "w-11 bg-white/20"
                    : "w-5 bg-white/50 hover:bg-white"
                }
              `}
            >

              {index === current && (

                <motion.span
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{
                    duration: 6,
                    ease: "linear",
                  }}
                  className="
                    absolute
                    inset-y-0
                    left-0
                    bg-[#A995D0]
                  "
                />

              )}

            </button>

          ))}

        </div>


        {/* =====================================================
            SCROLL INDICATOR
        ====================================================== */}

        <motion.div
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            bottom-10
            left-1/2
            z-[100]
            hidden
            -translate-x-1/2
            flex-col
            items-center
            gap-2
            md:flex
          "
        >

          <span
            className="
              text-[9px]
              uppercase
              tracking-[3px]
              text-white/40
            "
          >
            Scroll
          </span>

          <span className="h-8 w-px bg-white/30" />

        </motion.div>

      </section>


      {/* =====================================================
          SCHEDULE APPOINTMENT MODAL

          Opens when "Book a Consultation" is clicked.
      ====================================================== */}

      <ScheduleAppointmentModal
        isOpen={isAppointmentOpen}
        onClose={() => setIsAppointmentOpen(false)}
      />

    </>
  );
};

export default Hero;