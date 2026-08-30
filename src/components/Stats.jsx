import React, { useEffect, useRef, useState } from "react";
import {
  Users,
  TrendingUp,
  Target,
  Handshake,
} from "lucide-react";

const stats = [
  {
    number: 300,
    suffix: "+",
    label: "Clients Served",
    icon: Users,
    size: "large",
  },
  {
    number: 8,
    suffix: "+",
    label: "Years Experience",
    icon: TrendingUp,
    size: "small",
  },
  {
    number: 98,
    suffix: "%",
    label: "Work Accuracy",
    icon: Target,
    size: "small",
  },
  {
    number: 93,
    suffix: "%",
    label: "Client Retention",
    icon: Handshake,
    size: "large",
  },
];

/* ================= COUNTER ================= */

const Counter = ({ end, suffix }) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      {
        threshold: 0.4,
      }
    );

    const currentElement = counterRef.current;

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [started]);

  useEffect(() => {
    if (!started) return;

    let startTime;

    const duration = 1600;

    const animate = (time) => {
      if (!startTime) {
        startTime = time;
      }

      const progress = Math.min(
        (time - startTime) / duration,
        1
      );

      const easeOut =
        1 - Math.pow(1 - progress, 4);

      setCount(
        Math.floor(easeOut * end)
      );

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [started, end]);

  return (
    <span ref={counterRef}>
      {count}
      {suffix}
    </span>
  );
};


/* ================= STATS SECTION ================= */

const Stats = () => {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#f4f6f5]

        py-16
        sm:py-20
        lg:py-20
      "
    >

      {/* ================= BACKGROUND GLOW ================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* LEFT GLOW */}

        <div
          className="
            absolute
            left-[8%]
            top-[20%]

            h-[250px]
            w-[250px]

            rounded-full

            bg-[#4c856e]/20

            blur-[100px]

            animate-[statsGlowOne_7s_ease-in-out_infinite]
          "
        />

        {/* RIGHT GLOW */}

        <div
          className="
            absolute
            right-[5%]
            bottom-[5%]

            h-[280px]
            w-[280px]

            rounded-full

            bg-[#285b68]/15

            blur-[110px]

            animate-[statsGlowTwo_9s_ease-in-out_infinite]
          "
        />

        {/* CENTER GLOW */}

        <div
          className="
            absolute
            left-1/2
            top-1/2

            h-[250px]
            w-[250px]

            -translate-x-1/2
            -translate-y-1/2

            rounded-full

            bg-[#8eae76]/10

            blur-[100px]

            animate-[statsGlowThree_6s_ease-in-out_infinite]
          "
        />

        {/* DECORATIVE LEFT CIRCLE */}

        <div
          className="
            absolute
            -left-20
            top-1/2

            h-[300px]
            w-[300px]

            -translate-y-1/2

            rounded-full

            border
            border-[#326844]/10
          "
        />

        {/* DECORATIVE RIGHT CIRCLE */}

        <div
          className="
            absolute
            -right-24
            -top-24

            h-[380px]
            w-[380px]

            rounded-full

            border
            border-[#244b57]/10
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
          max-w-[1350px]

          px-5
          sm:px-8
          lg:px-10
        "
      >

        {/* ================= HEADER ================= */}

        <div className="mb-10 text-center sm:mb-12">

          {/* SMALL LABEL */}

          <div className="mb-4 flex justify-center">

            <div className="flex items-center gap-3">

              <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#6fa18a]" />

              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.3em]

                  text-[#4d7969]
                "
              >
                Our Journey
              </span>

              <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#6fa18a]" />

            </div>

          </div>


          {/* ================= PREMIUM GLOW HEADING ================= */}

          <div
            className="
              relative
              mx-auto
              max-w-[850px]
            "
          >

            {/* HEADING BACKGROUND GLOW */}

            <div
              className="
                absolute
                left-1/2
                top-1/2

                h-[120px]
                w-[420px]

                -translate-x-1/2
                -translate-y-1/2

                rounded-full

                bg-[#4c856e]/10

                blur-[55px]

                animate-[headingGlow_4s_ease-in-out_infinite]
              "
            />

            {/* HEADING */}

            <h2
              className="
                relative
                z-10

                text-4xl
                font-semibold
                leading-[1.1]
                tracking-tight

                text-[#263231]

                sm:text-5xl
                lg:text-[52px]
              "
            >
              Numbers That Define

              <span
                className="
                  relative
                  block
                  mt-1

                  bg-gradient-to-r
                  from-[#285b68]
                  via-[#4d8b70]
                  to-[#326844]

                  bg-clip-text
                  text-transparent

                  animate-[textGlow_5s_ease-in-out_infinite]
                "
              >
                Our Professional Journey
              </span>

            </h2>

          </div>


          {/* DESCRIPTION */}

          <p
            className="
              relative
              z-10

              mx-auto
              mt-5
              max-w-[570px]

              text-sm
              leading-7

              text-[#687371]

              sm:text-[15px]
            "
          >
            A journey built through experience, trusted relationships,
            professional expertise, and measurable results.
          </p>

        </div>


        {/* ================= STATS CIRCLES ================= */}

        <div
          className="
            mx-auto

            grid
            max-w-[900px]

            grid-cols-2
            items-center
            justify-items-center

            gap-x-3
            gap-y-6

            sm:gap-x-10
            sm:gap-y-8

            lg:grid-cols-4
            lg:gap-0
          "
        >

          {stats.map((stat, index) => {
            const Icon = stat.icon;

            const desktopPosition = [
              "lg:translate-y-5",
              "lg:-translate-y-5",
              "lg:translate-y-7",
              "lg:-translate-y-3",
            ];

            return (
              <div
                key={stat.label}
                className={`
                  relative

                  flex
                  shrink-0
                  flex-col
                  items-center
                  justify-center

                  rounded-full

                  border
                  border-[#315e54]/15

                  bg-white/65

                  text-center

                  shadow-[0_12px_40px_rgba(30,65,58,0.09)]

                  backdrop-blur-md

                  ${
                    stat.size === "large"
                      ? `
                        h-[190px]
                        w-[190px]

                        sm:h-[215px]
                        sm:w-[215px]

                        lg:h-[205px]
                        lg:w-[205px]
                      `
                      : `
                        h-[165px]
                        w-[165px]

                        sm:h-[190px]
                        sm:w-[190px]

                        lg:h-[180px]
                        lg:w-[180px]
                      `
                  }

                  ${desktopPosition[index]}
                `}
              >

                {/* ================= OUTER PULSING RING ================= */}

                <div
                  className="
                    absolute
                    inset-[-8px]

                    rounded-full

                    border
                    border-[#5d987c]/20

                    animate-[ringPulse_3.5s_ease-in-out_infinite]
                  "
                />


                {/* ================= INNER RING ================= */}

                <div
                  className="
                    absolute
                    inset-[9px]

                    rounded-full

                    border
                    border-[#315e54]/10
                  "
                />


                {/* ================= INNER GLOW ================= */}

                <div
                  className="
                    absolute

                    h-[65%]
                    w-[65%]

                    rounded-full

                    bg-[#7fa98a]/10

                    blur-2xl

                    animate-[innerPulse_4s_ease-in-out_infinite]
                  "
                />


                {/* ================= CONTENT ================= */}

                <div className="relative z-10">

                  {/* ICON */}

                  <div
                    className="
                      mx-auto

                      flex
                      h-10
                      w-10

                      items-center
                      justify-center

                      rounded-full

                      bg-[#e6f0e9]

                      text-[#417563]

                      shadow-[0_5px_15px_rgba(50,104,68,0.08)]
                    "
                  >
                    <Icon
                      size={20}
                      strokeWidth={1.6}
                    />
                  </div>


                  {/* NUMBER */}

                  <div
                    className="
                      mt-4

                      text-[40px]
                      font-semibold
                      leading-none
                      tracking-tight

                      text-[#203735]

                      sm:text-[48px]
                    "
                  >
                    <Counter
                      end={stat.number}
                      suffix={stat.suffix}
                    />
                  </div>


                  {/* LABEL */}

                  <p
                    className="
                      mt-2

                      px-4

                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.14em]

                      text-[#657570]

                      sm:text-[10px]
                    "
                  >
                    {stat.label}
                  </p>

                </div>

              </div>
            );
          })}

        </div>

      </div>


      {/* ================= ANIMATIONS ================= */}

      <style>{`

        @keyframes statsGlowOne {

          0%,
          100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.45;
          }

          50% {
            transform: translate(60px, 20px) scale(1.3);
            opacity: 0.85;
          }

        }


        @keyframes statsGlowTwo {

          0%,
          100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.35;
          }

          50% {
            transform: translate(-70px, -40px) scale(1.25);
            opacity: 0.8;
          }

        }


        @keyframes statsGlowThree {

          0%,
          100% {
            transform: translate(-50%, -50%) scale(0.9);
            opacity: 0.3;
          }

          50% {
            transform: translate(-50%, -50%) scale(1.35);
            opacity: 0.7;
          }

        }


        @keyframes ringPulse {

          0%,
          100% {
            transform: scale(1);
            opacity: 0.25;
          }

          50% {
            transform: scale(1.08);
            opacity: 0.75;
          }

        }


        @keyframes innerPulse {

          0%,
          100% {
            transform: scale(0.85);
            opacity: 0.35;
          }

          50% {
            transform: scale(1.2);
            opacity: 0.9;
          }

        }


        @keyframes headingGlow {

          0%,
          100% {
            transform: translate(-50%, -50%) scale(0.9);
            opacity: 0.35;
          }

          50% {
            transform: translate(-50%, -50%) scale(1.2);
            opacity: 0.8;
          }

        }


        @keyframes textGlow {

          0%,
          100% {
            filter: brightness(1);
            opacity: 0.9;
          }

          50% {
            filter: brightness(1.25);
            opacity: 1;
          }

        }

      `}</style>

    </section>
  );
};

export default Stats;