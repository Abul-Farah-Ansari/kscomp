import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import {
  MessageSquare,
  Menu,
  X,
  ChevronDown,
  ChevronUp,
  FileText,
  ShieldCheck,
  ReceiptText,
  ChartLine,
  ShieldCheck as InsuranceIcon,
  Calculator,
  Building2,
  Users,
  ClipboardCheck,
  FileCheck,
} from "lucide-react";

import KS from "../assets/mngmt/WhatsApp Image 2026-08-30 at 19.16.22 (1).png";

import ScheduleAppointmentModal from "./ScheduleAppointmentModal";

/* =========================================================
   SERVICES SUBMENU
========================================================= */

const serviceMenuItems = [
  {
    name: "Taxation Services",
    path: "/services/taxation",
    icon: ReceiptText,
    description: "Tax planning & return filing",
  },
  {
    name: "Insurance Services",
    path: "/services/insurance",
    icon: InsuranceIcon,
    description: "Life, health & general insurance",
  },
  {
    name: "Accounting Services",
    path: "/services/accounting",
    icon: Calculator,
    description: "Accounting & bookkeeping",
  },
  {
    name: "Registration Services",
    path: "/services/registration",
    icon: Building2,
    description: "Business registrations",
  },
  {
    name: "HR Compliance Services",
    path: "/services/hr-compliance",
    icon: Users,
    description: "Payroll & HR compliance",
  },
  {
    name: "Other Compliance Services",
    path: "/services/other-compliance",
    icon: ClipboardCheck,
    description: "Specialized compliance support",
  },
  {
    name: "Government & Documentation",
    path: "/services/government-documentation",
    icon: FileCheck,
    description: "Government documentation support",
  },
  {
    name: "Loan & Finance Services",
    path: "/services/finance",
    icon: ChartLine,
    description: "Loans & financial assistance",
  },
  {
    name: "All Services",
    path: "/services",
    icon: FileText,
    description: "View all professional services",
  },
];

