---
date: 2026-08-30
title: "AI Search が GLM-5.3 Flash に対応"
service: "Cloudflare AI Search"
product: "AI Search, Workers AI"
source: https://developers.cloudflare.com/changelog/post/2026-08-30-glm-5.3-flash/
official_url: https://developers.cloudflare.com/changelog/post/2026-08-30-glm-5.3-flash/
fetched_at: 2026-08-30T09:10:00+09:00
published_at: 2026-08-30
date_precision: date-only
category: enhancement
---

# 2026-08-30 AI Search が GLM-5.3 Flash に対応

## 公式内容の日本語要約

Cloudflare は 2026-08-30、**AI Search のテキスト生成モデルとして GLM-5.3 Flash を選べる**ようにした。モデル ID は `@cf/zai-org/glm-5.3-flash`、**コンテキストウィンドウは 1,048,576 トークン**で、Workers AI 上で動作する。

2日前（2026-08-28）に Workers AI へ追加された GLM-5.3 の軽量版にあたる。**AI Search インスタンスの設定で、生成に使うモデルとして指定できる。**

changelog 側に価格の記載はない。

## できるようになったこと

- AI Search の生成モデルに `@cf/zai-org/glm-5.3-flash` を指定できる
- 1M トークン級のコンテキストを AI Search の生成段で使える

## 影響範囲

- 対象ユーザー: Cloudflare AI Search（RAG）を使っている開発者
- 対象プラン: AI Search / Workers AI の従量課金
- API / UI / 管理者機能: AI Search インスタンスのモデル設定

教材化メモ: src/content/ai-news-notes/cloudflare/workers-ai-glm-5-3.mdx

## 原文確認

- 公式見出し: AI Search now supports GLM-5.3 Flash
- 公式URL: https://developers.cloudflare.com/changelog/post/2026-08-30-glm-5.3-flash/
- 補助: https://developers.cloudflare.com/changelog/rss/index.xml （pubDate: Sun, 30 Aug 2026 00:00:00 GMT）
- 原文全文は公式ページで確認してください。
