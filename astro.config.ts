import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: "Tektur",
        cssVariable: "--font-tektur",
        weights: [400, 700, 900],
      },
    ],
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
