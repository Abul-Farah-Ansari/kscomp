import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import PageHero from "../PageHero";

const AboutHero = () => {
  return (
    <PageHero
      label="About K S & Company"
      title="Professional Guidance"
      highlight="Built Around Trust."
      description="K S & Company provides professional guidance across taxation, insurance and financial advisory services, helping individuals and businesses make important financial decisions with greater clarity and confidence."
    >
      <Link
        to="/contact"
        className="inline-flex items-center gap-3 bg-white px-7 py-3.5 text-sm font-semibold text-[#102b29] transition duration-300 hover:bg-white/85"
      >
        Start a Conversation
        <ArrowRight size={18} />
      </Link>
    </PageHero>
  );
};

export default AboutHero;