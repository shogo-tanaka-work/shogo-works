---
date: 2026-08-28
title: "Durable Objects から同時に呼べる Dynamic Workers が 4 から 10 へ"
service: "Cloudflare Durable Objects"
product: "Workers, Durable Objects"
source: https://developers.cloudflare.com/changelog/post/2026-08-28-durable-objects-dynamic-workers-limit/
official_url: https://developers.cloudflare.com/changelog/post/2026-08-28-durable-objects-dynamic-workers-limit/
fetched_at: 2026-08-30T09:10:00+09:00
published_at: 2026-08-28
date_precision: date-only
category: enhancement
---

# 2026-08-28 Durable Objects の Dynamic Workers 上限が 10 へ

## 公式内容の日本語要約

Cloudflare は 2026-08-28、**1つの Durable Object から同時にリクエストを飛ばせる Dynamic Workers の数を、4 から 10 へ引き上げた**。

制約の詳細は次のとおり。**同じ Dynamic Worker への複数の in-flight リクエストは、1つとしてカウント**される。上限は「異なる Dynamic Worker の数」に対してかかる。また、**この上限は同じ Durable Object への全同時リクエストにまたがって適用**される。Durable Object は I/O コンテキストを共有するためである。

**Durable Object ではない通常の Worker は、従来どおり1リクエストあたり4つまで**で変わらない。

## できるようになったこと

- 1つの Durable Object から、最大10種類の Dynamic Workers を同時に呼び出せる

## 影響範囲

- 対象ユーザー: Durable Objects と Dynamic Workers を組み合わせて使う開発者
- 対象プラン: Workers / Durable Objects
- API / UI / 管理者機能: ランタイム制限の変更のみ。設定変更は不要

## 教材化メモ

- **「同じ Worker への複数リクエストは1つとカウント」というカウント規則**は、制限値の読み方の教材になる。上限が何の個数に対してかかるのか（接続先の種類か、リクエストの本数か）を読み違えると、設計時の見積もりが丸ごとずれる。**制限値を読むときは必ず単位を確認する**という基本の実例。
- **Durable Object が I/O コンテキストを共有するため、上限が同時リクエストをまたいで効く**という点は、Durable Objects のメンタルモデルを説明するのに適している。「オブジェクト1つ＝直列化された実行単位」という理解がないと、なぜ通常の Worker と規則が違うのかが分からない。
- エージェント構成（Durable Object をエージェントの状態保持に使い、Dynamic Workers へ処理を分散する）では実際にこの上限に当たる。ただし数値の引き上げのみで読者の判断が変わる範囲は狭いため記事化は見送る。

## 原文確認

- 公式見出し: Durable Objects can use up to ten Dynamic Workers concurrently
- 公式URL: https://developers.cloudflare.com/changelog/post/2026-08-28-durable-objects-dynamic-workers-limit/
- 原文全文は公式ページで確認してください。
