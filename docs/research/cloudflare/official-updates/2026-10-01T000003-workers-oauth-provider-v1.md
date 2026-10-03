---
date: 2026-10-01
title: "Workers OAuth Provider が v1。認可サーバーとリソースサーバーを分離し MCP 2026-07-28 に対応"
service: "Agents"
product: "Agents, Workers"
source: https://developers.cloudflare.com/changelog/post/2026-10-01-workers-oauth-provider-1x/
fetched_at: 2026-10-02T09:11:00+09:00
published_date: 2026-10-01
date_precision: date-only
category: enhancement
---

# 2026-10-01 Workers OAuth Provider v1

## 公式内容の日本語要約

MCP サーバーの認証に使う **Workers OAuth Provider** が **v1** になった。最大の変更は **API の分割**で、**1つの Worker が認可サーバー（authorization server）として動き、MCP サーバーはリソースサーバー（resource server）として別の Worker で動かせる**。トークン検証は **Service Bindings 経由**で行われ、公開インターネットを経由しない。

**MCP 2026-07-28 の認可仕様に完全対応**した。**Client ID Metadata Documents** と issuer 識別に対応し、**動的クライアント登録（DCR）を使う旧クライアントとの後方互換も維持**する。

追加機能は次のとおり。**ステップアップ認可** — `insufficientScope()` で1行で実装できる。**リソースメタデータ** — `OAuthResourceServer` が **RFC 9728** の protected resource metadata を公開し、401 チャレンジで認可サーバーを指し示す。**複数 MCP サーバー** — 1つの認可サーバーが複数の MCP サーバー向けトークンを発行でき、**WAF とレート制限は MCP サーバーごとに独立して設定**できる。**トークン管理** — `refreshTokenIdleTTL` によるスライディング有効期限、`purgeExpiredData()` による再開可能な KV クリーンアップ。**移行ツール** — 移行用の skill が同梱され、コーディングエージェントに移行作業を任せられる。

**0.x からの移行で必須の変更は `resourceMetadata: { resource }` の追加のみ。** v0.x の廃止期限は本発表では示されていない。

## できるようになったこと

- 認可サーバーと MCP サーバーを別 Worker に分離（Service Bindings でトークン検証）
- MCP 2026-07-28 準拠（Client ID Metadata Documents / issuer 識別）
- `insufficientScope()` によるステップアップ認可
- MCP サーバー単位の WAF / レート制限
- 同梱 skill によるエージェント主導の移行

## 影響範囲

- 対象ユーザー: Workers で MCP サーバーを運用している開発者
- 対象プラン: 記載なし（npm パッケージ）
- API / UI / 管理者機能: API の分割。0.x 利用者は `resourceMetadata` の追加が必須

教材化メモ: src/content/ai-news-notes/cloudflare/workers-oauth-provider-v1-mcp-auth.mdx

## 原文確認

- 公式見出し: The best way to do MCP auth just got better: Workers OAuth Provider goes v1, with a new split API and full support for MCP 2026-07-28
- 公式URL: https://developers.cloudflare.com/changelog/post/2026-10-01-workers-oauth-provider-1x/
- 原文全文は公式ページで確認してください。
