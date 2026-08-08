import type {
  CategoryMeta,
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
  {
    slug: "ai-governance",
    label: "AI Governance",
    description:
      "生成AI導入におけるリスク管理・法的論点・組織統制の設計手法",
    icon: "shield",
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
      slug: "claude-code-curriculum",
      label: "Claude Code カリキュラム",
      description:
        "ゼロから Claude Code を業務で使いこなすための全10章・30レッスンの学習コース。非エンジニアでも順番に読み進められる構成",
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
  "web-development": [
    {
      slug: "supabase",
      label: "Supabase",
      description:
        "Postgres ベースのオープンソース BaaS。Database / Auth / Storage / Realtime / Edge Functions / RLS",
    },
    {
      slug: "vercel",
      label: "Vercel",
      description:
        "AI Cloud としてのデプロイプラットフォーム。Frameworks / Functions / Edge / WAF / AI Gateway / Sandbox",
    },
    {
      slug: "gas",
      label: "Google Apps Script",
      description:
        "Google Workspace 連携のサーバーレス JavaScript 実行環境。Spreadsheet / Gmail / Calendar の自動化",
    },
    {
      slug: "cloudflare",
      label: "Cloudflare",
      description:
        "Connectivity Cloud 思想のエッジネットワーク。Workers / R2 / D1 / Durable Objects / Zero Trust / WAF / DNS をアーキテクト判断軸で整理",
    },
  ],
  "ai-governance": [
    {
      slug: "guide",
      label: "AI導入ガバナンス解説",
      description:
        "生成AIのリスク・法律・統制を、実装可能な仕組みへ落とすための連載。全体像から統制設計、導入戦略まで",
    },
  ],
};

