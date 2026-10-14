---
title: "Claude Code 週次まとめ（10/5〜10/9） — 権限プロンプトそのものが迂回されていた修正が3版にまたがった"
tool: "claude-code"
toolLabel: "Claude Code"
date: 2026-10-12
sourceUrl: "https://raw.githubusercontent.com/anthropics/claude-code/main/CHANGELOG.md"
summary: "2026-10-05 から 10-09 の Claude Code（2.1.290 / 291 / 292 / 293 / 294 / 295 / 296）をまとめる。中心は権限制御で、3版にまたがって「書いたルールが効いていなかった」型の修正が入った。2.1.292 には PreToolUse hook の承認と auto mode が権限プロンプトを迂回していたという明示のセキュリティ修正があり、2.1.294 では指示文で書いた prompt / agent hook が本来ブロックすべき操作を通していた問題、2.1.295 では権限 hook をすり抜けていたツール呼び出しが直っている。日本語環境は 2.1.296 が重要で、Edit / NotebookEdit が Shift-JIS など非 UTF-8 ファイルの編集を拒否するようになった。従来は非 ASCII を置き換えてファイルを壊していた。何もしなくても変わるものとして、2.1.293 で Anthropic API 上の既定 Haiku モデルが Haiku 5.5 へ移った。"
description: "2026-10-05〜10-09 の Claude Code のパッチをまとめて振り返る。権限プロンプトの迂回修正、hook の fail-closed 設定、Shift-JIS 編集の拒否、既定 Haiku モデルの切替が中心。"
impact: "2.1.291 以前を使っている環境は 2.1.296 へ更新してください。2.1.292 で PreToolUse hook の承認と auto mode が権限プロンプトを迂回していた問題が、2.1.294 で指示文として書いた hook の取りこぼしが、2.1.295 で権限 hook をすり抜けるツール呼び出しが修正されています。hook を自然言語で書いている場合は、更新後にブロック対象の操作を一度試して挙動を確認してください。日本語環境では 2.1.296 の非 UTF-8 ファイル編集の拒否が実害の防止になります。2.1.293 から既定 Haiku モデルが Haiku 5.5 へ変わるため、利用量を測っている場合は切替日を基準日として記録してください。"
tags: ["claude-code", "weekly-rollup", "権限管理", "セキュリティ", "文字エンコーディング", "harness-engineering"]
status: "candidate"
relatedKnowledge: []
draft: false
---

## 今週の要点

**更新してください。権限の確認そのものが迂回されていた修正が、3版にまたがって入っています。**

**2.1.292 に明示のセキュリティ修正があります。** 「PreToolUse hook の承認と auto mode が権限プロンプトを迂回していた」——**承認を hook に委ねた設計で、プロンプトが出ないまま操作が通っていました。** 2.1.294 で**指示文で書いた hook が本来止めるべき操作を通していた**問題、2.1.295 で**権限 hook をすり抜けていたツール呼び出し**も直りました。**hook を自然言語で書いているなら、更新後にブロックされるはずの操作を一度試してください。**

**日本語環境は 2.1.296 を優先してください。** Edit / NotebookEdit が **Shift-JIS など非 UTF-8 ファイルの編集を拒否**します。従来は**非 ASCII 文字を置き換えてファイルを壊していました。**

**何もしなくても変わるもの**: 2.1.293 で**既定 Haiku モデルが Haiku 5.5** へ。トークナイザが違うため**消費量の見え方が変わります。**

## 変更一覧

**権限と資格情報** — 権限プロンプトの迂回とサンドボックス内のファイル読み取り (2.1.292)、指示文 hook の取りこぼし (2.1.294)、**glob 展開・zsh の変数挙動・for ループ**での厳格化と read deny の**シンボリックリンク経由**への適用 (2.1.295)、**`BASH_ARGV0` 経由の自動承認**への確認追加と、**値の無いキーの直後に続く値**を捕まえる秘匿処理 (2.1.296)。

**hook の fail-closed** — command / HTTP hook を**起動失敗・タイムアウト・想定外の終了コードで操作をブロックする**設定にできる (2.1.295)。

**既定値と価格** — 既定 Haiku を Haiku 5.5 へ (2.1.293)。`/cost` が **Sonnet 5.5 のキャッシュ読み取り $0.10 / 100万トークン**を反映 (2.1.296)。

**組織統制** — gateway が **upstream ごとのモデル一覧**に対応 (2.1.295)。`managed.policies[]` の **`code` キー**で Code タブの CLI 設定を適用できる (2.1.296)。

**委譲** — Agent tool の `effort` (2.1.292)、**サブエージェント単位の `autoCompactWindow`** (2.1.296)。

## 拾わなかったもの

2.1.291 はリグレッション修正のみです。ほかに mod API、VS Code 拡張、Cloud sessions、MCP、Windows 固有の修正が多数あります。

- [anthropics/claude-code CHANGELOG](https://raw.githubusercontent.com/anthropics/claude-code/main/CHANGELOG.md)
