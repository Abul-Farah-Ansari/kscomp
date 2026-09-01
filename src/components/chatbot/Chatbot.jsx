import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Bot,
  Send,
  X,
  Sparkles,
  ArrowRight,
  MessageCircle,
} from "lucide-react";

import { chatbotData } from "./chatbotData";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [input, setInput] = useState("");

  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "bot",
      text:
        "Hello 👋 I'm the KS & Company virtual assistant. How can I help you today?",
    },
  ]);

  const [isTyping, setIsTyping] = useState(false);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, isTyping]);

  const getBotResponse = (message) => {
    const userMessage = message.toLowerCase().trim();

    for (const item of chatbotData.commonAnswers) {
      const matched = item.keywords.some((keyword) =>
        userMessage.includes(keyword)
      );

      if (matched) {
        return {
          text: item.answer,
          action: item.action || null,
        };
      }
    }

    for (const service of chatbotData.services) {
      const matched = service.keywords.some((keyword) =>
        userMessage.includes(keyword)
      );

      if (matched) {
        return {
          text: `${service.category}: ${service.description}`,
          services: service.items,
          action: {
            label: "Explore All Services",
            link: "/services",
          },
        };
      }
    }

    return {
      text:
        "I can help you with Taxation, Accounting, Company Registration, Compliance, Documentation, Insurance and Finance services. Please ask me about a specific service or select one of the quick options below.",
      action: {
        label: "View Our Services",
        link: "/services",
      },
    };
  };

  const handleSendMessage = (customMessage = null) => {
    const message = customMessage || input;

    if (!message.trim()) return;

    const userMessage = {
      id: Date.now(),
      type: "user",
      text: message,
    };

    setMessages((prev) => [...prev, userMessage]);

    setInput("");

    setIsTyping(true);

    setTimeout(() => {
      const response = getBotResponse(message);

      const botMessage = {
        id: Date.now() + 1,
        type: "bot",
        text: response.text,
        services: response.services || null,
        action: response.action || null,
      };

      setMessages((prev) => [...prev, botMessage]);

      setIsTyping(false);
    }, 700);
  };

  const handleQuickQuestion = (question) => {
    handleSendMessage(question);
  };

  return (
    <>
      {/* =====================================================
          CHAT WINDOW
      ====================================================== */}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 20,
              scale: 0.96,
            }}
            transition={{
              duration: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              fixed
              bottom-24
              right-4
              z-[2000]

              flex
              h-[600px]
              w-[calc(100%-32px)]
              max-w-[390px]
              flex-col

              overflow-hidden

              border
              border-white/10

              bg-[#102b29]

              shadow-[0_30px_100px_rgba(0,0,0,0.45)]

              sm:bottom-28
              sm:right-6
            "
          >
            {/* =================================================
                HEADER
            ================================================= */}

            <div
              className="
                relative
                overflow-hidden

                border-b
                border-white/10

                bg-[#173b37]

                px-5
                py-4
              "
            >
              {/* Background decoration */}

              <div
                className="
                  absolute
                  -right-12
                  -top-12

                  h-32
                  w-32

                  rounded-full

                  border
                  border-white/10
                "
              />

              <div
                className="
                  absolute
                  -right-4
                  -top-4

                  h-20
                  w-20

                  rounded-full

                  border
                  border-white/10
                "
              />

              <div className="relative flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {/* Robot */}

                  <div
                    className="
                      relative

                      flex
                      h-11
                      w-11

                      items-center
                      justify-center

                      bg-white

                      text-[#102b29]

                      shadow-[0_10px_30px_rgba(0,0,0,0.2)]
                    "
                  >
                    <Bot size={23} strokeWidth={1.7} />

                    <span
                      className="
                        absolute
                        -right-1
                        -top-1

                        h-3
                        w-3

                        animate-pulse

                        rounded-full

                        border-2
                        border-[#173b37]

                        bg-[#9bd66f]
                      "
                    />
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm font-semibold text-white">
                        KS Assistant
                      </h3>

                      <Sparkles
                        size={14}
                        className="text-[#9bd66f]"
                      />
                    </div>

                    <p className="mt-1 text-[11px] text-white/55">
                      Usually replies instantly
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center

                    text-white/70

                    transition

                    hover:bg-white/10
                    hover:text-white
                  "
                  aria-label="Close chatbot"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* =================================================
                MESSAGES
            ================================================= */}

            <div
              className="
                flex-1
                space-y-4
                overflow-y-auto

                bg-[#0d2422]

                px-4
                py-5

                [scrollbar-width:thin]
              "
            >
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`
                    flex

                    ${
                      message.type === "user"
                        ? "justify-end"
                        : "justify-start"
                    }
                  `}
                >
                  <div
                    className={`
                      max-w-[85%]

                      ${
                        message.type === "user"
                          ? `
                              bg-[#3F7045]
                              text-white
                            `
                          : `
                              border
                              border-white/10
                              bg-white/[0.06]
                              text-white/80
                            `
                      }

                      px-4
                      py-3

                      text-[13px]
                      leading-6
                    `}
                  >
                    {message.type === "bot" && (
                      <div className="mb-2 flex items-center gap-2">
                        <Bot
                          size={14}
                          className="text-[#9bd66f]"
                        />

                        <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/45">
                          KS Assistant
                        </span>
                      </div>
                    )}

                    <p>{message.text}</p>

                    {/* Service List */}

                    {message.services && (
                      <div className="mt-3 space-y-1.5 border-t border-white/10 pt-3">
                        {message.services.map((service) => (
                          <div
                            key={service}
                            className="
                              flex
                              items-start
                              gap-2

                              text-[12px]
                              leading-5
                              text-white/65
                            "
                          >
                            <span className="mt-2 h-1 w-1 shrink-0 bg-[#9bd66f]" />

                            {service}
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Action Button */}

                    {message.action && (
                      <a
                        href={message.action.link}
                        className="
                          group

                          mt-4

                          inline-flex
                          items-center
                          gap-2

                          bg-white

                          px-4
                          py-2.5

                          text-[11px]
                          font-semibold

                          text-[#102b29]

                          transition

                          hover:bg-[#9bd66f]
                        "
                      >
                        {message.action.label}

                        <ArrowRight
                          size={14}
                          className="
                            transition-transform
                            duration-300
                            group-hover:translate-x-1
                          "
                        />
                      </a>
                    )}
                  </div>
                </div>
              ))}

              {/* Typing */}

              {isTyping && (
                <div className="flex justify-start">
                  <div
                    className="
                      flex
                      items-center
                      gap-1.5

                      border
                      border-white/10

                      bg-white/[0.06]

                      px-4
                      py-3
                    "
                  >
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-white/50" />

                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-white/50 [animation-delay:150ms]" />

                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-white/50 [animation-delay:300ms]" />
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* =================================================
                QUICK QUESTIONS
            ================================================= */}

            {messages.length < 3 && (
              <div
                className="
                  border-t
                  border-white/10

                  bg-[#102b29]

                  px-4
                  py-3
                "
              >
                <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/40">
                  Popular Questions
                </p>

                <div className="flex flex-wrap gap-2">
                  {chatbotData.quickQuestions.slice(0, 4).map(
                    (question) => (
                      <button
                        key={question}
                        type="button"
                        onClick={() =>
                          handleQuickQuestion(question)
                        }
                        className="
                          border
                          border-white/10

                          bg-white/[0.04]

                          px-3
                          py-2

                          text-[10px]
                          text-white/65

                          transition

                          hover:border-[#9bd66f]/50
                          hover:bg-[#9bd66f]/10
                          hover:text-white
                        "
                      >
                        {question}
                      </button>
                    )
                  )}
                </div>
              </div>
            )}

            {/* =================================================
                INPUT
            ================================================= */}

            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="
                flex
                items-center
                gap-2

                border-t
                border-white/10

                bg-[#102b29]

                p-3
              "
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about our services..."
                className="
                  min-w-0
                  flex-1

                  bg-white/[0.07]

                  px-4
                  py-3

                  text-[12px]
                  text-white

                  outline-none

                  placeholder:text-white/35

                  focus:bg-white/[0.1]
                "
              />

              <button
                type="submit"
                className="
                  flex
                  h-[42px]
                  w-[42px]

                  shrink-0

                  items-center
                  justify-center

                  bg-[#9bd66f]

                  text-[#102b29]

                  transition

                  hover:bg-white
                "
                aria-label="Send message"
              >
                <Send size={17} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =====================================================
          FLOATING ROBOT BUTTON
      ====================================================== */}

      <motion.button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{
          scale: 1.06,
        }}
        whileTap={{
          scale: 0.94,
        }}
        className="
          fixed

          bottom-5
          right-5

          z-[1999]

          flex
          h-[58px]
          w-[58px]

          items-center
          justify-center

          bg-[#173b37]

          text-white

          shadow-[0_15px_45px_rgba(0,0,0,0.35)]

          transition

          hover:bg-[#28594f]

          sm:bottom-6
          sm:right-6
        "
        aria-label="Open KS Assistant"
      >
        {/* Outer decoration */}

        <span
          className="
            absolute

            h-[72px]
            w-[72px]

            border
            border-[#9bd66f]/20
          "
        />

        {/* Notification */}

        {!isOpen && (
          <span
            className="
              absolute
              -right-1
              -top-1

              flex
              h-4
              w-4
            "
          >
            <span
              className="
                absolute
                inline-flex
                h-full
                w-full

                animate-ping

                bg-[#9bd66f]

                opacity-70
              "
            />

            <span
              className="
                relative

                inline-flex
                h-4
                w-4

                border-2
                border-[#0d2422]

                bg-[#9bd66f]
              "
            />
          </span>
        )}

        {isOpen ? (
          <X size={25} strokeWidth={1.7} />
        ) : (
          <div className="relative">
            <Bot size={27} strokeWidth={1.6} />

            <MessageCircle
              size={11}
              className="
                absolute
                -bottom-1
                -right-2

                fill-[#9bd66f]

                text-[#9bd66f]
              "
            />
          </div>
        )}
      </motion.button>
    </>
  );
};

export default Chatbot;