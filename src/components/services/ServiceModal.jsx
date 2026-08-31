import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, CheckCircle2 } from "lucide-react";
import { useState, useEffect } from "react";

const ServiceModal = ({ service, selectedService, onClose }) => {
  // Supports either prop name
  const activeService = service || selectedService;

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  // Reset form whenever another service is clicked
  useEffect(() => {
    if (activeService) {
      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
      });

      setSubmitted(false);
    }
  }, [activeService]);

  if (!activeService) return null;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const enquiryData = {
      service: activeService.name,
      category: activeService.categoryName || "",
      ...formData,
    };

    console.log("Enquiry:", enquiryData);

    setSubmitted(true);

    // Here you can later connect EmailJS, Formspree, backend API, etc.
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto bg-black/70 px-4 py-6 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
            scale: 0.98,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            y: 20,
            scale: 0.98,
          }}
          transition={{
            duration: 0.35,
          }}
          onClick={(e) => e.stopPropagation()}
          className="relative my-auto w-full max-w-5xl overflow-hidden bg-[#f3f1ec] shadow-2xl"
        >
          {/* CLOSE BUTTON */}

          <button
            type="button"
            onClick={onClose}
            className="absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center border border-[#102b29]/15 bg-white text-[#102b29] transition hover:bg-[#102b29] hover:text-white"
            aria-label="Close"
          >
            <X size={20} />
          </button>

          <div className="grid lg:grid-cols-2">
            {/* LEFT - SERVICE DETAILS */}

            <div className="bg-[#102b29] p-8 sm:p-12">
              <p className="text-xs font-semibold tracking-[0.3em] text-white/40">
                SERVICE DETAILS
              </p>

              <p className="mt-8 text-xs font-semibold tracking-[0.2em] text-white/35">
                {activeService.categoryName || "KS & COMPANY"}
              </p>

              <h2 className="mt-4 text-4xl font-bold leading-tight text-white sm:text-5xl">
                {activeService.name}
              </h2>

              <div className="mt-8 h-px w-16 bg-white/20" />

              <p className="mt-8 text-base leading-8 text-white/65">
                {activeService.description ||
                  "Our team provides professional guidance and assistance based on your specific requirements."}
              </p>

              <div className="mt-12 border-t border-white/10 pt-8">
                <h3 className="text-lg font-semibold text-white">
                  How we can help
                </h3>

                <div className="mt-5 space-y-4">
                  {[
                    "Understand your specific requirement",
                    "Guide you about required documents",
                    "Provide professional assistance throughout the process",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2
                        size={18}
                        className="mt-0.5 shrink-0 text-white/60"
                      />

                      <p className="text-sm leading-6 text-white/60">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT - ENQUIRY FORM */}

            <div className="p-8 sm:p-12">
              <p className="text-xs font-semibold tracking-[0.3em] text-[#102b29]/45">
                SEND ENQUIRY
              </p>

              <h3 className="mt-4 text-3xl font-bold text-[#102b29]">
                Let's discuss your requirement.
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#102b29]/60">
                Fill in your details and our team will contact you
                regarding this service.
              </p>

              {/* AUTOMATICALLY SELECTED SERVICE */}

              <div className="mt-8 border border-[#102b29]/15 bg-white p-5">
                <p className="text-[10px] font-semibold tracking-[0.2em] text-[#102b29]/45">
                  SELECTED SERVICE
                </p>

                <div className="mt-3 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center bg-[#102b29] text-white">
                    <CheckCircle2 size={18} />
                  </div>

                  <div>
                    <p className="font-semibold text-[#102b29]">
                      {activeService.name}
                    </p>

                    {activeService.categoryName && (
                      <p className="mt-1 text-xs text-[#102b29]/50">
                        {activeService.categoryName}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* FORM */}

              {submitted ? (
                <div className="mt-8 border border-[#102b29]/10 bg-white p-10 text-center">
                  <CheckCircle2
                    size={45}
                    className="mx-auto text-[#102b29]"
                  />

                  <h4 className="mt-5 text-2xl font-bold text-[#102b29]">
                    Thank you!
                  </h4>

                  <p className="mt-3 text-sm leading-7 text-[#102b29]/60">
                    Your enquiry for{" "}
                    <span className="font-semibold">
                      {activeService.name}
                    </span>{" "}
                    has been recorded.
                  </p>

                  <button
                    type="button"
                    onClick={onClose}
                    className="mt-7 bg-[#102b29] px-6 py-3 text-sm font-semibold text-white"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="mt-8 space-y-5"
                >
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Full Name"
                    className="w-full border-b border-[#102b29]/20 bg-transparent px-0 py-4 text-sm text-[#102b29] outline-none transition focus:border-[#102b29]"
                  />

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Phone Number"
                    className="w-full border-b border-[#102b29]/20 bg-transparent px-0 py-4 text-sm text-[#102b29] outline-none transition focus:border-[#102b29]"
                  />

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className="w-full border-b border-[#102b29]/20 bg-transparent px-0 py-4 text-sm text-[#102b29] outline-none transition focus:border-[#102b29]"
                  />

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    placeholder={`Tell us about your ${activeService.name} requirement...`}
                    className="w-full resize-none border-b border-[#102b29]/20 bg-transparent px-0 py-4 text-sm text-[#102b29] outline-none transition focus:border-[#102b29]"
                  />

                  <button
                    type="submit"
                    className="group flex w-full items-center justify-between bg-[#102b29] px-6 py-5 text-sm font-semibold tracking-wide text-white transition hover:bg-[#1b3b38]"
                  >
                    SEND ENQUIRY

                    <ArrowRight
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </button>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ServiceModal;