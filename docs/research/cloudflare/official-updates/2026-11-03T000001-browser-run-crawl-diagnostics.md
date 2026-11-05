---
date: 2026-11-03
title: "Browser Run /crawl 結果に URL 単位の outcome と robots.txt 診断"
service: "Cloudflare / Browser Run"
source: https://developers.cloudflare.com/changelog/post/2026-11-03-crawl-result-diagnostics/
fetched_at: 2026-11-04T09:10:00+09:00
published_at: 2026-11-03
date_precision: date-only
category: enhancement
---

# 2026-11-03 Browser Run /crawl 結果に URL 単位の outcome と robots.txt 診断

## 公式内容の日本語要約

Browser Run の /crawl 結果の各 URL レコードに outcome（success / robots_disallowed / timeout / page_error など）が付く。ジョブ単位の robots 配列は最大50オリジンの robots.txt の状態（利用可否・HTTP ステータス）を返す。クロール失敗の原因切り分けが容易になる。

教材化メモ: 見送り（スコア5）のため作成しない。

## 原文確認

- 公式URL: https://developers.cloudflare.com/changelog/post/2026-11-03-crawl-result-diagnostics/
- 原文全文は公式ページで確認してください。
