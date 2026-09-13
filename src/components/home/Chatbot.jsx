import React, { useEffect, useRef, useState } from "react";
import {
  Bot,
  Send,
  MessageCircle,
  X,
  ChevronRight,
  Sparkles,
  User,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const quickQuestions = [
  "What services do you offer?",
  "How can I book a consultation?",
  "Do you provide tax services?",
];

const getBotResponse = (message) => {
  const text = message.toLowerCase();

  if (
    text.includes("service") ||
    text.includes("offer")
  ) {
    return "We provide professional services including taxation, audit & assurance, accounting, compliance, financial advisory and business consultancy.";
  }

  if (
    text.includes("appointment") ||
    text.includes("consultation") ||
    text.includes("book")
  ) {
    return "You can book a consultation through our Schedule Appointment section. Our team will get back to you shortly.";
  }

  if (
    text.includes("tax") ||
    text.includes("gst") ||
    text.includes("income tax")
  ) {
    return "Yes. We assist with tax planning, income tax, GST, compliance and other taxation-related services.";
  }

  if (
    text.includes("audit")
  ) {
    return "We provide professional audit and assurance services to help businesses maintain accuracy, transparency and regulatory compliance.";
  }

  if (
    text.includes("hello") ||
    text.includes("hi") ||
    text.includes("hey")
  ) {
    return "Hello! 👋 How can K S & Company assist you today?";
  }

  return "Thank you for your message. Our team will be happy to assist you. You can also ask about our tax, audit, accounting or advisory services.";
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "bot",
      text: "Hello! 👋 Welcome to K S & Company. How can we assist you today?",
    },
  ]);

  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, isTyping]);

  const sendMessage = (messageText = input) => {
    const text = messageText.trim();

    if (!text) return;

    const userMessage = {
      id: Date.now(),
      sender: "user",
      text,
    };

    setMessages((prev) => [
      ...prev,
      userMessage,
    ]);

    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const botMessage = {
        id: Date.now() + 1,
        sender: "bot",
        text: getBotResponse(text),
      };

      setMessages((prev) => [
        ...prev,
        botMessage,
      ]);

      setIsTyping(false);
    }, 900);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* =====================================================
          FLOATING CHAT BUTTON
      ====================================================== */}

      <motion.button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Open chatbot"
        initial={{
          opacity: 0,
          scale: 0.7,
          y: 30,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
          delay: 0.5,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          group
          fixed
          bottom-5
          right-5
          z-[9999]

          flex
          h-[58px]
          w-[58px]
          items-center
          justify-center

          rounded-full

          bg-[#205030]

          text-white

          shadow-[0_12px_35px_rgba(32,80,48,0.4)]

          transition-all
          duration-300

          hover:scale-105
          hover:bg-[#326844]

          sm:bottom-6
          sm:right-6
          sm:h-[64px]
          sm:w-[64px]
        "
      >
        {/* Glow */}

        <span
          className="
            absolute
            inset-0
            animate-ping
            rounded-full
            border
            border-[#75b43c]/50
          "
        />

        {/* Online Dot */}

        {!isOpen && (
          <span
            className="
              absolute
              right-[2px]
              top-[3px]

              h-3.5
              w-3.5

              rounded-full

              border-[3px]
              border-[#f4f7f5]

              bg-[#75b43c]

              shadow-[0_0_12px_rgba(117,180,60,0.9)]
            "
          />
        )}

        <AnimatePresence mode="wait">

          {isOpen ? (

            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X size={25} />
            </motion.div>

          ) : (

            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
            >
              <MessageCircle size={26} />
            </motion.div>

          )}

        </AnimatePresence>

      </motion.button>


      {/* =====================================================
          CHAT WINDOW
      ====================================================== */}

      <AnimatePresence>

        {isOpen && (

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
              scale: 0.92,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 20,
              scale: 0.94,
            }}
            transition={{
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              fixed
              bottom-[82px]
              right-4
              z-[9998]

              flex
              h-[540px]
              w-[calc(100vw-32px)]
              max-w-[390px]
              flex-col

              overflow-hidden

              rounded-[24px]

              border
              border-white/10

              bg-[#f4f7f5]

              shadow-[0_25px_80px_rgba(0,0,0,0.28)]

              sm:bottom-[92px]
              sm:right-6
            "
          >

            {/* =================================================
                CHAT HEADER
            ================================================= */}

            <div
              className="
                relative
                overflow-hidden

                bg-[#173538]

                px-5
                py-5

                text-white
              "
            >
              {/* Background Glow */}

              <div
                className="
                  absolute
                  -right-16
                  -top-16

                  h-40
                  w-40

                  rounded-full

                  bg-[#326844]/50

                  blur-3xl
                "
              />

              <div className="relative flex items-center justify-between">

                <div className="flex items-center gap-3">

                  {/* Bot Avatar */}

                  <div
                    className="
                      relative

                      flex
                      h-11
                      w-11
                      items-center
                      justify-center

                      rounded-full

                      border
                      border-white/15

                      bg-white/10

                      backdrop-blur-md
                    "
                  >
                    <Bot
                      size={21}
                      className="text-[#b6db9a]"
                    />

                    {/* Status */}

                    <span
                      className="
                        absolute
                        bottom-0
                        right-0

                        h-3
                        w-3

                        rounded-full

                        border-2
                        border-[#173538]

                        bg-[#75b43c]
                      "
                    />
                  </div>


                  <div>

                    <div className="flex items-center gap-2">

                      <h3 className="text-[16px] font-semibold">
                        KS Assistant
                      </h3>

                      <Sparkles
                        size={14}
                        className="text-[#b6db9a]"
                      />

                    </div>

                    <p
                      className="
                        mt-0.5
                        text-[10px]
                        uppercase
                        tracking-[1.5px]
                        text-white/55
                      "
                    >
                      Online • Here to help
                    </p>

                  </div>

                </div>


                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close chatbot"
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center

                    rounded-full

                    bg-white/5

                    text-white/70

                    transition

                    hover:bg-white/10
                    hover:text-white
                  "
                >
                  <X size={19} />
                </button>

              </div>

            </div>


            {/* =================================================
                CHAT MESSAGES
            ================================================= */}

            <div
              className="
                flex-1
                overflow-y-auto

                bg-[#f4f7f5]

                px-4
                py-5
              "
            >

              {/* Date */}

              <div className="mb-5 flex justify-center">

                <span
                  className="
                    rounded-full
                    border
                    border-[#173538]/10

                    bg-white

                    px-3
                    py-1

                    text-[9px]
                    font-medium
                    uppercase
                    tracking-[1px]

                    text-[#728082]
                  "
                >
                  K S & Company Assistant
                </span>

              </div>


              {/* Messages */}

              <div className="space-y-4">

                {messages.map((message) => (

                  <div
                    key={message.id}
                    className={`
                      flex
                      ${
                        message.sender === "user"
                          ? "justify-end"
                          : "justify-start"
                      }
                    `}
                  >

                    {message.sender === "bot" && (

                      <div
                        className="
                          mr-2
                          mt-1

                          flex
                          h-7
                          w-7
                          shrink-0
                          items-center
                          justify-center

                          rounded-full

                          bg-[#173538]

                          text-[#b6db9a]
                        "
                      >
                        <Bot size={14} />
                      </div>

                    )}

                    <div
                      className={`
                        max-w-[78%]

                        rounded-[18px]

                        px-4
                        py-3

                        text-[13px]
                        leading-6

                        ${
                          message.sender === "user"
                            ? `
                              rounded-br-[4px]
                              bg-[#326844]
                              text-white
                              shadow-[0_8px_20px_rgba(50,104,68,0.18)]
                            `
                            : `
                              rounded-bl-[4px]
                              border
                              border-[#173538]/8
                              bg-white
                              text-[#4d5c5e]
                              shadow-sm
                            `
                        }
                      `}
                    >
                      {message.text}
                    </div>

                  </div>

                ))}


                {/* Typing Indicator */}

                {isTyping && (

                  <div className="flex items-center">

                    <div
                      className="
                        mr-2

                        flex
                        h-7
                        w-7
                        items-center
                        justify-center

                        rounded-full

                        bg-[#173538]

                        text-[#b6db9a]
                      "
                    >
                      <Bot size={14} />
                    </div>

                    <div
                      className="
                        flex
                        items-center
                        gap-1

                        rounded-[18px]
                        rounded-bl-[4px]

                        bg-white

                        px-4
                        py-3

                        shadow-sm
                      "
                    >
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#326844]/50" />

                      <span
                        className="
                          h-1.5
                          w-1.5
                          animate-bounce
                          rounded-full
                          bg-[#326844]/50
                          [animation-delay:150ms]
                        "
                      />

                      <span
                        className="
                          h-1.5
                          w-1.5
                          animate-bounce
                          rounded-full
                          bg-[#326844]/50
                          [animation-delay:300ms]
                        "
                      />

                    </div>

                  </div>

                )}

              </div>


              {/* Quick Questions */}

              {messages.length <= 2 && !isTyping && (

                <div className="mt-6">

                  <p
                    className="
                      mb-3

                      text-[9px]
                      font-semibold
                      uppercase
                      tracking-[1.5px]

                      text-[#8a9698]
                    "
                  >
                    Quick Questions
                  </p>

                  <div className="space-y-2">

                    {quickQuestions.map((question) => (

                      <button
                        key={question}
                        type="button"
                        onClick={() => sendMessage(question)}
                        className="
                          group

                          flex
                          w-full
                          items-center
                          justify-between

                          rounded-xl

                          border
                          border-[#173538]/10

                          bg-white

                          px-3
                          py-2.5

                          text-left
                          text-[11px]
                          font-medium

                          text-[#526062]

                          transition-all
                          duration-300

                          hover:border-[#326844]/30
                          hover:bg-[#edf3ee]
                        "
                      >
                        <span>
                          {question}
                        </span>

                        <ChevronRight
                          size={15}
                          className="
                            text-[#326844]

                            transition-transform
                            duration-300

                            group-hover:translate-x-1
                          "
                        />

                      </button>

                    ))}

                  </div>

                </div>

              )}

              <div ref={messagesEndRef} />

            </div>


            {/* =================================================
                INPUT AREA
            ================================================= */}

            <div
              className="
                border-t
                border-[#173538]/10

                bg-white

                p-3
              "
            >

              <div
                className="
                  flex
                  items-center
                  gap-2

                  rounded-xl

                  border
                  border-[#173538]/10

                  bg-[#f4f7f5]

                  p-1.5
                "
              >

                <div
                  className="
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center

                    rounded-lg

                    text-[#326844]
                  "
                >
                  <User size={17} />
                </div>


                <input
                  type="text"
                  value={input}
                  onChange={(event) =>
                    setInput(event.target.value)
                  }
                  onKeyDown={handleKeyDown}
                  placeholder="Type your message..."
                  className="
                    min-w-0
                    flex-1

                    bg-transparent

                    text-[12px]
                    text-[#1e2d30]

                    outline-none

                    placeholder:text-[#9aa5a6]
                  "
                />


                <button
                  type="button"
                  onClick={() => sendMessage()}
                  disabled={!input.trim()}
                  aria-label="Send message"
                  className="
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center

                    rounded-lg

                    bg-[#326844]

                    text-white

                    transition-all
                    duration-300

                    hover:bg-[#285b68]

                    disabled:cursor-not-allowed
                    disabled:opacity-40
                  "
                >
                  <Send size={16} />
                </button>

              </div>


              <p
                className="
                  mt-2
                  text-center

                  text-[8px]
                  tracking-[0.5px]

                  text-[#a0aaab]
                "
              >
                K S & COMPANY • PROFESSIONAL ASSISTANCE
              </p>

            </div>

          </motion.div>

        )}

      </AnimatePresence>
    </>
  );
};

export default Chatbot;