import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

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
   ADDITIONAL CLIENTS
========================================================= */

const additionalClients = [
  {
    name: "BROSWEL RESEARCH INDIA Pvt. Ltd",
    initials: "BR",
  },
  {
    name: "CORRO VISTA PRIVATE LIMITED",
    initials: "CV",
  },
  {
    name: "HAND TO HAND SERVICES PRIVATE LIMITED",
    initials: "HH",
  },
  {
    name: "IRIUM LABS (OPC) PRIVATE LIMITED",
    initials: "IL",
  },
  {
    name: "KUSCO PRIVATE LIMITED",
    initials: "KP",
  },
  {
    name: "MAS ELECTRA TECH PRIVATE LIMITED",
    initials: "ME",
  },
  {
    name: "MOONEXT CONSTRUCTIONS PRIVATE LIMITED",
    initials: "MC",
  },
  {
    name: "NEXUS WORKFORCE PRIVATE LIMITED",
    initials: "NW",
  },
  {
    name: "NUSKY INFRATECH PRIVATE LIMITED",
    initials: "NI",
  },
  {
    name: "Payexcel Business Solutions Private Limited",
    initials: "PB",
  },
  {
    name: "RADIATION POWER PRIVATE LIMITED",
    initials: "RP",
  },
  {
    name: "Scrapjet Private Limited",
    initials: "SP",
  },
];

/* =========================================================
   HR COMPLIANCE CLIENTS
========================================================= */

