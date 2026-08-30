import React from "react";
import { motion } from "framer-motion";

const WhoWeAre = () => {
  return (
    <section className="bg-[#ffffff] py-28 sm:py-36">

      <div className="mx-auto grid max-w-[1280px] gap-16 px-6 sm:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:px-14">

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4">
            <div className="h-px w-14 bg-[#102b29]/50" />

            <p className="text-xs font-semibold uppercase tracking-[5px] text-[#102b29]/60">
              Who We Are
            </p>
          </div>

          <h2 className="mt-8 text-4xl font-bold leading-tight tracking-tight text-[#102b29] sm:text-5xl">
            A Professional Partner
            <br />
            For Important Decisions.
          </h2>

          <div className="mt-10 h-[3px] w-20 bg-[#102b29]" />
        </motion.div>


        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6 text-[17px] leading-8 text-[#102b29]/70"
        >
          <p>
            KS & Company is focused on providing dependable and practical
            professional support for individuals and businesses with taxation,
            insurance, financial planning and advisory requirements.
          </p>

          <p>
            We understand that financial matters often involve complex
            processes, changing requirements and decisions that can have a
            long-term impact. This is why we believe professional guidance
            should always be clear, responsible and based on a genuine
            understanding of the client's circumstances.
          </p>

          <p>
            Our approach is not based on generic solutions. Every individual
            and business has different priorities, responsibilities and
            objectives. Taking the time to understand those differences allows
            us to provide guidance that is more relevant and practical.
          </p>

          <p>
            We aim to develop long-term professional relationships where
            clients can feel confident seeking guidance as their requirements
            evolve. Trust, consistency and transparent communication remain at
            the centre of how we work.
          </p>

          <p>
            At KS & Company, our objective goes beyond completing a service.
            We aim to become a dependable professional partner throughout our
            client's financial journey.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default WhoWeAre;