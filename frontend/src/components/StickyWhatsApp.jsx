import { FaWhatsapp } from "react-icons/fa";

export default function StickyWhatsApp() {
  return (
    <a
      href="https://wa.me/918766952102"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="focus-ring fixed bottom-4 right-4 z-[60] inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-3xl text-white shadow-[0_18px_42px_rgba(22,163,74,0.34)] transition duration-300 hover:-translate-y-1 hover:bg-[#1ebe5d] sm:bottom-6 sm:right-6 sm:h-16 sm:w-16"
    >
      <FaWhatsapp aria-hidden="true" />
    </a>
  );
}
