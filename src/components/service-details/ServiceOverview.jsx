import React from "react";
import { motion } from "framer-motion";

const ServiceOverview = ({ data }) => {
  return (
    <section
      id="service-overview"
      className="
        relative
        w-full
        overflow-hidden
        bg-[#ffffff]
        py-24
        sm:py-28
        lg:py-36
      "
    >
      {/* =========================================================
          BACKGROUND DETAILS
      ========================================================== */}

      <div className="pointer-events-none absolute inset-0">

        <div
          className="
            absolute
            right-[-180px]
            top-[20%]
            h-[420px]
            w-[420px]
            rounded-full
            border
            border-[#0b211f]/[0.045]
          "
        />

        <div
          className="
            absolute
            left-[-120px]
            bottom-[5%]
            h-[280px]
            w-[280px]
            rounded-full
            border
            border-[#c5a46d]/15
          "
        />

      </div>

      {/* =========================================================
          CONTAINER
      ========================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1380px]
          px-6
          sm:px-10
          lg:px-14
          xl:px-20
        "
      >

        {/* =======================================================
            TOP LABEL
        ======================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            x: -20,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            flex
            items-center
            gap-4
          "
        >

          <span
            className="
              h-px
              w-12
              bg-[#c5a46d]
            "
          />

          <span
            className="
              text-[9px]
              font-semibold
              uppercase
              tracking-[4px]
              text-[#285b68]
              sm:text-[10px]
              sm:tracking-[5px]
            "
          >
            About This Service
          </span>

        </motion.div>


        {/* =======================================================
            MAIN CONTENT
        ======================================================== */}

        <div
          className="
            mt-12
            grid
            gap-14
            lg:grid-cols-[0.75fr_1.25fr]
            lg:gap-20
            xl:gap-28
          "
        >

          {/* =====================================================
              LEFT
          ====================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >

            <div
              className="
                flex
                items-start
                gap-5
              "
            >

              <span
                className="
                  pt-1
                  text-[12px]
                  font-semibold
                  tracking-[3px]
                  text-[#c5a46d]
                "
              >
                {data.number}
              </span>

              <div>

                <p
                  className="
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[3px]
                    text-[#0b211f]/45
                  "
                >
                  K S &amp; Company
                </p>

                <div
                  className="
                    mt-5
                    h-[2px]
                    w-16
                    bg-[#0b211f]
                  "
                />

              </div>

            </div>


            <h2
              className="
                mt-10
                max-w-[430px]
                text-[40px]
                font-semibold
                leading-[1.02]
                tracking-[-1.5px]
                text-[#0b211f]
                sm:text-[48px]
                lg:text-[54px]
                xl:text-[60px]
              "
            >
              Professional support
              <span className="block text-[#285b68]">
                with a practical approach.
              </span>
            </h2>

          </motion.div>


          {/* =====================================================
              RIGHT
          ====================================================== */}

          <motion.div
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
              amount: 0.25,
            }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              max-w-[720px]
            "
          >

            {/* INTRODUCTION */}

            <p
              className="
                text-[19px]
                font-medium
                leading-[1.55]
                tracking-[-0.2px]
                text-[#0b211f]/80
                sm:text-[21px]
                lg:text-[24px]
              "
            >
              {data.overview}
            </p>


            {/* DIVIDER */}

            <div
              className="
                my-9
                h-px
                w-full
                bg-[#0b211f]/10
              "
            />


            {/* SECONDARY TEXT */}

            <div
              className="
                grid
                gap-8
                sm:grid-cols-[1fr_auto]
                sm:items-end
              "
            >

              <div>

                <p
                  className="
                    max-w-[570px]
                    text-[13px]
                    leading-7
                    text-[#0b211f]/55
                    sm:text-[14px]
                  "
                >
                  Our approach is simple — understand the client,
                  solve the problem and support long-term growth.
                  We focus on practical, reliable and personalized
                  professional support based on each client's needs.
                </p>

              </div>


              {/* SMALL MARK */}

              <div
                className="
                  flex
                  h-16
                  w-16
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#c5a46d]/50
                "
              >

                <div
                  className="
                    h-2
                    w-2
                    rounded-full
                    bg-[#c5a46d]
                  "
                />

              </div>

            </div>

          </motion.div>

        </div>


        {/* =======================================================
            BOTTOM STATEMENT
        ======================================================== */}

        <motion.div
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
            amount: 0.25,
          }}
          transition={{
            duration: 0.7,
            delay: 0.15,
          }}
          className="
            mt-20
            border-t
            border-[#0b211f]/10
            pt-8
            sm:mt-24
          "
        >

          <div
            className="
              flex
              flex-col
              gap-5
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >

            <p
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[3px]
                text-[#0b211f]/40
              "
            >
              {data.category}
            </p>

            <p
              className="
                max-w-[500px]
                text-[11px]
                leading-5
                text-[#0b211f]/45
                sm:text-right
              "
            >
              Reliable professional support designed around
              clarity, accuracy and long-term client relationships.
            </p>

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default ServiceOverview;