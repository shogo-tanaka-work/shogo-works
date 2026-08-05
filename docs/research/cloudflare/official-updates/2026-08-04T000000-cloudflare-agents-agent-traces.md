---
date: 2026-08-04
title: "Cloudflare Agents 発表 — デプロイ済みエージェントを一元管理し、Agent traces で可観測性を提供"
service: "Cloudflare Agents"
product: "Agents, Workers"
source: https://blog.cloudflare.com/agents-on-cloudflare/
official_url: https://developers.cloudflare.com/changelog/post/2026-08-04-agent-tracing/
fetched_at: 2026-08-05T11:35:00+09:00
published_at: 2026-08-04
date_precision: date-only
category: release
---

# 2026-08-04 Cloudflare Agents（Agent traces）

## 公式内容の日本語要約

Cloudflare が「Cloudflare Agents」を発表しました。デプロイ済みのエージェントセッションを 1 つの体験に統合して管理・改善するためのプラットフォームで、第一弾の機能が **Agent traces**（エージェントトレーシング）です。

Agent traces はエージェント固有のテレメトリを扱います。従来の Workers トレーシングが KV / D1 / service binding といったインフラ層を計測していたのに対し、Agent traces はその上のエージェント層（モデル呼び出し、ツール実行、承認、トークン使用量、各ターン）を可視化します。両者が揃うことでエンドツーエンドの監視が成立する、という位置づけです。

診断手段は 2 つあります。1 つは**セッション再生**で、全ターンの会話履歴をそのまま追えます。もう 1 つは**トレース表示**で、実行のウォーターフォール図として時間軸で確認できます。

対応フレームワークは Think、Flue、AI SDK です。OpenTelemetry 準拠であればカスタムハーネスでも利用できます。有効化は Wrangler の設定と、AI SDK を直接呼ぶ場合は名前空間のラップで行います。

価格は beta 期間中は無料で、2026-10-01 から Workers Observability の料金体系に統合されます。Free は 1 日 20 万イベント（保持 3 日）、Paid は月 200 万イベント無料、超過分は 100 万イベントあたり $0.60 です。

## できるようになったこと

- デプロイ済みエージェントのモデル呼び出し・ツール実行・承認・トークン使用量をダッシュボードで計測できる
- セッション再生（会話履歴）と実行ウォーターフォール図の 2 方式で失敗箇所を診断できる
- Think / Flue / AI SDK、および OpenTelemetry 準拠のカスタムハーネスに対応
- Wrangler 設定でトレーシングを有効化できる

## 影響範囲

- 対象ユーザー: Cloudflare Workers / Agents SDK でエージェントを本番運用している開発者・チーム
- 対象プラン: beta 中は無料。2026-10-01 以降は Free（1 日 20 万イベント / 保持 3 日）、Paid（月 200 万イベント無料 + 超過 100 万あたり $0.60）
- API / UI / 管理者機能: Wrangler 設定、Cloudflare ダッシュボード、OpenTelemetry 互換の取り込み

教材化メモ: src/content/ai-news-notes/cloudflare/cloudflare-agents-agent-traces.mdx

## 原文確認

- 公式見出し: Introducing: Cloudflare Agents / Agents, Workers - Agent traces for Think, Flue, and AI SDK
- 公式URL: https://blog.cloudflare.com/agents-on-cloudflare/
- changelog: https://developers.cloudflare.com/changelog/post/2026-08-04-agent-tracing/
- 原文全文は公式ページで確認してください。
