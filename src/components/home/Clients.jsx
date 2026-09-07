import React from "react";
import { motion } from "framer-motion";

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

const Clients = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#f4f7f5] py-14 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-8 lg:px-12 xl:px-16">

        {/* ================= HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mb-9
            flex
            flex-col
            gap-5

            sm:mb-10
            sm:flex-row
            sm:items-end
            sm:justify-between
          "
        >
          <div className="max-w-[750px]">

            {/* SMALL TITLE */}

            <div className="mb-3 flex items-center gap-3">
              <span className="h-[2px] w-8 shrink-0 bg-[#326844] sm:w-9" />

              <span className="text-[9px] font-semibold uppercase tracking-[2.5px] text-[#326844] sm:text-[10px] sm:tracking-[3px]">
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

              <span className="block text-[#285b68] sm:ml-2 sm:inline">
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


        {/* ================= CLIENT LOGO STRIP ================= */}

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
            border-y
            border-[#1e5260]/15
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
                  w-full
                  min-w-0
                  min-h-[115px]
                  items-center
                  justify-center
                  overflow-hidden
                  border-b
                  border-r
                  border-[#1e5260]/10
                  px-3
                  py-5

                  sm:min-h-[130px]
                  sm:px-5

                  lg:min-h-[140px]
                  lg:border-b-0
                "
              >

                {/* ================= NUMBER ================= */}

                <span
                  className="
                    absolute
                    left-3
                    top-3
                    z-20
                    text-[8px]
                    font-medium
                    tracking-[1.5px]
                    text-[#326844]/40
                    transition-colors
                    duration-300
                    group-hover:text-white/40

                    sm:text-[9px]
                    sm:tracking-[2px]
                  "
                >
                  0{index + 1}
                </span>


                {/* ================= HOVER BACKGROUND ================= */}

                <div
                  className="
                    absolute
                    inset-0
                    translate-y-full
                    bg-[#326844]
                    transition-transform
                    duration-500
                    ease-out
                    group-hover:translate-y-0
                  "
                />


                {/* ================= LOGO ================= */}

                <div
                  className="
                    relative
                    z-10
                    flex
                    min-w-0
                    items-center
                    justify-center
                    transition-all
                    duration-500
                    group-hover:-translate-y-5
                    group-hover:scale-90
                    group-hover:opacity-0
                  "
                >

                  {/* IMAGE LOGO */}

                  {client.type === "image" && (
                    <img
                      src={client.logo}
                      alt={`${client.name} logo`}
                      loading="lazy"
                      className="
                        h-auto
                        max-h-[48px]
                        max-w-[125px]
                        object-contain
                        grayscale
                        opacity-80
                        transition-all
                        duration-500
                        group-hover:grayscale-0

                        sm:max-h-[55px]
                        sm:max-w-[145px]

                        lg:max-h-[60px]
                        lg:max-w-[155px]
                      "
                    />
                  )}


                  {/* ================= ALPHABET LOGO ================= */}

                  {client.type === "text" && (
                    <div className="flex flex-col items-center justify-center">

                      {/* Alphabet mark */}

                      <div
                        className="
                          flex
                          h-[52px]
                          w-[52px]
                          items-center
                          justify-center
                          rounded-xl
                          border
                          border-[#326844]/30
                          bg-[#e9f0ec]
                          text-[17px]
                          font-bold
                          tracking-[1px]
                          text-[#326844]
                          transition-all
                          duration-500

                          group-hover:border-white/30
                          group-hover:bg-white/10
                          group-hover:text-white
                        "
                      >
                        {client.initials}
                      </div>

                      {/* Small client name */}

                      <span
                        className="
                          mt-2
                          max-w-[130px]
                          text-center
                          text-[8px]
                          font-semibold
                          uppercase
                          tracking-[1px]
                          text-[#6e7d79]
                          transition-colors
                          duration-500
                          group-hover:text-white/80
                        "
                      >
                        {client.name}
                      </span>

                    </div>
                  )}

                </div>


                {/* ================= CLIENT NAME ON HOVER ================= */}

                <div
                  className="
                    absolute
                    inset-0
                    z-10
                    flex
                    items-center
                    justify-center
                    translate-y-8
                    px-3
                    opacity-0
                    transition-all
                    duration-500
                    group-hover:translate-y-0
                    group-hover:opacity-100
                  "
                >
                  <span
                    className="
                      max-w-full
                      text-center
                      text-[11px]
                      font-semibold
                      uppercase
                      leading-5
                      tracking-[1px]
                      text-white

                      sm:text-[14px]
                      sm:tracking-[1.2px]
                    "
                  >
                    {client.name}
                  </span>
                </div>

              </motion.div>
            ))}

          </div>
        </motion.div>


        {/* ================= BOTTOM ================= */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            delay: 0.3,
          }}
          className="
            mt-6
            flex
            flex-col
            gap-4

            sm:mt-7
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >

          <div className="flex items-center gap-3">

            <span className="h-2 w-2 shrink-0 rounded-full bg-[#75b43c]" />

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
            KS & Company
          </span>

        </motion.div>

      </div>
    </section>
  );
};

export default Clients;