---
date: 2026-11-11
title: "Durable Objects へのリクエストルーティング改善"
service: "Durable Objects"
source: https://developers.cloudflare.com/changelog/post/2026-11-11-durable-objects-request-routing/
fetched_at: 2026-11-12T09:15:00+09:00
published_at: 2026-11-11
date_precision: date-only
category: enhancement
---

# 2026-11-11 Durable Objects のルーティング改善

## 公式内容の日本語要約

転送レコードが別データセンターを指す場合に、最初のデータセンターが接続を中継せず接続先を直接返すようになり、relocation 関連リクエストの p99 接続レイテンシが下がり得る。コード・設定の変更は不要。効果は負荷に依存する。

## 原文確認

- 公式URL: https://developers.cloudflare.com/changelog/post/2026-11-11-durable-objects-request-routing/
