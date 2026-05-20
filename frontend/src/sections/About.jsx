import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="container-shell section-space">
      <div className="mx-auto grid max-w-6xl items-stretch gap-5 lg:grid-cols-[0.88fr_1.12fr]">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} className="glass-card rounded-3xl p-5 sm:p-6 lg:h-full">
          <p className="section-kicker inline-flex rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1">About</p>
          <h2 className="premium-heading mt-3 text-2xl text-text md:text-4xl">Arya Prashant Kothavale</h2>
          <p className="mt-3 text-sm font-extrabold text-primary">Computer Engineer | MERN Stack Developer</p>
          <div className="mt-7 rounded-2xl border border-line bg-gradient-to-br from-blue-50 to-emerald-50 p-5 shadow-sm">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-primary">Education</p>
            <h3 className="mt-3 text-lg font-black text-text">Bachelor of Engineering in Computer</h3>
            <p className="mt-2 text-sm font-bold text-muted">SPPU - Savitribai Phule Pune University</p>
            <p className="mt-2 text-sm leading-6 text-muted">KJ College of Engineering and Management Research, Pune</p>
            <p className="mt-3 text-sm font-extrabold text-primary">Expected 2027</p>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ delay: 0.08 }} className="flex rounded-3xl border border-line bg-white p-5 shadow-premium sm:p-6 lg:h-full lg:items-center">
          <div>
            <p className="max-w-3xl text-[0.98rem] leading-8 text-muted">
              I build modern, responsive and high-performance websites that help businesses create a strong online presence. I focus on clean UI, smooth user experience, fast loading speed and scalable web applications. From business websites to custom web solutions, I develop professional websites that look premium and work perfectly across all devices. If you want a modern website for your business or project, feel free to contact me.
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {["Clean UI", "Fast Loading", "Business Focus"].map((item) => (
                <div key={item} className="rounded-2xl border border-line bg-bg px-4 py-3 text-sm font-black text-text">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
