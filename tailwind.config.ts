import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/background-image.webp')",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      gridTemplateRows: {
        layout: "auto 1fr auto",
      },
      height: {
        hero: "800px",
      },
      maxWidth: {
        hero: "1400px",
      },
    },
  },
  plugins: [],
} satisfies Config;
