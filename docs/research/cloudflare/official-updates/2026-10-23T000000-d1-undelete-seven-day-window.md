---
date: 2026-10-23
title: "D1 の削除取り消し（undelete）は削除後7日以内に限定"
service: "D1"
source: https://developers.cloudflare.com/changelog/post/2026-10-23-undelete-seven-day-window/
official_url: https://developers.cloudflare.com/changelog/post/2026-10-23-undelete-seven-day-window/
fetched_at: 2026-10-24T09:10:00+09:00
published_date: 2026-10-23
date_precision: date-only
category: policy
---

# 2026-10-23 D1 undelete は7日以内のみ

## 公式内容の日本語要約

D1 の undelete API は、削除から7日以内のデータベースに対するリクエストだけを受け付ける。7日を超えたものはエラーになる。誤って削除した場合は、できるだけ早く、遅くとも7日以内に undelete を送る必要がある。

記事化判断: 見送り（スコア不足・5点）。1 / 1 / 1 / 0 / 2。公式記述が短く、影響は誤削除時に限られる。

## 原文確認

- 公式見出し: D1 - D1 database undelete requests limited to the last 7 days
- 公式URL: https://developers.cloudflare.com/changelog/post/2026-10-23-undelete-seven-day-window/
- 原文全文は公式ページで確認してください。
