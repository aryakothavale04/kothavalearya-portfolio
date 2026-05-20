import { motion } from "framer-motion";
import { FiBriefcase, FiMail } from "react-icons/fi";
import Button from "../components/Button.jsx";
import aryaPhoto from "../assets/arya-photo.jpg";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-[linear-gradient(120deg,#FFFFFF_0%,#FFFFFF_46%,#F0FDFA_72%,#EEF2FF_100%)]">
      <div className="absolute inset-0 fine-grid opacity-70" aria-hidden="true" />
      <div className="container-shell relative grid min-h-screen items-center gap-10 pb-10 pt-24 sm:pt-28 lg:grid-cols-[1.08fr_0.72fr]">
      <div className="max-w-3xl">
        <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="section-kicker inline-flex rounded-full border border-emerald-100 bg-white/80 px-3 py-1 shadow-sm">
          Freelance MERN Website Developer
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.58, delay: 0.05 }} className="mt-4 max-w-4xl text-[2.05rem] font-black leading-[1.1] tracking-tight text-text sm:text-[2.8rem] lg:text-[3.15rem]">
          Need a Website for Your <span className="text-primary">Business or Project?</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.58, delay: 0.12 }} className="mt-4 max-w-2xl text-base leading-7 text-text sm:text-lg">
          Contact me for modern, responsive & fast websites that help businesses grow online.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.58, delay: 0.18 }} className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Button href="#projects" icon={FiBriefcase}>View Projects</Button>
          <Button href="#contact" variant="secondary" icon={FiMail}>Contact Me</Button>
        </motion.div>
        <div className="mt-12 hidden h-12 sm:block" aria-hidden="true" />
      </div>
      <motion.div initial={{ opacity: 0, scale: 0.96, y: 24 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }} className="relative mx-auto w-full max-w-[310px] sm:max-w-[360px] lg:max-w-[390px]">
        <div className="relative overflow-hidden rounded-[2rem] rounded-t-[160px] border border-white bg-card shadow-[0_30px_90px_rgba(15,23,42,0.16)] ring-1 ring-slate-200/80">
          <img
            src={aryaPhoto}
            alt="Arya Kothavale"
            className="h-[320px] w-full bg-slate-950 object-cover object-[50%_72%] sm:h-[390px] lg:h-[440px]"
          />
          <div className="absolute bottom-5 left-4 right-4 px-4 py-3 text-center">
            <p className="text-xl font-black text-white drop-shadow-[0_3px_10px_rgba(0,0,0,0.9)] sm:text-2xl">Kothavale Arya</p>
            <p className="mt-1 text-xs font-bold text-white drop-shadow-[0_2px_7px_rgba(0,0,0,0.9)]">Computer Engineer</p>
          </div>
        </div>
      </motion.div>
      </div>
    </section>
  );
}
