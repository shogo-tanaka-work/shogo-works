---
date: 2026-07-16
title: "Gemini Enterprise Agent Platform に Parallel Web Search によるGrounding機能追加"
service: "Gemini / Gemini Enterprise Agent Platform"
source: https://developers.googleblog.com/en/expanding-choice-in-gemini-enterprise-agent-platform-introducing-grounding-with-parallel-web-search/
fetched_at: 2026-07-17T08:40:00+09:00
published_at: 2026-07-16T00:00:00Z
date_precision: date-only
category: enhancement
---

# 2026-07-16 Gemini Enterprise Agent Platform に Parallel Web Search Groundingを追加

## 公式内容の日本語要約

Google CloudがParallel Web SystemsをGemini Enterprise Agent Platform向けのネイティブGrounding（根拠付け）プロバイダーとして統合した。既存のGoogle検索によるGroundingに加えて選択できる新しい選択肢で、Web検索結果を正確な出典citation付きで取得できる。Gemini API経由での呼び出し、Agent Studioでの選択、Google Cloud Marketplace経由（既存のGoogle Cloud請求に統合）のいずれでも利用可能。

## できるようになったこと

- Gemini Enterprise Agent Platformで、Google検索によるGroundingに加えてParallel Web Searchを選択可能に
- 構造化出力（JSON）へのWebデータ抽出、他LLMでの後処理、マルチエージェントオーケストレーションなど柔軟な用途に対応
- KYC確認、カタログ強化、コンプライアンスチェック、デューデリジェンスなど正確性が求められるエンタープライズ用途を想定

## 影響範囲

- 対象ユーザー: Gemini Enterprise Agent Platformを利用する開発者・エンタープライズ（金融、法務、テック業界を想定）
- 対象プラン: Google Cloud Marketplace経由の従量課金
- API / UI / 管理者機能: Gemini API、Agent Studio、Google Cloud Marketplace

## 教材化メモ

Grounding選択肢の多様化はRAG/エージェント構築の実務に直結するテーマ。既存の「Google検索Grounding」との使い分け（citation精度・コスト・データソースの違い）を比較できると教材価値が高い。

## 原文確認

- 公式見出し: Expanding Choice in Gemini Enterprise Agent Platform: Introducing Grounding with Parallel Web Search
- 公式URL: https://developers.googleblog.com/en/expanding-choice-in-gemini-enterprise-agent-platform-introducing-grounding-with-parallel-web-search/
- 原文全文は公式ページで確認してください。
