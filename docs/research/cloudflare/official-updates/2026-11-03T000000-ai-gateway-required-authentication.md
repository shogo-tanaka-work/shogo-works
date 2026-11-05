---
date: 2026-11-03
title: "AI Gateway: 新規ゲートウェイは認証必須"
service: "Cloudflare / AI Gateway"
source: https://developers.cloudflare.com/changelog/post/2026-11-03-required-authentication/
fetched_at: 2026-11-05T09:20:00+09:00
published_at: 2026-11-03
date_precision: date-only
category: policy
---

# 2026-11-03 AI Gateway: 新規ゲートウェイは認証必須

## 公式内容の日本語要約

新規 AI Gateway は認証が必須になり、オンにするとダッシュボードからも API からもオフに戻せない。API の新規作成で authentication を省略または true なら認証オン、false なら HTTP 400。既存ゲートウェイは認証オフでもそのまま動き、設定画面か authentication: true の更新でオンにできる。Workers バインディング経由は認証済み扱い。前回 PR（#534）の窓では取りこぼしていたため今回追補。

教材化メモ: src/content/ai-news-notes/cloudflare/ai-gateway-required-authentication.mdx

## 原文確認

- 公式URL: https://developers.cloudflare.com/changelog/post/2026-11-03-required-authentication/
- 取得経路: Exa（web_fetch_exa）。原文全文は公式ページで確認してください。
