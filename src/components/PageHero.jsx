import { motion } from "framer-motion";

const PageHero = ({
  label,
  title,
  highlight,
  description,
  children,
}) => {
  return (
    <section className="relative flex min-h-[620px] overflow-hidden bg-[#102b29] pt-32 pb-20 sm:min-h-[680px] sm:pt-36 sm:pb-24">
      
      {/* Background Shapes */}

      <div className="absolute -left-40 -top-40 h-[420px] w-[420px] rounded-full border border-white/5" />

      <div className="absolute -left-20 -top-20 h-[320px] w-[320px] rounded-full border border-white/5" />

      <div className="absolute right-[-120px] top-[-160px] h-[480px] w-[480px] rounded-full border border-white/5" />

      <div className="absolute right-[-40px] top-[-60px] h-[350px] w-[350px] rounded-full border border-white/5" />


      {/* Content */}

      <div className="relative mx-auto flex w-full max-w-[1280px] flex-col justify-center px-6 sm:px-10 lg:px-14">

        {/* Label */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4"
        >
          <div className="h-px w-14 bg-white/40" />

          <p className="text-xs font-semibold uppercase tracking-[5px] text-white/60">
            {label}
          </p>
        </motion.div>


        {/* Heading */}

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-7 max-w-5xl text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
        >
          {title}

          {highlight && (
            <>
              <br />

              <span className="text-white/60">
                {highlight}
              </span>
            </>
          )}
        </motion.h1>


        {/* Description */}

        {description && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-7 max-w-3xl"
          >
            <p className="text-base leading-8 text-white/65 sm:text-lg">
              {description}
            </p>
          </motion.div>
        )}


        {/* Button / Extra Content */}

        {children && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-9"
          >
            {children}
          </motion.div>
        )}

      </div>
    </section>
  );
};

export default PageHero;