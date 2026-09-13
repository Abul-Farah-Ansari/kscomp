import React from "react";
import { motion } from "framer-motion";

const Achievements = () => {
  const items = [
    {
      title: "Integrated Professional Solutions",
      text: "Providing integrated solutions across Taxation, Accounting, Audit & Assurance, Finance, Insurance, Business Advisory, and Compliance & Regulatory Services.",
    },
    {
      title: "Support Under One Roof",
      text: "Providing practical, reliable and personalized support covering taxation, accounting, registration, compliance, financial advisory and insurance solutions.",
    },
    {
      title: "Understand. Solve. Support.",
      text: "Our approach is simple — understand the client, solve the problem and support long-term growth.",
    },
    {
      title: "Creating Real Value",
      text: "Our goal is not merely to provide services, but to create real value for every client we serve.",
    },
  ];

  return (
    <section className="bg-[#102b29] py-28 sm:py-36">

      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-14">

        {/* Header */}
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
              Our Commitment
            </p>
          </div>

          <h2 className="mt-8 text-4xl font-bold leading-tight text-white sm:text-5xl">
            Professional Support
            <br />
            With Real Value.
          </h2>

          <p className="mt-7 leading-8 text-white/65">
            We aim to provide our clients with practical, reliable and
            personalized professional support while building trust,
            transparency and lasting relationships.
          </p>
        </motion.div>

        {/* Commitment Cards */}
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
              <div className="h-[2px] w-12 bg-[#c5a46d]" />

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