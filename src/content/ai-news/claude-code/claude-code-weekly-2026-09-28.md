---
title: "Claude Code 週次まとめ（9/22〜9/25） — 権限チェックの抜けが2版で4件塞がれ、Pro / Team Standard の既定モデルが変わった"
tool: "claude-code"
toolLabel: "Claude Code"
date: 2026-09-28
sourceUrl: "https://raw.githubusercontent.com/anthropics/claude-code/main/CHANGELOG.md"
summary: "2026-09-22 から 09-25 の Claude Code（2.1.280 / 281 / 282 / 283）をまとめる。今週は権限チェックの抜けが2版で4件塞がれた。2.1.280 はシンボリックリンク経由の書き込み判定を直し、acceptEdits・allow ルール・auto mode がツリー外へ着地する書き込みを承認しなくなった。2.1.281 は、コマンド置換のみを対象にした再帰削除が auto と --dangerously-skip-permissions で無確認実行されていた問題、NUL バイトを含む権限ルールがワイルドカードへ展開されていた問題、macOS の /.vol などのパスを承認前に読んでいた問題、claude --bg が信頼プロンプト未通過のディレクトリでプロジェクトフックを実行していた問題を修正した。あわせて 2.1.280 で Opus 5.5 が既定 Opus になり、Pro / Team Standard の既定モデルが Sonnet から Opus へ変わっている。企業向けには Bedrock upstream の assume_role とガードレール、モデル可用性の管理設定、MCP ツール出力のログ記録が入った。2.1.279 は存在しない。"
description: "2026-09-22〜09-25 の Claude Code のパッチをまとめて振り返る。権限チェックの抜け4件、既定モデルの変更、企業ゲートウェイと統制設定の追加が中心。"
impact: "auto mode または --dangerously-skip-permissions を使っている環境は 2.1.281 以降へ更新してください。それ以前は、コマンド置換のみを対象にした再帰削除が無確認で実行されていました。allow / deny ルールを書いている環境も、NUL バイトを含むルールがワイルドカードへ展開されていたため、意図より広い範囲を許可していた可能性があります。macOS では /.vol / /.nofollow / /.resolve 配下のパスが承認前に読まれていました。Pro / Team Standard は 2.1.280 から既定モデルが Sonnet から Opus へ変わるため、コストや速度の前提が違う場合は明示設定が必要です。"
tags: ["claude-code", "weekly-rollup", "権限管理", "サンドボックス", "モデル選定", "harness-engineering"]
status: "candidate"
relatedKnowledge: []
draft: false
---

## 今週の要点

**更新してください。今週は権限チェックの抜けが4件塞がれています。**

**コマンド置換だけを対象にした再帰削除が、無確認で実行されていました** (2.1.281)。削除対象をコマンド置換で書いた形が、**auto mode と `--dangerously-skip-permissions` で確認を挟まずに通っていました。** 対象は実行時にしか決まらないため、静的な allow ルールでは防げなかった箇所です。

**権限ルールが意図より広く効いていた可能性があります** (2.1.281)。**NUL バイトを含む権限ルールがワイルドカードへ展開**されていました。あわせて **macOS の `/.vol` / `/.nofollow` / `/.resolve` 配下のパスが承認前に読まれ**、`claude --bg` が**信頼プロンプトを通していないディレクトリでプロジェクトフックを実行**していました。

**ツリー外へ着地する書き込みが承認されていました** (2.1.280)。シンボリックリンク経由の書き込みが、**リンクのツリー内での見え方**で判定されていました。現在は着地先がプロンプトに表示され、**`acceptEdits`・allow ルール・auto mode はツリー外への書き込みを承認しません。**

**Pro / Team Standard は既定モデルが変わりました** (2.1.280)。Opus 5.5 が既定 Opus になり、**Pro / Team Standard の既定が Sonnet から Opus へ**移って Max / Team Premium / Enterprise と揃いました。**何もしなくても変わる**ため、前提が違う場合は明示設定してください。

## 変更一覧

**権限とサンドボックス** — シンボリックリンク書き込みの判定と着地先の表示 (2.1.280)。コマンド置換のみの再帰削除、NUL バイト入り権限ルールのワイルドカード展開、macOS の `/.vol` 系パスの承認前読み取り、`claude --bg` でのプロジェクトフック実行 (2.1.281)。安全性チェックが拒否したときの auto mode の無限再試行に、バックオフと10回打ち切りを追加 (2.1.280)。

**企業ゲートウェイと統制** — Bedrock upstream の **`assume_role`**（STS で引き受けた IAM ロールとして Bedrock を呼ぶ。別 AWS アカウント可）と **`guardrail: {id, version}`**（その upstream の全リクエストにガードレールを適用。全 upstream か無設定かの二択）。`desktop` ポリシーの `blockReadsOutsideWorkingDirectories` / `disableBypassPermissionsMode` (2.1.281)。**`allowClaudeInChromeWithManagedMcp`** (2.1.282)。**モデル可用性の管理設定**と gateway hint ヘッダー (2.1.283)。

**監査とログ** — **MCP ツール出力のログ記録** (2.1.283)。`telemetry.resource_attributes` での固定ラベル (2.1.281)。**無視されているテレメトリ環境変数を起動時に通知** (2.1.282)。

**プラグインと MCP** — 予約済みマーケットプレイス名を模した名前の追加を拒否 (2.1.280)。`claude plugin validate` が `.mcp.json` の取りこぼし、未宣言の `${user_config.*}`、安全でない URL を報告。URL モードの elicitation 対応 (2.1.281)。

**運用** — `settings.json` の **`"attribution": false`** でコミットと PR の attribution を隠せます。**古い CLI はこのキーを持つ設定ファイルごと読み飛ばす**ため、バージョン混在の共有ファイルでは注意してください (2.1.281)。`maxProseWidth`（表とコードは全幅を維持）(2.1.282)。

## 拾わなかったもの

**`2.1.279` は CHANGELOG に存在しません。** 2.1.280 と 2.1.281 はそれぞれ大型で、VS Code 拡張、vim モードのカーソル位置、権限ダイアログのアクセシビリティなど表示と内部改善の修正が多数あります。全件は公式 CHANGELOG を参照してください。

- [anthropics/claude-code CHANGELOG](https://raw.githubusercontent.com/anthropics/claude-code/main/CHANGELOG.md)
