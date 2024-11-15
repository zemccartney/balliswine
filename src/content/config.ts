import { defineCollection, reference, z } from "astro:content";

const daysCollection = defineCollection({
  type: "content",
  schema: z.object({
    date: z.string(), // Uninterested in futzing with date formatting right now, might revisit
    ballContent: reference("thoughts"),
    wineContent: reference("thoughts"),
  }),
});

const thoughtsCollection = defineCollection({
  type: "content",
  schema: z.object({
    wine: z.string().optional(),
  }),
});

export const collections = {
  days: daysCollection,
  thoughts: thoughtsCollection,
};
