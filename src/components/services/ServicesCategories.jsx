import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { Icon } from "@iconify/react";
import { servicesData } from "./servicesData";

/* =========================================
   CATEGORY BACKGROUND IMAGES
========================================= */

const categoryImages = {
  "taxation-services":
    "/images/services/taxation.jpg",

  "finance-services":
    "/images/services/finance.jpg",

  "insurance-services":
    "/images/services/insurance.jpg",

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
};


/* =========================================
   CATEGORY ICONS
========================================= */

const categoryIcons = {

  /* TAXATION
     Tax document + percentage
  */

  "taxation-services":
    "mdi:file-document-percent-outline",

  /* FINANCE */

  "finance-services":
    "mdi:chart-line",

  /* INSURANCE */

  "insurance-services":
    "mdi:shield-check-outline",

  /* ACCOUNTING */

  "accounting-services":
    "mdi:calculator-variant-outline",

  /* REGISTRATION */

  "registration-services":
    "mdi:office-building-outline",

  /* HR */

  "hr-compliance-services":
    "mdi:account-group-outline",

  /* OTHER COMPLIANCE */

  "other-compliance":
    "mdi:clipboard-check-outline",

  /* GOVERNMENT */

  "government-documentation":
    "mdi:file-document-outline",
};


/* =========================================
   EXACT CATEGORY ORDER

   01 - Taxation
   02 - Insurance
   03 - Accounting
   04 - Loan & Finance
   05 - Registration
   06 - HR Compliance
   07 - Other Compliance
   08 - Government & Documentation
========================================= */

const categoryOrder = [
  "taxation-services",
  "insurance-services",
  "accounting-services",
  "finance-services",
  "registration-services",
  "hr-compliance-services",
  "other-compliance",
  "government-documentation",
];


/* =========================================
   EXACT SERIAL NUMBERS
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
   SERVICES CATEGORIES
========================================= */

