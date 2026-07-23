import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#111111",
        paper: "#F2F2F0",
        accent: {
          DEFAULT: "#E8501A",
          hover: "#C94212",
        },
        muted: "#8A8A8A",
      },
      fontFamily: {
        serif: ["'Playfair Display'", "Georgia", "serif"],
        sans: ["Roboto", "Helvetica", "Arial", "sans-serif"],
        card: ["'Archivo'", "Roboto", "sans-serif"],
      },
      borderRadius: {
        card: "1.25rem",
      },
    },
  },
  plugins: [],
};

export default config;
