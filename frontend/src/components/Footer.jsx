export default function Footer() {
  return (
    <footer className="border-t border-line bg-white/70 py-8">
      <div className="container-shell flex flex-col items-center justify-between gap-4 text-center text-sm text-muted sm:flex-row sm:text-left">
        <p>© {new Date().getFullYear()} Arya Kothavale. All rights reserved.</p>
        <a href="#home" className="focus-ring rounded-full px-4 py-2 font-bold text-text transition duration-300 hover:text-primary hover:shadow-[0_0_28px_rgba(37,99,235,0.24)]">
          Developed by Arya Kothavale
        </a>
      </div>
    </footer>
  );
}
