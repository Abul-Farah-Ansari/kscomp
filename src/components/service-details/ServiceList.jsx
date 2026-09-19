import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Check, X, Send, CheckCircle2 } from "lucide-react";
import { Icon } from "@iconify/react";
import emailjs from "@emailjs/browser";

/* =========================================================
   ICONIFY SERVICE ICONS
========================================================= */

const serviceIcons = {
  // Taxation
  "Income Tax Return (ITR)": "mdi:file-document-check-outline",
  "GST Registration": "mdi:file-percent-outline",
  "GST Return Filing": "mdi:receipt-text-check-outline",
  "TDS Return Filing": "mdi:calculator-variant-outline",
  "TCS Return Filing": "mdi:cash-check",
  "EPF Return Filing": "mdi:account-cash-outline",
  "ESIC Return Filing": "mdi:medical-bag",
  "FSSAI Annual Return": "mdi:food-outline",
  "ROC Filing": "mdi:file-document-check-outline",

  // Insurance
  Vehicle: "mdi:car-shield",
  Health: "mdi:heart-pulse",
  Life: "mdi:account-heart-outline",
  Marine: "mdi:ferry",
  "Home/Property": "mdi:home-shield-outline",

  // Accounting
  Bookkeeping: "mdi:book-open-outline",
  "Banking Entry": "mdi:bank-outline",
  "Accounts Receivable": "mdi:cash-plus",
  "Accounts Payable": "mdi:cash-minus",
  "Sales Invoice": "mdi:receipt-text-outline",
  "Credit Note": "mdi:note-edit-outline",
  "Purchase Invoice": "mdi:cart-outline",
  "Debit Note": "mdi:note-minus-outline",
  "Profit & Loss Account": "mdi:chart-line",
  "Balance Sheet": "mdi:scale-balance",

  // Finance
  "Saving Account": "mdi:bank-outline",
  "Personal Loan": "mdi:account-cash-outline",
  "Business Loan": "mdi:briefcase-check-outline",
  "Home Loan": "mdi:home-currency-usd",
  "LAP Loan": "mdi:home-lock-outline",
  "Credit Card": "mdi:credit-card-outline",

  // Registration
  "Company Registration": "mdi:office-building-outline",
  "Proprietorship Firm Registration": "mdi:store-outline",
  "Partnership Firm Registration": "mdi:handshake-outline",
  "Private Limited Company": "mdi:domain",
  "LLP Registration": "mdi:domain-plus",
  "One Person Company (OPC)": "mdi:account-tie-outline",
  "UDYAM / MSME Registration": "mdi:store-check-outline",
  "FSSAI / Food License": "mdi:food-outline",
  "Import Export Code (IEC)": "mdi:swap-horizontal-bold",
  "Trademark Registration": "mdi:trademark",

  // HR Compliance
  "Salary Sheet & Salary Slip": "mdi:cash-multiple",
  "ESI & EPF Compliance": "mdi:shield-account-outline",
  "HR Compliance Forms": "mdi:clipboard-text-outline",

  // Other Compliance
  "15CA & 15CB for Foreign Transactions": "mdi:currency-usd",
  "Project Report for Loan / Cash Credit": "mdi:file-chart-outline",

  // Government & Documentation
  "PAN Card": "mdi:card-account-details-outline",
  "TAN Card": "mdi:card-text-outline",
  DSC: "mdi:certificate-outline",
  Passport: "mdi:passport",
  "PAN-Aadhaar": "mdi:link-variant",
};

/* =========================================================
   SERVICE IMAGE FOLDERS
   Images are numbered 1, 2, 3... inside each folder.

   The number controls the service-image sequence.
   Example:
   1.png -> Service 01
   2.png -> Service 02
   3.png -> Service 03
   ...
========================================================= */

const serviceImageFolders = {
  "taxation-services": "1_Taxation Services",
  "insurance-services": "2_Insurance Services",
  "accounting-services": "3_Accounting Services",
  "registration-services": "4_Registration Services",
  "hr-compliance-services": "5_HR Compliance Services",
  "other-compliance": "6_Other Compliance",
  "government-documentation": "7_Government & Documentation",
  "finance-services": "8_Loans",
};

