---
date: 2026-09-14
title: "Cloudflare Queues と Replicate で障害（いずれも巡回時点で継続中）"
service: "Cloudflare Queues / Replicate"
product: "Queues, Replicate"
source: https://www.cloudflarestatus.com/
official_url: https://www.cloudflarestatus.com/
fetched_at: 2026-09-15T09:05:00+09:00
published_at: 2026-09-14T20:22:00Z
date_precision: timestamp
category: incident
---

# 2026-09-14 Cloudflare Queues / Replicate の障害

## 公式内容の日本語要約

Cloudflare Status に 09-14 付で3件の incident が記録された。**うち2件が本Skillの対象範囲（開発者プラットフォーム / AI）に入る。**

**(1) Cloudflare Queues の障害** — 2026-09-14T20:22Z 開始、ステータスは **Investigating**。公式の記載は「Cloudflare is aware of investigating issues with our Cloudflare Queues product.」。**巡回時点（2026-09-15T09:05 JST ＝ 00:05Z）で未解決**である。

**(2) Replicate の一部モデルが起動しない** — 2026-09-14T22:25Z 開始、ステータスは **Identified**。公式の記載は「Some third party models as well as https://replicate.com/qwen/qwen-edit-multiangle are affected and are unable to scale out.」。**スケールアウトができない形の障害**で、巡回時点で未解決である。

**(3) Load Balancing の分析・通知の遅延** — 2026-09-14T23:03Z 開始、Investigating。**Load Balancing / Monitoring は本Skillの対象製品ではない**ため、記録は本メモの言及のみに留める。

あわせて、**WARP の geo location 誤り（2026-08-27T18:46Z 発生）は `Identified` のまま継続中で、本日で19日目**である。対象外製品だが長期未解決のため記録を続ける。

**1つのメモに2件をまとめた理由**: いずれも同日・同一ステータスページ上の未解決 incident で、記事化せず日次サマリーの索引としてのみ機能するため。**製品として別であることは上記のとおり明記している。**

## できるようになったこと

- 該当なし（障害）

## 影響範囲

- 対象ユーザー: Cloudflare Queues を使う開発者、Replicate 上の一部モデルを使う利用者
- 対象プラン: ステータスページに記載なし
- API / UI / 管理者機能: Queues のキュー処理、Replicate のモデルのスケールアウト

## 教材化メモ

**単独記事にはしない（incident）。次回巡回で両件の解決確認を行う。**

**Queues は Workers 構成の非同期処理の土台に置かれることが多い。** キューが詰まる形の障害は、**同期処理より発覚が遅れる**という性質がある（エラーが返らず遅延として現れる）。教材では「非同期にすると障害が見えにくくなる」という副作用を扱う節に置く。

**Replicate 側の「スケールアウトできない」形の障害は、推論基盤の可用性の典型例である。** モデルが落ちているのではなく、増やせないという形。**負荷が上がった時にだけ顕在化する**ため、検証環境では再現しない。

## 原文確認

- 公式見出し: Cloudflare Queues Issues / Some Replicate Models Failing to Start / Load Balancing Analytics and Notification Delays
- 公式URL: https://www.cloudflarestatus.com/
- 原文全文は公式ページで確認してください。
