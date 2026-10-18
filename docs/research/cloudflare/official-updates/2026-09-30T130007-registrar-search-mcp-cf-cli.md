---
date: 2026-09-30
title: "Registrar の検索を刷新し、Registrar API を Cloudflare MCP と cf CLI から操作可能に"
service: "Registrar"
product: "Registrar, Workers, Durable Objects, Workers KV"
source: https://blog.cloudflare.com/simplifying-domains/
fetched_at: 2026-10-01T09:20:00+09:00
published_at: 2026-09-30T13:00:00Z
date_precision: timestamp
category: enhancement
---

# 2026-09-30 Registrar の検索刷新と MCP / cf CLI 対応

## 公式内容の日本語要約

Cloudflare は Registrar のドメイン検索体験を刷新した。**420以上の TLD** に対応し、入力に追随して結果が出る検索と、透明な価格表示を備える。検索基盤は Workers・Durable Objects・Workers KV・WebSockets・1.1.1.1 リゾルバで構成されている。

本 Skill の対象として重要なのは**エージェント対応の部分**である。**Registrar API がドメイン検索・登録・移管に加えてテスト用の sandbox 環境へ拡張**され、さらに **Registrar API が Cloudflare MCP 経由で提供**されるようになった。公式は「Registrar API は Cloudflare MCP から利用でき、エージェントは個別の連携を作らずにアクセスできる」と記している。あわせて **cf CLI** からのドメイン操作（`cf registrar registrations check` / `create` / `transfer-in`）が可能になった。

Birthday Week の期間中は `.io` / `.dev` / `.app` / `.tech` の初年度登録割引が提供される。

## できるようになったこと

- Registrar API に検索・登録・移管・sandbox が追加
- **Cloudflare MCP 経由で Registrar API をエージェントへ露出**
- cf CLI からのドメイン可用性確認・登録・移管

## 影響範囲

- 対象ユーザー: Cloudflare Registrar 利用者、ドメイン取得を自動化したい開発者
- 判定: **記事化は見送り（スコア不足 5点）**。MCP が絡むため巡回・記録の対象には入れる
- 関連: cf CLI 自体のオープンベータは 2026-09-28 分（未マージ PR #455）で記事化済み

## 教材化メモ

- **「エージェントに何を任せるか」の線引きの実例として使える。** ドメイン登録は課金と契約が伴う不可逆操作であり、MCP 経由で露出されたからといって無条件に任せる対象ではない。**技術的に可能になった操作と、任せてよい操作は別**という原則の具体例。
- **sandbox 環境が同時に提供された点に注目させる。** 課金が絡む API をエージェントへ渡す設計では、検証経路が用意されているかが導入可否を分ける。「sandbox があるか」を評価軸として教えられる。
- **MCP 経由で既存 API を露出する流れ**（個別連携を作らせない）は、自社 API をエージェントへ開く際の設計パターンとして一般化できる。

## 原文確認

- 公式見出し: Simplifying domains for people and agents
- 公式URL: https://blog.cloudflare.com/simplifying-domains/
- 原文全文は公式ページで確認してください。
