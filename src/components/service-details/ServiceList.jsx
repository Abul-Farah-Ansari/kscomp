import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";

const ServiceList = ({ data }) => {
  if (!data?.services?.length) return null;

  return (
    <section
      id="service-list"
      className="relative overflow-hidden bg-[#f4f1eb] py-20 sm:py-24 lg:py-32"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute left-[-140px] top-20 h-[280px] w-[280px] rounded-full border border-[#c5a46d]/20" />
      <div className="pointer-events-none absolute right-[-180px] bottom-20 h-[360px] w-[360px] rounded-full border border-[#285b68]/10" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 max-w-3xl sm:mb-16"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-[#c5a46d]" />

            <span className="text-[10px] font-bold tracking-[0.28em] text-[#285b68] sm:text-xs">
              {data.number} / {data.category?.toUpperCase()}
            </span>
          </div>

          <h2 className="font-serif text-4xl font-medium leading-[1.05] tracking-[-0.04em] text-[#0b211f] sm:text-5xl lg:text-6xl">
            Services designed
            <br />
            <span className="text-[#285b68]">around your needs.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-[#0b211f]/65 sm:text-base sm:leading-8">
            Explore our {data.category?.toLowerCase()} services, delivered
            with practical guidance, professional accuracy and a clear focus
            on your requirements.
          </p>
        </motion.div>

        {/* Services */}
        <div className="border-t border-[#0b211f]/15">
          {data.services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.6,
                delay: Math.min(index * 0.05, 0.3),
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative border-b border-[#0b211f]/15"
            >
              <div className="relative flex items-center gap-4 py-7 sm:gap-8 sm:py-8 lg:py-9">
                {/* Number */}
                <div className="w-10 shrink-0 sm:w-14">
                  <span className="font-serif text-sm text-[#c5a46d] sm:text-base">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Service name */}
                <div className="min-w-0 flex-1">
                  <h3 className="text-lg font-semibold tracking-[-0.02em] text-[#0b211f] transition-colors duration-300 group-hover:text-[#285b68] sm:text-xl lg:text-2xl">
                    {service.name}
                  </h3>

                  {service.description && (
                    <p className="mt-2 max-w-2xl text-xs leading-6 text-[#0b211f]/55 sm:text-sm sm:leading-7">
                      {service.description}
                    </p>
                  )}
                </div>

                {/* Check */}
                <div className="hidden shrink-0 items-center justify-center sm:flex">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#c5a46d]/50 bg-white transition-all duration-300 group-hover:border-[#c5a46d] group-hover:bg-[#c5a46d]">
                    <Check
                      size={15}
                      strokeWidth={2}
                      className="text-[#285b68] transition-colors duration-300 group-hover:text-[#0b211f]"
                    />
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#0b211f]/15 transition-all duration-300 group-hover:border-[#c5a46d] group-hover:bg-[#0b211f] sm:h-11 sm:w-11">
                  <ArrowUpRight
                    size={17}
                    strokeWidth={1.7}
                    className="text-[#0b211f] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#c5a46d]"
                  />
                </div>
              </div>

              {/* Hover line */}
              <motion.div
                className="absolute bottom-0 left-0 h-[2px] bg-[#c5a46d]"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.45, ease: "easeOut" }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 flex flex-col gap-4 border-l-2 border-[#c5a46d] pl-5 sm:mt-12 sm:flex-row sm:items-center sm:justify-between sm:gap-8"
        >
          <p className="max-w-2xl text-xs leading-6 text-[#0b211f]/60 sm:text-sm">
            Need help deciding which service is right for you? Our team can
            understand your requirement and guide you toward the appropriate
            solution.
          </p>

          <span className="shrink-0 text-[10px] font-bold tracking-[0.2em] text-[#285b68]">
            PROFESSIONAL • PRACTICAL • RELIABLE
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceList;