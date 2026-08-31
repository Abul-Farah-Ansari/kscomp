import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  CalendarDays,
  Clock,
  User,
  Phone,
  Mail,
  BriefcaseBusiness,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const ScheduleAppointmentModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    time: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

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

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Appointment Request:", formData);

    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);

    setFormData({
      name: "",
      phone: "",
      email: "",
      service: "",
      date: "",
      time: "",
      message: "",
    });

    onClose();
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#102b29]/75 p-4 backdrop-blur-sm"
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
            className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto bg-[#f4f3ef]"
          >
            {/* CLOSE BUTTON */}

            <button
              type="button"
              onClick={handleClose}
              className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center bg-white text-[#102b29] transition hover:bg-[#102b29] hover:text-white"
              aria-label="Close appointment modal"
            >
              <X size={20} />
            </button>

            {submitted ? (
              /* ================= SUCCESS ================= */

              <div className="flex min-h-[550px] flex-col items-center justify-center px-6 text-center">
                <div className="flex h-20 w-20 items-center justify-center bg-[#102b29] text-white">
                  <CheckCircle2 size={38} />
                </div>

                <p className="mt-8 text-xs font-semibold uppercase tracking-[5px] text-[#102b29]/45">
                  Appointment Request Sent
                </p>

                <h2 className="mt-5 text-4xl font-bold text-[#102b29] sm:text-5xl">
                  Thank You!
                </h2>

                <p className="mt-5 max-w-lg text-base leading-8 text-[#102b29]/60">
                  Your appointment request has been received successfully.
                  Our team will review your preferred date and time and
                  contact you to confirm the appointment.
                </p>

                <button
                  type="button"
                  onClick={handleClose}
                  className="mt-9 inline-flex items-center gap-3 bg-[#102b29] px-7 py-4 text-sm font-semibold text-white transition hover:opacity-90"
                >
                  Close

                  <ArrowRight size={17} />
                </button>
              </div>
            ) : (
              <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
                {/* ================= LEFT SIDE ================= */}

                <div className="relative overflow-hidden bg-[#102b29] p-8 sm:p-12">
                  {/* Background shapes */}

                  <div className="absolute -left-24 -top-24 h-[260px] w-[260px] rounded-full border border-white/[0.06]" />

                  <div className="absolute -bottom-32 -right-32 h-[350px] w-[350px] rounded-full border border-white/[0.06]" />

                  <div className="relative">
                    <p className="text-xs font-semibold uppercase tracking-[5px] text-white/40">
                      Schedule Appointment
                    </p>

                    <h2 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl">
                      Let's Plan
                      <br />

                      <span className="text-white/50">
                        Your Consultation.
                      </span>
                    </h2>

                    <p className="mt-7 text-sm leading-8 text-white/60">
                      Select your preferred service, date and time. Our team
                      will review your request and contact you to confirm
                      your appointment.
                    </p>

                    {/* Information */}

                    <div className="mt-12 space-y-7">
                      <div className="flex gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/10">
                          <CalendarDays
                            size={18}
                            className="text-white"
                          />
                        </div>

                        <div>
                          <p className="text-xs font-semibold text-white">
                            Choose Your Date
                          </p>

                          <p className="mt-2 text-xs leading-6 text-white/45">
                            Select a convenient date for your consultation.
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/10">
                          <Clock size={18} className="text-white" />
                        </div>

                        <div>
                          <p className="text-xs font-semibold text-white">
                            Select A Time
                          </p>

                          <p className="mt-2 text-xs leading-6 text-white/45">
                            Choose your preferred consultation time.
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/10">
                          <CheckCircle2
                            size={18}
                            className="text-white"
                          />
                        </div>

                        <div>
                          <p className="text-xs font-semibold text-white">
                            Get Confirmation
                          </p>

                          <p className="mt-2 text-xs leading-6 text-white/45">
                            Our team will contact you to confirm availability.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ================= FORM ================= */}

                <div className="bg-[#f4f3ef] p-8 sm:p-12">
                  <p className="text-xs font-semibold uppercase tracking-[5px] text-[#102b29]/40">
                    Appointment Details
                  </p>

                  <h3 className="mt-5 text-3xl font-bold text-[#102b29] sm:text-4xl">
                    Book Your Preferred
                    <br />

                    <span className="text-[#102b29]/50">
                      Consultation Time.
                    </span>
                  </h3>

                  <form
                    onSubmit={handleSubmit}
                    className="mt-10 grid gap-6 sm:grid-cols-2"
                  >
                    {/* NAME */}

                    <div>
                      <label className="mb-2 block text-xs font-medium text-[#102b29]/55">
                        Full Name *
                      </label>

                      <div className="relative">
                        <User
                          size={17}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-[#102b29]/35"
                        />

                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          className="h-12 w-full border border-[#102b29]/10 bg-white pl-11 pr-4 text-sm text-[#102b29] outline-none transition focus:border-[#102b29]/40"
                        />
                      </div>
                    </div>

                    {/* PHONE */}

                    <div>
                      <label className="mb-2 block text-xs font-medium text-[#102b29]/55">
                        Phone Number *
                      </label>

                      <div className="relative">
                        <Phone
                          size={17}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-[#102b29]/35"
                        />

                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Phone number"
                          className="h-12 w-full border border-[#102b29]/10 bg-white pl-11 pr-4 text-sm text-[#102b29] outline-none transition focus:border-[#102b29]/40"
                        />
                      </div>
                    </div>

                    {/* EMAIL */}

                    <div className="sm:col-span-2">
                      <label className="mb-2 block text-xs font-medium text-[#102b29]/55">
                        Email Address
                      </label>

                      <div className="relative">
                        <Mail
                          size={17}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-[#102b29]/35"
                        />

                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Your email address"
                          className="h-12 w-full border border-[#102b29]/10 bg-white pl-11 pr-4 text-sm text-[#102b29] outline-none transition focus:border-[#102b29]/40"
                        />
                      </div>
                    </div>

                    {/* SERVICE */}

                    <div className="sm:col-span-2">
                      <label className="mb-2 block text-xs font-medium text-[#102b29]/55">
                        Select Service *
                      </label>

                      <div className="relative">
                        <BriefcaseBusiness
                          size={17}
                          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#102b29]/35"
                        />

                        <select
                          name="service"
                          required
                          value={formData.service}
                          onChange={handleChange}
                          className="h-12 w-full appearance-none border border-[#102b29]/10 bg-white pl-11 pr-4 text-sm text-[#102b29] outline-none transition focus:border-[#102b29]/40"
                        >
                          <option value="">
                            Select a service
                          </option>

                          {services.map((service) => (
                            <option key={service} value={service}>
                              {service}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* DATE */}

                    <div>
                      <label className="mb-2 block text-xs font-medium text-[#102b29]/55">
                        Preferred Date *
                      </label>

                      <input
                        type="date"
                        name="date"
                        required
                        min={today}
                        value={formData.date}
                        onChange={handleChange}
                        className="h-12 w-full border border-[#102b29]/10 bg-white px-4 text-sm text-[#102b29] outline-none transition focus:border-[#102b29]/40"
                      />
                    </div>

                    {/* TIME */}

                    <div>
                      <label className="mb-2 block text-xs font-medium text-[#102b29]/55">
                        Preferred Time *
                      </label>

                      <select
                        name="time"
                        required
                        value={formData.time}
                        onChange={handleChange}
                        className="h-12 w-full border border-[#102b29]/10 bg-white px-4 text-sm text-[#102b29] outline-none transition focus:border-[#102b29]/40"
                      >
                        <option value="">
                          Select time
                        </option>

                        {timeSlots.map((time) => (
                          <option key={time} value={time}>
                            {time}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* MESSAGE */}

                    <div className="sm:col-span-2">
                      <label className="mb-2 block text-xs font-medium text-[#102b29]/55">
                        Additional Details
                      </label>

                      <textarea
                        rows="4"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us briefly about your requirement..."
                        className="w-full resize-none border border-[#102b29]/10 bg-white p-4 text-sm text-[#102b29] outline-none transition focus:border-[#102b29]/40"
                      />
                    </div>

                    {/* SUBMIT */}

                    <div className="sm:col-span-2">
                      <button
                        type="submit"
                        className="flex w-full items-center justify-center gap-3 bg-[#102b29] px-6 py-4 text-sm font-semibold text-white transition duration-300 hover:opacity-90"
                      >
                        Request Appointment

                        <ArrowRight size={18} />
                      </button>

                      <p className="mt-4 text-center text-xs leading-6 text-[#102b29]/40">
                        Your appointment will be confirmed after availability
                        is reviewed by our team.
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