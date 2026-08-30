import React, { useState } from "react";
import {
  Plus,
  Minus,
  MessageCircle,
  Phone,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const faqs = [
  {
    question: "What services does KS & Company provide?",
    answer:
      "We provide professional financial and business advisory services, including accounting, taxation, financial management, business analysis, compliance support, and strategic guidance.",
  },
  {
    question: "Who can benefit from your professional services?",
    answer:
      "Our services are designed for individuals, startups, small and medium-sized businesses, and established organizations seeking reliable financial and professional guidance.",
  },
  {
    question: "How do I get started with KS & Company?",
    answer:
      "You can contact our team or book an appointment to discuss your requirements. We will understand your needs and recommend the most suitable professional support.",
  },
  {
    question: "Do you provide customized financial solutions?",
    answer:
      "Yes. Every business has different challenges and goals, so we focus on understanding your specific requirements before recommending practical and relevant solutions.",
  },
  {
    question: "How do you ensure accuracy and compliance?",
    answer:
      "Our work follows a structured professional approach with careful review, updated knowledge, and attention to applicable financial and regulatory requirements.",
  },
  {
    question: "Can I work with KS & Company for long-term support?",
    answer:
      "Yes. We believe in building long-term professional relationships and can provide ongoing support as your business and financial requirements evolve.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleChatClick = () => {
    // Connect your chatbot modal here later.
    console.log("Open chatbot");
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#f4f7f5] py-16 sm:py-20 lg:py-24">
      
      {/* ================= BACKGROUND DECORATION ================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* LEFT DECORATIVE CIRCLE */}

        <div
          className="
            absolute
            -left-32
            top-1/2
            h-[420px]
            w-[420px]
            -translate-y-1/2
            rounded-full
            border
            border-[#326844]/10
          "
        />

        {/* RIGHT DECORATION */}

        <div
          className="
            absolute
            -right-24
            -top-28
            h-[380px]
            w-[380px]
            rounded-full
            bg-[#285b68]/[0.035]
          "
        />

        {/* LARGE FAQ BACKGROUND TEXT */}

        <div
          className="
            absolute
            bottom-[-80px]
            right-[-30px]
            select-none
            text-[220px]
            font-bold
            leading-none
            tracking-tight
            text-[#326844]/[0.025]
          "
        >
          FAQ
        </div>

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
          lg:px-12
          xl:px-16
        "
      >

        <div
          className="
            grid
            gap-12

            lg:grid-cols-[0.75fr_1.25fr]
            lg:gap-20
          "
        >

          {/* ================= LEFT SIDE ================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >

            {/* LABEL */}

            <div className="mb-5 flex items-center gap-3">

              <span className="h-px w-10 bg-[#326844]" />

              <span
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.3em]
                  text-[#326844]
                "
              >
                Frequently Asked Questions
              </span>

            </div>


            {/* HEADING */}

            <h2
              className="
                max-w-[520px]

                text-[38px]
                font-semibold
                leading-[1.1]
                tracking-tight
                text-[#1e2d30]

                sm:text-[52px]
                lg:text-[58px]
              "
            >
              Answers to help you

              <span className="block text-[#326844]">
                move forward.
              </span>

            </h2>


            {/* DESCRIPTION */}

            <p
              className="
                mt-6
                max-w-[430px]

                text-sm
                leading-7
                text-[#687779]
              "
            >
              Find answers to common questions about our professional
              services, approach, and how we support our clients.
            </p>


            {/* ================= STILL HAVE A QUESTION ================= */}

            <div
              className="
                mt-10

                border-l-2
                border-[#75b43c]

                pl-5
                sm:pl-6
              "
            >

              <p
                className="
                  text-sm
                  font-medium
                  leading-6
                  text-[#334544]
                "
              >
                Still have a question?
              </p>


              <p
                className="
                  mt-1
                  max-w-[420px]

                  text-[12px]
                  leading-6
                  text-[#7a8988]
                "
              >
                Our team and AI assistant are available to help you
                understand your requirements and get the right guidance.
              </p>


              {/* ================= ACTION BUTTONS ================= */}

              <div
                className="
                  mt-6

                  flex
                  flex-col
                  gap-3

                  sm:flex-row
                "
              >

                {/* CHATBOT BUTTON */}

                <button
                  type="button"
                  onClick={handleChatClick}
                  className="
                    group

                    inline-flex
                    items-center
                    justify-center
                    gap-3

                    rounded-full

                    bg-[#285b68]

                    px-6
                    py-3.5

                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.12em]

                    text-white

                    shadow-[0_10px_25px_rgba(40,91,104,0.18)]

                    transition-all
                    duration-300

                    hover:-translate-y-1
                    hover:bg-[#1e4b56]

                    hover:shadow-[0_15px_35px_rgba(40,91,104,0.28)]
                  "
                >

                  <MessageCircle
                    size={18}
                    strokeWidth={1.8}
                    className="
                      transition-transform
                      duration-300
                      group-hover:scale-110
                    "
                  />

                  Chat with AI Assistant

                </button>


                {/* CALL BUTTON */}

                <a
                  href="tel:+911234567890"
                  className="
                    group

                    inline-flex
                    items-center
                    justify-center
                    gap-3

                    rounded-full

                    border
                    border-[#326844]/20

                    bg-white/60

                    px-6
                    py-3.5

                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.12em]

                    text-[#326844]

                    transition-all
                    duration-300

                    hover:-translate-y-1
                    hover:border-[#326844]
                    hover:bg-[#326844]
                    hover:text-white

                    hover:shadow-[0_12px_30px_rgba(50,104,68,0.15)]
                  "
                >

                  <Phone
                    size={17}
                    strokeWidth={1.8}
                    className="
                      transition-transform
                      duration-300
                      group-hover:rotate-12
                    "
                  />

                  Call Us Now

                </a>

              </div>

            </div>

          </motion.div>


          {/* ================= FAQ ACCORDION ================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
            className="
              border-t
              border-[#1e5260]/15
            "
          >

            {faqs.map((faq, index) => {

              const isActive = activeIndex === index;

              return (
                <div
                  key={index}
                  className="
                    border-b
                    border-[#1e5260]/15
                  "
                >

                  {/* ================= QUESTION ================= */}

                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    className="
                      flex
                      w-full
                      items-center
                      justify-between
                      gap-4

                      py-6
                      text-left

                      sm:gap-5
                      sm:py-7
                    "
                  >

                    <div
                      className="
                        flex
                        min-w-0
                        items-center
                        gap-4

                        sm:gap-7
                      "
                    >

                      {/* NUMBER */}

                      <span
                        className={`
                          shrink-0

                          text-[9px]
                          font-semibold
                          tracking-[1.5px]

                          sm:text-[10px]
                          sm:tracking-[2px]

                          ${
                            isActive
                              ? "text-[#326844]"
                              : "text-[#9aa5a6]"
                          }
                        `}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>


                      {/* QUESTION TEXT */}

                      <span
                        className={`
                          text-[15px]
                          font-medium
                          leading-6

                          transition-colors
                          duration-300

                          sm:text-[18px]

                          ${
                            isActive
                              ? "text-[#285b68]"
                              : "text-[#2e3b3c]"
                          }
                        `}
                      >
                        {faq.question}
                      </span>

                    </div>


                    {/* ICON */}

                    <span
                      className={`
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center

                        rounded-full

                        transition-all
                        duration-300

                        sm:h-10
                        sm:w-10

                        ${
                          isActive
                            ? "bg-[#326844] text-white"
                            : `
                              border
                              border-[#326844]/15
                              text-[#326844]
                            `
                        }
                      `}
                    >

                      {isActive ? (

                        <Minus
                          size={17}
                          strokeWidth={1.7}
                        />

                      ) : (

                        <Plus
                          size={17}
                          strokeWidth={1.7}
                        />

                      )}

                    </span>

                  </button>


                  {/* ================= ANSWER ================= */}

                  <AnimatePresence initial={false}>

                    {isActive && (

                      <motion.div
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          duration: 0.35,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="overflow-hidden"
                      >

                        <div
                          className="
                            pb-7

                            pl-[25px]
                            pr-4

                            sm:pl-[46px]
                            sm:pr-16
                          "
                        >

                          <p
                            className="
                              max-w-[650px]

                              text-[13px]
                              leading-7
                              text-[#6b7978]

                              sm:text-sm
                            "
                          >
                            {faq.answer}
                          </p>

                        </div>

                      </motion.div>

                    )}

                  </AnimatePresence>

                </div>
              );
            })}

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default FAQ;