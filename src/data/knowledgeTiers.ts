import type { KnowledgeCategory } from "@/types";

/**
 * サブカテゴリ内の記事を読者導線に沿って tier 単位で見出し付き表示するためのレジストリ。
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

export const knowledgeTiers: KnowledgeTierRegistry = {
  "ai-tools/codex": [
    {
      order: 1,
      label: "入門・選択",
      description: "Codex とは何か、自分に合うか、料金とモデルの選び方",
      sortOrderStart: 0,
    },
    {
      order: 2,
      label: "各サーフェス",
      description: "CLI / IDE / Codex App / Cloud / Chrome 拡張 / Computer Use",
      sortOrderStart: 6,
    },
    {
      order: 3,
      label: "コア機能・概念",
      description: "プロンプト・ワークフロー・設定・安全制御・拡張機構",
      sortOrderStart: 12,
    },
    {
      order: 4,
      label: "リファレンス",
      description: "config.toml / CLI コマンド / スラッシュコマンド",
      sortOrderStart: 20,
    },
    {
      order: 5,
      label: "統合・拡張",
      description: "MCP / Marketplace / SDK / GitHub Action / Slack / Linear",
      sortOrderStart: 23,
    },
    {
      order: 6,
      label: "エンタープライズ",
      description: "管理者セットアップ・Codex Security と脅威モデル",
      sortOrderStart: 29,
    },
    {
      order: 7,
      label: "ベストプラクティス",
      description: "プロンプト設計・運用設計・段階解放",
      sortOrderStart: 31,
    },
    {
      order: 8,
      label: "Cookbook 実践レシピ",
      description: "実装シナリオ別のレシピ集",
      sortOrderStart: 32,
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
