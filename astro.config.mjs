// @ts-check

import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import expressiveCode from "astro-expressive-code";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

export default defineConfig({
  site: "https://fujadatorre.github.io",
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    expressiveCode({
      themes: ["github-light", "github-dark"],
      useDarkModeMediaQuery: false,
      themeCssSelector: (theme) => (theme.name.includes("dark") ? ".dark" : ":root"),
    }),
    mdx({
      remarkPlugins: [remarkMath],
      rehypePlugins: [
        [
          rehypeKatex,
          {
            throwOnError: false,
            macros: {
              "\\ket": "\\left|#1\\right\\rangle",
              "\\bra": "\\left\\langle#1\\right|",
              "\\braket": "\\left\\langle#1\\middle|#2\\right\\rangle",
            },
          },
        ],
      ],
    }),
    sitemap()
  ],
});
