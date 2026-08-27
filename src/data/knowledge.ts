import type {
  CategoryMeta,
  ContentTypeMeta,
  DifficultyMeta,
  KnowledgeCategory,
  KnowledgeContentType,
  KnowledgeDifficulty,
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
    slug: "loop-engineering",
    label: "Loop Engineering",
    description:
      "AIエージェントの反復実行・評価・再試行・停止条件を設計する手法",
    icon: "settings",
  },
  {
    slug: "graph-engineering",
    label: "Graph Engineering",
    description:
      "AIワークフローの分岐・並列・合流・状態遷移をグラフとして設計する手法",
    icon: "layers",
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
      slug: "claude-code-curriculum",
      label: "Claude Code 入門コース",
      description:
        "はじめての方はこちら。ゼロから Claude Code を業務で使いこなすための全11章・36レッスン。非エンジニア向けに、日本語で指示を出す形だけで進められる構成",
    },
    {
      slug: "claude-code",
      label: "Claude Code リファレンス",
      description:
        "入門コースを終えた方向け。設定ファイル・権限設計・Hooks / Skills / サブエージェント / MCP / Agent SDK を、必要なときに引くための解説",
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

/**
 * 難易度の表示メタ。星の数と「前提知識の目安」を組にして持つ。
 * 前提知識を独立した見出しにせず、難易度表記へ畳んで見せるための対応表。
 */
export const difficulties: DifficultyMeta[] = [
  {
    value: "beginner",
    label: "入門",
    stars: 1,
    note: "前提知識ゼロでも読めます",
  },
  {
    value: "intermediate",
    label: "実践",
    stars: 3,
    note: "基本的な操作を一度試したことがある前提です",
  },
  {
    value: "advanced",
    label: "応用",
    stars: 5,
    note: "開発の実務経験がある方向けです",
  },
];

/** 記事の性格の表示メタ */
export const contentTypes: ContentTypeMeta[] = [
  {
    value: "course",
    label: "学習コース",
    description: "順番に読み進める教材",
  },
  {
    value: "reference",
    label: "リファレンス",
    description: "必要なときに引く解説",
  },
  {
    value: "docs-digest",
    label: "ドキュメント要約",
    description: "公式ドキュメントの要点整理",
  },
  {
    value: "news",
    label: "アップデート解説",
    description: "製品の新機能・変更点の解説",
  },
];

/** 難易度の表示メタを引く。未定義の値は null を返す */
export function getDifficultyMeta(
  value: KnowledgeDifficulty | undefined,
): DifficultyMeta | null {
  if (value === undefined) return null;
  return difficulties.find((d) => d.value === value) ?? null;
}

/** 記事種別の表示メタを引く。未定義の値は null を返す */
export function getContentTypeMeta(
  value: KnowledgeContentType | undefined,
): ContentTypeMeta | null {
  if (value === undefined) return null;
  return contentTypes.find((c) => c.value === value) ?? null;
}
