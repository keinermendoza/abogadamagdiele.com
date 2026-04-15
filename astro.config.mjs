// @ts-check
import { defineConfig, fontProviders } from 'astro/config';


export default defineConfig({
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
