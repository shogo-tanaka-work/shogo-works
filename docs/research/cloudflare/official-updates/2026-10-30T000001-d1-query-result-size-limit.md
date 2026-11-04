---
date: 2026-10-30
title: "D1 が最大クエリ結果サイズ 50MB を適用（2026-11-04 から）"
service: "D1"
source: https://developers.cloudflare.com/changelog/post/2026-10-30-query-result-size-limit/
fetched_at: 2026-10-31T09:10:00+09:00
published_at: 2026-10-30
date_precision: date-only
category: policy
---

# 2026-10-30 D1 が最大クエリ結果サイズ 50MB を適用（2026-11-04 から）

## 公式内容の日本語要約

2026-11-04 から、50MB を超える結果を返す D1 クエリは失敗する（エラー: D1 query result exceeded the maximum response size limit of 50 MB）。99.999 パーセンタイルのリクエストを含む水準で、大半の利用者は影響しない。REST API の import / export は対象外。対策は必要な列だけ選ぶことと、LIMIT / OFFSET による分割取得。

## 原文確認

- 公式URL: https://developers.cloudflare.com/changelog/post/2026-10-30-query-result-size-limit/
- 原文全文は公式ページで確認してください。

教材化メモ: src/content/ai-news-notes/cloudflare/d1-query-result-size-limit.mdx
