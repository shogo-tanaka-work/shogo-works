---
date: 2026-09-25
title: "Durable Objects の障害（2026-09-25T00:03Z 発生、14:49Z 解消）。前日サマリーの継続確認項目"
service: "Durable Objects"
product: "Durable Objects"
source: https://www.cloudflarestatus.com/
official_url: https://www.cloudflarestatus.com/
fetched_at: 2026-09-26T09:10:00+09:00
published_at: 2026-09-25T00:03:24Z
date_precision: timestamp
category: incident
---

# 2026-09-25 Durable Objects の障害（解消済み）

## 公式内容の日本語要約

Cloudflare Status 上で **Durable Objects の障害**が記録された。発生 2026-09-25T00:03:24Z、解消 2026-09-25T14:49:01Z。**継続時間は約14時間45分**で、ステータスは `Resolved`。

**前日（2026-09-25）の日次サマリーで「Cloudflare Workflows のキュー滞留」として `Investigating` のまま残していた継続確認項目は、発生時刻が秒単位まで一致するため本件と同一の事象と判断した。** 発生時刻（00:03:24Z）が一致しており、Status 上の表題は Workflows ではなく **Durable Objects** として整理されている。Workflows は Durable Objects の上に構築されているため、症状（新規 Workflows インスタンスが Queued のまま進まない）が Workflows 側に現れていた。**前日時点の分類が下位レイヤーではなく症状側の製品名になっていた**という記録の訂正にあたる。

同日の他の障害2件（Rules の Edit Compression Rule、Secondary DNS のゾーン転送遅延）は本Skillの対象製品外である。**2026-09-26 時点で新規障害はない。**

## 影響範囲

- 対象ユーザー: Durable Objects および Durable Objects 上に構築された製品（Workflows など）の利用者
- 対象プラン: 障害のため区別なし
- API / UI / 管理者機能: ランタイム（新規インスタンスの起動が進まない症状）

## 教材化メモ

- **障害の表題がどのレイヤーの名前で出るかは一定しない**という実例。前日は Workflows の症状として観測され、確定後は Durable Objects の障害として整理された。**ステータスページの製品名だけで影響範囲を判断すると、依存関係の下側を見落とす**。
- 短時間 incident ではなく**約15時間**続いた。記事化はしていないが、Durable Objects を前提にした設計（Workflows、Agents SDK のセッション保持）では**下位1製品の停止が上位の複数製品を止める**という構造の説明に使える。
- 記事化していない理由は、**顧客側の恒久的な対応が生じないこと**と、障害そのものが読者の手順を変えないこと。追跡は本メモに留める。

## 原文確認

- 公式見出し: Issues with Durable Objects（Resolved）
- 公式URL: https://www.cloudflarestatus.com/
- 原文全文は公式ページで確認してください。
