import type { CategoryMeta } from "@/types";

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
