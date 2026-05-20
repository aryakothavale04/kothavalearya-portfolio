import { motion } from "framer-motion";
import { FiAward, FiExternalLink } from "react-icons/fi";

export default function Certifications() {
  return (
    <section id="certifications" className="container-shell pt-6 pb-14 sm:pt-7 sm:pb-16">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        className="rounded-3xl border border-line bg-card p-5 shadow-premium sm:p-6"
      >
        <div className="grid items-start gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="section-kicker">Certification</p>
            <h2 className="premium-heading mt-3 text-2xl text-text md:text-4xl">Certified Learning, Practical Development</h2>
            <div className="mt-5 rounded-2xl border border-line bg-blue-50/70 p-5">
            <div className="flex gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-xl text-white">
                <FiAward />
              </span>
              <div>
                <h3 className="text-lg font-black text-text">Sigma Prime Certification</h3>
                <p className="mt-2 text-sm leading-6 text-muted">
                  This certification reflects continuous learning, problem-solving discipline and a stronger foundation for building modern, reliable and user-focused web applications.
                </p>
              </div>
            </div>
            <a
              href="/certificates/sigma-prime-certificate.pdf"
              target="_blank"
              rel="noreferrer"
              className="focus-ring mt-5 inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-lg bg-primary px-5 text-sm font-extrabold text-white shadow-[0_14px_34px_rgba(37,99,235,0.22)] transition hover:bg-secondary"
            >
              View Certificate <FiExternalLink />
            </a>
          </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-sm">
            <img
              src="/certificates/sigma-prime-certificate-preview.jpg"
              alt="Sigma Prime certificate"
              className="h-auto w-full object-contain"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
