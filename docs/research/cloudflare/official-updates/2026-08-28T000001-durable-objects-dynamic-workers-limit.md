---
date: 2026-08-28
title: "Durable Objects が同時に扱える Dynamic Workers の上限が4から10へ"
service: "Cloudflare"
product: "Workers, Durable Objects"
source: https://developers.cloudflare.com/changelog/post/2026-08-28-durable-objects-dynamic-workers-limit/
official_url: https://developers.cloudflare.com/changelog/post/2026-08-28-durable-objects-dynamic-workers-limit/
fetched_at: 2026-08-29T09:05:00+09:00
published_date: 2026-08-28
date_precision: date-only
category: enhancement
---

# 2026-08-28 Durable Objects の Dynamic Workers 上限緩和

## 公式内容の日本語要約

Cloudflare が、**1つの Durable Object が同時にリクエストを飛ばせる Dynamic Workers の数の上限を、4から10へ引き上げた**。

変更後の規定は、**Durable Object は最大10個の異なる Dynamic Workers に対して in-flight のリクエストを持てる**、**それ以外の Workers は1リクエストあたり最大4個**、というもの。同一の Dynamic Worker に対する複数の同時リクエストは、**1つの割り当てとして数える**。

Durable Object は複数の同時リクエストが同じ入出力コンテキストを共有するため、この上限は「1リクエストあたり」ではなく**その Durable Object への同時リクエスト全体に適用される**。オーケストレーション役の Durable Object から複数の Dynamic Worker へ処理を振り分ける構成では、4という上限が実際の制約になっていた。

## できるようになったこと

- 1つの Durable Object から **同時に最大10個の Dynamic Workers** へリクエストを出せる（従来は4）

## 影響範囲

- 対象ユーザー: Durable Objects と Dynamic Workers を組み合わせて使っている開発者
- 対象プラン: 記載なし
- API / UI / 管理者機能: Workers ランタイムの制限値

## 教材化メモ

- 記事化しないため、この節を残す（判定D、スコア5）。**「1リクエストあたり」と「オブジェクトあたり」で制限の掛かり方が変わる**という点は、Durable Objects の実行モデルを説明する良い切り口になる。同じ入出力コンテキストを共有する以上、制限の単位もリクエストではなくオブジェクトになる。
- 上限値の変更のみで、API も設定も変わらないため単独記事にはしない。Durable Objects を扱う教材を書くときの制限値の更新として反映すれば足りる。

## 原文確認

- 公式見出し: Workers, Durable Objects - Durable Objects can use up to ten Dynamic Workers concurrently
- 公式URL: https://developers.cloudflare.com/changelog/post/2026-08-28-durable-objects-dynamic-workers-limit/
- 原文全文は公式ページで確認してください。
