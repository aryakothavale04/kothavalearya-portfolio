/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Sora", "Inter", "ui-sans-serif", "system-ui"]
      },
      colors: {
        bg: "#F8FAFC",
        primary: "#2563EB",
        secondary: "#0EA5E9",
        accent: "#6366F1",
        card: "#FFFFFF",
        text: "#0F172A",
        muted: "#475569",
        line: "#E2E8F0",
        ink: "#0F172A",
        panel: "#FFFFFF",
        mint: "#2563EB",
        gold: "#6366F1"
      },
      boxShadow: {
        glow: "0 0 44px rgba(37, 99, 235, 0.22)",
        premium: "0 22px 70px rgba(15, 23, 42, 0.12)"
      }
    }
  },
  plugins: []
};
