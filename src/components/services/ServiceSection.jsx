import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const categoryImages = {
  "taxation-services":
    "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=500&q=80",

  "accounting-services":
    "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=500&q=80",

  "registration-services":
    "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=500&q=80",

  "hr-compliance-services":
    "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=500&q=80",

  "other-compliance":
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=500&q=80",

  "government-documentation":
    "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=500&q=80",

  "insurance-services":
    "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=500&q=80",

  "finance-services":
    "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=500&q=80",
};

const ServiceSection = ({
  category,
  dark = false,
  onServiceClick,
}) => {
  const image = categoryImages[category.id];

  return (
    <section
      id={category.id}
      className={`scroll-mt-24 px-5 py-20 sm:px-8 sm:py-24 ${
        dark ? "bg-[#102b29]" : "bg-[#f3f1ec]"
      }`}
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr]">
          {/* LEFT CONTENT */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <div
              className={`border-l-2 pl-6 ${
                dark
                  ? "border-white/20"
                  : "border-[#102b29]/25"
              }`}
            >
              <span
                className={`text-xs font-semibold tracking-[0.3em] ${
                  dark
                    ? "text-white/40"
                    : "text-[#102b29]/40"
                }`}
              >
                CATEGORY {category.number}
              </span>

              <h2
                className={`mt-5 text-4xl font-bold leading-tight tracking-tight sm:text-5xl ${
                  dark ? "text-white" : "text-[#102b29]"
                }`}
              >
                {category.category}
              </h2>

              <p
                className={`mt-6 max-w-md text-base leading-8 ${
                  dark
                    ? "text-white/60"
                    : "text-[#102b29]/60"
                }`}
              >
                {category.shortDescription}
              </p>
            </div>

            <div
              className={`mt-10 flex items-center gap-4 text-sm ${
                dark
                  ? "text-white/40"
                  : "text-[#102b29]/45"
              }`}
            >
              <span
                className={`h-px w-12 ${
                  dark
                    ? "bg-white/20"
                    : "bg-[#102b29]/20"
                }`}
              />

              Click a service to know more
            </div>
          </motion.div>

          {/* SERVICE CARDS */}

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {category.services.map((service, index) => (
              <motion.button
                key={service.name}
                type="button"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.04,
                }}
                onClick={() =>
                  onServiceClick({
                    ...service,
                    categoryName: category.category,
                  })
                }
                className={`group relative aspect-square overflow-hidden border p-6 text-left transition duration-300 ${
                  dark
                    ? "border-white/10 bg-white/[0.035] hover:bg-white/[0.07]"
                    : "border-[#102b29]/10 bg-white hover:border-[#102b29]/25"
                }`}
              >
                {/* Small Background Image */}

                <div
                  className={`absolute bottom-0 right-0 h-[48%] w-[55%] transition duration-500 ${
                    dark
                      ? "opacity-[0.08] group-hover:opacity-[0.14]"
                      : "opacity-[0.07] group-hover:opacity-[0.12]"
                  }`}
                  style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />

                {/* Gradient Overlay */}

                <div
                  className={`absolute inset-0 ${
                    dark
                      ? "bg-gradient-to-t from-[#102b29] via-[#102b29]/95 to-transparent"
                      : "bg-gradient-to-t from-white via-white/90 to-transparent"
                  }`}
                />

                {/* Card Number */}

                <span
                  className={`relative z-10 text-xs font-semibold tracking-[0.2em] ${
                    dark
                      ? "text-white/30"
                      : "text-[#102b29]/30"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Content */}

                <div className="relative z-10 flex h-[calc(100%-20px)] flex-col justify-end">
                  <h3
                    className={`text-xl font-semibold leading-snug ${
                      dark
                        ? "text-white"
                        : "text-[#102b29]"
                    }`}
                  >
                    {service.name}
                  </h3>

                  <div
                    className={`mt-5 flex items-center justify-between border-t pt-4 ${
                      dark
                        ? "border-white/10"
                        : "border-[#102b29]/10"
                    }`}
                  >
                    <span
                      className={`text-xs font-medium ${
                        dark
                          ? "text-white/45"
                          : "text-[#102b29]/45"
                      }`}
                    >
                      VIEW DETAILS
                    </span>

                    <ArrowUpRight
                      size={18}
                      className={`transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 ${
                        dark
                          ? "text-white"
                          : "text-[#102b29]"
                      }`}
                    />
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;