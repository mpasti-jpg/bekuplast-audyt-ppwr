import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "var(--color-navy)",
          light: "var(--color-navy-light)",
          dark: "var(--color-navy-dark)",
        },
        amber: {
          DEFAULT: "var(--color-amber)",
          dark: "var(--color-amber-dark)",
          light: "var(--color-amber-light)",
        },
        paper: "var(--color-paper)",
        text: {
          DEFAULT: "var(--color-text)",
          muted: "var(--color-text-muted)",
        },
        success: "var(--color-success)",
        warning: "var(--color-warning)",
        danger: "var(--color-danger)",
        info: "var(--color-info)",
        border: "var(--color-border)",
        d1: "var(--color-d1)",
        d2: "var(--color-d2)",
        d3: "var(--color-d3)",
        d4: "var(--color-d4)",
        d5: "var(--color-d5)",
      },
      fontFamily: {
        sans: "var(--font-sans)",
        mono: "var(--font-mono)",
      },
      maxWidth: {
        prose: "65ch",
        content: "1200px",
      },
      animation: {
        "fade-in": "fadeIn 0.3s ease-out",
        "slide-up": "slideUp 0.4s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
};

export default config;
