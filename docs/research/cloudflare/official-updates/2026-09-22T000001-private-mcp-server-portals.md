---
date: 2026-09-22
title: "MCP server portal がプライベートネットワーク上の MCP サーバーへ接続できるようになった"
service: "Cloudflare"
product: "Cloudflare One, Access"
source: https://developers.cloudflare.com/changelog/post/2026-09-22-private-mcp-servers/
fetched_at: 2026-09-23T09:10:00+09:00
published_at: 2026-09-22
date_precision: date-only
category: enhancement
---

# 2026-09-22 Cloudflare MCP server portal のプライベート MCP サーバー対応

## 公式内容の日本語要約

Cloudflare は 2026-09-22、**MCP server portal が社内ネットワーク上にのみ存在する MCP サーバーへ接続できる**ようにした。portal は Cloudflare Gateway を経由してプライベートなホスト名・IP アドレスへ到達するため、**MCP サーバーをインターネットへ公開せずに済む。**

手順は3段階である。まず Cloudflare Tunnel、Cloudflare Mesh、その他の Cloudflare One コネクタでサーバーのネットワークを Cloudflare へ接続する。次にプライベートホスト名または CIDR ルートを設定する。最後に、サーバーを追加するときに **Route traffic through Cloudflare Gateway** を有効にする。

**例外がある。OAuth 認可サーバーのエンドポイント（authorization / token）は、引き続きインターネットから到達できる必要がある。** Cloudflare が Dynamic Client Registration（DCR）で OAuth クライアントを自動登録する構成では、registration エンドポイントも公開されていなければならない。つまり「MCP サーバー本体は閉じられるが、認可の入口は閉じられない」という設計である。

## できるようになったこと

- 社内限定の MCP サーバーを、公開せずに MCP server portal から利用できる
- Gateway 経由の経路をサーバー単位で切り替えられる（Route traffic through Cloudflare Gateway）
- プライベートホスト名と CIDR ルートの両方で指定できる

## 影響範囲

- 対象ユーザー: Cloudflare One / Access で MCP server portal を運用する管理者
- 対象プラン: Cloudflare One / Access（changelog はプラン条件に言及していない）
- API / UI / 管理者機能: 管理者側の設定変更。**OAuth 認可エンドポイントの公開可達性が前提条件として残る**ため、完全な閉域化にはならない

教材化メモ: src/content/ai-news-notes/cloudflare/private-mcp-server-portals.mdx

## 原文確認

- 公式見出し: Private MCP server support for MCP server portals
- 公式URL: https://developers.cloudflare.com/changelog/post/2026-09-22-private-mcp-servers/
- 原文全文は公式ページで確認してください。