/*
  Vite imports every image from the Services directory.
  We then filter by the exact category folder and sort ONLY
  by the numeric filename.

  Therefore:
    1.png / 1.jpg / 1.webp -> Service 01
    2.png / 2.jpg / 2.webp -> Service 02
    10.png                  -> Service 10

  This avoids alphabetical filename ordering such as:
    1, 10, 11, 2, 3...
*/
const serviceImageFiles = import.meta.glob(
  "../../assets/Services/**/*.{png,jpg,jpeg,webp,avif}",
  { eager: true, query: "?url", import: "default" }
);

const getNumericFileNumber = (path) => {
  const fileName = path.split("/").pop() || "";
  const match = fileName.match(/^(\d+)(?:\.[^.]+)$/);

  return match ? Number(match[1]) : Number.MAX_SAFE_INTEGER;
};

const getServiceImages = (categoryId) => {
  const folder = serviceImageFolders[categoryId];

  if (!folder) return [];

  return Object.entries(serviceImageFiles)
    .filter(([path]) => path.includes(`/Services/${folder}/`))
    .sort(([pathA], [pathB]) => {
      return getNumericFileNumber(pathA) - getNumericFileNumber(pathB);
    })
    .map(([, image]) => image);
};

/* =========================================================
   MAIN COMPONENT
========================================================= */

