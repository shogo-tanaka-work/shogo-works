---
date: 2026-10-01
title: "AI Search が一般提供（GA）。課金は 2026-11-01 開始、マルチモーダル埋め込みに対応"
service: "AI Search"
product: "AI Search"
source: https://blog.cloudflare.com/ai-search-ga/
fetched_at: 2026-10-02T09:11:00+09:00
published_date: 2026-10-01
date_precision: date-only
category: release
---

# 2026-10-01 AI Search 一般提供（GA）

## 公式内容の日本語要約

Cloudflare の **AI Search** が 2026-10-01 に preview から **一般提供（GA）**へ移行した。AI Search は **Workers AI / Vectorize / R2 / Browser Run** を束ねた「フルマネージドな索引・検索パイプライン」である。

**課金開始は 2026-11-01**で、開始前に開発者へ通知するとしている。**期限が明記された告知**にあたる。

GA での追加点は2つある。**(1) マルチモーダル埋め込み** — **Qwen3-VL-Embedding** により画像をピクセルのまま埋め込んで検索できる。視覚情報とテキストキャプションの両方を保持する二重構成で、**Matryoshka Representation Learning** によりストレージ効率を確保する。テキスト専用モデルでも ToMarkdown でキャプション化すれば画像を検索対象にできる。**(2) ファイル処理の拡張** — 最大ファイルサイズを **4 MiB → 10 MiB** へ引き上げ、Markdown / HTML / CSV / JSON / PDF に対応。スキャン PDF の **OCR** は画像処理の取り込みトークンとして課金される。

**2026-11-01 からの価格**（無料枠付き）:

| 項目 | 単価 | 無料枠 |
| --- | --- | --- |
| 取り込み（基本） | $0.75 / 100万トークン | 月500万トークン |
| 画像処理（加算） | +$0.50 / 100万トークン | 月500万トークン |
| ストレージ | $2.00 / GB・月 | 10 GB |
| セマンティック検索 | $0.75 / 1,000件 | 月1,000件 |
| 全文検索 | $0.10 / 1,000件 | 月1,000件 |

埋め込みとリランキングは対象 Workers AI モデルであれば込みで、サードパーティモデルは別課金。今後の予定として動画・音声処理、キーワード検索のスケール改善、エージェント向けのサイト組み込み簡素化が挙げられている。

## できるようになったこと

- preview ではなく GA として本番利用できる
- 画像をピクセルのまま埋め込んで検索（Qwen3-VL-Embedding）
- 1ファイル 10 MiB まで取り込み、スキャン PDF は OCR 対応
- 2026-11-01 からの価格が確定し、コスト試算ができる

## 影響範囲

- 対象ユーザー: Cloudflare で RAG / 社内検索を構築する開発者
- 対象プラン: 無料枠あり。**2026-11-01 から従量課金**
- API / UI / 管理者機能: AI Search の設定・API

教材化メモ: src/content/ai-news-notes/cloudflare/ai-search-generally-available.mdx

## 原文確認

- 公式見出し: AI Search is now generally available
- 公式URL: https://blog.cloudflare.com/ai-search-ga/
- changelog: https://developers.cloudflare.com/changelog/post/2026-10-01-ai-search-generally-available/
- 既報: 2026-08-06 の単一コマンド化・価格 preview（`src/content/ai-news/cloudflare/ai-search-simplified-pricing.md`）の続報にあたる
- 原文全文は公式ページで確認してください。
