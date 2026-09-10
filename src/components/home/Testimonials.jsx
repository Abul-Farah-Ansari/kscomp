import React, { useEffect, useState } from "react";
import {
  Quote,
  X,
  ArrowLeft,
  ArrowRight,
  Star,
} from "lucide-react";

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
   TESTIMONIAL DATA
========================================================= */

const testimonials = [
  {
    id: 1,
    name: "Md Sahil",
    review:
      "K S Company accounting services ke saath-saath GST return filing aur IT return filing mein bhi expertise rakhti hai. Inki team professionals se bani hai jo compliance aur accuracy ensure karte hain. Financial transparency aur customer service bhi achchi hai.",
  },

  {
    id: 2,
    name: "Md. Arshad",
    review:
      "KS& Company... Bahot hi helpful hai logo ke liye, yaha apko tax related har problem ka solution easily mil jata hai. Khursheed bhai bahot experienced person hain aur apni field mein unka nature bhi bahot humble hai.",
  },

  {
    id: 3,
    name: "Ashif Raza",
    review:
      "Best place for Tax consulting and insurance related work in Bata House and nearby Okhla and Shaheenbagh.",
  },

  {
    id: 4,
    name: "MOHAMMAD AFTAB",
    review:
      "Best service provider for taxation.",
  },

  {
    id: 5,
    name: "Ishtar jahan Rashid khan",
    review:
      "They are providing good service.",
  },
];


