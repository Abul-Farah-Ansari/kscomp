import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { Icon } from "@iconify/react";
import { servicesData } from "./servicesData";


/* =========================================================
   IIMI IMAGES

   Folder:
   src/assets/IIMI/

   Images are used only for the visual card.
   They do NOT control whether a card renders.
========================================================= */

const allIIMIImages = import.meta.glob(
  "../../assets/IIMI/**/*.{png,jpg,jpeg,webp,avif,PNG,JPG,JPEG,WEBP,AVIF}",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
);


/* =========================================================
   NATURAL IMAGE SORT
========================================================= */

const sortedIIMIImages = Object.entries(allIIMIImages)
  .sort(([pathA], [pathB]) => {
    const fileA = pathA.split("/").pop() || "";
    const fileB = pathB.split("/").pop() || "";

    const numberA = fileA.match(/\d+/)?.[0];
    const numberB = fileB.match(/\d+/)?.[0];

    if (numberA && numberB) {
      return Number(numberA) - Number(numberB);
    }

    if (numberA) return -1;
    if (numberB) return 1;

    return fileA.localeCompare(fileB);
  })
  .map(([, image]) => image);


/* =========================================================
   CATEGORY CONFIGURATION

   This guarantees that all 8 cards render.
========================================================= */

const CATEGORY_CONFIG = [
  {
    id: "taxation-services",
    number: "01",
    title: "Taxation Services",
    icon: "mdi:file-document-percent-outline",
    fallbackImage: "/images/services/taxation.jpg",
  },

  {
    id: "insurance-services",
    number: "02",
    title: "Insurance Services",
    icon: "mdi:shield-check-outline",
    fallbackImage: "/images/services/insurance.jpg",
  },

  {
    id: "accounting-services",
    number: "03",
    title: "Accounting Services",
    icon: "mdi:calculator-variant-outline",
    fallbackImage: "/images/services/accounting.jpg",
  },

  {
    id: "registration-services",
    number: "04",
    title: "Registration Services",
    icon: "mdi:office-building-outline",
    fallbackImage: "/images/services/registration.jpg",
  },

  {
    id: "hr-compliance-services",
    number: "05",
    title: "HR Compliance Services",
    icon: "mdi:account-group-outline",
    fallbackImage: "/images/services/hr.jpg",
  },

  {
    id: "other-compliance",
    number: "06",
    title: "Other Compliance Services",
    icon: "mdi:clipboard-check-outline",
    fallbackImage: "/images/services/compliance.jpg",
  },

  {
    id: "government-documentation",
    number: "07",
    title: "Government & Documentation Services",
    icon: "mdi:file-document-outline",
    fallbackImage: "/images/services/documentation.jpg",
  },

  {
    id: "finance-services",
    number: "08",
    title: "Loan & Finance Services",
    icon: "mdi:chart-line",
    fallbackImage: "/images/services/finance.jpg",
  },
];


/* =========================================================
   GET SERVICE DATA

   The category itself is always created from CATEGORY_CONFIG.
   servicesData is only used for additional content.
========================================================= */

const getServiceData = (category) => {
  const service = servicesData.find(
    (item) => item.id === category.id
  );

  return {
    id: category.id,

    number: category.number,

    category:
      service?.category ||
      category.title,

    shortDescription:
      service?.shortDescription ||
      "Professional assistance and expert support for your requirements.",

    services:
      service?.services ||
      [],

    icon: category.icon,

    image:
      sortedIIMIImages[
        Number(category.number) - 1
      ] ||
      category.fallbackImage,
  };
};


/* =========================================================
   COMPONENT
========================================================= */

