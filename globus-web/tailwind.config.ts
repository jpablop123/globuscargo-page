import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        globus: {
          orange: "#f58220", // Naranja corporativo
          dark: "#0a0a0a",   // Fondo oscuro elegante
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"], 
        // ⚡️ si usas Inter de next/font/google
        // cambia a var(--font-jakarta) si prefieres Jakarta Sans
      },
    },
  },
  plugins: [],
};

export default config;