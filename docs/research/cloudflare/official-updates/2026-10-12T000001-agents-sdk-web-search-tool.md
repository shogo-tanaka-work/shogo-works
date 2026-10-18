---
date: 2026-10-12
title: "Agents SDK に web_search ツールが追加。Cloudflare Web Search API（ceramic.ai / Exa / Linkup）をエージェントのツールとして呼べる"
service: "Cloudflare Agents SDK"
product: "Agents"
source: https://developers.cloudflare.com/changelog/post/2026-10-12-web-search/
fetched_at: 2026-10-13T09:20:00+09:00
published_at: 2026-10-12
date_precision: date-only
category: release
---

# 2026-10-12 Agents SDK の web_search ツール

## 公式内容の日本語要約

Cloudflare Agents SDK に **`web_search` ツール**が追加された。モデルがクエリと最大件数を指定し、**Cloudflare Web Search API** 経由で公開 Web を検索する。Web Search API のバックエンドは **ceramic.ai / Exa / Linkup** の3社で、セットアップ例では `provider: "exa"` を指定している。

結果はタイトル・URL・切り詰めた説明文の短い番号付きリストとして返る。`web_fetch` ツールを併せて渡した場合、検索で返ったページを `web_fetch` で読むようモデルへ指示される。

導入は Pi Durable harness が案内されている。`agents/websearch/pi` の `webSearchTool` を `PiHarness` の `harness` コールバック内で `this.registry.install({ name: "web-tools", tools: [webSearchTool({ binding: this.env.AI, provider: "exa" })] })` として登録し、`Harness.open(storage, { models, registry: this.registry }, context)` を返す。AI SDK / TanStack AI アダプタも同梱。スケジュールジョブなどモデルを介さない検索には `agents/websearch` の `createAIWebSearch()` / `createHTTPWebSearch()` を使う。

changelog に出ているオプションは `binding` と `provider` の2つのみで、設定項目の全量とエラーハンドリングは docs 側に委ねられている。**価格・課金の記載は changelog に無い。** Web Search API 自体は 2026-10-02 に AI Gateway 経由で公開済みで、課金は AI Gateway のクレジットを消費しパートナーのリスト価格そのまま（Cloudflare のマージン無し）と当時発表されている。

## できるようになったこと

- エージェントに Web 検索能力を、検索プロバイダーとの個別契約・個別実装なしで持たせられる
- `web_search` → `web_fetch` の2段構成がツール定義の側で誘導される
- モデルを介さない検索関数も使えるため、定期ジョブからの収集にも転用できる

## 影響範囲

- 対象ユーザー: Agents SDK 利用者（v0.27.0 以降が必須）
- 対象プラン: changelog に記載なし。Web Search API の課金（AI Gateway クレジット）に従う想定
- API / UI / 管理者機能: SDK API のみ

教材化メモ: src/content/ai-news-notes/cloudflare/agents-sdk-web-search-tool.mdx

## 原文確認

- 公式見出し: New web_search tool in the Agents SDK, powered by the Cloudflare Web Search API
- 公式URL: https://developers.cloudflare.com/changelog/post/2026-10-12-web-search/
- 関連（既出）: https://blog.cloudflare.com/introducing-web-search-api/ （2026-10-02、Web Search API 本体）
- 原文全文は公式ページで確認してください。
