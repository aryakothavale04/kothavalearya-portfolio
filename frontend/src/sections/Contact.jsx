import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiSend } from "react-icons/fi";
import Button from "../components/Button.jsx";
import SectionHeader from "../components/SectionHeader.jsx";

export default function Contact() {
  return (
    <section id="contact" className="container-shell section-space">
      <SectionHeader kicker="Contact" title="Ready to build a website that works for your business?" copy="Contact me directly on WhatsApp, phone, or email to discuss your project." />
      <div className="mx-auto max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card rounded-3xl p-5 sm:p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-lg font-extrabold text-text sm:text-xl">Arya Kothavale</h3>
              <p className="mt-2 text-[0.86rem] font-semibold text-muted sm:text-sm">Available for websites, dashboards, and business automation systems.</p>
            </div>
            <span className="rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1 text-xs font-black text-emerald-700">Open</span>
          </div>
          <div className="mt-5 grid gap-3 text-muted">
            <a className="focus-ring flex min-w-0 items-center gap-2.5 rounded-2xl border border-line bg-white p-3 shadow-sm transition hover:-translate-y-0.5 hover:border-primary/40 hover:bg-blue-50 sm:gap-3 sm:p-4" href="mailto:kothavalearya1212@gmail.com">
              <span className="icon-tile h-9 w-9 shrink-0 rounded-xl sm:h-10 sm:w-10"><FiMail /></span> <span className="min-w-0 whitespace-nowrap text-[0.78rem] font-semibold sm:text-base">kothavalearya1212@gmail.com</span>
            </a>
            <a className="focus-ring flex items-center gap-2.5 rounded-2xl border border-line bg-white p-3 shadow-sm transition hover:-translate-y-0.5 hover:border-primary/40 hover:bg-blue-50 sm:gap-3 sm:p-4" href="tel:+918766952102">
              <span className="icon-tile h-9 w-9 shrink-0 rounded-xl sm:h-10 sm:w-10"><FiPhone /></span> +91 8766952102
            </a>
          </div>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <Button href="https://wa.me/918766952102" icon={FiSend}>WhatsApp</Button>
            <Button href="mailto:kothavalearya1212@gmail.com" variant="secondary" icon={FiMail}>Email</Button>
          </div>
          <div className="mt-5 flex gap-3">
            <a className="focus-ring flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-muted shadow-sm transition hover:-translate-y-0.5 hover:border-primary hover:text-primary" href="https://github.com/aryakothavale04" target="_blank" rel="noreferrer" aria-label="GitHub">
              <FiGithub />
            </a>
            <a className="focus-ring flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-muted shadow-sm transition hover:-translate-y-0.5 hover:border-primary hover:text-primary" href="https://www.linkedin.com/in/arya-kothavale/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FiLinkedin />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
