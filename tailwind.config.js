/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          50:  "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",  // main brand blue
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
        },
        accent: {
          DEFAULT: "#f59e0b",  // amber accent
          light:   "#fcd34d",
          dark:    "#d97706",
        },
        surface: {
          DEFAULT: "#ffffff",
          muted:   "#f8fafc",
          dark:    "#0f172a",
          "dark-muted": "#1e293b",
        },
        text: {
          DEFAULT:  "#0f172a",
          muted:    "#64748b",
          inverted: "#f8fafc",
        },
      },
      fontFamily: {
        heading: ["'Plus Jakarta Sans'", "sans-serif"],
        body:    ["'DM Sans'", "sans-serif"],
      },
      boxShadow: {
        soft: "0 2px 15px -3px rgba(0,0,0,0.07), 0 10px 20px -2px rgba(0,0,0,0.04)",
        card: "0 4px 24px rgba(37,99,235,0.08)",
      },
      keyframes: {
        fadeInDown: {
          "0%":   { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideIn: {
          "0%":   { opacity: "0", transform: "translateX(-100%)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      animation: {
        "fade-in-down": "fadeInDown 0.3s ease-out",
        "slide-in":     "slideIn 0.3s ease-out",
      },
    },
  },
  plugins: [],
};
