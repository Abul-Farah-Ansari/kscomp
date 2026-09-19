import React from "react";
import { motion } from "framer-motion";
import ceoImage from "../../assets/introbackground/0.png";

const CEOMessage = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <motion.img
        src={ceoImage}
        alt="K S & Company"
        initial={{
          opacity: 0,
          scale: 1.02,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{
          once: true,
          amount: 0.25,
        }}
        transition={{
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          block
          h-full
          w-full
          object-cover
          object-center
        "
      />
    </section>
  );
};

export default CEOMessage;