---
date: 2026-09-22
title: "FedRAMP High 顧客向けに Workers / Durable Objects の分析データが一部見えなくなる障害（解消済み）"
service: "Cloudflare"
product: "Analytics, Workers, Durable Objects"
source: https://www.cloudflarestatus.com/
fetched_at: 2026-09-23T09:10:00+09:00
published_at: 2026-09-22T09:36:00Z
date_precision: timestamp
category: incident
---

# 2026-09-22 Cloudflare FedRAMP High 向け Workers 分析の可視性障害

## 公式内容の日本語要約

Cloudflare Status に、**FedRAMP High 顧客向けに Workers と Durable Objects の分析データが部分的に見えなくなる障害**が記録された。発生は 2026-09-22 09:36 UTC、解消は同日 12:51 UTC で、継続時間は約3時間15分。影響を受けたのは Analytics コンポーネントで、**Workers と Durable Objects の実行自体には影響していない**（可視性のみ）。ステータスは Resolved。

同時点で調査中・特定済みとして残っている障害は Cloudflare One Client の challenge 関連と WARP 利用者の geolocation 誤りの2件で、いずれも本 Skill の対象製品（Workers / Workers AI / AI Gateway / Agents / Durable Objects）には関わらない。

## できるようになったこと

- 該当なし（障害記録）

## 影響範囲

- 対象ユーザー: FedRAMP High の Cloudflare 顧客
- 対象プラン: FedRAMP High
- API / UI / 管理者機能: 分析ダッシュボードの可視性のみ。実行系への影響なし

## 教材化メモ

- **短時間 incident のため記事化しない**（`daily-ai-update-monitor` SKILL の規約どおり、日次サマリーと本詳細メモに留める）。
- **「実行は正常、可視性だけ落ちた」という切り分けが記録されている点**は、障害報告の読み方の教材になる。影響範囲が「監視が見えない」に閉じているか「サービスが止まっている」かで、取るべき対応は全く違う。
- 規制対応環境（FedRAMP High）だけに閉じた障害である。**同じ製品でもコンプライアンス区画ごとに別系統で動いている**という事実は、エンタープライズ導入の設計を説明するときに使える。

## 原文確認

- 公式見出し: Partial visibility of Workers and Durable Objects analytics for Fedramp High customers
- 公式URL: https://www.cloudflarestatus.com/
- 原文全文は公式ページで確認してください。
