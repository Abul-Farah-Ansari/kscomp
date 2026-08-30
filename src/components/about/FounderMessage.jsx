import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const FounderMessage = () => {
  return (
    <section className="bg-[#f4f3ef] py-28 sm:py-36">

      <div className="mx-auto grid max-w-[1280px] lg:grid-cols-2">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="px-6 py-16 sm:px-10 lg:px-14"
        >
          <div className="flex items-center gap-4">
            <div className="h-px w-14 bg-[#102b29]/50" />

            <p className="text-xs font-semibold uppercase tracking-[5px] text-[#102b29]/60">
              Leadership Message
            </p>
          </div>

          <h2 className="mt-8 text-4xl font-bold leading-tight text-[#102b29] sm:text-5xl">
            A Commitment
            <br />
            Beyond a Service.
          </h2>

          <p className="mt-8 max-w-xl leading-8 text-[#102b29]/70">
            We believe professional services should be built around
            responsibility, trust and a genuine understanding of the people
            and businesses we serve.
          </p>

          <p className="mt-5 max-w-xl leading-8 text-[#102b29]/70">
            Our goal is to build relationships where clients feel confident
            seeking professional guidance as their requirements continue to
            evolve.
          </p>
        </motion.div>


        {/* RIGHT DARK CARD */}

        <motion.div
          initial={{ opacity: 0, x: 35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden bg-[#102b29] px-8 py-16 sm:px-14 lg:px-16"
        >
          {/* Background circles */}

          <div className="absolute -right-20 -top-20 h-[300px] w-[300px] rounded-full border border-white/5" />

          <div className="absolute -right-5 -top-5 h-[220px] w-[220px] rounded-full border border-white/5" />

          <div className="relative">

            <Quote
              size={62}
              className="text-[#426b66]"
            />

            <blockquote className="mt-10 max-w-xl text-2xl font-medium leading-[1.7] text-white sm:text-3xl">
              "Professional trust is built through consistency, responsibility
              and the confidence clients develop in every interaction."
            </blockquote>

            <div className="mt-12 h-px w-full bg-white/10" />

            <div className="mt-8">
              <h4 className="text-lg font-semibold text-white">
                KS & Company
              </h4>

              <p className="mt-2 text-sm tracking-wide text-white/50">
                PROFESSIONAL ADVISORY TEAM
              </p>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default FounderMessage;