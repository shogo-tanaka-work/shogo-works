---
date: 2026-11-11
title: "Workers Static Assets の base_path（再掲）"
service: "Workers"
source: https://developers.cloudflare.com/changelog/post/2026-11-11-static-assets-base-path/
fetched_at: 2026-11-12T09:15:00+09:00
published_at: 2026-11-11
date_precision: date-only
category: enhancement
---

# 2026-11-11 Workers Static Assets の base_path（再掲）

## 公式内容の日本語要約

`assets.base_path`（Wrangler）/ `worker.assets.basePath`（cloudflare.config.ts）で `/blog/` のような URL パス配下から静的アセットを配信できる。Wrangler 4.148.0 以上、cf 1.0.0-beta.13 以上。`_headers` / `_redirects` / `run_worker_first` のパスは `/blog` を含む公開パス、Vite プラグイン利用時は Vite の `base` も `/blog/` にする。2026-10-28 の同名エントリと機能は同一で、今回のページは日付と例の compatibility date が更新されている。

## 影響範囲

- 既出: `2026-10-28T000000-workers-static-assets-base-path.md`、記事 `src/content/ai-news/cloudflare/workers-static-assets-base-path.md`

## 原文確認

- 公式URL: https://developers.cloudflare.com/changelog/post/2026-11-11-static-assets-base-path/
