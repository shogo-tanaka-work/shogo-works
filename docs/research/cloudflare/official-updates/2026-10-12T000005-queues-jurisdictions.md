---
date: 2026-10-12
title: "Queues が jurisdictions に対応。eu / us / fedramp でメッセージの保持地域を固定できるが、作成後は変更不可"
service: "Cloudflare Queues"
product: "Queues"
source: https://developers.cloudflare.com/changelog/post/2026-09-18-queues-jurisdictions/
fetched_at: 2026-10-13T09:20:00+09:00
published_at: 2026-10-12
date_precision: date-only
category: enhancement
---

# 2026-10-12 Queues の jurisdictions 対応

## 公式内容の日本語要約

Cloudflare Queues が **jurisdiction（管轄地域）指定付きで作成できる**ようになった。指定すると、そのキューのメッセージは1つの地域内に留まる。GDPR や FedRAMP のようなデータレジデンシー要件に応えるための機能である。

指定できる値は **`eu` / `us` / `fedramp`** の3つで、`fedramp` は FedRAMP-Moderate データセンターを指す。設定方法は新しい `cf` CLI の `--jurisdiction` フラグ、または Create Queue API エンドポイントの `jurisdiction` パラメータ。

**jurisdiction は作成時にしか設定できず、後から変更できない**と公式に明記されている。既存キューを地域限定へ移すには作り直しが必要になる。

同系統の機能は Workers KV で 2026-10-02 に GA になっており（`eu` / `us` / `fedramp` の3値、作成後変更不可という制約も同じ）、Cloudflare の開発者プラットフォーム全体でデータレジデンシー対応が製品横断に広がっている流れの中にある。なお changelog のエントリ URL のスラッグは `2026-09-18-queues-jurisdictions` だが、横断 RSS と製品別 RSS の pubDate はいずれも 2026-10-12 である。

## できるようになったこと

- キュー単位でメッセージの保持地域を `eu` / `us` / `fedramp` に固定できる
- `cf` CLI と Create Queue API のどちらからも指定できる
- データレジデンシー要件がある案件で Queues が選択肢に入る

## 影響範囲

- 対象ユーザー: Queues 利用者、特にデータ所在地要件を持つ組織
- 対象プラン: changelog に記載なし
- API / UI / 管理者機能: Create Queue API に `jurisdiction` パラメータ追加、`cf` CLI に `--jurisdiction` フラグ追加

教材化メモ: src/content/ai-news-notes/cloudflare/queues-jurisdictions.mdx

## 原文確認

- 公式見出し: Queues now supports EU, US, and FedRAMP jurisdictions
- 公式URL: https://developers.cloudflare.com/changelog/post/2026-09-18-queues-jurisdictions/
- RSS: https://developers.cloudflare.com/changelog/rss/queues.xml （pubDate: Mon, 12 Oct 2026 00:00:00 GMT）
- 関連（既出）: https://developers.cloudflare.com/changelog/post/2026-10-02-kv-jurisdictions-ga/
- 原文全文は公式ページで確認してください。
