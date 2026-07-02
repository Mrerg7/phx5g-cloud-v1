import { defineCollection, z } from 'astro:content';

const useCases = defineCollection({
  type: 'data',
  schema: z.object({
    number: z.string(),
    title: z.string(),
    description: z.string(),
    order: z.number(),
  }),
});

export const collections = { useCases };
