import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import {
  MessageSquare,
  Menu,
  X,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

import KS from "../assets/WhatsApp Image 2026-08-30 at 19.16.22 (1).jpeg";


const menuItems = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Our Services",
    path: "/services",
  },
  {
    name: "Contact",
    path: "/contact",
  },
  {
    name: "Blog",
    path: "/blog",
  },
  {
    name: "Careers",
    path: "/careers",
  },
];


const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(true);


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
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  const toggleNavbar = () => {
    setNavbarOpen((prev) => !prev);
    setMobileMenu(false);
  };


  const closeMobileMenu = () => {
    setMobileMenu(false);
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
          overflow-hidden
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

          <div className="flex h-[76px] items-center justify-between sm:h-[84px] lg:h-[90px]">


            {/* =================================================
                BRAND / LOGO
            ================================================= */}

            <NavLink
              to="/"
              onClick={closeMobileMenu}
              className="flex min-w-0 flex-1 items-center gap-2 sm:gap-3"
            >

              {/* LOGO */}

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
                  alt="KS & Company Logo"
                  className="
                    h-full
                    w-full
                    object-contain
                    p-1
                  "
                />
              </div>


              {/* COMPANY NAME */}

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
                  KS &amp; COMPANY
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
            ================================================= */}

            <div className="hidden h-full shrink-0 items-center lg:flex">

              {menuItems.map((item) => (

                <NavLink
                  key={item.name}
                  to={item.path}
                  end={item.path === "/"}
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

                  <span className="flex items-center gap-1">

                    {item.name}

                    {item.name === "Our Services" && (
                      <span className="ml-1 text-[15px]">
                        +
                      </span>
                    )}

                  </span>


                  {/* ACTIVE + HOVER LINE */}

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

              ))}


              {/* DIVIDER */}

              <div className="mx-2 h-[38px] w-px bg-white/20" />


              {/* =================================================
                  SCHEDULE APPOINTMENT
              ================================================= */}

              <NavLink
                to="/contact"
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
                  hover:text-[#9bd66f]
                  xl:px-4
                  xl:text-[19px]
                "
              >

                <div className="relative shrink-0">

                  {/* PULSE DOT */}

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

              </NavLink>

            </div>


            {/* =================================================
                MOBILE MENU BUTTON
            ================================================= */}

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
          ================================================= */}

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

                {menuItems.map((item) => (

                  <NavLink
                    key={item.name}
                    to={item.path}
                    end={item.path === "/"}
                    onClick={closeMobileMenu}
                    className={({ isActive }) => `
                      flex
                      w-full
                      cursor-pointer
                      items-center
                      justify-between
                      border-b
                      border-white/10
                      px-2
                      py-2.5
                      text-left
                      text-[13px]
                      font-medium
                      transition-colors
                      sm:py-3
                      sm:text-[14px]

                      ${
                        isActive
                          ? "text-[#9bd66f]"
                          : "text-white/80 hover:text-white"
                      }
                    `}
                  >

                    <span className="flex items-center gap-1">

                      {item.name}

                      {item.name === "Our Services" && (
                        <span className="ml-1 text-[12px]">
                          +
                        </span>
                      )}

                    </span>

                  </NavLink>

                ))}

              </div>


              {/* MOBILE APPOINTMENT */}

              <NavLink
                to="/contact"
                onClick={closeMobileMenu}
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

              </NavLink>

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

            flex
            h-[52px]
            w-[58px]

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

            hover:w-[66px]
            hover:bg-[#326844]

            sm:h-[58px]
            sm:w-[64px]

            lg:h-[62px]
            lg:w-[70px]
          "
        >

          {/* GLOW DOT */}

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

    </>
  );
};


export default Navbar;