/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        blueprint: {
          ink: "#16324F", // deep blueprint navy — headlines, primary lines
          line: "#2E6F9E", // mid blue — rules, links, grid
          paper: "#EEF2F4", // page background, like drafting paper
          panel: "#FFFFFF", // sheet panels
          graphite: "#333A40", // body copy
          steel: "#7C8791", // muted labels, ticks
          hairline: "#C4CDD3", // dividers, borders
        },
        flag: {
          DEFAULT: "#E2672B", // survey-flag orange — the one accent
          dark: "#C2531F",
        },
      },
      fontFamily: {
        display: ["Space Grotesk", "system-ui", "sans-serif"],
        body: ["IBM Plex Sans", "system-ui", "sans-serif"],
        mono: ["IBM Plex Mono", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "grid-paper":
          "linear-gradient(rgba(46,111,158,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(46,111,158,0.10) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "28px 28px",
      },
      keyframes: {
        drawline: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        draw: {
          "0%": { strokeDashoffset: "100" },
          "100%": { strokeDashoffset: "0" },
        },
        scan: {
          "0%": { top: "-4%" },
          "100%": { top: "104%" },
        },
        fadein: {
          "0%": { opacity: "0", transform: "translateY(6px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeup: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        drawline: "drawline 1.1s cubic-bezier(0.65,0,0.35,1) 0.15s forwards",
        draw: "draw 1.4s cubic-bezier(0.65,0,0.35,1) forwards",
        fadein: "fadein 0.7s ease-out 0.5s forwards",
        fadeup: "fadeup 0.6s cubic-bezier(0.65,0,0.35,1) forwards",
      },
    },
  },
  plugins: [],
};
