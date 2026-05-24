import ramadarLaptop from "../assets/projects/ramadar-laptop.png";
import ramadarMobile from "../assets/projects/ramadar-mobile.jpeg";
import shivamLaptop from "../assets/projects/shivam-laptop.png";
import shivamMobile from "../assets/projects/shivam-mobile.jpeg";

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Certifications", href: "#certifications" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" }
];

export const projects = [
  {
    title: "SHIVAM STONE CRUSHER",
    subtitle: "Management System",
    description: "A full-stack web application for managing day-to-day stone crusher business operations, replacing manual diary work with a clean digital workflow for entries, payments, salary records, and reports.",
    features: [
      "Daily entry and customer transaction management",
      "Customer name search with editable records",
      "Paid and unpaid payment tracking",
      "Trash recovery and dashboard summaries",
      "Weekly, monthly, and yearly business reports",
      "PIN-based authentication with responsive screens"
    ],
    stack: ["Node.js", "Express.js", "MongoDB", "Mongoose", "EJS", "HTML", "CSS", "JavaScript"],
    live: "#contact",
    github: "#contact",
    accent: "from-primary via-secondary to-blue-400",
    screenshots: {
      laptop: shivamLaptop,
      mobile: shivamMobile
    }
  },
  {
    title: "JAMADAR WHOLESALERS",
    subtitle: "ScanApp - Warehouse Packing PWA",
    description: "A mobile-first Progressive Web App built for Jamadar Wholesalers to help wholesale grocery packing teams upload Vyapar invoice PDFs, extract invoice items, and turn them into barcode-trackable packing orders.",
    features: [
      "PDF invoice upload and automatic item extraction",
      "Barcode scanning",
      "Real-time order packing progress",
      "Pending and completed order management",
      "Product and barcode mapping",
      "Order sequence and priority controls",
      "Trash restore and mobile-first PWA experience"
    ],
    stack: ["Next.js", "React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Mongoose", "pdf-parse", "html5-qrcode"],
    live: "#contact",
    github: "#contact",
    accent: "from-accent via-sky-400 to-primary",
    screenshots: {
      laptop: ramadarLaptop,
      mobile: ramadarMobile
    }
  }
];

export const testimonials = [
  {
    name: "Omkar Kothavale",
    role: "Owner, SHIVAM STONE CRUSHER",
    quote: "Arya delivered a clean, responsive website that made daily management easier. Huge shoutout to Arya for delivering an incredible website! He was highly professional throughout the entire process. Highly recommended!"
  },
  {
    name: "Tohir Jamadar",
    role: "Owner, JAMADAR WHOLESALERS",
    quote: "I am very impressed with the website and system developed for my business. It helps us pack customer orders automatically with almost zero mistakes, which has greatly improved our work speed and customer satisfaction. The website is smooth, user-friendly, and very reliable for daily business operations. Highly recommended for anyone looking for smart business automation solutions!"
  }
];
