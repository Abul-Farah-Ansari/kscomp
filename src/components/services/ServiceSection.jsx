import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Icon } from "@iconify/react";
import { ArrowUpRight } from "lucide-react";

/*
|--------------------------------------------------------------------------
| SERVICE IMAGE FOLDERS
|--------------------------------------------------------------------------
| These folder names must match your actual folders inside:
|
| src/assets/Services/
|
*/

const categoryFolders = {
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
|--------------------------------------------------------------------------
| FIXED CATEGORY NUMBERS
|--------------------------------------------------------------------------
| Keep this order exactly as required on the website.
*/

const categoryNumbers = {
  "taxation-services": "01",
  "insurance-services": "02",
  "accounting-services": "03",
  "registration-services": "04",
  "hr-compliance-services": "05",
  "other-compliance": "06",
  "government-documentation": "07",
  "finance-services": "08",
};

/*
|--------------------------------------------------------------------------
| LOAD ALL SERVICE IMAGES
|--------------------------------------------------------------------------
| Vite automatically finds every image inside:
|
| src/assets/Services/
|
| including all subfolders.
|
| Example:
|
| src/assets/Services/
| ├── 1_Taxation Services/
| ├── 2_Insurance Services/
| ├── 3_Accounting Services/
| ├── 4_Registration Services/
| ├── 5_HR Compliance Services/
| ├── 6_Other Compliance/
| ├── 7_Government & Documentation/
| └── 8_Loans/
|
*/

const allServiceImages = import.meta.glob(
  "../../assets/Services/**/*.{png,jpg,jpeg,webp,avif}",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
);

/*
|--------------------------------------------------------------------------
| NATURAL SORT
|--------------------------------------------------------------------------
| This makes:
|
| 1
| 2
| 3
| ...
| 10
| 11
| 12
|
| appear in the correct order.
*/

const naturalSort = new Intl.Collator(undefined, {
  numeric: true,
  sensitivity: "base",
});

/*
|--------------------------------------------------------------------------
| GET IMAGES FOR ONE CATEGORY
|--------------------------------------------------------------------------
*/

const getCategoryImages = (categoryId) => {
  const folderName = categoryFolders[categoryId];

  if (!folderName) {
    return [];
  }

  const folderImages = Object.entries(allServiceImages)
    .filter(([path]) => {
      return (
        path.includes(`/Services/${folderName}/`) ||
        path.includes(`\\Services\\${folderName}\\`)
      );
    })
    .sort(([pathA], [pathB]) => {
      const fileA = pathA.split("/").pop() || pathA;
      const fileB = pathB.split("/").pop() || pathB;

      return naturalSort.compare(fileA, fileB);
    })
    .map(([, imageUrl]) => imageUrl);

  return folderImages;
};

/*
|--------------------------------------------------------------------------
| SERVICE ICONS
|--------------------------------------------------------------------------
*/

const serviceIcons = {
  /*
  |--------------------------------------------------------------------------
  | TAXATION
  |--------------------------------------------------------------------------
  */

  "Income Tax Return (ITR)": "mdi:file-document-check-outline",

  "GST Registration": "mdi:file-percent-outline",

  "GST Return Filing": "mdi:receipt-text-check-outline",

  "TDS Return Filing": "mdi:calculator-variant-outline",

  "TCS Return Filing": "mdi:cash-check",

  "EPF Return Filing": "mdi:account-cash-outline",

  "ESIC Return Filing": "mdi:medical-bag",

  "ROC Filing": "mdi:file-document-edit-outline",

  /*
  |--------------------------------------------------------------------------
  | INSURANCE
  |--------------------------------------------------------------------------
  */

  "Vehicle Insurance": "mdi:car-shield",

  "Health Insurance": "mdi:heart-pulse",

  "Life Insurance": "mdi:account-heart-outline",

  "Marine Insurance": "mdi:ferry",

  "Home / Property Insurance": "mdi:home-shield-outline",

  /*
  |--------------------------------------------------------------------------
  | ACCOUNTING
  |--------------------------------------------------------------------------
  */

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

  /*
  |--------------------------------------------------------------------------
  | REGISTRATION
  |--------------------------------------------------------------------------
  */

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

  /*
  |--------------------------------------------------------------------------
  | HR COMPLIANCE
  |--------------------------------------------------------------------------
  */

  "Salary Sheet & Salary Slip": "mdi:cash-multiple",

  "ESI & EPF Compliance": "mdi:shield-account-outline",

  "HR Compliance Forms": "mdi:clipboard-text-outline",

  /*
  |--------------------------------------------------------------------------
  | OTHER COMPLIANCE
  |--------------------------------------------------------------------------
  */

  "15CA & 15CB for Foreign Transactions": "mdi:currency-usd",

  "Project Report for Loan / Cash Credit": "mdi:file-chart-outline",

  /*
  |--------------------------------------------------------------------------
  | GOVERNMENT & DOCUMENTATION
  |--------------------------------------------------------------------------
  */

  "PAN Card (New / Correction)": "mdi:card-account-details-outline",

  "PAN Card": "mdi:card-account-details-outline",

  "TAN Card (New / Correction)": "mdi:card-text-outline",

  "TAN Card": "mdi:card-text-outline",

  "Digital Signature Certificate (DSC)": "mdi:certificate-outline",

  DSC: "mdi:certificate-outline",

  "Passport Apply Online": "mdi:passport",

  Passport: "mdi:passport",

  "PAN-Aadhaar Linking": "mdi:link-variant",

  /*
  |--------------------------------------------------------------------------
  | LOANS & FINANCE
  |--------------------------------------------------------------------------
  */

  "Saving Account": "mdi:bank-outline",

  "Personal Loan": "mdi:account-cash-outline",

  "Business Loan": "mdi:briefcase-check-outline",

  "Home Loan": "mdi:home-currency-usd",

  "LAP Loan": "mdi:home-lock-outline",

  "Credit Card": "mdi:credit-card-outline",
};

/*
|--------------------------------------------------------------------------
| SERVICE SECTION
|--------------------------------------------------------------------------
*/

const ServiceSection = ({ category }) => {
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

  /*
  |--------------------------------------------------------------------------
  | EMAILJS
  |--------------------------------------------------------------------------
  | Same EmailJS IDs used by your existing enquiry form.
  */

  const EMAILJS_SERVICE_ID = "service_xyp8xo9";

  const EMAILJS_TEMPLATE_ID = "template_q5n7b2n";

  const EMAILJS_PUBLIC_KEY = "W5NCxywVfHt7M7Ubu";

  /*
  |--------------------------------------------------------------------------
  | OPEN QUERY FORM
  |--------------------------------------------------------------------------
  */

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

  /*
  |--------------------------------------------------------------------------
  | CLOSE QUERY FORM
  |--------------------------------------------------------------------------
  */

  const closeQueryForm = () => {
    if (submitting) return;

    setSelectedService(null);

    setSubmitted(false);

    setSubmitError("");

    document.body.style.overflow = "";
  };

  /*
  |--------------------------------------------------------------------------
  | FORM CHANGE
  |--------------------------------------------------------------------------
  */

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

  /*
  |--------------------------------------------------------------------------
  | SUBMIT EMAILJS FORM
  |--------------------------------------------------------------------------
  */

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (submitting || !selectedService) {
      return;
    }

    try {
      setSubmitting(true);

      setSubmitError("");

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: formData.name.trim(),

          phone: formData.phone.trim(),

          email: formData.email.trim(),

          service: selectedService,

          message:
            formData.message.trim() ||
            "No additional details provided.",
        },
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
      console.error(
        "EmailJS service query error:",
        error
      );

      setSubmitError(
        "Unable to send your enquiry. Please try again later or contact us directly."
      );
    } finally {
      setSubmitting(false);
    }
  };

  /*
  |--------------------------------------------------------------------------
  | CLEAN BODY SCROLL
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  /*
  |--------------------------------------------------------------------------
  | IMPORTANT
  |--------------------------------------------------------------------------
  | Category number is controlled by categoryNumbers above.
  |
  | This keeps the category numbering fixed to 01–08.
  */

  const categoryNumber =
    categoryNumbers[category.id] ||
    "01";

  /*
  |--------------------------------------------------------------------------
  | GET ALL IMAGES FROM CURRENT CATEGORY FOLDER
  |--------------------------------------------------------------------------
  */

  const categoryImages = getCategoryImages(category.id);

  return (
    <>
      {/* ================================================================
          CATEGORY SECTION
      ================================================================= */}

      <section
        id={category.id}
        aria-labelledby={`${category.id}-heading`}
        className="
          scroll-mt-32
          bg-[#f5f3ee]
          px-4
          py-16
          sm:px-6
          lg:px-8
          xl:px-10
        "
      >
        <div className="mx-auto max-w-[1500px]">

          {/* ============================================================
              CATEGORY HEADER
          ============================================================ */}

          <div className="mb-12">

            <div className="mb-4 flex items-center gap-4">

              <span
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[4px]
                  text-[#b18b4a]
                  sm:text-[11px]
                "
              >
                Category {categoryNumber}
              </span>

              <span className="h-px w-16 bg-[#c5a46d]" />

            </div>

            {/* IMPORTANT:
                Your servicePagesData uses "category"
                instead of "title".
            */}

            <h2
              id={`${category.id}-heading`}
              className="
                max-w-4xl
                text-3xl
                font-semibold
                tracking-tight
                text-[#102b29]
                sm:text-4xl
                lg:text-5xl
              "
            >
              {category.category || category.title}
            </h2>

            {/* IMPORTANT:
                Your servicePagesData uses "shortDescription".
            */}

            {(category.shortDescription ||
              category.description) && (
              <p
                className="
                  mt-4
                  max-w-2xl
                  text-sm
                  leading-7
                  text-gray-500
                  sm:text-base
                "
              >
                {category.shortDescription ||
                  category.description}
              </p>
            )}

          </div>

          {/* ============================================================
              SERVICE GRID
          ============================================================ */}

          <div
            className="
              grid
              grid-cols-1
              gap-5
              sm:grid-cols-2
              lg:grid-cols-3
              xl:grid-cols-4
            "
          >

            {category.services?.map(
              (service, index) => {

                /*
                |--------------------------------------------------------------------------
                | IMAGE MAPPING
                |--------------------------------------------------------------------------
                |
                | Image 1 from folder = Service 01
                | Image 2 from folder = Service 02
                | Image 3 from folder = Service 03
                |
                | This means your image filenames do NOT matter.
                |
                */

                const serviceImage =
                  categoryImages[index];

                const icon =
                  serviceIcons[service.name] ||
                  "mdi:briefcase-outline";

                return (
                  <motion.article
                    key={`${category.id}-${service.name}-${index}`}

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
                      amount: 0.15,
                    }}

                    transition={{
                      duration: 0.55,
                      delay: index * 0.06,
                      ease: [0.22, 1, 0.36, 1],
                    }}

                    onClick={() =>
                      openQueryForm(service.name)
                    }

                    role="button"

                    tabIndex={0}

                    onKeyDown={(e) => {
                      if (
                        e.key === "Enter" ||
                        e.key === " "
                      ) {
                        e.preventDefault();

                        openQueryForm(
                          service.name
                        );
                      }
                    }}

                    className="
                      group
                      relative
                      aspect-square
                      w-full
                      cursor-pointer
                      overflow-hidden
                      border
                      border-[#e5e1d8]
                      bg-white
                      shadow-[0_8px_30px_rgba(16,43,41,0.04)]
                      transition-all
                      duration-500
                      hover:-translate-y-1
                      hover:shadow-[0_18px_45px_rgba(16,43,41,0.12)]
                    "
                  >

                    {/* ====================================================
                        SERVICE IMAGE
                    ==================================================== */}

                    {serviceImage ? (
                      <img
                        src={serviceImage}
                        alt={service.name}
                        loading="lazy"
                        className="
                          absolute
                          inset-0
                          h-full
                          w-full
                          object-cover
                          object-center
                          transition-transform
                          duration-700
                          ease-out
                          group-hover:scale-[1.03]
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
                          bg-[#f8f6f1]
                        "
                      >
                        <Icon
                          icon={icon}
                          className="
                            text-5xl
                            text-[#c5a46d]
                          "
                        />
                      </div>
                    )}

                    {/* ====================================================
                        DARK HOVER OVERLAY
                    ==================================================== */}

                    <div
                      className="
                        absolute
                        inset-0
                        z-10
                        bg-gradient-to-t
                        from-[#102b29]
                        via-[#102b29]/85
                        to-[#102b29]/20
                        opacity-0
                        transition-opacity
                        duration-500
                        group-hover:opacity-100
                      "
                    />

                    {/* ====================================================
                        HOVER CONTENT
                    ==================================================== */}

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
                      "
                    >

                      {/* SERVICE NAME */}

                      <h3
                        className="
                          max-w-[92%]
                          text-xl
                          font-semibold
                          leading-tight
                          text-white
                          sm:text-2xl
                        "
                      >
                        {service.name}
                      </h3>

                      {/* DESCRIPTION */}

                      {service.description && (
                        <p
                          className="
                            mt-3
                            max-w-[95%]
                            text-xs
                            leading-6
                            text-white/70
                            sm:text-sm
                          "
                        >
                          {service.description}
                        </p>
                      )}

                      {/* BOTTOM CONTROLS */}

                      <div
                        className="
                          mt-5
                          flex
                          items-center
                          justify-between
                        "
                      >

                        {/* SERVICE ICON */}

                        <div
                          className="
                            flex
                            h-10
                            w-10
                            items-center
                            justify-center
                            border
                            border-white/10
                            bg-white/10
                            text-[#c5a46d]
                            backdrop-blur-sm
                          "
                        >
                          <Icon
                            icon={icon}
                            className="text-lg"
                          />
                        </div>

                        {/* ARROW */}

                        <div
                          className="
                            flex
                            h-10
                            w-10
                            items-center
                            justify-center
                            bg-[#f5f1e8]
                            text-[#102b29]
                            transition-transform
                            duration-300
                            group-hover:translate-x-1
                          "
                        >
                          <ArrowUpRight
                            size={18}
                            strokeWidth={1.7}
                          />
                        </div>

                      </div>

                    </div>

                  </motion.article>
                );
              }
            )}

          </div>

          {/* ================================================================
              IMAGE COUNT WARNING
          ================================================================= */}

          {categoryImages.length <
            (category.services?.length || 0) && (
            <div
              className="
                mt-6
                border
                border-amber-200
                bg-amber-50
                px-4
                py-3
                text-xs
                text-amber-800
              "
            >
              This category has{" "}
              {category.services?.length || 0}{" "}
              services, but only{" "}
              {categoryImages.length} image
              {categoryImages.length === 1
                ? ""
                : "s"}{" "}
              were found in:

              <span className="ml-1 font-semibold">
                {categoryFolders[category.id]}
              </span>
            </div>
          )}

        </div>
      </section>

      {/* ================================================================
          SERVICE ENQUIRY MODAL
      ================================================================= */}

      {selectedService && (
        <div
          className="
            fixed
            inset-0
            z-[100]
            flex
            items-center
            justify-center
            bg-[#071715]/75
            px-4
            py-6
            backdrop-blur-sm
          "
          role="dialog"
          aria-modal="true"
          aria-labelledby="service-enquiry-title"

          onMouseDown={(e) => {
            if (
              e.target === e.currentTarget &&
              !submitting
            ) {
              closeQueryForm();
            }
          }}
        >

          <motion.div
            initial={{
              opacity: 0,
              y: 18,
              scale: 0.98,
            }}

            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}

            transition={{
              duration: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}

            className="
              relative
              w-full
              max-w-[560px]
              overflow-hidden
              border
              border-[#c5a46d]/25
              bg-[#f7f4ed]
              shadow-[0_30px_100px_rgba(0,0,0,0.28)]
            "
          >

            {/* ============================================================
                MODAL HEADER
            ============================================================ */}

            <div className="bg-[#0b211f] px-6 py-6 sm:px-8">

              <button
                type="button"
                onClick={closeQueryForm}
                disabled={submitting}
                aria-label="Close enquiry form"
                className="
                  absolute
                  right-4
                  top-4
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  border
                  border-white/15
                  text-xl
                  text-white/75
                  transition
                  hover:border-[#c5a46d]
                  hover:text-[#c5a46d]
                  disabled:cursor-not-allowed
                  disabled:opacity-40
                "
              >
                ×
              </button>

              <p
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[3px]
                  text-[#c5a46d]
                "
              >
                Service Enquiry
              </p>

              <h2
                id="service-enquiry-title"
                className="
                  mt-2
                  pr-10
                  text-2xl
                  font-semibold
                  tracking-[-0.02em]
                  text-white
                  sm:text-3xl
                "
              >
                {selectedService}
              </h2>

              <p
                className="
                  mt-2
                  text-xs
                  leading-5
                  text-white/60
                "
              >
                Share your details and our team
                will get in touch with you.
              </p>

            </div>

            {/* ============================================================
                SUCCESS MESSAGE
            ============================================================ */}

            {submitted ? (
              <div
                className="
                  px-6
                  py-12
                  text-center
                  sm:px-8
                "
              >

                <div
                  className="
                    mx-auto
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-full
                    bg-[#102b29]
                    text-2xl
                    text-[#c5a46d]
                  "
                >
                  ✓
                </div>

                <h3
                  className="
                    mt-5
                    text-2xl
                    font-semibold
                    text-[#102b29]
                  "
                >
                  Enquiry Sent
                </h3>

                <p
                  className="
                    mx-auto
                    mt-3
                    max-w-sm
                    text-sm
                    leading-6
                    text-[#102b29]/60
                  "
                >
                  Thank you for contacting K S &
                  Company. Our team will get back
                  to you shortly.
                </p>

                <button
                  type="button"
                  onClick={closeQueryForm}
                  className="
                    mt-7
                    inline-flex
                    items-center
                    justify-center
                    bg-[#0b211f]
                    px-7
                    py-3
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[1.5px]
                    text-white
                    transition
                    hover:bg-[#285b68]
                  "
                >
                  Close
                </button>

              </div>
            ) : (

              /* ==========================================================
                 ENQUIRY FORM
              ========================================================== */

              <form
                onSubmit={handleSubmit}
                className="px-6 py-7 sm:px-8"
              >

                {/* NAME + PHONE */}

                <div
                  className="
                    grid
                    gap-5
                    sm:grid-cols-2
                  "
                >

                  {/* NAME */}

                  <div>

                    <label
                      htmlFor="service-enquiry-name"
                      className="
                        mb-2
                        block
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-[1.8px]
                        text-[#102b29]/70
                      "
                    >
                      Name
                    </label>

                    <input
                      id="service-enquiry-name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      autoComplete="name"
                      placeholder="Your name"
                      className="
                        h-12
                        w-full
                        border
                        border-[#102b29]/12
                        bg-white
                        px-4
                        text-sm
                        text-[#102b29]
                        outline-none
                        transition
                        placeholder:text-[#102b29]/35
                        focus:border-[#c5a46d]
                      "
                    />

                  </div>

                  {/* PHONE */}

                  <div>

                    <label
                      htmlFor="service-enquiry-phone"
                      className="
                        mb-2
                        block
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-[1.8px]
                        text-[#102b29]/70
                      "
                    >
                      Phone
                    </label>

                    <input
                      id="service-enquiry-phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      autoComplete="tel"
                      placeholder="+91 XXXXX XXXXX"
                      className="
                        h-12
                        w-full
                        border
                        border-[#102b29]/12
                        bg-white
                        px-4
                        text-sm
                        text-[#102b29]
                        outline-none
                        transition
                        placeholder:text-[#102b29]/35
                        focus:border-[#c5a46d]
                      "
                    />

                  </div>

                </div>

                {/* EMAIL */}

                <div className="mt-5">

                  <label
                    htmlFor="service-enquiry-email"
                    className="
                      mb-2
                      block
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[1.8px]
                      text-[#102b29]/70
                    "
                  >
                    Email
                  </label>

                  <input
                    id="service-enquiry-email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                    placeholder="you@example.com"
                    className="
                      h-12
                      w-full
                      border
                      border-[#102b29]/12
                      bg-white
                      px-4
                      text-sm
                      text-[#102b29]
                      outline-none
                      transition
                      placeholder:text-[#102b29]/35
                      focus:border-[#c5a46d]
                    "
                  />

                </div>

                {/* MESSAGE */}

                <div className="mt-5">

                  <label
                    htmlFor="service-enquiry-message"
                    className="
                      mb-2
                      block
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[1.8px]
                      text-[#102b29]/70
                    "
                  >
                    Message
                  </label>

                  <textarea
                    id="service-enquiry-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us briefly about your requirement..."
                    className="
                      w-full
                      resize-none
                      border
                      border-[#102b29]/12
                      bg-white
                      px-4
                      py-3
                      text-sm
                      leading-6
                      text-[#102b29]
                      outline-none
                      transition
                      placeholder:text-[#102b29]/35
                      focus:border-[#c5a46d]
                    "
                  />

                </div>

                {/* ERROR */}

                {submitError && (
                  <p
                    className="
                      mt-4
                      border
                      border-red-200
                      bg-red-50
                      px-4
                      py-3
                      text-xs
                      leading-5
                      text-red-700
                    "
                  >
                    {submitError}
                  </p>
                )}

                {/* SUBMIT */}

                <button
                  type="submit"
                  disabled={submitting}
                  className="
                    mt-6
                    flex
                    h-12
                    w-full
                    items-center
                    justify-center
                    gap-2
                    bg-[#0b211f]
                    px-6
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[1.8px]
                    text-white
                    transition
                    hover:bg-[#285b68]
                    disabled:cursor-not-allowed
                    disabled:opacity-60
                  "
                >
                  {submitting
                    ? "Sending..."
                    : "Send Enquiry"}

                  {!submitting && (
                    <ArrowUpRight
                      size={17}
                      strokeWidth={1.8}
                    />
                  )}
                </button>

                <p
                  className="
                    mt-4
                    text-center
                    text-[10px]
                    leading-5
                    text-[#102b29]/45
                  "
                >
                  Your enquiry will be sent
                  securely to K S & Company.
                </p>

              </form>
            )}

          </motion.div>

        </div>
      )}
    </>
  );
};

export default ServiceSection;