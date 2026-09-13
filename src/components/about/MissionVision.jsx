import React from "react";
import { motion } from "framer-motion";

const MissionVision = () => {
  const missionCommitments = [
    "Delivering timely and quality services",
    "Providing personalized solutions based on each client's needs",
    "Helping clients maintain proper tax and regulatory compliance",
    "Supporting businesses with accounting, finance and strategic advisory",
    "Providing suitable  insurance solutions",
    "Using technology and professional expertise to improve accuracy and efficiency",
    "Building relationships based on trust, transparency and integrity",
    "Becoming a dependable partner in our clients' long-term financial and business journey",
  ];

  return (
    <section className="relative overflow-hidden bg-[#102b29] py-28 sm:py-36">

      {/* Background circles */}
      <div className="absolute -right-32 top-[-100px] h-[500px] w-[500px] rounded-full border border-white/5" />

      <div className="absolute -right-10 top-0 h-[420px] w-[420px] rounded-full border border-white/5" />

      <div className="relative mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-14">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl"
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

        {/* Mission & Vision */}
        <div className="mt-20 grid gap-16 lg:grid-cols-2">

          {/* MISSION */}
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
              Simplifying Complexity With Reliable Professional Solutions.
            </h3>

            <div className="mt-8 space-y-5 leading-8 text-white/65">
              <p>
                Our mission is to simplify financial, taxation, compliance and
                business-related complexities for our clients by providing
                reliable, accurate and practical professional solutions.
              </p>

              <div className="pt-2">
                <p className="mb-5 text-sm font-semibold uppercase tracking-[2px] text-white/70">
                  We are committed to:
                </p>

                <ul className="space-y-3">
                  {missionCommitments.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.05,
                      }}
                      className="flex items-start gap-3"
                    >
                      <span className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#c5a46d]" />

                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <p className="pt-3">
                Our goal is not merely to provide services, but to create real
                value for every client we serve.
              </p>
            </div>
          </motion.div>

          {/* VISION */}
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
              Becoming a Trusted One-Stop Professional Advisory Partner.
            </h3>

            <div className="mt-8 space-y-5 leading-8 text-white/65">
              <p>
                To become a trusted, one-stop professional advisory partner for
                individuals and businesses, recognized for excellence in
                taxation, accounting, finance, insurance, compliance and
                business advisory.
              </p>

              <p>
                We envision building a professional organization where clients
                can confidently rely on us for their financial management,
                compliance requirements, business decisions and future growth.
              </p>

              <p>
                Our vision is to grow alongside our clients — helping
                individuals achieve financial confidence, businesses operate
                compliantly, and entrepreneurs build sustainable and successful
                enterprises.
              </p>

              {/* Vision in One Line */}
              <div className="mt-8 border-l-2 border-[#c5a46d] pl-6">
                <p className="text-xs font-semibold uppercase tracking-[3px] text-[#c5a46d]">
                  Our Vision in One Line
                </p>

                <p className="mt-3 text-lg font-medium leading-8 text-white">
                  “To be the trusted partner behind our clients' financial
                  confidence, compliance and sustainable growth.”
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default MissionVision;