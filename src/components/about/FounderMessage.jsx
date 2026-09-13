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
            More Than a Service.
            <br />
            A Trusted Partnership.
          </h2>

          <p className="mt-8 max-w-xl leading-8 text-[#102b29]/70">
            Our approach is simple — understand the client, solve the problem
            and support long-term growth.
          </p>

          <p className="mt-5 max-w-xl leading-8 text-[#102b29]/70">
            We believe that professional services are not just about
            completing a task; they are about building trust, transparency and
            lasting relationships with our clients.
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
              “We believe that professional services are not just about
              completing a task; they are about building trust, transparency
              and lasting relationships with our clients.”
            </blockquote>

            <div className="mt-12 h-px w-full bg-white/10" />

            <div className="mt-8">
              <h4 className="text-lg font-semibold text-white">
                K S & Company
              </h4>

              <p className="mt-2 text-sm tracking-wide text-white/50">
                YOUR COMPLIANCE, OUR COMMITMENT.
              </p>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default FounderMessage;