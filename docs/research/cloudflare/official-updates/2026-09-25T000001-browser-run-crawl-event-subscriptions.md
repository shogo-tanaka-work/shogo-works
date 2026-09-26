---
date: 2026-09-25
title: "Browser Run のクロールジョブが Queues へライフサイクルイベントを流せるようになった。ポーリング不要"
service: "Browser Run"
product: "Browser Run, Queues"
source: https://developers.cloudflare.com/changelog/post/2026-09-25-crawl-event-subscriptions/
official_url: https://developers.cloudflare.com/changelog/post/2026-09-25-crawl-event-subscriptions/
fetched_at: 2026-09-26T09:10:00+09:00
published_at: 2026-09-25
date_precision: date-only
category: enhancement
---

# 2026-09-25 Browser Run のクロールイベントを Queues で購読

## 公式内容の日本語要約

Cloudflare は 2026-09-25、**Browser Run のクロールジョブがライフサイクルイベントを Cloudflare Queues へ配信できる**ようにした。

配信されるイベントは3種類。**`crawl.started`、`crawl.updated`、`crawl.finished`** である。購読はアカウント単位で作成し、Wrangler CLI から次の形で設定する。

```
npx wrangler queues subscription create <QUEUE_NAME> --source browserRun --events crawl.started,crawl.updated,crawl.finished
```

これまでクロールの進捗を知るには**ステータスを繰り返し問い合わせる（ポーリング）必要があった**。イベント購読により、**進捗の追跡や後続処理の起動をポーリングなしで組める**。公式は「without requiring continuous polling mechanisms」と書いている。ペイロードの例とスキーマは Browser Run のイベントスキーマのドキュメントに示されている。提供範囲の制限は告知に記載がない。

教材化メモ: src/content/ai-news-notes/cloudflare/browser-run-crawl-event-subscriptions.mdx

## できるようになったこと

- Browser Run のクロールジョブから `crawl.started` / `crawl.updated` / `crawl.finished` を Queues へ配信できる
- Wrangler CLI でアカウント単位の購読を作成できる
- ポーリングなしで進捗追跡と後続ワークフローの起動ができる

## 影響範囲

- 対象ユーザー: Browser Run でクロールを実行している開発者
- 対象プラン: 告知に制限の記載なし
- API / UI / 管理者機能: Wrangler CLI（`wrangler queues subscription create`）、Queues 連携

## 原文確認

- 公式見出し: Browser Run, Queues - Subscribe to Browser Run crawl events
- 公式URL: https://developers.cloudflare.com/changelog/post/2026-09-25-crawl-event-subscriptions/
- 原文全文は公式ページで確認してください。