/* =========================================================
   NAVBAR
========================================================= */

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(true);

  const [resourceOpen, setResourceOpen] = useState(false);
  const [mobileResourceOpen, setMobileResourceOpen] = useState(false);

  const [serviceOpen, setServiceOpen] = useState(false);
  const [mobileServiceOpen, setMobileServiceOpen] = useState(false);

  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);

  /* =========================================================
     SCROLL HANDLER
  ========================================================= */

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;

      setHasScrolled(isScrolled);

      if (!isScrolled) {
        setNavbarOpen(true);
        setMobileMenu(false);
      } else {
        setNavbarOpen(false);
        setMobileMenu(false);
        setResourceOpen(false);
        setServiceOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =========================================================
     NAVBAR TOGGLE
  ========================================================= */

  const toggleNavbar = () => {
    setNavbarOpen((prev) => !prev);
    setMobileMenu(false);
    setResourceOpen(false);
    setServiceOpen(false);
  };

  /* =========================================================
     CLOSE MOBILE MENU
  ========================================================= */

  const closeMobileMenu = () => {
    setMobileMenu(false);
    setMobileResourceOpen(false);
    setMobileServiceOpen(false);
  };

  return (
    <>
      {/* =====================================================
          MAIN NAVBAR
      ====================================================== */}

      <nav
        className={`
          fixed
          top-0
          left-0
          z-[999]
          w-full
          max-w-full
          overflow-visible
          font-condensed
          text-white
          transition-all
          duration-500
          ease-[cubic-bezier(0.22,1,0.36,1)]

          ${
            navbarOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0 pointer-events-none"
          }

          ${
            hasScrolled
              ? `
                border-b
                border-white/10
                bg-[#171923]/95
                shadow-[0_10px_35px_rgba(0,0,0,0.25)]
                backdrop-blur-xl
              `
              : `
                border-b
                border-transparent
                bg-transparent
                shadow-none
              `
          }
        `}
      >
        <div className="mx-auto w-full max-w-[1500px] px-4 sm:px-6 lg:px-8">

          {/* =================================================
              NAVBAR TOP
          ================================================== */}

          <div className="flex h-[76px] items-center justify-between sm:h-[84px] lg:h-[90px]">

            {/* =================================================
                BRAND / LOGO
            ================================================== */}

            <NavLink
              to="/"
              onClick={closeMobileMenu}
              className="flex min-w-0 flex-1 items-center gap-2 sm:gap-3"
            >
              <div
                className="
                  flex
                  h-[42px]
                  w-[42px]
                  shrink-0
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-[5px]
                  bg-white
                  shadow-[0_5px_20px_rgba(0,0,0,0.12)]

                  sm:h-[50px]
                  sm:w-[50px]

                  lg:h-[58px]
                  lg:w-[58px]
                "
              >
                <img
                  src={KS}
                  alt="K S & Company Logo"
                  className="
                    h-full
                    w-full
                    object-contain
                    p-1
                  "
                />
              </div>

              <div className="ml-1 flex min-w-0 flex-col">
                <h1
                  className="
                    whitespace-nowrap
                    text-[16px]
                    font-semibold
                    leading-none
                    tracking-[0.3px]

                    sm:text-[20px]

                    lg:text-[27px]
                  "
                >
                  K S &amp; COMPANY
                </h1>

                <span
                  className="
                    mt-1.5
                    whitespace-nowrap
                    text-[7px]
                    font-medium
                    tracking-[0.7px]
                    text-white/75

                    sm:mt-2
                    sm:text-[9px]

                    lg:text-[15px]
                  "
                >
                  CHARTERED ACCOUNTANTS
                </span>
              </div>
            </NavLink>

            {/* =================================================
                DESKTOP MENU
            ================================================== */}

            <div className="hidden h-full shrink-0 items-center lg:flex">

              {/* HOME */}

              <NavLink
                to="/"
                end
                className={({ isActive }) => `
                  group
                  relative
                  flex
                  h-full
                  cursor-pointer
                  items-center
                  whitespace-nowrap
                  px-4
                  text-[17px]
                  font-semibold
                  transition-colors
                  duration-200

                  xl:px-5
                  xl:text-[19px]

                  ${
                    isActive
                      ? "text-white"
                      : "text-white/75 hover:text-white"
                  }
                `}
              >
                Home

                <span
                  className="
                    absolute
                    bottom-0
                    left-4
                    right-4
                    h-[3px]
                    origin-center
                    scale-x-0
                    rounded-full
                    bg-white
                    transition-transform
                    duration-300
                    group-hover:scale-x-100
                  "
                />
              </NavLink>

              {/* ABOUT */}

              <NavLink
                to="/about"
                className={({ isActive }) => `
                  group
                  relative
                  flex
                  h-full
                  cursor-pointer
                  items-center
                  whitespace-nowrap
                  px-4
                  text-[17px]
                  font-semibold
                  transition-colors
                  duration-200

                  xl:px-5
                  xl:text-[19px]

                  ${
                    isActive
                      ? "text-white"
                      : "text-white/75 hover:text-white"
                  }
                `}
              >
                About

                <span
                  className="
                    absolute
                    bottom-0
                    left-4
                    right-4
                    h-[3px]
                    origin-center
                    scale-x-0
                    rounded-full
                    bg-white
                    transition-transform
                    duration-300
                    group-hover:scale-x-100
                  "
                />
              </NavLink>

              {/* =================================================
                  OUR SERVICES
              ================================================== */}

              <div
                className="relative flex h-full items-center"
                onMouseEnter={() => setServiceOpen(true)}
                onMouseLeave={() => setServiceOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => setServiceOpen(!serviceOpen)}
                  className="
                    group
                    relative
                    flex
                    h-full
                    cursor-pointer
                    items-center
                    gap-1
                    whitespace-nowrap
                    px-4
                    text-[17px]
                    font-semibold
                    text-white/75
                    transition-colors
                    duration-200
                    hover:text-white

                    xl:px-5
                    xl:text-[19px]
                  "
                >
                  Our Services

                  <ChevronDown
                    size={17}
                    className={`
                      transition-transform
                      duration-300

                      ${
                        serviceOpen
                          ? "rotate-180 text-[#d4af37]"
                          : ""
                      }
                    `}
                  />

                  <span
                    className="
                      absolute
                      bottom-0
                      left-4
                      right-4
                      h-[3px]
                      origin-center
                      scale-x-0
                      rounded-full
                      bg-white
                      transition-transform
                      duration-300
                      group-hover:scale-x-100
                    "
                  />
                </button>

                {/* SERVICES DROPDOWN */}

                <div
                  className={`
                    absolute
                    right-0
                    top-[76px]
                    w-[290px]
                    origin-top-right
                    overflow-hidden
                    rounded-b-xl
                    border
                    border-white/10
                    bg-[#102b29]/98
                    shadow-[0_25px_60px_rgba(0,0,0,0.35)]
                    backdrop-blur-xl

                    sm:top-[84px]
                    lg:top-[90px]

                    transition-all
                    duration-300

                    ${
                      serviceOpen
                        ? `
                          visible
                          translate-y-0
                          scale-100
                          opacity-100
                        `
                        : `
                          invisible
                          -translate-y-2
                          scale-[0.98]
                          opacity-0
                        `
                    }
                  `}
                >
                  {serviceMenuItems.map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <NavLink
                        key={item.name}
                        to={item.path}
                        onClick={() => setServiceOpen(false)}
                        className="
                          group
                          flex
                          items-center
                          gap-4
                          border-b
                          border-white/10
                          px-5
                          py-3.5
                          transition-all
                          duration-300
                          last:border-b-0
                          hover:bg-white/10
                        "
                      >
                        <div
                          className="
                            flex
                            h-10
                            w-10
                            shrink-0
                            items-center
                            justify-center
                            rounded-lg
                            bg-white/10
                            text-white
                            transition-all
                            duration-300
                            group-hover:bg-[#d4af37]
                            group-hover:text-[#102b29]
                          "
                        >
                          <Icon size={18} />
                        </div>

                        <div className="min-w-0">
                          <p
                            className="
                              text-[14px]
                              font-semibold
                              text-white
                              transition-colors
                              duration-300
                              group-hover:text-[#d4af37]
                            "
                          >
                            {item.name}
                          </p>

                          <p
                            className="
                              mt-1
                              text-[11px]
                              text-white/50
                              transition-colors
                              duration-300
                              group-hover:text-white/70
                            "
                          >
                            {item.description}
                          </p>
                        </div>

                        <span
                          className="
                            ml-auto
                            text-[10px]
                            font-medium
                            text-white/25
                            transition-colors
                            duration-300
                            group-hover:text-[#d4af37]/70
                          "
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </NavLink>
                    );
                  })}
                </div>
              </div>

              {/* CONTACT */}

              <NavLink
                to="/contact"
                className={({ isActive }) => `
                  group
                  relative
                  flex
                  h-full
                  cursor-pointer
                  items-center
                  whitespace-nowrap
                  px-4
                  text-[17px]
                  font-semibold
                  transition-colors
                  duration-200

                  xl:px-5
                  xl:text-[19px]

                  ${
                    isActive
                      ? "text-white"
                      : "text-white/75 hover:text-white"
                  }
                `}
              >
                Contact

                <span
                  className="
                    absolute
                    bottom-0
                    left-4
                    right-4
                    h-[3px]
                    origin-center
                    scale-x-0
                    rounded-full
                    bg-white
                    transition-transform
                    duration-300
                    group-hover:scale-x-100
                  "
                />
              </NavLink>

              {/* =================================================
                  CAREERS
              ================================================== */}

              <NavLink
                to="/careers"
                className={({ isActive }) => `
                  group
                  relative
                  flex
                  h-full
                  cursor-pointer
                  items-center
                  whitespace-nowrap
                  px-4
                  text-[17px]
                  font-semibold
                  transition-colors
                  duration-200

                  xl:px-5
                  xl:text-[19px]

                  ${
                    isActive
                      ? "text-white"
                      : "text-white/75 hover:text-white"
                  }
                `}
              >
                Careers

                <span
                  className="
                    absolute
                    bottom-0
                    left-4
                    right-4
                    h-[3px]
                    origin-center
                    scale-x-0
                    rounded-full
                    bg-white
                    transition-transform
                    duration-300
                    group-hover:scale-x-100
                  "
                />
              </NavLink>

              {/* =================================================
                  RESOURCES
              ================================================== */}

              <div
                className="relative flex h-full items-center"
                onMouseEnter={() => setResourceOpen(true)}
                onMouseLeave={() => setResourceOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => setResourceOpen(!resourceOpen)}
                  className="
                    group
                    relative
                    flex
                    h-full
                    cursor-pointer
                    items-center
                    gap-1
                    whitespace-nowrap
                    px-4
                    text-[17px]
                    font-semibold
                    text-white/75
                    transition-colors
                    duration-200
                    hover:text-white

                    xl:px-5
                    xl:text-[19px]
                  "
                >
                  Resources

                  <ChevronDown
                    size={17}
                    className={`
                      transition-transform
                      duration-300

                      ${
                        resourceOpen
                          ? "rotate-180 text-[#d4af37]"
                          : ""
                      }
                    `}
                  />

                  <span
                    className="
                      absolute
                      bottom-0
                      left-4
                      right-4
                      h-[3px]
                      origin-center
                      scale-x-0
                      rounded-full
                      bg-white
                      transition-transform
                      duration-300
                      group-hover:scale-x-100
                    "
                  />
                </button>

                {/* =================================================
                    RESOURCES DROPDOWN
                ================================================== */}

                <div
                  className={`
                    absolute
                    right-0
                    top-[76px]
                    w-[260px]
                    origin-top-right
                    overflow-hidden
                    rounded-b-xl
                    border
                    border-white/10
                    bg-[#102b29]/98
                    shadow-[0_25px_60px_rgba(0,0,0,0.35)]
                    backdrop-blur-xl

                    sm:top-[84px]
                    lg:top-[90px]

                    transition-all
                    duration-300

                    ${
                      resourceOpen
                        ? `
                          visible
                          translate-y-0
                          scale-100
                          opacity-100
                        `
                        : `
                          invisible
                          -translate-y-2
                          scale-[0.98]
                          opacity-0
                        `
                    }
                  `}
                >

                  {/* PRIVACY POLICY */}

                  <NavLink
                    to="/privacy-policy"
                    onClick={() => setResourceOpen(false)}
                    className="
                      group
                      flex
                      items-center
                      gap-4
                      border-b
                      border-white/10
                      px-5
                      py-5
                      transition-all
                      duration-300
                      hover:bg-white/10
                    "
                  >
                    <div
                      className="
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-lg
                        bg-white/10
                        text-white
                        transition-all
                        duration-300

                        group-hover:bg-[#d4af37]
                        group-hover:text-[#102b29]
                      "
                    >
                      <ShieldCheck size={18} />
                    </div>

                    <div>
                      <p
                        className="
                          text-[15px]
                          font-semibold
                          text-white
                          transition-colors
                          duration-300
                          group-hover:text-[#d4af37]
                        "
                      >
                        Privacy Policy
                      </p>

                      <p
                        className="
                          mt-1
                          text-[11px]
                          text-white/50
                          transition-colors
                          duration-300
                          group-hover:text-white/70
                        "
                      >
                        Information & privacy guidelines
                      </p>
                    </div>
                  </NavLink>

                  {/* COMPANY DOCUMENTS */}

                  <NavLink
                    to="/company-documents"
                    onClick={() => setResourceOpen(false)}
                    className="
                      group
                      flex
                      items-center
                      gap-4
                      px-5
                      py-5
                      transition-all
                      duration-300
                      hover:bg-white/10
                    "
                  >
                    <div
                      className="
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-lg
                        bg-white/10
                        text-white
                        transition-all
                        duration-300

                        group-hover:bg-[#d4af37]
                        group-hover:text-[#102b29]
                      "
                    >
                      <FileText size={18} />
                    </div>

                    <div>
                      <p
                        className="
                          text-[15px]
                          font-semibold
                          text-white
                          transition-colors
                          duration-300
                          group-hover:text-[#d4af37]
                        "
                      >
                        Company's Documents
                      </p>

                      <p
                        className="
                          mt-1
                          text-[11px]
                          text-white/50
                          transition-colors
                          duration-300
                          group-hover:text-white/70
                        "
                      >
                        Important company resources
                      </p>
                    </div>
                  </NavLink>

                </div>
              </div>

              {/* DIVIDER */}

              <div className="mx-2 h-[38px] w-px bg-white/20" />

              {/* SCHEDULE APPOINTMENT */}

              <button
                type="button"
                onClick={() => setIsAppointmentOpen(true)}
                className="
                  flex
                  cursor-pointer
                  items-center
                  gap-2
                  whitespace-nowrap
                  px-3
                  text-[17px]
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:text-[#d4af37]

                  xl:px-4
                  xl:text-[19px]
                "
              >
                <div className="relative shrink-0">

                  <span className="absolute -right-2 -top-2 flex h-4 w-4">
                    <span
                      className="
                        absolute
                        inline-flex
                        h-full
                        w-full
                        animate-ping
                        rounded-full
                        bg-[#9bd66f]
                        opacity-60
                      "
                    />

                    <span
                      className="
                        relative
                        inline-flex
                        h-3
                        w-3
                        rounded-full
                        border-2
                        border-[#171923]
                        bg-[#8fce62]
                        shadow-[0_0_12px_rgba(143,206,98,0.9)]
                      "
                    />
                  </span>

                  <MessageSquare
                    size={22}
                    strokeWidth={1.5}
                    className="text-[#6DA8B8]"
                  />
                </div>

                <span>
                  Schedule Appointment
                </span>
              </button>
            </div>

            {/* =================================================
                MOBILE MENU BUTTON
            ================================================== */}

            <button
              type="button"
              onClick={() => setMobileMenu(!mobileMenu)}
              aria-label="Toggle menu"
              aria-expanded={mobileMenu}
              className="
                ml-2
                flex
                h-9
                w-9
                shrink-0
                items-center
                justify-center
                rounded-md
                border
                border-white/20
                bg-white/5
                text-white
                transition
                hover:bg-white/10

                sm:h-10
                sm:w-10

                lg:hidden
              "
            >
              {mobileMenu ? (
                <X size={21} />
              ) : (
                <Menu size={21} />
              )}
            </button>
          </div>

          {/* =================================================
              MOBILE MENU
          ================================================== */}

          {mobileMenu && (
            <div
              className="
                w-full
                border-t
                border-white/10
                bg-[#171923]/98
                pb-4
                backdrop-blur-xl
                lg:hidden
              "
            >
              <div className="w-full">

                {/* HOME */}

                <NavLink
                  to="/"
                  end
                  onClick={closeMobileMenu}
                  className={({ isActive }) => `
                    flex
                    w-full
                    items-center
                    justify-between
                    border-b
                    border-white/10
                    px-2
                    py-3
                    text-[13px]
                    font-medium
                    transition-colors

                    sm:text-[14px]

                    ${
                      isActive
                        ? "text-[#d4af37]"
                        : "text-white/80 hover:text-white"
                    }
                  `}
                >
                  Home
                </NavLink>

                {/* ABOUT */}

                <NavLink
                  to="/about"
                  onClick={closeMobileMenu}
                  className={({ isActive }) => `
                    flex
                    w-full
                    items-center
                    justify-between
                    border-b
                    border-white/10
                    px-2
                    py-3
                    text-[13px]
                    font-medium
                    transition-colors

                    sm:text-[14px]

                    ${
                      isActive
                        ? "text-[#d4af37]"
                        : "text-white/80 hover:text-white"
                    }
                  `}
                >
                  About
                </NavLink>

                {/* MOBILE SERVICES */}

                <button
                  type="button"
                  onClick={() =>
                    setMobileServiceOpen(!mobileServiceOpen)
                  }
                  className="
                    flex
                    w-full
                    items-center
                    justify-between
                    border-b
                    border-white/10
                    px-2
                    py-3
                    text-left
                    text-[13px]
                    font-medium
                    text-white/80
                    transition
                    hover:text-white

                    sm:text-[14px]
                  "
                >
                  <span>
                    Our Services
                  </span>

                  <ChevronDown
                    size={17}
                    className={`
                      transition-transform
                      duration-300

                      ${
                        mobileServiceOpen
                          ? "rotate-180 text-[#d4af37]"
                          : ""
                      }
                    `}
                  />
                </button>

                {/* MOBILE SERVICE ITEMS */}

                {mobileServiceOpen && (
                  <div
                    className="
                      border-b
                      border-white/10
                      bg-[#102b29]/80
                    "
                  >
                    {serviceMenuItems.map((item, index) => {
                      const Icon = item.icon;

                      return (
                        <NavLink
                          key={item.name}
                          to={item.path}
                          onClick={closeMobileMenu}
                          className="
                            group
                            flex
                            items-center
                            gap-3
                            border-b
                            border-white/5
                            px-5
                            py-3
                            text-[13px]
                            text-white/70
                            transition
                            hover:bg-white/5
                            hover:text-white

                            last:border-b-0
                          "
                        >
                          <div
                            className="
                              flex
                              h-8
                              w-8
                              shrink-0
                              items-center
                              justify-center
                              rounded-lg
                              bg-white/10
                              text-white/70
                              transition-all
                              duration-300

                              group-hover:bg-[#d4af37]
                              group-hover:text-[#102b29]
                            "
                          >
                            <Icon size={15} />
                          </div>

                          <span
                            className="
                              transition-colors
                              duration-300
                              group-hover:text-[#d4af37]
                            "
                          >
                            {item.name}
                          </span>

                          <span
                            className="
                              ml-auto
                              text-[9px]
                              text-white/25
                              group-hover:text-[#d4af37]/70
                            "
                          >
                            {String(index + 1).padStart(2, "0")}
                          </span>
                        </NavLink>
                      );
                    })}
                  </div>
                )}

                {/* CONTACT */}

                <NavLink
                  to="/contact"
                  onClick={closeMobileMenu}
                  className={({ isActive }) => `
                    flex
                    w-full
                    items-center
                    justify-between
                    border-b
                    border-white/10
                    px-2
                    py-3
                    text-[13px]
                    font-medium
                    transition-colors

                    sm:text-[14px]

                    ${
                      isActive
                        ? "text-[#d4af37]"
                        : "text-white/80 hover:text-white"
                    }
                  `}
                >
                  Contact
                </NavLink>

                {/* CAREERS */}

                <NavLink
                  to="/careers"
                  onClick={closeMobileMenu}
                  className={({ isActive }) => `
                    flex
                    w-full
                    items-center
                    justify-between
                    border-b
                    border-white/10
                    px-2
                    py-3
                    text-[13px]
                    font-medium
                    transition-colors

                    sm:text-[14px]

                    ${
                      isActive
                        ? "text-[#d4af37]"
                        : "text-white/80 hover:text-white"
                    }
                  `}
                >
                  Careers
                </NavLink>

                {/* MOBILE RESOURCES */}

                <button
                  type="button"
                  onClick={() =>
                    setMobileResourceOpen(!mobileResourceOpen)
                  }
                  className="
                    flex
                    w-full
                    items-center
                    justify-between
                    border-b
                    border-white/10
                    px-2
                    py-3
                    text-left
                    text-[13px]
                    font-medium
                    text-white/80
                    transition
                    hover:text-white

                    sm:text-[14px]
                  "
                >
                  <span>
                    Resources
                  </span>

                  <ChevronDown
                    size={17}
                    className={`
                      transition-transform
                      duration-300

                      ${
                        mobileResourceOpen
                          ? "rotate-180 text-[#d4af37]"
                          : ""
                      }
                    `}
                  />
                </button>

                {/* MOBILE RESOURCES ITEMS */}

                {mobileResourceOpen && (
                  <div
                    className="
                      border-b
                      border-white/10
                      bg-[#102b29]/80
                    "
                  >

                    {/* PRIVACY POLICY */}

                    <NavLink
                      to="/privacy-policy"
                      onClick={closeMobileMenu}
                      className="
                        group
                        flex
                        items-center
                        gap-3
                        border-b
                        border-white/5
                        px-5
                        py-3
                        text-[13px]
                        text-white/70
                        transition
                        hover:bg-white/5
                      "
                    >
                      <ShieldCheck
                        size={16}
                        className="
                          text-white/70
                          transition-colors
                          duration-300
                          group-hover:text-[#d4af37]
                        "
                      />

                      <span className="transition-colors duration-300 group-hover:text-[#d4af37]">
                        Privacy Policy
                      </span>
                    </NavLink>

                    {/* COMPANY DOCUMENTS */}

                    <NavLink
                      to="/company-documents"
                      onClick={closeMobileMenu}
                      className="
                        group
                        flex
                        items-center
                        gap-3
                        px-5
                        py-3
                        text-[13px]
                        text-white/70
                        transition
                        hover:bg-white/5
                      "
                    >
                      <FileText
                        size={16}
                        className="
                          text-white/70
                          transition-colors
                          duration-300
                          group-hover:text-[#d4af37]
                        "
                      />

                      <span className="transition-colors duration-300 group-hover:text-[#d4af37]">
                        Company's Documents
                      </span>
                    </NavLink>

                  </div>
                )}
              </div>

              {/* =================================================
                  MOBILE SCHEDULE APPOINTMENT
              ================================================== */}

              <button
                type="button"
                onClick={() => {
                  closeMobileMenu();
                  setIsAppointmentOpen(true);
                }}
                className="
                  relative
                  mt-4
                  flex
                  w-full
                  cursor-pointer
                  items-center
                  justify-center
                  gap-2
                  rounded-md
                  bg-white
                  py-2.5
                  text-[13px]
                  font-semibold
                  text-[#171923]
                  transition-all
                  duration-300
                  hover:bg-[#e8eee8]

                  sm:text-[14px]
                "
              >
                <div className="relative">

                  <span className="absolute -right-2 -top-2 flex h-3.5 w-3.5">

                    <span
                      className="
                        absolute
                        inline-flex
                        h-full
                        w-full
                        animate-ping
                        rounded-full
                        bg-[#75b43c]
                        opacity-60
                      "
                    />

                    <span
                      className="
                        relative
                        inline-flex
                        h-2.5
                        w-2.5
                        rounded-full
                        bg-[#75b43c]
                        shadow-[0_0_10px_rgba(117,180,60,0.9)]
                      "
                    />

                  </span>

                  <MessageSquare
                    size={17}
                    strokeWidth={1.5}
                  />
                </div>

                Schedule Appointment
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* =====================================================
          RIGHT CORNER TOGGLE
      ====================================================== */}

      {hasScrolled && (
        <button
          type="button"
          onClick={toggleNavbar}
          aria-label={
            navbarOpen
              ? "Hide navigation"
              : "Show navigation"
          }
          className="
            fixed
            right-0
            top-0
            z-[1200]

            hidden
            lg:flex

            h-[62px]
            w-[70px]

            items-center
            justify-center

            rounded-bl-[18px]

            border-b
            border-l
            border-white/10

            bg-[#173538]/95

            text-white

            shadow-[-8px_10px_30px_rgba(0,0,0,0.28)]

            backdrop-blur-xl

            transition-all
            duration-300

            hover:w-[76px]
            hover:bg-[#326844]
          "
        >
          <span
            className="
              absolute
              right-2
              top-2
              h-1.5
              w-1.5
              animate-pulse
              rounded-full
              bg-[#9bd66f]
              shadow-[0_0_12px_rgba(155,214,111,1)]
            "
          />

          {navbarOpen ? (
            <ChevronUp
              size={22}
              strokeWidth={1.8}
            />
          ) : (
            <ChevronDown
              size={22}
              strokeWidth={1.8}
            />
          )}
        </button>
      )}

      {/* =====================================================
          SCHEDULE APPOINTMENT MODAL
      ====================================================== */}

      <ScheduleAppointmentModal
        isOpen={isAppointmentOpen}
        onClose={() => setIsAppointmentOpen(false)}
      />
    </>
  );
};

export default Navbar;