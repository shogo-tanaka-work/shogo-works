---
date: 2026-08-31
title: "Browser Run の /crawl エンドポイントが Content Signals の use ディレクティブを尊重"
service: "Cloudflare"
product: "Browser Run"
source: https://developers.cloudflare.com/changelog/post/2026-08-31-crawl-content-use/
fetched_at: 2026-09-01T09:20:00+09:00
published_at: 2026-08-31
date_precision: date-only
category: enhancement
---

# 2026-08-31 Browser Run の /crawl が Content Signals の use ディレクティブを尊重

## 公式内容の日本語要約

Cloudflare Browser Run の **`/crawl` エンドポイントが、Content Signals 標準の `use` ディレクティブを尊重する**ようになった。サイト運営者は、自サイトのコンテンツが利用されてよい**最大のレベル**を `robots.txt` の Content Signals で表明できる。

クロールする側は、新しい **`contentUse` パラメータ**で自分の利用意図を宣言する。取りうる値は制限の緩い順に **`reference`** と **`full`** の2つで、**既定値は `full`**。

**対象サイトの `robots.txt` が宣言した `use` レベルが、リクエスト側の `contentUse` より制限的である場合、クロールリクエストは `400` エラーで拒否される。**

つまり、リクエスト側が「全面利用（`full`）」を宣言してクロールしようとしても、サイト側が「参照まで（`reference`）」しか許可していなければ、そのリクエストは Cloudflare 側で弾かれる。**既定値が `full` である点は重要で、明示しなければ最も広い利用意図を宣言したことになり、制限的なサイトへのクロールが既定で失敗しうる。**

## できるようになったこと

- `/crawl` リクエストで `contentUse` パラメータ（`reference` / `full`）による利用意図の宣言が可能に
- サイト側の `robots.txt` の Content Signals `use` レベルとの突き合わせが、Cloudflare 側で自動的に行われる
- 意図が過大な場合は `400` で拒否される

## 影響範囲

- 対象ユーザー: Browser Rendering / Browser Run の `/crawl` API 利用者
- 対象プラン: changelog 上でプランの明示なし
- API / UI / 管理者機能: `POST /accounts/{account_id}/browser-rendering/crawl` の新規パラメータ。既存呼び出しは `contentUse: full` 相当として扱われる

教材化メモ: src/content/ai-news-notes/cloudflare/browser-run-crawl-content-use.mdx

## 原文確認

- 公式見出し: 「Crawl endpoint now respects the Content Signals `use` directive」（August 31, 2026 / Browser Run）
- 公式URL: https://developers.cloudflare.com/changelog/post/2026-08-31-crawl-content-use/
- RSS: https://developers.cloudflare.com/changelog/rss/index.xml（`pubDate: Mon, 31 Aug 2026 00:00:00 GMT` の固定時刻のため `date_precision: date-only`）
- 原文全文は公式ページで確認してください。
