import type { KnowledgeCategory } from "@/types";

/**
 * サブカテゴリ内の記事を tier 単位でグループ化するためのレジストリ。
 *
 * 各 tier は `sortOrderStart` を持ち、その値以上で次の tier の `sortOrderStart` 未満の
 * sortOrder を持つ記事が、その tier に属する。最後の tier は `sortOrderStart` 以上の
 * すべてを含む。
 *
 * 記事ファイル側に tier フィールドは持たない。sortOrder の振り方で tier 帰属が決まる。
 * これにより新規記事追加時は適切な sortOrder を選ぶだけで自動的に正しい tier に配置される。
 */
export interface KnowledgeTier {
  /** tier番号（1始まり）。表示時に "Tier 1" のように使う */
  order: number;
  /** 見出しに表示するラベル */
  label: string;
  /** 補足説明（任意）。サブタイトル相当として表示 */
  description?: string;
  /** この tier の開始 sortOrder。次の tier の開始未満までがこの tier に含まれる */
  sortOrderStart: number;
}

/**
 * `${category.slug}/${subcategory.slug}` をキーとする tier 定義。
 * 登録されていないサブカテゴリは tier 表示なしのフラットリストにフォールバック。
 */
export type KnowledgeTierRegistry = Record<string, KnowledgeTier[]>;

/**
 * Codex の tier 構成は、公式ドキュメント（developers.openai.com/codex）の
 * 左サイドバー構造に準拠している。
 *
 * 公式: Getting Started / Concepts / App / IDE / CLI / Web / Integrations / Security /
 *       Configuration / Plugins / Administration & Enterprise / Automation / Learn / Releases
 *
 * 当サイトでは Releases 相当はナレッジに置かないため除外し、Learn を best-practices と
 * Cookbook の 2 階層に分けて 14 tier 構成とする。
 */
export const knowledgeTiers: KnowledgeTierRegistry = {
  "ai-tools/codex": [
    {
      order: 1,
      label: "Getting Started",
      description: "Codex の全体像、料金、Claude Code との比較から始める入門編",
      sortOrderStart: 0,
    },
    {
      order: 2,
      label: "Concepts",
      description: "プロンプト・ワークフロー・モデル・サンドボックス・サブエージェント・メモリの中核概念",
      sortOrderStart: 5,
    },
    {
      order: 3,
      label: "App",
      description: "Codex App（Desktop / Web）と Chrome 拡張・Computer Use",
      sortOrderStart: 11,
    },
    {
      order: 4,
      label: "IDE Extension",
      description: "VS Code / Cursor / Windsurf / JetBrains での使い方",
      sortOrderStart: 14,
    },
    {
      order: 5,
      label: "CLI",
      description: "Codex CLI の機能・コマンドリファレンス・スラッシュコマンド",
      sortOrderStart: 15,
    },
    {
      order: 6,
      label: "Web (Cloud)",
      description: "ブラウザから動かす並列タスク環境",
      sortOrderStart: 18,
    },
    {
      order: 7,
      label: "Integrations",
      description: "Slack / Linear などの外部サービス連携",
      sortOrderStart: 19,
    },
    {
      order: 8,
      label: "Security",
      description: "Codex Security と脅威モデル",
      sortOrderStart: 20,
    },
    {
      order: 9,
      label: "Configuration",
      description: "config.toml の Basics → Advanced → Reference → Sample、Speed / Rules / Hooks / AGENTS.md / MCP",
      sortOrderStart: 21,
    },
    {
      order: 10,
      label: "Plugins & Skills",
      description: "Plugins 概要 / 自作 / Marketplace / Agent Skills",
      sortOrderStart: 30,
    },
    {
      order: 11,
      label: "Administration & Enterprise",
      description: "Workspace 管理者向けセットアップとガバナンス",
      sortOrderStart: 34,
    },
    {
      order: 12,
      label: "Automation",
      description: "Automations / GitHub Action / SDK による自動化",
      sortOrderStart: 35,
    },
    {
      order: 13,
      label: "Learn (Best Practices)",
      description: "現場で効くベストプラクティス",
      sortOrderStart: 38,
    },
    {
      order: 14,
      label: "Cookbook 実践レシピ",
      description: "実装シナリオ別のレシピ集",
      sortOrderStart: 39,
    },
  ],
};

/** カテゴリ × サブカテゴリの tier 定義を取得 */
export function getTiersFor(
  category: KnowledgeCategory,
  subcategory: string,
): KnowledgeTier[] | undefined {
  return knowledgeTiers[`${category}/${subcategory}`];
}
