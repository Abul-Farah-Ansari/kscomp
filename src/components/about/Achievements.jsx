import React from "react";
import { motion } from "framer-motion";

const Achievements = () => {
  const items = [
    {
      title: "Professional Advisory",
      text: "Supporting clients across important taxation, insurance and financial requirements.",
    },
    {
      title: "Client-Focused Service",
      text: "Understanding individual circumstances before providing practical professional guidance.",
    },
    {
      title: "Long-Term Relationships",
      text: "Building trust through consistent communication and dependable professional support.",
    },
    {
      title: "Continuous Development",
      text: "Improving knowledge, processes and capabilities to provide greater long-term value.",
    },
  ];

  return (
    <section className="bg-[#102b29] py-28 sm:py-36">

      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-14">

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
              Our Journey
            </p>
          </div>

          <h2 className="mt-8 text-4xl font-bold leading-tight text-white sm:text-5xl">
            Progress Built Through
            <br />
            Professional Trust.
          </h2>

          <p className="mt-7 leading-8 text-white/65">
            Our journey continues to be shaped by the relationships we build,
            the responsibilities we manage and our commitment to dependable
            professional service.
          </p>
        </motion.div>


        <div className="mt-20 grid border-l border-t border-white/10 sm:grid-cols-2 lg:grid-cols-4">

          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="min-h-[280px] border-b border-r border-white/10 p-9"
            >
              <div className="h-[2px] w-12 bg-white/40" />

              <h3 className="mt-8 text-xl font-semibold text-white">
                {item.title}
              </h3>

              <p className="mt-5 leading-7 text-white/60">
                {item.text}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Achievements;