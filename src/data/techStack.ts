import type { TechCategory } from "@/types";

/**
 * トップページ「取り扱い技術」セクション。
 * 各カテゴリは代表的なものだけを挙げ、網羅的な一覧は /skills に任せる。
 */
export const techStack: TechCategory[] = [
  {
    key: "frontend",
    label: "フロントエンド",
    items: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "TypeScript" },
      { name: "React" },
      { name: "Next.js" },
    ],
  },
  {
    key: "backend",
    label: "バックエンド",
    items: [
      { name: "Node.js" },
      { name: "Python" },
      { name: "Supabase (PostgreSQL)" },
      { name: "MongoDB" },
    ],
  },
  {
    key: "infrastructure",
    label: "インフラ（クラウド）",
    items: [
      { name: "Microsoft Azure" },
      { name: "AWS" },
      { name: "Linux (Ubuntu)" },
      { name: "Cloudflare" },
      { name: "Vercel" },
    ],
  },
  {
    key: "dev-tools",
    label: "開発ツール",
    items: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "VS Code" },
      { name: "Docker" },
    ],
  },
  {
    key: "ai-llm",
    label: "AI / LLM",
    items: [
      { name: "ChatGPT" },
      { name: "Codex" },
      { name: "Claude" },
      { name: "Claude Code" },
      { name: "Gemini" },
    ],
  },
];
