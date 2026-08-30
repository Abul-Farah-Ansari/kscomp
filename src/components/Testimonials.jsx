import React, { useEffect, useState } from "react";
import { Quote, X, ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Managing Director",
    company: "Business Solutions Pvt. Ltd.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
    shortText:
      "Professional guidance, clear communication, and excellent financial support throughout our journey.",
    fullText:
      "The team provided professional financial guidance and practical solutions that helped us make better business decisions. Their communication was clear, timely, and transparent throughout the entire process.",
  },
  {
    id: 2,
    name: "Amit Verma",
    role: "Founder & CEO",
    company: "Verma Enterprises",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
    shortText:
      "Their expertise helped us improve our financial planning and confidently focus on business growth.",
    fullText:
      "Their professional approach and financial expertise helped us improve planning, understand our financial position, and focus confidently on long-term business growth.",
  },
  {
    id: 3,
    name: "Priya Mehta",
    role: "Director",
    company: "Mehta Industries",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    shortText:
      "Reliable advisory support with a practical understanding of business and financial requirements.",
    fullText:
      "We were looking for a team that could understand our business instead of simply providing generic advice. Their practical approach, responsiveness, and professional support made a significant difference.",
  },
  {
    id: 4,
    name: "Vikram Singh",
    role: "Business Owner",
    company: "Singh Trading Co.",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
    shortText:
      "A dependable professional team that understands business challenges and provides practical solutions.",
    fullText:
      "Working with this team has been a positive experience. They understand business challenges, provide practical recommendations, and maintain a consistently professional approach.",
  },
  {
    id: 5,
    name: "Neha Kapoor",
    role: "Managing Partner",
    company: "Kapoor Ventures",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80",
    shortText:
      "Their attention to detail and commitment to quality gave us confidence in every financial decision.",
    fullText:
      "Their attention to detail and commitment to quality gave us confidence in important financial decisions. The team is approachable, knowledgeable, and genuinely focused on client requirements.",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Duplicate testimonials for smooth continuous movement
  const sliderTestimonials = [...testimonials, ...testimonials];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

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
    <section className="relative min-h-screen overflow-hidden bg-[#f3f5f4] py-8 sm:py-10 lg:py-12">
      {/* Background details */}

      <div className="absolute inset-0 pointer-events-none overflow-hidden">

  {/* Huge background quotation marks */}

  <div
    className="
      absolute
      -left-[3%]
      -top-[18%]
      font-serif
      text-[650px]
      font-bold
      leading-none
      text-[#193832]/[0.055]
      select-none
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
      font-serif
      text-[650px]
      font-bold
      leading-none
      text-[#193832]/[0.055]
      select-none
      sm:text-[850px]
      lg:text-[1100px]
    "
  >
    ”
  </div>

  {/* Existing soft background details */}

  <div className="absolute top-0 right-0 h-[450px] w-[450px] rounded-full bg-[#2e6257]/[0.035] blur-3xl" />

  <div className="absolute bottom-0 left-[20%] h-[300px] w-[300px] rounded-full bg-[#244b57]/[0.035] blur-3xl" />

</div>

      {/* Heading */}

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-[650px]">
            <div className="mb-3 flex items-center gap-3">
              <span className="h-[1px] w-10 bg-[#5f8c79]" />

              <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#477364] sm:text-xs">
                Client Testimonials
              </p>
            </div>

            <h2 className="text-[38px] font-semibold leading-[1.03] tracking-tight text-[#243033] sm:text-5xl lg:text-[58px]">
              What Our Clients Say
              <span className="block text-[#376c5d]">
                About Working With Us
              </span>
            </h2>

            <p className="mt-4 max-w-[600px] text-sm leading-6 text-[#65706f] sm:text-[15px] sm:leading-7">
              Trusted by businesses that value professional guidance,
              practical financial solutions, and long-term relationships.
            </p>
          </div>

          {/* Navigation */}

          <div className="flex items-center gap-3 lg:mb-1">
            <button
              type="button"
              onClick={previousSlide}
              aria-label="Previous testimonial"
              className="
                group
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
              <ArrowLeft
                size={19}
                strokeWidth={1.8}
              />
            </button>

            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next testimonial"
              className="
                group
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
              <ArrowRight
                size={19}
                strokeWidth={1.8}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Testimonials */}

      <div className="relative z-10 mt-8 sm:mt-10 lg:mt-12">
        {/* 
          IMPORTANT:
          Left blank area remains permanently visible.
          Slider begins after approximately 20% screen width.
        */}

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
                {/* Decorative background */}

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

                {/* Quote */}

                <Quote
                  size={54}
                  strokeWidth={1.25}
                  className="relative z-10 text-[#4d8272]"
                  fill="currentColor"
                />

                {/* Text */}

                <p className="relative z-10 mt-5 max-w-[80%] text-[15px] leading-7 text-white/70 lg:text-[16px]">
                  "{testimonial.shortText}"
                </p>

                {/* Bottom content */}

                <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between">
                  <div className="relative z-10 p-7 lg:p-8">
                    <h3 className="text-xl font-semibold tracking-tight text-white">
                      {testimonial.name}
                    </h3>

                    <p className="mt-1 text-sm text-white/55">
                      {testimonial.role}
                    </p>

                    <p className="mt-1 text-xs font-medium uppercase tracking-[0.12em] text-[#4d8272]">
                      {testimonial.company}
                    </p>
                  </div>

                  {/* Client Image */}

                  <div
                    className="
                      relative
                      h-[170px]
                      w-[145px]
                      overflow-hidden
                      rounded-tl-[100px]
                      transition-all
                      duration-500

                      group-hover:h-[185px]
                      group-hover:w-[155px]

                      sm:h-[190px]
                      sm:w-[165px]

                      lg:h-[205px]
                      lg:w-[180px]
                    "
                  >
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-110
                      "
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#18332d]/20 to-transparent" />
                  </div>
                </div>

                {/* Click indicator */}

                <div
                  className="
                    absolute
                    right-6
                    bottom-5
                    z-20
                    translate-y-3
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.16em]
                    text-[#477364]
                    opacity-0
                    transition-all
                    duration-300
                    group-hover:translate-y-0
                    group-hover:opacity-100
                  "
                >
                  Read Full Story
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}

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
              max-w-3xl
              overflow-hidden
              rounded-[30px]
              bg-[#f8faf9]
              shadow-[0_30px_100px_rgba(0,0,0,0.35)]
              animate-[modalEnter_0.35s_ease-out]
            "
            onClick={(event) => event.stopPropagation()}
          >
            {/* Modal top */}

            <div className="relative bg-gradient-to-br from-[#254d45] to-[#193832] px-8 py-10 text-white sm:px-12">
              <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full border-[30px] border-white/[0.06]" />

              <button
                type="button"
                onClick={() => setSelectedTestimonial(null)}
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

              <Quote
                size={48}
                strokeWidth={1.3}
                fill="currentColor"
                className="relative z-10 text-[#9dc7b3]"
              />

              <p className="relative z-10 mt-5 text-sm font-semibold uppercase tracking-[0.22em] text-[#b7d4c6]">
                Client Experience
              </p>

              <h3 className="relative z-10 mt-2 text-3xl font-semibold">
                {selectedTestimonial.name}
              </h3>

              <p className="relative z-10 mt-1 text-white/65">
                {selectedTestimonial.role} · {selectedTestimonial.company}
              </p>
            </div>

            {/* Modal content */}

            <div className="grid md:grid-cols-[1fr_190px]">
              <div className="p-8 sm:p-12">
                <p className="text-lg leading-8 text-[#53605e]">
                  "{selectedTestimonial.fullText}"
                </p>

                <div className="mt-8 h-[1px] w-full bg-[#315e54]/10" />

                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#4d8272]">
                  Trusted Client Relationship
                </p>
              </div>

              <div className="hidden overflow-hidden md:block">
                <img
                  src={selectedTestimonial.image}
                  alt={selectedTestimonial.name}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      )}

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