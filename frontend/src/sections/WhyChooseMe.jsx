import { motion } from "framer-motion";
import SectionHeader from "../components/SectionHeader.jsx";
import { reasons } from "../data/siteData.js";

export default function WhyChooseMe() {
  return (
    <section className="container-shell section-space">
      <SectionHeader kicker="Why Choose Me" title="Client-focused development from first call to final launch" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {reasons.map((reason, index) => {
          const Icon = reason.icon;
          return (
              <motion.div key={reason.title} initial={{ opacity: 0, scale: 0.94 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.25 }} transition={{ delay: index * 0.04 }} className="rounded-3xl border border-line bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-primary/30 hover:shadow-premium sm:p-6">
              <span className="icon-tile h-12 w-12 rounded-2xl">
                <Icon className="text-xl" />
              </span>
              <h3 className="mt-4 text-lg font-extrabold text-text">{reason.title}</h3>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
