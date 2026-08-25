---
date: 2026-08-24
title: "`codex mcp-server` コマンドが非推奨に — Codex app server への移行が案内される"
service: "OpenAI Codex"
source: https://learn.chatgpt.com/docs/changelog
fetched_at: 2026-08-25T09:05:00+09:00
published_at: 2026-08-24
date_precision: date-only
category: incident
---

# 2026-08-24 `codex mcp-server` コマンドの非推奨化

## 公式内容の日本語要約

OpenAI が ChatGPT & Codex changelog（`learn.chatgpt.com/docs/changelog`）の 2026-08-24 付エントリで、**`codex mcp-server` コマンドを非推奨（deprecated）にした**と告知した。公式の記載は短く、代替として次の2点が示されている。

1. **Codex app server を使うこと**
2. **Claude Code から Codex を使う場合は、Claude Code 用の Codex プラグインを使うこと**

`codex mcp-server` は、Codex CLI を MCP サーバーとして起動し、他のエージェントやクライアントから Codex をツールとして呼び出すための入口だった。つまり **Codex を「呼ばれる側」として組み込む経路が置き換わる**という告知である。

同じ 2026-08-24 付で `Codex CLI 0.149.1`（`npm install -g @openai/codex@0.149.1`）のエントリも並んでおり、非推奨化はこのリリース周辺のタイミングで案内されたと読める。ただし changelog 本文には**廃止（削除）の期日は記載されていない**。現時点で告知されているのは「非推奨」の状態であり、いつコマンドが動かなくなるかは公式に示されていない。

Claude Code 側の経路として名指しされている「Codex plugin for Claude Code」は、ユーザー認識ギャップとして過去に記録した論点（Claude Code → Codex の移行支援は公式には逆方向のみ、`openai/codex-plugin-cc`）と同じ方向の整備である。**Codex を他エージェントから使う経路は、汎用の MCP 接続からベンダー提供のプラグイン／app server へ寄せられつつある。**

## できるようになったこと

- （変更点）`codex mcp-server` コマンドが非推奨になった
- 代替は Codex app server。Claude Code からの利用は Codex プラグイン経由が公式の案内
- 廃止期日の記載はなし。非推奨の告知のみ

## 影響範囲

- 対象ユーザー: Codex CLI を MCP サーバーとして他クライアントに接続している利用者・組織
- 対象プラン: プランの限定に関する記載なし
- API / UI / 管理者機能: CLI のサブコマンドに関する変更。接続構成の見直しが必要

教材化メモ: `src/content/ai-news-notes/codex/codex-mcp-server-deprecated.mdx`

## 原文確認

- 公式見出し: Codex MCP server command deprecated（2026-08-24）
- 公式URL: https://learn.chatgpt.com/docs/changelog
- 原文全文は公式ページで確認してください。
