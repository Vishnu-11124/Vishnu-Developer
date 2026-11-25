/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: {
          bg: "#0B1120",
          card: "#111C33",
          surface: "#18243B",
          accent: "#818CF8",
          "accent-hover": "#6366F1",
          text: "#F1F5F9",
          muted: "#94A3B8",
          border: "#26334D",
        },
      },
    },
  },
  plugins: [],
}

