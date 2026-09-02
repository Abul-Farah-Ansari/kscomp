import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "917004946933";

  const message =
    "Hello! I would like to know more about your professional services.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="
        fixed
        bottom-6
        left-6
        z-[999]

        flex
        h-14
        w-14
        items-center
        justify-center

        rounded-full

        bg-[#25D366]
        text-white

        shadow-[0_10px_30px_rgba(0,0,0,0.25)]

        transition-all
        duration-300

        hover:scale-110
        hover:shadow-[0_15px_35px_rgba(37,211,102,0.4)]

        sm:h-16
        sm:w-16
      "
    >
      <FaWhatsapp className="text-[30px] sm:text-[35px]" />
    </a>
  );
};

export default WhatsAppButton;