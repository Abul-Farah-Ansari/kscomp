import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const AboutCTA = () => {
  return (
    <section className="relative overflow-hidden bg-[#102b29] py-28 sm:py-36">

      <div className="absolute left-[-100px] bottom-[-150px] h-[450px] w-[450px] rounded-full border border-white/5" />

      <div className="absolute right-[5%] top-[-150px] h-[400px] w-[400px] rounded-full border border-white/5" />

      <div className="relative mx-auto max-w-[1000px] px-6 text-center sm:px-10">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[5px] text-white/50">
            Let's Work Together
          </p>

          <h2 className="mt-8 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Let's Discuss Your
            <br />
            Financial Requirements.
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-white/65">
            Whether you require assistance with taxation, insurance, financial
            planning or professional advisory services, our team is ready to
            understand your requirements and provide dependable guidance.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">

            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-white px-8 py-4 text-sm font-semibold text-[#102b29] transition duration-300 hover:bg-[#f4f3ef]"
            >
              Contact Us
              <ArrowRight size={18} />
            </Link>

            <Link
              to="/services"
              className="inline-flex items-center border border-white/20 px-8 py-4 text-sm font-semibold text-white transition duration-300 hover:bg-white/10"
            >
              Explore Services
            </Link>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutCTA;