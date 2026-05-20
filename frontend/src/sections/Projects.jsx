import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";
import SectionHeader from "../components/SectionHeader.jsx";
import { projects } from "../data/siteData.js";

function ProjectPreview({ project }) {
  if (!project.screenshots) {
    return (
      <div className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-emerald-50 p-4 sm:p-5">
        <div className="relative pb-10 sm:pb-12">
          <div className="pr-0 sm:pr-24">
            <div className="rounded-2xl border border-slate-300 bg-slate-950 p-2 shadow-[0_18px_45px_rgba(15,23,42,0.2)]">
              <div className="aspect-[16/9] overflow-hidden rounded-xl bg-white p-5">
                <div className="mb-4 h-4 w-28 rounded-full bg-slate-200" />
                <div className="grid h-[calc(100%-2rem)] gap-3 sm:grid-cols-3">
                  <div className="rounded-2xl bg-blue-100" />
                  <div className="rounded-2xl bg-sky-100" />
                  <div className="rounded-2xl bg-indigo-100" />
                  <div className="rounded-2xl bg-slate-100 sm:col-span-2" />
                  <div className="rounded-2xl bg-blue-50" />
                </div>
              </div>
              <div className="mx-auto mt-2 h-1.5 w-20 rounded-full bg-slate-600" />
            </div>
          </div>

          <div className="absolute -bottom-1 right-2 w-[34%] min-w-[118px] max-w-[160px] rotate-[-2deg] sm:right-3 sm:w-[30%]">
            <div className="rounded-[1.55rem] border-[6px] border-slate-900 bg-slate-900 shadow-[0_24px_55px_rgba(15,23,42,0.32)]">
              <div className="mx-auto mb-1 h-2.5 w-12 rounded-b-xl bg-slate-800" />
              <div className="aspect-[9/16] overflow-hidden rounded-[1.05rem] bg-white p-3">
                <div className="mb-3 h-3 w-16 rounded-full bg-slate-200" />
                <div className="grid gap-2">
                  <div className="h-10 rounded-xl bg-blue-100" />
                  <div className="h-10 rounded-xl bg-sky-100" />
                  <div className="h-16 rounded-xl bg-slate-100" />
                  <div className="h-16 rounded-xl bg-indigo-100" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-emerald-50 p-4 sm:p-5">
      <div className="relative pb-10 sm:pb-12">
        <div className="pr-0 sm:pr-24">
          <div className="rounded-2xl border border-slate-300 bg-slate-950 p-2 shadow-[0_18px_45px_rgba(15,23,42,0.2)]">
            <div className="overflow-hidden rounded-xl bg-white">
              <img src={project.screenshots.laptop} alt={`${project.title} laptop view`} className="aspect-[16/9] w-full object-cover object-top" />
            </div>
            <div className="mx-auto mt-2 h-1.5 w-20 rounded-full bg-slate-600" />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18, rotate: 0 }}
          whileInView={{ opacity: 1, y: 0, rotate: -2 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: 0.15, duration: 0.55 }}
          className="absolute -bottom-1 right-2 w-[34%] min-w-[118px] max-w-[160px] sm:right-3 sm:w-[30%]"
        >
          <div className="rounded-[1.55rem] border-[6px] border-slate-900 bg-slate-900 shadow-[0_24px_55px_rgba(15,23,42,0.32)]">
            <div className="mx-auto mb-1 h-2.5 w-12 rounded-b-xl bg-slate-800" />
            <div className="overflow-hidden rounded-[1.05rem] bg-white">
              <img src={project.screenshots.mobile} alt={`${project.title} mobile view`} className="aspect-[9/16] w-full object-cover object-top" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="container-shell py-16 sm:py-20">
      <SectionHeader kicker="Projects" title="Professional project showcases" copy="Business-focused applications with polished interfaces and practical backend workflows." />
      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((project, index) => (
          <motion.article key={project.title} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ delay: index * 0.08 }} className="glass-card group overflow-hidden rounded-3xl transition duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-[0_28px_86px_rgba(15,23,42,0.14)]">
            <ProjectPreview project={project} />
            <div className="p-5 sm:p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-extrabold text-text">{project.title}</h3>
                  {project.subtitle && <p className="mt-1 text-sm font-bold uppercase tracking-[0.16em] text-primary">{project.subtitle}</p>}
                </div>
                <span className="rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1 text-xs font-black text-emerald-700">Live Work</span>
              </div>
              <p className="mt-3 leading-7 text-muted">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={item} className="rounded-full border border-line bg-white px-3 py-1 text-xs font-bold text-slate-700 shadow-sm">
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-5 grid gap-2">
                {project.features.map((feature) => (
                  <p key={feature} className="flex gap-2 text-[0.88rem] leading-6 text-muted">
                    <FiCheckCircle className="mt-0.5 shrink-0 text-emerald-600" />
                    <span>{feature}</span>
                  </p>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
