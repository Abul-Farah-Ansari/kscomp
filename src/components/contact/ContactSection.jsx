import { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import emailjs from "@emailjs/browser";

import PageHero from "../PageHero";

const ContactSection = () => {
  // ================= FORM STATE =================

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  // ================= EMAILJS CONFIG =================

  const EMAILJS_SERVICE_ID = "service_xyp8xo9";
  const EMAILJS_TEMPLATE_ID = "template_q5n7b2n";
  const EMAILJS_PUBLIC_KEY = "W5NCxywVfHt7M7Ubu";

  // ================= FORM CHANGE =================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (submitError) {
      setSubmitError("");
    }
  };

  // ================= FORM SUBMIT =================

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (submitting) return;

    try {
      setSubmitting(true);
      setSubmitError("");

      const templateParams = {
        name: formData.name.trim(),
        phone: formData.phone.trim() || "Not provided",
        email: formData.email.trim() || "Not provided",
        service: formData.service || "Not specified",
        message:
          formData.message.trim() ||
          "No additional details provided.",
      };

      console.log(
        "Sending contact enquiry through EmailJS:",
        templateParams
      );

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        {
          publicKey: EMAILJS_PUBLIC_KEY,
        }
      );

      console.log("Contact enquiry sent successfully.");

      setSubmitted(true);

      setFormData({
        name: "",
        phone: "",
        email: "",
        service: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS contact form error:", error);

      setSubmitError(
        "Unable to send your enquiry. Please try again later or contact us directly."
      );
    } finally {
      setSubmitting(false);
    }
  };

  // ================= SCROLL TO FORM =================

  const scrollToForm = () => {
    document
      .getElementById("contact-form")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  // ================= CONTACT DETAILS =================

  const contactItems = [
    {
      title: "Call Us",
      description:
        "Speak directly with our professional team.",
      value: "+91 7004946933",
      icon: Phone,
      link: "tel:+917004946933",
    },
    {
      title: "Email Us",
      description:
        "Send your requirements directly to us.",
      value: "info@ks-company.in",
      icon: Mail,
      link: "mailto:info@ks-company.in",
    },
    {
      title: "Visit Us",
      description:
        "Meet our team and discuss your requirements.",
      value:
        "Nafees Rd, Batla House, Jamia Nagar",
      icon: MapPin,
      link: "#location",
    },
    {
      title: "WhatsApp",
      description:
        "Get quick assistance from our team.",
      value: "+91 7004946933",
      icon: MessageCircle,
      link: "https://wa.me/917004946933",
    },
  ];

  // ================= BENEFITS =================

  const benefits = [
    "Professional guidance based on your requirements",
    "Clear and transparent communication",
    "Support across taxation, insurance and finance",
    "Business and professional service assistance",
  ];

  // ================= SOCIAL MEDIA =================

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: FaLinkedinIn,
      link:
        "http://linkedin.com/in/k-s-and-company-740506102/",
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      link:
        "https://www.instagram.com/kscompany94?utm_source=qr&igsh=c3hjaDE2bDBpMXJu",
    },
    {
      name: "Facebook",
      icon: FaFacebookF,
      link:
        "https://www.facebook.com/ksancompany?mibextid=ZbWKwL",
    },
  ];

  return (
    <main className="overflow-x-hidden bg-[#f4f3ef]">

      {/* ================= HERO ================= */}

      <PageHero
        label="Contact KS & Company"
        title="Let's Start A"
        highlight="Meaningful Conversation."
        description="Whether you need assistance with taxation, accounting, registration, documentation, insurance, finance or professional services, our team is ready to understand your requirements and guide you through the next steps."
      >
        <button
          type="button"
          onClick={scrollToForm}
          className="inline-flex items-center gap-3 bg-white px-7 py-3.5 text-sm font-semibold text-[#102b29] transition duration-300 hover:bg-white/85"
        >
          Send an Enquiry

          <ArrowRight size={18} />
        </button>
      </PageHero>

      {/* ================= QUICK CONTACT ================= */}

      <section className="relative z-10 -mt-6 pb-20 sm:-mt-8 sm:pb-24">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-14">

          <div className="grid border border-[#102b29]/10 bg-white sm:grid-cols-2 lg:grid-cols-4">

            {contactItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.a
                  key={item.title}
                  href={item.link}
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
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className={`group p-7 transition hover:bg-[#f4f3ef] ${
                    index !== contactItems.length - 1
                      ? "border-b border-[#102b29]/10 lg:border-b-0 lg:border-r"
                      : ""
                  }`}
                >
                  <div className="flex h-12 w-12 items-center justify-center bg-[#102b29]">
                    <Icon
                      size={20}
                      className="text-white"
                    />
                  </div>

                  <h3 className="mt-6 text-xl font-semibold text-[#102b29]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#102b29]/55">
                    {item.description}
                  </p>

                  <p className="mt-5 text-sm font-medium text-[#102b29]">
                    {item.value}
                  </p>
                </motion.a>
              );
            })}

          </div>
        </div>
      </section>

      {/* ================= CONTACT FORM ================= */}

      <section
        id="contact-form"
        className="scroll-mt-24 bg-[#f4f3ef] pb-20 sm:pb-24"
      >
        <div className="mx-auto grid max-w-[1280px] gap-14 px-6 sm:px-10 lg:grid-cols-[0.85fr_1.15fr] lg:px-14">

          {/* ================= LEFT CONTENT ================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
          >
            <p className="text-xs font-semibold uppercase tracking-[5px] text-[#102b29]/45">
              Get In Touch
            </p>

            <h2 className="mt-6 text-4xl font-bold leading-tight text-[#102b29] sm:text-5xl">
              Tell Us What
              <br />

              <span className="text-[#102b29]/50">
                You Need Help With.
              </span>
            </h2>

            <p className="mt-7 max-w-lg text-base leading-8 text-[#102b29]/65">
              Every client requirement is different. Share some
              details about what you are looking for, and our team
              can better understand the type of professional
              assistance you require.
            </p>

            {/* ================= CONTACT DETAILS ================= */}

            <div className="mt-12 space-y-7">

              {/* CALL */}

              <div className="flex gap-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#102b29]">
                  <Phone
                    size={18}
                    className="text-white"
                  />
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-[3px] text-[#102b29]/40">
                    Call / WhatsApp
                  </p>

                  <a
                    href="tel:+917004946933"
                    className="mt-2 block text-sm font-medium text-[#102b29]"
                  >
                    +91 7004946933
                  </a>
                </div>
              </div>

              {/* TELEPHONE */}

              <div className="flex gap-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#102b29]">
                  <Phone
                    size={18}
                    className="text-white"
                  />
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-[3px] text-[#102b29]/40">
                    Telephone
                  </p>

                  <a
                    href="tel:+911145128015"
                    className="mt-2 block text-sm font-medium text-[#102b29]"
                  >
                    +91 1145128015
                  </a>
                </div>
              </div>

              {/* EMAIL */}

              <div className="flex gap-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#102b29]">
                  <Mail
                    size={18}
                    className="text-white"
                  />
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-[3px] text-[#102b29]/40">
                    Email
                  </p>

                  <a
                    href="mailto:info@ks-company.in"
                    className="mt-2 block text-sm font-medium text-[#102b29]"
                  >
                    info@ks-company.in
                  </a>
                </div>
              </div>

              {/* ADDRESS */}

              <div className="flex gap-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#102b29]">
                  <MapPin
                    size={18}
                    className="text-white"
                  />
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-[3px] text-[#102b29]/40">
                    Address
                  </p>

                  <p className="mt-2 max-w-md text-sm font-medium leading-6 text-[#102b29]">
                    Nafees Rd, near Hari Masjid, Block P,
                    Batla House, Jamia Nagar, Okhla,
                    Delhi, New Delhi, Delhi 110025
                  </p>
                </div>
              </div>

              {/* WORKING HOURS */}

              <div className="flex gap-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#102b29]">
                  <Clock
                    size={18}
                    className="text-white"
                  />
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-[3px] text-[#102b29]/40">
                    Working Hours
                  </p>

                  <p className="mt-2 text-sm font-medium text-[#102b29]">
                    Monday – Saturday
                  </p>
                </div>
              </div>

            </div>

            {/* ================= BENEFITS ================= */}

            <div className="mt-12 border-t border-[#102b29]/10 pt-8">

              <p className="text-xs font-semibold uppercase tracking-[4px] text-[#102b29]/40">
                Why Contact Us
              </p>

              <div className="mt-6 space-y-4">

                {benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex gap-3"
                  >
                    <CheckCircle2
                      size={18}
                      className="mt-0.5 shrink-0 text-[#102b29]"
                    />

                    <p className="text-sm leading-6 text-[#102b29]/65">
                      {benefit}
                    </p>
                  </div>
                ))}

              </div>
            </div>

          </motion.div>

          {/* ================= FORM ================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 35,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
            className="bg-[#102b29] p-7 sm:p-10 lg:p-12"
          >

            {/* ================= SUCCESS ================= */}

            {submitted ? (

              <div className="flex min-h-[500px] flex-col items-center justify-center text-center">

                <div className="flex h-16 w-16 items-center justify-center bg-white text-[#102b29]">
                  <CheckCircle2 size={32} />
                </div>

                <h3 className="mt-7 text-3xl font-bold text-white">
                  Thank You!
                </h3>

                <p className="mt-4 max-w-md text-sm leading-7 text-white/60">
                  Your enquiry has been submitted successfully.
                  Our team will get back to you as soon as possible.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setSubmitError("");
                  }}
                  className="mt-8 bg-white px-7 py-4 text-sm font-semibold text-[#102b29] transition hover:bg-white/90"
                >
                  Send Another Enquiry
                </button>

              </div>

            ) : (

              <>

                <p className="text-xs font-semibold uppercase tracking-[5px] text-white/40">
                  Send An Enquiry
                </p>

                <h3 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl">
                  Let's Discuss Your
                  <br />

                  <span className="text-white/50">
                    Requirements.
                  </span>
                </h3>

                <p className="mt-5 max-w-lg text-sm leading-7 text-white/55">
                  Fill out the form below and provide a brief overview
                  of your requirement.
                </p>

                {/* ================= FORM ================= */}

                <form
                  onSubmit={handleSubmit}
                  className="mt-10 grid gap-6 sm:grid-cols-2"
                >

                  {/* NAME */}

                  <div>

                    <label
                      htmlFor="name"
                      className="text-xs text-white/50"
                    >
                      Full Name *
                    </label>

                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      autoComplete="name"
                      className="mt-2 h-12 w-full border border-white/10 bg-white/[0.05] px-4 text-sm text-white outline-none placeholder:text-white/25 focus:border-white/30"
                    />

                  </div>

                  {/* PHONE */}

                  <div>

                    <label
                      htmlFor="phone"
                      className="text-xs text-white/50"
                    >
                      Phone Number *
                    </label>

                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter phone number"
                      autoComplete="tel"
                      className="mt-2 h-12 w-full border border-white/10 bg-white/[0.05] px-4 text-sm text-white outline-none placeholder:text-white/25 focus:border-white/30"
                    />

                  </div>

                  {/* EMAIL */}

                  <div className="sm:col-span-2">

                    <label
                      htmlFor="email"
                      className="text-xs text-white/50"
                    >
                      Email Address
                    </label>

                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email address"
                      autoComplete="email"
                      className="mt-2 h-12 w-full border border-white/10 bg-white/[0.05] px-4 text-sm text-white outline-none placeholder:text-white/25 focus:border-white/30"
                    />

                  </div>

                  {/* SERVICE */}

                  <div className="sm:col-span-2">

                    <label
                      htmlFor="service"
                      className="text-xs text-white/50"
                    >
                      Select Service
                    </label>

                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="mt-2 h-12 w-full border border-white/10 bg-[#102b29] px-4 text-sm text-white outline-none"
                    >

                      <option value="">
                        Select a service
                      </option>

                      <option value="Taxation Services">
                        Taxation Services
                      </option>

                      <option value="Accounting Services">
                        Accounting Services
                      </option>

                      <option value="Registration Services">
                        Registration Services
                      </option>

                      <option value="HR Compliance Services">
                        HR Compliance Services
                      </option>

                      <option value="Other Compliance">
                        Other Compliance
                      </option>

                      <option value="Government & Documentation Services">
                        Government & Documentation Services
                      </option>

                      <option value="Insurance Services">
                        Insurance Services
                      </option>

                      <option value="Finance Services">
                        Finance Services
                      </option>

                    </select>

                  </div>

                  {/* MESSAGE */}

                  <div className="sm:col-span-2">

                    <label
                      htmlFor="message"
                      className="text-xs text-white/50"
                    >
                      Your Requirement
                    </label>

                    <textarea
                      id="message"
                      rows="5"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us briefly how we can help you..."
                      className="mt-2 w-full resize-none border border-white/10 bg-white/[0.05] p-4 text-sm text-white outline-none placeholder:text-white/25 focus:border-white/30"
                    />

                  </div>

                  {/* ERROR MESSAGE */}

                  {submitError && (
                    <div className="sm:col-span-2 border border-red-300/20 bg-red-500/10 px-4 py-3 text-sm leading-6 text-red-200">
                      {submitError}
                    </div>
                  )}

                  {/* SUBMIT */}

                  <div className="sm:col-span-2">

                    <button
                      type="submit"
                      disabled={submitting}
                      className="flex w-full items-center justify-center gap-3 bg-white px-6 py-4 text-sm font-semibold text-[#102b29] transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                    >

                      {submitting
                        ? "Sending..."
                        : "Submit Enquiry"}

                      {!submitting && (
                        <Send size={17} />
                      )}

                    </button>

                  </div>

                </form>

                <p className="mt-5 text-center text-xs text-white/30">
                  Your information will only be used to respond
                  to your enquiry.
                </p>

              </>

            )}

          </motion.div>

        </div>
      </section>

      {/* ================= MAP ================= */}

      <section
        id="location"
        className="scroll-mt-24 bg-[#102b29] py-20 sm:py-24"
      >
        <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-14">

          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">

            <div>

              <p className="text-xs font-semibold uppercase tracking-[5px] text-white/40">
                Visit Our Office
              </p>

              <h2 className="mt-5 text-4xl font-bold text-white sm:text-5xl">
                Find Us

                <span className="text-white/50">
                  {" "}
                  Easily.
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-base leading-8 text-white/60">
                Visit K S & Company and speak with our team directly
                about your requirements.
              </p>

            </div>

            <div className="flex items-center gap-3 text-sm text-white/55">
              <MapPin size={18} />
              K S & Company Office Location
            </div>

          </div>

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.98,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
            className="mt-10 overflow-hidden border border-white/10"
          >

            <iframe
              title="K S & Company Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.0387903787105!2d77.28540547533312!3d28.568597875699684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5175d7807ef%3A0xe241d282c8ad4f7e!2sK%20S%20%26%20Company!5e0!3m2!1sen!2sin!4v1788180524986!5m2!1sen!2sin"
              width="100%"
              height="480"
              style={{
                border: 0,
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              className="block w-full grayscale"
            />

          </motion.div>

        </div>
      </section>

      {/* ================= SOCIAL MEDIA ================= */}

      <section className="bg-white py-20 sm:py-24">

        <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-14">

          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">

            <div>

              <p className="text-xs font-semibold uppercase tracking-[5px] text-[#102b29]/45">
                Stay Connected
              </p>

              <h2 className="mt-6 text-4xl font-bold leading-tight text-[#102b29] sm:text-5xl">
                Connect With Us
                <br />

                <span className="text-[#102b29]/50">
                  Beyond The Office.
                </span>
              </h2>

              <p className="mt-6 max-w-lg text-base leading-8 text-[#102b29]/65">
                Follow K S & Company for professional updates,
                helpful insights and the latest information
                about our services.
              </p>

            </div>

            <div className="grid gap-4 sm:grid-cols-3">

              {socialLinks.map((social, index) => {

                const Icon = social.icon;

                return (
                  <motion.a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                    className="group flex min-h-[200px] flex-col justify-between border border-[#102b29]/10 p-7 transition hover:bg-[#102b29]"
                  >

                    <div className="flex h-12 w-12 items-center justify-center bg-[#102b29] transition group-hover:bg-white">

                      <Icon
                        size={21}
                        className="text-white group-hover:text-[#102b29]"
                      />

                    </div>

                    <div>

                      <h3 className="text-xl font-semibold text-[#102b29] group-hover:text-white">
                        {social.name}
                      </h3>

                      <div className="mt-4 flex items-center gap-2 text-xs uppercase tracking-[3px] text-[#102b29]/40 group-hover:text-white/50">

                        Follow Us

                        <ArrowUpRight size={15} />

                      </div>

                    </div>

                  </motion.a>
                );
              })}

            </div>

          </div>

        </div>

      </section>

      {/* ================= FINAL CTA ================= */}

      <section className="bg-[#f4f3ef] py-16 sm:py-20">

        <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-14">

          <motion.div
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
              duration: 0.7,
            }}
            className="relative overflow-hidden bg-[#102b29] px-7 py-14 sm:px-14 sm:py-16"
          >

            <div className="pointer-events-none absolute -right-32 -top-32 h-[400px] w-[400px] rounded-full border border-white/[0.08]" />

            <div className="relative max-w-3xl">

              <p className="text-xs font-semibold uppercase tracking-[5px] text-white/40">
                K S & Company
              </p>

              <h2 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                Have A Requirement?
                <br />

                <span className="text-white/50">
                  Let's Talk About It.
                </span>
              </h2>

              <p className="mt-7 max-w-xl text-base leading-8 text-white/60">
                Reach out today and let our team understand how we can
                assist you with taxation, accounting, registration,
                insurance, finance or business requirements.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">

                <button
                  type="button"
                  onClick={scrollToForm}
                  className="inline-flex items-center justify-center gap-3 bg-white px-7 py-4 text-sm font-semibold text-[#102b29]"
                >
                  Send An Enquiry

                  <ArrowUpRight size={18} />
                </button>

                <a
                  href="https://wa.me/917004946933"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 border border-white/15 px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/[0.05]"
                >
                  WhatsApp Us

                  <MessageCircle size={18} />
                </a>

              </div>

            </div>

          </motion.div>

        </div>

      </section>

    </main>
  );
};

export default ContactSection;