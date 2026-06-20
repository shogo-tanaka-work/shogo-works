---
date: 2026-06-18
title: "Grok on Databricks — Lakehouse 上でエンタープライズ AI エージェントを構築"
service: "xAI / Grok"
source: https://x.ai/news/grok-databricks
fetched_at: 2026-06-20T15:32:13+09:00
published_at: 2026-06-18T00:00:00Z
date_precision: date-only
category: release
---

# 2026-06-18 Grok on Databricks — Lakehouse 上でエンタープライズ AI エージェントを構築

## 公式内容の日本語要約

Databricks 2026 Data + AI Summit に合わせ、Grok モデルが Databricks Agent Bricks に統合された。企業は Databricks Lakehouse 内の構造化・非構造化データを外部パイプライン不要でエンタープライズ AI エージェントの構築に利用できる。Unity Catalog のガバナンスルールが適用され、xAI 側はデータを保持しない（ゼロデータリテンション）。

## できるようになったこと

- Databricks Agent Bricks から Grok モデルをネイティブに呼び出し
- Lakehouse の構造化・非構造化データを外部転送なしで AI 推論に利用可能
- Unity Catalog のアクセス制御・監査ログがそのまま適用される
- xAI は顧客データを学習に使用しない（ゼロデータリテンション）
- 他フロンティアモデル（Claude 等）と同一プラットフォーム上で並列利用可能

## 影響範囲

- 対象ユーザー: Databricks 企業顧客（Fortune 500 規模が主なターゲット）
- 対象プラン: Databricks Agent Bricks 契約
- API / UI / 管理者機能: Databricks UI + xAI API 経由

## 教材化メモ

「データガバナンスを保ちながら LLM を使う」というエンタープライズ AI の重要テーマ。Unity Catalog + ゼロデータリテンションという組み合わせが、情シス・法務部門が AI 導入を判断する際のチェックポイントとして教材化できる。Bedrock 統合（同週発表）との比較も有用（AWS vs Databricks という文脈）。

## 原文確認

- 公式見出し: xAI Grok now available on Databricks Agent Bricks
- 公式URL: https://x.ai/news/grok-databricks
- 原文全文は公式ページで確認してください。
