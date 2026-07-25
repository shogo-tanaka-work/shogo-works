---
date: 2026-07-23
title: "GitHub MCP Serverが次期MCP仕様（ステートレス化）に対応"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-07-23-github-mcp-server-supports-the-next-mcp-specification/
fetched_at: 2026-07-24T10:20:00+09:00
published_at: 2026-07-23T00:00:00Z
date_precision: date-only
category: enhancement
---

# 2026-07-23 GitHub MCP Serverが次期MCP仕様（ステートレス化）に対応

## 公式内容の日本語要約

GitHub MCP Serverが、2026-07-28リリース予定の次期MCP仕様（ステートレス化）に先行対応した。Redisセッションの廃止、リクエストペイロードのディープパケットインスペクション廃止（HTTPヘッダーからログ・シークレットスキャン用の値を取得）、URLベースのユーザーログインをHTTPリクエスト単位で処理するelicitationの強化が主な変更点。

## できるようになったこと

- Redisセッションを介さず初期化できるためレイテンシが低減
- 新仕様のステートレスアーキテクチャによりスケーリング・並列クライアントハンドシェイクが容易に
- 新旧クライアントの両方をGo SDKラッパー経由でサポート
- 公式conformanceテストでエージェント実装の準拠を検証可能

## 影響範囲

- 対象ユーザー: GitHub MCP Serverを利用する開発者・エージェント実装者
- 対象プラン: 全Tier 1 SDK対象、後方互換あり
- API / UI / 管理者機能: MCPプロトコル層の変更（サーバー実装側）

## 教材化メモ

MCP仕様自体の次期バージョン（2026-07-28リリース予定）にGitHubが先行対応した事例。ステートレス化はMCPサーバーのスケーラビリティ向上に直結するため、自社MCPサーバーを運用している場合は仕様追従の参考になる。

## 原文確認

- 公式見出し: GitHub MCP Server supports the next MCP specification
- 公式URL: https://github.blog/changelog/2026-07-23-github-mcp-server-supports-the-next-mcp-specification/
- 原文全文は公式ページで確認してください。