const ServicesCategories = () => {

  /* =========================================
     SCROLL TO SERVICE SECTION
  ========================================== */

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };


  /* =========================================
     SORT CATEGORIES
  ========================================== */

  const orderedServices = [...servicesData].sort(
    (a, b) =>
      categoryOrder.indexOf(a.id) -
      categoryOrder.indexOf(b.id)
  );


  return (
    <section
      className="
        bg-[#f3f1ec]
        px-5
        pb-20
        pt-10
        sm:px-8
        sm:pb-24
      "
    >

      <div className="mx-auto max-w-7xl">

        {/* =====================================
            HEADER
        ===================================== */}

        <div
          className="
            mb-12
            flex
            flex-col
            gap-6
            md:flex-row
            md:items-end
            md:justify-between
          "
        >

          <div>

            <p
              className="
                text-xs
                font-semibold
                tracking-[0.32em]
                text-[#102b29]/50
              "
            >
              OUR SERVICES
            </p>


            <h2
              className="
                mt-4
                text-4xl
                font-bold
                tracking-tight
                text-[#102b29]
                sm:text-5xl
              "
            >
              Professional solutions
              <br />
              for every need.
            </h2>

          </div>


          <p
            className="
              max-w-md
              text-sm
              leading-7
              text-[#102b29]/60
            "
          >
            From taxation and financial solutions to insurance,
            registration, compliance and documentation, explore our
            complete range of professional services.
          </p>

        </div>


        {/* =====================================
            CATEGORY GRID
        ===================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-5
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >

          {orderedServices.map((item, index) => {

            const serialNumber =
              categoryNumbers[item.id] ||
              String(index + 1).padStart(2, "0");


            const icon =
              categoryIcons[item.id] ||
              "mdi:briefcase-outline";


            const backgroundImage =
              categoryImages[item.id];


            return (
              <motion.button
                key={item.id}
                type="button"
                onClick={() =>
                  scrollToSection(item.id)
                }

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
                  duration: 0.45,
                  delay: index * 0.05,
                }}

                className="
                  group
                  relative
                  aspect-square
                  overflow-hidden
                  bg-[#102b29]
                  p-7
                  text-left
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:shadow-[0_20px_45px_rgba(16,43,41,0.18)]
                  focus:outline-none
                  focus:ring-2
                  focus:ring-[#c7a45d]/60
                  focus:ring-offset-2
                "
              >

                {/* =================================
                    BACKGROUND IMAGE
                ================================= */}

                {backgroundImage && (
                  <div
                    className="
                      absolute
                      bottom-0
                      right-0
                      h-[62%]
                      w-[62%]
                      bg-cover
                      bg-center
                      opacity-[0.16]
                      transition-all
                      duration-700
                      group-hover:scale-110
                      group-hover:opacity-[0.24]
                    "
                    style={{
                      backgroundImage:
                        `url("${backgroundImage}")`,
                    }}
                  />
                )}


                {/* =================================
                    DARK OVERLAY
                ================================= */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#102b29]
                    via-[#102b29]/95
                    to-[#102b29]/30
                  "
                />


                {/* =================================
                    SUBTLE GOLD GLOW
                ================================= */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-20
                    -top-20
                    h-44
                    w-44
                    rounded-full
                    bg-[#c7a45d]/10
                    blur-3xl
                    opacity-0
                    transition-opacity
                    duration-700
                    group-hover:opacity-100
                  "
                />


                {/* =================================
                    INNER BORDER
                ================================= */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-4
                    border
                    border-white/[0.07]
                    transition-colors
                    duration-500
                    group-hover:border-[#c7a45d]/20
                  "
                />


                {/* =================================
                    CATEGORY ICON
                ================================= */}

                <div
                  className="
                    absolute
                    right-8
                    top-16
                    z-10
                  "
                >

                  <Icon
                    icon={icon}
                    width="64"
                    height="64"
                    className="
                      text-[#c7a45d]
                      opacity-80
                      transition-all
                      duration-500
                      group-hover:scale-110
                      group-hover:opacity-100
                      group-hover:drop-shadow-[0_0_12px_rgba(199,164,93,0.2)]
                    "
                  />

                </div>


                {/* =================================
                    CONTENT
                ================================= */}

                <div
                  className="
                    relative
                    z-10
                    flex
                    h-full
                    flex-col
                  "
                >

                  {/* =================================
                      TOP
                  ================================= */}

                  <div
                    className="
                      flex
                      items-start
                      justify-between
                    "
                  >

                    {/* SERIAL NUMBER */}

                    <span
                      className="
                        text-sm
                        font-semibold
                        tracking-wider
                        text-white/40
                        transition-colors
                        duration-300
                        group-hover:text-[#c7a45d]
                      "
                    >
                      {serialNumber}
                    </span>


                    {/* BRAND */}

                    <span
                      className="
                        text-[10px]
                        font-medium
                        tracking-[0.25em]
                        text-white/30
                        transition-colors
                        duration-300
                        group-hover:text-white/45
                      "
                    >
                      KS & COMPANY
                    </span>

                  </div>


                  {/* =================================
                      BOTTOM
                  ================================= */}

                  <div className="mt-auto">

                    {/* CATEGORY NAME */}

                    <h3
                      className="
                        max-w-[240px]
                        text-2xl
                        font-semibold
                        leading-tight
                        text-white
                        transition-transform
                        duration-500
                        group-hover:translate-x-1
                      "
                    >
                      {item.category}
                    </h3>


                    {/* BOTTOM ACTION */}

                    <div
                      className="
                        mt-6
                        flex
                        items-center
                        justify-between
                        border-t
                        border-white/10
                        pt-5
                      "
                    >

                      {/* SERVICE COUNT */}

                      <span
                        className="
                          text-[11px]
                          font-semibold
                          tracking-[0.12em]
                          text-white/45
                          transition-colors
                          duration-300
                          group-hover:text-white/70
                        "
                      >
                        {item.services.length} SERVICES
                      </span>


                      {/* ARROW */}

                      <span
                        className="
                          flex
                          h-10
                          w-10
                          items-center
                          justify-center
                          border
                          border-white/20
                          text-white
                          transition-all
                          duration-300
                          group-hover:border-white
                          group-hover:bg-white
                          group-hover:text-[#102b29]
                        "
                      >

                        <ArrowDownRight
                          size={18}
                          strokeWidth={1.6}
                        />

                      </span>

                    </div>

                  </div>

                </div>

              </motion.button>
            );
          })}

        </div>

      </div>

    </section>
  );
};

export default ServicesCategories;