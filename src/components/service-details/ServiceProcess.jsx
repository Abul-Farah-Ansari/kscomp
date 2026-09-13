import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const processSteps = [
  {
    number: "01",
    title: "Understand",
    description:
      "We begin by understanding your requirement, current situation and the specific support you need.",
  },
  {
    number: "02",
    title: "Assess",
    description:
      "We review the relevant information and identify the appropriate professional approach for your requirement.",
  },
  {
    number: "03",
    title: "Execute",
    description:
      "Our team handles the required service with attention to accuracy, compliance and timely completion.",
  },
  {
    number: "04",
    title: "Support",
    description:
      "We remain available for clarification, follow-up and ongoing support whenever required.",
  },
];

const ServiceProcess = ({ data }) => {
  if (!data) return null;

  return (
    <section className="relative overflow-hidden bg-[#0b211f] py-20 text-white sm:py-24 lg:py-32">
      {/* Decorative elements */}
      <div className="pointer-events-none absolute -right-40 top-[-120px] h-[420px] w-[420px] rounded-full border border-[#c5a46d]/15" />
      <div className="pointer-events-none absolute -left-32 bottom-[-160px] h-[400px] w-[400px] rounded-full border border-white/5" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 max-w-3xl sm:mb-20"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-[#c5a46d]" />

            <span className="text-[10px] font-bold tracking-[0.28em] text-[#c5a46d] sm:text-xs">
              OUR APPROACH
            </span>
          </div>

          <h2 className="font-serif text-4xl font-medium leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            A simple process.
            <br />
            <span className="text-[#c5a46d]">Professional results.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
            Our approach is simple — understand the client, solve the problem
            and support long-term growth.
          </p>
        </motion.div>

        {/* Process */}
        <div className="relative">
          {/* Connecting line — desktop */}
          <div className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-[31px] hidden h-px bg-gradient-to-r from-transparent via-[#c5a46d]/50 to-transparent lg:block" />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative"
              >
                {/* Number circle */}
                <div className="relative z-10 mb-7 flex h-16 w-16 items-center justify-center rounded-full border border-[#c5a46d]/50 bg-[#0b211f] transition-all duration-500 group-hover:border-[#c5a46d] group-hover:bg-[#c5a46d]">
                  <span className="font-serif text-sm text-[#c5a46d] transition-colors duration-500 group-hover:text-[#0b211f]">
                    {step.number}
                  </span>
                </div>

                {/* Card */}
                <div className="border-t border-white/15 pt-6 transition-colors duration-300 group-hover:border-[#c5a46d]/60">
                  <div className="mb-3 flex items-center gap-2">
                    <CheckCircle2
                      size={15}
                      strokeWidth={1.7}
                      className="text-[#c5a46d]"
                    />

                    <span className="text-[10px] font-bold tracking-[0.2em] text-white/40">
                      STEP {index + 1}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl text-white sm:text-[27px]">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-white/55">
                    {step.description}
                  </p>
                </div>

                {/* Arrow between cards */}
                {index < processSteps.length - 1 && (
                  <div className="absolute right-[-14px] top-6 hidden lg:block">
                    <ArrowRight
                      size={18}
                      strokeWidth={1.3}
                      className="text-[#c5a46d]/40"
                    />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 border-t border-white/10 pt-8 sm:mt-20 sm:flex sm:items-center sm:justify-between sm:gap-8"
        >
          <p className="max-w-2xl text-xs leading-6 text-white/45 sm:text-sm">
            Every assignment is approached with professional expertise,
            practical thinking and a commitment to delivering dependable
            support.
          </p>

          <div className="mt-5 text-[10px] font-bold tracking-[0.22em] text-[#c5a46d] sm:mt-0">
            {data.category?.toUpperCase()}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceProcess;