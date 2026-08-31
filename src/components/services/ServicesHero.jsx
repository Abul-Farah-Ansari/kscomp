import { ArrowDownRight } from "lucide-react";
import PageHero from "../PageHero";

const ServicesHero = () => {
  const scrollToServices = () => {
    document.getElementById("services-search")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <PageHero
      label="KS & Company Services"
      title="Professional Services."
      highlight="Practical Solutions."
      description="From taxation and accounting to registration, compliance, documentation, insurance and finance, we provide organized support for individuals and businesses."
    >
      <button
        type="button"
        onClick={scrollToServices}
        className="inline-flex items-center gap-3 bg-white px-7 py-3.5 text-sm font-semibold text-[#102b29] transition duration-300 hover:bg-white/85"
      >
        Explore Services
        <ArrowDownRight size={18} />
      </button>
    </PageHero>
  );
};

export default ServicesHero;