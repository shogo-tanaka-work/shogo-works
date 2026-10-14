---
date: 2026-10-12
title: "Agents SDK に web_fetch ツールが追加。Workers AI Markdown Conversion でページ・PDF・Office 文書をテキスト化"
service: "Cloudflare Agents SDK"
product: "Agents"
source: https://developers.cloudflare.com/changelog/post/2026-10-11-web-fetch/
fetched_at: 2026-10-13T09:20:00+09:00
published_at: 2026-10-12
date_precision: date-only
category: release
---

# 2026-10-12 Agents SDK の web_fetch ツール

## 公式内容の日本語要約

Cloudflare Agents SDK に、エージェントが URL を指定して Web ページ・PDF・対応 Office 文書を読み込める **`web_fetch` ツール**が追加された。取得した内容は **Workers AI Markdown Conversion** でモデルが読めるテキストへ変換される。Markdown for Agents に対応したサイトに対しては Markdown を直接要求する。

モデルに返るのはページ本文、リダイレクト後の最終 URL、HTTP ステータス、content type の4点である。長いページは分割して返され、各レスポンスに次の区間を要求するための offset が含まれる。

設定で制御できるのは、取得を許可するホスト、レスポンスサイズ上限、タイムアウト、リダイレクトの扱い。changelog には制御項目の存在のみ記載があり、オプション名は docs 側（`developers.cloudflare.com/agents/tools/web-fetch/`）に委ねられている。

導入経路は Pi Durable harness が正式に案内されている。`agents/webfetch/pi` の `webFetchTool` を `this.registry.install({ name: "web-tools", tools: [webFetchTool({ binding: this.env.AI })] })` で登録する。AI SDK / TanStack AI 用アダプタも同梱。モデルを呼ばずにページ取得だけ行う場合は `agents/webfetch` の `fetchWeb()` / `windowWebFetchPage()` / `renderWebFetchPage()` を使い、Durable Object もブラウザも不要である。

`web_search` ツールを併せて渡すと、検索結果のページを `web_fetch` で読むようモデルへ指示される。

## できるようになったこと

- エージェントに Web・PDF・Office 文書の読み取り能力を、自前のパーサ実装なしで持たせられる
- 長文ページを offset 付きで分割取得でき、文脈長の制約下でも読み進められる
- 許可ホスト・サイズ・タイムアウト・リダイレクトを設定で縛れる
- モデルを介さない単体のページ取得関数も使える

## 影響範囲

- 対象ユーザー: Agents SDK 利用者（v0.28.0 以降が必須）
- 対象プラン: changelog に記載なし。Workers AI Markdown Conversion の課金に従う想定
- API / UI / 管理者機能: SDK API のみ。課金・価格の記載は changelog に無い

教材化メモ: src/content/ai-news-notes/cloudflare/agents-sdk-web-fetch-tool.mdx

## 原文確認

- 公式見出し: New web_fetch tool in the Agents SDK for reading webpages and documents, with automatic markdown conversion
- 公式URL: https://developers.cloudflare.com/changelog/post/2026-10-11-web-fetch/
- RSS: https://developers.cloudflare.com/changelog/rss/agents.xml （pubDate: Mon, 12 Oct 2026 00:00:00 GMT）
- 原文全文は公式ページで確認してください。
