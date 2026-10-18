---
date: 2026-09-25
title: "Claude のプラグインディレクトリに提出ポータルが開設。自動検証・安全性スキャン・公開後アナリティクスつき"
service: "Claude / Claude Code"
source: https://claude.com/blog/build-plugins-for-claude
fetched_at: 2026-09-26T09:10:00+09:00
published_at: 2026-09-25
date_precision: date-only
---

# 2026-09-25 Claude のプラグインディレクトリに提出ポータルが開設

## 公式内容の日本語要約

Anthropic は 2026-09-25、**Claude のディレクトリへプラグインを提出するためのポータル**を公開した。公式 Release Notes（support.claude.com、09-25 の日付見出し）と公式ブログ `claude.com/blog/build-plugins-for-claude` の両方で告知されている。提出先は `claude.ai/directory/manage/new`。

提出できる形態は2つ。**単一の MCP コネクタ**（リモート MCP サーバーを指定する）と、**プラグインバンドル**（MCP サーバーと Skills を GitHub 上でホストしてまとめる）である。Claude Code 向けには LSP、コマンド、hooks、agents も含められる。対応仕様は **MCP 2.0** で、MCP 拡張のうち Apps（対話的 UI）と Enterprise Managed Auth（OAuth）に対応する。

審査は提出時点で自動的に動く。公式は「Auto-validate your plugin. Each submission is checked and safety-scanned as soon as you submit, so you catch issues early.」と書いており、**提出即時の検証と安全性スキャン**、ステータス追跡、スキャン結果の確認、承認前の推奨修正の提示までがポータル内で完結する。

公開後は**アナリティクス**が見られる。製品サーフェス別・バージョン別のインストール数と、ディレクトリ掲載ページの表示回数・検索キーワードという発見側の指標が含まれる。

提出できるのは**有料 Claude プランの開発者**。また「Over the coming weeks, one discovery experience will roll out across Claude and Claude Code.」として、**Claude と Claude Code で分かれている発見体験を今後数週間で1つに統合する**予定が示されている。

教材化メモ: src/content/ai-news-notes/claude/plugin-directory-submission-portal.mdx

## できるようになったこと

- `claude.ai/directory/manage/new` からプラグイン / MCP コネクタをディレクトリへ提出できる
- 提出即時に自動検証と安全性スキャンが走り、結果と推奨修正がポータルで確認できる
- 審査ステータスを追跡できる
- 公開後、製品サーフェス別・バージョン別のインストール数と、掲載ページ表示・検索キーワードを確認できる
- プラグインバンドルとして MCP サーバー＋Skills（Claude Code では LSP / コマンド / hooks / agents も）を GitHub ホストでまとめて提出できる

## 影響範囲

- 対象ユーザー: プラグインを配布したい開発者
- 対象プラン: 有料 Claude プラン
- API / UI / 管理者機能: 提出ポータル（UI）。対応仕様は MCP 2.0、拡張は Apps と Enterprise Managed Auth

## 原文確認

- 公式見出し: Build plugins for Claude
- 公式URL: https://claude.com/blog/build-plugins-for-claude
- 公式 Release Notes: https://support.claude.com/en/articles/12138966-release-notes （2026-09-25 の日付見出し）
- 原文全文は公式ページで確認してください。
