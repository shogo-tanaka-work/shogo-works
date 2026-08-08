---
date: 2026-08-06
title: "The next generation of MCP — 2026-07-28 仕様のステートレス実装と Workers 対応"
service: "Cloudflare"
product: "Workers, Agents"
source: https://blog.cloudflare.com/mcp-v2/
fetched_at: 2026-08-07T10:00:00+09:00
published_at: 2026-08-06T13:00:00Z
date_precision: timestamp
category: release
---

# 2026-08-06 The next generation of MCP

## 公式内容の日本語要約

Cloudflare が MCP `2026-07-28` 仕様への対応を実装側から解説し、あわせて SDK の再構成を発表した。仕様自体は 2026-07-28 に確定しており（既報）、本記事は「その仕様で MCP サーバーをどう書くか」を Cloudflare の実装として示すもの。

仕様側の要点として挙げられているのは、リクエストパスからのハンドシェイク・`Mcp-Session-Id` ヘッダー・プロトコルセッションの除去（完全ステートレス化）、ストリーム依存の elicitation を置き換える **Multi Round-Trip Requests（MRTR）**（サーバーが `input_required` を返すリクエスト/レスポンス型）、`Mcp-Method` / `Mcp-Name` HTTP ヘッダーの追加（ゲートウェイやセキュリティ製品が JSON 本文を解析せずにリクエスト内容を判別できる）、ツール／プロンプト／リソースのカタログに対する `ttlMs` / `cacheScope` キャッシュヒント、認可の強化（Dynamic Client Registration を非推奨化し、事前登録クライアントと Client ID Metadata Documents へ移行。RFC 9207 の issuer 識別を採用）。

機能ライフサイクルも正式化され、削除の12か月以上前に予告する非推奨ポリシーが定められた。非推奨対象は Roots、Sampling、Logging、Dynamic Client Registration、旧 HTTP+SSE トランスポート。

Cloudflare 側の成果物は、`createMcpHandler` の MCP TypeScript SDK 本体への正式取り込み（Durable Objects なしでステートレスサーバーをデプロイできる）、MCP SDK の Web 標準ベースへの載せ替え（Bun / Deno / Workers で動作）、新旧クライアントを1つの `/mcp` エンドポイントで受ける後方互換、そして Cloudflare API を提供する Code Mode MCP サーバー（数十億回のツール呼び出し実績）。SDK は TypeScript / Python / Go / C# が更新済みで、即日利用可能。

## できるようになったこと

- Durable Objects を使わず、Workers 上に純粋なステートレス MCP サーバーをデプロイできる
- `createMcpHandler` が MCP TypeScript SDK の公式 API として使える
- MCP SDK が Bun / Deno / Workers で動作する（Node 依存を排除）
- 1つの `/mcp` エンドポイントで新ステートレスクライアントと 2025 年仕様クライアントの両方を受けられる
- `Mcp-Method` / `Mcp-Name` ヘッダーにより、ゲートウェイ側でツール単位の制御・監査ができる

## 影響範囲

- 対象ユーザー: MCP サーバー開発者、Workers 利用者
- 対象プラン: 記事中に個別の価格提示なし
- API / UI / 管理者機能: SDK / API

教材化メモ: src/content/ai-news-notes/cloudflare/mcp-next-generation-stateless.mdx

## 原文確認

- 公式見出し: The next generation of MCP
- 公式URL: https://blog.cloudflare.com/mcp-v2/
- 関連（仕様確定の既報）: src/content/ai-news/claude/mcp-2026-07-28-spec-to-claude.mdx
- 原文全文は公式ページで確認してください。
