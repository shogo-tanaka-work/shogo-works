---
date: 2026-11-02
title: "Workers: 11月17日から Request.signal が既定で有効に"
service: "Cloudflare / Workers"
source: https://developers.cloudflare.com/changelog/post/2026-11-02-request-signal-default/
fetched_at: 2026-11-03T09:10:00+09:00
published_at: 2026-11-02
date_precision: date-only
category: policy
---

# 2026-11-02 Workers: 11月17日から Request.signal が既定で有効に

## 公式内容の日本語要約

互換性日付 2026-11-17 以降の Workers は、クライアント切断イベントを `request.signal` で既定で受け取る。`enable_request_signal` は不要になり、無効化は `disable_request_signal`。`request_signal_passthrough` は有効にならないため、signal は明示的に渡す必要がある。

## 影響範囲

- 対象: 互換性日付 2026-11-17 以降の Workers

教材化メモ: 見送り（スコア5）のため作成しない。

## 原文確認

- 公式URL: https://developers.cloudflare.com/changelog/post/2026-11-02-request-signal-default/
- 取得経路: Exa（web_fetch_exa）。原文全文は公式ページで確認してください。
