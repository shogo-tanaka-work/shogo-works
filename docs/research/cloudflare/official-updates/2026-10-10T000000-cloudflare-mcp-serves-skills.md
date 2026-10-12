---
date: 2026-10-10
title: "Cloudflare API MCP server が Cloudflare skills を Skills over MCP 拡張で配信"
service: "Cloudflare API MCP server"
product: "Agents"
source: https://developers.cloudflare.com/changelog/post/2026-10-10-cloudflare-mcp-skills/
official_url: https://developers.cloudflare.com/changelog/post/2026-10-10-cloudflare-mcp-skills/
fetched_at: 2026-10-11T09:25:00+09:00
published_date: 2026-10-10
date_precision: date-only
category: enhancement
---

# 2026-10-10 Cloudflare API MCP server が Cloudflare skills を Skills over MCP 拡張で配信

## 公式内容の日本語要約

Cloudflare API MCP server（`https://mcp.cloudflare.com/mcp`）が、**Cloudflare skills を Skills over MCP 拡張経由で配信するようになった。**

従来、Cloudflare skills（`github.com/cloudflare/skills`）はエージェントごとのプラグインインストールか、スキルフォルダを各エージェントのスキルディレクトリへコピーする形で導入していた。Claude Code なら `~/.claude/skills/`、Cursor なら `~/.cursor/skills/` といったローカル配置が前提だった。

今回、**Skills over MCP 拡張に対応した MCP クライアントは、MCP 接続そのものからスキルを取得できる。** 公式の記述では、クライアントは `skills/list` でスキルを発見し、`skill://<name>/<path>` でファイルを読む。利用するには互換クライアントに `https://mcp.cloudflare.com/mcp` を追加する。

Cloudflare API MCP server は Code Mode パターンのサーバーで、2,500 以上の Cloudflare API エンドポイントを `search()` と `execute()` の2ツールだけで扱う。そこへスキル配信が乗った形である。

## できるようになったこと

- Skills over MCP 対応クライアントが、**MCP 接続経由で Cloudflare skills を取得できる**（`skills/list` / `skill://<name>/<path>`）
- スキルのローカルインストール（プラグイン導入、スキルフォルダのコピー）を**前提にしない導入経路**ができた
- 接続先は既存の `https://mcp.cloudflare.com/mcp` のままで、**新しいエンドポイントは追加されていない**

## 影響範囲

- 対象ユーザー: Skills over MCP 拡張に対応した MCP クライアントの利用者。対応状況は MCP の client matrix 側で管理される
- 対象プラン: changelog に記載なし（MCP server 自体は OAuth もしくは API トークンの bearer 認証で利用）
- API / UI / 管理者機能: MCP プロトコル層。Cloudflare 側の管理設定の変更は記載されていない

## 教材化メモ

記事化する。教材化メモ: `src/content/ai-news-notes/cloudflare/cloudflare-mcp-server-serves-skills.mdx`

## 原文確認

- 公式見出し: Cloudflare API MCP server serves Cloudflare skills
- 公式URL: https://developers.cloudflare.com/changelog/post/2026-10-10-cloudflare-mcp-skills/
- 参照先: https://github.com/cloudflare/skills 、https://developers.cloudflare.com/agents/model-context-protocol/cloudflare/servers-for-cloudflare/#cloudflare-api-mcp-server
- **取得制約**: changelog が参照する `modelcontextprotocol.io/extensions/skills/overview` と client matrix は、本日の実行環境で **DNS 解決できず一次確認できなかった。** `skills/list` と `skill://<name>/<path>` は Cloudflare 公式 changelog の記述を一次情報とする。拡張仕様の詳細（`skills/get`、`capabilities.extensions` のキー名、SEP-2640 の最終化日）は検索結果の二次情報であり、本メモでは断定しない
- 原文全文は公式ページで確認してください
