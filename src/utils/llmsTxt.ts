import { categories } from "@/data/knowledge";
import { personProfile } from "@/data/person";
import { services } from "@/data/services";
import { siteConfig } from "@/data/site";

const toAbsoluteUrl = (path: string): string => new URL(path, siteConfig.url).href.replace(/\/$/, "");

const link = (label: string, path: string, note?: string): string =>
  `- [${label}](${toAbsoluteUrl(path)})${note ? `: ${note}` : ""}`;

/**
 * /llms.txt の本文を組み立てる（https://llmstxt.org の形式）。
 * サービス・Knowledge カテゴリ・著者情報は src/data から引き、掲載内容と揃える。
 */
export function buildLlmsTxt(): string {
  return [
    `# ${siteConfig.name}`,
    "",
    `> ${personProfile.name}（${personProfile.jobTitle}）の個人サイト。${personProfile.description}`,
    "",
    "業務委託・受託でのアプリ開発とAI業務自動化のサービス案内、支援事例、Claude Code・Codex などのAI開発ツールとWeb開発の技術解説（Knowledge Base）、AIツールの更新情報（AI News）を掲載しています。",
    "",
    `AIによる利用方針（robots.txt の Content-Signal と同じ）: ${siteConfig.contentSignal}。検索結果やAIの回答での引用・要約は歓迎しますが、モデルの学習には利用しないでください。`,
    "",
    "## 主要ページ",
    "",
    link("About", "/about", "経歴・実績・各媒体のアカウント"),
    link("サービス一覧", "/services", "提供サービスと料金、申し込み先"),
    link("支援事例", "/cases", "課題・支援内容・成果の事例"),
    link("Knowledge Base", "/knowledge", "AI開発ツールとWeb開発の技術解説"),
    link("AI News", "/ai-news", "AIツールの更新情報"),
    link("お問い合わせ", "/contact"),
    "",
    "## サービス",
    "",
    ...services.map((service) => link(service.title, service.href, service.description)),
    "",
    "## Knowledge Base カテゴリ",
    "",
    ...categories.map((category) =>
      link(category.label, `/knowledge/${category.slug}`, category.description),
    ),
    "",
    "## 著者",
    "",
    `- 名前: ${personProfile.name}（${personProfile.alternateName.join(" / ")}）`,
    `- 肩書き: ${personProfile.jobTitle}`,
    `- プロフィール: ${toAbsoluteUrl("/about")}`,
    ...personProfile.sameAs.map((url) => `- ${url}`),
    "",
  ].join("\n");
}
