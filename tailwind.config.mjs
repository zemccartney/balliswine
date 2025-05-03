import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  plugins: [],
  theme: {
    extend: {
      fontFamily: {
        emoji: ["Noto Emoji Variable", "sans-serif"],
        mono: ["Geist Mono", ...defaultTheme.fontFamily.mono],
        sans: ["Geist Sans", ...defaultTheme.fontFamily.sans],
        title: ["Pacifico", "cursive"],
      },
    },
  },
};
