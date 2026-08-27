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
  /**
   * 第6章「作業を仕組みにする」を新設した際に、旧第6〜10章を第7〜11章へ
   * 繰り下げた。旧URLからの流入を保つためのリダイレクト。
   */
  redirects: {
    "/knowledge/ai-tools/claude-code-curriculum/06-1-landing-page": "/knowledge/ai-tools/claude-code-curriculum/07-1-landing-page",
    "/knowledge/ai-tools/claude-code-curriculum/06-2-internal-tool": "/knowledge/ai-tools/claude-code-curriculum/07-2-internal-tool",
    "/knowledge/ai-tools/claude-code-curriculum/06-3-deploy-vercel": "/knowledge/ai-tools/claude-code-curriculum/07-3-deploy-vercel",
    "/knowledge/ai-tools/claude-code-curriculum/07-1-competitor-research": "/knowledge/ai-tools/claude-code-curriculum/08-1-competitor-research",
    "/knowledge/ai-tools/claude-code-curriculum/07-2-kpi-dashboard": "/knowledge/ai-tools/claude-code-curriculum/08-2-kpi-dashboard",
    "/knowledge/ai-tools/claude-code-curriculum/07-3-large-csv": "/knowledge/ai-tools/claude-code-curriculum/08-3-large-csv",
    "/knowledge/ai-tools/claude-code-curriculum/08-1-what-is-mcp": "/knowledge/ai-tools/claude-code-curriculum/09-1-what-is-mcp",
    "/knowledge/ai-tools/claude-code-curriculum/08-2-notion-gdrive": "/knowledge/ai-tools/claude-code-curriculum/09-2-notion-gdrive",
    "/knowledge/ai-tools/claude-code-curriculum/08-3-github-slack": "/knowledge/ai-tools/claude-code-curriculum/09-3-github-slack",
    "/knowledge/ai-tools/claude-code-curriculum/09-1-token-billing": "/knowledge/ai-tools/claude-code-curriculum/10-1-token-billing",
    "/knowledge/ai-tools/claude-code-curriculum/09-2-token-saving": "/knowledge/ai-tools/claude-code-curriculum/10-2-token-saving",
    "/knowledge/ai-tools/claude-code-curriculum/09-3-budget-planning": "/knowledge/ai-tools/claude-code-curriculum/10-3-budget-planning",
    "/knowledge/ai-tools/claude-code-curriculum/10-1-team-adoption": "/knowledge/ai-tools/claude-code-curriculum/11-1-team-adoption",
    "/knowledge/ai-tools/claude-code-curriculum/10-2-team-collaboration": "/knowledge/ai-tools/claude-code-curriculum/11-2-team-collaboration",
    "/knowledge/ai-tools/claude-code-curriculum/10-3-security": "/knowledge/ai-tools/claude-code-curriculum/11-3-security",
  },
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
