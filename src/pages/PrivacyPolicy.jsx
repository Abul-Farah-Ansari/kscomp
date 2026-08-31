import { motion } from "framer-motion";
import PageHero from "../components/PageHero";

const PrivacyPolicy = () => {
  const sections = [
    {
      number: "01",
      title: "Information We Collect",
      content:
        "We may collect information that you voluntarily provide through enquiry forms, contact forms, email communication or other interactions with KS & Company. This may include your name, phone number, email address and details related to your service requirements.",
    },
    {
      number: "02",
      title: "How We Use Your Information",
      content:
        "The information shared with us may be used to respond to enquiries, understand client requirements, provide relevant professional assistance and improve communication regarding our services.",
    },
    {
      number: "03",
      title: "Information Protection",
      content:
        "KS & Company takes reasonable measures to protect information shared by clients and website visitors. We aim to handle information responsibly and maintain appropriate safeguards against unauthorized access or misuse.",
    },
    {
      number: "04",
      title: "Sharing of Information",
      content:
        "We do not sell personal information to third parties. Information may only be shared where necessary for providing requested services, complying with applicable requirements or where legally required.",
    },
    {
      number: "05",
      title: "Third-Party Services",
      content:
        "Our website may contain links, embedded maps or other services provided by third parties. Their privacy practices are governed by their respective policies, and KS & Company is not responsible for their independent privacy practices.",
    },
    {
      number: "06",
      title: "Updates to This Policy",
      content:
        "This Privacy Policy may be updated from time to time to reflect changes in our services, website or applicable requirements. Any updated version will be published on this page.",
    },
  ];

  return (
    <main className="overflow-x-hidden bg-[#f4f3ef]">
      {/* ================= HERO ================= */}

      <PageHero
        label="Legal Information"
        title="Privacy"
        highlight="Policy."
        description="Your privacy and trust are important to us. This policy explains how KS & Company handles information shared by clients and visitors through our website and communication channels."
      />

      {/* ================= INTRODUCTION ================= */}

      <section className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-[1280px] gap-12 px-6 sm:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:px-14">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[5px] text-[#102b29]/45">
              Our Commitment
            </p>

            <h2 className="mt-6 text-4xl font-bold leading-tight text-[#102b29] sm:text-5xl">
              Privacy Built
              <br />

              <span className="text-[#102b29]/50">
                Around Trust.
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-base leading-8 text-[#102b29]/65 sm:text-lg">
              KS & Company values the trust placed in us by our clients.
              Any information shared with us is handled responsibly and is
              used primarily for understanding requirements and providing
              appropriate professional assistance.
            </p>

            <p className="mt-6 text-base leading-8 text-[#102b29]/65">
              By using our website or submitting an enquiry, you acknowledge
              the practices described in this Privacy Policy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= POLICY SECTIONS ================= */}

      <section className="border-t border-[#102b29]/10 bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-14">
          <div className="border-t border-[#102b29]/10">
            {sections.map((section, index) => (
              <motion.div
                key={section.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.05,
                }}
                className="grid gap-7 border-b border-[#102b29]/10 py-10 sm:grid-cols-[120px_0.8fr_1.2fr] sm:py-12"
              >
                <p className="text-sm font-semibold tracking-[3px] text-[#102b29]/35">
                  {section.number}
                </p>

                <h3 className="text-2xl font-semibold text-[#102b29]">
                  {section.title}
                </h3>

                <p className="text-sm leading-7 text-[#102b29]/60 sm:text-base">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}

      <section className="bg-[#f4f3ef] py-16 sm:py-20">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-14">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-[#102b29] px-7 py-14 sm:px-14 sm:py-16"
          >
            <p className="text-xs font-semibold uppercase tracking-[5px] text-white/40">
              Questions?
            </p>

            <h2 className="mt-6 text-4xl font-bold text-white sm:text-5xl">
              Need More Information?
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-white/60">
              If you have any questions regarding this Privacy Policy or how
              information is handled by KS & Company, please contact us.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPolicy;