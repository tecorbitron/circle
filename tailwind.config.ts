import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "custom-gray": "#7E7E7E",
        "custom-black": "#1C1C1C",
        "custom-green": "#0AA936 ",

      },
      fontFamily: {
        "custom-hand-writing": ['"Gloria Hallelujah"', 'serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
