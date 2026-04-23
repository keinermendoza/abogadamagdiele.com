// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: "https://abogadamagdiele.com",

  fonts: [
     {
          provider: fontProviders.google(),
          name: "Comfortaa",
          cssVariable: "--ff-body",
          weights: [400, 500, 800],
          styles: ["normal"]
  
      },
      {
          provider: fontProviders.google(),
          name: "Plus Jakarta Sans",
          cssVariable: "--ff-title",
          weights: [800],
          styles: ["normal"]
  
      },
  ],
  integrations: [sitemap()],
  adapter: cloudflare(),
  output: "static",
});