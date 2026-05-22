const portfolioUrl = "https://kothavalearya.online";

function FooterCredit() {
  return (
    <a
      href={portfolioUrl}
      target="_blank"
      rel="noreferrer"
      className="focus-ring group block max-w-full rounded-sm px-2 text-center font-semibold transition duration-300 hover:-translate-y-0.5"
      aria-label="Visit Arya Kothavale portfolio"
    >
      <span className="block text-[12px] uppercase leading-5 tracking-[0.14em] text-slate-950 transition duration-300 group-hover:text-black/75 dark:text-white dark:group-hover:text-white/75 sm:text-[11px] sm:tracking-[0.22em]">
        Developed by Arya Kothavale
      </span>
      <span className="mt-1 block text-[12px] normal-case leading-5 tracking-[0.05em] text-blue-700 underline underline-offset-2 transition duration-300 group-hover:text-blue-800 dark:text-blue-300 dark:group-hover:text-blue-200 sm:text-[11px] sm:tracking-[0.08em]">
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
