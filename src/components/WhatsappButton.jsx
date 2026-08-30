import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const WhatsAppButton = () => {
  const phoneNumber = "919999999999";

  const message =
    "Hello! I would like to know more about your professional services.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        fixed
        bottom-6
        left-6
        z-[9999]
        flex
        h-[58px]
        w-[58px]
        items-center
        justify-center
        rounded-full
        bg-[#25D366]
        text-white
        shadow-[0_12px_30px_rgba(37,211,102,0.35)]
        transition-transform
        duration-300
        hover:scale-110
      "
    >
      {/* Soft pulse ring */}
      <span
        className="
          absolute
          inset-[-4px]
          animate-ping
          rounded-full
          border
          border-[#25D366]/40
        "
      />

      {/* Actual WhatsApp Icon */}
      <FaWhatsapp
        size={31}
        className="relative z-10"
      />
    </motion.a>
  );
};

export default WhatsAppButton;