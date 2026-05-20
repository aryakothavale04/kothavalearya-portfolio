import { motion } from "framer-motion";
import SectionHeader from "../components/SectionHeader.jsx";
import { services } from "../data/siteData.js";

export default function Services() {
  return (
    <section id="services" className="container-shell py-16 sm:py-20">
      <SectionHeader kicker="Services" title="Websites and web apps built for real client outcomes" copy="Premium development for businesses that need more than a basic online page." />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.article key={service.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ delay: index * 0.04 }} className="glass-card group rounded-3xl p-5 transition duration-300 hover:-translate-y-2 hover:border-primary/40 sm:p-6">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-xl text-primary transition group-hover:bg-primary group-hover:text-white sm:mb-6">
                <Icon />
              </div>
              <h3 className="text-lg font-extrabold text-text">{service.title}</h3>
              <p className="mt-3 text-[0.92rem] leading-7 text-muted">{service.copy}</p>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
