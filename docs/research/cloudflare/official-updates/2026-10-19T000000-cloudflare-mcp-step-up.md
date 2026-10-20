---
date: 2026-10-19
title: "Cloudflare API MCP サーバーが step-up authorization に対応"
service: "Agents"
product: "Agents"
source: https://developers.cloudflare.com/changelog/post/2026-10-19-cloudflare-mcp-step-up/
official_url: https://developers.cloudflare.com/changelog/post/2026-10-19-cloudflare-mcp-step-up/
fetched_at: 2026-10-20T09:10:00+09:00
published_date: 2026-10-19
date_precision: date-only
category: enhancement
---

# 2026-10-19 Cloudflare API MCP サーバーの step-up authorization

## 公式内容の日本語要約

Cloudflare API MCP サーバー（`https://mcp.cloudflare.com/mcp`）が **step-up authorization** に対応した。接続時の同意画面で **Minimal**（最小権限）を選んで始め、エージェントが作業中に追加のスコープを要する呼び出しをすると、サーバーが不足スコープを示す **`insufficient_scope` チャレンジ**を返し、MCP クライアントが利用者に追加承認を求める。すでに許可したスコープは維持される。

step-up authorization に対応する MCP クライアントで使える。プランや料金への言及はなく、対応クライアント名も記載されていない。

教材化メモ: src/content/ai-news-notes/cloudflare/cloudflare-mcp-step-up.mdx

## できるようになったこと

- 最小権限で接続し、必要になった時点で権限を追加承認できる
- 不足スコープが `insufficient_scope` で明示される

## 影響範囲

- 対象ユーザー: Cloudflare API MCP サーバーを使うエージェント利用者
- 対象プラン: 記載なし
- API / UI / 管理者機能: 同意画面の Minimal 選択、MCP 仕様の step-up 認可フロー

## 原文確認

- 公式見出し: `Agents - Cloudflare API MCP server now supports step-up authorization`
- 公式URL: https://developers.cloudflare.com/changelog/post/2026-10-19-cloudflare-mcp-step-up/
- MCP 仕様: https://modelcontextprotocol.io/specification/2026-07-28/basic/authorization#step-up-authorization-flow
- 原文全文は公式ページで確認してください。
