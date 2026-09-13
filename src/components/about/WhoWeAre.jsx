import React from "react";
import { motion } from "framer-motion";

const WhoWeAre = () => {
  return (
    <section className="bg-[#ffffff] py-28 sm:py-36">

      <div className="mx-auto grid max-w-[1280px] gap-16 px-6 sm:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:px-14">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4">
            <div className="h-px w-14 bg-[#102b29]/50" />

            <p className="text-xs font-semibold uppercase tracking-[5px] text-[#102b29]/60">
              Who We Are
            </p>
          </div>

          <h2 className="mt-8 text-4xl font-bold leading-tight tracking-tight text-[#102b29] sm:text-5xl">
            A Trusted Professional
            <br />
            Tax Advisory Firm.
          </h2>

          <div className="mt-10 h-[3px] w-20 bg-[#102b29]" />
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6 text-[17px] leading-8 text-[#102b29]/70"
        >
          <p>
            K S & Company is a trusted professional Tax Advisory firm
            providing integrated solutions across Taxation, Accounting,
            Audit & Assurance, Finance, Insurance, Business Advisory, and
            Compliance & Regulatory Services.
          </p>

          <p>
            We help individuals, professionals, startups, entrepreneurs and
            established businesses manage their financial and regulatory
            responsibilities with clarity, accuracy and confidence.
          </p>

          <p>
            From Income Tax, GST, TDS/TCS, Accounting and Bookkeeping to
            Business Registration, MCA & HR Compliance, Financial Advisory
             and Insurance Solutions, we aim to provide our clients with
            practical, reliable and personalized support under one roof.
          </p>

          <p>
            Our approach is simple — understand the client, solve the problem
            and support long-term growth.
          </p>

          <p>
            We believe that professional services are not just about completing
            a task; they are about building trust, transparency and lasting
            relationships with our clients.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default WhoWeAre;