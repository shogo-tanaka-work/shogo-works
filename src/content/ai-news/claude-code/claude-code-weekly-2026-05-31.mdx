---
title: "Claude Code 週次まとめ（5/25〜5/31） — `/model` の選択が既定として保存される方式へ。ゲートウェイへの資格情報漏れも修正"
tool: "claude-code"
toolLabel: "Claude Code"
date: 2026-05-31
sourceUrl: "https://github.com/anthropics/claude-code/releases"
summary: "2026-05-25 から 05-31 の Claude Code（v2.1.152 / 153 / 157 / 158）をまとめる。挙動が変わったのは `/model` で、選択がセッション限定ではなくセッションの既定として保存される方式になった。ピッカー内の `s` でセッション限定に切り替える形へ変わり、キーバインドを設定している場合は `modelPicker:setAsDefault` を `modelPicker:thisSessionOnly` へ書き換える必要がある。セキュリティ修正として、カスタム API ゲートウェイがユーザーの Anthropic OAuth 資格情報を受け取ってしまう不具合が直った。`/code-review --fix` でレビュー結果を作業ツリーへ自動適用できるようになり、`.claude/skills` 配下のプラグインが自動ロードされるようになった。"
description: "2026-05-25〜05-31 の Claude Code のパッチをまとめて振り返る。/model の既定保存への挙動変更、ゲートウェイへの資格情報送信の修正、skills の自動ロードが中心。"
impact: "キーバインドをカスタマイズしている利用者は名称変更への追従が必要。カスタム API ゲートウェイを経由している組織は資格情報の扱いが修正されたため更新が必須。`.claude/skills` の自動ロードにより、社内プラグインをマーケットプレイスを介さず配布できるようになった。"
tags: ["claude-code", "weekly-rollup", "セキュリティ", "skills", "モデル選択"]
status: "candidate"
relatedKnowledge: []
draft: false
---

## 今週の要点

**カスタム API ゲートウェイを経由している組織は更新が必須です。** ゲートウェイがユーザーの Anthropic OAuth 資格情報を受け取ってしまう不具合が修正されました (2.1.153)。

**手元の設定が要る変更が1つあります。** `/model` の選択が、セッション限定ではなく**セッションの既定として保存される**方式に変わりました (2.1.153)。IDE 側と揃った形です。セッション限定にしたいときはピッカー内で `s` を押します。キーバインドを定義している場合は `modelPicker:setAsDefault` を `modelPicker:thisSessionOnly` へ書き換えてください（`d` → `s`）。社内ガイドで「`/model` はセッション限定」と書いている箇所も対象です。

**社内でプラグインを配りたいなら 2.1.157 が効きます。** `.claude/skills` 配下のプラグインが自動ロードされるようになり、リポジトリに置くだけで配布できます。

## 変更一覧

**モデルと権限** — `/model` の既定保存への変更とキーバインド改名 (2.1.153)。主モデルが利用できないとき、リクエスト単位で失敗させるのではなくセッションの残りを `--fallback-model` へ切り替えるようになりました (2.1.152)。Auto mode のオプトイン同意は撤廃されています (2.1.152)。Bedrock / Vertex / Foundry では Opus 4.7 / 4.8 の Auto mode が `CLAUDE_CODE_ENABLE_AUTO_MODE=1` で解禁されました (2.1.158)。

**セキュリティと MCP 統制** — カスタムゲートウェイへの OAuth 資格情報送信の修正、stateful MCP の `tools/list` 無限再接続の修正（2.1.147 のリグレッション）、サブエージェント frontmatter の MCP サーバーに対する `--strict-mcp-config` や managed policy の適用復活（ブロック時は警告表示）— いずれも 2.1.153 です。

**レビューと skills** — `/code-review --fix` でレビュー結果を作業ツリーへ自動適用（`/simplify` は `--fix` のエイリアスに）、`/reload-skills` によるセッション維持のままの再スキャン、skill / スラッシュコマンドの frontmatter で `disallowed-tools` を指定してツールを外す機能が 2.1.152。`.claude/skills` の自動ロード、`claude plugin init` のスキャフォールドが 2.1.157 です。

**hooks** — `MessageDisplay` hook でアシスタント出力を変換・非表示にできます (2.1.152)。`SessionStart` の `hookSpecificOutput` には `reloadSkills` と `sessionTitle` が追加されました。

**worktree** — `EnterWorktree` がセッションを中断せずに切り替えられるようになり、自動 unlock と orphan 化の修正が入りました (2.1.157)。

## 拾わなかったもの

セッション再開時の数 GB 規模のメモリ過剰使用、tmux での `/copy` 失敗、IME 候補ウィンドウ位置、Windows インストーラの偽「完了」表示など、環境依存の修正が多数あります。全件は公式 CHANGELOG を参照してください。

- [anthropics/claude-code releases](https://github.com/anthropics/claude-code/releases)
