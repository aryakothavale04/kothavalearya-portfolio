import { motion } from "framer-motion";
import { FiBriefcase, FiMail } from "react-icons/fi";
import Button from "../components/Button.jsx";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-[linear-gradient(120deg,#FFFFFF_0%,#FFFFFF_46%,#F0FDFA_72%,#EEF2FF_100%)]">
      <div className="absolute inset-0 fine-grid opacity-70" aria-hidden="true" />
      <div className="container-shell relative grid items-start gap-8 pb-12 pt-[5.5rem] sm:gap-10 sm:pt-24 lg:min-h-[88vh] lg:grid-cols-[1.08fr_0.72fr] lg:items-center lg:pb-8">
      <div className="max-w-3xl">
        <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="section-kicker hidden rounded-full border border-emerald-100 bg-white/80 px-3 py-1 shadow-sm sm:inline-flex">
          Freelance MERN Website Developer
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.58, delay: 0.05 }} className="mt-4 max-w-4xl text-[1.72rem] font-black leading-[1.12] tracking-tight text-text sm:text-[2.65rem] lg:text-[3rem]">
          Need a Website for Your <span className="text-primary">Business or Project?</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.58, delay: 0.12 }} className="mt-4 max-w-2xl text-[0.92rem] leading-6 text-text sm:text-lg sm:leading-7">
          Contact me for modern, responsive & fast websites that help businesses grow online.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.58, delay: 0.18 }} className="mt-5 flex flex-col gap-3 sm:flex-row">
          <Button href="#projects" icon={FiBriefcase}>View Projects</Button>
          <Button href="#contact" variant="secondary" icon={FiMail}>Contact Me</Button>
        </motion.div>
        <div className="mt-8 hidden h-6 sm:block" aria-hidden="true" />
      </div>
      <motion.div initial={{ opacity: 0, scale: 0.96, y: 24 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }} className="relative mx-auto w-full max-w-[235px] sm:max-w-[340px] lg:max-w-[370px]">
        <div className="relative overflow-hidden rounded-[2rem] rounded-t-[160px] border border-white bg-card shadow-[0_30px_90px_rgba(15,23,42,0.16)] ring-1 ring-slate-200/80">
          <img
            src="/arya-headshot.jpeg"
            alt="Arya Pranita Prashant Kothavale"
            className="h-[235px] w-full bg-amber-100 object-cover object-center sm:h-[360px] lg:h-[410px]"
          />
          <div className="absolute bottom-5 left-4 right-4 px-4 py-3 text-center">
            <p className="text-lg font-black text-white drop-shadow-[0_3px_10px_rgba(0,0,0,0.9)] sm:text-2xl">Arya Kothavale</p>
            <p className="mt-1 text-xs font-bold text-white drop-shadow-[0_2px_7px_rgba(0,0,0,0.9)]">Computer Engineer</p>
          </div>
        </div>
      </motion.div>
      </div>
    </section>
  );
}
