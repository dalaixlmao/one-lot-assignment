import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        blue: "#51CAD7",
        blue1: "#D6F2F5",
        purple: "#57009C",
        purple1: "#F5EBF9",

      },
    },
  },
  plugins: [],
} satisfies Config;
