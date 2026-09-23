import React from "react";
import { motion } from "framer-motion";

const WhoWeAre = () => {
  return (
    <section className="bg-[#ffffff] py-24 sm:py-28 lg:py-32">
      <div className="mx-auto grid max-w-[1280px] gap-14 px-6 sm:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-14">
        
        {/* =====================================================
            LEFT CONTENT
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col"
        >
          {/* LABEL */}

          <div className="flex items-center gap-4">
            <div className="h-px w-14 bg-[#102b29]/50" />

            <p className="text-xs font-semibold uppercase tracking-[5px] text-[#102b29]/60">
              Who We Are
            </p>
          </div>

          {/* HEADING */}

          <h2 className="mt-8 text-4xl font-bold leading-[1.15] tracking-tight text-[#102b29] sm:text-5xl lg:text-[52px]">
            A Trusted Professional
            <br />
            Tax Advisory Firm.
          </h2>

          {/* DIVIDER */}

          <div className="mt-9 h-[3px] w-20 bg-[#102b29]" />

          {/* =================================================
              EDITORIAL / NEWSPAPER STYLE CONTENT
          ================================================= */}

          <div className="mt-9 max-w-[500px]">
            <p className="text-[15px] leading-[1.95] text-[#102b29]/65">
              K S & Company works with individuals, professionals,
              entrepreneurs, startups and established businesses that require
              dependable support in managing their financial, taxation,
              accounting, insurance and regulatory responsibilities. Our work
              is centred on understanding the specific requirements of every
              client and providing practical professional assistance with
              clarity, accuracy and attention to detail. By bringing multiple
              professional services together, we aim to make complex
              financial and compliance-related responsibilities easier to
              understand, manage and maintain.
            </p>

            <p className="mt-7 text-[15px] leading-[1.95] text-[#102b29]/65">
              Our professional approach covers a wide range of requirements,
              including Income Tax, GST, TDS and TCS, accounting and
              bookkeeping, business registration, MCA-related compliance,
              HR compliance, financial advisory and insurance solutions.
              Rather than treating every requirement as an isolated task,
              we focus on understanding the broader circumstances of the
              client and providing support that remains practical,
              transparent and relevant to their needs.
            </p>

            {/* SMALL EDITORIAL META */}

            <div className="mt-8 grid grid-cols-2 gap-5 border-t border-[#102b29]/15 pt-6">
              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#102b29]/45">
                  Our Approach
                </p>

                <p className="mt-2 text-sm leading-6 text-[#102b29]/70">
                  Understand. Advise. Support.
                </p>
              </div>

              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#102b29]/45">
                  Our Focus
                </p>

                <p className="mt-2 text-sm leading-6 text-[#102b29]/70">
                  Clarity, accuracy & trust.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            RIGHT CONTENT
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-7 text-[17px] leading-[2] text-[#102b29]/70"
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

          {/* CLOSING STATEMENT */}

          <div className="border-l-2 border-[#102b29]/20 pl-6 pt-1">
            <p className="text-[16px] leading-8 text-[#102b29]/75">
              With an integrated approach to professional services, we aim to
              remain a dependable point of support for clients as their
              financial, business and compliance requirements evolve.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhoWeAre;