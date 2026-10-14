---
date: 2026-10-13
title: "Cloudflare API MCP server が Workers Issues を MCP Events として配信（初の event 公開）"
service: "Cloudflare API MCP server"
product: "Agents, Workers"
source: https://developers.cloudflare.com/changelog/post/2026-10-13-cloudflare-mcp-events/
official_url: https://developers.cloudflare.com/changelog/post/2026-10-13-cloudflare-mcp-events/
fetched_at: 2026-10-14T09:30:00+09:00
published_date: 2026-10-13
date_precision: date-only
category: release
---

# 2026-10-13 Cloudflare API MCP server の MCP Events 対応

## 公式内容の日本語要約

Cloudflare API MCP server が **Workers Issues を MCP Events として MCP クライアントへ送る**ようになった。公式は、これが**同サーバーが公開する最初の event** だと記している。

**Workers Issues** は Cloudflare 組み込みの Workers 向けエラー監視で、本番の失敗を検出して関連するものを issue へグループ化する。SDK の導入やアプリ側の変更は不要である。

**購読の流れは3段。** (1) `events/list` を呼んで event **`cloudflare.alert.workers_observability_real_time_issue`** を見つける、(2) `events/subscribe` で購読する（**アカウント全体または単一 Worker のスコープを選べる**）、(3) Issues が新規または再発の issue を検出したとき、サーバーがクライアントの webhook へ**署名付き event** を送る。

**これが変えるのは監視の起点**である。公式は「エージェントが、検出された時点で本番エラーの調査を始められる。新しい issue のポーリングが不要になる」と記している。

**要件。** 対象 Worker で Issues を有効にすること。クライアントを `https://mcp.cloudflare.com/mcp` へ接続し、**Notifications Write** と **Workers Observability Write** の権限を付けること。**MCP Events の webhook に対応したクライアントを使うこと。**

MCP Events そのものは、triggers と events の実験的な MCP 拡張としてリンクされている。changelog は仕組みの詳細を定義していない。

教材化メモ: src/content/ai-news-notes/cloudflare/mcp-server-workers-issues-events.mdx

## できるようになったこと

- 本番エラーの検出を起点に、エージェント側の調査を自動で始められる（ポーリング不要）
- アカウント全体か特定 Worker かを選んで購読できる
- 署名付き event として受け取れる

## 影響範囲

- 対象ユーザー: Cloudflare Workers を本番運用し、MCP クライアント（エージェント）から運用を触っている開発者・運用チーム
- 対象プラン: 記載なし
- API / UI / 管理者機能: MCP（`events/list` / `events/subscribe`）、API トークン権限（Notifications Write / Workers Observability Write）、Workers Issues の有効化

## 原文確認

- 公式見出し: 「Agents, Workers - Cloudflare API MCP server sends Workers Issues as MCP Events」
- 公式URL: https://developers.cloudflare.com/changelog/post/2026-10-13-cloudflare-mcp-events/
- 原文全文は公式ページで確認してください。