const ServiceList = ({ data }) => {
  const [selectedService, setSelectedService] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  if (!data?.services?.length) return null;

  const serviceImages = getServiceImages(data.id);

  /*
    Taxation also includes ROC Filing.
    Add it here only when it is not already present in the
    supplied service data, so the component remains compatible
    with your existing servicePagesData.js.
  */
  const displayServices =
    data.id === "taxation-services" &&
    !data.services.some((service) => service.name === "ROC Filing")
      ? [
          ...data.services,
          {
            name: "ROC Filing",
            description:
              "Support for ROC filing requirements and applicable corporate compliance documentation.",
          },
        ]
      : data.services;

  /* =======================================================
     EMAILJS CONFIG
     Same IDs used in ContactSection.jsx
  ======================================================== */

  const EMAILJS_SERVICE_ID = "service_xyp8xo9";
  const EMAILJS_TEMPLATE_ID = "template_q5n7b2n";
  const EMAILJS_PUBLIC_KEY = "W5NCxywVfHt7M7Ubu";

  /* =======================================================
     OPEN QUERY FORM
  ======================================================== */

  const openQueryForm = (serviceName) => {
    setSelectedService(serviceName);
    setSubmitted(false);
    setSubmitError("");
    setFormData({
      name: "",
      phone: "",
      email: "",
      message: "",
    });

    document.body.style.overflow = "hidden";
  };

  /* =======================================================
     CLOSE QUERY FORM
  ======================================================== */

  const closeQueryForm = () => {
    if (submitting) return;

    setSelectedService(null);
    setSubmitted(false);
    setSubmitError("");
    document.body.style.overflow = "";
  };

  /* =======================================================
     FORM CHANGE
  ======================================================== */

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (submitError) {
      setSubmitError("");
    }
  };

  /* =======================================================
     FORM SUBMIT
  ======================================================== */

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (submitting || !selectedService) return;

    try {
      setSubmitting(true);
      setSubmitError("");

      const templateParams = {
        name: formData.name.trim(),
        phone: formData.phone.trim(),
        email: formData.email.trim(),
        service: selectedService,
        message:
          formData.message.trim() || "No additional details provided.",
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        {
          publicKey: EMAILJS_PUBLIC_KEY,
        }
      );

      setSubmitted(true);

      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS service query error:", error);

      setSubmitError(
        "Unable to send your enquiry. Please try again later or contact us directly."
      );
    } finally {
      setSubmitting(false);
    }
  };

  /* =======================================================
     RESET BODY SCROLL IF COMPONENT UNMOUNTS
  ======================================================== */

  React.useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <>
      <section
        id="service-list"
        className="relative overflow-hidden bg-[#f4f1eb] py-20 sm:py-24 lg:py-32"
      >
        {/* Decorative background */}

        <div className="pointer-events-none absolute -left-32 top-24 h-72 w-72 rounded-full border border-[#c5a46d]/15" />

        <div className="pointer-events-none absolute -right-40 bottom-24 h-96 w-96 rounded-full border border-[#285b68]/10" />

        <div className="pointer-events-none absolute left-[45%] top-[35%] h-72 w-72 rounded-full bg-[#c5a46d]/[0.025] blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          {/* ===================================================
              SECTION HEADING
          ==================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mb-12 max-w-3xl sm:mb-16 lg:mb-20"
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#c5a46d]" />

              <span className="text-[10px] font-bold tracking-[0.28em] text-[#285b68] sm:text-xs">
                {data.number} / {data.category?.toUpperCase()}
              </span>
            </div>

            <h2 className="font-serif text-4xl font-medium leading-[1.05] tracking-[-0.04em] text-[#0b211f] sm:text-5xl lg:text-6xl">
              Services designed
              <br />
              <span className="text-[#285b68]">around your needs.</span>
            </h2>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-[#0b211f]/65 sm:text-base sm:leading-8">
              Explore our {data.category?.toLowerCase()} services, delivered
              with practical guidance, professional accuracy and a clear focus
              on your requirements.
            </p>
          </motion.div>

          {/* ===================================================
              PREMIUM SERVICE CARDS
          ==================================================== */}

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {displayServices.map((service, index) => {
              const icon =
                serviceIcons[service.name] || "mdi:briefcase-outline";

              return (
                <motion.button
                  key={service.name}
                  type="button"
                  onClick={() => openQueryForm(service.name)}
                  initial={{
                    opacity: 0,
                    y: 28,
                    scale: 0.985,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.12,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: Math.min(index * 0.06, 0.3),
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    group
                    relative
                    aspect-square
                    w-full
                    overflow-hidden
                    border
                    border-[#0b211f]/10
                    bg-[#f4f1eb]
                    p-0
                    text-left
                    shadow-[0_14px_40px_rgba(11,33,31,0.06)]
                    transition-all
                    duration-500
                    hover:-translate-y-1.5
                    hover:border-[#c5a46d]/60
                    hover:shadow-[0_24px_60px_rgba(11,33,31,0.15)]
                    focus:outline-none
                    focus:ring-2
                    focus:ring-[#c5a46d]/50
                  "
                >
                  {/* =================================================
                      FULL-CARD IMAGE
                  ================================================== */}

                  {serviceImages[index] ? (
                    <img
                      src={serviceImages[index]}
                      alt={service.name}
                      className="
                        absolute
                        inset-0
                        h-full
                        w-full
                        object-cover
                        object-center
                        transition-transform
                        duration-700
                        ease-[cubic-bezier(0.22,1,0.36,1)]
                        group-hover:scale-[1.045]
                      "
                    />
                  ) : (
                    <div
                      className="
                        absolute
                        inset-0
                        flex
                        items-center
                        justify-center
                        bg-[#0b211f]
                        text-[#c5a46d]
                      "
                    >
                      <Icon icon={icon} width={46} height={46} />
                    </div>
                  )}

                  {/* =================================================
                      LIGHT IMAGE WASH
                      Keeps images clean before hover.
                  ================================================== */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-[#0b211f]/18
                      via-transparent
                      to-white/5
                      opacity-100
                      transition-opacity
                      duration-500
                      group-hover:opacity-0
                    "
                  />

                  {/* =================================================
                      HOVER OVERLAY
                  ================================================== */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      z-20
                      bg-[#0b211f]/0
                      transition-all
                      duration-500
                      group-hover:bg-[#0b211f]/88
                    "
                  />

                  {/* =================================================
                      HOVER CONTENT
                  ================================================== */}

                  <div
                    className="
                      absolute
                      inset-0
                      z-30
                      flex
                      flex-col
                      justify-end
                      p-6
                      opacity-0
                      transition-all
                      duration-500
                      group-hover:opacity-100
                      sm:p-7
                      lg:p-8
                    "
                  >
                    {/* Service content */}

                    <div
                      className="
                        translate-y-4
                        transition-transform
                        duration-500
                        group-hover:translate-y-0
                      "
                    >
                      <h3
                        className="
                          max-w-[92%]
                          text-[25px]
                          font-semibold
                          leading-[1.08]
                          tracking-[-0.035em]
                          text-white
                          sm:text-[27px]
                          lg:text-[29px]
                        "
                      >
                        {service.name}
                      </h3>

                      {service.description && (
                        <p
                          className="
                            mt-3
                            max-w-[92%]
                            text-[11px]
                            leading-5
                            text-white/65
                            sm:text-xs
                            sm:leading-6
                          "
                        >
                          {service.description}
                        </p>
                      )}
                    </div>

                    {/* Arrow */}

                    <div
                      className="
                        absolute
                        bottom-6
                        right-6
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        border
                        border-[#c5a46d]/50
                        bg-[#c5a46d]
                        text-[#0b211f]
                        transition-all
                        duration-500
                        group-hover:translate-x-0
                        sm:bottom-7
                        sm:right-7
                        lg:bottom-8
                        lg:right-8
                      "
                    >
                      <ArrowUpRight
                        size={18}
                        strokeWidth={1.7}
                        className="
                          transition-transform
                          duration-300
                          group-hover:-translate-y-0.5
                          group-hover:translate-x-0.5
                        "
                      />
                    </div>

                    {/* Bottom gold line */}

                    <div
                      className="
                        absolute
                        bottom-0
                        left-0
                        h-[3px]
                        w-0
                        bg-[#c5a46d]
                        transition-all
                        duration-700
                        group-hover:w-full
                      "
                    />
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* ===================================================
              BOTTOM NOTE
          ==================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-10 flex flex-col gap-4 border-l-2 border-[#c5a46d] pl-5 sm:mt-12 sm:flex-row sm:items-center sm:justify-between sm:gap-8"
          >
            <p className="max-w-2xl text-xs leading-6 text-[#0b211f]/60 sm:text-sm">
              Need help deciding which service is right for you? Our team can
              understand your requirement and guide you toward the appropriate
              solution.
            </p>

            <span className="shrink-0 text-[10px] font-bold tracking-[0.2em] text-[#285b68]">
              PROFESSIONAL • PRACTICAL • RELIABLE
            </span>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          SERVICE QUERY MODAL
      ====================================================== */}

      <AnimatePresence>
        {selectedService && (
          <motion.div
            className="
              fixed
              inset-0
              z-[999]
              flex
              items-center
              justify-center
              bg-[#071715]/75
              px-3
              py-3
              backdrop-blur-md
              sm:px-6
              sm:py-4
            "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                closeQueryForm();
              }
            }}
          >
            <motion.div
              initial={{
                opacity: 0,
                y: 30,
                scale: 0.97,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 20,
                scale: 0.97,
              }}
              transition={{
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                relative
                w-full
                max-w-2xl
                max-h-[calc(100dvh-24px)]
                overflow-hidden
                border
                border-[#c5a46d]/30
                bg-[#f8f7f3]
                shadow-[0_30px_100px_rgba(0,0,0,0.35)]
              "
            >
              {/* Modal top accent */}

              <div className="absolute left-0 right-0 top-0 h-[3px] bg-[#c5a46d]" />

              {/* Close */}

              <button
                type="button"
                onClick={closeQueryForm}
                disabled={submitting}
                aria-label="Close service enquiry form"
                className="
                  absolute
                  right-5
                  top-5
                  z-30
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  border
                  border-white/15
                  bg-[#0b211f]
                  text-white
                  transition-all
                  duration-300
                  hover:border-[#c5a46d]
                  hover:bg-[#c5a46d]
                  hover:text-[#0b211f]
                  disabled:cursor-not-allowed
                  disabled:opacity-50
                "
              >
                <X size={18} />
              </button>

              {/* Modal header */}

              <div className="bg-[#0b211f] px-5 pb-5 pt-6 text-white sm:px-8 sm:pb-6 sm:pt-7">
                <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#c5a46d]">
                  Service Enquiry
                </p>

                <h3 className="mt-3 max-w-xl font-serif text-3xl font-medium leading-tight tracking-[-0.03em] sm:text-4xl">
                  Let's discuss your
                  <span className="block text-[#c5a46d]">
                    requirements.
                  </span>
                </h3>

                <div className="mt-4 flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#c5a46d]/35 bg-[#c5a46d]/10 text-[#c5a46d]">
                    <Icon
                      icon={
                        serviceIcons[selectedService] ||
                        "mdi:briefcase-outline"
                      }
                      width={23}
                      height={23}
                    />
                  </div>

                  <div>
                    <p className="text-[9px] uppercase tracking-[0.2em] text-white/40">
                      Selected Service
                    </p>

                    <p className="mt-1 text-sm font-semibold text-white">
                      {selectedService}
                    </p>
                  </div>
                </div>
              </div>

              {/* Modal form / success */}

              {submitted ? (
                <div className="flex min-h-[320px] flex-col items-center justify-center px-6 py-8 text-center sm:px-10 sm:py-10">
                  <div className="flex h-16 w-16 items-center justify-center bg-[#0b211f] text-[#c5a46d]">
                    <CheckCircle2 size={32} strokeWidth={1.6} />
                  </div>

                  <h4 className="mt-5 font-serif text-3xl font-medium text-[#0b211f]">
                    Thank You!
                  </h4>

                  <p className="mt-4 max-w-md text-sm leading-7 text-[#0b211f]/60">
                    Your enquiry for{" "}
                    <strong className="font-semibold text-[#0b211f]">
                      {selectedService}
                    </strong>{" "}
                    has been submitted successfully.
                    <span className="mt-1 block font-semibold text-[#285b68]">
                      Thanks, we will contact you soon.
                    </span>
                  </p>

                  <button
                    type="button"
                    onClick={closeQueryForm}
                    className="mt-8 bg-[#0b211f] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#285b68]"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="grid gap-3.5 px-5 py-5 sm:grid-cols-2 sm:gap-4 sm:px-8 sm:py-6"
                >
                  {/* Selected service — locked */}

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="selected-service"
                      className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#0b211f]/45"
                    >
                      Selected Service
                    </label>

                    <input
                      id="selected-service"
                      type="text"
                      value={selectedService}
                      readOnly
                      className="
                        mt-1.5
                        h-10
                        w-full
                        border
                        border-[#0b211f]/10
                        bg-[#ece9e2]
                        px-4
                        text-sm
                        font-medium
                        text-[#0b211f]
                        outline-none
                      "
                    />
                  </div>

                  {/* Name */}

                  <div>
                    <label
                      htmlFor="service-query-name"
                      className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#0b211f]/45"
                    >
                      Full Name *
                    </label>

                    <input
                      id="service-query-name"
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      autoComplete="name"
                      className="
                        mt-1.5
                        h-10
                        w-full
                        border
                        border-[#0b211f]/10
                        bg-white
                        px-4
                        text-sm
                        text-[#0b211f]
                        outline-none
                        placeholder:text-[#0b211f]/25
                        focus:border-[#c5a46d]
                      "
                    />
                  </div>

                  {/* Phone */}

                  <div>
                    <label
                      htmlFor="service-query-phone"
                      className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#0b211f]/45"
                    >
                      Phone Number *
                    </label>

                    <input
                      id="service-query-phone"
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter phone number"
                      autoComplete="tel"
                      className="
                        mt-1.5
                        h-10
                        w-full
                        border
                        border-[#0b211f]/10
                        bg-white
                        px-4
                        text-sm
                        text-[#0b211f]
                        outline-none
                        placeholder:text-[#0b211f]/25
                        focus:border-[#c5a46d]
                      "
                    />
                  </div>

                  {/* Email */}

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="service-query-email"
                      className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#0b211f]/45"
                    >
                      Email Address *
                    </label>

                    <input
                      id="service-query-email"
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email address"
                      autoComplete="email"
                      className="
                        mt-1.5
                        h-10
                        w-full
                        border
                        border-[#0b211f]/10
                        bg-white
                        px-4
                        text-sm
                        text-[#0b211f]
                        outline-none
                        placeholder:text-[#0b211f]/25
                        focus:border-[#c5a46d]
                      "
                    />
                  </div>

                  {/* Requirement */}

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="service-query-message"
                      className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#0b211f]/45"
                    >
                      Your Requirement *
                    </label>

                    <textarea
                      id="service-query-message"
                      name="message"
                      required
                      rows="3"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us briefly how we can help you..."
                      className="
                        mt-1.5
                        w-full
                        resize-none
                        border
                        border-[#0b211f]/10
                        bg-white
                        p-4
                        text-sm
                        leading-6
                        text-[#0b211f]
                        outline-none
                        placeholder:text-[#0b211f]/25
                        focus:border-[#c5a46d]
                      "
                    />
                  </div>

                  {/* Error */}

                  {submitError && (
                    <div className="sm:col-span-2 border border-red-300 bg-red-50 px-4 py-3 text-sm leading-6 text-red-700">
                      {submitError}
                    </div>
                  )}

                  {/* Submit */}

                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="
                        flex
                        w-full
                        items-center
                        justify-center
                        gap-3
                        bg-[#0b211f]
                        px-6
                        py-3
                        text-sm
                        font-semibold
                        text-white
                        transition-all
                        duration-300
                        hover:bg-[#285b68]
                        disabled:cursor-not-allowed
                        disabled:opacity-60
                      "
                    >
                      {submitting ? "Sending..." : "Submit Enquiry"}

                      {!submitting && <Send size={17} />}
                    </button>
                  </div>

                  <p className="sm:col-span-2 text-center text-[10px] leading-5 text-[#0b211f]/40">
                    Your selected service will be included automatically in
                    the enquiry sent to K S & Company.
                  </p>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ServiceList;
