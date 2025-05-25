// @ts-check
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  vite: {
    // leaflet and youtube-lite are prone to disappearing, failure to re-optimize; unclear why, try commenting this
    // out and rerunning build instead of clearing node_modules and reinstalling
    optimizeDeps: {
      force: true,
    },

    plugins: [tailwindcss()],
  },
});
