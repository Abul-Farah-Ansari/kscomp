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

// ============================================================
// SUPPORTING DOCUMENT IMAGES
// ============================================================

import SupportingImage1 from "../assets/mngmt/niva.png";
import SupportingImage2 from "../assets/mngmt/24.webp";
import SupportingImage3 from "../assets/mngmt/34.webp";

const CompanyDocuments = () => {
  /*
   * ============================================================
   * FEATURED DOCUMENTS
   * ============================================================
   */

  const featuredDocuments = [
    {
      id: 1,
      title: "Company Brochure",
      description:
        "Explore an overview of K S & Company, our professional services and the areas where we provide assistance to individuals and businesses.",
      type: "Company Information",
      icon: FileText,
      file: "../../public/documents/k s & company profile (1).pdf",
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
        "Official Udyam Registration Certificate demonstrating the MSME registration status of K S & Company.",
      type: "Government Certificate",
      icon: BadgeCheck,
      file: "/documents/Udyam%20Certificate%20ANX.pdf",
    },
  ];

  /*
   * ============================================================
   * SUPPORTING DOCUMENTS
   * ============================================================
   *
   * Image arrangement:
   *
   * Card 1 → image1
   * Card 2 → image1
   * Card 3 → image2
   * Card 4 → image3
   *
   * ============================================================
   */

  const supportingDocuments = [
    {
      id: 5,
      title: "Certification of Merit (NIVA HEALTH INSURANCE)",
      type: "Supporting Document",
      icon: FileCheck2,
      file: "/documents/Certificate.pdf",
      image: SupportingImage1,
    },

    {
      id: 6,
      title: "Agent Appointment Letter (NIVA HEALTH INSURANCE)",
      subtitle: "NBHDEL06231003",
      type: "Appointment Document",
      icon: BriefcaseBusiness,
      file: "/documents/agent-appointment-letter.pdf",
      image: SupportingImage1,
    },

    {
      id: 7,
      title: "Appointment Letter & Application Form (MAX LIFE INSURANCE)",
      type: "Appointment Document",
      icon: FileText,
      file: "/documents/appointment-letter-application-form.pdf",
      image: SupportingImage2,
    },

    {
      id: 8,
      title: "Appointment Letter (TATA AIG INSURANCE)",
      type: "Appointment Document",
      icon: FileText,
      file: "/documents/Appointment_Letter_626271.pdf",
      image: SupportingImage3,
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

  /*
   * ============================================================
   * PDF PREVIEW
   * ============================================================
   */

  const getPdfPreviewUrl = (file) => {
    return `${file}#page=1&view=FitH&toolbar=0&navpanes=0&scrollbar=0`;
  };

  return (
    <main className="overflow-x-hidden bg-[#f4f3ef]">

      {/* ============================================================
          HERO
      ============================================================ */}

      <PageHero
        label="Resources"
        title="Company"
        highlight="Documents."
        description="Access important company information, official registrations and supporting documents from K S & Company."
      />

      {/* ============================================================
          INTRO
      ============================================================ */}

      <section className="py-20 sm:py-24">

        <div className="mx-auto grid max-w-[1280px] gap-12 px-6 sm:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:px-14">

          {/* LEFT */}

          <motion.div
            initial={{
              opacity: 0,
              x: -25,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
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

          {/* RIGHT */}

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
          >
            <p className="text-base leading-8 text-[#102b29]/65 sm:text-lg">
              Trust is an important part of professional relationships.
              This section provides access to relevant company documents
              and certifications for clients who want to know more about
              K S & Company.
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

          {/* HEADER */}

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

          {/* LARGE PDF CARDS */}

          <div className="grid gap-8 pt-10 lg:grid-cols-2">

            {featuredDocuments.map((document, index) => {

              const Icon = document.icon;

              return (
                <motion.article
                  key={document.id}
                  initial={{
                    opacity: 0,
                    y: 35,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                  }}
                  className="
                    group
                    overflow-hidden
                    border
                    border-[#102b29]/10
                    bg-[#f4f3ef]
                    shadow-[0_12px_40px_rgba(16,43,41,0.06)]
                    transition-all
                    duration-500
                    hover:-translate-y-1
                    hover:shadow-[0_20px_55px_rgba(16,43,41,0.12)]
                  "
                >

                  {/* PDF FIRST PAGE */}

                  <div className="relative h-[430px] overflow-hidden bg-[#e8e7e2] sm:h-[500px] lg:h-[540px]">

                    {/* NUMBER */}

                    <div
                      className="
                        pointer-events-none
                        absolute
                        right-5
                        top-5
                        z-20
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        bg-[#102b29]/90
                        text-xs
                        font-semibold
                        tracking-[1px]
                        text-white
                        shadow-lg
                      "
                    >
                      0{index + 1}
                    </div>

                    {/* PDF */}

                    <iframe
                      src={getPdfPreviewUrl(document.file)}
                      title={`${document.title} preview`}
                      className="
                        absolute
                        inset-0
                        h-full
                        w-full
                        border-0
                        bg-white
                      "
                    />

                    {/* BOTTOM GRADIENT */}

                    <div
                      className="
                        pointer-events-none
                        absolute
                        inset-x-0
                        bottom-0
                        z-10
                        h-20
                        bg-gradient-to-t
                        from-black/20
                        to-transparent
                      "
                    />

                  </div>

                  {/* CARD INFORMATION */}

                  <div className="p-7 sm:p-9">

                    <div className="flex items-center justify-between gap-4">

                      <p className="text-[10px] font-semibold uppercase tracking-[3px] text-[#102b29]/40">
                        {document.type}
                      </p>

                      <div className="flex h-11 w-11 items-center justify-center bg-[#102b29]">

                        <Icon
                          size={20}
                          className="text-white"
                        />

                      </div>

                    </div>

                    <h3 className="mt-5 text-2xl font-semibold leading-tight text-[#102b29] sm:text-3xl">
                      {document.title}
                    </h3>

                    <p className="mt-4 max-w-2xl text-sm leading-7 text-[#102b29]/60">
                      {document.description}
                    </p>

                    {/* ACTIONS */}

                    <div className="mt-7 flex flex-wrap items-center gap-3">

                      <a
                        href={document.file}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          inline-flex
                          items-center
                          gap-2
                          bg-[#102b29]
                          px-6
                          py-3.5
                          text-xs
                          font-semibold
                          text-white
                          transition-all
                          duration-300
                          hover:bg-[#1b4541]
                        "
                      >
                        View Full Document

                        <ArrowUpRight size={16} />

                      </a>

                      <a
                        href={document.file}
                        download
                        className="
                          inline-flex
                          h-[46px]
                          w-[46px]
                          items-center
                          justify-center
                          border
                          border-[#102b29]/15
                          text-[#102b29]
                          transition-all
                          duration-300
                          hover:bg-[#102b29]
                          hover:text-white
                        "
                        aria-label={`Download ${document.title}`}
                      >
                        <Download size={17} />
                      </a>

                    </div>

                  </div>

                </motion.article>
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

          {/* HEADER */}

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

          {/* ========================================================
              SUPPORTING DOCUMENT CARDS
          ======================================================== */}

          <div className="mt-8 grid gap-4 md:grid-cols-2">

            {supportingDocuments.map((document, index) => {

              const Icon = document.icon;

              return (
                <motion.div
                  key={document.id}
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.06,
                  }}
                  className="
                    group
                    relative
                    flex
                    min-h-[155px]
                    items-center
                    overflow-hidden
                    border
                    border-[#102b29]/10
                    bg-white
                    px-5
                    py-5
                    transition-all
                    duration-300
                    hover:border-[#102b29]/20
                    hover:bg-[#102b29]
                    sm:min-h-[170px]
                    sm:px-6
                    lg:min-h-[180px]
                  "
                >

                  {/* ==================================================
                      LEFT IMAGE AREA
                  ================================================== */}

                 {/* ==================================================
    LEFT IMAGE AREA
================================================== */}

<div
  className="
    relative
    flex
    h-[120px]
    w-[105px]
    shrink-0
    items-center
    justify-center
    border-r
    border-[#102b29]/10
    pr-4
    transition-colors
    duration-300
    group-hover:border-white/15
    sm:h-[135px]
    sm:w-[130px]
    sm:pr-6
  "
>
  {/* IMAGE WITH BORDER ON ALL SIDES */}

  <div
    className="
      flex
      h-[88px]
      w-[88px]
      items-center
      justify-center
      overflow-hidden
      border
      border-[#102b29]/20
      bg-white
      p-1
      transition-all
      duration-300
      group-hover:border-white/40
      sm:h-[105px]
      sm:w-[105px]
    "
  >
    <img
      src={document.image}
      alt={document.title}
      className="
        h-full
        w-full
        object-contain
        transition-transform
        duration-500
        group-hover:scale-105
      "
    />
  </div>
</div>
                  {/* ==================================================
                      DOCUMENT INFORMATION
                  ================================================== */}

                  <div
                    className="
                      flex
                      min-w-0
                      flex-1
                      items-center
                      justify-between
                      gap-4
                      pl-5
                      sm:gap-6
                      sm:pl-6
                    "
                  >

                    {/* TEXT */}

                    <div className="min-w-0">

                      {/* FIRST LINE */}

                      <p
                        className="
                          text-[9px]
                          font-semibold
                          uppercase
                          tracking-[2.5px]
                          text-[#102b29]/40
                          transition-colors
                          duration-300
                          group-hover:text-white/45
                        "
                      >
                        {document.type}
                      </p>

                      {/* SECOND LINE */}

                      <h3
                        className="
                          mt-2
                          text-sm
                          font-semibold
                          leading-6
                          text-[#102b29]
                          transition-colors
                          duration-300
                          group-hover:text-white
                          sm:text-base
                          sm:leading-7
                        "
                      >
                        {document.title}
                      </h3>

                      {/* SUBTITLE */}

                      {document.subtitle && (
                        <p
                          className="
                            mt-1
                            text-xs
                            leading-5
                            text-[#102b29]/45
                            transition-colors
                            duration-300
                            group-hover:text-white/45
                          "
                        >
                          {document.subtitle}
                        </p>
                      )}

                    </div>

                    {/* ==================================================
                        ACTION BUTTONS
                    ================================================== */}

                    <div className="flex shrink-0 items-center gap-2">

                      {/* VIEW */}

                      <a
                        href={document.file}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          flex
                          h-11
                          w-11
                          items-center
                          justify-center
                          border
                          border-[#102b29]/10
                          text-[#102b29]
                          transition-all
                          duration-300
                          hover:bg-[#102b29]
                          hover:text-white
                          group-hover:border-white/20
                          group-hover:text-white
                          group-hover:hover:bg-white
                          group-hover:hover:text-[#102b29]
                        "
                        aria-label={`View ${document.title}`}
                      >
                        <ArrowUpRight size={17} />
                      </a>

                      {/* DOWNLOAD */}

                      <a
                        href={document.file}
                        download
                        className="
                          hidden
                          h-11
                          w-11
                          items-center
                          justify-center
                          border
                          border-[#102b29]/10
                          text-[#102b29]
                          transition-all
                          duration-300
                          hover:bg-[#102b29]
                          hover:text-white
                          group-hover:border-white/20
                          group-hover:text-white
                          group-hover:hover:bg-white/10
                          sm:flex
                        "
                        aria-label={`Download ${document.title}`}
                      >
                        <Download size={17} />
                      </a>

                    </div>

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

            {/* LEFT */}

            <div>

              <div className="flex h-14 w-14 items-center justify-center bg-[#102b29]">

                <ShieldCheck
                  size={25}
                  className="text-white"
                />

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

            {/* RIGHT */}

            <div className="grid gap-px bg-[#102b29]/10 sm:grid-cols-3">

              {trustPoints.map((point, index) => (

                <motion.div
                  key={point.title}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
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
              K S & Company
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