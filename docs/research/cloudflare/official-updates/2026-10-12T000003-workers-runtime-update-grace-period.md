---
date: 2026-10-12
title: "Workers ランタイム更新時の猶予が最大30秒から最大20分へ。処理中リクエストと接続が従来より長く生き残る"
service: "Cloudflare Workers"
product: "Workers"
source: https://developers.cloudflare.com/changelog/post/2026-10-12-longer-runtime-update-grace-period/
fetched_at: 2026-10-13T09:20:00+09:00
published_at: 2026-10-12
date_precision: date-only
category: enhancement
---

# 2026-10-12 Workers ランタイム更新の猶予期間延長

## 公式内容の日本語要約

Cloudflare が Workers のランタイムを更新する際、**処理中のリクエストと接続に与えられる猶予期間が、従来の最大30秒から最大20分へ延長された。**

Workers のランタイムは Cloudflare 側の都合で随時更新される。更新時には動いているインスタンスが置き換わるため、その時点で処理中のリクエストや張られている接続をどこまで待つかが問題になる。従来は最大30秒で打ち切られていた。今回の変更で、その上限が最大20分になる。

公式は同時に注意点を明記している。**猶予期間が終わる前に接続が切れることは依然としてありうる**ため、アプリケーション側は WebSocket の再接続と安全なリトライを扱えるように作っておく必要がある。つまり「切れなくなった」ではなく「切れにくくなった」変更である。

LLM のストリーミング応答、長時間動くエージェント、WebSocket 常時接続のように、1リクエストが30秒を超えて続く用途では、従来はランタイム更新がそのまま切断要因になっていた。その切断頻度が構造的に下がる。

## できるようになったこと

- 30秒を超える長時間リクエストが、ランタイム更新で打ち切られにくくなる
- WebSocket 接続がランタイム更新をまたいで維持されやすくなる
- ストリーミング応答や長時間エージェントの設計で、更新起因の切断を主要な失敗要因として扱う必要が薄まる

## 影響範囲

- 対象ユーザー: Workers 利用者全般（Durable Objects / Agents SDK 上の長時間処理を含む）
- 対象プラン: changelog に記載なし（プラン別の差異の記述は無い）
- API / UI / 管理者機能: プラットフォーム挙動の変更。コード変更や設定は不要

教材化メモ: src/content/ai-news-notes/cloudflare/workers-runtime-update-grace-period.mdx

## 原文確認

- 公式見出し: More time for requests to finish during Workers runtime updates
- 公式URL: https://developers.cloudflare.com/changelog/post/2026-10-12-longer-runtime-update-grace-period/
- RSS: https://developers.cloudflare.com/changelog/rss/workers.xml （pubDate: Mon, 12 Oct 2026 00:00:00 GMT）
- 原文全文は公式ページで確認してください。
