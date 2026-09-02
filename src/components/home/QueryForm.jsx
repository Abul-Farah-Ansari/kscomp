import React, { useState } from "react";
import { Send, Mail, Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const QueryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Query submitted:", formData);

    // Connect your backend / EmailJS / API here

    alert("Thank you! Your query has been submitted.");

    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#f4f7f5] py-16 sm:py-20 lg:py-24">
      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="
            absolute
            -right-32
            top-1/2
            h-[450px]
            w-[450px]
            -translate-y-1/2
            rounded-full
            bg-[#326844]/[0.045]
            blur-[20px]
          "
        />

        <div
          className="
            absolute
            -left-24
            bottom-[-120px]
            h-[350px]
            w-[350px]
            rounded-full
            border
            border-[#326844]/10
          "
        />
      </div>

      {/* ================= CONTENT ================= */}

      <div className="relative z-10 mx-auto w-full max-w-[1350px] px-5 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

          {/* ================= LEFT CONTENT ================= */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {/* LABEL */}

            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#326844]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#326844]">
                Get In Touch
              </span>
            </div>

            {/* HEADING */}

            <h2
              className="
                max-w-[520px]
                text-[38px]
                font-semibold
                leading-[1.1]
                tracking-tight
                text-[#1e2d30]

                sm:text-[52px]
                lg:text-[58px]
              "
            >
              Let's discuss your

              <span className="block text-[#326844]">
                requirements.
              </span>
            </h2>

            {/* DESCRIPTION */}

            <p className="mt-6 max-w-[430px] text-sm leading-7 text-[#687779]">
              Share your query with us and our professional team will
              understand your requirements and get back to you with the
              right guidance.
            </p>

            {/* CONTACT OPTIONS */}

            <div className="mt-10 space-y-5">

              {/* EMAIL */}

              <div className="flex items-center gap-4">
                <div
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#326844]/10
                    text-[#326844]
                  "
                >
                  <Mail size={18} strokeWidth={1.7} />
                </div>

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8a9897]">
                    Email Us
                  </p>

                  <a
                    href="mailto:info@ks-company.in"
                    className="mt-1 block text-sm font-medium text-[#334544] transition-colors hover:text-[#326844]"
                  >
                    info@ks-company.in
                  </a>
                </div>
              </div>

              {/* PHONE */}

              <div className="flex items-center gap-4">
                <div
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#285b68]/10
                    text-[#285b68]
                  "
                >
                  <Phone size={18} strokeWidth={1.7} />
                </div>

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8a9897]">
                    Call Us
                  </p>

                  <a
                    href="tel:+917004946933"
                    className="mt-1 block text-sm font-medium text-[#334544] transition-colors hover:text-[#326844]"
                  >
                    +91 7004946933
                  </a>
                </div>
              </div>

              {/* RESPONSE */}

              <div className="flex items-center gap-4">
                <div
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#75b43c]/10
                    text-[#326844]
                  "
                >
                  <MessageCircle size={18} strokeWidth={1.7} />
                </div>

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8a9897]">
                    Quick Response
                  </p>

                  <p className="mt-1 text-sm font-medium text-[#334544]">
                    We'll get back to you shortly
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

          {/* ================= FORM ================= */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
            className="
              relative
              border-t
              border-[#1e5260]/15
              pt-2
            "
          >
            <form onSubmit={handleSubmit} className="pt-5">

              {/* NAME + EMAIL */}

              <div className="grid gap-6 sm:grid-cols-2">

                <div className="relative">
                  <label
                    htmlFor="name"
                    className="
                      mb-2
                      block
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.15em]
                      text-[#687779]
                    "
                  >
                    Your Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                    className="
                      w-full
                      border-0
                      border-b
                      border-[#1e5260]/20
                      bg-transparent
                      px-0
                      py-3
                      text-sm
                      text-[#1e2d30]
                      outline-none
                      transition-colors
                      duration-300
                      placeholder:text-[#a3aeac]
                      focus:border-[#326844]
                    "
                  />
                </div>

                <div className="relative">
                  <label
                    htmlFor="email"
                    className="
                      mb-2
                      block
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.15em]
                      text-[#687779]
                    "
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
                    placeholder="Enter your email"
                    className="
                      w-full
                      border-0
                      border-b
                      border-[#1e5260]/20
                      bg-transparent
                      px-0
                      py-3
                      text-sm
                      text-[#1e2d30]
                      outline-none
                      transition-colors
                      duration-300
                      placeholder:text-[#a3aeac]
                      focus:border-[#326844]
                    "
                  />
                </div>

              </div>

              {/* PHONE + SERVICE */}

              <div className="mt-7 grid gap-6 sm:grid-cols-2">

                <div>
                  <label
                    htmlFor="phone"
                    className="
                      mb-2
                      block
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.15em]
                      text-[#687779]
                    "
                  >
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter phone number"
                    className="
                      w-full
                      border-0
                      border-b
                      border-[#1e5260]/20
                      bg-transparent
                      px-0
                      py-3
                      text-sm
                      text-[#1e2d30]
                      outline-none
                      transition-colors
                      duration-300
                      placeholder:text-[#a3aeac]
                      focus:border-[#326844]
                    "
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="
                      mb-2
                      block
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.15em]
                      text-[#687779]
                    "
                  >
                    Select Service
                  </label>

                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="
                      w-full
                      cursor-pointer
                      border-0
                      border-b
                      border-[#1e5260]/20
                      bg-transparent
                      px-0
                      py-3
                      text-sm
                      text-[#1e2d30]
                      outline-none
                      transition-colors
                      duration-300
                      focus:border-[#326844]
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

                    <option value="Other">
                      Other
                    </option>
                  </select>
                </div>

              </div>

              {/* MESSAGE */}

              <div className="mt-8">
                <label
                  htmlFor="message"
                  className="
                    mb-2
                    block
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.15em]
                    text-[#687779]
                  "
                >
                  Your Query
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  placeholder="Tell us how we can help you..."
                  className="
                    w-full
                    resize-none
                    border-0
                    border-b
                    border-[#1e5260]/20
                    bg-transparent
                    px-0
                    py-3
                    text-sm
                    leading-7
                    text-[#1e2d30]
                    outline-none
                    transition-colors
                    duration-300
                    placeholder:text-[#a3aeac]
                    focus:border-[#326844]
                  "
                />
              </div>

              {/* SUBMIT */}

              <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                <p className="text-[11px] leading-5 text-[#899694]">
                  Your information will be handled professionally and
                  securely.
                </p>

                <button
                  type="submit"
                  className="
                    group
                    inline-flex
                    shrink-0
                    items-center
                    justify-center
                    gap-3
                    rounded-full
                    bg-[#326844]
                    px-7
                    py-3.5
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.16em]
                    text-white
                    shadow-[0_10px_30px_rgba(50,104,68,0.18)]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-[#285b68]
                    hover:shadow-[0_16px_35px_rgba(40,91,104,0.25)]
                  "
                >
                  Send Query

                  <Send
                    size={16}
                    strokeWidth={1.8}
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                    "
                  />
                </button>

              </div>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default QueryForm;