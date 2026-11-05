---
date: 2026-11-04
title: "AI Gateway: モデルエイリアス"
service: "Cloudflare / AI Gateway"
source: https://developers.cloudflare.com/changelog/post/2026-11-04-model-aliases/
fetched_at: 2026-11-05T09:20:00+09:00
published_at: 2026-11-04
date_precision: date-only
category: release
---

# 2026-11-04 AI Gateway: モデルエイリアス

## 公式内容の日本語要約

AI Gateway が、複数モデルのプールを1つの名前（例: custom/support-fast）で呼べるモデルエイリアスに対応。設定順に試して失敗時は次へフォールバックし、スマートルーティングでリクエストごとに選ぶこともできる。アプリは名前だけを参照するので、再デプロイなしでモデル入れ替えやルーティング変更ができる。エイリアスはゲートウェイ単位。REST では model にエイリアス名、cf-aig-gateway-id ヘッダーでゲートウェイを指定する。

教材化メモ: src/content/ai-news-notes/cloudflare/ai-gateway-model-aliases.mdx

## 原文確認

- 公式URL: https://developers.cloudflare.com/changelog/post/2026-11-04-model-aliases/
- 取得経路: Exa（web_fetch_exa）。原文全文は公式ページで確認してください。
