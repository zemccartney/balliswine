import { defineCollection, reference, z } from "astro:content";

const daysCollection = defineCollection({
  schema: z.object({
    ballContent: reference("thoughts"),
    date: z.string(), // Uninterested in futzing with date formatting right now, might revisit
    wineContent: reference("thoughts"),
  }),
  type: "content",
});

const thoughtsCollection = defineCollection({
  schema: z.object({
    wine: z.string().optional(),
  }),
  type: "content",
});

export const collections = {
  days: daysCollection,
  thoughts: thoughtsCollection,
};
