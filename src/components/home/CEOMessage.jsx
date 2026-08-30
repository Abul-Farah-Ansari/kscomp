import React from "react";
import { Quote, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const CEOMessage = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#102b29] py-16 sm:py-20 lg:py-24">
      {/* ================= BACKGROUND TEXTURE ================= */}

      <div
        className="
          pointer-events-none
          absolute
          -right-32
          -top-32
          h-[420px]
          w-[420px]
          rounded-full
          bg-[radial-gradient(circle_at_30%_30%,#315e54_0%,#1b403b_38%,#102b29_72%)]
          opacity-80
          shadow-[inset_-30px_-30px_70px_rgba(0,0,0,0.35),inset_20px_20px_50px_rgba(91,143,120,0.12)]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-40
          left-[5%]
          h-[380px]
          w-[380px]
          rounded-full
          bg-[radial-gradient(circle_at_35%_25%,#285047_0%,#173934_45%,#0d2523_78%)]
          opacity-70
          shadow-[inset_-25px_-25px_65px_rgba(0,0,0,0.4),inset_20px_20px_50px_rgba(89,140,115,0.1)]
        "
      />

      {/* GRID TEXTURE */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.035]
          [background-image:linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)]
          [background-size:55px_55px]
        "
      />

      {/* CENTER GLOW */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[300px]
          w-[650px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#4f8a70]/10
          blur-[110px]
        "
      />

      {/* ================= CONTENT ================= */}

      <div className="relative z-10 mx-auto w-full max-w-[1350px] px-5 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

          {/* ================= LEFT SIDE ================= */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative"
          >
            {/* LABEL */}

            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#82ae79]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#9abca0]">
                Leadership Perspective
              </span>
            </div>

            {/* HEADING */}

            <h2 className="max-w-[500px] text-[38px] font-semibold leading-[1.08] tracking-tight text-white sm:text-[52px] lg:text-[56px]">
              A Word From

              <span className="block bg-gradient-to-r from-[#a8c98e] to-[#6fa18a] bg-clip-text text-transparent">
                Our CEO.
              </span>
            </h2>

            {/* ================= CEO PHOTO ================= */}

            <div className="relative mt-9 max-w-[410px]">
              {/* PHOTO GLOW */}

              <div
                className="
                  absolute
                  -inset-5
                  rounded-[32px]
                  bg-[#6fa18a]/15
                  blur-[40px]
                "
              />

              {/* IMAGE FRAME */}

              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-white/10
                  bg-[#173934]
                  shadow-[0_25px_60px_rgba(0,0,0,0.3)]
                "
              >
                <img
                  src="/images/ceo.jpg"
                  alt="CEO"
                  className="
                    h-[420px]
                    w-full
                    object-cover
                    object-top

                    sm:h-[500px]
                    lg:h-[460px]
                  "
                />

                {/* IMAGE GRADIENT */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#102b29]/90
                    via-transparent
                    to-transparent
                  "
                />

                {/* PHOTO DETAILS */}

                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7">
                  <p className="text-xl font-semibold text-white sm:text-2xl">
                    CEO Name
                  </p>

                  <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#a8c98e]">
                    Chief Executive Officer
                  </p>
                </div>
              </div>

              {/* SMALL DECORATIVE CIRCLE */}

              <div
                className="
                  absolute
                  -right-5
                  top-10

                  flex
                  h-16
                  w-16
                  items-center
                  justify-center

                  rounded-full

                  border
                  border-[#a5c28d]/30

                  bg-[#173934]/90

                  text-[#a9c798]

                  shadow-lg

                  backdrop-blur-md
                "
              >
                <ArrowUpRight size={23} strokeWidth={1.4} />
              </div>
            </div>
          </motion.div>

          {/* ================= RIGHT SIDE MESSAGE ================= */}

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              overflow-hidden
              rounded-[28px]
              border
              border-white/10
              bg-white/[0.045]
              p-7
              shadow-[0_25px_70px_rgba(0,0,0,0.15)]
              backdrop-blur-md
              sm:p-10
              lg:p-12
            "
          >
            {/* CARD TEXTURE */}

            <div
              className="
                pointer-events-none
                absolute
                right-0
                top-0
                h-[240px]
                w-[240px]
                rounded-full
                bg-[#6f9f80]/10
                blur-[65px]
              "
            />

            {/* LARGE BACKGROUND QUOTE */}

            <div
              className="
                pointer-events-none
                absolute
                -right-2
                -top-14
                select-none
                text-[260px]
                font-serif
                leading-none
                text-white/[0.025]
              "
            >
              ”
            </div>

            {/* QUOTE ICON */}

            <div
              className="
                relative
                mb-7
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                border
                border-[#9abb87]/20
                bg-[#84a873]/10
                text-[#aac995]
              "
            >
              <Quote size={28} strokeWidth={1.4} />
            </div>

            {/* MESSAGE */}

            <blockquote
              className="
                relative
                max-w-[760px]
                text-[20px]
                font-medium
                leading-[1.65]
                text-[#e4ece8]

                sm:text-[25px]
                lg:text-[29px]
              "
            >
              “Our mission has always been simple — to provide businesses
              with reliable financial guidance, practical solutions, and the
              confidence to make better decisions for the future.”
            </blockquote>

            {/* DESCRIPTION */}

            <p className="relative mt-7 max-w-[680px] text-sm leading-7 text-[#aebfba]">
              We believe that professional advisory services should go beyond
              compliance. Our focus is on understanding every client's
              challenges, supporting their growth, and building relationships
              based on trust and long-term value.
            </p>

            {/* BOTTOM */}

            <div className="relative mt-10 flex items-center justify-between border-t border-white/10 pt-7">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9abca0]">
                  KS & Company
                </p>

                <p className="mt-2 text-sm text-[#8fa39d]">
                  Your financial goals, our priority.
                </p>
              </div>

              <div className="hidden h-px w-20 bg-[#a5c28d]/30 sm:block" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CEOMessage;