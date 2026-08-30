import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const AboutHero = () => {
  return (
    <section className="relative overflow-hidden bg-[#102b29] pt-32 pb-20 sm:pt-36 sm:pb-24">
      
      {/* Premium Background Shapes */}
      <div className="absolute -left-40 -top-40 h-[420px] w-[420px] rounded-full border border-white/5" />

      <div className="absolute -left-20 -top-20 h-[320px] w-[320px] rounded-full border border-white/5" />

      <div className="absolute right-[-120px] top-[-160px] h-[480px] w-[480px] rounded-full border border-white/5" />

      <div className="absolute right-[-40px] top-[-60px] h-[350px] w-[350px] rounded-full border border-white/5" />

      <div className="relative mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-14">
        
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4"
        >
          <div className="h-px w-14 bg-white/40" />

          <p className="text-xs font-semibold uppercase tracking-[5px] text-white/60">
            About KS & Company
          </p>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-7 max-w-5xl text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
        >
          Professional Guidance
          <br />

          <span className="text-white/60">
            Built Around Trust.
          </span>
        </motion.h1>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-7 max-w-3xl"
        >
          <p className="text-base leading-8 text-white/65 sm:text-lg">
            KS & Company provides professional guidance across taxation,
            insurance and financial advisory services, helping individuals
            and businesses make important financial decisions with greater
            clarity and confidence.
          </p>
        </motion.div>

        {/* Button */}
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
            Start a Conversation
            <ArrowRight size={18} />
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutHero;