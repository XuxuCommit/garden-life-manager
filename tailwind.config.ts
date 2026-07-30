import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2E7D32",
        secondary: "#81C784",
        accent: "#FFC107",
        background: "#F8FAF8",
        surface: "#FFFFFF"
      }
    }
  },
  plugins: []
};

export default config;