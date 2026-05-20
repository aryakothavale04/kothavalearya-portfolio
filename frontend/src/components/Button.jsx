export default function Button({ href, children, variant = "primary", className = "", icon: Icon }) {
  const styles =
    variant === "primary"
      ? "bg-gradient-to-r from-primary to-secondary text-white shadow-[0_16px_36px_rgba(37,99,235,0.26)] hover:shadow-[0_18px_42px_rgba(14,165,233,0.28)]"
      : "border border-line bg-white/90 text-text shadow-sm hover:border-primary/50 hover:bg-blue-50";

  return (
    <a
      href={href}
      className={`focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-[0.9rem] font-extrabold transition duration-300 hover:-translate-y-0.5 max-sm:w-full ${styles} ${className}`}
    >
      {Icon ? <Icon aria-hidden="true" /> : null}
      {children}
    </a>
  );
}
