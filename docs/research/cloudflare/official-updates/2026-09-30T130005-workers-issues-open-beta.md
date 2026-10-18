---
date: 2026-09-30
title: "Workers に Issues（オープンベータ） — 本番エラーを検知して Claude Code / Cursor / Devin へ直接渡す"
service: "Workers"
product: "Workers, Workers Observability"
source: https://blog.cloudflare.com/real-time-issue-detection/
fetched_at: 2026-10-01T09:20:00+09:00
published_at: 2026-09-30T13:00:00Z
date_precision: timestamp
category: release
---

# 2026-09-30 Workers Issues（オープンベータ）

## 公式内容の日本語要約

Cloudflare は Workers に**組み込みのエラー監視機能 Issues** をオープンベータで追加した。本番の失敗を自動で検知・グルーピングし、**そのままコーディングエージェントへ調査と修正を投げられる**。

**自動で捕捉する対象**は、未捕捉の例外と失敗した invocation、HTTP 5xx 応答、スタックトレースを含む console のログとエラー、暴走した alarm、過剰なログ出力のパターン。繰り返す失敗はまとめられ、**初出時刻・発生頻度・推移**が追跡される。

**エージェント連携**が本機能の中心である。接続先として **Claude Code（routine ID とトークンで接続）**、**Cursor（automation webhook）**、**Devin（API トークンと org ID）**、および汎用 webhook とインシデント管理ツールが挙げられている。発火時には、**例外・ソースマップ適用済みのスタックトレース・ログ・トレース・Worker のバージョン・アプリケーションの文脈**が送られる。

**文脈の追加。** 組み込みの OpenTelemetry API で、追加パッケージなしにユーザー ID・アカウント ID・セッション ID などの独自識別子を付与できる。エージェントが調査に入る前に業務影響を把握できるようにする意図である。

**実例として**、Cloudflare の Workflows チームが Issues を有効化した当日に本番バグ2件（マイグレーションのリトライループ、サブリクエスト上限を超える削除処理）を発見したと報告されている。

## できるようになったこと

- Workers の本番エラーを自動検知・グルーピングし、初出時刻と推移を追跡
- `wrangler.jsonc` への1行追加で有効化
- Claude Code / Cursor / Devin / 汎用 webhook への自動連携
- OpenTelemetry API による業務識別子の付与

## 影響範囲

- 対象ユーザー: Cloudflare Workers の利用者
- 対象プラン: **オープンベータ**
- API / UI / 管理者機能: `wrangler.jsonc` の設定、ダッシュボードの Observability

教材化メモ: src/content/ai-news-notes/cloudflare/workers-issues-agent-handoff.mdx

## 原文確認

- 公式見出し: Detect and send production issues straight to your agent
- 公式URL: https://blog.cloudflare.com/real-time-issue-detection/
- ドキュメント: https://developers.cloudflare.com/workers/observability/issues/
- 原文全文は公式ページで確認してください。
