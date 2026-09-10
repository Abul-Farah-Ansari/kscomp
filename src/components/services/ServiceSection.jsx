import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Icon } from "@iconify/react";


/* =========================================
   CATEGORY BACKGROUND IMAGES
========================================= */

const categoryImages = {
  "taxation-services":
    "/images/services/taxation.jpg",

  "accounting-services":
    "/images/services/accounting.jpg",

  "registration-services":
    "/images/services/registration.jpg",

  "hr-compliance-services":
    "/images/services/hr.jpg",

  "other-compliance":
    "/images/services/compliance.jpg",

  "government-documentation":
    "/images/services/documentation.jpg",

  "insurance-services":
    "/images/services/insurance.jpg",

  "finance-services":
    "/images/services/finance.jpg",
};


/* =========================================
   INDIVIDUAL SERVICE ICONS
========================================= */

const serviceIcons = {

  /* ================= TAXATION ================= */

  "Income Tax Return (ITR)":
    "mdi:file-document-check-outline",

  "GST Registration":
    "mdi:file-percent-outline",

  "GST Return Filing":
    "mdi:receipt-text-check-outline",

  "TDS Return Filing":
    "mdi:calculator-variant-outline",

  "TCS Return Filing":
    "mdi:cash-check",

  "EPF Return Filing":
    "mdi:account-cash-outline",

  "ESIC Return Filing":
    "mdi:medical-bag",


  /* ================= ACCOUNTING ================= */

  Bookkeeping:
    "mdi:book-open-outline",

  "Banking Entry":
    "mdi:bank-outline",

  "Accounts Receivable":
    "mdi:cash-plus",

  "Accounts Payable":
    "mdi:cash-minus",

  "Sales Invoice":
    "mdi:receipt-text-outline",

  "Credit Note":
    "mdi:note-edit-outline",

  "Purchase Invoice":
    "mdi:cart-outline",

  "Debit Note":
    "mdi:note-minus-outline",

  "Profit & Loss Account":
    "mdi:chart-line",

  "Balance Sheet":
    "mdi:scale-balance",


  /* ================= REGISTRATION ================= */

  "Company Registration":
    "mdi:office-building-outline",

  "Proprietorship Firm Registration":
    "mdi:store-outline",

  "Partnership Firm Registration":
    "mdi:handshake-outline",

  "Private Limited Company":
    "mdi:domain",

  "LLP Registration":
    "mdi:domain-plus",

  "One Person Company (OPC)":
    "mdi:account-tie-outline",

  "UDYAM / MSME Registration":
    "mdi:store-check-outline",

  "FSSAI / Food License":
    "mdi:food-outline",

  "Import Export Code (IEC)":
    "mdi:swap-horizontal-bold",

  "Trademark Registration":
    "mdi:trademark",


  /* ================= HR COMPLIANCE ================= */

  "Salary Sheet & Salary Slip":
    "mdi:cash-multiple",

  "ESI & EPF Compliance":
    "mdi:shield-account-outline",

  "HR Compliance Forms":
    "mdi:clipboard-text-outline",


  /* ================= OTHER COMPLIANCE ================= */

  "15CA & 15CB for Foreign Transactions":
    "mdi:currency-usd",

  "Project Report for Loan / Cash Credit":
    "mdi:file-chart-outline",


  /* ================= GOVERNMENT ================= */

  "PAN Card (New / Correction)":
    "mdi:card-account-details-outline",

  "TAN Card (New / Correction)":
    "mdi:card-text-outline",

  "Digital Signature Certificate (DSC)":
    "mdi:certificate-outline",

  "Passport Apply Online":
    "mdi:passport",

  "PAN-Aadhaar Linking":
    "mdi:link-variant",


  /* ================= INSURANCE ================= */

  "Vehicle Insurance":
    "mdi:car-shield",

  "Health Insurance":
    "mdi:heart-pulse",

  "Life Insurance":
    "mdi:account-heart-outline",

  "Marine Insurance":
    "mdi:ferry",

  "Home / Property Insurance":
    "mdi:home-shield-outline",


  /* ================= FINANCE ================= */

  "Saving Account":
    "mdi:bank-outline",

  "Personal Loan":
    "mdi:account-cash-outline",

  "Business Loan":
    "mdi:briefcase-check-outline",

  "Home Loan":
    "mdi:home-currency-usd",

  "LAP Loan":
    "mdi:home-lock-outline",

  "Credit Card":
    "mdi:credit-card-outline",
};


