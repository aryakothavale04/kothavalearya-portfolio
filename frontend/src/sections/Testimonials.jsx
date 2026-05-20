import { motion } from "framer-motion";
import SectionHeader from "../components/SectionHeader.jsx";
import { testimonials } from "../data/siteData.js";

export default function Testimonials() {
  return (
    <section className="container-shell section-space">
      <SectionHeader kicker="Testimonials" title="What Clients Say About Me" copy="Clear communication, polished execution, and websites that support the business goal." />
      <div className="grid gap-5 lg:grid-cols-2">
        {testimonials.map((testimonial, index) => (
          <motion.figure
            key={testimonial.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: index * 0.06 }}
            className="glass-card relative rounded-3xl p-5 sm:p-6"
          >
            <span className="absolute right-6 top-5 text-5xl font-black leading-none text-primary/10">"</span>
            <blockquote className="relative text-[0.9rem] leading-7 text-muted sm:text-base sm:leading-8">"{testimonial.quote}"</blockquote>
            <figcaption className="mt-6 border-t border-line pt-5">
              <p className="font-extrabold text-text">{testimonial.name}</p>
              <p className="mt-1 text-sm text-slate-500">{testimonial.role}</p>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
