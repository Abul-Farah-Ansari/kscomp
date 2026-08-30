import React from "react";
import { motion } from "framer-motion";

const ServicesIntro = () => {
  return (
    <section className="bg-white py-24 sm:py-28">

      <div className="mx-auto grid max-w-[1280px] gap-14 px-6 sm:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:px-14">

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-4">
            <div className="h-px w-14 bg-[#102b29]/40" />

            <p className="text-xs font-semibold uppercase tracking-[5px] text-[#102b29]/60">
              What We Offer
            </p>
          </div>

          <h2 className="mt-8 text-4xl font-bold leading-tight text-[#102b29] sm:text-5xl">
            Three Areas.
            <br />
            One Professional Partner.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-6 text-[17px] leading-8 text-[#102b29]/70"
        >
          <p>
            KS & Company provides professional assistance across three major
            areas that are important for individuals, families and businesses:
            taxation, insurance and financial services.
          </p>

          <p>
            Along with these primary services, we also provide support for
            business registrations, statutory documentation, accounting and
            other important compliance requirements.
          </p>

          <p>
            Our approach focuses on understanding the client's requirement,
            maintaining clarity throughout the process and providing practical
            professional support.
          </p>
        </motion.div>

      </div>

    </section>
  );
};

export default ServicesIntro;