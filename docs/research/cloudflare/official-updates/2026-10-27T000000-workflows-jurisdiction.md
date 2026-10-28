---
date: 2026-10-27
title: "Workflows を jurisdiction（eu / us / fedramp）に制限できる"
service: "Workflows, Workers"
product: "Workflows"
source: https://developers.cloudflare.com/changelog/post/2026-10-27-workflow-jurisdictions/
official_url: https://developers.cloudflare.com/changelog/post/2026-10-27-workflow-jurisdictions/
fetched_at: 2026-10-28T09:10:00+09:00
published_at: 2026-10-27
date_precision: date-only
category: enhancement
---

# 2026-10-27 Restrict Workflows to a jurisdiction

## 公式内容の日本語要約

Workflow を特定の jurisdiction に制限できるようになった。制限した Workflow のインスタンスは、その jurisdiction の中でのみ実行・データ保存される。GDPR や FedRAMP などのデータ所在地規制への対応が目的。

設定は wrangler の `workflows` binding、または `exports` で宣言した Workflow に `jurisdiction` を指定する。指定できる値は `eu`（EU）、`us`（米国）、`fedramp`（FedRAMP-Moderate のデータセンター）。

jurisdiction は Workflow の作成時に決まり、後から変更できない。既存 Workflow と異なる値を指定すると、`wrangler deploy` と `wrangler versions upload` は Worker のアップロード前に停止する。Wrangler 4.152.0 以上が必要。

## 影響範囲

- 対象ユーザー: Workflows でデータ所在地要件のある処理を動かす開発者
- API / UI / 管理者機能: wrangler 設定（binding / exports）

教材化メモ: src/content/ai-news-notes/cloudflare/workflows-jurisdiction.mdx

## 原文確認

- 公式見出し: Restrict Workflows to a jurisdiction
- 公式URL: https://developers.cloudflare.com/changelog/post/2026-10-27-workflow-jurisdictions/
- 原文全文は公式ページで確認してください。
