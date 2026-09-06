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
        z-[9999]
        flex
        h-14
        w-14
        items-center
        justify-center
        rounded-full
        bg-[#25D366]
        text-white
        shadow-[0_8px_25px_rgba(0,0,0,0.25)]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:scale-110
        hover:shadow-[0_12px_30px_rgba(0,0,0,0.3)]
      "
    >
      <FaWhatsapp size={30} />
    </a>
  );
};

export default WhatsAppButton;