---
date: 2026-11-13
title: "Workers と Durable Objects に利用額の上限を設定"
service: "Cloudflare Workers"
product: "Billing, Workers, Durable Objects"
source: https://developers.cloudflare.com/changelog/post/2026-11-13-spend-management/
official_url: https://developers.cloudflare.com/changelog/post/2026-11-13-spend-management/
fetched_at: 2026-11-14T09:20:00+09:00
published_at: 2026-11-13
date_precision: date-only
category: policy
---

# 2026-11-13 Spend Management

## 公式内容の日本語要約

Workers と Durable Objects に、アカウント単位・請求期間単位の利用額上限とメールアラートを設定できる。上限到達時は対応する操作をブロックし、Block usage をオフにすればアラートのみ。ダッシュボード（Billing > Spend limits）か `cf billing spend-policies create` で設定。集計の遅延で記録額が上限を超えうる。他の製品も順次対応予定。公式ブログ（Introducing Spend Management）に metering pipeline の解説がある。

教材化メモ: src/content/ai-news-notes/cloudflare/workers-durable-objects-spend-limits.mdx

## 原文確認

- 公式URL: https://developers.cloudflare.com/changelog/post/2026-11-13-spend-management/ 、https://blog.cloudflare.com/
- 原文全文は公式ページで確認してください。
