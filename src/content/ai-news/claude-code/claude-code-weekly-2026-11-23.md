---
title: "Claude Code 週次まとめ（11/16〜11/20） — 任意パッケージを実行する allow ルールが auto mode で無視される"
tool: "claude-code"
toolLabel: "Claude Code"
date: 2026-11-23
sourceUrl: "https://raw.githubusercontent.com/anthropics/claude-code/main/CHANGELOG.md"
summary: "2026-11-16 から 11-20 の Claude Code（2.1.326 / 2.1.327 / 2.1.328 / 2.1.329 / 2.1.330）をまとめる。対応が必要なのは権限と hooks。2.1.327 で作業ディレクトリの内外の判定が変わり、Bash(pnpm dlx *) のように任意のパッケージを実行できる allow ルールが auto mode で無視されるようになった。auto mode の課金分類器フォールバックは次期リリースで削除される予告が出ている。2.1.328 では managed PostToolUse hooks が実行前に拒否された呼び出しで発火しなくなり、Code Mode のスクリプト出力に UserPromptSubmit hooks が走らなくなったため、監査ログとマスキングに穴が空く。資格情報は claude auth logout の残留（2.1.326）と Keychain 書き込み不可時の繰り返しサインアウト（2.1.329）が直った。"
description: "2026-11-16〜11-20 の Claude Code のパッチをまとめて振り返る。権限判定の既定変更と allow ルールの無効化、hooks の発火条件の変更による監査・マスキングの穴、資格情報の修正が中心。"
impact: "無人運用・CI で動かしている場合は、版を上げる前に allow ルールを棚卸ししてください。auto mode が任意パッケージ実行型のルールを無視するようになり、作業ディレクトリの内外の判定も変わったため、これまで通っていた操作が確認を求めるか拒否されます。hooks で監査ログやマスキングを実装している組織は、managed PostToolUse hooks が実行前に拒否された呼び出しでは発火しない点と、Code Mode の出力マスキングを PostToolUse hook の updatedToolOutput へ移す必要がある点を確認してください。deniedMcpServers の名前指定は URL を共有する他コネクタに及びません。"
tags: ["claude-code", "weekly-rollup", "セキュリティ", "権限管理", "監査ログ", "企業管理", "harness-engineering"]
status: "candidate"
relatedKnowledge: []
draft: false
---

## 今週の要点

**単独のセキュリティアドバイザリはありません。ただし対応が要る既定変更が3つあります。**

1. **無人運用の allow ルールが効かなくなります (2.1.327)。** `Bash(pnpm dlx *)` のように**任意のパッケージを実行できるルールを auto mode が無視**します（`/usr/bin/npm run:*` のようなパス形も同様）。**作業ディレクトリの内外の判定も変わり**、通っていた操作が確認を求めます。**auto mode の課金分類器フォールバックは次期リリースで削除**される予告も出ました。
2. **hooks の発火条件が変わり、監査とマスキングに穴が空きます (2.1.328)。** managed `PostToolUse` hooks が**実行前に拒否された呼び出しでは発火しません**（ログ記録・書き換え・ブロックのいずれも起きない）。Code Mode は**スクリプト出力に `UserPromptSubmit` hooks を走らせなくなった**ため、出力のマスキングは `PostToolUse` hook の `updatedToolOutput` へ移します。
3. **`deniedMcpServers` の名前指定が、URL を共有する他コネクタに及ばなくなりました。** URL ごと止めるには正確な URL を拒否します (2.1.328, 2.1.330)。

資格情報は2件直りました。**`claude auth logout` の資格情報の残留** (2.1.326) と、**macOS で Keychain を読めるが書けないときの繰り返しサインアウト** (2.1.329)。

## 変更一覧

**権限判定** — シンボリックリンクの一部を拒否、`ExitWorktree` が未保存作業の削除前に確認、Claude in Chrome が一部の資格情報ファイルのアップロードを拒否 (2.1.327)。ルート・ホーム・作業フォルダを狙う `rm` をより多く承認対象へ (2.1.330)。

**監査とログ** — managed `PreToolUse` hooks の拒否が OTEL に残らなかった問題を修正 (2.1.326)。MCP サーバーログは elicitation と hook 回答の**全文ではなくフィールド名のみ**を記録 (2.1.327)。自己ホストランナーは不要な差分を省くため**トランスクリプトに差分が無い場合がある**（全件必要なら `bashEditDiffEnabled: true`）。403 のログ行の文言が変わり、**旧文言に一致させているアラートは更新が必要** (2.1.330)。

**既定モード** — third-party provider の Opus 4.6 / Sonnet 4.6 でも、**権限モード未指定の対話セッションは auto mode で開始**（`disableAutoMode` でオフ）(2.1.328)。`permissions.blockReadsOutsideWorkingDirectories` は auto / bypass でより多くの Bash コマンドを確認対象にし、auto では一部を拒否 (2.1.327)。

**Code Mode** — agent teams 有効時 (2.1.326) と OTEL のイベント・メトリクス有効時 (2.1.329) にも有効化できるようになりました（トレーシングは引き続き不可）。実行中コマンドと出力の表示、トークン使用量の削減も入りました (2.1.328, 2.1.330)。

**無人実行と企業管理** — 繰り返しタスクと `/loop` の上限が7日から**30日**へ（**以前に作ったタスクは7日で終わる**）、Enterprise Admin Console 管理組織へのサインイン (2.1.330)。GitHub ツールを名前で守る設定では**組み込みの `gh api` が既定オフ** (2.1.328)。

## 拾わなかったもの

2.1.330 だけで150件以上あり、VS Code 拡張、MCP の再接続、Code Mode、表示まわりの修正が大量に入っています。全件は追っていません。

- [anthropics/claude-code CHANGELOG](https://raw.githubusercontent.com/anthropics/claude-code/main/CHANGELOG.md)
