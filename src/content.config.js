// 1. Import utilities from `astro:content`
import { defineCollection } from 'astro:content';

// 2. Import loader(s)
import { file } from 'astro/loaders';

// 3. Import Zod
import { z } from 'astro/zod';

// 4. Define a `loader` and `schema` for each collection
const keyServices = defineCollection({
  loader: file('./src/content/keyServices.yaml'),
  schema: z.object({
    slug: z.string(),
    title: z.string(),
    description: z.string(),
  }),
});

const generalServices = defineCollection({
  loader: file('./src/content/generalServices.yaml'),
  schema: z.object({
    slug: z.string(),
    title: z.string(),
  }),
});

const clientSteps = defineCollection({
  loader: file('./src/content/clientSteps.yaml'),
  schema: z.object({
    id: z.number().int(),
    title: z.string(),
    description: z.array(z.string()),
  }),
});


// 5. Export a single `collections` object to register your collection(s)
export const collections = { keyServices, generalServices, clientSteps };