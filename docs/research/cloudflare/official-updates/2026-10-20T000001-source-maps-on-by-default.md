---
date: 2026-10-20
title: "Wrangler と cf が既定でソースマップをアップロード"
service: "Workers, Cloudflare CLI"
source: https://developers.cloudflare.com/changelog/post/2026-10-20-source-maps-on-by-default/
official_url: https://developers.cloudflare.com/changelog/post/2026-10-20-source-maps-on-by-default/
fetched_at: 2026-10-21T09:10:00+09:00
published_date: 2026-10-20
date_precision: date-only
category: policy
---

# 2026-10-20 ソースマップのアップロードが既定に

## 公式内容の日本語要約

Wrangler 4.150.0 以降、`wrangler deploy` / `versions upload` / `preview` がソースマップを既定で生成・アップロードする。`upload_source_maps` の設定は不要になった。`cf deploy` も既定でアップロードし、Cloudflare Vite プラグイン 1.64.0 以降は Worker ビルドが既定でソースマップを生成する。

元のファイル名・行番号に戻ったスタックトレースが Workers Logs、リアルタイムログ、Tail Workers、Workers Issues に出る。適用は Worker 実行後で、CPU 時間・バンドルサイズ・コールドスタートに影響しない。カスタムビルドでは外部ソースマップを自動でアップロードし、解決できないもの（インライン `data:`）はスキップする。無効化は `upload_source_maps: false`（Vite 側は `build.sourcemap: false`）。

教材化メモ: src/content/ai-news-notes/cloudflare/source-maps-on-by-default.mdx

## できるようになったこと

- 設定なしで元コード位置のスタックトレースを得る

## 影響範囲

- 対象ユーザー: Workers 開発者
- 対象プラン: 記載なし
- API / UI / 管理者機能: CLI の既定値変更

## 原文確認

- 公式見出し: Workers, Cloudflare CLI - Wrangler and cf now upload source maps by default
- 公式URL: https://developers.cloudflare.com/changelog/post/2026-10-20-source-maps-on-by-default/
- 原文全文は公式ページで確認してください。
