import {
  FiBarChart2,
  FiCode,
  FiCpu,
  FiGlobe,
  FiLayout,
  FiLifeBuoy,
  FiMonitor,
  FiSearch,
  FiShield,
  FiSmartphone,
  FiZap
} from "react-icons/fi";
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

export const services = [
  { title: "Business Websites", icon: FiGlobe, copy: "Trust-building websites that explain your offer clearly and turn visitors into leads." },
  { title: "Portfolio Websites", icon: FiMonitor, copy: "Sharp personal and brand portfolios with fast loading, responsive layouts, and clean storytelling." },
  { title: "Admin Dashboards", icon: FiBarChart2, copy: "Practical dashboards for managing data, reports, users, workflows, and daily operations." },
  { title: "Landing Pages", icon: FiLayout, copy: "Focused pages for launches, campaigns, services, and lead generation." },
  { title: "Responsive Design", icon: FiSmartphone, copy: "Layouts that feel polished on mobile, tablet, laptop, and large displays." },
  { title: "Website Maintenance", icon: FiLifeBuoy, copy: "Ongoing updates, improvements, bug fixes, and performance care." },
  { title: "Full Stack MERN Applications", icon: FiCpu, copy: "MongoDB, Express, React, and Node apps with clean APIs and scalable structure." }
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

export const reasons = [
  { title: "Fast Delivery", icon: FiZap },
  { title: "Responsive Design", icon: FiSmartphone },
  { title: "Modern UI", icon: FiLayout },
  { title: "SEO Friendly", icon: FiSearch },
  { title: "Scalable Backend", icon: FiCode },
  { title: "Client Support", icon: FiShield }
];

export const testimonials = [
  {
    name: "Omkar Kothavale",
    role: "Owner, SHIVAM STONE CRUSHER",
    quote: "Arya understood our workflow quickly and delivered a clean, responsive website that made daily management easier. Huge shoutout to Arya for delivering an incredible website! He perfectly captured what I was looking for, and the user experience is top-notch. The process was smooth, and he was highly professional throughout. Highly recommend!"
  },
  {
    name: "Tohir Jamadar",
    role: "Owner, JAMADAR WHOLESALERS",
    quote: "I am very impressed with the website and system developed for my business. It helps us automatically pack customer orders with almost zero mistakes, which has improved our work speed and customer satisfaction a lot. Arya is always available for support whenever needed. The website is smooth, user-friendly, and very reliable for daily business operations. Highly recommended for anyone looking for smart business automation solutions!"
  }
];
