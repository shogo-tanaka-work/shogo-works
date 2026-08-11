import type { FeaturedKnowledgeItem } from "@/types";

/**
 * トップページ「注目のナレッジ」に表示するピックアップ記事。
 * 並び順がそのまま表示順になる。
 */
export const featuredKnowledge: FeaturedKnowledgeItem[] = [
  {
    title: "Claude Code 全体像",
    description:
      "Anthropic 公式の AI コーディングエージェント Claude Code の機能と運用ポイントを俯瞰。",
    href: "/knowledge/ai-tools/claude-code/overview",
    categoryLabel: "Claude Code",
  },
  {
    title: "Codex 全体像",
    description:
      "OpenAI の Codex（CLI / IDE / Cloud / SDK）の全体像と Claude Code との比較。",
    href: "/knowledge/ai-tools/codex/overview",
    categoryLabel: "Codex",
  },
  {
    title: "コンテキストエンジニアリング完全ガイド",
    description:
      "ウィンドウ管理・RAG・メモリ設計まで「プロンプトの外側」を設計する考え方。",
    href: "/knowledge/context-engineering/context-engineering-complete-guide",
    categoryLabel: "Context Engineering",
  },
  {
    title: "Harness Engineering 完全ガイド",
    description:
      "AI エージェントを個人利用から本番運用に乗せる「ハーネス」の設計原則。",
    href: "/knowledge/harness-engineering/harness-engineering-complete-guide",
    categoryLabel: "Harness Engineering",
  },
  {
    title: "Knowledge Base ロードマップ",
    description:
      "目的別に「何をどの順で読むか」を整理した学習パス集。最初の入口として。",
    href: "/knowledge/roadmap",
    categoryLabel: "Roadmap",
  },
];
