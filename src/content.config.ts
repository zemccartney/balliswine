import { glob } from "astro/loaders";
import { defineCollection, reference, z } from "astro:content";

const daysCollection = defineCollection({
  loader: glob({ base: "./src/content/days", pattern: "**/[^_]*.{md,mdx}" }),
  schema: z.object({
    ballContent: reference("thoughts"),
    wineContent: reference("thoughts"),
  }),
});

const thoughtsCollection = defineCollection({
  loader: glob({
    base: "./src/content/thoughts",
    pattern: "**/[^_]*.{md,mdx}",
  }),
  schema: z.object({
    wine: z.string().optional(),
  }),
});

export const collections = {
  days: daysCollection,
  thoughts: thoughtsCollection,
};
