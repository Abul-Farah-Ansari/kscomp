import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Phone, MessageCircle } from "lucide-react";

const ServiceCTA = ({ data }) => {
  if (!data) return null;

  return (
    <section className="relative overflow-hidden bg-[#f4f1eb] py-20 sm:py-24 lg:py-32">
      {/* Decorative circles */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-[360px] w-[360px] rounded-full border border-[#c5a46d]/25" />
      <div className="pointer-events-none absolute -right-20 -top-20 h-[270px] w-[270px] rounded-full border border-[#c5a46d]/15" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[420px] w-[420px] rounded-full border border-[#285b68]/10" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative overflow-hidden rounded-[28px] bg-[#0b211f] px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20"
        >
          {/* Inner border */}
          <div className="pointer-events-none absolute inset-4 rounded-[22px] border border-[#c5a46d]/20 sm:inset-6" />

          {/* Glow */}
          <div className="pointer-events-none absolute right-[-100px] top-[-100px] h-[300px] w-[300px] rounded-full bg-[#c5a46d]/5 blur-3xl" />

          <div className="relative grid items-center gap-12 lg:grid-cols-[1fr_auto] lg:gap-16">
            {/* Content */}
            <div className="max-w-3xl">
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-10 bg-[#c5a46d]" />

                <span className="text-[10px] font-bold tracking-[0.28em] text-[#c5a46d] sm:text-xs">
                  LET'S WORK TOGETHER
                </span>
              </div>

              <h2 className="font-serif text-4xl font-medium leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
                Need professional
                <br />
                <span className="text-[#c5a46d]">support with {data.category?.toLowerCase()}?</span>
              </h2>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
                Tell us what you need. We'll understand your requirement and
                help you with a practical and reliable professional solution.
              </p>

              {/* Buttons */}
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
                <a
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#c5a46d] px-6 py-3.5 text-xs font-bold tracking-[0.08em] text-[#0b211f] transition-all duration-300 hover:bg-[#d5b97f] hover:shadow-[0_12px_35px_rgba(197,164,109,0.18)] sm:px-7"
                >
                  CONTACT US

                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.8}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>

                <a
                  href="https://wa.me/917004946933"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-white/20 px-6 py-3.5 text-xs font-bold tracking-[0.08em] text-white transition-all duration-300 hover:border-[#c5a46d]/60 hover:bg-white/5 sm:px-7"
                >
                  <MessageCircle
                    size={16}
                    strokeWidth={1.8}
                    className="text-[#c5a46d]"
                  />

                  WHATSAPP
                </a>
              </div>
            </div>

            {/* Contact block */}
            <div className="relative lg:min-w-[245px]">
              <div className="border-t border-white/15 pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                <span className="text-[10px] font-bold tracking-[0.22em] text-white/35">
                  DIRECT SUPPORT
                </span>

                <div className="mt-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#c5a46d]/30">
                    <Phone
                      size={16}
                      strokeWidth={1.6}
                      className="text-[#c5a46d]"
                    />
                  </div>

                  <div>
                    <p className="text-[10px] tracking-[0.12em] text-white/35">
                      CALL US
                    </p>

                    <a
                      href="tel:+911145128015"
                      className="mt-1 block text-sm font-medium text-white transition-colors hover:text-[#c5a46d]"
                    >
                      +91 1145128015
                    </a>
                  </div>
                </div>

                <div className="mt-6 border-t border-white/10 pt-6">
                  <p className="font-serif text-lg text-white">
                    Your Compliance,
                    <br />
                    <span className="text-[#c5a46d]">Our Commitment.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom metadata */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-7 flex flex-col gap-2 text-[10px] font-bold tracking-[0.18em] text-[#0b211f]/35 sm:flex-row sm:items-center sm:justify-between"
        >
          <span>K S & COMPANY</span>
          <span>{data.category?.toUpperCase()}</span>
          <span>PROFESSIONAL TAX & BUSINESS SERVICES</span>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceCTA;