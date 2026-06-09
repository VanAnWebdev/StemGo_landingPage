import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        space: "#011229",
        cobalt: "#033E8C",
        tangerine: "#FF9200",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        marker: ['var(--font-marker)', 'cursive'],
        sans: ['var(--font-sans)', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
export default config;
