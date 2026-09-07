import { motion } from "framer-motion";
import {
  FileText,
  Building2,
  BadgeCheck,
  Download,
  ArrowUpRight,
  ShieldCheck,
  BriefcaseBusiness,
  FileCheck2,
} from "lucide-react";

import PageHero from "../components/PageHero";

const CompanyDocuments = () => {
  /*
   * ============================================================
   * FEATURED DOCUMENTS
   * Main documents with larger cards
   * ============================================================
   */

  const featuredDocuments = [
    {
      id: 1,
      title: "Company Brochure",
      description:
        "Explore an overview of KS & Company, our professional services and the areas where we provide assistance to individuals and businesses.",
      type: "Company Information",
      icon: FileText,
      file: "/documents/ks%20%26%20company%20profile.pdf",
    },

    {
      id: 2,
      title: "GST Practitioner Certificate — Bihar",
      description:
        "Official GST Practitioner enrolment certificate issued for Bihar, provided for business verification and professional reference.",
      type: "GST Practitioner",
      icon: Building2,
      file: "/documents/GST%20Practitioner%20Certificate%20Bihar.pdf",
    },

    {
      id: 3,
      title: "GST Practitioner Certificate — Delhi",
      description:
        "Official GST Practitioner enrolment certificate issued for Delhi, provided for business verification and professional reference.",
      type: "GST Practitioner",
      icon: Building2,
      file: "/documents/GST%20Practitioner%20Certificate%20Delhi.pdf",
    },

    {
      id: 4,
      title: "Udyam / MSME Registration Certificate",
      description:
        "Official Udyam Registration Certificate demonstrating the MSME registration status of KS & Company.",
      type: "Government Certificate",
      icon: BadgeCheck,
      file: "/documents/Udyam%20Certificate%20ANX.pdf",
    },
  ];

  /*
   * ============================================================
   * SUPPORTING DOCUMENTS
   * Smaller cards for less important documents
   * ============================================================
   */

  const supportingDocuments = [
    {
      id: 5,
      title: "Certificate",
      type: "Supporting Document",
      icon: FileCheck2,
      file: "/documents/Certificate.pdf",
    },

    {
      id: 6,
      title: "Agent Appointment Letter",
      subtitle: "NBHDEL06231003",
      type: "Appointment Document",
      icon: BriefcaseBusiness,
      file: "/documents/agent-appointment-letter.pdf",
    },

    {
      id: 7,
      title: "Appointment Letter & Application Form",
      type: "Appointment Document",
      icon: FileText,
      file: "/documents/appointment-letter-application-form.pdf",
    },

    {
      id: 8,
      title: "Appointment Letter",
      subtitle: "626271",
      type: "Appointment Document",
      icon: FileText,
      file: "/documents/Appointment_Letter_626271.pdf",
    },
  ];

  /*
   * ============================================================
   * TRUST POINTS
   * ============================================================
   */

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

      {/* ============================================================
          HERO
      ============================================================ */}

      <PageHero
        label="Resources"
        title="Company"
        highlight="Documents."
        description="Access important company information, official registrations and supporting documents from KS & Company."
      />

      {/* ============================================================
          INTRO
      ============================================================ */}

      <section className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-[1280px] gap-12 px-6 sm:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:px-14">

          {/* Left */}

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

          {/* Right */}

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
              registration certificates, government-issued documentation
              and supporting professional documents.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ============================================================
          FEATURED DOCUMENTS
      ============================================================ */}

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-14">

          {/* Section Header */}

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
              Access important company registrations, certificates and
              company information for business reference and verification.
            </p>
          </div>

          {/* Featured Cards */}

          <div className="grid gap-6 pt-10 md:grid-cols-2">

            {featuredDocuments.map((document, index) => {
              const Icon = document.icon;

              return (
                <motion.div
                  key={document.id}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                  }}
                  className="group relative flex min-h-[390px] flex-col overflow-hidden border border-[#102b29]/10 bg-[#f4f3ef] p-7 transition-all duration-500 hover:-translate-y-1 hover:bg-[#102b29] sm:p-9"
                >

                  {/* Decorative Number */}

                  <span className="absolute right-7 top-6 text-5xl font-bold text-[#102b29]/[0.04] transition group-hover:text-white/[0.06]">
                    0{index + 1}
                  </span>

                  {/* Icon */}

                  <div className="flex h-14 w-14 items-center justify-center bg-[#102b29] transition duration-300 group-hover:bg-white">
                    <Icon
                      size={24}
                      className="text-white transition group-hover:text-[#102b29]"
                    />
                  </div>

                  {/* Type */}

                  <p className="mt-8 text-[10px] font-semibold uppercase tracking-[3px] text-[#102b29]/40 transition group-hover:text-white/40">
                    {document.type}
                  </p>

                  {/* Title */}

                  <h3 className="mt-4 max-w-xl text-2xl font-semibold leading-tight text-[#102b29] transition group-hover:text-white sm:text-3xl">
                    {document.title}
                  </h3>

                  {/* Description */}

                  <p className="mt-5 max-w-xl text-sm leading-7 text-[#102b29]/60 transition group-hover:text-white/60">
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

      {/* ============================================================
          SUPPORTING DOCUMENTS
      ============================================================ */}

      <section className="bg-[#f4f3ef] py-16 sm:py-20">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-14">

          {/* Header */}

          <div className="flex flex-col justify-between gap-5 border-b border-[#102b29]/10 pb-8 sm:flex-row sm:items-end">

            <div>
              <p className="text-xs font-semibold uppercase tracking-[4px] text-[#102b29]/40">
                Additional Records
              </p>

              <h2 className="mt-4 text-3xl font-bold text-[#102b29] sm:text-4xl">
                Supporting Documents
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-[#102b29]/50">
              Additional professional and appointment-related documents
              are available here for reference.
            </p>

          </div>

          {/* Compact Document List */}

          <div className="mt-8 grid gap-3 md:grid-cols-2">

            {supportingDocuments.map((document, index) => {
              const Icon = document.icon;

              return (
                <motion.div
                  key={document.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.06,
                  }}
                  className="group flex items-center justify-between gap-5 border border-[#102b29]/10 bg-white px-5 py-5 transition duration-300 hover:border-[#102b29]/20 hover:bg-[#102b29]"
                >

                  {/* Left */}

                  <div className="flex min-w-0 items-center gap-4">

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#102b29]/[0.06] transition group-hover:bg-white/10">
                      <Icon
                        size={19}
                        className="text-[#102b29] transition group-hover:text-white"
                      />
                    </div>

                    <div className="min-w-0">

                      <p className="text-[9px] font-semibold uppercase tracking-[2px] text-[#102b29]/35 transition group-hover:text-white/40">
                        {document.type}
                      </p>

                      <h3 className="mt-1 truncate text-sm font-semibold text-[#102b29] transition group-hover:text-white sm:text-base">
                        {document.title}
                      </h3>

                      {document.subtitle && (
                        <p className="mt-0.5 text-xs text-[#102b29]/45 transition group-hover:text-white/40">
                          {document.subtitle}
                        </p>
                      )}

                    </div>
                  </div>

                  {/* Actions */}

                  <div className="flex shrink-0 items-center gap-2">

                    <a
                      href={document.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center border border-[#102b29]/10 text-[#102b29] transition hover:bg-[#102b29] hover:text-white group-hover:border-white/20 group-hover:text-white group-hover:hover:bg-white group-hover:hover:text-[#102b29]"
                      aria-label={`View ${document.title}`}
                    >
                      <ArrowUpRight size={16} />
                    </a>

                    <a
                      href={document.file}
                      download
                      className="hidden h-10 w-10 items-center justify-center border border-[#102b29]/10 text-[#102b29] transition hover:bg-[#102b29] hover:text-white group-hover:border-white/20 group-hover:text-white group-hover:hover:bg-white/10 sm:flex"
                      aria-label={`Download ${document.title}`}
                    >
                      <Download size={16} />
                    </a>

                  </div>
                </motion.div>
              );
            })}

          </div>
        </div>
      </section>

      {/* ============================================================
          TRUST SECTION
      ============================================================ */}

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-14">

          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">

            {/* Left */}

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

            {/* Right */}

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

      {/* ============================================================
          FINAL SECTION
      ============================================================ */}

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