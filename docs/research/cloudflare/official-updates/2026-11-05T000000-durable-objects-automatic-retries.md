---
date: 2026-11-05
title: "Durable Objects: 呼び出しの自動リトライ"
service: "Cloudflare / Durable Objects"
source: https://developers.cloudflare.com/changelog/post/2026-11-05-durable-objects-automatic-retries/
fetched_at: 2026-11-06T09:20:00+09:00
published_at: 2026-11-05
date_precision: date-only
category: enhancement
---

# 2026-11-05 Durable Objects: 呼び出しの自動リトライ

## 公式内容の日本語要約

DO への fetch() と RPC が、届く前の再試行可能エラーで失敗した場合に自動再試行。既定は最大4回・開始から10秒以内。DO コードのエラーと overloaded は対象外。メソッドの二重実行はなく、冪等なものは retryable() で明示。stub ごとに retry オプション（maxRetries 0〜10、timeoutMs 500〜60,000）。Wrangler 4.158.0 以降。自前リトライは二重になるため見直しが必要。

教材化メモ: src/content/ai-news-notes/cloudflare/durable-objects-automatic-retries.mdx

## 原文確認

- 公式URL: https://developers.cloudflare.com/changelog/post/2026-11-05-durable-objects-automatic-retries/
- 取得経路: Exa（web_fetch_exa）。原文全文は公式ページで確認してください。
