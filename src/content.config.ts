import { file, glob } from "astro/loaders";
import { defineCollection, reference, z } from "astro:content";

const producers = defineCollection({
  loader: glob({
    base: "./src/content/producers",
    pattern: "**/[^_]*.{md,mdx}",
  }),
  schema: z.object({
    coordinates: z.tuple([z.number(), z.number()]),
    location: z.string(),
    name: z.string(),
  }),
});

const wines = defineCollection({
  loader: file("src/content/wines.json"),
  schema: z.object({
    hue: z.string(),
    name: z.string(),
    producer: reference("producers"),
  }),
});

const vintages = defineCollection({
  loader: glob({
    base: "./src/content/vintages",
    pattern: "**/[^_]*.{md,mdx}",
  }),
  schema: z.object({
    cepage: z.string(),
    dateTried: z.string(),
    wine: reference("wines"),
  }),
});

const posts = defineCollection({
  loader: glob({
    base: "./src/content/posts",
    pattern: ["**/[^_]*.{md,mdx}", "!**/intro.md"],
  }),
  schema: z.object({
    vintage: reference("vintages"),
  }),
});

export const collections = {
  posts,
  producers,
  vintages,
  wines,
};
