// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
    adapter: cloudflare(),
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
    ]
});
