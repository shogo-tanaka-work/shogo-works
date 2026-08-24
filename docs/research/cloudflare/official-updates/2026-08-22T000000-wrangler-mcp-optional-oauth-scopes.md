---
date: 2026-08-22
title: "Wrangler と Cloudflare API MCP server が任意 OAuth スコープに対応（同意画面で付与範囲を選択可能に）"
service: "Cloudflare Agents / Workers"
product: "Agents, Workers"
source: https://developers.cloudflare.com/changelog/post/2026-08-22-wrangler-mcp-optional-oauth-scopes/
official_url: https://developers.cloudflare.com/changelog/post/2026-08-22-wrangler-mcp-optional-oauth-scopes/
fetched_at: 2026-08-23T09:05:00+09:00
published_at: 2026-08-22
date_precision: date-only
category: enhancement
---

# 2026-08-22 Wrangler / Cloudflare API MCP server の任意 OAuth スコープ

## 公式内容の日本語要約

Cloudflare は Wrangler CLI と Cloudflare API MCP server の OAuth 認可に**任意スコープ（optional scopes）**を導入した。これまでは各クライアントが要求するスコープを**まとめて承認するしかなかった**が、今後は同意画面で付与するスコープを選べる。

同意画面に権限を編集するための導線が追加され、そこから個別のスコープをオン / オフできる。**必須スコープは選択されたまま**で外せない。任意スコープを絞れば、そのツールがアクセスできる範囲を自分のワークフローに必要な分だけに限定できる。

後からスコープが足りなくなった場合の扱いも明示されている。**declineしたスコープが必要なコマンドやツール呼び出しに当たった場合は、クライアントを再認可してそのスコープを付与する**。つまり「最小で始めて、必要になったら足す」運用が公式に想定されている。

公式は詳細の参照先として `wrangler login` のドキュメントと「Edit optional permissions」を挙げている。changelog 側にスコープ名の一覧は掲載されていない。

対象製品は changelog のタグ上 `Agents` と `Workers` の2つ。Cloudflare API MCP server が含まれる点が本件の要で、**MCP クライアント（エージェント）に渡す権限を人間が認可時点で削れる**ようになったことを意味する。

## できるようになったこと

- Wrangler / Cloudflare API MCP server の認可時に、任意スコープを個別に選択して付与できる
- 同意画面から権限を編集する導線が追加された
- 必須スコープは選択が固定される（外せない）
- 付与しなかったスコープが必要になった場合は、再認可して個別に追加する

## 影響範囲

- 対象ユーザー: Wrangler CLI 利用者、Cloudflare API MCP server を使うエージェント / MCP クライアント利用者
- 対象プラン: 明示なし（認可フローの変更）
- API / UI / 管理者機能: OAuth 同意画面の UI 変更と、それに伴う権限モデルの変更

教材化メモ: src/content/ai-news-notes/cloudflare/wrangler-mcp-optional-oauth-scopes.mdx

## 原文確認

- 公式見出し: Agents, Workers - Choose OAuth scopes for Wrangler and the Cloudflare API MCP server
- 公式URL: https://developers.cloudflare.com/changelog/post/2026-08-22-wrangler-mcp-optional-oauth-scopes/
- 原文全文は公式ページで確認してください。