const ServicesCategories = () => {

  /*
   * IMPORTANT:
   *
   * Always generate cards from CATEGORY_CONFIG.
   *
   * This guarantees exactly 8 cards.
   */

  const orderedServices =
    CATEGORY_CONFIG.map(getServiceData);


  /* =========================================================
     SCROLL TO SERVICE SECTION
  ========================================================== */

  const scrollToSection = (id) => {
    const section =
      document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };


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

        {/* =====================================================
            HEADER
        ====================================================== */}

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
            From taxation and financial solutions to
            insurance, registration, compliance and
            documentation, explore our complete range
            of professional services.
          </p>

        </div>


        {/* =====================================================
            CATEGORY GRID

            Desktop:
            4 × 2

            Tablet:
            2 × 4

            Mobile:
            1 × 8
        ====================================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-5
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >

          {orderedServices.map(
            (item, index) => (

              <motion.button
                key={item.id}
                type="button"

                onClick={() =>
                  scrollToSection(item.id)
                }

                /* =============================================
                   ENTRANCE ANIMATION
                ============================================== */

                initial={{
                  opacity: 0,
                  y: 30,
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
                  duration: 0.5,
                  delay: index * 0.06,
                  ease: [
                    0.22,
                    1,
                    0.36,
                    1,
                  ],
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
                  hover:-translate-y-2
                  hover:shadow-[0_25px_60px_rgba(16,43,41,0.25)]
                  focus:outline-none
                  focus:ring-2
                  focus:ring-[#c7a45d]/60
                  focus:ring-offset-2
                "
              >

                {/* =================================================
                    BACKGROUND IMAGE
                ================================================== */}

                <div
                  className="
                    absolute
                    inset-0
                    z-0
                    bg-cover
                    bg-center
                    opacity-25
                    transition-all
                    duration-700
                    ease-out
                    group-hover:scale-110
                    group-hover:opacity-45
                  "
                  style={{
                    backgroundImage:
                      `url("${item.image}")`,
                  }}
                />


                {/* =================================================
                    DARK OVERLAY

                    This is intentionally strong so that
                    white text remains readable.
                ================================================== */}

                <div
                  className="
                    absolute
                    inset-0
                    z-[1]
                    bg-gradient-to-t
                    from-[#102b29]
                    via-[#102b29]/90
                    to-[#102b29]/35
                    transition-all
                    duration-700
                    group-hover:from-[#071816]
                    group-hover:via-[#102b29]/80
                    group-hover:to-[#102b29]/25
                  "
                />


                {/* =================================================
                    HOVER LIGHT SWEEP
                ================================================== */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -left-[120%]
                    top-[-20%]
                    z-[2]
                    h-[150%]
                    w-[55%]
                    rotate-[18deg]
                    bg-gradient-to-r
                    from-transparent
                    via-white/[0.10]
                    to-transparent
                    transition-all
                    duration-[1000ms]
                    ease-out
                    group-hover:left-[135%]
                  "
                />


                {/* =================================================
                    GOLD GLOW
                ================================================== */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-20
                    -top-20
                    z-[2]
                    h-48
                    w-48
                    rounded-full
                    bg-[#c7a45d]/10
                    blur-3xl
                    opacity-0
                    transition-all
                    duration-700
                    group-hover:scale-150
                    group-hover:opacity-100
                  "
                />


                {/* =================================================
                    INNER BORDER
                ================================================== */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-4
                    z-[3]
                    border
                    border-white/[0.08]
                    transition-all
                    duration-500
                    group-hover:inset-3
                    group-hover:border-[#c7a45d]/60
                  "
                />


                {/* =================================================
                    NUMBER
                ================================================== */}

                <div
                  className="
                    absolute
                    left-7
                    top-7
                    z-10
                  "
                >

                  <span
                    className="
                      text-sm
                      font-semibold
                      tracking-wider
                      text-white/50
                      transition-all
                      duration-500
                      group-hover:text-[#c7a45d]
                      group-hover:tracking-[0.25em]
                    "
                  >
                    {item.number}
                  </span>

                </div>


                {/* =================================================
                    COMPANY LABEL
                ================================================== */}

                <div
                  className="
                    absolute
                    right-7
                    top-7
                    z-10
                  "
                >

                  <span
                    className="
                      text-[9px]
                      font-medium
                      tracking-[0.25em]
                      text-white/35
                      transition-all
                      duration-500
                      group-hover:text-white/80
                    "
                  >
                    KS & COMPANY
                  </span>

                </div>


                {/* =================================================
                    ICON

                    Dark background + gold icon normally.

                    Gold background + dark icon on hover.
                ================================================== */}

                <motion.div
                  className="
                    absolute
                    right-7
                    top-20
                    z-10
                  "

                  whileHover={{
                    scale: 1.08,
                    rotate: 3,
                  }}

                  transition={{
                    type: "spring",
                    stiffness: 250,
                    damping: 15,
                  }}
                >

                  <div
                    className="
                      flex
                      h-[76px]
                      w-[76px]
                      items-center
                      justify-center
                      border
                      border-[#c7a45d]/50
                      bg-[#071816]/85
                      backdrop-blur-md
                      transition-all
                      duration-500
                      group-hover:border-[#c7a45d]
                      group-hover:bg-[#c7a45d]
                      group-hover:shadow-[0_10px_35px_rgba(199,164,93,0.35)]
                    "
                  >

                    <Icon
                      icon={item.icon}
                      width="48"
                      height="48"
                      className="
                        text-[#c7a45d]
                        opacity-100
                        transition-all
                        duration-500
                        group-hover:scale-125
                        group-hover:text-[#102b29]
                      "
                    />

                  </div>

                </motion.div>


                {/* =================================================
                    CONTENT
                ================================================== */}

                <div
                  className="
                    relative
                    z-10
                    flex
                    h-full
                    flex-col
                  "
                >

                  <div className="mt-auto">

                    {/* =================================================
                        MAIN TITLE

                        Always WHITE for readability.
                    ================================================== */}

                    <h3
                      className="
                        max-w-[270px]
                        text-2xl
                        font-semibold
                        leading-tight
                        text-white
                        transition-all
                        duration-500
                        group-hover:translate-x-2
                        group-hover:text-white
                        group-hover:drop-shadow-[0_3px_8px_rgba(0,0,0,0.7)]
                      "
                    >
                      {item.category}
                    </h3>


                    {/* =================================================
                        DESCRIPTION

                        Appears on hover.
                    ================================================== */}

                    <p
                      className="
                        mt-3
                        max-w-[280px]
                        max-h-0
                        overflow-hidden
                        text-[11px]
                        leading-5
                        text-white/80
                        opacity-0
                        transition-all
                        duration-500
                        group-hover:max-h-20
                        group-hover:opacity-100
                        group-hover:drop-shadow-[0_2px_5px_rgba(0,0,0,0.8)]
                      "
                    >
                      {item.shortDescription}
                    </p>


                    {/* =================================================
                        BOTTOM ACTION
                    ================================================== */}

                    <div
                      className="
                        mt-5
                        flex
                        items-center
                        justify-between
                        border-t
                        border-white/10
                        pt-5
                        transition-all
                        duration-500
                        group-hover:border-[#c7a45d]/50
                      "
                    >

                      {/* SERVICE COUNT */}

                      <span
                        className="
                          text-[11px]
                          font-semibold
                          tracking-[0.12em]
                          text-white/50
                          transition-all
                          duration-500
                          group-hover:translate-x-1
                          group-hover:text-[#c7a45d]
                        "
                      >
                        {item.services.length || 0} SERVICES
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
                          duration-500
                          group-hover:rotate-[-45deg]
                          group-hover:scale-110
                          group-hover:border-[#c7a45d]
                          group-hover:bg-[#c7a45d]
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
            )
          )}

        </div>

      </div>

    </section>
  );
};


export default ServicesCategories;