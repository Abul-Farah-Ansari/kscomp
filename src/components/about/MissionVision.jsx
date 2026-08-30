import React from "react";
import { motion } from "framer-motion";

const MissionVision = () => {
  return (
    <section className="relative overflow-hidden bg-[#102b29] py-28 sm:py-36">

      {/* Background circles */}
      <div className="absolute -right-32 top-[-100px] h-[500px] w-[500px] rounded-full border border-white/5" />

      <div className="absolute -right-10 top-0 h-[420px] w-[420px] rounded-full border border-white/5" />

      <div className="relative mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-14">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-4">
            <div className="h-px w-14 bg-white/30" />

            <p className="text-xs font-semibold uppercase tracking-[5px] text-white/50">
              Our Direction
            </p>
          </div>

          <h2 className="mt-8 text-4xl font-bold leading-tight text-white sm:text-5xl">
            Guided by Purpose.
            <br />
            <span className="text-white/65">
              Focused on Long-Term Value.
            </span>
          </h2>
        </motion.div>


        <div className="mt-20 grid gap-16 lg:grid-cols-2">

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="border-t border-white/15 pt-10"
          >
            <span className="text-sm tracking-[4px] text-white/45">
              01 / OUR MISSION
            </span>

            <h3 className="mt-7 text-3xl font-semibold leading-tight text-white">
              Making Professional Guidance Clear and Accessible.
            </h3>

            <div className="mt-8 space-y-5 leading-8 text-white/65">
              <p>
                Our mission is to provide dependable professional solutions
                that help individuals and businesses understand their
                responsibilities and available options with greater clarity.
              </p>

              <p>
                We aim to simplify complex processes while maintaining the
                attention to detail that important financial decisions require.
              </p>

              <p>
                Through responsible communication and practical guidance, we
                want our clients to feel more confident when managing important
                financial requirements.
              </p>
            </div>
          </motion.div>


          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="border-t border-white/15 pt-10"
          >
            <span className="text-sm tracking-[4px] text-white/45">
              02 / OUR VISION
            </span>

            <h3 className="mt-7 text-3xl font-semibold leading-tight text-white">
              Building Relationships That Grow With Our Clients.
            </h3>

            <div className="mt-8 space-y-5 leading-8 text-white/65">
              <p>
                Our vision is to become a trusted professional partner for
                individuals and businesses seeking responsible financial and
                advisory support.
              </p>

              <p>
                We believe strong professional relationships are developed
                gradually through consistency, transparency and dependable
                service.
              </p>

              <p>
                As our clients grow and their requirements change, we aim to
                continue providing relevant guidance and long-term value.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default MissionVision;