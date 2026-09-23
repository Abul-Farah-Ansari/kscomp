import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import {
  X,
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
  Upload,
  FileText,
  ArrowRight,
} from "lucide-react";

// =====================================================
// GOOGLE APPS SCRIPT
// =====================================================
const API_URL =
  "https://script.google.com/macros/s/AKfycbyLcivHEtr3wOVff01_amtZLnFeTOKdRyUBymlyde-VV5AHlOJ4UVlVDzcgBsQoHM6EoQ/exec";

// =====================================================
// CLOUDINARY
// =====================================================
const CLOUDINARY_CLOUD_NAME = "ut7p1ift";

const CLOUDINARY_UPLOAD_PRESET = "ks_careers_cv";

const CLOUDINARY_UPLOAD_URL =
  `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`;

// =====================================================
// CAREER PAGE
// =====================================================
const Career = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const [selectedJob, setSelectedJob] = useState(null);

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const [cvFile, setCvFile] = useState(null);
  const [cvUploading, setCvUploading] = useState(false);
  const [cvUrl, setCvUrl] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    qualification: "",
    experience: "",
  });

  // =====================================================
  // LOAD JOBS
  // =====================================================
  useEffect(() => {
    const loadJobs = async () => {
      try {
        setLoading(true);

        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error("Failed to fetch jobs");
        }

        const data = await response.json();

        setJobs(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Failed to load jobs:", err);
        setJobs([]);
      } finally {
        setLoading(false);
      }
    };

    loadJobs();
  }, []);

  // =====================================================
  // FORM CHANGE
  // =====================================================
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

  // =====================================================
  // OPEN MODAL
  // =====================================================
  const handleApply = (job) => {
    setSelectedJob(job);

    setSuccess(false);
    setError("");

    setCvFile(null);
    setCvUrl("");

    setFormData({
      name: "",
      email: "",
      phone: "",
      qualification: "",
      experience: "",
    });
  };

  // =====================================================
  // CLOSE MODAL
  // =====================================================
  const handleClose = () => {
    if (submitting || cvUploading) return;

    setSelectedJob(null);
    setSuccess(false);
    setError("");

    setCvFile(null);
    setCvUrl("");

    setFormData({
      name: "",
      email: "",
      phone: "",
      qualification: "",
      experience: "",
    });
  };

  // =====================================================
  // CV CHANGE
  // =====================================================
  const handleCvChange = (e) => {
    const file = e.target.files?.[0];

    if (!file) {
      setCvFile(null);
      setCvUrl("");
      return;
    }

    setError("");
    setCvUrl("");

    if (file.type !== "application/pdf") {
      setCvFile(null);
      setError("Please upload your CV in PDF format only.");
      e.target.value = "";
      return;
    }

    const maxSize = 5 * 1024 * 1024;

    if (file.size > maxSize) {
      setCvFile(null);
      setError("CV size must be less than 5 MB.");
      e.target.value = "";
      return;
    }

    setCvFile(file);
  };

  // =====================================================
  // CLOUDINARY UPLOAD
  // =====================================================
  const uploadCvToCloudinary = async () => {
    if (!cvFile) {
      throw new Error("Please select your CV.");
    }

    setCvUploading(true);
    setError("");

    try {
      const uploadData = new FormData();

      uploadData.append("file", cvFile);
      uploadData.append(
        "upload_preset",
        CLOUDINARY_UPLOAD_PRESET
      );

      const response = await fetch(CLOUDINARY_UPLOAD_URL, {
        method: "POST",
        body: uploadData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data?.error?.message ||
            "CV upload failed. Please try again."
        );
      }

      if (!data.secure_url) {
        throw new Error(
          "Cloudinary did not return a CV URL."
        );
      }

      setCvUrl(data.secure_url);

      return data.secure_url;
    } catch (err) {
      console.error("CV upload failed:", err);
      throw err;
    } finally {
      setCvUploading(false);
    }
  };

  // =====================================================
  // SUBMIT APPLICATION
  // =====================================================
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedJob || submitting) return;

    setError("");
    setSuccess(false);

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim() ||
      !formData.qualification.trim() ||
      !formData.experience.trim()
    ) {
      setError("Please complete all required fields.");
      return;
    }

    if (!cvFile) {
      setError("Please upload your CV in PDF format.");
      return;
    }

    try {
      setSubmitting(true);

      // Upload CV
      let uploadedCvUrl = cvUrl;

      if (!uploadedCvUrl) {
        uploadedCvUrl = await uploadCvToCloudinary();
      }

      if (!uploadedCvUrl) {
        throw new Error("CV upload failed.");
      }

      // Hidden iframe
      const iframe = document.createElement("iframe");

      iframe.name = "career-submit-frame";
      iframe.style.display = "none";

      document.body.appendChild(iframe);

      // Hidden form
      const form = document.createElement("form");

      form.method = "POST";
      form.action = API_URL;
      form.target = "career-submit-frame";
      form.style.display = "none";

      const addField = (name, value) => {
        const input = document.createElement("input");

        input.type = "hidden";
        input.name = name;
        input.value = value || "";

        form.appendChild(input);
      };

      addField("jobId", selectedJob["Job ID"]);
      addField("position", selectedJob["Position"]);

      addField("name", formData.name.trim());
      addField("email", formData.email.trim());
      addField("phone", formData.phone.trim());
      addField(
        "qualification",
        formData.qualification.trim()
      );
      addField(
        "experience",
        formData.experience.trim()
      );

      // Cloudinary CV URL
      addField("cv", uploadedCvUrl);

      document.body.appendChild(form);

      form.submit();

      setTimeout(() => {
        setSubmitting(false);
        setSuccess(true);

        setFormData({
          name: "",
          email: "",
          phone: "",
          qualification: "",
          experience: "",
        });

        setCvFile(null);
        setCvUrl("");

        form.remove();
        iframe.remove();
      }, 1800);
    } catch (err) {
      console.error(
        "Application submission failed:",
        err
      );

      setSubmitting(false);

      setError(
        err.message ||
          "Something went wrong. Please try again."
      );
    }
  };

  // =====================================================
  // OPEN JOBS
  // =====================================================
  const openJobs = jobs.filter(
    (job) =>
      String(job.Status || "")
        .trim()
        .toLowerCase() === "open"
  );

  return (
    <main className="min-h-screen overflow-hidden bg-[#f4f3ef] text-[#102b29]">

      {/* =================================================
          HERO
      ================================================= */}
      <section className="relative overflow-hidden bg-[#102b29] px-6 pb-[54px] pt-[86px] sm:pb-[70px] sm:pt-[118px]">

        <div className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-[#c8a96b]/10 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-40 -left-32 h-[400px] w-[400px] rounded-full bg-[#c8a96b]/5 blur-3xl" />

        <div className="relative mx-auto max-w-6xl">

          <div className="max-w-4xl">

            <div className="mb-7 inline-flex items-center gap-3 border border-[#c8a96b]/25 bg-white/[0.04] px-4 py-2.5">

              <span className="h-2.5 w-2.5 bg-[#c8a96b]" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#d9c58f]">
                Careers at K S & Company
              </span>

            </div>

            <h1 className="text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">

              Build Your Career.
              <br />

              <span className="text-[#c8a96b]">
                Grow With Us.
              </span>

            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/60 sm:text-lg">
              Join a professional environment where
              knowledge, integrity, collaboration and
              continuous learning come together to create
              meaningful career opportunities.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">

              <a
                href="#current-openings"
                className="group inline-flex items-center gap-2 bg-[#c8a96b] px-6 py-3.5 text-sm font-semibold text-[#102b29] transition hover:bg-[#d9bd7e]"
              >
                View Open Positions

                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#why-join-us"
                className="inline-flex items-center border border-white/15 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/[0.08]"
              >
                Why Join Us
              </a>

            </div>

          </div>

        </div>
      </section>

      {/* =================================================
          WHY JOIN US
      ================================================= */}
      <section
        id="why-join-us"
        className="bg-white px-6 py-20 sm:py-24"
      >
        <div className="mx-auto max-w-6xl">

          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">

            <div>

              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#b08d4f]">
                Why Join Us
              </p>

              <h2 className="mt-4 text-3xl font-bold leading-tight text-[#102b29] sm:text-4xl">
                Grow with a team that values
                <span className="text-[#b08d4f]">
                  {" "}professional excellence.
                </span>
              </h2>

            </div>

            <p className="max-w-2xl leading-8 text-[#102b29]/60 lg:ml-auto">
              At K S & Company, we value people who are
              committed to learning, responsible work and
              delivering meaningful value to clients.
            </p>

          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {[
              {
                icon: "solar:graph-up-linear",
                title: "Professional Growth",
                text: "Develop your knowledge and skills through meaningful work and continuous learning.",
              },
              {
                icon: "solar:square-academic-cap-linear",
                title: "Learning Culture",
                text: "Gain practical exposure while working alongside experienced professionals.",
              },
              {
                icon: "solar:users-group-rounded-linear",
                title: "Collaborative Team",
                text: "Work in a supportive environment built around teamwork and shared goals.",
              },
              {
                icon: "solar:shield-check-linear",
                title: "Meaningful Work",
                text: "Contribute to work that creates real value for clients and businesses.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group border border-[#102b29]/10 bg-[#f8f7f3] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#c8a96b]/30 hover:shadow-xl"
              >

                {/* PERFECT SQUARE ICON */}
                <div className="flex h-14 w-14 items-center justify-center bg-[#102b29] transition duration-300 group-hover:bg-[#c8a96b]">

                  <Icon
                    icon={item.icon}
                    className="text-[28px] text-[#c8a96b] transition duration-300 group-hover:text-[#102b29]"
                  />

                </div>

                <h3 className="mt-6 text-lg font-bold text-[#102b29]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#102b29]/55">
                  {item.text}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* =================================================
          CURRENT OPENINGS
      ================================================= */}
      <section
        id="current-openings"
        className="px-6 py-20 sm:py-24"
      >
        <div className="mx-auto max-w-6xl">

          <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">

            <div>

              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#b08d4f]">
                Current Openings
              </p>

              <h2 className="mt-4 text-3xl font-bold text-[#102b29] sm:text-4xl">
                Find Your Next Opportunity
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-[#102b29]/60">
                Explore our current opportunities and apply
                for a position that matches your skills,
                qualifications and experience.
              </p>

            </div>

            {!loading && openJobs.length > 0 && (
              <div className="border border-[#102b29]/10 bg-white px-4 py-2 text-xs font-semibold text-[#102b29]/60">
                {openJobs.length}{" "}
                {openJobs.length === 1
                  ? "Open Position"
                  : "Open Positions"}
              </div>
            )}

          </div>

          {/* Loading */}
          {loading && (
            <div className="flex min-h-[260px] items-center justify-center border border-[#102b29]/10 bg-white">

              <div className="flex items-center gap-3 text-sm text-[#102b29]/60">

                <Loader2 className="h-5 w-5 animate-spin text-[#b08d4f]" />

                Loading current opportunities...

              </div>

            </div>
          )}

          {/* No jobs */}
          {!loading && openJobs.length === 0 && (
            <div className="border border-[#102b29]/10 bg-white px-6 py-20 text-center shadow-sm">

              <div className="mx-auto flex h-14 w-14 items-center justify-center bg-[#102b29]">
                <Icon
                  icon="solar:case-linear"
                  className="text-[28px] text-[#c8a96b]"
                />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-[#102b29]">
                No Open Positions
              </h3>

              <p className="mx-auto mt-3 max-w-xl leading-7 text-[#102b29]/55">
                There are currently no open positions.
                Please check again later for new career
                opportunities.
              </p>

            </div>
          )}

          {/* Jobs */}
          {!loading && openJobs.length > 0 && (
            <div className="grid gap-6 lg:grid-cols-2">

              {openJobs.map((job, index) => (
                <article
                  key={`${job["Job ID"] || "job"}-${index}`}
                  className="group relative overflow-hidden border border-[#102b29]/10 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8"
                >

                  <div className="absolute left-0 top-0 h-full w-1 bg-[#c8a96b]" />

                  <div className="flex items-start justify-between gap-5">

                    <div>

                      <span className="inline-flex border border-[#102b29]/10 bg-[#f8f7f3] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[#102b29]/55">
                        {job["Job ID"] || "JOB"}
                      </span>

                      <h3 className="mt-5 text-2xl font-bold tracking-tight text-[#102b29]">
                        {job.Position || "Position"}
                      </h3>

                    </div>

                    <span className="shrink-0 bg-[#e7d5ad]/35 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[#7c612e]">
                      Open
                    </span>

                  </div>

                  <div className="mt-7 grid gap-3 sm:grid-cols-2">

                    {job.Department && (
                      <div className="flex items-center gap-3 text-sm text-[#102b29]/60">

                        <div className="flex h-9 w-9 items-center justify-center bg-[#f5f2e9]">
                          <Icon
                            icon="solar:case-linear"
                            className="text-[18px] text-[#b08d4f]"
                          />
                        </div>

                        <span>{job.Department}</span>

                      </div>
                    )}

                    {job.Location && (
                      <div className="flex items-center gap-3 text-sm text-[#102b29]/60">

                        <div className="flex h-9 w-9 items-center justify-center bg-[#f5f2e9]">
                          <Icon
                            icon="solar:map-point-linear"
                            className="text-[18px] text-[#b08d4f]"
                          />
                        </div>

                        <span>{job.Location}</span>

                      </div>
                    )}

                    {job.Experience && (
                      <div className="flex items-center gap-3 text-sm text-[#102b29]/60">

                        <div className="flex h-9 w-9 items-center justify-center bg-[#f5f2e9]">
                          <Icon
                            icon="solar:clock-circle-linear"
                            className="text-[18px] text-[#b08d4f]"
                          />
                        </div>

                        <span>{job.Experience}</span>

                      </div>
                    )}

                    {job["Employment Type"] && (
                      <div className="flex items-center gap-3 text-sm text-[#102b29]/60">

                        <div className="flex h-9 w-9 items-center justify-center bg-[#f5f2e9]">
                          <Icon
                            icon="solar:briefcase-linear"
                            className="text-[18px] text-[#b08d4f]"
                          />
                        </div>

                        <span>{job["Employment Type"]}</span>

                      </div>
                    )}

                  </div>

                  {job.Description && (
                    <p className="mt-7 border-t border-[#102b29]/8 pt-6 text-sm leading-7 text-[#102b29]/55">
                      {job.Description}
                    </p>
                  )}

                  <button
                    type="button"
                    onClick={() => handleApply(job)}
                    className="group/btn mt-7 inline-flex w-full items-center justify-center gap-2 bg-[#102b29] px-5 py-3.5 text-sm font-semibold text-white transition duration-300 hover:bg-[#173b37]"
                  >
                    Apply Now

                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </button>

                </article>
              ))}

            </div>
          )}

        </div>
      </section>

      {/* =================================================
          CTA
      ================================================= */}
      <section className="px-6 pb-24 pt-2 sm:pb-28">

        <div className="mx-auto max-w-6xl">

          <div className="relative overflow-hidden bg-[#102b29] px-7 py-14 sm:px-12 sm:py-16">

            <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-[#c8a96b]/10 blur-3xl" />

            <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto]">

              <div>

                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#c8a96b]">
                  Stay Connected
                </p>

                <h2 className="mt-4 max-w-2xl text-3xl font-bold leading-tight text-white sm:text-4xl">
                  Don't see the right role?
                  <br />

                  <span className="text-[#c8a96b]">
                    Your opportunity may be next.
                  </span>
                </h2>

                <p className="mt-5 max-w-2xl leading-7 text-white/55">
                  Keep an eye on our career opportunities
                  for future openings that match your skills,
                  qualifications and professional interests.
                </p>

              </div>

              <a
                href="mailto:info@ks-company.in?subject=Career%20Enquiry"
                className="group inline-flex items-center justify-center gap-2 bg-[#c8a96b] px-7 py-4 text-sm font-bold text-[#102b29] transition hover:bg-[#d9bd7e]"
              >
                Send Your CV

                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

            </div>

          </div>

        </div>

      </section>

      {/* =================================================
          APPLICATION MODAL
          WIDER PROFESSIONAL FORM
      ================================================= */}
      {selectedJob && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto bg-[#071411]/75 px-4 py-6 backdrop-blur-md sm:py-10"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) {
              handleClose();
            }
          }}
        >

          {/* WIDER MODAL */}
          <div className="relative my-auto w-full max-w-3xl overflow-hidden bg-white shadow-2xl">

            {/* =================================================
                MODAL HEADER
            ================================================= */}
            <div className="relative overflow-hidden bg-[#102b29] px-7 pb-7 pt-7 sm:px-10">

              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#c8a96b]/10 blur-2xl" />

              <button
                type="button"
                onClick={handleClose}
                disabled={submitting || cvUploading}
                className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center bg-white/10 text-white/70 transition hover:bg-white/15 hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="relative">

                <div className="flex items-center gap-4">

                  <div className="flex h-14 w-14 shrink-0 items-center justify-center bg-[#c8a96b]/15">

                    <Icon
                      icon="solar:case-linear"
                      className="text-[28px] text-[#c8a96b]"
                    />

                  </div>

                  <div>

                    <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#c8a96b]">
                      Career Application
                    </p>

                    <h2 className="mt-1 pr-12 text-2xl font-bold text-white sm:text-3xl">
                      {selectedJob.Position}
                    </h2>

                  </div>

                </div>

                <div className="mt-5 flex flex-wrap gap-2">

                  {selectedJob.Department && (
                    <span className="bg-white/10 px-3 py-1.5 text-[11px] text-white/65">
                      {selectedJob.Department}
                    </span>
                  )}

                  {selectedJob.Location && (
                    <span className="bg-white/10 px-3 py-1.5 text-[11px] text-white/65">
                      {selectedJob.Location}
                    </span>
                  )}

                  {selectedJob["Employment Type"] && (
                    <span className="bg-white/10 px-3 py-1.5 text-[11px] text-white/65">
                      {selectedJob["Employment Type"]}
                    </span>
                  )}

                </div>

              </div>

            </div>

            {/* =================================================
                SUCCESS
            ================================================= */}
            {success ? (

              <div className="px-7 py-16 text-center sm:px-10">

                <div className="mx-auto flex h-20 w-20 items-center justify-center bg-green-50">

                  <CheckCircle2 className="h-9 w-9 text-green-600" />

                </div>

                <h3 className="mt-7 text-2xl font-bold text-[#102b29]">
                  Application Submitted
                </h3>

                <p className="mx-auto mt-3 max-w-lg leading-7 text-[#102b29]/55">
                  Thank you for applying. Your application
                  and CV have been submitted successfully.
                </p>

                <button
                  type="button"
                  onClick={handleClose}
                  className="mt-8 bg-[#102b29] px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-[#173b37]"
                >
                  Close
                </button>

              </div>

            ) : (

              /* =================================================
                 FORM
              ================================================= */
              <form
                onSubmit={handleSubmit}
                className="px-7 py-8 sm:px-10 sm:py-10"
              >

                {/* Intro */}
                <div className="mb-7 border-b border-[#102b29]/10 pb-6">

                  <h3 className="text-xl font-bold text-[#102b29]">
                    Applicant Information
                  </h3>

                  <p className="mt-1.5 text-sm text-[#102b29]/50">
                    Please provide accurate information to
                    help us review your application.
                  </p>

                </div>

                {/* Error */}
                {error && (
                  <div className="mb-6 flex items-start gap-3 border border-red-200 bg-red-50 px-4 py-3.5 text-sm text-red-700">

                    <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />

                    <span>{error}</span>

                  </div>
                )}

                {/* =================================================
                    FORM GRID
                ================================================= */}
                <div className="grid gap-x-6 gap-y-5 md:grid-cols-2">

                  {/* Full Name */}
                  <div className="md:col-span-2">

                    <label
                      htmlFor="career-name"
                      className="mb-2 block text-sm font-semibold text-[#102b29]"
                    >
                      Full Name *
                    </label>

                    <input
                      id="career-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      required
                      disabled={submitting}
                      className="w-full border border-[#102b29]/12 bg-[#faf9f6] px-4 py-3.5 text-sm text-[#102b29] outline-none transition placeholder:text-[#102b29]/30 focus:border-[#b08d4f] focus:bg-white focus:ring-4 focus:ring-[#b08d4f]/10 disabled:opacity-60"
                    />

                  </div>

                  {/* Email */}
                  <div>

                    <label
                      htmlFor="career-email"
                      className="mb-2 block text-sm font-semibold text-[#102b29]"
                    >
                      Email Address *
                    </label>

                    <input
                      id="career-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      required
                      disabled={submitting}
                      className="w-full border border-[#102b29]/12 bg-[#faf9f6] px-4 py-3.5 text-sm text-[#102b29] outline-none transition placeholder:text-[#102b29]/30 focus:border-[#b08d4f] focus:bg-white focus:ring-4 focus:ring-[#b08d4f]/10 disabled:opacity-60"
                    />

                  </div>

                  {/* Phone */}
                  <div>

                    <label
                      htmlFor="career-phone"
                      className="mb-2 block text-sm font-semibold text-[#102b29]"
                    >
                      Phone Number *
                    </label>

                    <input
                      id="career-phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter phone number"
                      required
                      disabled={submitting}
                      className="w-full border border-[#102b29]/12 bg-[#faf9f6] px-4 py-3.5 text-sm text-[#102b29] outline-none transition placeholder:text-[#102b29]/30 focus:border-[#b08d4f] focus:bg-white focus:ring-4 focus:ring-[#b08d4f]/10 disabled:opacity-60"
                    />

                  </div>

                  {/* Highest Qualification */}
                  <div>

                    <label
                      htmlFor="career-qualification"
                      className="mb-2 block text-sm font-semibold text-[#102b29]"
                    >
                      Highest Qualification *
                    </label>

                    <select
                      id="career-qualification"
                      name="qualification"
                      value={formData.qualification}
                      onChange={handleChange}
                      required
                      disabled={submitting}
                      className="w-full border border-[#102b29]/12 bg-[#faf9f6] px-4 py-3.5 text-sm text-[#102b29] outline-none transition focus:border-[#b08d4f] focus:bg-white focus:ring-4 focus:ring-[#b08d4f]/10 disabled:opacity-60"
                    >

                      <option value="">
                        Select highest qualification
                      </option>

                      <option value="10th">10th</option>
                      <option value="12th">12th</option>
                      <option value="Diploma">Diploma</option>

                      <option value="B.A.">B.A.</option>
                      <option value="B.Com">B.Com</option>
                      <option value="B.Sc.">B.Sc.</option>
                      <option value="BBA">BBA</option>
                      <option value="BCA">BCA</option>
                      <option value="B.Tech">B.Tech</option>
                      <option value="LLB">LLB</option>

                      <option value="M.A.">M.A.</option>
                      <option value="M.Com">M.Com</option>
                      <option value="M.Sc.">M.Sc.</option>
                      <option value="MBA">MBA</option>
                      <option value="MCA">MCA</option>
                      <option value="M.Tech">M.Tech</option>
                      <option value="LLM">LLM</option>

                      <option value="CA">
                        Chartered Accountant (CA)
                      </option>

                      <option value="CS">
                        Company Secretary (CS)
                      </option>

                      <option value="CMA">
                        Cost & Management Accountant (CMA)
                      </option>

                      <option value="PhD">PhD</option>

                      <option value="Other">Other</option>

                    </select>

                  </div>

                  {/* Experience */}
                  <div>

                    <label
                      htmlFor="career-experience"
                      className="mb-2 block text-sm font-semibold text-[#102b29]"
                    >
                      Professional Experience *
                    </label>

                    <select
                      id="career-experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      required
                      disabled={submitting}
                      className="w-full border border-[#102b29]/12 bg-[#faf9f6] px-4 py-3.5 text-sm text-[#102b29] outline-none transition focus:border-[#b08d4f] focus:bg-white focus:ring-4 focus:ring-[#b08d4f]/10 disabled:opacity-60"
                    >

                      <option value="">
                        Select experience
                      </option>

                      <option value="Fresher">
                        Fresher
                      </option>

                      <option value="Less than 1 Year">
                        Less than 1 Year
                      </option>

                      <option value="1–3 Years">
                        1–3 Years
                      </option>

                      <option value="3–5 Years">
                        3–5 Years
                      </option>

                      <option value="5–10 Years">
                        5–10 Years
                      </option>

                      <option value="10+ Years">
                        10+ Years
                      </option>

                    </select>

                  </div>

                  {/* =================================================
                      CV
                  ================================================= */}
                  <div className="md:col-span-2">

                    <label
                      htmlFor="career-cv"
                      className="mb-2 block text-sm font-semibold text-[#102b29]"
                    >
                      Resume / CV *
                    </label>

                    <label
                      htmlFor="career-cv"
                      className={`group flex min-h-[150px] cursor-pointer flex-col items-center justify-center border-2 border-dashed px-5 py-7 text-center transition ${
                        cvFile
                          ? "border-green-500 bg-green-50"
                          : "border-[#102b29]/12 bg-[#faf9f6] hover:border-[#b08d4f] hover:bg-[#fbf8f0]"
                      } ${
                        submitting || cvUploading
                          ? "pointer-events-none opacity-60"
                          : ""
                      }`}
                    >

                      {cvFile ? (

                        <>
                          <div className="flex h-12 w-12 items-center justify-center bg-green-100">

                            <FileText className="h-6 w-6 text-green-600" />

                          </div>

                          <p className="mt-4 max-w-full truncate px-4 text-sm font-semibold text-[#102b29]">
                            {cvFile.name}
                          </p>

                          <p className="mt-1 text-xs text-[#102b29]/45">
                            {(cvFile.size / 1024 / 1024).toFixed(2)} MB
                          </p>

                          <p className="mt-2 text-xs font-semibold text-green-600">
                            PDF selected successfully
                          </p>

                        </>

                      ) : (

                        <>
                          <div className="flex h-14 w-14 items-center justify-center bg-[#102b29] transition group-hover:bg-[#c8a96b]">

                            <Upload className="h-6 w-6 text-[#c8a96b] transition group-hover:text-[#102b29]" />

                          </div>

                          <p className="mt-4 text-sm font-semibold text-[#102b29]">
                            Upload your CV
                          </p>

                          <p className="mt-1 text-xs text-[#102b29]/45">
                            PDF format only • Maximum 5 MB
                          </p>

                        </>

                      )}

                    </label>

                    <input
                      id="career-cv"
                      type="file"
                      accept="application/pdf,.pdf"
                      onChange={handleCvChange}
                      disabled={submitting || cvUploading}
                      className="hidden"
                    />

                  </div>

                </div>

                {/* Upload status */}
                {cvUploading && (
                  <div className="mt-6 flex items-center gap-3 border border-[#c8a96b]/25 bg-[#fbf8f0] px-4 py-3.5">

                    <Loader2 className="h-5 w-5 animate-spin text-[#b08d4f]" />

                    <div>

                      <p className="text-sm font-semibold text-[#102b29]">
                        Uploading your CV...
                      </p>

                      <p className="mt-0.5 text-xs text-[#102b29]/50">
                        Please keep this window open.
                      </p>

                    </div>

                  </div>
                )}

                {/* Submit */}
                <div className="mt-7 border-t border-[#102b29]/10 pt-6">

                  <button
                    type="submit"
                    disabled={submitting || cvUploading}
                    className="group flex w-full items-center justify-center gap-2 bg-[#102b29] px-5 py-4 text-sm font-bold text-white shadow-lg shadow-[#102b29]/10 transition duration-300 hover:bg-[#173b37] disabled:cursor-not-allowed disabled:opacity-60"
                  >

                    {submitting ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />

                        {cvUploading
                          ? "Uploading CV..."
                          : "Submitting Application..."}
                      </>
                    ) : (
                      <>
                        Submit Application

                        <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}

                  </button>

                  <p className="mt-4 text-center text-[11px] leading-5 text-[#102b29]/40">
                    By submitting this application, you confirm
                    that the information provided is accurate.
                  </p>

                </div>

              </form>
            )}

          </div>
        </div>
      )}

    </main>
  );
};

export default Career;