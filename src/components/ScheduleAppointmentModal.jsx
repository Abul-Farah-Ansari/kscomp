import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  X,
  CalendarDays,
  Clock,
  User,
  Phone,
  Mail,
  BriefcaseBusiness,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
} from "lucide-react";

/* =========================================================
   EMAILJS CONFIGURATION
========================================================= */

const EMAILJS_SERVICE_ID = "service_xyp8xo9";
const EMAILJS_TEMPLATE_ID = "template_qro7e18";
const EMAILJS_PUBLIC_KEY = "W5NCxywVfHt7M7Ubu";

/* =========================================================
   INITIAL FORM DATA
========================================================= */

const initialFormData = {
  name: "",
  phone: "",
  email: "",
  service: "",
  date: "",
  time: "",
  message: "",
};

/* =========================================================
   COMPONENT
========================================================= */

const ScheduleAppointmentModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState(initialFormData);

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  /* =========================================================
     SERVICES
  ========================================================= */

  const services = [
    "Taxation Services",
    "Accounting Services",
    "Registration Services",
    "HR Compliance Services",
    "Other Compliance",
    "Government & Documentation Services",
    "Insurance Services",
    "Finance & Loan Services",
  ];

  /* =========================================================
     TIME SLOTS
  ========================================================= */

  const timeSlots = [
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "01:00 PM",
    "02:00 PM",
    "02:30 PM",
    "03:00 PM",
    "03:30 PM",
    "04:00 PM",
    "04:30 PM",
    "05:00 PM",
    "05:30 PM",
    "06:00 PM",
  ];

  /* =========================================================
     TODAY
  ========================================================= */

  const today = new Date().toISOString().split("T")[0];

  /* =========================================================
     HANDLE CHANGE
  ========================================================= */

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (error) {
      setError("");
    }
  };

  /* =========================================================
     FORMAT DATE
  ========================================================= */

  const formatDate = (dateString) => {
    if (!dateString) return "";

    const date = new Date(`${dateString}T00:00:00`);

    return date.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  /* =========================================================
     SUBMIT FORM
  ========================================================= */

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);
    setError("");

    try {
      /* -----------------------------------------------------
         BASIC VALIDATION
      ----------------------------------------------------- */

      if (!formData.name.trim()) {
        throw new Error("Please enter your name.");
      }

      if (!formData.phone.trim()) {
        throw new Error("Please enter your phone number.");
      }

      if (!formData.service) {
        throw new Error("Please select a service.");
      }

      if (!formData.date) {
        throw new Error("Please select an appointment date.");
      }

      if (!formData.time) {
        throw new Error("Please select an appointment time.");
      }

      /* -----------------------------------------------------
         EMAILJS TEMPLATE VARIABLES
      ----------------------------------------------------- */

      const templateParams = {
        /* Customer information */
        from_name: formData.name.trim(),
        name: formData.name.trim(),

        from_email: formData.email.trim(),
        email: formData.email.trim(),

        phone: formData.phone.trim(),

        /* Service */
        service: formData.service,

        /* Appointment date */
        appointment_date: formatDate(formData.date),
        date: formatDate(formData.date),

        /* Appointment time */
        appointment_time: formData.time,
        time: formData.time,

        /* Message */
        message:
          formData.message.trim() ||
          "No additional details provided.",

        /* Useful combined value */
        appointment_details: `
Date: ${formatDate(formData.date)}
Time: ${formData.time}
        `.trim(),
      };

      console.log("Sending appointment data:", templateParams);

      /* -----------------------------------------------------
         SEND THROUGH EMAILJS
      ----------------------------------------------------- */

      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        {
          publicKey: EMAILJS_PUBLIC_KEY,
        }
      );

      console.log("EmailJS response:", response);

      /* -----------------------------------------------------
         SUCCESS
      ----------------------------------------------------- */

      setSubmitted(true);
    } catch (err) {
      console.error("Appointment submission error:", err);

      setError(
        err?.text ||
          err?.message ||
          "Unable to send your appointment request. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  /* =========================================================
     CLOSE
  ========================================================= */

  const handleClose = () => {
    setSubmitted(false);
    setIsSubmitting(false);
    setError("");
    setFormData(initialFormData);

    onClose();
  };

  /* =========================================================
     RENDER
  ========================================================= */

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="
            fixed
            inset-0
            z-[9999]
            flex
            items-center
            justify-center
            bg-[#102b29]/75
            p-4
            backdrop-blur-sm
          "
          onMouseDown={handleClose}
        >
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
              scale: 0.98,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 30,
              scale: 0.98,
            }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
            onMouseDown={(e) => e.stopPropagation()}
            className="
              relative
              max-h-[90vh]
              w-full
              max-w-5xl
              overflow-y-auto
              bg-[#f4f3ef]
            "
          >
            {/* =================================================
                CLOSE BUTTON
            ================================================== */}

            <button
              type="button"
              onClick={handleClose}
              className="
                absolute
                right-5
                top-5
                z-20
                flex
                h-11
                w-11
                items-center
                justify-center
                bg-white
                text-[#102b29]
                transition
                hover:bg-[#102b29]
                hover:text-white
              "
              aria-label="Close appointment modal"
            >
              <X size={20} />
            </button>

            {submitted ? (
              /* =================================================
                 SUCCESS SCREEN
              ================================================= */

              <div
                className="
                  flex
                  min-h-[550px]
                  flex-col
                  items-center
                  justify-center
                  px-6
                  text-center
                "
              >
                <div
                  className="
                    flex
                    h-20
                    w-20
                    items-center
                    justify-center
                    bg-[#102b29]
                    text-white
                  "
                >
                  <CheckCircle2 size={38} />
                </div>

                <p
                  className="
                    mt-8
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[5px]
                    text-[#102b29]/45
                  "
                >
                  Appointment Request Sent
                </p>

                <h2
                  className="
                    mt-5
                    text-4xl
                    font-bold
                    text-[#102b29]
                    sm:text-5xl
                  "
                >
                  Thank You!
                </h2>

                <p
                  className="
                    mt-5
                    max-w-lg
                    text-base
                    leading-8
                    text-[#102b29]/60
                  "
                >
                  Your appointment request has been
                  received successfully. Our team will
                  review your preferred date and time and
                  contact you to confirm the appointment.
                </p>

                <button
                  type="button"
                  onClick={handleClose}
                  className="
                    mt-9
                    inline-flex
                    items-center
                    gap-3
                    bg-[#102b29]
                    px-7
                    py-4
                    text-sm
                    font-semibold
                    text-white
                    transition
                    hover:opacity-90
                  "
                >
                  Close
                  <ArrowRight size={17} />
                </button>
              </div>
            ) : (
              <div className="grid lg:grid-cols-[0.8fr_1.2fr]">

                {/* =================================================
                    LEFT SIDE
                ================================================== */}

                <div
                  className="
                    relative
                    overflow-hidden
                    bg-[#102b29]
                    p-8
                    sm:p-12
                  "
                >
                  {/* Background shapes */}

                  <div
                    className="
                      absolute
                      -left-24
                      -top-24
                      h-[260px]
                      w-[260px]
                      rounded-full
                      border
                      border-white/[0.06]
                    "
                  />

                  <div
                    className="
                      absolute
                      -bottom-32
                      -right-32
                      h-[350px]
                      w-[350px]
                      rounded-full
                      border
                      border-white/[0.06]
                    "
                  />

                  <div className="relative">

                    <p
                      className="
                        text-xs
                        font-semibold
                        uppercase
                        tracking-[5px]
                        text-white/40
                      "
                    >
                      Schedule Appointment
                    </p>

                    <h2
                      className="
                        mt-6
                        text-4xl
                        font-bold
                        leading-tight
                        text-white
                        sm:text-5xl
                      "
                    >
                      Let's Plan
                      <br />

                      <span className="text-white/50">
                        Your Consultation.
                      </span>
                    </h2>

                    <p
                      className="
                        mt-7
                        text-sm
                        leading-8
                        text-white/60
                      "
                    >
                      Select your preferred service,
                      date and time. Our team will review
                      your request and contact you to
                      confirm your appointment.
                    </p>

                    {/* DATE */}

                    <div className="mt-12 space-y-7">

                      <div className="flex gap-4">

                        <div
                          className="
                            flex
                            h-11
                            w-11
                            shrink-0
                            items-center
                            justify-center
                            border
                            border-white/10
                          "
                        >
                          <CalendarDays
                            size={18}
                            className="text-white"
                          />
                        </div>

                        <div>

                          <p
                            className="
                              text-xs
                              font-semibold
                              text-white
                            "
                          >
                            Choose Your Date
                          </p>

                          <p
                            className="
                              mt-2
                              text-xs
                              leading-6
                              text-white/45
                            "
                          >
                            Select a convenient date
                            for your consultation.
                          </p>

                        </div>

                      </div>

                      {/* TIME */}

                      <div className="flex gap-4">

                        <div
                          className="
                            flex
                            h-11
                            w-11
                            shrink-0
                            items-center
                            justify-center
                            border
                            border-white/10
                          "
                        >
                          <Clock
                            size={18}
                            className="text-white"
                          />
                        </div>

                        <div>

                          <p
                            className="
                              text-xs
                              font-semibold
                              text-white
                            "
                          >
                            Select A Time
                          </p>

                          <p
                            className="
                              mt-2
                              text-xs
                              leading-6
                              text-white/45
                            "
                          >
                            Choose your preferred
                            consultation time.
                          </p>

                        </div>

                      </div>

                      {/* CONFIRMATION */}

                      <div className="flex gap-4">

                        <div
                          className="
                            flex
                            h-11
                            w-11
                            shrink-0
                            items-center
                            justify-center
                            border
                            border-white/10
                          "
                        >
                          <CheckCircle2
                            size={18}
                            className="text-white"
                          />
                        </div>

                        <div>

                          <p
                            className="
                              text-xs
                              font-semibold
                              text-white
                            "
                          >
                            Get Confirmation
                          </p>

                          <p
                            className="
                              mt-2
                              text-xs
                              leading-6
                              text-white/45
                            "
                          >
                            Our team will contact you
                            to confirm availability.
                          </p>

                        </div>

                      </div>

                    </div>
                  </div>
                </div>

                {/* =================================================
                    RIGHT SIDE / FORM
                ================================================== */}

                <div
                  className="
                    bg-[#f4f3ef]
                    p-8
                    sm:p-12
                  "
                >

                  <p
                    className="
                      text-xs
                      font-semibold
                      uppercase
                      tracking-[5px]
                      text-[#102b29]/40
                    "
                  >
                    Appointment Details
                  </p>

                  <h3
                    className="
                      mt-5
                      text-3xl
                      font-bold
                      text-[#102b29]
                      sm:text-4xl
                    "
                  >
                    Book Your Preferred
                    <br />

                    <span className="text-[#102b29]/50">
                      Consultation Time.
                    </span>
                  </h3>

                  <form
                    onSubmit={handleSubmit}
                    className="
                      mt-10
                      grid
                      gap-6
                      sm:grid-cols-2
                    "
                  >

                    {/* =================================================
                        NAME
                    ================================================== */}

                    <div>

                      <label
                        htmlFor="appointment-name"
                        className="
                          mb-2
                          block
                          text-xs
                          font-medium
                          text-[#102b29]/55
                        "
                      >
                        Full Name *
                      </label>

                      <div className="relative">

                        <User
                          size={17}
                          className="
                            absolute
                            left-4
                            top-1/2
                            -translate-y-1/2
                            text-[#102b29]/35
                          "
                        />

                        <input
                          id="appointment-name"
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          autoComplete="name"
                          className="
                            h-12
                            w-full
                            border
                            border-[#102b29]/10
                            bg-white
                            pl-11
                            pr-4
                            text-sm
                            text-[#102b29]
                            outline-none
                            transition
                            focus:border-[#102b29]/40
                          "
                        />

                      </div>

                    </div>

                    {/* =================================================
                        PHONE
                    ================================================== */}

                    <div>

                      <label
                        htmlFor="appointment-phone"
                        className="
                          mb-2
                          block
                          text-xs
                          font-medium
                          text-[#102b29]/55
                        "
                      >
                        Phone Number *
                      </label>

                      <div className="relative">

                        <Phone
                          size={17}
                          className="
                            absolute
                            left-4
                            top-1/2
                            -translate-y-1/2
                            text-[#102b29]/35
                          "
                        />

                        <input
                          id="appointment-phone"
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Phone number"
                          autoComplete="tel"
                          className="
                            h-12
                            w-full
                            border
                            border-[#102b29]/10
                            bg-white
                            pl-11
                            pr-4
                            text-sm
                            text-[#102b29]
                            outline-none
                            transition
                            focus:border-[#102b29]/40
                          "
                        />

                      </div>

                    </div>

                    {/* =================================================
                        EMAIL
                    ================================================== */}

                    <div className="sm:col-span-2">

                      <label
                        htmlFor="appointment-email"
                        className="
                          mb-2
                          block
                          text-xs
                          font-medium
                          text-[#102b29]/55
                        "
                      >
                        Email Address
                      </label>

                      <div className="relative">

                        <Mail
                          size={17}
                          className="
                            absolute
                            left-4
                            top-1/2
                            -translate-y-1/2
                            text-[#102b29]/35
                          "
                        />

                        <input
                          id="appointment-email"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Your email address"
                          autoComplete="email"
                          className="
                            h-12
                            w-full
                            border
                            border-[#102b29]/10
                            bg-white
                            pl-11
                            pr-4
                            text-sm
                            text-[#102b29]
                            outline-none
                            transition
                            focus:border-[#102b29]/40
                          "
                        />

                      </div>

                    </div>

                    {/* =================================================
                        SERVICE
                    ================================================== */}

                    <div className="sm:col-span-2">

                      <label
                        htmlFor="appointment-service"
                        className="
                          mb-2
                          block
                          text-xs
                          font-medium
                          text-[#102b29]/55
                        "
                      >
                        Select Service *
                      </label>

                      <div className="relative">

                        <BriefcaseBusiness
                          size={17}
                          className="
                            pointer-events-none
                            absolute
                            left-4
                            top-1/2
                            -translate-y-1/2
                            text-[#102b29]/35
                          "
                        />

                        <select
                          id="appointment-service"
                          name="service"
                          required
                          value={formData.service}
                          onChange={handleChange}
                          className="
                            h-12
                            w-full
                            appearance-none
                            border
                            border-[#102b29]/10
                            bg-white
                            pl-11
                            pr-4
                            text-sm
                            text-[#102b29]
                            outline-none
                            transition
                            focus:border-[#102b29]/40
                          "
                        >

                          <option value="">
                            Select a service
                          </option>

                          {services.map((service) => (
                            <option
                              key={service}
                              value={service}
                            >
                              {service}
                            </option>
                          ))}

                        </select>

                      </div>

                    </div>

                    {/* =================================================
                        DATE
                    ================================================== */}

                    <div>

                      <label
                        htmlFor="appointment-date"
                        className="
                          mb-2
                          block
                          text-xs
                          font-medium
                          text-[#102b29]/55
                        "
                      >
                        Preferred Date *
                      </label>

                      <input
                        id="appointment-date"
                        type="date"
                        name="date"
                        required
                        min={today}
                        value={formData.date}
                        onChange={handleChange}
                        className="
                          h-12
                          w-full
                          border
                          border-[#102b29]/10
                          bg-white
                          px-4
                          text-sm
                          text-[#102b29]
                          outline-none
                          transition
                          focus:border-[#102b29]/40
                        "
                      />

                    </div>

                    {/* =================================================
                        TIME
                    ================================================== */}

                    <div>

                      <label
                        htmlFor="appointment-time"
                        className="
                          mb-2
                          block
                          text-xs
                          font-medium
                          text-[#102b29]/55
                        "
                      >
                        Preferred Time *
                      </label>

                      <select
                        id="appointment-time"
                        name="time"
                        required
                        value={formData.time}
                        onChange={handleChange}
                        className="
                          h-12
                          w-full
                          border
                          border-[#102b29]/10
                          bg-white
                          px-4
                          text-sm
                          text-[#102b29]
                          outline-none
                          transition
                          focus:border-[#102b29]/40
                        "
                      >

                        <option value="">
                          Select time
                        </option>

                        {timeSlots.map((time) => (
                          <option
                            key={time}
                            value={time}
                          >
                            {time}
                          </option>
                        ))}

                      </select>

                    </div>

                    {/* =================================================
                        MESSAGE
                    ================================================== */}

                    <div className="sm:col-span-2">

                      <label
                        htmlFor="appointment-message"
                        className="
                          mb-2
                          block
                          text-xs
                          font-medium
                          text-[#102b29]/55
                        "
                      >
                        Additional Details
                      </label>

                      <textarea
                        id="appointment-message"
                        rows="4"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us briefly about your requirement..."
                        className="
                          w-full
                          resize-none
                          border
                          border-[#102b29]/10
                          bg-white
                          p-4
                          text-sm
                          text-[#102b29]
                          outline-none
                          transition
                          focus:border-[#102b29]/40
                        "
                      />

                    </div>

                    {/* =================================================
                        ERROR
                    ================================================== */}

                    {error && (
                      <motion.div
                        initial={{
                          opacity: 0,
                          y: 8,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        className="
                          sm:col-span-2
                          flex
                          items-start
                          gap-3
                          border
                          border-red-200
                          bg-red-50
                          px-4
                          py-3
                          text-sm
                          text-red-600
                        "
                      >

                        <AlertCircle
                          size={18}
                          className="mt-0.5 shrink-0"
                        />

                        <span>{error}</span>

                      </motion.div>
                    )}

                    {/* =================================================
                        SUBMIT
                    ================================================== */}

                    <div className="sm:col-span-2">

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="
                          flex
                          w-full
                          items-center
                          justify-center
                          gap-3
                          bg-[#102b29]
                          px-6
                          py-4
                          text-sm
                          font-semibold
                          text-white
                          transition
                          duration-300
                          hover:opacity-90
                          disabled:cursor-not-allowed
                          disabled:opacity-60
                        "
                      >

                        {isSubmitting ? (
                          <>
                            <span
                              className="
                                h-5
                                w-5
                                animate-spin
                                rounded-full
                                border-2
                                border-white/30
                                border-t-white
                              "
                            />

                            Sending Request...
                          </>
                        ) : (
                          <>
                            Request Appointment

                            <ArrowRight size={18} />
                          </>
                        )}

                      </button>

                      <p
                        className="
                          mt-4
                          text-center
                          text-xs
                          leading-6
                          text-[#102b29]/40
                        "
                      >
                        Your appointment will be confirmed
                        after availability is reviewed by
                        our team.
                      </p>

                    </div>

                  </form>
                </div>

              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScheduleAppointmentModal;