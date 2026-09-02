import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
  const location = useLocation();

  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // ==========================================
  // SCROLL TO TOP WHEN PAGE / ROUTE CHANGES
  // ==========================================

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, [location.pathname]);

  // ==========================================
  // CALCULATE SCROLL PROGRESS
  // ==========================================

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const progress =
        scrollHeight > 0
          ? (scrollTop / scrollHeight) * 100
          : 0;

      setScrollProgress(progress);

      // Show button after scrolling down
      setIsVisible(scrollTop > 400);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // ==========================================
  // BUTTON CLICK → SCROLL TO TOP
  // ==========================================

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  // ==========================================
  // CIRCULAR PROGRESS CALCULATION
  // ==========================================

  const radius = 24;
  const circumference = 2 * Math.PI * radius;

  const strokeDashoffset =
    circumference -
    (scrollProgress / 100) * circumference;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`
        fixed
        bottom-28
        right-6
        z-[999]

        flex
        h-14
        w-14
        items-center
        justify-center

        rounded-full
        bg-white

        shadow-[0_10px_30px_rgba(0,0,0,0.18)]

        transition-all
        duration-300

        hover:-translate-y-1
        hover:shadow-[0_15px_35px_rgba(0,0,0,0.25)]

        sm:h-16
        sm:w-16

        ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-10 opacity-0"
        }
      `}
    >
      {/* =========================
          CIRCULAR PROGRESS
      ========================== */}

      <svg
        className="
          absolute
          inset-0
          h-full
          w-full
          -rotate-90
        "
        viewBox="0 0 56 56"
      >
        {/* BACKGROUND CIRCLE */}

        <circle
          cx="28"
          cy="28"
          r={radius}
          fill="none"
          stroke="rgba(16,43,41,0.12)"
          strokeWidth="2"
        />

        {/* PROGRESS CIRCLE */}

        <circle
          cx="28"
          cy="28"
          r={radius}
          fill="none"
          stroke="#102b29"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          className="transition-all duration-150"
        />
      </svg>

      {/* =========================
          UP ARROW
      ========================== */}

      <ArrowUp
        size={22}
        strokeWidth={2}
        className="relative z-10 text-[#102b29]"
      />
    </button>
  );
};

export default ScrollToTop;