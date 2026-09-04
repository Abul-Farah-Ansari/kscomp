import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

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
    ],
    methods: ["GET", "POST"],
  })
);

app.use(express.json());

// --------------------------------------------------
// SMTP TRANSPORTER
// --------------------------------------------------

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true, // SSL because SMTP port is 465

  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

// --------------------------------------------------
// TEST SMTP CONNECTION
// --------------------------------------------------

transporter.verify((error, success) => {
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
        message: "Name, email and message are required.",
      });
    }

    // ----------------------------------------------
    // EMAIL TO KS & COMPANY
    // ----------------------------------------------

    await transporter.sendMail({
      from: `"KS & Company" <${process.env.MAIL_FROM}>`,

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

          <div style="
            background: #102b29;
            padding: 25px;
            text-align: center;
          ">
            <h2 style="
              margin: 0;
              color: #c5a15b;
              letter-spacing: 2px;
            ">
              KS &amp; COMPANY
            </h2>

            <p style="
              margin: 8px 0 0;
              color: #ffffff;
              font-size: 13px;
              letter-spacing: 1px;
            ">
              NEW APPOINTMENT REQUEST
            </p>
          </div>

          <div style="
            background: #ffffff;
            padding: 25px;
            margin-top: 2px;
          ">

            <p>
              <strong>Name:</strong>
              ${name}
            </p>

            <p>
              <strong>Email:</strong>
              ${email}
            </p>

            <p>
              <strong>Phone:</strong>
              ${phone || "Not provided"}
            </p>

            <p>
              <strong>Subject:</strong>
              ${subject || "Not provided"}
            </p>

            <hr style="
              border: none;
              border-top: 1px solid #ddd;
              margin: 25px 0;
            " />

            <p>
              <strong>Message:</strong>
            </p>

            <p style="
              line-height: 1.7;
              white-space: pre-line;
            ">
              ${message}
            </p>

          </div>

          <p style="
            text-align: center;
            font-size: 12px;
            color: #777;
            margin-top: 20px;
          ">
            This enquiry was submitted through the
            KS &amp; Company website.
          </p>

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

app.listen(PORT, () => {
  console.log(
    `KS & Company backend running on port ${PORT}`
  );
});