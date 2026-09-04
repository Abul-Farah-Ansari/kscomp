import React, { useEffect, useState } from "react";
import {
  ArrowRight,
  Play,
  BadgeCheck,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { Link } from "react-router-dom";

import caLogo from "../../assets/CA.png";
import heroVideo from "../../assets/hero-video.mp4";

const Hero = () => {
  const rotatingTexts = [
    "Tax Advisor",
    "Insurance Advisor",
    "Finance Advisor",
  ];

  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  /* =========================================================
     TYPING EFFECT
  ========================================================= */

  useEffect(() => {
    const currentText = rotatingTexts[textIndex];
    const typingSpeed = isDeleting ? 45 : 85;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentText.substring(0, displayText.length + 1));

        if (displayText === currentText) {
          setTimeout(() => {
            setIsDeleting(true);
          }, 1200);
        }
      } else {
        setDisplayText(currentText.substring(0, displayText.length - 1));

        if (displayText === "") {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % rotatingTexts.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, textIndex]);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#0b211f]">

      {/* =====================================================
          BACKGROUND VIDEO
      ===================================================== */}

      <video
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Deep Emerald Overlay */}
      <div className="absolute inset-0 bg-[#071b19]/75" />

      {/* Left Content Protection */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#071d1b] via-[#0b2421]/95 to-[#0b2421]/45" />

      {/* Bottom Fade */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0b211f] to-transparent" />

      {/* =====================================================
          GOLDEN AMBIENT LIGHT
      ===================================================== */}

      <div className="pointer-events-none absolute -left-48 -top-48 h-[600px] w-[600px] rounded-full bg-[#c9a55b]/10 blur-[140px]" />

      <div className="pointer-events-none absolute -bottom-52 right-[-150px] h-[600px] w-[600px] rounded-full bg-[#c9a55b]/10 blur-[150px]" />

      <div className="pointer-events-none absolute right-[25%] top-[10%] h-[300px] w-[300px] rounded-full bg-[#e1c47b]/5 blur-[100px]" />

      {/* Decorative Lines */}
      <div className="pointer-events-none absolute left-[7%] top-[23%] h-px w-36 bg-gradient-to-r from-transparent via-[#d8bb72]/30 to-transparent" />

      <div className="pointer-events-none absolute right-[8%] top-[15%] h-28 w-px bg-gradient-to-b from-transparent via-[#d8bb72]/20 to-transparent" />

      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-5 py-20 sm:px-8 lg:px-10 lg:py-12">
        <div className="grid w-full items-center gap-4 lg:grid-cols-[1.02fr_0.98fr]">

          {/* =================================================
              LEFT SIDE
          ================================================= */}

          <div className="relative z-20 max-w-2xl">

            {/* Company Badge */}
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#d8bb72]/30 bg-white/[0.035] px-4 py-2 shadow-[0_8px_30px_rgba(0,0,0,0.12)] backdrop-blur-xl">

              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#d8bb72]/60" />

                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#d8bb72]" />
              </span>

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#e3cc91] sm:text-xs">
                KS & COMPANY
              </span>
            </div>

            {/* =================================================
                MAIN HEADING
            ================================================= */}

            <h1 className="font-semibold tracking-[-0.045em] text-white">

              {/* Financial */}
              <span className="block text-[2.35rem] leading-[1] sm:text-4xl md:text-5xl lg:text-[3.35rem] xl:text-[3.7rem]">
                Financial
              </span>

              {/* Expertise */}
              <span className="relative block text-[2.35rem] leading-[1] sm:text-4xl md:text-5xl lg:text-[3.35rem] xl:text-[3.7rem]">

                <span className="relative z-10">
                  Expertise
                </span>

                <span className="absolute bottom-[-7px] left-0 h-[2px] w-28 bg-gradient-to-r from-[#f3d995] via-[#c7a45d] to-transparent shadow-[0_0_12px_rgba(216,187,114,0.55)] sm:w-36" />
              </span>

              {/* =================================================
                  HIGHLIGHTED TYPING TEXT
              ================================================= */}

              <span className="relative mt-4 block min-h-[1.15em]">

                {/* Gold Glow */}
                <span className="absolute -left-3 top-1/2 h-14 w-64 -translate-y-1/2 rounded-full bg-[#c7a45d]/10 blur-2xl sm:w-80" />

                {/* Typing Text */}
                <span className="relative z-10 bg-gradient-to-r from-[#f5dfa2] via-[#d9ba6d] to-[#b78e43] bg-clip-text text-[2.15rem] font-semibold leading-tight tracking-[-0.025em] text-transparent drop-shadow-[0_2px_12px_rgba(216,187,114,0.2)] sm:text-4xl md:text-[2.8rem] lg:text-[3rem]">

                  {displayText}

                  <span className="ml-1 inline-block h-[0.78em] w-[2px] translate-y-1 animate-pulse bg-[#e6c979] shadow-[0_0_8px_rgba(230,201,121,0.7)]" />
                </span>

                {/* Accent */}
                <span className="absolute bottom-[-5px] left-0 h-[1px] w-20 bg-gradient-to-r from-[#d8bb72]/70 to-transparent sm:w-28" />
              </span>
            </h1>

            {/* Description */}
            <p className="mt-5 max-w-xl text-sm leading-6 text-white/65 sm:text-[15px]">
              Strategic financial solutions, taxation, insurance and advisory
              services designed to help individuals and businesses grow with
              clarity, confidence and long-term vision.
            </p>

            {/* =================================================
                BUTTONS
            ================================================= */}

            <div className="mt-6 flex flex-wrap items-center gap-3">

              {/* Get Started */}
              <Link
                to="/contact"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-[#d9bb72] via-[#c7a45d] to-[#a9823d] px-5 py-2.5 text-sm font-semibold text-[#102b29] shadow-[0_12px_35px_rgba(0,0,0,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_15px_45px_rgba(199,164,93,0.28)]"
              >
                <span className="relative z-10">
                  Get Started
                </span>

                <ArrowRight
                  size={16}
                  className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
                />

                <span className="absolute inset-y-0 left-[-100%] w-[60%] rotate-12 bg-white/25 blur-sm transition-all duration-700 group-hover:left-[130%]" />
              </Link>

              {/* Explore Services */}
              <Link
                to="/services"
                className="group inline-flex items-center gap-2 rounded-full border border-[#d8bb72]/25 bg-white/[0.035] px-5 py-2.5 text-sm font-medium text-white shadow-[0_8px_25px_rgba(0,0,0,0.12)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-[#d8bb72]/50 hover:bg-white/[0.07]"
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full border border-[#d8bb72]/50">
                  <Play
                    size={9}
                    fill="currentColor"
                    className="ml-[1px] text-[#d8bb72]"
                  />
                </span>

                Explore Services
              </Link>
            </div>

            {/* =================================================
                TRUST INDICATORS
            ================================================= */}

            <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3">

              <div className="flex items-center gap-2">
                <ShieldCheck
                  size={17}
                  strokeWidth={1.5}
                  className="text-[#d8bb72]"
                />

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-white/70">
                    Trusted
                  </p>

                  <p className="text-[9px] text-white/40">
                    Professional Advisory
                  </p>
                </div>
              </div>

              <div className="h-7 w-px bg-white/10" />

              <div className="flex items-center gap-2">
                <TrendingUp
                  size={17}
                  strokeWidth={1.5}
                  className="text-[#d8bb72]"
                />

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-white/70">
                    Growth
                  </p>

                  <p className="text-[9px] text-white/40">
                    Built For The Future
                  </p>
                </div>
              </div>

              <div className="h-7 w-px bg-white/10" />

              <div className="flex items-center gap-2">
                <BadgeCheck
                  size={17}
                  strokeWidth={1.5}
                  className="text-[#d8bb72]"
                />

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-white/70">
                    Excellence
                  </p>

                  <p className="text-[9px] text-white/40">
                    Client Focused
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* =================================================
              RIGHT SIDE — GLOSSY GOLD CIRCLE
          ================================================= */}

          <div className="relative flex items-center justify-center lg:justify-end">

            <div className="relative flex h-[360px] w-[360px] items-center justify-center sm:h-[415px] sm:w-[415px] lg:mr-0 lg:h-[470px] lg:w-[470px]">

              {/* Outer Ring */}
              <div className="absolute inset-0 rounded-full border border-[#d8bb72]/20" />

              {/* Second Ring */}
              <div className="absolute inset-[10px] rounded-full border border-[#d8bb72]/12" />

              {/* Dashed Ring */}
              <div className="absolute inset-[23px] rounded-full border border-dashed border-[#d8bb72]/15" />

              {/* Glow */}
              <div className="absolute inset-[28px] rounded-full bg-[#d8bb72]/10 blur-3xl" />

              {/* =================================================
                  MAIN GOLD CIRCLE
              ================================================= */}

              <div className="relative flex h-[310px] w-[310px] items-center justify-center rounded-full bg-gradient-to-br from-[#f2d993] via-[#d1ae61] to-[#8a682d] p-[1px] shadow-[0_35px_100px_rgba(0,0,0,0.55),0_0_45px_rgba(200,165,90,0.12)] sm:h-[350px] sm:w-[350px] lg:h-[385px] lg:w-[385px]">

                {/* Metallic Highlight */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/35 via-transparent to-black/20" />

                {/* Dark Interior */}
                <div className="absolute inset-[2px] rounded-full bg-[radial-gradient(circle_at_35%_25%,#173b36_0%,#0d2926_42%,#071c1a_100%)]" />

                {/* Inner Gold Border */}
                <div className="absolute inset-[13px] rounded-full border border-[#d8bb72]/30" />

                {/* Gloss Reflection */}
                <div className="pointer-events-none absolute left-[14%] top-[7%] h-[34%] w-[72%] rotate-[-25deg] rounded-full bg-gradient-to-r from-transparent via-white/[0.12] to-transparent blur-lg" />

                {/* Top Highlight */}
                <div className="absolute left-[28%] top-[17px] h-px w-[44%] bg-gradient-to-r from-transparent via-white/35 to-transparent blur-[1px]" />

                {/* Bottom Reflection */}
                <div className="pointer-events-none absolute bottom-[10%] left-[25%] h-[18%] w-[50%] rounded-full bg-[#c7a45d]/10 blur-2xl" />

                {/* =================================================
                    CENTER CONTENT
                ================================================= */}

                <div className="relative z-10 flex flex-col items-center text-center">

                  {/* CA Logo */}
                  <div className="mb-3 flex h-[56px] w-[56px] items-center justify-center rounded-full border border-[#d8bb72]/60 bg-white p-1.5 shadow-[0_8px_30px_rgba(0,0,0,0.3)] sm:h-[62px] sm:w-[62px]">

                    <img
                      src={caLogo}
                      alt="Chartered Accountant"
                      className="h-full w-full object-contain"
                    />
                  </div>

                  {/* 8+ */}
                  <div className="flex items-baseline">
                    <span className="bg-gradient-to-b from-[#f3dc9d] via-[#d8bb72] to-[#a37b35] bg-clip-text text-[4.7rem] font-bold leading-none tracking-[-0.08em] text-transparent sm:text-[5rem]">
                      8+
                    </span>
                  </div>

                  <span className="mt-1 text-[9px] font-semibold uppercase tracking-[0.32em] text-white/45">
                    Years of Services
                  </span>

                  {/* Divider */}
                  <div className="my-4 flex items-center gap-2">

                    <span className="h-px w-11 bg-gradient-to-r from-transparent to-[#d8bb72]/70" />

                    <span className="h-1 w-1 rounded-full bg-[#d8bb72] shadow-[0_0_8px_rgba(216,187,114,0.7)]" />

                    <span className="h-px w-11 bg-gradient-to-l from-transparent to-[#d8bb72]/70" />
                  </div>

                  {/* Calligraphy Name */}
                  <h2
                    className="text-[2.05rem] leading-none text-[#e1c77f] sm:text-[2.3rem]"
                    style={{
                      fontFamily:
                        '"Lucida Handwriting", "Brush Script MT", "Segoe Script", cursive',
                      fontWeight: 400,
                    }}
                  >
                    Md. Khursheed Alam
                  </h2>

                  <p className="mt-2.5 text-[8px] font-semibold uppercase tracking-[0.32em] text-white/55">
                    Chartered Accountant
                  </p>

                  {/* Stars */}
                  <div className="mt-3 flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span
                        key={star}
                        className="text-[11px] text-[#d8bb72] drop-shadow-[0_0_5px_rgba(216,187,114,0.45)]"
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* =================================================
                  FEATURE CARD 1 — MUCH LOWER
              ================================================= */}

              <div className="absolute left-[-12px] top-[52%] hidden rounded-2xl border border-[#d8bb72]/20 bg-[#102b29]/85 px-3.5 py-2.5 shadow-[0_20px_50px_rgba(0,0,0,0.32)] backdrop-blur-xl sm:block">

                {/* Top Gold Line */}
                <div className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-[#d8bb72]/60 to-transparent" />

                <div className="flex items-center gap-2.5">

                  <div className="flex h-7 w-7 items-center justify-center rounded-full border border-[#d8bb72]/20 bg-[#d8bb72]/10">
                    <TrendingUp
                      size={14}
                      className="text-[#d8bb72]"
                    />
                  </div>

                  <div>
                    <p className="text-[8px] font-semibold uppercase tracking-[0.16em] text-[#d8bb72]">
                      Expertise
                    </p>

                    <p className="mt-0.5 text-[9px] text-white/55">
                      Financial Advisory
                    </p>
                  </div>

                </div>
              </div>

              {/* =================================================
                  FEATURE CARD 2 — VERY LOW
              ================================================= */}

              <div className="absolute bottom-[-8%] right-[-10px] hidden rounded-2xl border border-[#d8bb72]/20 bg-[#102b29]/85 px-3.5 py-2.5 shadow-[0_20px_50px_rgba(0,0,0,0.32)] backdrop-blur-xl sm:block">

                {/* Top Gold Line */}
                <div className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-[#d8bb72]/60 to-transparent" />

                <div className="flex items-center gap-2.5">

                  <div className="flex h-7 w-7 items-center justify-center rounded-full border border-[#d8bb72]/20 bg-[#d8bb72]/10">
                    <BadgeCheck
                      size={14}
                      className="text-[#d8bb72]"
                    />
                  </div>

                  <div>
                    <p className="text-[8px] font-semibold uppercase tracking-[0.14em] text-white/75">
                      Professional
                    </p>

                    <p className="mt-0.5 text-[9px] text-white/40">
                      Trusted Guidance
                    </p>
                  </div>

                </div>
              </div>

              {/* =================================================
                  DECORATIVE DOTS
              ================================================= */}

              <span className="absolute right-[4%] top-[16%] h-1.5 w-1.5 rounded-full bg-[#d8bb72]/70 shadow-[0_0_10px_rgba(216,187,114,0.5)]" />

              <span className="absolute bottom-[5%] left-[10%] h-1.5 w-1.5 rounded-full bg-[#d8bb72]/50" />

              <span className="absolute left-[4%] top-[51%] h-1 w-1 rounded-full bg-white/30" />

            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          SCROLL INDICATOR
      ===================================================== */}

      <div className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex">

        <span className="text-[8px] uppercase tracking-[0.35em] text-white/30">
          Scroll
        </span>

        <div className="h-8 w-px bg-gradient-to-b from-[#d8bb72]/70 to-transparent" />

      </div>
    </section>
  );
};

export default Hero;