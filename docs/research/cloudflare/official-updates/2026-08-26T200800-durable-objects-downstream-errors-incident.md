---
date: 2026-08-26
title: "Durable Objects と下流サービスのエラー（Minor、約1時間22分で解決）"
service: "Cloudflare"
product: "Durable Objects, AI Search, Containers, D1, Workers Assets, Workflows, Artifacts"
source: https://www.cloudflarestatus.com/
fetched_at: 2026-08-27T09:05:00+09:00
published_at: 2026-08-26T20:08:00Z
date_precision: timestamp
category: incident
---

# 2026-08-26 Durable Objects 障害

## 公式内容の日本語要約

Cloudflare Status に「Durable Objects and Downstream Service Errors」として記録された障害。**2026-08-26 20:08 UTC 〜 21:30 UTC（約1時間22分）**、影響度は **Minor**、状態は **Resolved**。

影響を受けたコンポーネントは **AI Search、Artifacts、Containers、D1、Durable Objects、Workers Assets、Workflows**。Durable Objects を基盤に使う下流サービスへ波及した形で、**Workers 本体および Workers AI は影響コンポーネントに含まれていない**。

2026-08-27 09:05 JST 時点で、Cloudflare Status に active incident は無い。同日にはデータセンター単位のメンテナンス告知（PHL / GRU / IAD / KHH / ATL / HKG、進行中は HAM / AMS / CDG）が複数あるが、これは巡回対象外。

## できるようになったこと

- 該当なし（障害記録）

## 影響範囲

- 対象ユーザー: Durable Objects および D1 / Containers / Workflows / AI Search / Workers Assets を利用するアプリケーション
- 対象プラン: 該当サービス利用者全般
- API / UI / 管理者機能: 該当なし

## 教材化メモ

- **Durable Objects の障害が D1・Containers・Workflows・AI Search へ同時に波及した**という事実は、依存関係の可視化の教材になる。「単一製品の障害」に見えても、共有基盤の障害は上位サービスを横断する。**自分のアーキテクチャで、どのマネージドサービスが同じ基盤に乗っているか**を把握しているかを問う題材として使える。
- 短時間 incident のため記事化しない（SKILL 規約どおり、日次サマリーと本詳細メモに留める）。

## 原文確認

- 公式見出し: Durable Objects and Downstream Service Errors
- 公式URL: https://www.cloudflarestatus.com/
- 原文全文は公式ページで確認してください。
