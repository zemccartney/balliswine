import { includeIgnoreFile } from "@eslint/compat";
import js from "@eslint/js";
import json from "@eslint/json";
// TODO Report bug
// Required for the config inspector to work when using the mdx plugin, which
// seems to assume you import the linter first (probably by way of defineConfig?)
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as linter from "eslint";
import prettier from "eslint-config-prettier";
import astro from "eslint-plugin-astro";
import * as mdx from "eslint-plugin-mdx";
import packageJson from "eslint-plugin-package-json";
import perfectionist from "eslint-plugin-perfectionist";
import unicorn from "eslint-plugin-unicorn";
import globals from "globals";
import Path from "node:path";
import Url from "node:url";
import tseslint from "typescript-eslint";

// TODO Switch to built-ins e.g. import.meta.dirname, circa node v20.11
const __filename = Url.fileURLToPath(import.meta.url);
const __dirname = Path.dirname(__filename);
const gitignorePath = Path.resolve(__dirname, ".gitignore");

export default tseslint.config(
  includeIgnoreFile(gitignorePath),
  {
    extends: [packageJson.configs.recommended],
    rules: {
      "package-json/require-description": "off",
    },
  },
  {
    extends: [json.configs.recommended],
    files: ["**/*.json"],
    ignores: ["package.json", "package-lock.json"],
    language: "json/json",
    rules: {
      "json/sort-keys": "error",
    },
  },
  {
    extends: [json.configs.recommended],
    files: ["**/*.jsonc", ".vscode/*.json"],
    language: "json/jsonc",
    rules: {
      "json/sort-keys": "error",
    },
  },
  {
    extends: [
      js.configs.recommended,
      tseslint.configs.strict,
      tseslint.configs.stylistic,
      unicorn.configs.recommended,
      perfectionist.configs["recommended-natural"],
    ],
    files: ["**/*.{js,ts,tsx,jsx,astro,mjs}"],
  },
  {
    files: ["*.{js,ts,mjs}"],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
  {
    rules: {
      "unicorn/no-keyword-prefix": ["off"],
      "unicorn/prevent-abbreviations": ["off"],
    },
  },
  ...astro.configs.recommended.filter((conf) => conf.files),
  ...astro.configs["jsx-a11y-strict"].filter((conf) => conf.files),
  {
    extends: [
      ...astro.configs.recommended.filter((conf) => !conf.files),
      ...astro.configs["jsx-a11y-strict"].filter((conf) => !conf.files),
    ],
    files: ["**/*.astro"],
    rules: {
      // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-module.md
      // accounts for Astro frontmatter not looking like an ES Module
      "unicorn/prefer-module": ["off"],
    },
  },
  // TODO unclear this is doing anything at all; documentation is truly horrid
  // plus, prettier appears to not know how to parse MDX expressions anyway e.g. escapes Markdown
  // characters in expressions i.e. interprets as md, not js e.g. {Math.PI * 2} --> {Math.PI /* 2}
  {
    extends: [mdx.flat],
  },
  prettier,
);
