import React from "react";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
  const reasons = [
    {
      number: "01",
      title: "Professional Responsibility",
      text: "Every client requirement is approached with care, discipline and a strong sense of professional responsibility.",
    },
    {
      number: "02",
      title: "Clear Communication",
      text: "We believe clients should understand important information instead of feeling overwhelmed by unnecessary complexity.",
    },
    {
      number: "03",
      title: "Practical Guidance",
      text: "Our approach focuses on real-world requirements and practical circumstances rather than generic recommendations.",
    },
    {
      number: "04",
      title: "Long-Term Support",
      text: "We value professional relationships that continue as client requirements and responsibilities evolve.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#f4f3ef] py-28 sm:py-36">

      {/* Abstract shapes */}
      <div className="absolute -left-32 top-10 h-[430px] w-[430px] rounded-full bg-[#102b29]/5" />

      <div className="absolute left-[38%] top-[100px] h-[360px] w-[360px] rounded-full bg-[#102b29]/5" />

      <div className="relative mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-14">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-4">
            <div className="h-px w-14 bg-[#102b29]/50" />

            <p className="text-xs font-semibold uppercase tracking-[5px] text-[#102b29]/65">
              Why Choose Us
            </p>
          </div>

          <h2 className="mt-8 max-w-4xl text-5xl font-bold leading-[1.1] tracking-tight text-[#102b29] sm:text-6xl">
            Professional Service
            <br />
            <span className="text-[#426b66]">
              Built Around You.
            </span>
          </h2>

          <p className="mt-8 max-w-3xl text-lg leading-9 text-[#102b29]/70">
            Choosing the right professional advisor is about more than
            selecting a service provider. It is about finding a dependable
            partner who understands your requirements and communicates with
            responsibility.
          </p>
        </motion.div>


        <div className="mt-20 grid gap-6 md:grid-cols-2">

          {reasons.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
              className="border border-[#102b29]/10 bg-white p-10 sm:p-12"
            >
              <span className="text-sm font-semibold tracking-[4px] text-[#426b66]">
                {item.number}
              </span>

              <h3 className="mt-7 text-3xl font-semibold text-[#102b29]">
                {item.title}
              </h3>

              <p className="mt-6 max-w-md leading-8 text-[#102b29]/65">
                {item.text}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;