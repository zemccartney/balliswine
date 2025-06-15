import type { Loader } from "astro/loaders";

import { file, glob } from "astro/loaders";
import { defineCollection, reference, z } from "astro:content";
import Fs from "node:fs/promises";
import Path from "node:path";
import Url from "node:url";

const makers = defineCollection({
  loader: glob({
    base: "./src/content/makers",
    pattern: "**/[^_]*.{md,mdx}",
  }),
  schema: z.object({
    coordinates: z.tuple([z.number(), z.number()]),
    location: z.string(),
    name: z.string(),
    website: z.string().url().optional(),
  }),
});

const wines = defineCollection({
  loader: file("src/content/wines.json"),
  schema: z.object({
    hue: z.string(),
    maker: reference("makers"),
    name: z.string(),
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

// An experiment to see if I could tie together related markdown fields on the same entry
// i.e. the main content and the intro content. Successful, but with rough edges.
// Review the history of pages/[slug].astro, revert back to the inline intro loading
// and rendering approach if this turns out even remotely painful to maintain. Was a fun
// experiment, but really not worth the additional hassle, given how the intro is used
// on only one page (different story if a pattern spread across a larger area)
const PostLoader = (): Loader => {
  const globLoader = glob({
    base: "./src/content/posts",
    pattern: ["**/[^_]*.{md,mdx}", "!**/intro.md"],
  });

  const __filename = Url.fileURLToPath(import.meta.url);
  const __dirname = Path.dirname(__filename);

  return {
    load: async (ctx) => {
      const syncData = async () => {
        await globLoader.load(ctx);

        const entries = ctx.store.entries();

        for (const [id, record] of entries) {
          // using vite's import.meta file loading APIs triggered an odd, low-level
          // module resolution-like error from vite
          const md = await Fs.readFile(
            Path.resolve(__dirname, `./content/posts/${id}/intro.md`),
            {
              encoding: "utf8",
            },
          );

          const data = {
            ...record.data,
            intro: {
              rendered: await ctx.renderMarkdown(md),
            },
          };

          ctx.store.set({
            data,
            digest: ctx.generateDigest(data),
            filePath: record.filePath,
            id,
            rendered: record.rendered,
          });
        }
      };

      await syncData();

      /* 
        Idea is to layer intro rendering on top of the base glob loader i.e. any loading / changes,
        so we need to do so not just on initial load, but on any changes to the main posts, too

        known issue: whenever this runs, the intro content is refreshed and browser reloads,
        but not before flashing an error like 
        
        [ERROR] [InvalidContentEntryDataError] posts → 2025-02-21/intro data does not match collection schema.
        [0] vintage: Did not match union.

        saw the same error with a since-deleted version of the watcher that updated only the record whose intro
        had changed instead of refreshing the entire collection, so root doesn't seem to be calling glob()

        Also, keep seeing the following in console on repeated reloads:
        [Shiki] 20 instances have been created. Shiki is supposed to be used as a singleton, consider refactoring your code to cache your highlighter instance; Or call `highlighter.dispose()` to release unused instances.

        Unclear if happens using astro's loaders or a custom-loader-specific issue
      */
      const onChange = async (changedPath: string) => {
        if (changedPath.includes("content/posts")) {
          // heavy-handed, but given fragility of this setup, opted to minimize code
          // here, given essentially-zero performance stakes
          await syncData();
        }
      };

      ctx.watcher?.on("change", onChange);
      ctx.watcher?.on("add", onChange);
      // TODO unlink
    },
    name: "posts-loader",
  };
};

const posts = defineCollection({
  loader: PostLoader(),
  schema: z.object({
    // Unfortunate; ideally, this would enforce the presence of an intro
    // however, since the glob loader calls this schema, too, and we don't set the intro
    // until after that loader, as a post-processing step, enforcing a value here would
    // trigger validation errors in that initial load
    intro: z.any().optional(),
    vintage: reference("vintages"),
  }),
});

export const collections = {
  makers,
  posts,
  vintages,
  wines,
};
