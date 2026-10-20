---
title: "Claude Code 週次まとめ（10/14〜10/18） — MCP の拒否ルールと plan mode が、書いたとおりに止めていなかった"
tool: "claude-code"
toolLabel: "Claude Code"
date: 2026-10-19
sourceUrl: "https://raw.githubusercontent.com/anthropics/claude-code/main/CHANGELOG.md"
summary: "2026-10-14 から 10-18 の Claude Code（2.1.299 / 300 / 301 / 302 / 303）をまとめる。対応が必要なのは3件で、いずれも「書いたはずの制御が効いていなかった」型である。2.1.299 では mcp__<server> の deny / ask ルールが正規化後のサーバー名に二重アンダースコアを含む場合に適用されず、plan mode が PreToolUse / tool.check で許可された書き込みを実行していた。2.1.300 では forceLoginOrgUUID で拒否されたログインが、拒否された組織のトークンを保存したままだった。日本語環境は 2.1.299 で Write が Shift-JIS など非 UTF-8 ファイルの黙示変換を拒否するようになった点が重要で、従来は変換して保存していた。何もしなくても変わるものとして、2.1.302 でターミナル外の subagent が既定でバックグラウンド実行になり、権限モードを持たないサードパーティセッションが default モードで開始する。"
description: "2026-10-14〜10-18 の Claude Code のパッチをまとめて振り返る。MCP 拒否ルールの取りこぼし、plan mode の書き込み、トークン残留、hook の同時実行上限、アイドル圧縮が中心。"
impact: "2.1.298 以前を使っている環境は 2.1.303 へ更新してください。サーバー名にアンダースコアを含む MCP サーバーへ deny / ask ルールを書いている場合、そのルールは効いていなかった可能性があるため、更新後に拒否されるはずの呼び出しを一度試してください。forceLoginOrgUUID を使っている組織は、拒否された組織のトークンが残っていないか確認してください。日本語環境では、過去に Claude Code で編集した Shift-JIS などの非 UTF-8 ファイルが UTF-8 へ変換されていないかを疑う必要があります。ターミナル外の subagent が既定でバックグラウンド実行になるため、デスクトップアプリと VS Code の運用手順は更新前に確認してください。"
tags: ["claude-code", "weekly-rollup", "権限管理", "セキュリティ", "文字エンコーディング", "可観測性", "harness-engineering"]
status: "candidate"
relatedKnowledge: []
draft: false
---

## 今週の要点

**更新してください。「書いた制御が、書いたとおりに止めていなかった」修正が3件あります。**

**1つ目は MCP の拒否ルール。** `mcp__<server>` の deny / ask ルールが、**正規化後のサーバー名に二重アンダースコアを含む場合に適用されていませんでした**（2.1.299）。サーバー名に `_` を含む MCP サーバーを拒否・確認の対象にしているなら、**そのルールは効いていなかった可能性があります。** 更新後、拒否されるはずの呼び出しを一度試してください。

**2つ目は plan mode。** **`PreToolUse` / `tool.check` で許可された書き込みを plan mode が実行していました**（2.1.299）。読み取り専用のつもりの mode が書いていたことになります。**3つ目は資格情報で、`forceLoginOrgUUID` で拒否されたログインが、拒否された組織のトークンを保存したままでした**（2.1.300）。

**日本語環境は 2.1.299 を優先してください。** Write が **Shift-JIS / Windows-1252 / GBK / UTF-16BE を黙って UTF-8 へ変換するのを拒否**します。従来は変換して保存していたため、**過去に編集した非 UTF-8 ファイルを疑う必要があります。**

**何もしなくても変わるもの**: 2.1.302 で**ターミナル外（デスクトップアプリ / VS Code）の subagent が既定でバックグラウンド実行**になり、**権限モードを持たないサードパーティセッションは `default` で開始**します。

## 変更一覧

**権限と資格情報** — 上記3件に加えて、**prompt / agent hook の同時実行を12本に制限** (2.1.302)。フックは1イベント1回に見えて、並列セッションでは簡単に数十本走ります。

**ファイルの安全性** — 非 UTF-8 の黙示変換の拒否、BOM 付き UTF-16LE の読み取り (2.1.299)、**128 MB 超の画像を Read が拒否** (2.1.302)。

**コンテキストとコスト** — **アイドル圧縮**（200K 超の会話を約54分で、**1時間のプロンプトキャッシュが切れる前に**圧縮。`CLAUDE_CODE_IDLE_COMPACT_MIN_TOKENS` と `"idleCompaction": false` で調整）、`CLAUDE_CODE_DISABLE_FILE_MENTIONS`（`@` でファイル内容ではなくパスだけを渡す）(2.1.299)、`/config` の圧縮設定 (2.1.302)、**retry mode が usage limit を待ち続ける上限** (2.1.301)。

**可観測性** — `api_request` に **キャッシュ書き込みの 5分 / 1時間内訳**、span へ **GenAI semantic conventions 属性** (2.1.300)、**auto mode の classifier decision** (2.1.301)。モデル選択をツールへ委ねるほど、何が動いたかを測る必要が出てきます。

**その他** — Claude Platform on AWS で `/advisor` (2.1.300)、`CLAUDE_CODE_AUTO_MODE_MODEL` (2.1.302)、Vim の `%` モーション (2.1.301)。

## 拾わなかったもの

2.1.303 は "Bug fixes and reliability improvements." の1行のみです。ほかに mod API、VS Code 拡張、Cloud Sessions / Remote Control、Claude Tag（Slack）、プラグイン、compaction 中の "Prompt is too long" などの修正が多数あります。

- [anthropics/claude-code CHANGELOG](https://raw.githubusercontent.com/anthropics/claude-code/main/CHANGELOG.md)
