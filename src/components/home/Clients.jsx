import React from "react";
import { motion } from "framer-motion";

/* =========================================================
   CLIENT LOGO IMPORTS
========================================================= */

import ZaibInfotechLogo from "../../assets/images/clients/zaib-infotech.png";
import ExpertOrganizersLogo from "../../assets/images/clients/expert-organizers.png";
import AlvidaToursLogo from "../../assets/images/clients/alvida-tours.png";

import IOCLLogo from "../../assets/hr-compliance/iocl_square.png";
import JaksonLogo from "../../assets/hr-compliance/jakson_square.png";
import SterlingWilsonLogo from "../../assets/hr-compliance/sterling_wilson_square.png";

/* =========================================================
   MAIN CLIENTS
   TOTAL = 16

   Removed:
   - Zen nex
   - Ak printing hub
========================================================= */

const clients = [
  {
    name: "Zaib Infotech",
    logo: ZaibInfotechLogo,
    type: "image",
  },

  {
    name: "Expert Organizers",
    logo: ExpertOrganizersLogo,
    type: "image",
  },

  {
    name: "Alvida Tour and Travels",
    logo: AlvidaToursLogo,
    type: "image",
  },

  {
    name: "AR Printing and Packaging",
    initials: "AR",
    type: "text",
  },

  {
    name: "BROSWEL RESEARCH INDIA Pvt. Ltd",
    initials: "BR",
    type: "text",
  },

  {
    name: "CORRO VISTA PRIVATE LIMITED",
    initials: "CV",
    type: "text",
  },

  {
    name: "HAND TO HAND SERVICES PRIVATE LIMITED",
    initials: "HH",
    type: "text",
  },

  {
    name: "IRIUM LABS (OPC) PRIVATE LIMITED",
    initials: "IL",
    type: "text",
  },

  {
    name: "KUSCO PRIVATE LIMITED",
    initials: "KP",
    type: "text",
  },

  {
    name: "MAS ELECTRA TECH PRIVATE LIMITED",
    initials: "ME",
    type: "text",
  },

  {
    name: "MOONEXT CONSTRUCTIONS PRIVATE LIMITED",
    initials: "MC",
    type: "text",
  },

  {
    name: "NEXUS WORKFORCE PRIVATE LIMITED",
    initials: "NW",
    type: "text",
  },

  {
    name: "NUSKY INFRATECH PRIVATE LIMITED",
    initials: "NI",
    type: "text",
  },

  {
    name: "Payexcel Business Solutions Private Limited",
    initials: "PB",
    type: "text",
  },

  {
    name: "RADIATION POWER PRIVATE LIMITED",
    initials: "RP",
    type: "text",
  },

  {
    name: "Scrapjet Private Limited",
    initials: "SP",
    type: "text",
  },
];

/* =========================================================
   SPLIT 16 CLIENTS INTO TWO ROWS
========================================================= */

const topClients = clients.slice(0, 8);
const bottomClients = clients.slice(8, 16);

/* =========================================================
   HR COMPLIANCE CLIENTS

   TOTAL = 4
========================================================= */

const hrComplianceClients = [
  {
    name: "Indian Oil Corporation Limited",
    location: "Barauni, Bihar",
    initials: "IOCL",
    logo: IOCLLogo,
    type: "image",
  },

  {
    name: "Jakson Limited",
    location: "India",
    initials: "JAKSON",
    logo: JaksonLogo,
    type: "image",
  },

  {
    name: "Sterling & Wilson Private Limited",
    location: "India",
    initials: "S&W",
    logo: SterlingWilsonLogo,
    type: "image",
  },

  {
    name: "ABC Company",
    location: "Delhi",
    initials: "ABC",
    type: "text",
  },
];

/* =========================================================
   CLIENT CARD
========================================================= */

