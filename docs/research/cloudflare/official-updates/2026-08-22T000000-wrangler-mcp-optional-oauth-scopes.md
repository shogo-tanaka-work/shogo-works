---
date: 2026-08-22
title: "Wrangler と Cloudflare API MCP server が optional OAuth scopes に対応"
service: "Cloudflare"
product: "Agents, Workers"
source: https://developers.cloudflare.com/changelog/post/2026-08-22-wrangler-mcp-optional-oauth-scopes/
official_url: https://developers.cloudflare.com/changelog/post/2026-08-22-wrangler-mcp-optional-oauth-scopes/
fetched_at: 2026-08-24T09:04:28+09:00
published_at: 2026-08-22T00:00:00Z
date_precision: date-only
category: enhancement
---

# 2026-08-22 Wrangler / Cloudflare API MCP server の optional OAuth scopes

## 公式内容の日本語要約

Wrangler（`wrangler login`）と Cloudflare API MCP server の OAuth 認可で、**クライアントが要求したスコープを全部承認するか全部拒否するかの二択だった同意画面が、個別に選べる形に変わった**。同意ダイアログに `Edit Permissions` ボタンが加わり、optional として定義されたスコープをトグルで外せる。required スコープは選択済みのまま外せない。

2026-08-20 に Cloudflare の OAuth 基盤側で optional scopes が一般提供された（`From all-or-nothing to task-based OAuth consent`）ことを受け、その適用先として Wrangler と Cloudflare API MCP server が対応した形である。公式ブログは、MCP server が「エージェントが理論上使いうる」広い権限をまとめて要求する構造になっている点を、all-or-nothing の同意画面が正当化しにくくなった理由として挙げている。

スコープの評価対象はその認可フローで実際に要求されたものだけで、クライアントに設定された全スコープではない。optional スコープが要求されていない場合、同意画面の見た目はこれまでと変わらない。発行されるアクセストークンは実際に許可されたスコープだけを反映するため、**部分的にしか許可されなかったケースをクライアント側が扱えるようにしておく必要がある**。断ったスコープが後で必要になった場合は、再認可して追加で許可する。

## できるようになったこと

- `wrangler login` と Cloudflare API MCP server の認可時に、optional スコープを個別に外せる
- 同意画面の `Edit Permissions` から許可範囲を編集できる
- 発行されるトークンが、実際に許可されたスコープだけを持つ

## 影響範囲

- 対象ユーザー: Wrangler 利用者、Cloudflare API MCP server を AI クライアントへ接続している利用者
- 対象プラン: 記載なし（OAuth 認可フロー全般）
- API / UI / 管理者機能: 認可同意画面の UI と、発行トークンのスコープ

教材化メモ: src/content/ai-news-notes/cloudflare/wrangler-mcp-optional-oauth-scopes.mdx

## 原文確認

- 公式見出し: `Agents, Workers - Choose OAuth scopes for Wrangler and the Cloudflare API MCP server`
- 公式URL: https://developers.cloudflare.com/changelog/post/2026-08-22-wrangler-mcp-optional-oauth-scopes/
- 関連公式ブログ: https://blog.cloudflare.com/task-based-oauth-consent/
- 原文全文は公式ページで確認してください。
