import { describe, it, expect } from "vitest";
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const CODEX_DIR = join(
  process.cwd(),
  "src/content/knowledge/ai-tools/codex",
);

const LEGACY_HOST = "developers.openai.com/codex";

/**
 * 旧ドメインを指してよい例外。
 * plugins/build だけは新ドメインへ移行しておらず、旧URLが 200 を返す。
 * learn.chatgpt.com/docs/plugins/build は 404 なので、置き換えてはいけない。
 */
const ALLOWED_LEGACY_PATHS = ["developers.openai.com/codex/plugins/build"];

const articles = readdirSync(CODEX_DIR)
  .filter((file) => file.endsWith(".mdx"))
  .map((file) => ({ file, body: readFileSync(join(CODEX_DIR, file), "utf-8") }));

describe("Codex リファレンスの公式ドキュメントURL", () => {
  it("記事が1件以上存在すること", () => {
    expect(articles.length).toBeGreaterThan(0);
  });

  it("旧ドメイン developers.openai.com/codex を参照していないこと", () => {
    const offenders: string[] = [];

    for (const { file, body } of articles) {
      for (const [index, line] of body.split("\n").entries()) {
        if (!line.includes(LEGACY_HOST)) continue;
        if (ALLOWED_LEGACY_PATHS.some((allowed) => line.includes(allowed))) {
          continue;
        }
        offenders.push(`${file}:${index + 1}`);
      }
    }

    // 2026-08-27 に learn.chatgpt.com へ移行済み。パスが再編されているため
    // 単純置換はできない。新規記事を書くときは移行先を個別に確認すること。
    expect(offenders, `旧ドメインへの参照が残っている: ${offenders.join(", ")}`).toEqual([]);
  });

  /**
   * 2026-08-27 に1件ずつ実アクセスして 200 を確認した移行先。
   * 旧ドメインは catch-all リダイレクトを持ち、存在しないパスでも 308 を返す。
   * さらにパスが再編されているため、prefix 一致による一括置換では
   * 実在しないURL（`/docs/app/features` など）が生成されうる。
   * 新しいURLを足すときは、必ず実アクセスで 200 を確認してからここへ追加する。
   */
  const VERIFIED_URLS = new Set([
    "https://learn.chatgpt.com/docs",
    "https://learn.chatgpt.com/docs/agent-approvals-security",
    "https://learn.chatgpt.com/docs/agent-configuration/agents-md",
    "https://learn.chatgpt.com/docs/agent-configuration/rules",
    "https://learn.chatgpt.com/docs/agent-configuration/speed",
    "https://learn.chatgpt.com/docs/agent-configuration/subagents",
    "https://learn.chatgpt.com/docs/app",
    "https://learn.chatgpt.com/docs/app-server",
    "https://learn.chatgpt.com/docs/automations?surface=app",
    "https://learn.chatgpt.com/docs/build-skills",
    "https://learn.chatgpt.com/docs/changelog",
    "https://learn.chatgpt.com/docs/chrome-extension",
    "https://learn.chatgpt.com/docs/cloud",
    "https://learn.chatgpt.com/docs/codex-sdk",
    "https://learn.chatgpt.com/docs/codex/cli",
    "https://learn.chatgpt.com/docs/codex/ide",
    "https://learn.chatgpt.com/docs/computer-use",
    "https://learn.chatgpt.com/docs/config-file/config-advanced",
    "https://learn.chatgpt.com/docs/config-file/config-basic",
    "https://learn.chatgpt.com/docs/config-file/config-reference",
    "https://learn.chatgpt.com/docs/config-file/config-sample",
    "https://learn.chatgpt.com/docs/customization/computer-history",
    "https://learn.chatgpt.com/docs/customization/memories?surface=app",
    "https://learn.chatgpt.com/docs/developer-commands?surface=cli",
    "https://learn.chatgpt.com/docs/enterprise/admin-setup",
    "https://learn.chatgpt.com/docs/enterprise/managed-configuration",
    "https://learn.chatgpt.com/docs/extend/mcp?surface=cli",
    "https://learn.chatgpt.com/docs/extend/record-and-replay",
    "https://learn.chatgpt.com/docs/features",
    "https://learn.chatgpt.com/docs/github-action",
    "https://learn.chatgpt.com/docs/hooks",
    "https://learn.chatgpt.com/docs/mcp-server",
    "https://learn.chatgpt.com/docs/models",
    "https://learn.chatgpt.com/docs/non-interactive-mode",
    "https://learn.chatgpt.com/docs/plugins",
    "https://learn.chatgpt.com/docs/pricing",
    "https://learn.chatgpt.com/docs/prompting",
    "https://learn.chatgpt.com/docs/quickstart",
    "https://learn.chatgpt.com/docs/sandboxing",
    "https://learn.chatgpt.com/docs/security",
    "https://learn.chatgpt.com/docs/security/faq",
    "https://learn.chatgpt.com/docs/security/setup",
    "https://learn.chatgpt.com/docs/security/threat-model",
    "https://learn.chatgpt.com/docs/third-party/github",
    "https://learn.chatgpt.com/docs/third-party/linear",
    "https://learn.chatgpt.com/docs/third-party/slack",
    "https://learn.chatgpt.com/guides/best-practices",
    "https://learn.chatgpt.com/use-cases",
  ]);

  it("learn.chatgpt.com のURLが、実アクセスで確認済みのものだけであること", () => {
    const unverified = new Set<string>();

    for (const { file, body } of articles) {
      const matches = body.match(/https:\/\/learn\.chatgpt\.com[^)\s"'`]*/g) ?? [];
      for (const raw of matches) {
        const url = raw.replace(/[.,、。]+$/, "");
        if (!VERIFIED_URLS.has(url)) unverified.add(`${file}: ${url}`);
      }
    }

    expect(
      [...unverified],
      `未検証のURLがある。実アクセスで 200 を確認してから VERIFIED_URLS へ追加すること`,
    ).toEqual([]);
  });
});