const ClientCard = ({ client, index }) => {
  return (
    <div
      className="
        client-card
        group
        relative
        flex
        h-[178px]
        w-[255px]
        shrink-0
        flex-col
        items-center
        justify-center
        overflow-hidden
        rounded-[4px]
        border
        border-[#102b29]/[0.07]
        bg-white
        px-6
        py-6
        transition-all
        duration-500
        hover:-translate-y-1
        hover:border-[#c5a46d]/45
        hover:shadow-[0_20px_45px_rgba(16,43,41,0.09)]
        sm:h-[188px]
        sm:w-[275px]
      "
    >
      {/* TOP GOLD ACCENT */}

      <div
        className="
          absolute
          left-1/2
          top-0
          h-[2px]
          w-0
          -translate-x-1/2
          bg-[#c5a46d]
          transition-all
          duration-500
          group-hover:w-20
        "
      />

      {/* NUMBER */}

      <div
        className="
          absolute
          left-5
          top-4
          flex
          items-center
          gap-2
        "
      >
        <span
          className="
            text-[8px]
            font-semibold
            tracking-[2px]
            text-[#326844]/35
            transition-colors
            duration-300
            group-hover:text-[#c5a46d]
          "
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        <span
          className="
            h-px
            w-5
            bg-[#326844]/15
            transition-all
            duration-300
            group-hover:w-8
            group-hover:bg-[#c5a46d]/50
          "
        />
      </div>

      {/* DECORATIVE CORNER */}

      <div
        className="
          pointer-events-none
          absolute
          right-0
          top-0
          h-12
          w-12
          border-b
          border-l
          border-[#c5a46d]/0
          transition-all
          duration-500
          group-hover:h-16
          group-hover:w-16
          group-hover:border-[#c5a46d]/30
        "
      />

      {/* CLIENT VISUAL */}

      <div
        className="
          relative
          z-10
          flex
          h-[78px]
          w-full
          items-center
          justify-center
          transition-transform
          duration-500
          group-hover:-translate-y-1
        "
      >
        {/* IMAGE CLIENT */}

        {client.type === "image" && client.logo && (
          <div
            className="
              flex
              h-[76px]
              w-[155px]
              items-center
              justify-center
              rounded-xl
              bg-white
              transition-all
              duration-500
              group-hover:scale-[1.04]
            "
          >
            <img
              src={client.logo}
              alt={`${client.name} logo`}
              loading="lazy"
              className="
                block
                max-h-[68px]
                max-w-[145px]
                object-contain
              "
            />
          </div>
        )}

        {/* TEXT CLIENT */}

        {client.type === "text" && (
          <div
            className="
              relative
              flex
              h-[68px]
              w-[68px]
              items-center
              justify-center
              overflow-hidden
              rounded-full
              border
              border-[#326844]/15
              bg-[#f2f6f3]
              transition-all
              duration-500
              group-hover:scale-105
              group-hover:border-[#c5a46d]/55
              group-hover:bg-[#102b29]
            "
          >
            <div
              className="
                absolute
                -right-4
                -top-4
                h-12
                w-12
                rounded-full
                bg-[#c5a46d]/10
              "
            />

            <div
              className="
                absolute
                -bottom-5
                -left-5
                h-14
                w-14
                rounded-full
                bg-[#285b68]/10
              "
            />

            <span
              className="
                relative
                z-10
                text-[18px]
                font-bold
                tracking-[2px]
                text-[#326844]
                transition-colors
                duration-300
                group-hover:text-[#c5a46d]
              "
            >
              {client.initials}
            </span>
          </div>
        )}
      </div>

      {/* GOLD DIVIDER */}

      <div
        className="
          relative
          z-10
          mt-3
          h-px
          w-8
          bg-[#c5a46d]/35
          transition-all
          duration-500
          group-hover:w-14
          group-hover:bg-[#c5a46d]
        "
      />

      {/* CLIENT NAME */}

      <div
        className="
          relative
          z-10
          mt-3
          flex
          min-h-[35px]
          w-full
          items-center
          justify-center
          text-center
        "
      >
        <span
          className="
            max-w-[215px]
            text-[9px]
            font-semibold
            uppercase
            leading-[1.45]
            tracking-[1.1px]
            text-[#33423f]
            transition-colors
            duration-300
            group-hover:text-[#285b68]
            sm:text-[10px]
          "
        >
          {client.name}
        </span>
      </div>

      {/* BOTTOM GOLD LINE */}

      <div
        className="
          absolute
          bottom-0
          left-1/2
          h-[2px]
          w-0
          -translate-x-1/2
          bg-[#c5a46d]
          transition-all
          duration-500
          group-hover:w-24
        "
      />
    </div>
  );
};

/* =========================================================
   MARQUEE
========================================================= */

const ClientMarquee = ({ clients, reverse = false }) => {
  const duplicatedClients = [
    ...clients,
    ...clients,
    ...clients,
  ];

  return (
    <div className="group/marquee relative overflow-hidden">
      {/* LEFT FADE */}

      <div
        className="
          pointer-events-none
          absolute
          left-0
          top-0
          z-30
          h-full
          w-14
          bg-gradient-to-r
          from-white
          via-white/90
          to-transparent
          sm:w-24
        "
      />

      {/* RIGHT FADE */}

      <div
        className="
          pointer-events-none
          absolute
          right-0
          top-0
          z-30
          h-full
          w-14
          bg-gradient-to-l
          from-white
          via-white/90
          to-transparent
          sm:w-24
        "
      />

      {/* MARQUEE TRACK */}

      <div
        className={`
          flex
          w-max
          gap-4
          py-3
          sm:gap-5
          sm:py-4
          ${
            reverse
              ? "animate-client-marquee-reverse"
              : "animate-client-marquee"
          }
          group-hover/marquee:[animation-play-state:paused]
        `}
      >
        {duplicatedClients.map((client, index) => (
          <ClientCard
            key={`${client.name}-${index}`}
            client={client}
            index={index % clients.length}
          />
        ))}
      </div>
    </div>
  );
};

/* =========================================================
   CLIENTS COMPONENT
========================================================= */

const Clients = () => {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-[#f4f6f3]
        py-16
        sm:py-20
        lg:py-24
      "
    >
      {/* =====================================================
          BACKGROUND DETAILS
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-32
          top-24
          h-72
          w-72
          rounded-full
          bg-[#326844]/[0.025]
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-32
          bottom-20
          h-80
          w-80
          rounded-full
          bg-[#c5a46d]/[0.035]
          blur-3xl
        "
      />

      <div
        className="
          relative
          mx-auto
          w-full
          max-w-[1600px]
          px-5
          sm:px-8
          lg:px-12
          xl:px-16
        "
      >
        {/* =================================================
            HEADER
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
            amount: 0.25,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mb-11
            flex
            flex-col
            gap-5
            sm:mb-14
            sm:flex-row
            sm:items-end
            sm:justify-between
          "
        >
          <div className="max-w-[760px]">
            <div
              className="
                mb-4
                flex
                items-center
                gap-3
              "
            >
              <span
                className="
                  h-px
                  w-10
                  bg-[#c5a46d]
                "
              />

              <span
                className="
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[3px]
                  text-[#326844]
                  sm:text-[10px]
                "
              >
                Our Clients
              </span>

              <span
                className="
                  h-px
                  w-5
                  bg-[#326844]/25
                "
              />
            </div>

            <h2
              className="
                font-serif
                text-[38px]
                font-medium
                leading-[1.05]
                tracking-[-1.5px]
                text-[#102b29]
                sm:text-[48px]
                lg:text-[54px]
              "
            >
              Trusted relationships,

              <span
                className="
                  block
                  text-[#285b68]
                "
              >
                built over time.
              </span>
            </h2>
          </div>

          <div
            className="
              flex
              max-w-[380px]
              items-start
              gap-4
              sm:items-end
              sm:text-right
            "
          >
            <div
              className="
                mt-1
                h-8
                w-[2px]
                shrink-0
                bg-[#c5a46d]
                sm:hidden
              "
            />

            <p
              className="
                text-[12px]
                leading-6
                text-[#6f7d7c]
                sm:text-[13px]
              "
            >
              Professional relationships built through trust,
              consistency and dependable financial support.
            </p>
          </div>
        </motion.div>

        {/* =================================================
            CLIENT MARQUEE
        ================================================= */}

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
            amount: 0.2,
          }}
          transition={{
            duration: 0.8,
            delay: 0.1,
          }}
          className="
            relative
            overflow-hidden
            rounded-[10px]
            border
            border-[#102b29]/[0.06]
            bg-white
            py-5
            shadow-[0_20px_70px_rgba(16,43,41,0.055)]
            sm:py-7
          "
        >
          {/* TOP LABEL */}

          <div
            className="
              flex
              items-center
              justify-center
              gap-3
              pb-2
              sm:pb-3
            "
          >
            <span
              className="
                h-px
                w-7
                bg-[#c5a46d]/60
              "
            />

            <span
              className="
                text-[7px]
                font-semibold
                uppercase
                tracking-[3px]
                text-[#326844]/55
              "
            >
              Selected Client Network
            </span>

            <span
              className="
                h-px
                w-7
                bg-[#c5a46d]/60
              "
            />
          </div>

          {/* TOP 8 */}

          <ClientMarquee
            clients={topClients}
            reverse={false}
          />

          {/* CENTER DIVIDER */}

          <div
            className="
              mx-8
              flex
              items-center
              gap-4
              py-1
              sm:mx-12
              sm:py-2
            "
          >
            <span
              className="
                h-px
                flex-1
                bg-[#102b29]/[0.07]
              "
            />

            <span
              className="
                h-1.5
                w-1.5
                rotate-45
                bg-[#c5a46d]
              "
            />

            <span
              className="
                h-px
                flex-1
                bg-[#102b29]/[0.07]
              "
            />
          </div>

          {/* BOTTOM 8 */}

          <ClientMarquee
            clients={bottomClients}
            reverse={true}
          />

          {/* BOTTOM LABEL */}

          <div
            className="
              flex
              items-center
              justify-center
              gap-3
              pt-2
              sm:pt-3
            "
          >
            <span
              className="
                h-px
                w-7
                bg-[#c5a46d]/60
              "
            />

            <span
              className="
                text-[7px]
                font-semibold
                uppercase
                tracking-[3px]
                text-[#326844]/55
              "
            >
              Long-Term Partnerships
            </span>

            <span
              className="
                h-px
                w-7
                bg-[#c5a46d]/60
              "
            />
          </div>
        </motion.div>

        {/* =================================================
            TRUST FOOTER
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
            delay: 0.25,
          }}
          className="
            mt-7
            flex
            items-center
            justify-between
          "
        >
          <div
            className="
              flex
              items-center
              gap-3
            "
          >
            <span className="relative flex h-2 w-2">
              <span
                className="
                  absolute
                  inline-flex
                  h-full
                  w-full
                  animate-ping
                  rounded-full
                  bg-[#75b43c]/40
                "
              />

              <span
                className="
                  relative
                  inline-flex
                  h-2
                  w-2
                  rounded-full
                  bg-[#75b43c]
                "
              />
            </span>

            <span
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[2px]
                text-[#687779]
              "
            >
              16 trusted business relationships
            </span>
          </div>

          <span
            className="
              hidden
              text-[9px]
              uppercase
              tracking-[2px]
              text-[#a0aaaa]
              sm:block
            "
          >
            K S &amp; Company
          </span>
        </motion.div>

        {/* =================================================
            HR COMPLIANCE SECTION
        ================================================= */}

        <motion.section
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
            amount: 0.12,
          }}
          transition={{
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            mt-20
            overflow-hidden
            rounded-[4px]
            bg-[#102b29]
            px-5
            py-12
            sm:px-8
            sm:py-14
            lg:px-12
            lg:py-16
          "
        >
          {/* HR BACKGROUND DECORATIONS */}

          <div
            className="
              pointer-events-none
              absolute
              -right-24
              -top-24
              h-64
              w-64
              rounded-full
              border
              border-[#c5a46d]/15
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -bottom-28
              -left-20
              h-64
              w-64
              rounded-full
              border
              border-white/[0.06]
            "
          />

          <div className="relative z-10">
            {/* HR HEADER */}

            <div className="mx-auto max-w-3xl text-center">
              <div
                className="
                  mb-4
                  flex
                  items-center
                  justify-center
                  gap-3
                "
              >
                <span
                  className="
                    h-px
                    w-9
                    bg-[#c5a46d]
                  "
                />

                <span
                  className="
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[2.8px]
                    text-[#c5a46d]
                  "
                >
                  HR Compliance Services
                </span>

                <span
                  className="
                    h-px
                    w-9
                    bg-[#c5a46d]
                  "
                />
              </div>

              <h3
                className="
                  font-serif
                  text-3xl
                  font-medium
                  leading-tight
                  tracking-[-0.035em]
                  text-white
                  sm:text-4xl
                  lg:text-5xl
                "
              >
                Professional HR compliance

                <span
                  className="
                    block
                    text-[#c5a46d]
                  "
                >
                  support for established organizations.
                </span>
              </h3>

              <p
                className="
                  mx-auto
                  mt-5
                  max-w-2xl
                  text-xs
                  leading-6
                  text-white/55
                  sm:text-sm
                  sm:leading-7
                "
              >
                Our HR Compliance services have been delivered to
                organizations including Indian Oil Corporation Limited,
                Barauni, Bihar, Jakson Limited, Sterling &amp; Wilson
                Private Limited and ABC Company, Delhi.
              </p>
            </div>

            {/* HR CLIENT CARDS — 4 CLIENTS */}

            <div
              className="
                mx-auto
                mt-10
                grid
                max-w-6xl
                grid-cols-1
                gap-4
                sm:grid-cols-2
                lg:grid-cols-4
                lg:gap-5
              "
            >
              {hrComplianceClients.map((client, index) => (
                <motion.div
                  key={client.name}
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
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    group
                    relative
                    min-h-[300px]
                    overflow-hidden
                    border
                    border-white/10
                    bg-white
                    p-5
                    shadow-[0_18px_50px_rgba(0,0,0,0.12)]
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    hover:border-[#c5a46d]/60
                    hover:shadow-[0_28px_65px_rgba(0,0,0,0.22)]
                    sm:min-h-[320px]
                    sm:p-6
                  "
                >
                  {/* TOP NUMBER */}

                  <span
                    className="
                      absolute
                      left-5
                      top-5
                      font-serif
                      text-[11px]
                      font-medium
                      tracking-[1px]
                      text-[#c5a46d]
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* TOP GOLD LINE */}

                  <div
                    className="
                      absolute
                      left-0
                      right-0
                      top-0
                      h-[3px]
                      bg-[#c5a46d]
                      opacity-40
                      transition-opacity
                      duration-500
                      group-hover:opacity-100
                    "
                  />

                  {/* LOGO AREA */}

                  <div
                    className="
                      flex
                      h-[165px]
                      w-full
                      items-center
                      justify-center
                      pt-6
                    "
                  >
                    <div
                      className="
                        flex
                        h-[145px]
                        w-[145px]
                        items-center
                        justify-center
                        overflow-hidden
                        rounded-xl
                        border
                        border-[#102b29]/10
                        bg-white
                        p-4
                        shadow-[0_8px_25px_rgba(16,43,41,0.06)]
                        transition-all
                        duration-500
                        group-hover:scale-[1.04]
                        group-hover:border-[#c5a46d]/50
                        group-hover:shadow-[0_12px_30px_rgba(16,43,41,0.10)]
                      "
                    >
                      {client.logo ? (
                        <img
                          src={client.logo}
                          alt={`${client.name} logo`}
                          loading="lazy"
                          className="
                            h-full
                            w-full
                            object-contain
                          "
                        />
                      ) : (
                        <div
                          className="
                            relative
                            flex
                            h-full
                            w-full
                            items-center
                            justify-center
                            overflow-hidden
                            bg-[#f7f5ef]
                          "
                        >
                          <div
                            className="
                              absolute
                              -right-8
                              -top-8
                              h-24
                              w-24
                              rounded-full
                              bg-[#c5a46d]/10
                            "
                          />

                          <div
                            className="
                              absolute
                              -bottom-10
                              -left-8
                              h-28
                              w-28
                              rounded-full
                              bg-[#285b68]/10
                            "
                          />

                          <span
                            className="
                              relative
                              z-10
                              font-serif
                              text-2xl
                              font-semibold
                              tracking-[0.08em]
                              text-[#285b68]
                            "
                          >
                            {client.initials}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* DIVIDER */}

                  <div
                    className="
                      mx-auto
                      h-px
                      w-12
                      bg-[#c5a46d]/45
                      transition-all
                      duration-500
                      group-hover:w-20
                    "
                  />

                  {/* NAME */}

                  <div className="mt-4 text-center">
                    <h4
                      className="
                        text-[13px]
                        font-semibold
                        leading-5
                        text-[#102b29]
                        transition-colors
                        duration-300
                        group-hover:text-[#285b68]
                        sm:text-sm
                      "
                    >
                      {client.name}
                    </h4>

                    <p
                      className="
                        mt-1
                        text-[9px]
                        font-semibold
                        uppercase
                        tracking-[1.8px]
                        text-[#326844]/55
                      "
                    >
                      {client.location}
                    </p>
                  </div>

                  {/* BOTTOM GOLD LINE */}

                  <div
                    className="
                      absolute
                      bottom-0
                      left-1/2
                      h-[2px]
                      w-0
                      -translate-x-1/2
                      bg-[#c5a46d]
                      transition-all
                      duration-500
                      group-hover:w-20
                    "
                  />
                </motion.div>
              ))}
            </div>

            {/* HR FOOTNOTE */}

            <div
              className="
                mx-auto
                mt-9
                max-w-3xl
                border-t
                border-white/10
                pt-6
                text-center
              "
            >
              <p
                className="
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[2px]
                  text-white/35
                "
              >
                Trusted support • Professional compliance • Reliable delivery
              </p>
            </div>
          </div>
        </motion.section>
      </div>

      {/* =========================================================
          MARQUEE ANIMATIONS
      ========================================================= */}

      <style>{`
        @keyframes clientMarquee {
          0% {
            transform: translateX(0);
          }

          100% {
            transform: translateX(calc(-33.333% - 6px));
          }
        }

        @keyframes clientMarqueeReverse {
          0% {
            transform: translateX(calc(-33.333% - 6px));
          }

          100% {
            transform: translateX(0);
          }
        }

        .animate-client-marquee {
          animation:
            clientMarquee
            38s
            linear
            infinite;

          will-change: transform;
        }

        .animate-client-marquee-reverse {
          animation:
            clientMarqueeReverse
            43s
            linear
            infinite;

          will-change: transform;
        }

        .group\\/marquee:hover
        .animate-client-marquee,
        .group\\/marquee:hover
        .animate-client-marquee-reverse {
          animation-play-state: paused;
        }

        @media (max-width: 640px) {
          .animate-client-marquee {
            animation-duration: 30s;
          }

          .animate-client-marquee-reverse {
            animation-duration: 34s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-client-marquee,
          .animate-client-marquee-reverse {
            animation-play-state: paused;
          }
        }
      `}</style>
    </section>
  );
};

export default Clients;