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

    /**
     * Claude Code と Codex の日次パッチ記事を週次ロールアップへ再編成した際の
     * リダイレクト。旧記事の URL で拾われている流入を、該当週のまとめ記事へ送る。
     */
    "/ai-news/claude-code/claude-code-v2-1-128": "/ai-news/claude-code/claude-code-weekly-2026-05-10",
    "/ai-news/claude-code/claude-code-v2-1-132": "/ai-news/claude-code/claude-code-weekly-2026-05-10",
    "/ai-news/claude-code/claude-code-v2-1-136": "/ai-news/claude-code/claude-code-weekly-2026-05-10",
    "/ai-news/claude-code/claude-code-v2-1-138": "/ai-news/claude-code/claude-code-weekly-2026-05-10",
    "/ai-news/claude-code/claude-code-v2-1-139": "/ai-news/claude-code/claude-code-weekly-2026-05-17",
    "/ai-news/claude-code/claude-code-v2-1-140": "/ai-news/claude-code/claude-code-weekly-2026-05-17",
    "/ai-news/claude-code/claude-code-v2-1-141": "/ai-news/claude-code/claude-code-weekly-2026-05-17",
    "/ai-news/claude-code/claude-code-v2-1-143": "/ai-news/claude-code/claude-code-weekly-2026-05-17",
    "/ai-news/claude-code/claude-code-v2-1-144": "/ai-news/claude-code/claude-code-weekly-2026-05-24",
    "/ai-news/claude-code/claude-code-v2-1-145": "/ai-news/claude-code/claude-code-weekly-2026-05-24",
    "/ai-news/claude-code/claude-code-v2-1-147": "/ai-news/claude-code/claude-code-weekly-2026-05-24",
    "/ai-news/claude-code/claude-code-v2-1-146": "/ai-news/claude-code/claude-code-weekly-2026-05-24",
    "/ai-news/claude-code/claude-code-v2-1-149": "/ai-news/claude-code/claude-code-weekly-2026-05-24",
    "/ai-news/claude-code/claude-code-v2-1-152": "/ai-news/claude-code/claude-code-weekly-2026-05-31",
    "/ai-news/claude-code/claude-code-v2-1-153": "/ai-news/claude-code/claude-code-weekly-2026-05-31",
    "/ai-news/claude-code/claude-code-v2-1-157": "/ai-news/claude-code/claude-code-weekly-2026-05-31",
    "/ai-news/claude-code/claude-code-v2-1-162": "/ai-news/claude-code/claude-code-weekly-2026-06-07",
    "/ai-news/claude-code/claude-code-v2-1-163": "/ai-news/claude-code/claude-code-weekly-2026-06-07",
    "/ai-news/claude-code/claude-code-v2-1-165-167": "/ai-news/claude-code/claude-code-weekly-2026-06-07",
    "/ai-news/claude-code/claude-code-v2-1-166": "/ai-news/claude-code/claude-code-weekly-2026-06-07",
    "/ai-news/claude-code/claude-code-v2-1-169": "/ai-news/claude-code/claude-code-weekly-2026-06-14",
    "/ai-news/claude-code/claude-code-v2-1-172": "/ai-news/claude-code/claude-code-weekly-2026-06-14",
    "/ai-news/claude-code/claude-code-v2-1-173-175": "/ai-news/claude-code/claude-code-weekly-2026-06-14",
    "/ai-news/claude-code/claude-code-v2-1-176": "/ai-news/claude-code/claude-code-weekly-2026-06-14",
    "/ai-news/claude-code/claude-code-v2-1-178": "/ai-news/claude-code/claude-code-weekly-2026-06-21",
    "/ai-news/claude-code/claude-code-v2-1-181-config-commands": "/ai-news/claude-code/claude-code-weekly-2026-06-21",
    "/ai-news/claude-code/claude-code-v2-1-183": "/ai-news/claude-code/claude-code-weekly-2026-06-21",
    "/ai-news/claude-code/claude-code-v2-1-186": "/ai-news/claude-code/claude-code-weekly-2026-06-28",
    "/ai-news/claude-code/claude-code-v2-1-187": "/ai-news/claude-code/claude-code-weekly-2026-06-28",
    "/ai-news/claude-code/claude-code-v2-1-191": "/ai-news/claude-code/claude-code-weekly-2026-06-28",
    "/ai-news/claude-code/claude-code-v2-1-193": "/ai-news/claude-code/claude-code-weekly-2026-06-28",
    "/ai-news/claude-code/claude-code-v2-1-195": "/ai-news/claude-code/claude-code-weekly-2026-06-28",
    "/ai-news/claude-code/claude-code-v2-1-202-203": "/ai-news/claude-code/claude-code-weekly-2026-07-12",
    "/ai-news/claude-code/claude-code-v2-1-205-doctor": "/ai-news/claude-code/claude-code-weekly-2026-07-12",
    "/ai-news/claude-code/claude-code-v2-1-206": "/ai-news/claude-code/claude-code-weekly-2026-07-12",
    "/ai-news/claude-code/claude-code-v2-1-207": "/ai-news/claude-code/claude-code-weekly-2026-07-12",
    "/ai-news/claude-code/claude-code-v2-1-208": "/ai-news/claude-code/claude-code-weekly-2026-07-19",
    "/ai-news/claude-code/claude-code-v2-1-210": "/ai-news/claude-code/claude-code-weekly-2026-07-19",
    "/ai-news/claude-code/claude-code-v2-1-211": "/ai-news/claude-code/claude-code-weekly-2026-07-19",
    "/ai-news/claude-code/claude-code-v2-1-212": "/ai-news/claude-code/claude-code-weekly-2026-07-19",
    "/ai-news/claude-code/claude-code-v2-1-221": "/ai-news/claude-code/claude-code-weekly-2026-08-09",
    "/ai-news/claude-code/claude-code-v2-1-222": "/ai-news/claude-code/claude-code-weekly-2026-08-09",
    "/ai-news/claude-code/claude-code-v2-1-223": "/ai-news/claude-code/claude-code-weekly-2026-08-09",
    "/ai-news/claude-code/v2-1-232-fork-sessions-gitlab": "/ai-news/claude-code/claude-code-weekly-2026-08-16",
    "/ai-news/claude-code/v2-1-233-todo-tools-and-revert": "/ai-news/claude-code/claude-code-weekly-2026-08-16",
    "/ai-news/claude-code/v2-1-234-auto-continue-and-hardening": "/ai-news/claude-code/claude-code-weekly-2026-08-23",
    "/ai-news/claude-code/v2-1-235-spellcheck-and-permission-dialogs": "/ai-news/claude-code/claude-code-weekly-2026-08-23",
    "/ai-news/claude-code/v2-1-236-default-model-and-idle-notify": "/ai-news/claude-code/claude-code-weekly-2026-08-23",
    "/ai-news/claude-code/v2-1-237-238-concise-style-and-plugin-headers": "/ai-news/claude-code/claude-code-weekly-2026-08-23",
    "/ai-news/claude-code/v2-1-239-data-residency-cost-and-windows-messaging": "/ai-news/claude-code/claude-code-weekly-2026-08-23",
    "/ai-news/claude-code/v2-1-243-model-picker-pricing-and-console-signin": "/ai-news/claude-code/claude-code-weekly-2026-08-25",
    "/ai-news/claude-code/v2-1-246-bash-wildcard-warning-and-auto-mode-permissions": "/ai-news/claude-code/claude-code-weekly-2026-08-25",
    "/ai-news/codex/codex-rust-v0-131-0": "/ai-news/codex/codex-weekly-2026-05-24",
    "/ai-news/codex/codex-rust-v0-132-0": "/ai-news/codex/codex-weekly-2026-05-24",
    "/ai-news/codex/codex-rust-v0-133-0": "/ai-news/codex/codex-weekly-2026-05-24",
    "/ai-news/codex/codex-rust-v0-134-0": "/ai-news/codex/codex-weekly-2026-05-31",
    "/ai-news/codex/codex-rust-v0-135-0": "/ai-news/codex/codex-weekly-2026-05-31",
    "/ai-news/codex/codex-rust-v0-136-0": "/ai-news/codex/codex-weekly-2026-06-07",
    "/ai-news/codex/codex-rust-v0-137-0": "/ai-news/codex/codex-weekly-2026-06-07",
    "/ai-news/codex/codex-rust-v0-138-0": "/ai-news/codex/codex-weekly-2026-06-14",
    "/ai-news/codex/codex-rust-v0-139-0": "/ai-news/codex/codex-weekly-2026-06-14",
    "/ai-news/codex/codex-v0-140-0": "/ai-news/codex/codex-weekly-2026-06-21",
    "/ai-news/codex/codex-rust-v0-141-0": "/ai-news/codex/codex-weekly-2026-06-21",
    "/ai-news/codex/codex-v0-142-0": "/ai-news/codex/codex-weekly-2026-06-28",
    "/ai-news/codex/codex-v0-142-2": "/ai-news/codex/codex-weekly-2026-06-28",
    "/ai-news/codex/codex-rust-v0-143-0": "/ai-news/codex/codex-weekly-2026-07-12",
    "/ai-news/codex/codex-rust-v0-144-0": "/ai-news/codex/codex-weekly-2026-07-12",
    "/ai-news/codex/codex-rust-v0-148-0": "/ai-news/codex/codex-weekly-2026-08-23",
    "/ai-news/codex/codex-cli-v0-149-0": "/ai-news/codex/codex-weekly-2026-08-23",
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
