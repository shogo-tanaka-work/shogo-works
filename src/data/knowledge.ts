import type {
  CategoryMeta,
  ExternalArticle,
  KnowledgeCategory,
  SubcategoryMeta,
} from "@/types";

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
  {
    slug: "prompt-engineering",
    label: "Prompt Engineering",
    description:
      "LLMから最適な出力を引き出すためのプロンプト設計・構造化テクニック",
    icon: "message-square",
  },
  {
    slug: "context-engineering",
    label: "Context Engineering",
    description: "LLMに渡すコンテキストの設計・最適化・管理の手法",
    icon: "layers",
  },
  {
    slug: "harness-engineering",
    label: "Harness Engineering",
    description:
      "AIエージェントの実行環境・ツール連携・ワークフロー制御の設計手法",
    icon: "settings",
  },
];

export const subcategories: Partial<
  Record<KnowledgeCategory, SubcategoryMeta[]>
> = {
  "ai-tools": [
    {
      slug: "claude-code",
      label: "Claude Code",
      description:
        "Anthropic公式のエージェント型コーディングCLI。Skills / MCP / Hooks / Sub-agentsの活用",
    },
    {
      slug: "codex",
      label: "OpenAI Codex",
      description:
        "OpenAIのクラウド型コーディングエージェント。CLI / IDE拡張 / クラウドエージェント",
    },
    {
      slug: "chatgpt",
      label: "ChatGPT",
      description:
        "OpenAIの汎用AIアシスタント。GPT-5系モデル、Custom GPTs、ChatGPT Agent",
    },
    {
      slug: "gemini",
      label: "Gemini",
      description:
        "Google DeepMindの汎用AIアシスタント。Gemini 3系、Code Assist、Gemini CLI",
    },
    {
      slug: "claude",
      label: "Claude",
      description:
        "Anthropicの汎用AIアシスタント（claude.ai）。Claude 4.6系、Artifacts、Skills、Projects",
    },
  ],
};

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
  //   sortOrder: 0,
  //   createdAt: new Date("2026-04-07"),
  //   platform: "zenn",
  //   url: "https://zenn.dev/username/articles/claude-code-intro",
  // },
];
