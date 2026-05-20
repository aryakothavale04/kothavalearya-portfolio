import { motion } from "framer-motion";

export default function WebsiteMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotateX: 8 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.7, delay: 0.25 }}
      className="relative mx-auto w-full max-w-[520px]"
    >
      <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-r from-primary/18 via-secondary/14 to-accent/16 blur-3xl" />
      <div className="glass-card relative overflow-hidden rounded-[1.35rem]">
        <div className="flex items-center gap-2 border-b border-line px-4 py-3 sm:px-5 sm:py-4">
          <span className="h-3 w-3 rounded-full bg-rose-400" />
          <span className="h-3 w-3 rounded-full bg-accent" />
          <span className="h-3 w-3 rounded-full bg-primary" />
          <div className="ml-3 h-7 flex-1 rounded-full bg-slate-100" />
        </div>
        <div className="grid gap-4 p-4 sm:grid-cols-[1.1fr_0.9fr] sm:gap-5 sm:p-5">
          <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-white p-5">
            <div className="mb-4 h-3 w-20 rounded-full bg-primary/70" />
            <div className="space-y-3">
              <div className="h-5 rounded-full bg-slate-300" />
              <div className="h-5 w-4/5 rounded-full bg-slate-200" />
              <div className="h-5 w-3/5 rounded-full bg-slate-100" />
            </div>
            <div className="mt-7 flex gap-3">
              <div className="h-10 w-28 rounded-full bg-primary" />
              <div className="h-10 w-24 rounded-full border border-line bg-white" />
            </div>
          </div>
          <div className="grid gap-3">
            {["bg-blue-50", "bg-sky-50", "bg-amber-50"].map((color) => (
              <div key={color} className={`rounded-2xl border border-line ${color} p-4`}>
                <div className="mb-3 h-8 w-8 rounded-xl bg-white" />
                <div className="h-3 rounded-full bg-slate-300" />
                <div className="mt-2 h-3 w-2/3 rounded-full bg-slate-200" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
