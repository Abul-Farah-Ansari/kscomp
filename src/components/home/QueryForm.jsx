import React, { useState } from "react";
import { Send } from "lucide-react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import QueryImage from "../../assets/mngmt/Queryimg.png";

const QueryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  // --------------------------------------------------
  // EMAILJS CONFIGURATION
  // --------------------------------------------------

  const EMAILJS_SERVICE_ID = "service_xyp8xo9";
  const EMAILJS_TEMPLATE_ID = "template_q5n7b2n";
  const EMAILJS_PUBLIC_KEY = "W5NCxywVfHt7M7Ubu";

  // --------------------------------------------------
  // HANDLE INPUT CHANGE
  // --------------------------------------------------

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (status.message) {
      setStatus({
        type: "",
        message: "",
      });
    }
  };

  // --------------------------------------------------
  // HANDLE FORM SUBMIT
  // --------------------------------------------------

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);

    setStatus({
      type: "",
      message: "",
    });

    try {
      const templateParams = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim() || "Not provided",
        service: formData.service,
        message: formData.message.trim(),
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        {
          publicKey: EMAILJS_PUBLIC_KEY,
        }
      );

      setStatus({
        type: "success",
        message:
          "Your enquiry has been sent successfully. We will get back to you shortly.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS query form error:", error);

      setStatus({
        type: "error",
        message:
          "Unable to send your enquiry. Please try again or contact us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#f3f1ec]">

      {/* =====================================================
          FULL SCREEN CONTAINER
      ===================================================== */}

      <div className="grid min-h-screen w-full lg:grid-cols-[30%_70%]">

        {/* =================================================
            LEFT IMAGE — 30%
        ================================================= */}

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            hidden
            min-h-screen
            overflow-hidden
            lg:block
          "
        >

          {/* Soft green overlay */}

          <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-[#102b29]/30 via-transparent to-transparent" />

          {/* Image */}

          <img
            src={QueryImage}
            alt="Professional tax advisor"
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
              object-center
            "
          />

        </motion.div>

        {/* =================================================
            RIGHT FORM — 70%
        ================================================= */}

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{
            duration: 0.8,
            delay: 0.05,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="min-h-screen w-full bg-[#0d302d]"
        >

          <div
            className="
              flex
              min-h-screen
              w-full
              flex-col
              justify-center
              px-7
              py-12
              sm:px-12
              md:px-16
              lg:px-[7vw]
              xl:px-[8vw]
            "
          >

            {/* =================================================
                FORM CONTENT
            ================================================= */}

            <div className="w-full max-w-[900px]">

              {/* EYEBROW */}

              <div className="mb-7">
                <span className="text-[10px] font-semibold uppercase tracking-[0.42em] text-[#819593] sm:text-[11px]">
                  Send an Enquiry
                </span>
              </div>

              {/* HEADING */}

              <h2
                className="
                  max-w-[700px]
                  text-[38px]
                  font-semibold
                  leading-[1.05]
                  tracking-[-0.035em]
                  text-white
                  sm:text-[48px]
                  lg:text-[54px]
                  xl:text-[60px]
                "
              >
                Let's Discuss Your

                <span className="block text-[#829694]">
                  Requirements.
                </span>
              </h2>

              {/* DESCRIPTION */}

              <p
                className="
                  mt-7
                  max-w-[700px]
                  text-[14px]
                  leading-7
                  text-[#829694]
                  sm:text-[15px]
                "
              >
                Fill out the form below and provide a brief overview of your
                requirement.
              </p>

              {/* =================================================
                  FORM
              ================================================= */}

              <form onSubmit={handleSubmit} className="mt-12">

                {/* NAME + PHONE */}

                <div className="grid grid-cols-1 gap-7 md:grid-cols-2">

                  {/* NAME */}

                  <div>
                    <label
                      htmlFor="name"
                      className="mb-3 block text-[12px] font-medium text-[#8fa3a0]"
                    >
                      Full Name *
                    </label>

                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      autoComplete="name"
                      placeholder="Enter your name"
                      className="
                        h-[62px]
                        w-full
                        border
                        border-[#34514e]
                        bg-[#193b38]
                        px-5
                        text-[14px]
                        text-white
                        outline-none
                        transition-all
                        duration-300
                        placeholder:text-[#637b78]
                        focus:border-[#b6c29e]
                        focus:bg-[#1c403d]
                      "
                    />
                  </div>

                  {/* PHONE */}

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-3 block text-[12px] font-medium text-[#8fa3a0]"
                    >
                      Phone Number *
                    </label>

                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      autoComplete="tel"
                      placeholder="Enter phone number"
                      className="
                        h-[62px]
                        w-full
                        border
                        border-[#34514e]
                        bg-[#193b38]
                        px-5
                        text-[14px]
                        text-white
                        outline-none
                        transition-all
                        duration-300
                        placeholder:text-[#637b78]
                        focus:border-[#b6c29e]
                        focus:bg-[#1c403d]
                      "
                    />
                  </div>

                </div>

                {/* EMAIL */}

                <div className="mt-7">

                  <label
                    htmlFor="email"
                    className="mb-3 block text-[12px] font-medium text-[#8fa3a0]"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                    placeholder="Enter your email address"
                    className="
                      h-[62px]
                      w-full
                      border
                      border-[#34514e]
                      bg-[#193b38]
                      px-5
                      text-[14px]
                      text-white
                      outline-none
                      transition-all
                      duration-300
                      placeholder:text-[#637b78]
                      focus:border-[#b6c29e]
                      focus:bg-[#1c403d]
                    "
                  />

                </div>

                {/* SERVICE */}

                <div className="mt-7">

                  <label
                    htmlFor="service"
                    className="mb-3 block text-[12px] font-medium text-[#8fa3a0]"
                  >
                    Select Service
                  </label>

                  <div className="relative">

                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="
                        h-[62px]
                        w-full
                        cursor-pointer
                        appearance-none
                        border
                        border-[#34514e]
                        bg-[#193b38]
                        px-5
                        pr-14
                        text-[14px]
                        text-white
                        outline-none
                        transition-all
                        duration-300
                        focus:border-[#b6c29e]
                        focus:bg-[#1c403d]
                      "
                    >

                      <option value="">
                        Select a service
                      </option>

                      <option value="Accounting">
                        Accounting
                      </option>

                      <option value="Taxation">
                        Taxation
                      </option>

                      <option value="Financial Management">
                        Financial Management
                      </option>

                      <option value="Business Advisory">
                        Business Advisory
                      </option>

                      <option value="Compliance">
                        Compliance Support
                      </option>

                      <option value="Insurance">
                        Insurance
                      </option>

                      <option value="Registration">
                        Registration Services
                      </option>

                      <option value="Government Documentation">
                        Government Documentation
                      </option>

                      <option value="Other">
                        Other
                      </option>

                    </select>

                    {/* Arrow */}

                    <div className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-white">

                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>

                    </div>

                  </div>

                </div>

                {/* REQUIREMENT */}

                <div className="mt-7">

                  <label
                    htmlFor="message"
                    className="mb-3 block text-[12px] font-medium text-[#8fa3a0]"
                  >
                    Your Requirement
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Tell us briefly how we can help you..."
                    className="
                      min-h-[155px]
                      w-full
                      resize-none
                      border
                      border-[#34514e]
                      bg-[#193b38]
                      px-5
                      py-4
                      text-[14px]
                      leading-7
                      text-white
                      outline-none
                      transition-all
                      duration-300
                      placeholder:text-[#637b78]
                      focus:border-[#b6c29e]
                      focus:bg-[#1c403d]
                    "
                  />

                </div>

                {/* STATUS */}

                {status.message && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 8,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    className={`mt-5 border px-4 py-3 text-sm ${
                      status.type === "success"
                        ? "border-[#6f9270]/40 bg-[#6f9270]/10 text-[#a8c0a7]"
                        : "border-red-300/30 bg-red-500/10 text-red-300"
                    }`}
                  >
                    {status.message}
                  </motion.div>
                )}

                {/* =================================================
                    BOTTOM ACTION
                ================================================= */}

                <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                  <p className="max-w-[320px] text-[10px] leading-5 text-[#6f8582]">
                    Your information will be handled professionally and
                    securely.
                  </p>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="
                      group
                      inline-flex
                      shrink-0
                      items-center
                      justify-center
                      gap-3
                      border
                      border-[#b6c29e]
                      bg-[#b6c29e]
                      px-8
                      py-4
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.18em]
                      text-[#102f2c]
                      transition-all
                      duration-300
                      hover:bg-transparent
                      hover:text-[#b6c29e]
                      disabled:cursor-not-allowed
                      disabled:opacity-50
                    "
                  >
                    {isSubmitting ? "Sending..." : "Send Query"}

                    {!isSubmitting && (
                      <Send
                        size={16}
                        strokeWidth={1.8}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    )}
                  </button>

                </div>

              </form>

            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default QueryForm;