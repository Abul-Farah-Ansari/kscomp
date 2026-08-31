import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  ArrowUpRight,
  X,
  Sparkles,
  Command,
} from "lucide-react";

import { servicesData } from "./servicesData";

const ServicesSearch = ({ onServiceClick }) => {
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);

  const results = useMemo(() => {
    const value = query.trim().toLowerCase();

    if (!value) return [];

    const allServices = servicesData.flatMap((category) =>
      category.services.map((service) => ({
        ...service,
        categoryName: category.category,
        categoryId: category.id,
      }))
    );

    return allServices.filter(
      (service) =>
        service.name.toLowerCase().includes(value) ||
        service.categoryName.toLowerCase().includes(value) ||
        service.description.toLowerCase().includes(value)
    );
  }, [query]);

  const handleServiceClick = (service) => {
    setQuery("");
    setFocused(false);

    if (onServiceClick) {
      onServiceClick(service);
    }
  };

  return (
    <section
      id="services-search"
      className="relative overflow-visible bg-[#f3f1ec] px-5 py-20 sm:px-8 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        {/* HEADER */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 border border-[#102b29]/15 bg-white px-4 py-2">
            <Sparkles
              size={14}
              className="text-[#102b29]"
            />

            <span className="text-[10px] font-semibold tracking-[0.25em] text-[#102b29]/60">
              SERVICE FINDER
            </span>
          </div>

          <h2 className="mt-7 text-4xl font-bold tracking-tight text-[#102b29] sm:text-5xl lg:text-6xl">
            Find exactly what
            <span className="block text-[#102b29]/50">
              you are looking for.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[#102b29]/60 sm:text-base">
            Search across taxation, accounting, registration,
            documentation, insurance, loans and professional services.
          </p>
        </motion.div>

        {/* 3D SEARCH AREA */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.15 }}
          className="relative mx-auto mt-14 max-w-5xl"
        >
          {/* SHADOW LAYER */}

          <div className="absolute inset-x-8 bottom-[-14px] h-10 bg-[#102b29]/20 blur-2xl" />

          {/* BACK LAYER */}

          <div className="absolute inset-x-3 top-3 h-full bg-[#102b29]/15" />

          {/* MAIN PANEL */}

          <div
            className={`relative bg-[#102b29] p-[1px] transition-all duration-500 ${
              focused
                ? "translate-y-[-2px]"
                : ""
            }`}
          >
            <div className="bg-[#f3f1ec]">
              {/* TOP LABEL */}

              <div className="flex items-center justify-between border-b border-[#102b29]/10 px-5 py-3 sm:px-7">
                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 bg-[#102b29]" />

                  <span className="text-[10px] font-semibold tracking-[0.25em] text-[#102b29]/50">
                    SEARCH OUR SERVICES
                  </span>
                </div>

                <div className="hidden items-center gap-2 text-[#102b29]/40 sm:flex">
                  <Command size={13} />

                  <span className="text-[10px] tracking-wider">
                    TYPE TO SEARCH
                  </span>
                </div>
              </div>

              {/* SEARCH INPUT */}

              <div className="relative flex items-center bg-white">
                {/* ICON BLOCK */}

                <div className="flex h-[88px] w-[88px] shrink-0 items-center justify-center border-r border-[#102b29]/10 bg-[#102b29] sm:h-[100px] sm:w-[110px]">
                  <Search
                    size={25}
                    strokeWidth={1.5}
                    className="text-white"
                  />
                </div>

                {/* INPUT */}

                <input
                  type="text"
                  value={query}
                  onFocus={() => setFocused(true)}
                  onBlur={() => {
                    setTimeout(() => {
                      setFocused(false);
                    }, 200);
                  }}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search GST, ITR, Business Loan, PAN Card..."
                  className="h-[88px] min-w-0 flex-1 bg-white px-5 text-sm font-medium text-[#102b29] outline-none placeholder:text-[#102b29]/35 sm:h-[100px] sm:px-8 sm:text-base"
                />

                {/* CLEAR BUTTON */}

                {query && (
                  <button
                    type="button"
                    onClick={() => setQuery("")}
                    className="mr-5 flex h-10 w-10 shrink-0 items-center justify-center text-[#102b29]/45 transition hover:bg-[#102b29] hover:text-white"
                    aria-label="Clear search"
                  >
                    <X size={19} />
                  </button>
                )}
              </div>

              {/* BOTTOM INFO */}

              <div className="flex flex-col gap-3 border-t border-[#102b29]/10 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-7">
                <p className="text-[11px] tracking-wide text-[#102b29]/45">
                  SEARCH FROM {servicesData.reduce(
                    (total, category) =>
                      total + category.services.length,
                    0
                  )}{" "}
                  PROFESSIONAL SERVICES
                </p>

                <div className="flex gap-2">
                  <span className="border border-[#102b29]/10 px-2 py-1 text-[9px] font-semibold tracking-wider text-[#102b29]/45">
                    TAX
                  </span>

                  <span className="border border-[#102b29]/10 px-2 py-1 text-[9px] font-semibold tracking-wider text-[#102b29]/45">
                    LOAN
                  </span>

                  <span className="border border-[#102b29]/10 px-2 py-1 text-[9px] font-semibold tracking-wider text-[#102b29]/45">
                    INSURANCE
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* SEARCH RESULTS */}

          <AnimatePresence>
            {query.trim() && (
              <motion.div
                initial={{
                  opacity: 0,
                  y: -10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -10,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="relative z-30 mx-auto mt-5 max-w-5xl border border-[#102b29]/15 bg-white shadow-[0_25px_60px_rgba(16,43,41,0.15)]"
              >
                {/* RESULTS HEADER */}

                <div className="flex items-center justify-between border-b border-[#102b29]/10 bg-[#102b29] px-6 py-4">
                  <p className="text-[10px] font-semibold tracking-[0.22em] text-white/60">
                    SEARCH RESULTS
                  </p>

                  <span className="text-xs text-white/50">
                    {results.length} found
                  </span>
                </div>

                {/* RESULTS */}

                {results.length > 0 ? (
                  <div className="max-h-[420px] overflow-y-auto">
                    {results.map((service, index) => (
                      <motion.button
                        key={`${service.categoryId}-${service.name}`}
                        type="button"
                        initial={{
                          opacity: 0,
                          y: 10,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          delay: index * 0.03,
                        }}
                        onClick={() =>
                          handleServiceClick(service)
                        }
                        className="group flex w-full items-center justify-between gap-5 border-b border-[#102b29]/10 px-6 py-5 text-left last:border-b-0 hover:bg-[#f3f1ec]"
                      >
                        <div className="flex items-center gap-5">
                          <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#102b29]/5 text-xs font-semibold text-[#102b29]/50">
                            {String(index + 1).padStart(
                              2,
                              "0"
                            )}
                          </span>

                          <div>
                            <h3 className="font-semibold text-[#102b29]">
                              {service.name}
                            </h3>

                            <p className="mt-1 text-[11px] font-medium tracking-wide text-[#102b29]/45">
                              {service.categoryName}
                            </p>
                          </div>
                        </div>

                        <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#102b29]/10 text-[#102b29] transition group-hover:bg-[#102b29] group-hover:text-white">
                          <ArrowUpRight size={18} />
                        </span>
                      </motion.button>
                    ))}
                  </div>
                ) : (
                  <div className="px-6 py-16 text-center">
                    <Search
                      size={32}
                      strokeWidth={1.3}
                      className="mx-auto text-[#102b29]/25"
                    />

                    <h3 className="mt-5 text-lg font-semibold text-[#102b29]">
                      No matching service found
                    </h3>

                    <p className="mt-2 text-sm text-[#102b29]/50">
                      Try searching for GST, ITR, PAN Card,
                      Loan or Insurance.
                    </p>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* QUICK SUGGESTIONS */}

        {!query && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-8 flex flex-wrap justify-center gap-3"
          >
            {[
              "GST Registration",
              "Income Tax Return",
              "Business Loan",
              "PAN Card",
              "Health Insurance",
            ].map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setQuery(item)}
                className="border border-[#102b29]/15 bg-transparent px-4 py-2 text-xs font-medium text-[#102b29]/60 transition hover:bg-[#102b29] hover:text-white"
              >
                {item}
              </button>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ServicesSearch;