const hrComplianceClients = [
  {
    name: "Indian Oil Corporation Limited",
    location: "Barauni, Bihar",
    initials: "IOCL",
    logo: "../../../public/images/hr-compliance/iocl_square.png",
  },
  {
    name: "Jakson Limited",
    location: "India",
    initials: "JAKSON",
    logo: "../../../public/images/hr-compliance/jakson_square.png",
  },
  {
    name: "Sterling & Wilson Private Limited",
    location: "India",
    initials: "S&W",
    logo: "../../../public/images/hr-compliance/sterling_wilson_square.png",
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
        ================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-10 flex flex-col gap-5 sm:mb-12 sm:flex-row sm:items-end sm:justify-between"
        >
          <div className="max-w-[750px]">

            <div className="mb-3 flex items-center gap-3">
              <span className="h-[2px] w-8 shrink-0 bg-[#326844] sm:w-9" />

              <span className="text-[9px] font-semibold uppercase tracking-[2.5px] text-[#326844] sm:text-[10px] sm:tracking-[3px]">
                Our Clients
              </span>
            </div>

            <h2 className="text-[30px] font-semibold leading-[1.12] tracking-[-0.8px] text-[#1e2d30] sm:text-[42px] sm:tracking-[-1px] lg:text-[44px]">
              Trusted by those who{" "}
              <span className="block text-[#285b68] sm:ml-2 sm:inline">
                value expertise.
              </span>
            </h2>
          </div>

          <p className="max-w-[360px] text-[12px] leading-6 text-[#728082] sm:text-right">
            Building long-term relationships through professional expertise,
            trust and consistent financial support.
          </p>
        </motion.div>

        {/* =================================================
            CLIENT LOGO GRID
        ================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            delay: 0.15,
          }}
          className="w-full overflow-hidden rounded-[18px] border border-[#1e5260]/10 bg-white shadow-[0_15px_50px_rgba(25,55,48,0.05)]"
        >
          <div className="grid w-full grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">

            {clients.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="group relative flex min-h-[190px] w-full min-w-0 flex-col items-center justify-center overflow-hidden border-b border-r border-[#1e5260]/10 px-4 py-8 transition-all duration-500 hover:bg-[#f8faf9] sm:min-h-[205px] sm:px-5 sm:py-9 lg:min-h-[225px] lg:border-b-0 last:border-r-0"
              >

                <span className="absolute left-4 top-4 z-20 text-[8px] font-semibold tracking-[1.8px] text-[#326844]/40 transition-colors duration-300 group-hover:text-[#326844]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="absolute left-1/2 top-0 h-[2px] w-0 -translate-x-1/2 bg-[#326844] transition-all duration-500 group-hover:w-16" />

                <div className="relative z-10 flex h-[95px] w-full items-center justify-center transition-transform duration-500 group-hover:-translate-y-1">

                  {/* IMAGE CLIENT */}
                  {client.type === "image" && (
                    <div className="flex h-[88px] w-[150px] items-center justify-center rounded-xl bg-white transition-all duration-500 group-hover:scale-105">

                      <img
                        src={client.logo}
                        alt={`${client.name} logo`}
                        loading="lazy"
                        className="block h-auto max-h-[78px] w-auto max-w-[145px] object-contain opacity-100 transition-all duration-500"
                      />

                    </div>
                  )}

                  {/* TEXT CLIENT */}
                  {client.type === "text" && (
                    <div className="relative flex h-[82px] w-[82px] items-center justify-center overflow-hidden rounded-[20px] border border-[#326844]/20 bg-[#eef4f0] shadow-[0_8px_25px_rgba(50,104,68,0.08)] transition-all duration-500 group-hover:scale-105 group-hover:border-[#326844]/40 group-hover:shadow-[0_12px_30px_rgba(50,104,68,0.12)]">

                      <div className="absolute -right-5 -top-5 h-14 w-14 rounded-full bg-[#326844]/10" />

                      <div className="absolute -bottom-6 -left-5 h-16 w-16 rounded-full bg-[#285b68]/10" />

                      <span className="relative z-10 text-[22px] font-bold tracking-[2px] text-[#326844] transition-colors duration-300 group-hover:text-[#285b68]">
                        {client.initials}
                      </span>

                    </div>
                  )}

                </div>

                <div className="relative z-10 mt-5 flex min-h-[42px] w-full items-center justify-center px-2 text-center">

                  <span className="max-w-[180px] text-[11px] font-semibold uppercase leading-[1.45] tracking-[1px] text-[#30403d] transition-all duration-300 group-hover:text-[#326844] sm:text-[12px] sm:tracking-[1.15px]">
                    {client.name}
                  </span>

                </div>

                <div className="absolute bottom-5 left-1/2 h-[1px] w-5 -translate-x-1/2 bg-[#326844]/20 transition-all duration-500 group-hover:w-10 group-hover:bg-[#326844]/50" />

              </motion.div>
            ))}

          </div>
        </motion.div>

        {/* =================================================
            ADDITIONAL CLIENTS
        ================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mt-14 sm:mt-16 lg:mt-20"
        >

          <div className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">

            <div>

              <div className="mb-3 flex items-center gap-3">

                <span className="h-px w-10 bg-[#c5a46d]" />

                <span className="text-[9px] font-semibold uppercase tracking-[2.8px] text-[#326844]">
                  Business Associations
                </span>

              </div>

              <h3 className="font-serif text-3xl font-medium leading-tight tracking-[-0.035em] text-[#1e2d30] sm:text-4xl lg:text-5xl">
                Our extended
                <span className="text-[#285b68]">
                  {" "}client network.
                </span>
              </h3>

            </div>

            <p className="max-w-[390px] text-xs leading-6 text-[#728082] sm:text-right sm:text-sm">
              Professional relationships built through trust, consistency and
              dependable financial support.
            </p>

          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

            {additionalClients.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.5,
                  delay: Math.min(index * 0.045, 0.3),
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative min-h-[118px] overflow-hidden border border-[#102b29]/10 bg-white px-5 py-5 shadow-[0_10px_30px_rgba(25,55,48,0.045)] transition-all duration-500 hover:-translate-y-1.5 hover:border-[#c5a46d]/55 hover:shadow-[0_20px_45px_rgba(25,55,48,0.09)]"
              >

                <div className="absolute bottom-0 left-0 top-0 w-[4px] bg-[#102b29] transition-colors duration-500 group-hover:bg-[#c5a46d]" />

                <div className="absolute right-0 top-0 h-10 w-10 border-b border-l border-[#c5a46d]/25 transition-all duration-500 group-hover:h-14 group-hover:w-14 group-hover:border-[#c5a46d]/55" />

                <div className="flex h-full items-center gap-4">

                  <div className="relative flex h-14 w-14 shrink-0 items-center justify-center border border-[#c5a46d]/35 bg-[#f5f3ed] transition-all duration-500 group-hover:border-[#c5a46d] group-hover:bg-[#102b29]">

                    <span className="font-serif text-sm font-semibold tracking-[1px] text-[#285b68] transition-colors duration-300 group-hover:text-[#c5a46d]">
                      {client.initials}
                    </span>

                    <span className="absolute -bottom-1.5 -right-1.5 flex h-5 w-5 items-center justify-center bg-[#c5a46d] text-[7px] font-bold text-[#102b29]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                  </div>

                  <div className="min-w-0 flex-1 pr-6">

                    <span className="text-[8px] font-bold uppercase tracking-[2px] text-[#326844]/45">
                      Business
                    </span>

                    <h4 className="mt-1.5 text-[12px] font-semibold leading-5 tracking-[-0.01em] text-[#243436] transition-colors duration-300 group-hover:text-[#285b68] sm:text-[13px]">
                      {client.name}
                    </h4>

                  </div>

                  <ArrowUpRight
                    size={17}
                    strokeWidth={1.5}
                    className="absolute bottom-4 right-4 text-[#102b29]/20 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#c5a46d]"
                  />

                </div>

                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#c5a46d] transition-all duration-500 group-hover:w-full" />

              </motion.div>
            ))}

          </div>

        </motion.div>

        {/* =================================================
            HR COMPLIANCE CLIENTS
        ================================================= */}

        <motion.section
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mt-16 overflow-hidden bg-[#102b29] px-5 py-12 sm:mt-20 sm:px-8 sm:py-14 lg:px-12 lg:py-16"
        >

          {/* Background Decorations */}

          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full border border-[#c5a46d]/15" />

          <div className="pointer-events-none absolute -bottom-28 -left-20 h-64 w-64 rounded-full border border-white/[0.06]" />

          <div className="pointer-events-none absolute right-[28%] top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-[#c5a46d]/[0.025] blur-3xl" />

          <div className="relative z-10">

            {/* HR HEADER */}

            <div className="mx-auto max-w-3xl text-center">

              <div className="mb-4 flex items-center justify-center gap-3">

                <span className="h-px w-9 bg-[#c5a46d]" />

                <span className="text-[9px] font-bold uppercase tracking-[2.8px] text-[#c5a46d]">
                  HR Compliance Services
                </span>

                <span className="h-px w-9 bg-[#c5a46d]" />

              </div>

              <h3 className="font-serif text-3xl font-medium leading-tight tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl">

                Professional HR compliance

                <span className="block text-[#c5a46d]">
                  support for established organizations.
                </span>

              </h3>

              <p className="mx-auto mt-5 max-w-2xl text-xs leading-6 text-white/55 sm:text-sm sm:leading-7">
                Our HR Compliance services have been delivered to
                organizations including Indian Oil Corporation Limited,
                Barauni, Bihar, Jakson Limited and Sterling &amp; Wilson
                Private Limited.
              </p>

            </div>

            {/* =================================================
                HR CLIENT CARDS
            ================================================= */}

            <div className="mx-auto mt-9 grid max-w-6xl grid-cols-1 gap-4 sm:mt-11 sm:grid-cols-3 sm:gap-5 lg:gap-6">

              {hrComplianceClients.map((client, index) => (
                <motion.div
                  key={client.name}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group relative min-h-[300px] overflow-hidden border border-white/10 bg-white p-5 shadow-[0_18px_50px_rgba(0,0,0,0.12)] transition-all duration-500 hover:-translate-y-2 hover:border-[#c5a46d]/60 hover:shadow-[0_28px_65px_rgba(0,0,0,0.22)] sm:min-h-[320px] sm:p-6"
                >

                  {/* TOP GOLD LINE */}

                  <span className="absolute left-5 top-5 font-serif text-[11px] font-medium tracking-[1px] text-[#c5a46d]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="absolute left-0 right-0 top-0 h-[3px] bg-[#c5a46d] opacity-40 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* =================================================
                      SQUARE LOGO AREA
                  ================================================= */}

                  <div className="flex h-[165px] w-full items-center justify-center pt-6">

                    <div className="flex h-[145px] w-[145px] items-center justify-center overflow-hidden rounded-xl border border-[#102b29]/10 bg-white p-4 shadow-[0_8px_25px_rgba(16,43,41,0.06)] transition-all duration-500 group-hover:scale-[1.04] group-hover:border-[#c5a46d]/50 group-hover:shadow-[0_12px_30px_rgba(16,43,41,0.10)] sm:h-[155px] sm:w-[155px]">

                      <img
                        src={client.logo}
                        alt={`${client.name} logo`}
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        className="h-full w-full object-contain transition-transform duration-700 ease-out"
                        onError={(event) => {
                          event.currentTarget.style.display = "none";

                          const fallback =
                            event.currentTarget.nextElementSibling;

                          if (fallback) {
                            fallback.style.display = "flex";
                          }
                        }}
                      />

                      {/* FALLBACK */}

                      <div className="hidden h-full w-full items-center justify-center bg-[#f7f5ef] px-3 text-center">

                        <span className="font-serif text-xl font-semibold tracking-[0.06em] text-[#285b68]">
                          {client.initials}
                        </span>

                      </div>

                    </div>

                  </div>

                  {/* DIVIDER */}

                  <div className="mx-auto h-px w-12 bg-[#c5a46d]/45 transition-all duration-500 group-hover:w-20" />

                  {/* CLIENT NAME */}

                  <div className="mt-4 text-center">

                    <h4 className="text-[13px] font-semibold leading-5 tracking-[-0.01em] text-[#102b29] transition-colors duration-300 group-hover:text-[#285b68] sm:text-sm">
                      {client.name}
                    </h4>

                    <p className="mt-1 text-[9px] font-semibold uppercase tracking-[1.8px] text-[#326844]/55">
                      {client.location}
                    </p>

                  </div>

                  {/* BOTTOM GOLD LINE */}

                  <div className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-[#c5a46d] transition-all duration-500 group-hover:w-20" />

                </motion.div>
              ))}

            </div>

            {/* =================================================
                HR FOOTNOTE
            ================================================= */}

            <div className="mx-auto mt-9 max-w-3xl border-t border-white/10 pt-6 text-center sm:mt-11">

              <p className="text-[10px] font-medium uppercase tracking-[2px] text-white/35">
                Trusted support • Professional compliance • Reliable delivery
              </p>

            </div>

          </div>

        </motion.section>

        {/* =================================================
            BOTTOM
        ================================================= */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            delay: 0.3,
          }}
          className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
        >

          <div className="flex items-center gap-3">

            <span className="h-2 w-2 shrink-0 rounded-full bg-[#75b43c]" />

            <span className="text-[9px] font-semibold uppercase tracking-[1.5px] text-[#687779] sm:text-[10px] sm:tracking-[2px]">
              Partnerships built on trust
            </span>

          </div>

          <span className="text-[9px] uppercase tracking-[1.5px] text-[#9aa5a6] sm:text-[10px] sm:tracking-[2px]">
            K S &amp; Company
          </span>

        </motion.div>

      </div>
    </section>
  );
};

export default Clients;