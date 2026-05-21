import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { navLinks } from "../data/siteData.js";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -28, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55 }}
      className={`fixed inset-x-0 top-0 z-50 px-3 py-2 backdrop-blur-xl transition duration-300 sm:px-4 ${scrolled ? "border-b border-line/80 bg-white/92 shadow-sm" : "border-b border-transparent bg-white/72"}`}
    >
      <nav className="container-shell px-0 py-0">
        <div className="flex items-center justify-between gap-3">
          <a href="#home" className="focus-ring leading-none">
            <span className="block text-sm font-black tracking-tight text-primary sm:text-base">KOTHAVALE</span>
            <span className="-mt-1 block text-xs font-black tracking-tight text-text sm:text-sm">ARYA</span>
          </a>
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <a key={link.href} className="focus-ring rounded-full px-3 py-1.5 text-[0.84rem] font-bold text-text transition hover:bg-sky-50 hover:text-primary" href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
          <a href="#contact" className="focus-ring hidden rounded-full bg-gradient-to-r from-primary to-secondary px-4 py-2 text-[0.84rem] font-extrabold text-white shadow-[0_10px_24px_rgba(37,99,235,0.22)] transition hover:-translate-y-0.5 md:inline-flex">
            Start Project
          </a>
          <button className="focus-ring inline-flex h-9 w-9 items-center justify-center rounded-full border border-line bg-blue-50 text-text md:hidden" onClick={() => setOpen((value) => !value)} aria-label="Toggle menu">
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
        {open ? (
          <div className="mt-3 grid gap-1.5 border-t border-line pt-3 md:hidden">
            {navLinks.map((link) => (
              <a key={link.href} className="rounded-xl px-3 py-2.5 text-sm font-semibold text-muted transition hover:bg-blue-50 hover:text-primary" href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            ))}
            <a href="#contact" className="mt-1 rounded-xl bg-primary px-3 py-2.5 text-center text-sm font-extrabold text-white" onClick={() => setOpen(false)}>
              Start Project
            </a>
          </div>
        ) : null}
      </nav>
    </motion.header>
  );
}
