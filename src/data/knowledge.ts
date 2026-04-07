import type { CategoryMeta, ExternalArticle } from "@/types";

export const categories: CategoryMeta[] = [
  {
    slug: "ai-tools",
    label: "AI Tools",
    description:
      "Claude、ChatGPT、Cursorなど、AI開発ツールの活用法と実践テクニック",
    icon: "brain",
  },
  {
    slug: "web-development",
    label: "Web開発",
    description: "Astro、React、TypeScriptなど、モダンWeb開発の知見と実装パターン",
    icon: "code",
  },
  {
    slug: "devops",
    label: "DevOps",
    description:
      "Cloudflare、CI/CD、インフラ構築など、開発運用の効率化ノウハウ",
    icon: "server",
  },
  {
    slug: "career",
    label: "キャリア",
    description:
      "AI時代のエンジニアリングキャリア、フリーランス、スキル戦略",
    icon: "rocket",
  },
];

// 外部プラットフォームに公開した記事
// 記事を追加する場合はここにエントリを追加する
export const externalArticles: ExternalArticle[] = [
  // 例:
  // {
  //   id: "zenn-claude-code-intro",
  //   title: "Claude Codeで開発ワークフローを変える",
  //   description: "Anthropic公式CLIツールの基本的な使い方と活用パターン",
  //   category: "ai-tools",
  //   tags: ["claude", "cli", "ai-coding"],
  //   publishedAt: new Date("2026-04-07"),
  //   platform: "zenn",
  //   url: "https://zenn.dev/username/articles/claude-code-intro",
  // },
];
