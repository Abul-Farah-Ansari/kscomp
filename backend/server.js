import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

// ==================================================
// ENVIRONMENT CHECK
// ==================================================

console.log("=================================");
console.log("KS & COMPANY BACKEND");
console.log("=================================");

console.log("SMTP_HOST:", !!process.env.SMTP_HOST);
console.log("SMTP_PORT:", !!process.env.SMTP_PORT);
console.log("SMTP_USER:", !!process.env.SMTP_USER);
console.log("SMTP_PASSWORD:", !!process.env.SMTP_PASSWORD);
console.log("MAIL_FROM:", !!process.env.MAIL_FROM);
console.log("MAIL_TO:", !!process.env.MAIL_TO);

console.log("=================================");

// ==================================================
// MIDDLEWARE
// ==================================================

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

// ==================================================
// SMTP TRANSPORTER
// ==================================================

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 465,

  // Port 465 = SSL
  secure: true,

  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },

  // Prevent the request from hanging for a long time
  connectionTimeout: 10000,
  greetingTimeout: 10000,
  socketTimeout: 15000,
});

// ==================================================
// TEST SMTP CONNECTION
// ==================================================

transporter.verify((error) => {
  if (error) {
    console.error("=================================");
    console.error("SMTP CONNECTION FAILED");
    console.error("=================================");
    console.error(error.message);
    console.error("=================================");
  } else {
    console.log("SMTP server is ready.");
  }
});

// ==================================================
// HEALTH CHECK
// ==================================================

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "KS & Company backend is running.",
  });
});

// ==================================================
// CONTACT FORM
// ==================================================

