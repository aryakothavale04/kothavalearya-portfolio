import { motion } from "framer-motion";
import { FiArrowUpRight, FiBarChart2, FiGlobe, FiPieChart, FiShoppingBag, FiTrendingUp, FiUsers } from "react-icons/fi";
import Button from "../components/Button.jsx";
import SectionHeader from "../components/SectionHeader.jsx";

const benefits = [
  {
    title: "More Customer Reach",
    value: "3x",
    copy: "Reach people who search online before choosing a product, service or local business.",
    icon: FiUsers
  },
  {
    title: "Better Brand Trust",
    value: "90%",
    copy: "A clean website makes your business look active, serious and reliable.",
    icon: FiGlobe
  },
  {
    title: "Higher Sales Potential",
    value: "24/7",
    copy: "Turn visitors into leads through clear services, calls-to-action and contact options.",
    icon: FiTrendingUp
  },
  {
    title: "24/7 Business Presence",
    value: "Always",
    copy: "Your website works like a digital shop even when your office is closed.",
    icon: FiShoppingBag
  }
];

const points = [
  "Customers search online before trusting a business.",
  "A website increases visibility and helps more people discover your services.",
  "Businesses can collect more leads, inquiries and customers online.",
  "A professional website builds trust, credibility and a stronger brand image.",
  "A modern online identity helps businesses compete and grow faster."
];

export default function OnlineBusiness() {
  return (
    <section id="business-growth" className="container-shell py-16 sm:py-20">
      <SectionHeader
        kicker="Business Growth"
        title="Why Your Business Needs to Be Online"
        copy="A professional website helps customers find you, trust you and contact you faster."
      />

      <div className="grid gap-7 lg:grid-cols-[1fr_0.92fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          className="rounded-3xl border border-line bg-card p-6 shadow-premium sm:p-8"
        >
          <p className="text-[0.98rem] leading-8 text-muted">
            Modern customers compare businesses online before they call, visit or buy. A professional website gives your business a strong digital identity, improves visibility, builds trust and creates more opportunities to generate leads. With the right design, speed and user experience, your website can become a powerful business asset that helps you earn more and grow faster.
          </p>

          <div className="mt-6 rounded-2xl border border-primary/20 bg-blue-50 p-5">
            <p className="text-lg font-black leading-7 text-text">
              Your website is your digital identity and the first impression of your business.
            </p>
          </div>

          <div className="mt-6 grid gap-3">
            {points.map((point, index) => (
              <motion.div
                key={point}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: index * 0.05 }}
                className="flex gap-3 rounded-2xl border border-line bg-bg px-4 py-3"
              >
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-[0.65rem] font-black text-white">
                  {index + 1}
                </span>
                <p className="text-sm leading-6 text-muted">{point}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-7">
            <Button href="#contact" icon={FiArrowUpRight}>Build Your Website Today</Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ delay: 0.08 }}
          className="relative overflow-hidden rounded-3xl border border-line bg-[linear-gradient(145deg,#FFFFFF_0%,#EFF6FF_100%)] p-6 shadow-premium sm:p-8"
        >
          <div className="absolute right-8 top-8 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
          <div className="absolute bottom-10 left-8 h-24 w-24 rounded-full bg-accent/10 blur-2xl" />

          <div className="relative">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.16em] text-primary">Analytics</p>
                <h3 className="mt-2 text-xl font-black text-text">Growth Dashboard</h3>
              </div>
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-xl text-white shadow-[0_14px_30px_rgba(37,99,235,0.25)]"
              >
                <FiBarChart2 />
              </motion.div>
            </div>

            <div className="mt-8 rounded-3xl border border-line bg-card p-5">
              <div className="flex items-end justify-between gap-3 border-b border-line pb-5">
                {[42, 58, 50, 72, 84, 96].map((height, index) => (
                  <motion.div
                    key={height}
                    initial={{ height: 18 }}
                    whileInView={{ height }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: index * 0.08, duration: 0.7, ease: "easeOut" }}
                    className="w-full rounded-t-xl bg-gradient-to-t from-primary to-secondary"
                  />
                ))}
              </div>

              <div className="relative mt-7 h-28 overflow-hidden rounded-2xl bg-blue-50">
                <svg className="absolute inset-0 h-full w-full" viewBox="0 0 320 112" fill="none" preserveAspectRatio="none">
                  <motion.path
                    d="M0 88 C48 82 58 54 108 60 C160 66 168 28 218 34 C264 40 280 18 320 22"
                    stroke="#2563EB"
                    strokeWidth="5"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1.3, ease: "easeInOut" }}
                  />
                  <motion.path
                    d="M0 88 C48 82 58 54 108 60 C160 66 168 28 218 34 C264 40 280 18 320 22 L320 112 L0 112 Z"
                    fill="url(#growthFill)"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.7 }}
                  />
                  <defs>
                    <linearGradient id="growthFill" x1="160" y1="22" x2="160" y2="112" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#0EA5E9" stopOpacity="0.28" />
                      <stop offset="1" stopColor="#0EA5E9" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
                <motion.div
                  animate={{ x: [0, 12, 0], y: [0, -8, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute right-5 top-4 rounded-full bg-card px-3 py-1 text-xs font-black text-primary shadow-sm"
                >
                  + Leads
                </motion.div>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-4">
              {[
                ["Revenue", "+42%", FiTrendingUp],
                ["Traffic", "+68%", FiPieChart]
              ].map(([label, value, Icon], index) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: index * 0.08 }}
                  className="rounded-2xl border border-line bg-card p-4"
                >
                  <Icon className="text-xl text-primary" />
                  <p className="mt-3 text-2xl font-black text-text">{value}</p>
                  <p className="text-xs font-bold text-muted">{label} Growth</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: index * 0.06 }}
              className="rounded-3xl border border-line bg-card p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-premium"
            >
              <div className="flex items-center justify-between gap-3">
                <Icon className="text-2xl text-primary" />
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-black text-primary">{item.value}</span>
              </div>
              <h3 className="mt-5 text-lg font-black text-text">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{item.copy}</p>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