/* =========================================
   EXACT CATEGORY NUMBERS

   01 - Taxation
   02 - Insurance
   03 - Accounting
   04 - Loan & Finance
   05 - Registration
   06 - HR Compliance
   07 - Other Compliance
   08 - Government & Documentation
========================================= */

const categoryNumbers = {
  "taxation-services": "01",
  "insurance-services": "02",
  "accounting-services": "03",
  "finance-services": "04",
  "registration-services": "05",
  "hr-compliance-services": "06",
  "other-compliance": "07",
  "government-documentation": "08",
};


/* =========================================
   SERVICE SECTION
========================================= */

const ServiceSection = ({
  category,
  dark = false,
  onServiceClick,
}) => {

  const image = categoryImages[category.id];

  /*
   * Use the number passed from Services.jsx.
   * If it is not passed, use the exact category
   * numbering defined above.
   */

  const categoryNumber =
    category.number ||
    categoryNumbers[category.id] ||
    "01";


  return (
    <section
      id={category.id}
      aria-labelledby={`${category.id}-heading`}
      className={`
        scroll-mt-32
        px-5
        py-20
        sm:px-8
        sm:py-24
        lg:py-28
        ${
          dark
            ? "bg-[#102b29]"
            : "bg-[#f3f1ec]"
        }
      `}
    >

      <div className="mx-auto max-w-7xl">

        <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr]">


          {/* =================================
              LEFT CONTENT
          ================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}

            whileInView={{
              opacity: 1,
              x: 0,
            }}

            viewport={{
              once: true,
              amount: 0.25,
            }}

            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}

            className="lg:sticky lg:top-28 lg:self-start"
          >

            <div
              className={`
                border-l-2
                pl-6
                ${
                  dark
                    ? "border-white/20"
                    : "border-[#102b29]/25"
                }
              `}
            >


              {/* CATEGORY LABEL */}

              <span
                className={`
                  text-xs
                  font-semibold
                  tracking-[0.3em]
                  ${
                    dark
                      ? "text-white/40"
                      : "text-[#102b29]/40"
                  }
                `}
              >
                CATEGORY {categoryNumber}
              </span>


              {/* CATEGORY TITLE */}

              <h2
                id={`${category.id}-heading`}
                className={`
                  mt-5
                  text-4xl
                  font-bold
                  leading-tight
                  tracking-tight
                  sm:text-5xl
                  ${
                    dark
                      ? "text-white"
                      : "text-[#102b29]"
                  }
                `}
              >
                {category.category}
              </h2>


              {/* DESCRIPTION */}

              <p
                className={`
                  mt-6
                  max-w-md
                  text-base
                  leading-8
                  ${
                    dark
                      ? "text-white/60"
                      : "text-[#102b29]/60"
                  }
                `}
              >
                {category.shortDescription}
              </p>

            </div>


            {/* BOTTOM NOTE */}

            <div
              className={`
                mt-10
                flex
                items-center
                gap-4
                text-sm
                ${
                  dark
                    ? "text-white/40"
                    : "text-[#102b29]/45"
                }
              `}
            >

              <span
                className={`
                  h-px
                  w-12
                  ${
                    dark
                      ? "bg-white/20"
                      : "bg-[#102b29]/20"
                  }
                `}
              />

              Click a service to know more

            </div>

          </motion.div>


          {/* =================================
              SERVICE CARDS
          ================================= */}

          <div
            className="
              grid
              grid-cols-1
              gap-4
              sm:grid-cols-2
              xl:grid-cols-3
            "
          >

            {category.services.map((service, index) => {

              const serviceIcon =
                serviceIcons[service.name] ||
                "mdi:briefcase-outline";


              return (
                <motion.button
                  key={service.name}
                  type="button"

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
                    duration: 0.4,
                    delay: index * 0.04,
                    ease: [0.22, 1, 0.36, 1],
                  }}

                  onClick={() =>
                    onServiceClick({
                      ...service,
                      categoryName: category.category,
                    })
                  }

                  className={`
                    group
                    relative
                    aspect-square
                    overflow-hidden
                    border
                    p-6
                    text-left
                    transition-all
                    duration-300

                    focus:outline-none
                    focus:ring-2
                    focus:ring-[#c7a45d]
                    focus:ring-offset-2

                    ${
                      dark
                        ? `
                          border-white/10
                          bg-white/[0.035]
                          hover:border-white/20
                          hover:bg-white/[0.07]
                        `
                        : `
                          border-[#102b29]/10
                          bg-white
                          hover:border-[#102b29]/25
                          hover:shadow-lg
                        `
                    }
                  `}
                >


                  {/* ===============================
                      BACKGROUND IMAGE
                  =============================== */}

                  {image && (
                    <div
                      className={`
                        pointer-events-none
                        absolute
                        bottom-0
                        right-0
                        h-[48%]
                        w-[55%]
                        bg-cover
                        bg-center
                        transition-all
                        duration-500
                        ${
                          dark
                            ? "opacity-[0.08] group-hover:opacity-[0.14]"
                            : "opacity-[0.07] group-hover:opacity-[0.12]"
                        }
                      `}
                      style={{
                        backgroundImage:
                          `url(${image})`,
                      }}
                    />
                  )}


                  {/* ===============================
                      GRADIENT OVERLAY
                  =============================== */}

                  <div
                    className={`
                      pointer-events-none
                      absolute
                      inset-0
                      ${
                        dark
                          ? "bg-gradient-to-t from-[#102b29] via-[#102b29]/95 to-transparent"
                          : "bg-gradient-to-t from-white via-white/90 to-transparent"
                      }
                    `}
                  />


                  {/* ===============================
                      CARD NUMBER
                  =============================== */}

                  <span
                    className={`
                      relative
                      z-10
                      text-xs
                      font-semibold
                      tracking-[0.2em]
                      ${
                        dark
                          ? "text-white/30"
                          : "text-[#102b29]/30"
                      }
                    `}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>


                  {/* ===============================
                      ICON
                  =============================== */}

                  <div
                    className={`
                      absolute
                      right-6
                      top-14
                      z-10
                      transition-all
                      duration-300
                      group-hover:-translate-y-1
                      group-hover:scale-105
                      ${
                        dark
                          ? "text-[#c7a45d]"
                          : "text-[#9b7a36]"
                      }
                    `}
                  >

                    <Icon
                      icon={serviceIcon}
                      width="58"
                      height="58"
                    />

                  </div>


                  {/* ===============================
                      CONTENT
                  =============================== */}

                  <div
                    className="
                      relative
                      z-10
                      flex
                      h-[calc(100%-20px)]
                      flex-col
                      justify-end
                    "
                  >


                    {/* SERVICE NAME */}

                    <h3
                      className={`
                        text-xl
                        font-semibold
                        leading-snug
                        ${
                          dark
                            ? "text-white"
                            : "text-[#102b29]"
                        }
                      `}
                    >
                      {service.name}
                    </h3>


                    {/* BOTTOM ACTION */}

                    <div
                      className={`
                        mt-5
                        flex
                        items-center
                        justify-between
                        border-t
                        pt-4
                        ${
                          dark
                            ? "border-white/10"
                            : "border-[#102b29]/10"
                        }
                      `}
                    >

                      <span
                        className={`
                          text-xs
                          font-medium
                          tracking-[0.08em]
                          ${
                            dark
                              ? "text-white/45"
                              : "text-[#102b29]/45"
                          }
                        `}
                      >
                        VIEW DETAILS
                      </span>


                      <ArrowUpRight
                        size={18}
                        strokeWidth={1.7}
                        className={`
                          transition-transform
                          duration-300
                          group-hover:-translate-y-1
                          group-hover:translate-x-1
                          ${
                            dark
                              ? "text-white"
                              : "text-[#102b29]"
                          }
                        `}
                      />

                    </div>

                  </div>

                </motion.button>
              );
            })}

          </div>

        </div>

      </div>

    </section>
  );
};

export default ServiceSection;