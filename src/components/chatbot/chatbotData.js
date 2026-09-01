export const chatbotData = {
  company: {
    name: "KS & Company",
    tagline: "Chartered Accountants",
    description:
      "KS & Company provides professional support for taxation, accounting, registrations, compliance, documentation, insurance and financial services.",
  },

  quickQuestions: [
    "What services do you provide?",
    "Taxation services",
    "Loan services",
    "Insurance services",
    "Company registration",
    "How can I book an appointment?",
  ],

  services: [
    {
      category: "Taxation Services",
      keywords: [
        "tax",
        "taxation",
        "itr",
        "income tax",
        "gst",
        "tds",
        "tcs",
        "epf",
        "esic",
      ],
      description:
        "We provide professional taxation and statutory return filing support.",
      items: [
        "ITR (Income Tax Return)",
        "GST Registration",
        "GST Return Filing",
        "TDS Return Filing",
        "TCS Return Filing",
        "EPF Return Filing",
        "ESIC Return Filing",
      ],
    },

    {
      category: "Accounting Services",
      keywords: [
        "accounting",
        "bookkeeping",
        "accounts",
        "balance sheet",
        "profit",
        "invoice",
        "banking",
      ],
      description:
        "We provide organized accounting and bookkeeping support for businesses.",
      items: [
        "Bookkeeping",
        "Banking Entry",
        "Account Receivable",
        "Account Payable",
        "Sales Invoice",
        "Credit Note",
        "Purchase Invoice",
        "Debit Note",
        "Profit & Loss Account",
        "Balance Sheet",
      ],
    },

    {
      category: "Registration Services",
      keywords: [
        "registration",
        "company registration",
        "msme",
        "udyam",
        "fssai",
        "food license",
        "iec",
        "trademark",
        "llp",
        "opc",
      ],
      description:
        "We assist individuals and businesses with registrations and statutory documentation.",
      items: [
        "Company Registration",
        "Proprietorship Firm",
        "Partnership Firm",
        "Private Limited Company",
        "LLP (Limited Liability Partnership)",
        "One Person Company (OPC) Pvt. Ltd.",
        "UDYAM / MSME Registration",
        "FSSAI / Food License",
        "Import Export Code (IEC)",
        "Trademark Registration",
      ],
    },

    {
      category: "HR Compliance Services",
      keywords: [
        "hr",
        "salary",
        "salary slip",
        "esi",
        "epf compliance",
        "form a",
        "form b",
      ],
      description:
        "We provide support for payroll and HR-related statutory compliance.",
      items: [
        "Salary Sheet",
        "Salary Slip",
        "ESI Compliance",
        "EPF Compliance",
        "Form A, B, C, D and Others",
      ],
    },

    {
      category: "Other Compliance Services",
      keywords: [
        "15ca",
        "15cb",
        "foreign transaction",
        "project report",
        "cash credit",
        "cc",
        "compliance",
      ],
      description:
        "We provide support for specialized compliance and financial documentation.",
      items: [
        "15CA & 15CB for Foreign Transactions",
        "Project Report for Loan",
        "Project Report for Cash Credit (CC)",
      ],
    },

    {
      category: "Government & Documentation Services",
      keywords: [
        "pan",
        "tan",
        "dsc",
        "passport",
        "aadhaar",
        "government",
        "documentation",
      ],
      description:
        "We assist with important government applications and documentation services.",
      items: [
        "PAN Card (New / Correction)",
        "TAN Card (New / Correction)",
        "Digital Signature Certificate (DSC)",
        "Passport Apply Online",
        "PAN-Aadhaar Linking",
      ],
    },

    {
      category: "Insurance Services",
      keywords: [
        "insurance",
        "vehicle insurance",
        "health insurance",
        "life insurance",
        "marine insurance",
        "home insurance",
        "property insurance",
      ],
      description:
        "We provide assistance across multiple insurance categories.",
      items: [
        "Vehicle Insurance",
        "Health Insurance",
        "Life Insurance",
        "Marine Insurance",
        "Home / Property Insurance",
      ],
    },

    {
      category: "Finance & Loan Services",
      keywords: [
        "loan",
        "finance",
        "personal loan",
        "business loan",
        "home loan",
        "lap",
        "credit card",
        "saving account",
      ],
      description:
        "We provide assistance with financial products and loan-related services.",
      items: [
        "Saving Account",
        "Personal Loan",
        "Business Loan",
        "Home Loan",
        "Loan Against Property (LAP)",
        "Credit Card",
      ],
    },
  ],

  commonAnswers: [
    {
      keywords: ["hello", "hi", "hey", "hii"],
      answer:
        "Hello! 👋 Welcome to KS & Company. I can help you explore our professional services, registrations, taxation, insurance and finance solutions.",
    },

    {
      keywords: ["services", "what do you do", "provide"],
      answer:
        "KS & Company provides Taxation, Accounting, Registration, HR Compliance, Other Compliance, Government Documentation, Insurance and Finance services.",
    },

    {
      keywords: [
        "appointment",
        "book appointment",
        "consultation",
        "consultant",
        "meeting",
      ],
      answer:
        "You can schedule a consultation directly through our appointment page. Our team will assist you with the appropriate professional service.",
      action: {
        label: "Schedule Appointment",
        link: "/appointment",
      },
    },

    {
      keywords: ["contact", "reach", "call", "email"],
      answer:
        "You can contact KS & Company through our Contact page and submit your enquiry directly to our team.",
      action: {
        label: "Contact Us",
        link: "/contact",
      },
    },

    {
      keywords: ["privacy", "privacy policy"],
      answer:
        "You can review our Privacy Policy for information about how website information and enquiries are handled.",
      action: {
        label: "View Privacy Policy",
        link: "/privacy-policy",
      },
    },

    {
      keywords: ["documents", "gst certificate", "msme certificate", "brochure"],
      answer:
        "Our company documents and resources include important business information such as the company brochure, GST details and MSME-related documentation.",
      action: {
        label: "Company Documents",
        link: "/company-documents",
      },
    },
  ],
};