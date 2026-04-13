// @ts-check
import { defineConfig, fontProviders } from 'astro/config';


export default defineConfig({
    fonts: [
       {
            provider: fontProviders.google(),
            name: "Comfortaa",
            cssVariable: "--font-comfortaa",
            weights: [400, 500, 800],
            styles: ["normal"]
    
        },
        {
            provider: fontProviders.google(),
            name: "Plus Jakarta Sans",
            cssVariable: "--font-jakarta",
            weights: [800],
            styles: ["normal"]
    
        },
    ]
});
