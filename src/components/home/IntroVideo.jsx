import React, { useState } from "react";
import { Play, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import introBackground from "../../assets/introbackground/ChatGPT Image Sep 17, 2026, 05_39_00 PM.png";

const IntroVideo = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* =====================================================
          INTRO VIDEO SECTION
      ===================================================== */}

      <section className="relative h-screen min-h-[650px] w-full overflow-hidden bg-[#102b29]">

        {/* ===================================================
            LOCAL BACKGROUND IMAGE
        =================================================== */}

        <div className="absolute inset-0">

          <img
            src={introBackground}
            alt="K S & Company professionals"
            className="
              h-full
              w-full
              object-cover
              object-center
            "
          />

          {/* =================================================
              SOFT DARK GREEN OVERLAPPING GRADIENT
          ================================================= */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              w-full
              bg-gradient-to-r
              from-[#102b29]
              via-[#102b29]/90
              via-[38%]
              to-transparent
            "
          />

          {/* =================================================
              HIGH → LOW SOFT GRADIENT
          ================================================= */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              bg-gradient-to-br
              from-[#102b29]/85
              via-[#102b29]/35
              via-[42%]
              to-transparent
            "
          />

          {/* =================================================
              LOWER GREEN BLEND
          ================================================= */}

          <div
            className="
              pointer-events-none
              absolute
              bottom-0
              left-0
              h-[55%]
              w-[65%]
              bg-gradient-to-tr
              from-[#102b29]/70
              via-[#102b29]/25
              to-transparent
              blur-[2px]
            "
          />
        </div>

        {/* ===================================================
            DECORATIVE CIRCLES
        =================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            right-[8%]
            top-[15%]
            h-[380px]
            w-[380px]
            rounded-full
            border
            border-white/10
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            right-[12%]
            top-[20%]
            h-[280px]
            w-[280px]
            rounded-full
            border
            border-[#75b43c]/20
          "
        />

        {/* ===================================================
            MAIN CONTENT
        =================================================== */}

        <div
          className="
            relative
            z-10
            mx-auto
            flex
            h-full
            max-w-[1400px]
            items-center
            px-5
            sm:px-8
            lg:px-12
          "
        >
          <div className="max-w-[850px]">

            {/* =================================================
                SMALL LABEL
            ================================================= */}

            <motion.div
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
              }}
              className="mb-7 flex items-center gap-4"
            >
              <span className="h-[2px] w-12 bg-[#8fbd73]" />

              <span
                className="
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[3px]
                  text-[#b7d7a5]
                "
              >
                Discover K S & Company
              </span>
            </motion.div>

            {/* =================================================
                HEADING
            ================================================= */}

            <motion.h2
              initial={{
                opacity: 0,
                y: 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.8,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                text-[48px]
                font-semibold
                leading-[1.05]
                tracking-[-1.5px]
                text-white
                sm:text-[64px]
                lg:text-[82px]
              "
            >
              Financial clarity.

              <span className="block text-[#a8c99b]">
                Built for growth.
              </span>
            </motion.h2>

            {/* =================================================
                DESCRIPTION
            ================================================= */}

            <motion.p
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
                delay: 0.25,
              }}
              className="
                mt-8
                max-w-[620px]
                text-[15px]
                leading-8
                text-white/70
                sm:text-[17px]
              "
            >
              Discover how K S & Company helps businesses navigate
              financial complexity, strengthen decision-making and
              create a foundation for sustainable success.
            </motion.p>

          </div>
        </div>

        {/* ===================================================
            PLAY BUTTON + TAP TO PLAY
        =================================================== */}

        <div
          className="
            absolute
            left-1/2
            top-1/2
            z-20
            -translate-x-1/2
            -translate-y-1/2
            flex
            flex-col
            items-center
          "
        >

          {/* PLAY BUTTON */}

          <motion.button
            initial={{
              opacity: 0,
              scale: 0.7,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              delay: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{
              scale: 1.08,
            }}
            whileTap={{
              scale: 0.95,
            }}
            onClick={() => setIsOpen(true)}
            aria-label="Play introduction video"
            className="
              group
              relative
              flex
              h-[96px]
              w-[96px]
              items-center
              justify-center
              rounded-full
              bg-[#326844]
              text-white
              shadow-[0_15px_50px_rgba(0,0,0,0.35)]
              transition-all
              duration-300
              hover:bg-[#285b68]
              sm:h-[108px]
              sm:w-[108px]
            "
          >

            {/* OUTER RING */}

            <span
              className="
                pointer-events-none
                absolute
                -inset-4
                rounded-full
                border
                border-white/20
                transition-all
                duration-500
                group-hover:scale-110
              "
            />

            {/* SECOND OUTER RING */}

            <span
              className="
                pointer-events-none
                absolute
                -inset-8
                rounded-full
                border
                border-[#9acb7c]/20
              "
            />

            {/* PLAY ICON */}

            <Play
              size={38}
              fill="currentColor"
              className="
                relative
                z-10
                ml-1.5
                sm:h-[42px]
                sm:w-[42px]
              "
            />

            {/* PULSE */}

            <span
              className="
                pointer-events-none
                absolute
                inset-0
                rounded-full
                bg-[#326844]
                opacity-30
                animate-ping
              "
            />

          </motion.button>

          {/* =================================================
              TAP TO PLAY VIDEO
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 8,
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
              whitespace-nowrap
              text-center
            "
          >
            <span
              className="
                text-[10px]
                font-medium
                uppercase
                tracking-[2.5px]
                text-white/75
                sm:text-[11px]
              "
            >
              Tap to play video
            </span>
          </motion.div>

        </div>

        {/* ===================================================
            BOTTOM TEXT
        =================================================== */}

        <div
          className="
            absolute
            bottom-8
            left-5
            right-5
            z-10
            mx-auto
            flex
            max-w-[1400px]
            items-center
            justify-between
            sm:left-8
            sm:right-8
            lg:left-12
            lg:right-12
          "
        >
          <span
            className="
              text-[10px]
              uppercase
              tracking-[2px]
              text-white/35
            "
          >
            Chartered Accountants
          </span>

          <span
            className="
              text-[10px]
              uppercase
              tracking-[2px]
              text-white/35
            "
          >
            Scroll to Explore ↓
          </span>
        </div>

      </section>

      {/* =====================================================
          VIDEO MODAL
      ===================================================== */}

      <AnimatePresence>

        {isOpen && (

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            onClick={() => setIsOpen(false)}
            className="
              fixed
              inset-0
              z-[999]
              flex
              items-center
              justify-center
              bg-[#071417]/95
              p-5
              backdrop-blur-sm
            "
          >

            {/* =================================================
                CLOSE BUTTON
            ================================================= */}

            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close video"
              className="
                absolute
                right-5
                top-5
                z-20
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-white/10
                text-white
                transition-all
                duration-300
                hover:bg-white/20
                sm:right-8
                sm:top-8
              "
            >
              <X size={22} />
            </button>

            {/* =================================================
                VIDEO CONTAINER
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.92,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.92,
              }}
              transition={{
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              onClick={(e) => e.stopPropagation()}
              className="
                relative
                w-full
                max-w-[1150px]
                overflow-hidden
                rounded-2xl
                bg-black
                shadow-2xl
              "
            >

              {/* =================================================
                  LOCAL MP4 VIDEO
              ================================================= */}

              <div className="aspect-video">

                <video
                  controls
                  autoPlay
                  playsInline
                  preload="metadata"
                  className="
                    h-full
                    w-full
                    object-contain
                    bg-black
                  "
                >

                  <source
                    src="/videos/WhatsApp%20Video%202026-09-08%20at%2000.38.20.mp4"
                    type="video/mp4"
                  />

                  Your browser does not support the video tag.

                </video>

              </div>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>
    </>
  );
};

export default IntroVideo;