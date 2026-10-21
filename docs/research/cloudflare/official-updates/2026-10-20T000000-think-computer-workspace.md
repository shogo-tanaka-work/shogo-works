---
date: 2026-10-20
title: "Think エージェントが @cloudflare/computer ワークスペースへ移行（@cloudflare/shell は非推奨）"
service: "Agents, Workers"
source: https://developers.cloudflare.com/changelog/post/2026-10-20-think-computer-workspace/
official_url: https://developers.cloudflare.com/changelog/post/2026-10-20-think-computer-workspace/
fetched_at: 2026-10-21T09:10:00+09:00
published_date: 2026-10-20
date_precision: date-only
category: policy
---

# 2026-10-20 Think の workspace 移行

## 公式内容の日本語要約

Think と Agent Skills が、ファイルシステムツールに加えて `@cloudflare/computer` のワークスペースを使うようになった。JavaScript 実行環境は `JavaScriptWorkerBackend` を追加して構成する。`@cloudflare/shell` と Think の `createExecuteTool` は非推奨で、本日以降開発・サポートされない。

**破壊的変更**: `@cloudflare/computer` はファイルを別テーブルに保存し、自動移行はない。既存ワークスペースを保つには公式のスクリプトでコピーする必要がある。しなければ空のワークスペースで始まる（元データは既存テーブルに残る）。

教材化メモ: src/content/ai-news-notes/cloudflare/think-computer-workspace.mdx

## できるようになったこと

- Think で `Workspace` と各種バックエンドを組み合わせて構成できる

## 影響範囲

- 対象ユーザー: Think / Agent Skills を使う Workers 開発者
- 対象プラン: 記載なし
- API / UI / 管理者機能: SDK（破壊的変更・非推奨あり）

## 原文確認

- 公式見出し: Agents, Workers - Think agents now use a @cloudflare/computer workspace
- 公式URL: https://developers.cloudflare.com/changelog/post/2026-10-20-think-computer-workspace/
- 原文全文は公式ページで確認してください。
