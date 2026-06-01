import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";
import cloudflare from "@astrojs/cloudflare";
import sitemap from "@astrojs/sitemap";
import rehypeExternalLinks from "rehype-external-links";

const proc = (globalThis as { process?: { env?: Record<string, string | undefined> } }).process;
const isTest = proc?.env?.VITEST === "true" || proc?.env?.NODE_ENV === "test";

export default defineConfig({
  site: "https://shogoworks.com",
  ...(isTest ? {} : { adapter: cloudflare() }),
  markdown: {
    shikiConfig: {
      theme: "one-dark-pro",
      wrap: false,
    },
  },
  integrations: [
    react(),
    mdx({
      rehypePlugins: [
        [
          rehypeExternalLinks,
          { target: "_blank", rel: ["noopener", "noreferrer"] },
        ],
      ],
    }),
    sitemap(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
