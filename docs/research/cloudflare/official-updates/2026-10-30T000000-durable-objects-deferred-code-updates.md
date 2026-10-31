---
date: 2026-10-30
title: "Durable Objects がコード更新を既定で遅延適用"
service: "Durable Objects, Workers"
source: https://developers.cloudflare.com/changelog/post/2026-10-30-durable-objects-deferred-code-updates/
fetched_at: 2026-10-31T09:10:00+09:00
published_at: 2026-10-30
date_precision: date-only
category: enhancement
---

# 2026-10-30 Durable Objects がコード更新を既定で遅延適用

## 公式内容の日本語要約

デプロイ時、稼働中の Durable Object は最大5分（max_delay 既定300秒）現行コードで動き続け、ハイバネート後の次リクエストで新コードに切り替わる。従来は即時適用で処理中の作業や接続が中断し得た。Wrangler の durable_objects.code_update_strategy で mode（deferred / immediate）と max_delay（0〜86400秒）を設定、wrangler versions deploy の --durable-objects-code-update-mode で単発指定も可能。ベストエフォートで、ランタイム更新時などは max_delay 前にリセットされる。Hibernation API の WebSocket は接続を維持したまま新コードへ移る。

## 原文確認

- 公式URL: https://developers.cloudflare.com/changelog/post/2026-10-30-durable-objects-deferred-code-updates/
- 原文全文は公式ページで確認してください。

教材化メモ: src/content/ai-news-notes/cloudflare/durable-objects-deferred-code-updates.mdx
