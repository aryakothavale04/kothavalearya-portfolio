const portfolioUrl = "https://kothavalearya.online";

function FooterCredit() {
  return (
    <a
      href={portfolioUrl}
      target="_blank"
      rel="noreferrer"
      className="focus-ring group rounded-sm text-center font-semibold transition duration-300 hover:-translate-y-0.5"
      aria-label="Visit Arya Kothavale portfolio"
    >
      <span className="block text-[11px] uppercase tracking-[0.22em] text-black/35 transition duration-300 group-hover:text-black/55 dark:text-white/35 dark:group-hover:text-white/55">
        Developed by Arya Kothavale
      </span>
      <span className="mt-1 block text-[11px] normal-case tracking-[0.08em] text-blue-700 underline underline-offset-2 transition duration-300 group-hover:text-blue-800 dark:text-blue-300 dark:group-hover:text-blue-200">
        kothavalearya.online
      </span>
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-line bg-white/70 py-8">
      <div className="container-shell flex flex-col items-center justify-center gap-4 text-center text-sm text-muted">
        <FooterCredit />
      </div>
    </footer>
  );
}
