import { includeIgnoreFile } from "@eslint/compat";
import eslint from "@eslint/js";
import eslintPluginJson from "@eslint/json";
import eslintPluginMarkdown from "@eslint/markdown";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginAstro from "eslint-plugin-astro";
import eslintPackageJson from "eslint-plugin-package-json";
import eslintPerfectionist from "eslint-plugin-perfectionist";
import eslintPluginUnicorn from "eslint-plugin-unicorn";
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
    extends: [eslintPackageJson.configs.recommended],
    rules: {
      "package-json/require-description": "off",
    },
  },
  {
    files: ["**/*.json"],
    ignores: ["package.json", "package-lock.json"],
    language: "json/json",
    ...eslintPluginJson.configs.recommended,
    rules: {
      "json/sort-keys": "error",
    },
  },
  {
    files: ["**/*.jsonc", ".vscode/*.json"],
    language: "json/jsonc",
    ...eslintPluginJson.configs.recommended,
    rules: {
      "json/sort-keys": "error",
    },
  },
  {
    extends: [
      eslint.configs.recommended,
      tseslint.configs.strict,
      tseslint.configs.stylistic,
      eslintPluginUnicorn.configs.recommended,
      eslintPerfectionist.configs["recommended-natural"],
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
  ...eslintPluginAstro.configs.recommended.filter((conf) => conf.files),
  ...eslintPluginAstro.configs["jsx-a11y-strict"].filter((conf) => conf.files),
  {
    extends: [
      ...eslintPluginAstro.configs.recommended.filter((conf) => !conf.files),
      ...eslintPluginAstro.configs["jsx-a11y-strict"].filter(
        (conf) => !conf.files,
      ),
    ],
    files: ["**/*.astro"],
    rules: {
      // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-module.md
      // accounts for Astro frontmatter not looking like an ES Module
      "unicorn/prefer-module": ["off"],
    },
  },
  {
    // TODO This is gross, but was getting the error: "Key "language": Could not find "gfm" in plugin "markdown"", didn't feel like digging into it
    // Maybe something with the tseslint helper?
    ...eslintPluginMarkdown.configs.recommended[0],
    language: "markdown/gfm",
    languageOptions: {
      frontmatter: "yaml",
    },
  },
  eslintConfigPrettier,
);
