---
date: 2026-10-28
title: "Workers Builds がビルドとログを90日保持"
service: "Workers"
source: https://developers.cloudflare.com/changelog/post/2026-10-28-workers-builds-90-day-retention/
fetched_at: 2026-10-29T09:10:00+09:00
published_at: 2026-10-28
date_precision: date-only
category: policy
---

# 2026-10-28 Workers Builds がビルドとログを90日保持

## 公式内容の日本語要約

Workers Builds はビルドとビルドログを完了後90日間保持する。90日を過ぎるとビルドとログは削除されるが、作成されたバージョンとデプロイは履歴に残りロールバックできる。長期保管が必要なら Get build logs API でダウンロードする。

## 影響範囲

- 対象: Workers Builds 利用者

教材化メモ: 記事化しない（スコア不足 5）。監査用にログが必要な場合は90日以内に API で保存する、の一点。

## 原文確認

- 公式URL: https://developers.cloudflare.com/changelog/post/2026-10-28-workers-builds-90-day-retention/
- 原文全文は公式ページで確認してください。