/* =========================================================
   MAIN COMPONENT
========================================================= */

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);
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
          TESTIMONIAL SLIDER
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
                onClick={() => setSelectedTestimonial(testimonial)}
                className="
                  group
                  relative
                  h-[370px]
                  min-w-[82%]
                  cursor-pointer
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-white/[0.08]
                  bg-[#18383a]
                  p-7
                  shadow-[0_15px_45px_rgba(31,57,52,0.08)]
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:shadow-[0_25px_60px_rgba(31,57,52,0.14)]
                  sm:min-w-[58%]
                  lg:h-[400px]
                  lg:min-w-[38%]
                  lg:p-8
                "
              >

                {/* =================================================
                    DECORATIVE CIRCLE
                ================================================== */}

                <div
                  className="
                    absolute
                    -right-12
                    -top-14
                    h-52
                    w-52
                    rounded-full
                    border-[28px]
                    border-[#4d8272]/[0.07]
                    transition-transform
                    duration-700
                    group-hover:scale-110
                    group-hover:rotate-12
                  "
                />


                {/* =================================================
                    GOOGLE ICON
                ================================================== */}

                <div
                  className="
                    absolute
                    right-7
                    top-7
                    z-30
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    bg-white
                    shadow-[0_8px_25px_rgba(0,0,0,0.16)]
                    transition-all
                    duration-300
                    group-hover:scale-110
                    group-hover:shadow-[0_12px_30px_rgba(0,0,0,0.22)]
                  "
                >
                  <GoogleIcon size={30} />
                </div>


                {/* =================================================
                    QUOTE
                ================================================== */}

                <Quote
                  size={54}
                  strokeWidth={1.25}
                  className="relative z-10 text-[#4d8272]"
                  fill="currentColor"
                />


                {/* =================================================
                    REVIEW
                ================================================== */}

                <p
                  className="
                    relative
                    z-10
                    mt-5
                    max-w-[90%]
                    text-[14px]
                    leading-7
                    text-white/75
                    lg:text-[15px]
                  "
                >
                  "{testimonial.review}"
                </p>


                {/* =================================================
                    BOTTOM
                ================================================== */}

                <div className="absolute bottom-0 left-0 right-0">

                  <div className="relative z-10 p-7 lg:p-8">

                    {/* STARS */}

                    <div className="mb-3 flex gap-1">

                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          size={14}
                          fill="#F5A623"
                          className="text-[#F5A623]"
                        />
                      ))}

                    </div>


                    {/* NAME */}

                    <h3
                      className="
                        text-xl
                        font-semibold
                        tracking-tight
                        text-white
                      "
                    >
                      {testimonial.name}
                    </h3>


                    <p className="mt-1 text-xs text-white/50">
                      Verified Client Review
                    </p>

                  </div>

                </div>


                {/* =================================================
                    READ REVIEW
                ================================================== */}

                <div
                  className="
                    absolute
                    right-6
                    top-[82px]
                    z-20
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.16em]
                    text-[#8bb39e]
                    opacity-0
                    transition-all
                    duration-300
                    group-hover:opacity-100
                  "
                >
                  Read Review
                </div>

              </article>

            ))}

          </div>

        </div>

      </div>


      {/* =====================================================
          REVIEW MODAL
      ====================================================== */}

      {selectedTestimonial && (

        <div
          className="
            fixed
            inset-0
            z-[999]
            flex
            items-center
            justify-center
            bg-[#172421]/60
            px-4
            py-6
            backdrop-blur-md
          "
          onClick={() => setSelectedTestimonial(null)}
        >

          <div
            className="
              relative
              w-full
              max-w-2xl
              overflow-hidden
              rounded-[30px]
              bg-[#f8faf9]
              shadow-[0_30px_100px_rgba(0,0,0,0.35)]
              animate-[modalEnter_0.35s_ease-out]
            "
            onClick={(event) => event.stopPropagation()}
          >

            {/* MODAL HEADER */}

            <div
              className="
                relative
                bg-gradient-to-br
                from-[#254d45]
                to-[#193832]
                px-8
                py-10
                text-white
                sm:px-12
              "
            >

              <div
                className="
                  absolute
                  -right-16
                  -top-16
                  h-52
                  w-52
                  rounded-full
                  border-[30px]
                  border-white/[0.06]
                "
              />


              {/* CLOSE BUTTON */}

              <button
                type="button"
                onClick={() => setSelectedTestimonial(null)}
                aria-label="Close review"
                className="
                  absolute
                  right-5
                  top-5
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  bg-white/10
                  text-white
                  transition-all
                  duration-300
                  hover:bg-white
                  hover:text-[#254d45]
                "
              >
                <X size={19} />
              </button>


              {/* REVIEWER */}

              <div className="relative z-10">

                <p
                  className="
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.22em]
                    text-[#b7d4c6]
                  "
                >
                  Client Review
                </p>


                <h3
                  className="
                    mt-2
                    text-2xl
                    font-semibold
                    sm:text-3xl
                  "
                >
                  {selectedTestimonial.name}
                </h3>

              </div>


              {/* STARS */}

              <div className="relative z-10 mt-6 flex gap-1">

                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={18}
                    fill="#F5A623"
                    className="text-[#F5A623]"
                  />
                ))}

              </div>

            </div>


            {/* MODAL CONTENT */}

            <div className="p-8 sm:p-12">

              <Quote
                size={40}
                fill="currentColor"
                className="text-[#4d8272]/20"
              />


              <p
                className="
                  mt-4
                  text-lg
                  leading-8
                  text-[#53605e]
                  sm:text-xl
                "
              >
                "{selectedTestimonial.review}"
              </p>


              <div className="mt-8 h-[1px] w-full bg-[#315e54]/10" />


              <div className="mt-5 flex items-center justify-between">

                <p
                  className="
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.2em]
                    text-[#4d8272]
                  "
                >
                  Trusted Client Experience
                </p>


                <div
                  className="
                    flex
                    items-center
                    gap-1
                    text-sm
                    font-semibold
                    text-[#315e54]
                  "
                >

                  <Star
                    size={15}
                    fill="#F5A623"
                    className="text-[#F5A623]"
                  />

                  5.0

                </div>

              </div>

            </div>

          </div>

        </div>

      )}


      {/* =====================================================
          ANIMATION
      ====================================================== */}

      <style>{`
        @keyframes modalEnter {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.97);
          }

          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>

    </section>
  );
};

export default Testimonials;