import type { Config } from "tailwindcss";
import { default as twAnimate } from "tailwindcss-animate";

const config = {
  darkMode: ["class"],
  content: ["./src/routes/**/*.{ts,tsx}", "./src/ui/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["poppins-sans"],
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
      },
    },
  },
  plugins: [twAnimate],
} satisfies Config;

export default config;
