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
      className={`fixed inset-x-0 top-0 z-50 px-4 py-3 backdrop-blur-xl transition duration-300 ${scrolled ? "border-b border-line/80 bg-white/92 shadow-sm" : "border-b border-transparent bg-white/72"}`}
    >
      <nav className="container-shell px-0 py-0">
        <div className="flex items-center justify-between gap-4">
          <a href="#home" className="focus-ring leading-none">
            <span className="block text-lg font-black tracking-tight text-primary">KOTHAVALE</span>
            <span className="-mt-1 block text-base font-black tracking-tight text-text">ARYA</span>
          </a>
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <a key={link.href} className="focus-ring rounded-full px-3.5 py-2 text-[0.92rem] font-bold text-text transition hover:bg-sky-50 hover:text-primary" href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
          <a href="#contact" className="focus-ring hidden rounded-full bg-gradient-to-r from-primary to-secondary px-5 py-2.5 text-[0.95rem] font-extrabold text-white shadow-[0_12px_28px_rgba(37,99,235,0.24)] transition hover:-translate-y-0.5 md:inline-flex">
            Start Project
          </a>
          <button className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-blue-50 text-text md:hidden" onClick={() => setOpen((value) => !value)} aria-label="Toggle menu">
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
        {open ? (
          <div className="mt-4 grid gap-2 border-t border-line pt-4 md:hidden">
            {navLinks.map((link) => (
              <a key={link.href} className="rounded-2xl px-4 py-3 text-sm font-semibold text-muted transition hover:bg-blue-50 hover:text-primary" href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            ))}
            <a href="#contact" className="mt-1 rounded-2xl bg-primary px-4 py-3 text-center text-sm font-extrabold text-white" onClick={() => setOpen(false)}>
              Start Project
            </a>
          </div>
        ) : null}
      </nav>
    </motion.header>
  );
}
