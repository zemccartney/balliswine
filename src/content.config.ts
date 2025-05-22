import { file, glob } from "astro/loaders";
import { defineCollection, reference, z } from "astro:content";

/*
TODO
- need to source hue values, figure out passage to bottle display
- figure out parsing post intro and body
- figure out how to dynamically load images
- deal w/ lack of producer descriptions
*/

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
    // tasting notes is an md or mdx file
  }),
});

const posts = defineCollection({
  loader: glob({
    base: "./src/content/vintages",
    pattern: "**/[^_]*.{md,mdx}",
  }),
  schema: z.object({
    wine: reference("vintages"),
    // tasting notes is an md or mdx file
  }),
});

export const collections = {
  posts,
  producers,
  vintages,
  wines,
};
