import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { servicesData } from "./servicesData";

const categoryImages = {
  "taxation-services": "/images/services/taxation.jpg",

  "finance-services": "/images/services/finance.jpg",

  "insurance-services": "/images/services/insurance.jpg",

  "accounting-services": "/images/services/accounting.jpg",

  "registration-services": "/images/services/registration.jpg",

  "hr-compliance-services": "/images/services/hr.jpg",

  "other-compliance": "/images/services/compliance.jpg",

  "government-documentation":
    "/images/services/documentation.jpg",
};

const categoryOrder = [
  "taxation-services",
  "finance-services",
  "insurance-services",
  "accounting-services",
  "registration-services",
  "hr-compliance-services",
  "other-compliance",
  "government-documentation",
];

const ServicesCategories = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const orderedServices = [...servicesData].sort(
    (a, b) =>
      categoryOrder.indexOf(a.id) -
      categoryOrder.indexOf(b.id)
  );

  return (
    <section className="bg-[#f3f1ec] px-5 pb-20 pt-10 sm:px-8 sm:pb-24">
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}

        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold tracking-[0.32em] text-[#102b29]/50">
              OUR SERVICES
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#102b29] sm:text-5xl">
              Professional solutions
              <br />
              for every need.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-[#102b29]/60">
            From taxation and financial solutions to insurance,
            registration, compliance and documentation, explore our
            complete range of professional services.
          </p>
        </div>

        {/* CATEGORY GRID */}

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {orderedServices.map((item, index) => (
            <motion.button
              key={item.id}
              type="button"
              onClick={() => scrollToSection(item.id)}
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
                duration: 0.45,
                delay: index * 0.05,
              }}
              className="group relative aspect-square overflow-hidden bg-[#102b29] p-7 text-left"
            >

              {/* BACKGROUND IMAGE */}

              <div
                className="absolute bottom-0 right-0 h-[62%] w-[62%] bg-cover bg-center opacity-[0.16] transition duration-500 group-hover:scale-105 group-hover:opacity-[0.22]"
                style={{
                  backgroundImage: `url("${categoryImages[item.id]}")`,
                }}
              />

              {/* DARK OVERLAY */}

              <div className="absolute inset-0 bg-gradient-to-t from-[#102b29] via-[#102b29]/95 to-[#102b29]/30" />

              {/* INNER BORDER */}

              <div className="absolute inset-4 border border-white/[0.07]" />

              {/* CONTENT */}

              <div className="relative z-10 flex h-full flex-col">

                <div className="flex items-start justify-between">
                  <span className="text-sm font-semibold tracking-wider text-white/40">
                    {item.number}
                  </span>

                  <span className="text-[10px] font-medium tracking-[0.25em] text-white/30">
                    KS & COMPANY
                  </span>
                </div>

                <div className="mt-auto">

                  <h3 className="max-w-[240px] text-2xl font-semibold leading-tight text-white">
                    {item.category}
                  </h3>

                  <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">

                    <span className="text-[11px] font-semibold tracking-[0.12em] text-white/45">
                      {item.services.length} SERVICES
                    </span>

                    <span className="flex h-10 w-10 items-center justify-center border border-white/20 text-white transition duration-300 group-hover:bg-white group-hover:text-[#102b29]">
                      <ArrowDownRight size={18} />
                    </span>

                  </div>

                </div>

              </div>

            </motion.button>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesCategories;