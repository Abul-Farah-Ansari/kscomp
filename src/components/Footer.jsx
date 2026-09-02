import React, { useState } from "react";
import {
  ArrowUpRight,
  Send,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
} from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email.trim()) return;

    console.log("Subscribed:", email);

    alert("Thank you for subscribing!");

    setEmail("");
  };

  return (
    <footer className="relative w-full overflow-hidden bg-[#102b29] text-white">

      {/* ================= BACKGROUND TEXTURE ================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* TOP RIGHT GLOW */}

        <div
          className="
            absolute
            -right-40
            -top-40
            h-[600px]
            w-[600px]
            rounded-full
            bg-[radial-gradient(circle_at_center,#315e54_0%,#173a36_40%,transparent_72%)]
            opacity-60
          "
        />

        {/* BOTTOM LEFT GLOW */}

        <div
          className="
            absolute
            -bottom-52
            -left-40
            h-[550px]
            w-[550px]
            rounded-full
            bg-[#326844]/20
            blur-[90px]
          "
        />

        {/* GRID TEXTURE */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.025]
            [background-image:linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)]
            [background-size:60px_60px]
          "
        />

      </div>


      {/* ================= MAIN CONTENT ================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1450px]
          px-5
          sm:px-8
          lg:px-12
          xl:px-16
        "
      >

        {/* ================= TOP AREA ================= */}

        <div className="border-b border-white/10 py-14 sm:py-16 lg:py-20">

          <div
            className="
              grid
              gap-12
              md:grid-cols-2
              lg:grid-cols-[1.25fr_0.8fr_0.8fr_1.2fr]
              lg:gap-12
            "
          >

            {/* ================= COMPANY INFO ================= */}

            <div>

              {/* LOGO */}

              <div className="flex items-center gap-4">

                {/* CA LOGO */}

                <div
                  className="
                    relative
                    flex
                    h-[60px]
                    w-[60px]
                    shrink-0
                    items-center
                    justify-center
                    overflow-hidden
                    rounded-full
                    border
                    border-[#a7c68f]/35
                    bg-white/[0.06]
                    text-[20px]
                    font-bold
                    tracking-tight
                    text-[#b7d59d]
                    shadow-[0_10px_35px_rgba(0,0,0,0.18)]
                  "
                >
                  CA

                  <span
                    className="
                      absolute
                      inset-[5px]
                      rounded-full
                      border
                      border-[#a7c68f]/15
                    "
                  />

                </div>


                {/* COMPANY NAME */}

                <div>

                  <h2
                    className="
                      text-[24px]
                      font-semibold
                      tracking-tight
                      text-white
                    "
                  >
                    KS & Company
                  </h2>

                  <p
                    className="
                      mt-1
                      text-[9px]
                      font-semibold
                      uppercase
                      tracking-[0.25em]
                      text-[#9bb7aa]
                    "
                  >
                    Chartered Accountants
                  </p>

                </div>

              </div>


              {/* DESCRIPTION */}

              <p
                className="
                  mt-7
                  max-w-[370px]
                  text-[14px]
                  leading-7
                  text-[#9fb2ac]
                "
              >
                Professional financial guidance, practical business solutions,
                and long-term support for individuals and organizations
                looking to move forward with confidence.
              </p>


              {/* CONTACT DETAILS */}

              <div className="mt-8 space-y-4">

                {/* EMAIL */}

                <a
                  href="mailto:info@ks-company.in"
                  className="
                    flex
                    w-fit
                    items-center
                    gap-3
                    text-[13px]
                    text-[#b5c6c1]
                    transition-colors
                    duration-300
                    hover:text-[#b7d59d]
                  "
                >
                  <Mail size={16} strokeWidth={1.6} />

                  info@ks-company.in
                </a>


                {/* CALL / WHATSAPP */}

                <a
                  href="tel:+917004946933"
                  className="
                    flex
                    w-fit
                    items-center
                    gap-3
                    text-[13px]
                    text-[#b5c6c1]
                    transition-colors
                    duration-300
                    hover:text-[#b7d59d]
                  "
                >
                  <Phone size={16} strokeWidth={1.6} />

                  +91 7004946933
                </a>


                {/* TELEPHONE */}

                <a
                  href="tel:+911145128015"
                  className="
                    flex
                    w-fit
                    items-center
                    gap-3
                    text-[13px]
                    text-[#b5c6c1]
                    transition-colors
                    duration-300
                    hover:text-[#b7d59d]
                  "
                >
                  <Phone size={16} strokeWidth={1.6} />

                  +91 1145128015
                </a>


                {/* ADDRESS */}

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Nafees+Rd,+near+Hari+Masjid,+Block+P,+Batla+House,+Jamia+Nagar,+Okhla,+Delhi,+New+Delhi,+Delhi+110025"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex
                    items-start
                    gap-3
                    text-[13px]
                    leading-6
                    text-[#b5c6c1]
                    transition-colors
                    duration-300
                    hover:text-[#b7d59d]
                  "
                >
                  <MapPin
                    size={16}
                    strokeWidth={1.6}
                    className="mt-1 shrink-0"
                  />

                  <span>
                    Nafees Rd, near Hari Masjid, Block P,
                    <br />
                    Batla House, Jamia Nagar, Okhla, Delhi,
                    <br />
                    New Delhi, Delhi 110025
                  </span>

                </a>

              </div>

            </div>


            {/* ================= SERVICES ================= */}

            <div>

              <p
                className="
                  mb-7
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  text-[#b7d59d]
                "
              >
                Our Services
              </p>


              <ul className="space-y-4">

                {[
                  "Accounting Services",
                  "Tax Planning",
                  "Financial Management",
                  "Business Advisory",
                  "Audit & Compliance",
                  "GST Services",
                ].map((service) => (

                  <li key={service}>

                    <a
                      href="/services"
                      className="
                        group
                        flex
                        items-center
                        gap-2
                        text-[14px]
                        text-[#aebfba]
                        transition-all
                        duration-300
                        hover:text-white
                      "
                    >

                      <span
                        className="
                          h-[4px]
                          w-[4px]
                          rounded-full
                          bg-[#75b43c]
                          transition-all
                          duration-300
                          group-hover:w-3
                        "
                      />

                      {service}

                    </a>

                  </li>

                ))}

              </ul>

            </div>


            {/* ================= QUICK LINKS ================= */}

            <div>

              <p
                className="
                  mb-7
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  text-[#b7d59d]
                "
              >
                Quick Links
              </p>


              <ul className="space-y-4">

                {[
                  ["Home", "/"],
                  ["About Us", "/about"],
                  ["Our Services", "/services"],
                  ["Blog", "/blog"],
                  ["Careers", "/careers"],
                  ["Contact Us", "/contact"],
                ].map(([name, link]) => (

                  <li key={name}>

                    <a
                      href={link}
                      className="
                        group
                        flex
                        items-center
                        gap-2
                        text-[14px]
                        text-[#aebfba]
                        transition-all
                        duration-300
                        hover:text-white
                      "
                    >

                      <ArrowUpRight
                        size={14}
                        strokeWidth={1.5}
                        className="
                          text-[#6f9f80]
                          transition-transform
                          duration-300
                          group-hover:translate-x-1
                          group-hover:-translate-y-1
                        "
                      />

                      {name}

                    </a>

                  </li>

                ))}

              </ul>

            </div>


            {/* ================= NEWSLETTER ================= */}

            <div>

              <p
                className="
                  mb-7
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  text-[#b7d59d]
                "
              >
                Stay Updated
              </p>


              <h3
                className="
                  max-w-[330px]
                  text-[27px]
                  font-medium
                  leading-[1.2]
                  tracking-tight
                  text-white
                  sm:text-[30px]
                "
              >
                Insights and updates,

                <span className="block text-[#a8c98e]">
                  delivered to you.
                </span>

              </h3>


              <p
                className="
                  mt-5
                  max-w-[330px]
                  text-[13px]
                  leading-6
                  text-[#9fb2ac]
                "
              >
                Subscribe to receive useful financial insights,
                professional updates and important information.
              </p>


              {/* SUBSCRIBE FORM */}

              <form
                onSubmit={handleSubscribe}
                className="mt-8 flex items-center"
              >

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Your email address"
                  className="
                    min-w-0
                    flex-1
                    border
                    border-white/10
                    border-r-0
                    bg-white/[0.04]
                    px-4
                    py-3.5
                    text-[13px]
                    text-white
                    outline-none
                    placeholder:text-[#718983]
                    transition-colors
                    duration-300
                    focus:border-[#7fa98a]/60
                  "
                />


                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="
                    group
                    flex
                    h-[49px]
                    w-[54px]
                    shrink-0
                    items-center
                    justify-center
                    bg-[#326844]
                    text-white
                    transition-all
                    duration-300
                    hover:bg-[#467a58]
                  "
                >

                  <Send
                    size={18}
                    strokeWidth={1.7}
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                    "
                  />

                </button>

              </form>


              {/* ================= SOCIAL MEDIA ================= */}

              <div className="mt-8 flex items-center gap-3">

                {/* LINKEDIN */}

                <a
                  href="http://linkedin.com/in/k-s-and-company-740506102/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/10
                    text-[#aebfba]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-[#a8c98e]/40
                    hover:bg-white/5
                    hover:text-white
                  "
                >
                  <FaLinkedinIn size={16} />
                </a>


                {/* INSTAGRAM */}

                <a
                  href="https://www.instagram.com/kscompany94?utm_source=qr&igsh=c3hjaDE2bDBpMXJu"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/10
                    text-[#aebfba]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-[#a8c98e]/40
                    hover:bg-white/5
                    hover:text-white
                  "
                >
                  <FaInstagram size={17} />
                </a>


                {/* FACEBOOK */}

                <a
                  href="https://www.facebook.com/ksancompany?mibextid=ZbWKwL"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/10
                    text-[#aebfba]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-[#a8c98e]/40
                    hover:bg-white/5
                    hover:text-white
                  "
                >
                  <FaFacebookF size={16} />
                </a>

              </div>

            </div>

          </div>

        </div>


        {/* ================= BOTTOM FOOTER ================= */}

        <div
          className="
            flex
            flex-col
            gap-5
            py-7
            text-[11px]
            text-[#81958f]
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >

          {/* COPYRIGHT */}

          <p>
            © {new Date().getFullYear()} KS & Company.
            All rights reserved.
          </p>


          {/* LEGAL LINKS */}

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">

            <a
              href="/privacy-policy"
              className="transition-colors duration-300 hover:text-white"
            >
              Privacy Policy
            </a>

            <a
              href="/terms"
              className="transition-colors duration-300 hover:text-white"
            >
              Terms & Conditions
            </a>

          </div>


          {/* ZAIB INFOTECH */}

          <p className="flex items-center gap-1.5">

            Made with

            <span className="text-[#b7d59d]">
              ♥
            </span>

            by

            <a
  href="https://zaibinfotech.in/"
  target="_blank"
  rel="noopener noreferrer"
  className="
    font-medium
    text-[#b7d59d]
    transition-colors
    duration-300
    hover:text-white
  "
>
  Zaib Infotech
</a>

          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;