---
date: 2026-10-28
title: "Workers Static Assets を URL path prefix から配信（assets.base_path）"
service: "Workers"
source: https://developers.cloudflare.com/changelog/post/2026-10-28-static-assets-base-path/
fetched_at: 2026-10-29T09:10:00+09:00
published_at: 2026-10-28
date_precision: date-only
category: enhancement
---

# 2026-10-28 Workers Static Assets を URL path prefix から配信（assets.base_path）

## 公式内容の日本語要約

Workers Static Assets が、ディレクトリ構造を変えずに URL の path prefix 配下から配信できるようになった。Wrangler では `assets.base_path`、`cloudflare.config.ts` では `worker.assets.basePath` を設定する（例: `/blog`）。Wrangler 4.148.0 以上、cf 1.0.0-beta.13 以上が必要。

## 影響範囲

- 対象: Workers で静的サイトを サブパスに載せる開発者

教材化メモ: src/content/ai-news-notes/cloudflare/workers-static-assets-base-path.mdx

## 原文確認

- 公式URL: https://developers.cloudflare.com/changelog/post/2026-10-28-static-assets-base-path/
- 原文全文は公式ページで確認してください。
