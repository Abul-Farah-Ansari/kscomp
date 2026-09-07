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
        setDisplayText(
          currentText.substring(0, displayText.length + 1)
        );

        if (displayText === currentText) {
          setTimeout(() => {
            setIsDeleting(true);
          }, 1200);
        }
      } else {
        setDisplayText(
          currentText.substring(0, displayText.length - 1)
        );

        if (displayText === "") {
          setIsDeleting(false);
          setTextIndex(
            (prev) => (prev + 1) % rotatingTexts.length
          );
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, textIndex]);

  return (
    <section
      className="
        relative
        min-h-screen
        w-full
        overflow-hidden
        bg-[#0b211f]
      "
    >

      {/* =====================================================
          BACKGROUND VIDEO
      ===================================================== */}

      <video
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
        "
      />

      {/* Main Dark Overlay */}
      <div
        className="
          absolute
          inset-0
          bg-[#071b19]/75
        "
      />

      {/* Left Content Protection */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-[#071d1b]
          via-[#0b2421]/95
          to-[#0b2421]/45

          max-sm:bg-[#071d1b]/90
        "
      />

      {/* Bottom Fade */}
      <div
        className="
          absolute
          inset-x-0
          bottom-0
          h-32
          bg-gradient-to-t
          from-[#0b211f]
          to-transparent
        "
      />

      {/* =====================================================
          GOLDEN AMBIENT LIGHT
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-48
          -top-48
          h-[600px]
          w-[600px]
          rounded-full
          bg-[#c9a55b]/10
          blur-[140px]

          max-sm:h-[350px]
          max-sm:w-[350px]
          max-sm:blur-[100px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-52
          right-[-150px]
          h-[600px]
          w-[600px]
          rounded-full
          bg-[#c9a55b]/10
          blur-[150px]

          max-sm:h-[350px]
          max-sm:w-[350px]
          max-sm:blur-[100px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[25%]
          top-[10%]
          h-[300px]
          w-[300px]
          rounded-full
          bg-[#e1c47b]/5
          blur-[100px]

          max-sm:right-[-80px]
          max-sm:top-[35%]
          max-sm:h-[220px]
          max-sm:w-[220px]
        "
      />

      {/* Decorative Lines */}

      <div
        className="
          pointer-events-none
          absolute
          left-[7%]
          top-[23%]
          h-px
          w-36
          bg-gradient-to-r
          from-transparent
          via-[#d8bb72]/30
          to-transparent

          max-sm:left-[8%]
          max-sm:top-[18%]
          max-sm:w-20
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[8%]
          top-[15%]
          h-28
          w-px
          bg-gradient-to-b
          from-transparent
          via-[#d8bb72]/20
          to-transparent

          max-sm:right-[6%]
          max-sm:top-[12%]
          max-sm:h-20
        "
      />

      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-screen
          max-w-7xl
          items-center

          px-5
          py-20

          sm:px-8
          sm:py-20

          md:px-8

          lg:px-10
          lg:py-12

          xl:px-6
        "
      >

        <div
          className="
            grid
            w-full
            items-center

            gap-12

            sm:gap-14

            md:gap-16

            lg:grid-cols-[1.02fr_0.98fr]
            lg:gap-4

            xl:gap-8
          "
        >

          {/* =================================================
              LEFT SIDE
          ================================================= */}

          <div
            className="
              relative
              z-20
              max-w-2xl

              pt-6

              sm:pt-4

              lg:pt-0
            "
          >

            {/* Company Badge */}

            <div
              className="
                mb-4
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-[#d8bb72]/30
                bg-white/[0.035]
                px-4
                py-2
                shadow-[0_8px_30px_rgba(0,0,0,0.12)]
                backdrop-blur-xl

                max-[380px]:px-3
                max-[380px]:py-1.5

                sm:mb-5
              "
            >

              <span className="relative flex h-2 w-2">
                <span
                  className="
                    absolute
                    inline-flex
                    h-full
                    w-full
                    animate-ping
                    rounded-full
                    bg-[#d8bb72]/60
                  "
                />

                <span
                  className="
                    relative
                    inline-flex
                    h-2
                    w-2
                    rounded-full
                    bg-[#d8bb72]
                  "
                />
              </span>

              <span
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.3em]
                  text-[#e3cc91]

                  max-[380px]:text-[8px]
                  max-[380px]:tracking-[0.22em]

                  sm:text-xs
                "
              >
                KS &amp; COMPANY
              </span>

            </div>


            {/* =================================================
                MAIN HEADING
            ================================================= */}

            <h1
              className="
                font-semibold
                tracking-[-0.045em]
                text-white
              "
            >

              {/* Main Title */}

              <span
                className="
                  block
                  text-[2.05rem]
                  leading-[1.04]

                  max-[360px]:text-[1.85rem]

                  min-[361px]:max-[480px]:text-[2.1rem]

                  sm:text-4xl

                  md:text-5xl

                  lg:text-[3.35rem]

                  xl:text-[3.7rem]
                "
              >
                Tax Consultant
              </span>


              {/* Expertise / Space */}

              <span
                className="
                  relative
                  block
                  text-[2.05rem]
                  leading-[1.04]

                  max-[360px]:text-[1.85rem]

                  min-[361px]:max-[480px]:text-[2.1rem]

                  sm:text-4xl

                  md:text-5xl

                  lg:text-[3.35rem]

                  xl:text-[3.7rem]
                "
              >

                <span
                  className="
                    absolute
                    bottom-[-7px]
                    left-0
                    h-[2px]
                    w-20
                    bg-gradient-to-r
                    from-[#f3d995]
                    via-[#c7a45d]
                    to-transparent
                    shadow-[0_0_12px_rgba(216,187,114,0.55)]

                    sm:w-36
                  "
                />

              </span>


              {/* =================================================
                  HIGHLIGHTED TYPING TEXT
              ================================================= */}

              <span
                className="
                  relative
                  mt-4
                  block
                  min-h-[1.15em]

                  sm:mt-5
                "
              >

                {/* Gold Glow */}

                <span
                  className="
                    absolute
                    -left-3
                    top-1/2
                    h-14
                    w-64
                    -translate-y-1/2
                    rounded-full
                    bg-[#c7a45d]/10
                    blur-2xl

                    max-[380px]:w-52

                    sm:w-80
                  "
                />

                {/* Typing Text */}

                <span
                  className="
                    relative
                    z-10
                    bg-gradient-to-r
                    from-[#f5dfa2]
                    via-[#d9ba6d]
                    to-[#b78e43]
                    bg-clip-text
                    text-[1.85rem]
                    font-semibold
                    leading-tight
                    tracking-[-0.025em]
                    text-transparent
                    drop-shadow-[0_2px_12px_rgba(216,187,114,0.2)]

                    max-[360px]:text-[1.65rem]

                    min-[361px]:max-[480px]:text-[1.9rem]

                    sm:text-4xl

                    md:text-[2.8rem]

                    lg:text-[3rem]
                  "
                >

                  {displayText}

                  <span
                    className="
                      ml-1
                      inline-block
                      h-[0.78em]
                      w-[2px]
                      translate-y-1
                      animate-pulse
                      bg-[#e6c979]
                      shadow-[0_0_8px_rgba(230,201,121,0.7)]
                    "
                  />

                </span>


                {/* Accent */}

                <span
                  className="
                    absolute
                    bottom-[-5px]
                    left-0
                    h-[1px]
                    w-16
                    bg-gradient-to-r
                    from-[#d8bb72]/70
                    to-transparent

                    sm:w-28
                  "
                />

              </span>

            </h1>


            {/* =================================================
                DESCRIPTION
            ================================================= */}

            <p
              className="
                mt-5
                max-w-xl
                text-[13px]
                leading-6
                text-white/65

                max-[380px]:text-[12px]
                max-[380px]:leading-5

                sm:mt-6
                sm:text-[15px]
              "
            >
              Strategic financial solutions, taxation, insurance and advisory
              services designed to help individuals and businesses grow with
              clarity, confidence and long-term vision.
            </p>


            {/* =================================================
                BUTTONS
            ================================================= */}

            <div
              className="
                mt-6
                flex
                flex-wrap
                items-center
                gap-3

                max-[480px]:flex-col
                max-[480px]:items-stretch

                sm:mt-7
              "
            >

              {/* Get Started */}

              <Link
                to="/contact"
                className="
                  group
                  relative
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  overflow-hidden
                  rounded-full
                  bg-gradient-to-r
                  from-[#d9bb72]
                  via-[#c7a45d]
                  to-[#a9823d]
                  px-5
                  py-2.5
                  text-sm
                  font-semibold
                  text-[#102b29]
                  shadow-[0_12px_35px_rgba(0,0,0,0.22)]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:shadow-[0_15px_45px_rgba(199,164,93,0.28)]

                  max-[480px]:w-full
                  max-[480px]:py-3

                  max-[380px]:text-[13px]
                "
              >

                <span className="relative z-10">
                  Get Started
                </span>

                <ArrowRight
                  size={16}
                  className="
                    relative
                    z-10
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />

                <span
                  className="
                    absolute
                    inset-y-0
                    left-[-100%]
                    w-[60%]
                    rotate-12
                    bg-white/25
                    blur-sm
                    transition-all
                    duration-700
                    group-hover:left-[130%]
                  "
                />

              </Link>


              {/* Explore Services */}

              <Link
                to="/services"
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  border
                  border-[#d8bb72]/25
                  bg-white/[0.035]
                  px-5
                  py-2.5
                  text-sm
                  font-medium
                  text-white
                  shadow-[0_8px_25px_rgba(0,0,0,0.12)]
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:border-[#d8bb72]/50
                  hover:bg-white/[0.07]

                  max-[480px]:w-full
                  max-[480px]:py-3

                  max-[380px]:text-[13px]
                "
              >

                <span
                  className="
                    flex
                    h-5
                    w-5
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#d8bb72]/50
                  "
                >
                  <Play
                    size={9}
                    fill="currentColor"
                    className="
                      ml-[1px]
                      text-[#d8bb72]
                    "
                  />
                </span>

                Explore Services

              </Link>

            </div>


            {/* =================================================
                TRUST INDICATORS
            ================================================= */}

            <div
              className="
                mt-7
                flex
                flex-wrap
                items-center
                gap-x-5
                gap-y-3

                max-[480px]:gap-x-4
                max-[480px]:gap-y-4

                sm:mt-8
              "
            >

              {/* TRUSTED */}

              <div className="flex items-center gap-2">

                <ShieldCheck
                  size={17}
                  strokeWidth={1.5}
                  className="text-[#d8bb72]"
                />

                <div>
                  <p
                    className="
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.12em]
                      text-white/70
                    "
                  >
                    Trusted
                  </p>

                  <p className="text-[9px] text-white/40">
                    Professional Advisory
                  </p>
                </div>

              </div>


              <div
                className="
                  hidden
                  h-7
                  w-px
                  bg-white/10

                  sm:block
                "
              />


              {/* GROWTH */}

              <div className="flex items-center gap-2">

                <TrendingUp
                  size={17}
                  strokeWidth={1.5}
                  className="text-[#d8bb72]"
                />

                <div>
                  <p
                    className="
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.12em]
                      text-white/70
                    "
                  >
                    Growth
                  </p>

                  <p className="text-[9px] text-white/40">
                    Built For The Future
                  </p>
                </div>

              </div>


              <div
                className="
                  hidden
                  h-7
                  w-px
                  bg-white/10

                  sm:block
                "
              />


              {/* EXCELLENCE */}

              <div className="flex items-center gap-2">

                <BadgeCheck
                  size={17}
                  strokeWidth={1.5}
                  className="text-[#d8bb72]"
                />

                <div>
                  <p
                    className="
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.12em]
                      text-white/70
                    "
                  >
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
              RIGHT SIDE — RESPONSIVE GOLD CIRCLE
          ================================================= */}

          <div
            className="
              relative
              flex
              items-center
              justify-center

              lg:justify-end
            "
          >

            <div
              className="
                relative
                flex
                h-[285px]
                w-[285px]
                items-center
                justify-center

                min-[361px]:h-[315px]
                min-[361px]:w-[315px]

                sm:h-[390px]
                sm:w-[390px]

                md:h-[430px]
                md:w-[430px]

                lg:mr-0
                lg:h-[470px]
                lg:w-[470px]

                xl:h-[470px]
                xl:w-[470px]
              "
            >

              {/* Outer Ring */}

              <div
                className="
                  absolute
                  inset-0
                  rounded-full
                  border
                  border-[#d8bb72]/20
                "
              />

              {/* Second Ring */}

              <div
                className="
                  absolute
                  inset-[8px]
                  rounded-full
                  border
                  border-[#d8bb72]/12

                  sm:inset-[10px]
                "
              />

              {/* Dashed Ring */}

              <div
                className="
                  absolute
                  inset-[18px]
                  rounded-full
                  border
                  border-dashed
                  border-[#d8bb72]/15

                  sm:inset-[23px]
                "
              />

              {/* Glow */}

              <div
                className="
                  absolute
                  inset-[22px]
                  rounded-full
                  bg-[#d8bb72]/10
                  blur-3xl

                  sm:inset-[28px]
                "
              />


              {/* =================================================
                  MAIN GOLD CIRCLE
              ================================================= */}

              <div
                className="
                  relative
                  flex
                  h-[245px]
                  w-[245px]
                  items-center
                  justify-center
                  rounded-full
                  bg-gradient-to-br
                  from-[#f2d993]
                  via-[#d1ae61]
                  to-[#8a682d]
                  p-[1px]
                  shadow-[0_25px_70px_rgba(0,0,0,0.55),0_0_35px_rgba(200,165,90,0.12)]

                  min-[361px]:h-[270px]
                  min-[361px]:w-[270px]

                  sm:h-[325px]
                  sm:w-[325px]

                  md:h-[355px]
                  md:w-[355px]

                  lg:h-[385px]
                  lg:w-[385px]
                "
              >

                {/* Metallic Highlight */}

                <div
                  className="
                    absolute
                    inset-0
                    rounded-full
                    bg-gradient-to-br
                    from-white/35
                    via-transparent
                    to-black/20
                  "
                />

                {/* Dark Interior */}

                <div
                  className="
                    absolute
                    inset-[2px]
                    rounded-full
                    bg-[radial-gradient(circle_at_35%_25%,#173b36_0%,#0d2926_42%,#071c1a_100%)]
                  "
                />

                {/* Inner Gold Border */}

                <div
                  className="
                    absolute
                    inset-[10px]
                    rounded-full
                    border
                    border-[#d8bb72]/30

                    sm:inset-[13px]
                  "
                />

                {/* Gloss Reflection */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    left-[14%]
                    top-[7%]
                    h-[34%]
                    w-[72%]
                    rotate-[-25deg]
                    rounded-full
                    bg-gradient-to-r
                    from-transparent
                    via-white/[0.12]
                    to-transparent
                    blur-lg
                  "
                />

                {/* Top Highlight */}

                <div
                  className="
                    absolute
                    left-[28%]
                    top-[13px]
                    h-px
                    w-[44%]
                    bg-gradient-to-r
                    from-transparent
                    via-white/35
                    to-transparent
                    blur-[1px]

                    sm:top-[17px]
                  "
                />

                {/* Bottom Reflection */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    bottom-[10%]
                    left-[25%]
                    h-[18%]
                    w-[50%]
                    rounded-full
                    bg-[#c7a45d]/10
                    blur-2xl
                  "
                />


                {/* =================================================
                    CENTER CONTENT
                ================================================= */}

                <div
                  className="
                    relative
                    z-10
                    flex
                    flex-col
                    items-center
                    text-center
                  "
                >

                  {/* CA Logo */}

                  <div
                    className="
                      mb-2
                      flex
                      h-[45px]
                      w-[45px]
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#d8bb72]/60
                      bg-white
                      p-1.5
                      shadow-[0_8px_30px_rgba(0,0,0,0.3)]

                      min-[361px]:h-[50px]
                      min-[361px]:w-[50px]

                      sm:mb-3
                      sm:h-[62px]
                      sm:w-[62px]
                    "
                  >
                    <img
                      src={caLogo}
                      alt="Chartered Accountant"
                      className="h-full w-full object-contain"
                    />
                  </div>


                  {/* 8+ */}

                  <div className="flex items-baseline">

                    <span
                      className="
                        bg-gradient-to-b
                        from-[#f3dc9d]
                        via-[#d8bb72]
                        to-[#a37b35]
                        bg-clip-text
                        text-[3.6rem]
                        font-bold
                        leading-none
                        tracking-[-0.08em]
                        text-transparent

                        min-[361px]:text-[4rem]

                        sm:text-[5rem]
                      "
                    >
                      8+
                    </span>

                  </div>


                  <span
                    className="
                      mt-1
                      text-[7px]
                      font-semibold
                      uppercase
                      tracking-[0.25em]
                      text-white/45

                      sm:text-[9px]
                      sm:tracking-[0.32em]
                    "
                  >
                    Years of Services
                  </span>


                  {/* Divider */}

                  <div
                    className="
                      my-3
                      flex
                      items-center
                      gap-2

                      sm:my-4
                    "
                  >

                    <span
                      className="
                        h-px
                        w-7
                        bg-gradient-to-r
                        from-transparent
                        to-[#d8bb72]/70

                        sm:w-11
                      "
                    />

                    <span
                      className="
                        h-1
                        w-1
                        rounded-full
                        bg-[#d8bb72]
                        shadow-[0_0_8px_rgba(216,187,114,0.7)]
                      "
                    />

                    <span
                      className="
                        h-px
                        w-7
                        bg-gradient-to-l
                        from-transparent
                        to-[#d8bb72]/70

                        sm:w-11
                      "
                    />

                  </div>


                  {/* Calligraphy Name */}

                  <h2
                    className="
                      text-[1.25rem]
                      leading-none
                      text-[#e1c77f]

                      min-[361px]:text-[1.45rem]

                      sm:text-[2.3rem]
                    "
                    style={{
                      fontFamily:
                        '"Lucida Handwriting", "Brush Script MT", "Segoe Script", cursive',
                      fontWeight: 400,
                    }}
                  >
                    Md. Khursheed Alam
                  </h2>


                  <p
                    className="
                      mt-2
                      text-[6px]
                      font-semibold
                      uppercase
                      tracking-[0.28em]
                      text-white/55

                      sm:mt-2.5
                      sm:text-[8px]
                      sm:tracking-[0.32em]
                    "
                  >
                    Chartered Accountant
                  </p>


                  {/* Stars */}

                  <div
                    className="
                      mt-2
                      flex
                      items-center
                      gap-1

                      sm:mt-3
                    "
                  >
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span
                        key={star}
                        className="
                          text-[8px]
                          text-[#d8bb72]
                          drop-shadow-[0_0_5px_rgba(216,187,114,0.45)]

                          sm:text-[11px]
                        "
                      >
                        ★
                      </span>
                    ))}
                  </div>

                </div>

              </div>


              {/* =================================================
                  FEATURE CARD 1
                  Hidden on very small devices
              ================================================= */}

              <div
                className="
                  absolute
                  left-[-12px]
                  top-[52%]
                  hidden
                  rounded-2xl
                  border
                  border-[#d8bb72]/20
                  bg-[#102b29]/85
                  px-3.5
                  py-2.5
                  shadow-[0_20px_50px_rgba(0,0,0,0.32)]
                  backdrop-blur-xl

                  sm:block
                "
              >

                <div
                  className="
                    absolute
                    inset-x-4
                    top-0
                    h-px
                    bg-gradient-to-r
                    from-transparent
                    via-[#d8bb72]/60
                    to-transparent
                  "
                />

                <div className="flex items-center gap-2.5">

                  <div
                    className="
                      flex
                      h-7
                      w-7
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#d8bb72]/20
                      bg-[#d8bb72]/10
                    "
                  >
                    <TrendingUp
                      size={14}
                      className="text-[#d8bb72]"
                    />
                  </div>

                  <div>
                    <p
                      className="
                        text-[8px]
                        font-semibold
                        uppercase
                        tracking-[0.16em]
                        text-[#d8bb72]
                      "
                    >
                      Expertise
                    </p>

                    <p className="mt-0.5 text-[9px] text-white/55">
                      Financial Advisory
                    </p>
                  </div>

                </div>

              </div>


              {/* =================================================
                  FEATURE CARD 2
              ================================================= */}

              <div
                className="
                  absolute
                  bottom-[-8%]
                  right-[-10px]
                  hidden
                  rounded-2xl
                  border
                  border-[#d8bb72]/20
                  bg-[#102b29]/85
                  px-3.5
                  py-2.5
                  shadow-[0_20px_50px_rgba(0,0,0,0.32)]
                  backdrop-blur-xl

                  sm:block
                "
              >

                <div
                  className="
                    absolute
                    inset-x-4
                    top-0
                    h-px
                    bg-gradient-to-r
                    from-transparent
                    via-[#d8bb72]/60
                    to-transparent
                  "
                />

                <div className="flex items-center gap-2.5">

                  <div
                    className="
                      flex
                      h-7
                      w-7
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#d8bb72]/20
                      bg-[#d8bb72]/10
                    "
                  >
                    <BadgeCheck
                      size={14}
                      className="text-[#d8bb72]"
                    />
                  </div>

                  <div>
                    <p
                      className="
                        text-[8px]
                        font-semibold
                        uppercase
                        tracking-[0.14em]
                        text-white/75
                      "
                    >
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

              <span
                className="
                  absolute
                  right-[4%]
                  top-[16%]
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-[#d8bb72]/70
                  shadow-[0_0_10px_rgba(216,187,114,0.5)]
                "
              />

              <span
                className="
                  absolute
                  bottom-[5%]
                  left-[10%]
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-[#d8bb72]/50
                "
              />

              <span
                className="
                  absolute
                  left-[4%]
                  top-[51%]
                  h-1
                  w-1
                  rounded-full
                  bg-white/30
                "
              />

            </div>

          </div>

        </div>

      </div>


      {/* =====================================================
          SCROLL INDICATOR
      ===================================================== */}

      <div
        className="
          absolute
          bottom-5
          left-1/2
          hidden
          -translate-x-1/2
          flex-col
          items-center
          gap-2

          md:flex
        "
      >

        <span
          className="
            text-[8px]
            uppercase
            tracking-[0.35em]
            text-white/30
          "
        >
          Scroll
        </span>

        <div
          className="
            h-8
            w-px
            bg-gradient-to-b
            from-[#d8bb72]/70
            to-transparent
          "
        />

      </div>

    </section>
  );
};

export default Hero;