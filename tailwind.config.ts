import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        iceem: {
          blue: "#1B3A6B",
          light: "#3F72AF",
          sky: "#A9d6ff",
          green: "#2EC4B6",
        },
      },
      fontFamily: {
        sans: ["'Inter'", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 20px 45px rgba(15, 54, 88, 0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
