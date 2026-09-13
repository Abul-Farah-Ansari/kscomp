import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const ServiceWhyChoose = ({ data }) => {
  if (!data?.strengths?.length) return null;

  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#c5a46d]" />

              <span className="text-[10px] font-bold tracking-[0.28em] text-[#285b68] sm:text-xs">
                WHY K S & COMPANY
              </span>
            </div>

            <h2 className="font-serif text-4xl font-medium leading-[1.05] tracking-[-0.04em] text-[#0b211f] sm:text-5xl lg:text-6xl">
              Professional
              <br />
              <span className="text-[#285b68]">support that matters.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex items-end"
          >
            <p className="max-w-2xl text-sm leading-7 text-[#0b211f]/60 sm:text-base sm:leading-8">
              We focus on understanding each client's requirements and
              providing practical, reliable and personalized professional
              support — with accuracy, transparency and long-term commitment.
            </p>
          </motion.div>
        </div>

        {/* Strengths */}
        <div className="mt-14 grid border-t border-[#0b211f]/15 sm:mt-20 sm:grid-cols-2 lg:grid-cols-3">
          {data.strengths.map((strength, index) => {
            const title =
              typeof strength === "string"
                ? strength
                : strength.title || strength.name;

            const description =
              typeof strength === "string"
                ? ""
                : strength.description || "";

            return (
              <motion.div
                key={`${title}-${index}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative border-b border-[#0b211f]/15 p-7 pl-0 sm:p-8 sm:pl-0 sm:pr-8 lg:p-10 lg:pl-0 lg:pr-10"
              >
                {/* Vertical divider */}
                <div className="absolute bottom-8 left-0 top-8 hidden w-px bg-[#c5a46d]/40 sm:block lg:bottom-10 lg:top-10" />

                <div className="sm:pl-5 lg:pl-7">
                  {/* Number */}
                  <div className="mb-8 flex items-center justify-between">
                    <span className="font-serif text-sm text-[#c5a46d]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#0b211f]/10 transition-all duration-300 group-hover:border-[#c5a46d] group-hover:bg-[#0b211f]">
                      <ArrowUpRight
                        size={16}
                        strokeWidth={1.6}
                        className="text-[#0b211f] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#c5a46d]"
                      />
                    </div>
                  </div>

                  <h3 className="max-w-xs font-serif text-2xl font-medium leading-tight tracking-[-0.02em] text-[#0b211f] transition-colors duration-300 group-hover:text-[#285b68] sm:text-[26px]">
                    {title}
                  </h3>

                  {description && (
                    <p className="mt-4 max-w-sm text-sm leading-7 text-[#0b211f]/55">
                      {description}
                    </p>
                  )}

                  {/* Bottom accent */}
                  <div className="mt-8 h-px w-8 bg-[#c5a46d] transition-all duration-500 group-hover:w-16" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-14 flex flex-col gap-5 border-l-2 border-[#c5a46d] pl-5 sm:mt-16 sm:flex-row sm:items-center sm:justify-between sm:pl-6"
        >
          <div>
            <p className="font-serif text-xl text-[#0b211f] sm:text-2xl">
              Your requirement.
              <span className="text-[#285b68]"> Our professional support.</span>
            </p>

            <p className="mt-2 text-xs leading-6 text-[#0b211f]/50 sm:text-sm">
              Built around clarity, accuracy and dependable service.
            </p>
          </div>

          <div className="text-[10px] font-bold tracking-[0.22em] text-[#c5a46d]">
            {data.category?.toUpperCase()}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceWhyChoose;