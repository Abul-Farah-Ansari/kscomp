import { motion } from "framer-motion";
import {
  FileText,
  Building2,
  BadgeCheck,
  Download,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";

import PageHero from "../components/PageHero";

const CompanyDocuments = () => {
  const documents = [
    {
      id: 1,
      title: "Company Brochure",
      description:
        "Explore an overview of KS & Company, our professional services and the areas where we provide assistance to individuals and businesses.",
      type: "Company Information",
      icon: FileText,

      // Replace with your actual PDF file path
      file: "/documents/ks-company-brochure.pdf",
    },

    {
      id: 2,
      title: "GST Registration Certificate",
      description:
        "Official GST registration documentation related to KS & Company for verification and business reference purposes.",
      type: "Registration Document",
      icon: Building2,

      // Replace with your actual PDF file path
      file: "/documents/gst-certificate.pdf",
    },

    {
      id: 3,
      title: "MSME / Udyam Certificate",
      description:
        "Official MSME/Udyam registration documentation demonstrating the business registration status of KS & Company.",
      type: "Government Certificate",
      icon: BadgeCheck,

      // Replace with your actual PDF file path
      file: "/documents/msme-certificate.pdf",
    },
  ];

  const trustPoints = [
    {
      title: "Verified Information",
      description:
        "Important company documents are made available for transparency and client confidence.",
    },
    {
      title: "Professional Transparency",
      description:
        "We believe clients should have clear access to relevant business information.",
    },
    {
      title: "Easy Access",
      description:
        "Documents can be accessed directly whenever required for reference or verification.",
    },
  ];

  return (
    <main className="overflow-x-hidden bg-[#f4f3ef]">
      {/* ================= HERO ================= */}

      <PageHero
        label="Resources"
        title="Company"
        highlight="Documents."
        description="Access important company information, official registrations and supporting documents from KS & Company."
      />

      {/* ================= INTRO ================= */}

      <section className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-[1280px] gap-12 px-6 sm:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:px-14">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[5px] text-[#102b29]/45">
              Transparency & Trust
            </p>

            <h2 className="mt-6 text-4xl font-bold leading-tight text-[#102b29] sm:text-5xl">
              Important Information.
              <br />

              <span className="text-[#102b29]/50">
                Openly Available.
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
              Trust is an important part of professional relationships.
              This section provides access to relevant company documents
              and certifications for clients who want to know more about
              KS & Company.
            </p>

            <p className="mt-6 text-base leading-8 text-[#102b29]/65">
              The available documents include company information,
              registration certificates and government-issued
              documentation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= DOCUMENTS ================= */}

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-14">
          <div className="flex flex-col justify-between gap-6 border-b border-[#102b29]/10 pb-10 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[5px] text-[#102b29]/45">
                Official Documents
              </p>

              <h2 className="mt-5 text-4xl font-bold text-[#102b29] sm:text-5xl">
                Documents & Certificates
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-[#102b29]/55">
              Access the available documents for business reference,
              verification and company information.
            </p>
          </div>

          <div className="grid gap-6 pt-10 lg:grid-cols-3">
            {documents.map((document, index) => {
              const Icon = document.icon;

              return (
                <motion.div
                  key={document.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  className="group flex min-h-[390px] flex-col border border-[#102b29]/10 bg-[#f4f3ef] p-7 transition duration-300 hover:bg-[#102b29] sm:p-8"
                >
                  {/* Icon */}

                  <div className="flex h-14 w-14 items-center justify-center bg-[#102b29] transition group-hover:bg-white">
                    <Icon
                      size={24}
                      className="text-white transition group-hover:text-[#102b29]"
                    />
                  </div>

                  {/* Type */}

                  <p className="mt-8 text-[10px] font-semibold uppercase tracking-[3px] text-[#102b29]/40 group-hover:text-white/40">
                    {document.type}
                  </p>

                  {/* Title */}

                  <h3 className="mt-4 text-2xl font-semibold text-[#102b29] group-hover:text-white">
                    {document.title}
                  </h3>

                  {/* Description */}

                  <p className="mt-5 text-sm leading-7 text-[#102b29]/60 group-hover:text-white/60">
                    {document.description}
                  </p>

                  {/* Actions */}

                  <div className="mt-auto flex items-center gap-3 pt-8">
                    <a
                      href={document.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#102b29] px-5 py-3 text-xs font-semibold text-white transition group-hover:bg-white group-hover:text-[#102b29]"
                    >
                      View Document

                      <ArrowUpRight size={16} />
                    </a>

                    <a
                      href={document.file}
                      download
                      className="flex h-11 w-11 items-center justify-center border border-[#102b29]/15 text-[#102b29] transition hover:bg-white group-hover:border-white/20 group-hover:text-white group-hover:hover:bg-white/10"
                      aria-label={`Download ${document.title}`}
                    >
                      <Download size={17} />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= TRUST ================= */}

      <section className="bg-[#f4f3ef] py-20 sm:py-24">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-14">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <div className="flex h-14 w-14 items-center justify-center bg-[#102b29]">
                <ShieldCheck size={25} className="text-white" />
              </div>

              <p className="mt-8 text-xs font-semibold uppercase tracking-[5px] text-[#102b29]/45">
                Built On Trust
              </p>

              <h2 className="mt-5 text-4xl font-bold leading-tight text-[#102b29] sm:text-5xl">
                Transparency
                <br />

                <span className="text-[#102b29]/50">
                  Matters To Us.
                </span>
              </h2>
            </div>

            <div className="grid gap-px bg-[#102b29]/10 sm:grid-cols-3">
              {trustPoints.map((point, index) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="bg-[#f4f3ef] p-7 sm:p-8"
                >
                  <p className="text-xs font-semibold tracking-[3px] text-[#102b29]/35">
                    0{index + 1}
                  </p>

                  <h3 className="mt-6 text-xl font-semibold text-[#102b29]">
                    {point.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#102b29]/60">
                    {point.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= FINAL SECTION ================= */}

      <section className="bg-[#102b29] py-16 sm:py-20">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-14">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[5px] text-white/40">
              KS & Company
            </p>

            <h2 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl">
              Professional Services.
              <br />

              <span className="text-white/50">
                Transparent Relationships.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/60">
              We aim to build long-term relationships through professional
              guidance, clear communication and transparency with our clients.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CompanyDocuments;