app.post("/api/contact", async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      service,
      subject,
      message,
    } = req.body;

    // ==================================================
    // VALIDATION
    // ==================================================

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Name, email and message are required.",
      });
    }

    // ==================================================
    // BASIC EMAIL VALIDATION
    // ==================================================

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email address.",
      });
    }

    // ==================================================
    // SEND EMAIL
    // ==================================================

    console.log("---------------------------------");
    console.log("New enquiry received");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Phone:", phone || "Not provided");
    console.log("Service:", service || "Not selected");
    console.log("---------------------------------");

    await transporter.sendMail({
      from: `"KS & Company Website" <${process.env.MAIL_FROM}>`,

      to: process.env.MAIL_TO,

      replyTo: email,

      subject:
        subject ||
        `New Website Enquiry - ${service || "General"} - ${name}`,

      // ==================================================
      // PLAIN TEXT EMAIL
      // ==================================================

      text: `
KS & COMPANY
NEW WEBSITE ENQUIRY

Name:
${name}

Email:
${email}

Phone:
${phone || "Not provided"}

Service:
${service || "Not selected"}

Subject:
${subject || "Not provided"}

Message:
${message}

---------------------------------

This enquiry was submitted through the KS & Company website.
      `,

      // ==================================================
      // HTML EMAIL
      // ==================================================

      html: `
<!DOCTYPE html>

<html>

<head>

<meta charset="UTF-8">

<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>KS & Company Enquiry</title>

</head>

<body style="
  margin:0;
  padding:0;
  background:#f5f3ee;
  font-family:Arial,Helvetica,sans-serif;
">

<div style="
  max-width:650px;
  margin:30px auto;
  background:#f5f3ee;
  padding:25px;
">

  <!-- HEADER -->

  <div style="
    background:#102b29;
    padding:30px 20px;
    text-align:center;
  ">

    <h1 style="
      margin:0;
      color:#c5a15b;
      font-size:25px;
      letter-spacing:3px;
      font-weight:600;
    ">
      KS &amp; COMPANY
    </h1>

    <p style="
      margin:10px 0 0;
      color:#ffffff;
      font-size:13px;
      letter-spacing:2px;
    ">
      NEW WEBSITE ENQUIRY
    </p>

  </div>

  <!-- CONTENT -->

  <div style="
    background:#ffffff;
    padding:30px;
  ">

    <p style="
      margin:0 0 25px;
      color:#334544;
      font-size:15px;
      line-height:1.6;
    ">
      A new enquiry has been submitted through the
      KS &amp; Company website.
    </p>

    <!-- NAME -->

    <div style="
      padding:15px 0;
      border-bottom:1px solid #e5e5e5;
    ">

      <div style="
        font-size:10px;
        color:#8a9897;
        letter-spacing:1.5px;
        text-transform:uppercase;
        margin-bottom:6px;
      ">
        Name
      </div>

      <div style="
        font-size:15px;
        color:#102b29;
      ">
        ${name}
      </div>

    </div>

    <!-- EMAIL -->

    <div style="
      padding:15px 0;
      border-bottom:1px solid #e5e5e5;
    ">

      <div style="
        font-size:10px;
        color:#8a9897;
        letter-spacing:1.5px;
        text-transform:uppercase;
        margin-bottom:6px;
      ">
        Email
      </div>

      <div style="
        font-size:15px;
        color:#102b29;
      ">
        ${email}
      </div>

    </div>

    <!-- PHONE -->

    <div style="
      padding:15px 0;
      border-bottom:1px solid #e5e5e5;
    ">

      <div style="
        font-size:10px;
        color:#8a9897;
        letter-spacing:1.5px;
        text-transform:uppercase;
        margin-bottom:6px;
      ">
        Phone
      </div>

      <div style="
        font-size:15px;
        color:#102b29;
      ">
        ${phone || "Not provided"}
      </div>

    </div>

    <!-- SERVICE -->

    <div style="
      padding:15px 0;
      border-bottom:1px solid #e5e5e5;
    ">

      <div style="
        font-size:10px;
        color:#8a9897;
        letter-spacing:1.5px;
        text-transform:uppercase;
        margin-bottom:6px;
      ">
        Service
      </div>

      <div style="
        font-size:15px;
        color:#102b29;
      ">
        ${service || "Not selected"}
      </div>

    </div>

    <!-- SUBJECT -->

    <div style="
      padding:15px 0;
      border-bottom:1px solid #e5e5e5;
    ">

      <div style="
        font-size:10px;
        color:#8a9897;
        letter-spacing:1.5px;
        text-transform:uppercase;
        margin-bottom:6px;
      ">
        Subject
      </div>

      <div style="
        font-size:15px;
        color:#102b29;
      ">
        ${subject || "Not provided"}
      </div>

    </div>

    <!-- MESSAGE -->

    <div style="
      padding-top:25px;
    ">

      <div style="
        font-size:10px;
        color:#8a9897;
        letter-spacing:1.5px;
        text-transform:uppercase;
        margin-bottom:10px;
      ">
        Your Query
      </div>

      <div style="
        background:#f5f3ee;
        padding:18px;
        color:#102b29;
        font-size:15px;
        line-height:1.7;
        white-space:pre-line;
      ">
        ${message}
      </div>

    </div>

  </div>

  <!-- FOOTER -->

  <div style="
    text-align:center;
    padding:20px 10px;
    color:#8a9897;
    font-size:11px;
    line-height:1.6;
  ">

    This enquiry was submitted through the
    KS &amp; Company website.

  </div>

</div>

</body>

</html>
      `,
    });

    // ==================================================
    // SUCCESS
    // ==================================================

    console.log("Email sent successfully.");

    return res.status(200).json({
      success: true,
      message:
        "Your enquiry has been sent successfully.",
    });

  } catch (error) {

    console.error("---------------------------------");
    console.error("EMAIL SENDING ERROR");
    console.error("---------------------------------");
    console.error(error);
    console.error("---------------------------------");

    return res.status(500).json({
      success: false,
      message:
        "Unable to send your enquiry. Please try again later.",
    });
  }
});

// ==================================================
// START SERVER
// ==================================================

app.listen(PORT, "0.0.0.0", () => {
  console.log(
    `KS & Company backend running on port ${PORT}`
  );
});