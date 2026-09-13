import React, { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";

import Aftab from "../../assets/review/Aftab.png";
import Arshad from "../../assets/review/Arshad.png";
import Ashif from "../../assets/review/Ashif.png";
import Istekhar from "../../assets/review/Istekhar.png";
import Sahil from "../../assets/review/Sahil.png";

/* =========================================================
   GOOGLE SVG ICON
========================================================= */

const GoogleIcon = ({ size = 30 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      fill="#FFC107"
      d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.7 1.1 7.8 2.9l5.7-5.7C33.9 5.9 29.2 4 24 4 13 4 4 13 4 24s9 20 20 20 20-9 20-20c0-1.2-.1-2.4-.4-3.5z"
    />
    <path
      fill="#FF3D00"
      d="M6.3 14.7l6.6 4.8C14.7 15.1 18.9 12 24 12c3 0 5.7 1.1 7.8 2.9l5.7-5.7C33.9 5.9 29.2 4 24 4c-7.7 0-14.4 4.4-17.7 10.7z"
    />
    <path
      fill="#4CAF50"
      d="M24 44c5.1 0 9.8-2 13.3-5.2l-6.1-5.2C29.2 35.1 26.7 36 24 36c-5.3 0-9.7-3.3-11.4-8l-6.5 5C9.3 39.5 16.1 44 24 44z"
    />
    <path
      fill="#1976D2"
      d="M43.6 20.5H42V20H24v8h11.3c-1.1 3-3.2 5.3-6.1 6.6l6.1 5.2C38.8 36.5 44 31 44 24c0-1.2-.1-2.4-.4-3.5z"
    />
  </svg>
);

/* =========================================================
   TESTIMONIAL IMAGE DATA
========================================================= */

const testimonials = [
  {
    id: 1,
    image: Aftab,
  },
  {
    id: 2,
    image: Arshad,
  },
  {
    id: 3,
    image: Ashif,
  },
  {
    id: 4,
    image: Istekhar,
  },
  {
    id: 5,
    image: Sahil,
  },
];

/* =========================================================
   MAIN COMPONENT
========================================================= */

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const sliderTestimonials = [...testimonials, ...testimonials];

  /* =======================================================
     AUTO SLIDER
  ======================================================== */

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  /* =======================================================
     LOOP RESET
  ======================================================== */

  useEffect(() => {
    if (currentIndex === testimonials.length) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);

        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setIsTransitioning(true);
          });
        });
      }, 750);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);

  /* =======================================================
     NEXT / PREVIOUS
  ======================================================== */

  const nextSlide = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const previousSlide = () => {
    if (currentIndex === 0) {
      setIsTransitioning(false);
      setCurrentIndex(testimonials.length);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true);
          setCurrentIndex(testimonials.length - 1);
        });
      });
    } else {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f3f5f4] py-10 sm:py-12 lg:py-14">
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="
            absolute
            -left-[3%]
            -top-[18%]
            select-none
            font-serif
            text-[650px]
            font-bold
            leading-none
            text-[#193832]/[0.055]
            sm:text-[850px]
            lg:text-[1100px]
          "
        >
          “
        </div>

        <div
          className="
            absolute
            -right-[2%]
            -bottom-[38%]
            select-none
            font-serif
            text-[650px]
            font-bold
            leading-none
            text-[#193832]/[0.055]
            sm:text-[850px]
            lg:text-[1100px]
          "
        >
          ”
        </div>

        <div
          className="
            absolute
            right-0
            top-0
            h-[450px]
            w-[450px]
            rounded-full
            bg-[#2e6257]/[0.035]
            blur-3xl
          "
        />

        <div
          className="
            absolute
            bottom-0
            left-[20%]
            h-[300px]
            w-[300px]
            rounded-full
            bg-[#244b57]/[0.035]
            blur-3xl
          "
        />
      </div>

      {/* =====================================================
          HEADING
      ====================================================== */}

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          {/* LEFT */}

          <div className="max-w-[700px]">
            <div className="mb-3 flex items-center gap-3">
              <span className="h-[1px] w-10 bg-[#5f8c79]" />

              <p
                className="
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[0.28em]
                  text-[#477364]
                  sm:text-xs
                "
              >
                Client Testimonials
              </p>
            </div>

            <h2
              className="
                text-[38px]
                font-semibold
                leading-[1.03]
                tracking-tight
                text-[#243033]
                sm:text-5xl
                lg:text-[58px]
              "
            >
              What Our Clients Say

              <span className="block text-[#376c5d]">
                About Working With Us
              </span>
            </h2>

            <p
              className="
                mt-4
                max-w-[600px]
                text-sm
                leading-6
                text-[#65706f]
                sm:text-[15px]
                sm:leading-7
              "
            >
              Real experiences shared by clients who value professional
              guidance, practical financial solutions, and reliable service.
            </p>
          </div>

          {/* =================================================
              RIGHT RATING + NAVIGATION
          ================================================== */}

          <div className="flex flex-col gap-5 lg:items-end">
            {/* GOOGLE RATING CARD */}

            <div
              className="
                flex
                items-center
                gap-4
                rounded-2xl
                border
                border-[#315e54]/10
                bg-white
                px-5
                py-4
                shadow-[0_10px_30px_rgba(28,54,48,0.06)]
              "
            >
              <div
                className="
                  flex
                  h-12
                  w-12
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-[#f6f8f7]
                "
              >
                <GoogleIcon size={30} />
              </div>

              <div>
                <p
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.18em]
                    text-[#7a8784]
                  "
                >
                  Google Client Rating
                </p>

                <div className="mt-1 flex items-center gap-3">
                  <span className="text-3xl font-bold text-[#243033]">
                    4.9
                  </span>

                  <div>
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          size={16}
                          strokeWidth={1.8}
                          fill="#F5A623"
                          className="text-[#F5A623]"
                        />
                      ))}
                    </div>

                    <p className="mt-1 text-xs text-[#7a8784]">
                      4.9/5 client rating
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* NAVIGATION */}

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={previousSlide}
                aria-label="Previous testimonial"
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#315e54]/15
                  bg-white
                  text-[#315e54]
                  shadow-[0_8px_25px_rgba(28,54,48,0.08)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#315e54]
                  hover:text-white
                "
              >
                <ArrowLeft size={19} strokeWidth={1.8} />
              </button>

              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next testimonial"
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#315e54]/15
                  bg-white
                  text-[#315e54]
                  shadow-[0_8px_25px_rgba(28,54,48,0.08)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#315e54]
                  hover:text-white
                "
              >
                <ArrowRight size={19} strokeWidth={1.8} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          TESTIMONIAL IMAGE SLIDER
      ====================================================== */}

      <div className="relative z-10 mt-10 sm:mt-12 lg:mt-14">
        <div className="ml-[8%] overflow-hidden sm:ml-[12%] lg:ml-[20%]">
          <div
            className={`
              flex
              gap-5
              px-1
              ${
                isTransitioning
                  ? "transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  : ""
              }
            `}
            style={{
              transform: `translateX(calc(-${currentIndex} * (38% + 20px)))`,
            }}
          >
            {sliderTestimonials.map((testimonial, index) => (
              <article
                key={`${testimonial.id}-${index}`}
                className="
                  group
                  relative
                  h-[370px]
                  min-w-[82%]
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-[#d8dfdc]
                  bg-white
                  shadow-[0_15px_45px_rgba(31,57,52,0.08)]
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:shadow-[0_25px_60px_rgba(31,57,52,0.14)]
                  sm:min-w-[58%]
                  lg:h-[400px]
                  lg:min-w-[38%]
                "
              >
                {/* IMAGE ONLY — NO CROPPING */}
                <img
                  src={testimonial.image}
                  alt={`Client testimonial ${testimonial.id}`}
                  className="
                    block
                    h-full
                    w-full
                    object-contain
                    object-center
                  "
                />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
