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
  /**
   * Claude Code の tier 構成は code.claude.com/docs のセクション構造
   * （Getting Started / Core Concepts / Configuration / Features / Skills & Subagents /
   *  Advanced / Integrations / Reference）を踏まえ、当サイトの記事粒度に合わせて
   *  4 tier に集約。
   */
  "ai-tools/claude-code": [
    {
      order: 1,
      label: "Getting Started",
      description: "Claude Code の全体像をまず押さえる",
      sortOrderStart: 0,
    },
    {
      order: 2,
      label: "Extend & Build",
      description: "Hooks / Skills / Subagents / MCP / Memory / Agent SDK で拡張する",
      sortOrderStart: 1,
    },
    {
      order: 3,
      label: "Workflows & Modes",
      description: "Plan Mode / Routines / Auto Mode・他ツールとの比較",
      sortOrderStart: 8,
    },
    {
      order: 4,
      label: "Install & Operations",
      description: "セットアップ・日常運用・カスタムコマンド・Web/Headless",
      sortOrderStart: 12,
    },
  ],
  /**
   * Claude Code カリキュラムの tier 構成（全10章・各章3レッスン）。
   * sortOrder は「章番号 × 10 + レッスン連番」で振る（第1章 = 10,11,12 … 第10章 = 100,101,102）。
   */
  "ai-tools/claude-code-curriculum": [
    {
      order: 1,
      label: "第1章 Claude Code とは",
      description: "AI駆動開発の全体像・ユースケース・料金プランを押さえる",
      sortOrderStart: 10,
    },
    {
      order: 2,
      label: "第2章 セットアップ",
      description: "Windows / Mac へのインストールと初回起動の確認",
      sortOrderStart: 20,
    },
    {
      order: 3,
      label: "第3章 はじめての指示",
      description: "最初に覚えるプロンプトの型とファイル生成・データ整理",
      sortOrderStart: 30,
    },
    {
      order: 4,
      label: "第4章 業務自動化",
      description: "レポート作成・Excel加工・メール作成を自動化する",
      sortOrderStart: 40,
    },
    {
      order: 5,
      label: "第5章 プロンプト術",
      description: "CLAUDE.md の書き方と指示の精度を上げるテクニック",
      sortOrderStart: 50,
    },
    {
      order: 6,
      label: "第6章 Webアプリ",
      description: "LP・社内ツールを作って公開するまで",
      sortOrderStart: 60,
    },
    {
      order: 7,
      label: "第7章 データ分析",
      description: "競合調査・ダッシュボード・大量CSV処理",
      sortOrderStart: 70,
    },
    {
      order: 8,
      label: "第8章 MCP連携",
      description: "Notion / Google Drive / GitHub / Slack と接続する",
      sortOrderStart: 80,
    },
    {
      order: 9,
      label: "第9章 コスト管理",
      description: "料金の仕組み・トークン節約・予算設計",
      sortOrderStart: 90,
    },
    {
      order: 10,
      label: "第10章 組織導入",
      description: "チーム導入戦略・協業・セキュリティ",
      sortOrderStart: 100,
    },
  ],
  /**
   * Claude（claude.ai / Claude API）の tier 構成は
   * docs.claude.com の Models / Build with Claude / API Features の
   * 大分類に準拠。
   */
  "ai-tools/claude": [
    {
      order: 1,
      label: "Getting Started",
      description: "Claude 全体像と ant CLI",
      sortOrderStart: 0,
    },
    {
      order: 2,
      label: "Models & Plans",
      description: "Opus 4.7・Claude Design・Max プラン",
      sortOrderStart: 2,
    },
    {
      order: 3,
      label: "Build with Claude",
      description: "Artifacts / Files API / Agent Skills / Memory Tool",
      sortOrderStart: 5,
    },
    {
      order: 4,
      label: "API Features",
      description: "Interleaved Thinking / Citations / Structured Outputs / Prompt Caching",
      sortOrderStart: 9,
    },
  ],
  /**
   * ChatGPT は記事数が少ないため 2 tier に最小化。
   */
  "ai-tools/chatgpt": [
    {
      order: 1,
      label: "Overview & Models",
      description: "ChatGPT 全体像と GPT-5 系モデル",
      sortOrderStart: 0,
    },
    {
      order: 2,
      label: "Plans & Surfaces",
      description: "Pro $100 プランと Codex 統合",
      sortOrderStart: 2,
    },
  ],
  /**
   * Gemini の tier 構成は ai.google.dev の Models / API / Apps の分類と、
   * Google Workspace 系機能を分離したもの。
   */
  "ai-tools/gemini": [
    {
      order: 1,
      label: "Getting Started",
      description: "Gemini 全体像",
      sortOrderStart: 0,
    },
    {
      order: 2,
      label: "Models",
      description: "Gemini 3.1 Pro / Flash Live",
      sortOrderStart: 1,
    },
    {
      order: 3,
      label: "API & Tools",
      description: "API 料金・キャッシング・CLI Extensions・NotebookLM",
      sortOrderStart: 3,
    },
    {
      order: 4,
      label: "Apps & Workspace",
      description: "Deep Research / Workspace 機能 / Gems",
      sortOrderStart: 7,
    },
  ],
  /**
   * Supabase の tier 構成は記事ファイルの 10 単位プレフィックスに対応する。
   * 公式は Build / Auth & Security / Data / AI / Operations / Reference の分類で
   * ドキュメントを整理しており、当サイトでは安全度マップ・更新ダイジェスト・参考資料を
   * 末尾の独立 tier として持つ。
   */
  "web-development/supabase": [
    {
      order: 1,
      label: "Getting Started",
      description: "全体目次と読み方",
      sortOrderStart: 0,
    },
    {
      order: 2,
      label: "Overview",
      description: "Supabase の全体像",
      sortOrderStart: 10,
    },
    {
      order: 3,
      label: "Products",
      description: "Database / Auth / Storage / Realtime / Edge Functions / Data API / AI / Cron",
      sortOrderStart: 20,
    },
    {
      order: 4,
      label: "Security & Compliance",
      description: "コンプライアンス・RLS・Auth セキュリティ・ネットワーク・安全領域マップ",
      sortOrderStart: 30,
    },
    {
      order: 5,
      label: "Updates",
      description: "Launch Week / Changelog の継続的アップデート",
      sortOrderStart: 40,
    },
    {
      order: 6,
      label: "Reference",
      description: "SDK / CLI / Management API の俯瞰",
      sortOrderStart: 50,
    },
    {
      order: 7,
      label: "Hints & Sources",
      description: "プロダクト改善ヒントと一次ソース URL 集",
      sortOrderStart: 90,
    },
  ],
  /**
   * Vercel の tier 構成は記事ファイルの 10 単位プレフィックスに対応する。
   * 公式は Frameworks / Compute / Edge / Security / AI / Observability の分類で
   * ドキュメントを整理しており、当サイトでは AI Cloud（v0 / AI SDK / AI Gateway / MCP）
   * を独立 tier として持つ。
   */
  "web-development/vercel": [
    {
      order: 1,
      label: "Getting Started",
      description: "全体目次と読み方",
      sortOrderStart: 0,
    },
    {
      order: 2,
      label: "Overview",
      description: "AI Cloud としての全体像",
      sortOrderStart: 10,
    },
    {
      order: 3,
      label: "Build & Operate",
      description: "Frameworks / Functions / Routing / ISR / Deployments / Domains / Storage / Observability",
      sortOrderStart: 20,
    },
    {
      order: 4,
      label: "Security",
      description: "Compliance / WAF / Bot Management / Deployment Protection / DDoS / 安全領域マップ",
      sortOrderStart: 30,
    },
    {
      order: 5,
      label: "AI Cloud",
      description: "v0 & AI SDK / AI Gateway / MCP & Sandbox / AI Agents",
      sortOrderStart: 40,
    },
    {
      order: 6,
      label: "Updates",
      description: "Changelog ダイジェスト・Ship Week",
      sortOrderStart: 50,
    },
    {
      order: 7,
      label: "Reference",
      description: "CLI / REST API / SDK の俯瞰",
      sortOrderStart: 60,
    },
    {
      order: 8,
      label: "Hints & Sources",
      description: "プロダクト改善ヒントと一次ソース URL 集",
      sortOrderStart: 90,
    },
  ],
  /**
   * Cloudflare の tier 構成は、knowledge-vault 側で整理された
   * Tier 1: 開発者プラットフォーム中核 / Tier 2: Zero Trust /
   * Tier 3: Network & Edge / Tier 4: その他 の 4 階層に、
   * Overview / CLI を Getting Started として加えた構成。
   */
  "web-development/cloudflare": [
    {
      order: 1,
      label: "Getting Started",
      description: "Connectivity Cloud の全体像と CLI ツール群",
      sortOrderStart: 0,
    },
    {
      order: 2,
      label: "Tier 1: 開発者プラットフォーム中核",
      description: "Workers / Pages / R2 / D1 / KV / Durable Objects / Queues / Workers AI / AI Gateway / Vectorize / Hyperdrive / Stream / Images / Tunnel / Turnstile / Access / Workflows",
      sortOrderStart: 10,
    },
    {
      order: 3,
      label: "Tier 2: Zero Trust",
      description: "Browser Isolation / Gateway / DLP / CASB / DEX / Email Security",
      sortOrderStart: 30,
    },
    {
      order: 4,
      label: "Tier 3: Network & Edge",
      description: "WAF / DDoS / Rate Limiting / Bot Management / Argo / Magic Transit / Spectrum / Load Balancing / API Shield / Cache / Waiting Room",
      sortOrderStart: 40,
    },
    {
      order: 5,
      label: "Tier 4: その他",
      description: "DNS / Registrar / Email Routing / Containers / Radar / Pipelines / Secrets Store / Sandbox SDK / Workers for Platforms / Zaraz など",
      sortOrderStart: 60,
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
