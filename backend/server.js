import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

// --------------------------------------------------
// LOAD ENVIRONMENT VARIABLES
// --------------------------------------------------

dotenv.config();

// Debug - only tells whether variables exist.
// It does NOT print your password.
console.log("SMTP_USER loaded:", !!process.env.SMTP_USER);
console.log("SMTP_PASSWORD loaded:", !!process.env.SMTP_PASSWORD);
console.log("SMTP_HOST loaded:", !!process.env.SMTP_HOST);
console.log("SMTP_PORT loaded:", !!process.env.SMTP_PORT);
console.log("MAIL_FROM loaded:", !!process.env.MAIL_FROM);
console.log("MAIL_TO loaded:", !!process.env.MAIL_TO);

// --------------------------------------------------
// APP
// --------------------------------------------------

const app = express();

const PORT = process.env.PORT || 5000;

// --------------------------------------------------
// MIDDLEWARE
// --------------------------------------------------

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
      "https://kscomp.vercel.app",
    ],
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use(express.json());

// --------------------------------------------------
// CHECK REQUIRED ENVIRONMENT VARIABLES
// --------------------------------------------------

const requiredEnv = [
  "SMTP_HOST",
  "SMTP_PORT",
  "SMTP_USER",
  "SMTP_PASSWORD",
  "MAIL_FROM",
  "MAIL_TO",
];

const missingEnv = requiredEnv.filter(
  (key) => !process.env[key]
);

if (missingEnv.length > 0) {
  console.error(
    "Missing environment variables:",
    missingEnv.join(", ")
  );
}

// --------------------------------------------------
// SMTP TRANSPORTER
// --------------------------------------------------

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 465),
  secure: Number(process.env.SMTP_PORT || 465) === 465,

  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

// --------------------------------------------------
// TEST SMTP CONNECTION
// --------------------------------------------------

transporter.verify((error) => {
  if (error) {
    console.error("SMTP connection failed:");
    console.error(error.message);
  } else {
    console.log("SMTP server is ready.");
  }
});

// --------------------------------------------------
// HOME ROUTE
// --------------------------------------------------

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "KS & Company backend is running.",
  });
});

// --------------------------------------------------
// CONTACT FORM
// --------------------------------------------------

app.post("/api/contact", async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      subject,
      message,
    } = req.body;

    // ----------------------------------------------
    // VALIDATION
    // ----------------------------------------------

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message:
          "Name, email and message are required.",
      });
    }

    // ----------------------------------------------
    // SEND EMAIL
    // ----------------------------------------------

    await transporter.sendMail({
      from: `"KS & Company Website" <${process.env.MAIL_FROM}>`,

      to: process.env.MAIL_TO,

      replyTo: email,

      subject:
        subject ||
        `New Website Enquiry from ${name}`,

      text: `
New enquiry received from KS & Company website.

Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}
Subject: ${subject || "Not provided"}

Message:
${message}
      `,

      html: `
        <div style="
          font-family: Arial, sans-serif;
          max-width: 650px;
          margin: auto;
          padding: 30px;
          background: #f5f3ee;
          color: #102b29;
        ">

          <!-- HEADER -->

          <div style="
            background: #102b29;
            padding: 28px;
            text-align: center;
          ">

            <h2 style="
              margin: 0;
              color: #c5a15b;
              letter-spacing: 3px;
              font-size: 24px;
            ">
              KS &amp; COMPANY
            </h2>

            <p style="
              margin: 10px 0 0;
              color: #ffffff;
              font-size: 13px;
              letter-spacing: 1.5px;
            ">
              NEW WEBSITE ENQUIRY
            </p>

          </div>

          <!-- CONTENT -->

          <div style="
            background: #ffffff;
            padding: 30px;
            margin-top: 2px;
          ">

            <p style="
              margin-top: 0;
              font-size: 15px;
              color: #102b29;
            ">
              A new enquiry has been submitted through the
              KS &amp; Company website.
            </p>

            <!-- NAME -->

            <div style="
              margin-top: 25px;
              padding-bottom: 15px;
              border-bottom: 1px solid #e5e5e5;
            ">

              <div style="
                font-size: 11px;
                color: #999;
                text-transform: uppercase;
                letter-spacing: 1px;
                margin-bottom: 5px;
              ">
                Name
              </div>

              <div style="
                font-size: 15px;
                color: #102b29;
              ">
                ${name}
              </div>

            </div>

            <!-- EMAIL -->

            <div style="
              padding: 15px 0;
              border-bottom: 1px solid #e5e5e5;
            ">

              <div style="
                font-size: 11px;
                color: #999;
                text-transform: uppercase;
                letter-spacing: 1px;
                margin-bottom: 5px;
              ">
                Email
              </div>

              <div style="
                font-size: 15px;
                color: #102b29;
              ">
                ${email}
              </div>

            </div>

            <!-- PHONE -->

            <div style="
              padding: 15px 0;
              border-bottom: 1px solid #e5e5e5;
            ">

              <div style="
                font-size: 11px;
                color: #999;
                text-transform: uppercase;
                letter-spacing: 1px;
                margin-bottom: 5px;
              ">
                Phone
              </div>

              <div style="
                font-size: 15px;
                color: #102b29;
              ">
                ${phone || "Not provided"}
              </div>

            </div>

            <!-- SUBJECT -->

            <div style="
              padding: 15px 0;
              border-bottom: 1px solid #e5e5e5;
            ">

              <div style="
                font-size: 11px;
                color: #999;
                text-transform: uppercase;
                letter-spacing: 1px;
                margin-bottom: 5px;
              ">
                Subject
              </div>

              <div style="
                font-size: 15px;
                color: #102b29;
              ">
                ${subject || "Not provided"}
              </div>

            </div>

            <!-- MESSAGE -->

            <div style="
              padding-top: 25px;
            ">

              <div style="
                font-size: 11px;
                color: #999;
                text-transform: uppercase;
                letter-spacing: 1px;
                margin-bottom: 10px;
              ">
                Message
              </div>

              <div style="
                background: #f5f3ee;
                padding: 18px;
                font-size: 15px;
                line-height: 1.7;
                color: #102b29;
                white-space: pre-line;
              ">
                ${message}
              </div>

            </div>

          </div>

          <!-- FOOTER -->

          <div style="
            text-align: center;
            padding: 20px 10px;
            font-size: 11px;
            color: #888;
          ">

            This enquiry was submitted through the
            KS &amp; Company website.

          </div>

        </div>
      `,
    });

    // ----------------------------------------------
    // SUCCESS RESPONSE
    // ----------------------------------------------

    return res.status(200).json({
      success: true,
      message:
        "Your enquiry has been sent successfully.",
    });

  } catch (error) {
    console.error("Email sending error:");
    console.error(error);

    return res.status(500).json({
      success: false,
      message:
        "Unable to send your enquiry. Please try again later.",
    });
  }
});

// --------------------------------------------------
// START SERVER
// --------------------------------------------------

app.listen(PORT, "0.0.0.0", () => {
  console.log(
    `KS & Company backend running on port ${PORT}`
  );
});