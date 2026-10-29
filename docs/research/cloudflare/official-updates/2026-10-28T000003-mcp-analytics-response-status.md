---
date: 2026-10-28
title: "MCP tool-call analytics に response_status フィルタ（既定が success に変更）"
service: "Access, Cloudflare One"
source: https://developers.cloudflare.com/changelog/post/2026-10-28-mcp-analytics-response-status/
fetched_at: 2026-10-29T09:10:00+09:00
published_at: 2026-10-28
date_precision: date-only
category: enhancement
---

# 2026-10-28 MCP tool-call analytics に response_status フィルタ（既定が success に変更）

## 公式内容の日本語要約

MCP tool-call analytics の timeseries エンドポイントに `response_status`（success / error / cached / all）が追加された。既定は `success` で、従来の全ステータス集計が必要なら `all` を明示する。無効値は 400。

## 影響範囲

- 対象: Access の MCP portal / server analytics を API で集計している管理者。既定値変更で集計値が変わる

教材化メモ: 記事化しない（スコア不足 5）。既存集計の数値が変わる点だけ注意。

## 原文確認

- 公式URL: https://developers.cloudflare.com/changelog/post/2026-10-28-mcp-analytics-response-status/
- 原文全文は公式ページで確認してください。
