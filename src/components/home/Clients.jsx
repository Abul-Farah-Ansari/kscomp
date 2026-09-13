import React from "react";
import { motion } from "framer-motion";

/* =========================================================
   CLIENT DATA
========================================================= */

const clients = [
  {
    name: "Zaib Infotech",
    logo: "/images/clients/zaib-infotech.png",
    type: "image",
  },
  {
    name: "Expert Organizers",
    logo: "/images/clients/expert-organizers.png",
    type: "image",
  },
  {
    name: "Zen nex",
    initials: "ZN",
    type: "text",
  },
  {
    name: "Alvida tour and travels",
    logo: "/images/clients/alvida-tours.png",
    type: "image",
  },
  {
    name: "AR printing and packaging",
    initials: "AR",
    type: "text",
  },
  {
    name: "Ak printing hub",
    initials: "AK",
    type: "text",
  },
];


/* =========================================================
   CLIENTS COMPONENT
========================================================= */

const Clients = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#f4f7f5] py-14 sm:py-20 lg:py-24">

      <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-8 lg:px-12 xl:px-16">

        {/* =================================================
            HEADER
        ================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mb-10
            flex
            flex-col
            gap-5

            sm:mb-12
            sm:flex-row
            sm:items-end
            sm:justify-between
          "
        >

          {/* LEFT */}

          <div className="max-w-[750px]">

            {/* SMALL TITLE */}

            <div className="mb-3 flex items-center gap-3">

              <span className="h-[2px] w-8 shrink-0 bg-[#326844] sm:w-9" />

              <span
                className="
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[2.5px]
                  text-[#326844]

                  sm:text-[10px]
                  sm:tracking-[3px]
                "
              >
                Our Clients
              </span>

            </div>


            {/* MAIN TITLE */}

            <h2
              className="
                text-[30px]
                font-semibold
                leading-[1.12]
                tracking-[-0.8px]
                text-[#1e2d30]

                sm:text-[42px]
                sm:tracking-[-1px]

                lg:text-[44px]
              "
            >
              Trusted by those who

              <span
                className="
                  block
                  text-[#285b68]

                  sm:ml-2
                  sm:inline
                "
              >
                value expertise.
              </span>

            </h2>

          </div>


          {/* DESCRIPTION */}

          <p
            className="
              max-w-[360px]
              text-[12px]
              leading-6
              text-[#728082]

              sm:text-right
            "
          >
            Building long-term relationships through professional expertise,
            trust and consistent financial support.
          </p>

        </motion.div>


        {/* =================================================
            CLIENT LOGO GRID
        ================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            delay: 0.15,
          }}
          className="
            w-full
            overflow-hidden
            rounded-[18px]
            border
            border-[#1e5260]/10
            bg-white
            shadow-[0_15px_50px_rgba(25,55,48,0.05)]
          "
        >

          <div className="grid w-full grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">

            {clients.map((client, index) => (

              <motion.div
                key={client.name}
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
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="
                  group
                  relative
                  flex
                  min-h-[190px]
                  w-full
                  min-w-0
                  flex-col
                  items-center
                  justify-center
                  overflow-hidden

                  border-b
                  border-r
                  border-[#1e5260]/10

                  px-4
                  py-8

                  transition-all
                  duration-500

                  hover:bg-[#f8faf9]

                  sm:min-h-[205px]
                  sm:px-5
                  sm:py-9

                  lg:min-h-[225px]
                  lg:border-b-0

                  last:border-r-0
                "
              >

                {/* =================================================
                    NUMBER
                ================================================== */}

                <span
                  className="
                    absolute
                    left-4
                    top-4
                    z-20

                    text-[8px]
                    font-semibold
                    tracking-[1.8px]

                    text-[#326844]/40

                    transition-colors
                    duration-300

                    group-hover:text-[#326844]
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </span>


                {/* =================================================
                    SUBTLE TOP ACCENT
                ================================================== */}

                <div
                  className="
                    absolute
                    left-1/2
                    top-0
                    h-[2px]
                    w-0
                    -translate-x-1/2

                    bg-[#326844]

                    transition-all
                    duration-500

                    group-hover:w-16
                  "
                />


                {/* =================================================
                    LOGO AREA
                ================================================== */}

                <div
                  className="
                    relative
                    z-10

                    flex
                    h-[95px]
                    w-full
                    items-center
                    justify-center

                    transition-transform
                    duration-500

                    group-hover:-translate-y-1
                  "
                >

                  {/* =================================================
                      IMAGE LOGO
                  ================================================== */}

                  {client.type === "image" && (
                    <div
                      className="
                        flex
                        h-[88px]
                        w-[150px]
                        items-center
                        justify-center
                        rounded-xl
                        bg-white

                        transition-all
                        duration-500

                        group-hover:scale-105
                      "
                    >

                      <img
                        src={client.logo}
                        alt={`${client.name} logo`}
                        loading="lazy"
                        className="
                          block
                          h-auto
                          max-h-[78px]
                          w-auto
                          max-w-[145px]
                          object-contain

                          opacity-100

                          transition-all
                          duration-500
                        "
                      />

                    </div>
                  )}


                  {/* =================================================
                      TEXT / ALPHABET LOGO
                  ================================================== */}

                  {client.type === "text" && (
                    <div
                      className="
                        relative
                        flex
                        h-[82px]
                        w-[82px]
                        items-center
                        justify-center
                        overflow-hidden
                        rounded-[20px]

                        border
                        border-[#326844]/20

                        bg-[#eef4f0]

                        shadow-[0_8px_25px_rgba(50,104,68,0.08)]

                        transition-all
                        duration-500

                        group-hover:scale-105
                        group-hover:border-[#326844]/40
                        group-hover:shadow-[0_12px_30px_rgba(50,104,68,0.12)]
                      "
                    >

                      {/* Decorative shape */}

                      <div
                        className="
                          absolute
                          -right-5
                          -top-5
                          h-14
                          w-14
                          rounded-full
                          bg-[#326844]/10
                        "
                      />

                      <div
                        className="
                          absolute
                          -bottom-6
                          -left-5
                          h-16
                          w-16
                          rounded-full
                          bg-[#285b68]/10
                        "
                      />


                      {/* Initials */}

                      <span
                        className="
                          relative
                          z-10

                          text-[22px]
                          font-bold
                          tracking-[2px]
                          text-[#326844]

                          transition-colors
                          duration-300

                          group-hover:text-[#285b68]
                        "
                      >
                        {client.initials}
                      </span>

                    </div>
                  )}

                </div>


                {/* =================================================
                    CLIENT NAME
                ================================================== */}

                <div
                  className="
                    relative
                    z-10
                    mt-5
                    flex
                    min-h-[42px]
                    w-full
                    items-center
                    justify-center
                    px-2
                    text-center
                  "
                >

                  <span
                    className="
                      max-w-[180px]

                      text-[11px]
                      font-semibold
                      uppercase
                      leading-[1.45]
                      tracking-[1px]

                      text-[#30403d]

                      transition-all
                      duration-300

                      group-hover:text-[#326844]

                      sm:text-[12px]
                      sm:tracking-[1.15px]
                    "
                  >
                    {client.name}
                  </span>

                </div>


                {/* =================================================
                    BOTTOM DECORATIVE LINE
                ================================================== */}

                <div
                  className="
                    absolute
                    bottom-5
                    left-1/2
                    h-[1px]
                    w-5
                    -translate-x-1/2

                    bg-[#326844]/20

                    transition-all
                    duration-500

                    group-hover:w-10
                    group-hover:bg-[#326844]/50
                  "
                />

              </motion.div>

            ))}

          </div>

        </motion.div>


        {/* =================================================
            BOTTOM
        ================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            delay: 0.3,
          }}
          className="
            mt-7

            flex
            flex-col
            gap-4

            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >

          {/* TRUST MESSAGE */}

          <div className="flex items-center gap-3">

            <span
              className="
                h-2
                w-2
                shrink-0
                rounded-full
                bg-[#75b43c]
              "
            />

            <span
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[1.5px]
                text-[#687779]

                sm:text-[10px]
                sm:tracking-[2px]
              "
            >
              Partnerships built on trust
            </span>

          </div>


          {/* COMPANY */}

          <span
            className="
              text-[9px]
              uppercase
              tracking-[1.5px]
              text-[#9aa5a6]

              sm:text-[10px]
              sm:tracking-[2px]
            "
          >
            K S &amp; Company
          </span>

        </motion.div>

      </div>

    </section>
  );
};

export default Clients;