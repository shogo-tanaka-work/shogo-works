---
date: 2026-09-18
title: "Cloudflare の 09-18 障害3件（APAC Durable Objects は解決、Workers KV / Dashboard は1時間33分で解決）"
service: "Cloudflare Workers KV / Dashboard / Durable Objects"
product: "Workers KV, Dashboard, Durable Objects, AI Search, Workflows, Containers, D1"
source: https://www.cloudflarestatus.com/
official_url: https://www.cloudflarestatus.com/
fetched_at: 2026-09-19T09:02:00+09:00
published_at: 2026-09-18T06:42:00Z
date_precision: timestamp
category: incident
---

# 2026-09-18 Cloudflare の障害3件

## 公式内容の日本語要約

**(1) APAC Durable Objects の障害が解決した。** 前日（2026-09-17T23:37Z）に発生し、前日サマリーで「継続中」として記録していた案件である。**終了は 2026-09-18T00:54Z、Impact は Minor**。影響製品は AI Search / Artifacts / Containers / D1 / Durable Objects / Workers Assets / Workflows で、**Durable Objects を土台にする下流サービスが一式巻き込まれる構図**だった。所要は約1時間17分。

**(2) Dashboard と Workers KV の障害。** 2026-09-18T06:42Z 発生、**08:15Z 解決、Impact は Minor**。所要は約1時間33分。ステータスページ上の影響製品は Dashboard と Workers KV の2つである。

**(3) Ashburn のネットワーク性能問題。** 2026-09-18T17:15Z に記録され、**17:13〜17:28Z の 5xx エラー率上昇が緩和された**と報告されている。約15分で、地域データセンター単位の事象である。

**いずれも記事化しない。** 3件とも Minor かつ短時間で解決しており、`daily-ai-update-monitor` の規約どおり日次サマリーと本メモに留める。

**対象外の継続案件**: WARP の geo location 誤り（2026-08-27T18:46Z 発生）は `Identified` のまま継続中で、**本日で23日目**。製品スコープ外だが長期未解決のため記録を続ける。

## できるようになったこと

- 該当なし（障害）

## 影響範囲

- 対象ユーザー: APAC で Durable Objects 系を使う開発者、Workers KV 利用者、ダッシュボード利用者
- 対象プラン: ステータスページに記載なし
- API / UI / 管理者機能: Durable Objects と下流サービス、Workers KV、ダッシュボード

## 教材化メモ

**(1) の構図をそのまま「依存の集中」の教材にできる。** Durable Objects が1つ落ちると AI Search / Workflows / Containers / D1 / Workers Assets が同時に影響を受ける。**利用者から見れば「別々の製品」だが、基盤は共通である。** マネージドサービスを組み合わせる設計では、製品名の数ではなく**基盤の数**で冗長性を数える必要がある、という点に接続する。

**3件とも Impact が Minor である点も扱う価値がある。** ベンダー側の Minor は「影響範囲が限定的」の意味で、**自社のその時間帯の処理にとって Minor とは限らない。** ステータスページの深刻度をそのまま自社の影響度として読まない、という一次情報の読み方の演習にできる。

## 原文確認

- 公式見出し: APAC Durable Objects Issue / Cloudflare Dashboard Workers KV Issue / Network Performance Issues in Ashburn
- 公式URL: https://www.cloudflarestatus.com/
- 原文全文は公式ページで確認してください。
