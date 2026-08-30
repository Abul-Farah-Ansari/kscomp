import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ServicesHero = () => {
  return (
    <section className="relative overflow-hidden bg-[#102b29] pt-32 pb-20 sm:pt-36 sm:pb-24">
      {/* Background Shapes */}
      <div className="absolute -left-32 -top-32 h-[400px] w-[400px] rounded-full border border-white/5" />

      <div className="absolute -left-10 -top-10 h-[260px] w-[260px] rounded-full border border-white/5" />

      <div className="absolute -right-32 -top-32 h-[460px] w-[460px] rounded-full border border-white/5" />

      <div className="relative mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4"
        >
          <div className="h-px w-14 bg-white/40" />

          <p className="text-xs font-semibold uppercase tracking-[5px] text-white/60">
            Our Services
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-7 max-w-5xl text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
        >
          Professional Solutions
          <br />

          <span className="text-white/60">
            For Every Financial Need.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-7 max-w-3xl text-base leading-8 text-white/65 sm:text-lg"
        >
          From taxation and business compliance to insurance and financial
          services, KS & Company provides practical professional support
          designed around the requirements of individuals and businesses.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-9"
        >
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-white px-7 py-3.5 text-sm font-semibold text-[#102b29] transition duration-300 hover:bg-white/85"
          >
            Discuss Your Requirements
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesHero;