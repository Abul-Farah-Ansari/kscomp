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
console.log("Environment variables:");
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
    methods: ["GET", "POST", "OPTIONS"],
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

  // Prevent the request from hanging forever
  connectionTimeout: 10000,
  greetingTimeout: 10000,
  socketTimeout: 15000,
});

// ==================================================
// TEST SMTP CONNECTION
// ==================================================

transporter.verify((error) => {
  if (error) {
    console.error("❌ SMTP connection failed:");
    console.error(error.message);
  } else {
    console.log("✅ SMTP server is ready.");
  }
});

// ==================================================
// HOME / HEALTH ROUTE
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
  console.log("=================================");
  console.log("📩 New contact form request");
  console.log("=================================");

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
      console.log("❌ Validation failed");

      return res.status(400).json({
        success: false,
        message: "Name, email and message are required.",
      });
    }

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Phone:", phone || "Not provided");
    console.log("Subject:", subject || "Not provided");

    // ----------------------------------------------
    // EMAIL CONTENT
    // ----------------------------------------------

    const mailOptions = {
      from: `"KS & Company Website" <${process.env.MAIL_FROM}>`,

      to: process.env.MAIL_TO,

      replyTo: email,

      subject:
        subject?.trim() ||
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
<!DOCTYPE html>

<html>
<head>
  <meta charset="UTF-8" />

  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
  />

  <title>KS & Company Enquiry</title>
</head>

<body
  style="
    margin:0;
    padding:0;
    background:#f5f3ee;
    font-family:Arial,Helvetica,sans-serif;
  "
>

  <div
    style="
      max-width:650px;
      margin:30px auto;
      background:#f5f3ee;
      padding:25px;
    "
  >

    <!-- HEADER -->

    <div
      style="
        background:#102b29;
        padding:30px 20px;
        text-align:center;
      "
    >

      <h1
        style="
          margin:0;
          color:#c5a15b;
          font-size:25px;
          letter-spacing:3px;
        "
      >
        KS &amp; COMPANY
      </h1>

      <p
        style="
          margin:10px 0 0;
          color:#ffffff;
          font-size:13px;
          letter-spacing:1.5px;
        "
      >
        NEW WEBSITE ENQUIRY
      </p>

    </div>

    <!-- CONTENT -->

    <div
      style="
        background:#ffffff;
        padding:30px;
      "
    >

      <p
        style="
          margin-top:0;
          color:#102b29;
          font-size:15px;
          line-height:1.6;
        "
      >
        A new enquiry has been submitted through the
        KS &amp; Company website.
      </p>


      <!-- NAME -->

      <div
        style="
          margin-top:25px;
          padding-bottom:15px;
          border-bottom:1px solid #e5e5e5;
        "
      >

        <div
          style="
            color:#999999;
            font-size:11px;
            letter-spacing:1px;
            text-transform:uppercase;
            margin-bottom:6px;
          "
        >
          Name
        </div>

        <div
          style="
            color:#102b29;
            font-size:15px;
          "
        >
          ${name}
        </div>

      </div>


      <!-- EMAIL -->

      <div
        style="
          padding:15px 0;
          border-bottom:1px solid #e5e5e5;
        "
      >

        <div
          style="
            color:#999999;
            font-size:11px;
            letter-spacing:1px;
            text-transform:uppercase;
            margin-bottom:6px;
          "
        >
          Email
        </div>

        <div
          style="
            color:#102b29;
            font-size:15px;
          "
        >
          ${email}
        </div>

      </div>


      <!-- PHONE -->

      <div
        style="
          padding:15px 0;
          border-bottom:1px solid #e5e5e5;
        "
      >

        <div
          style="
            color:#999999;
            font-size:11px;
            letter-spacing:1px;
            text-transform:uppercase;
            margin-bottom:6px;
          "
        >
          Phone
        </div>

        <div
          style="
            color:#102b29;
            font-size:15px;
          "
        >
          ${phone || "Not provided"}
        </div>

      </div>


      <!-- SUBJECT -->

      <div
        style="
          padding:15px 0;
          border-bottom:1px solid #e5e5e5;
        "
      >

        <div
          style="
            color:#999999;
            font-size:11px;
            letter-spacing:1px;
            text-transform:uppercase;
            margin-bottom:6px;
          "
        >
          Subject
        </div>

        <div
          style="
            color:#102b29;
            font-size:15px;
          "
        >
          ${subject || "Not provided"}
        </div>

      </div>


      <!-- MESSAGE -->

      <div
        style="
          padding-top:25px;
        "
      >

        <div
          style="
            color:#999999;
            font-size:11px;
            letter-spacing:1px;
            text-transform:uppercase;
            margin-bottom:10px;
          "
        >
          Message
        </div>

        <div
          style="
            background:#f5f3ee;
            padding:18px;
            color:#102b29;
            font-size:15px;
            line-height:1.7;
            white-space:pre-line;
          "
        >
          ${message}
        </div>

      </div>

    </div>


    <!-- FOOTER -->

    <div
      style="
        padding:20px 10px;
        text-align:center;
        color:#888888;
        font-size:11px;
      "
    >
      This enquiry was submitted through the
      KS &amp; Company website.
    </div>

  </div>

</body>
</html>
      `,
    };

    // ----------------------------------------------
    // SEND EMAIL
    // ----------------------------------------------

    console.log("📤 Sending email...");

    const info = await transporter.sendMail(mailOptions);

    console.log("✅ Email sent successfully.");
    console.log("Message ID:", info.messageId);

    // ----------------------------------------------
    // SUCCESS
    // ----------------------------------------------

    return res.status(200).json({
      success: true,
      message: "Your enquiry has been sent successfully.",
    });

  } catch (error) {

    console.error("=================================");
    console.error("❌ EMAIL SENDING ERROR");
    console.error("=================================");
    console.error(error);
    console.error("Message:", error.message);

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
  console.log("---------------------------------");
  console.log(
    `KS & Company backend running on port ${PORT}`
  );
  console.log("---------------------------------");
});