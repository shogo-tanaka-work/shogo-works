---
title: "Claude Code 週次まとめ（10/26〜10/31） — 偽の拡張が配られた。まずインストール元を確認する"
tool: "claude-code"
toolLabel: "Claude Code"
date: 2026-11-02
sourceUrl: "https://raw.githubusercontent.com/anthropics/claude-code/main/CHANGELOG.md"
summary: "2026-10-26 から 10-31 の Claude Code（2.1.311 / 312 / 314 / 316）をまとめる。最優先はバージョンリリースの外側にある。Cursor が 2026-10-29 に公表したセキュリティ告知で、同社の VS Code Extension Marketplace で Anthropic.claude-code の 2.1.312 / 2.1.313 を称する改ざん版が約11時間配布された。永続的な SSH バックドアを仕掛けるもので、拡張のアンインストールだけでは除去できない。2.1.313 は公式 CHANGELOG に存在しない欠番である。公式版の変更では、作業ディレクトリ外への書き込みを全権限モードで拒否する permissions.blockWritesOutsideWorkingDirectories が追加され、--restricted セッションが Read 許可ルール経由で作業ディレクトリ外のファイルをアップロードしていた問題が修正された。Opus 4.8 の fast mode は 2026-11-30 に削除される。"
description: "2026-10-26〜10-31 の Claude Code のパッチをまとめて振り返る。Cursor Marketplace の偽拡張、作業ディレクトリ外書き込みの拒否設定、Opus 4.8 fast mode の削除予告が中心。"
impact: "まず、2026-10-29 に Cursor の VS Code Extension Marketplace から Anthropic.claude-code を導入・更新した方は、macOS なら grep -qs svc-telemetry ~/.ssh/authorized_keys を実行してください。鍵が見つかった場合は、ホストの隔離、永続化スクリプトの除去、当該ホストから到達できる資格情報のローテーションが必要です。拡張のアンインストールでは除去できません。次に、Opus 4.8 の fast mode を使っている場合は 2026-11-30 までに Opus 5.5 へ移行してください。削除後はエラーになり、通常の Opus 4.8 へフォールバックしません。企業管理では、ゲートウェイがリクエストの名指しする全モデルを照合するようになり、ブロック済みモデルを含む要求が 400 になります。"
tags: ["claude-code", "weekly-rollup", "セキュリティ", "サプライチェーン", "権限管理", "harness-engineering"]
status: "candidate"
relatedKnowledge: []
draft: false
---

## 今週の要点

**今週いちばん重い話は、公式のリリースノートに載っていません。**
**Cursor が 2026-10-29 に公表した告知によると、同社の VS Code Extension Marketplace で `Anthropic.claude-code` の 2.1.312 / 2.1.313（Windows / macOS）を称する改ざん版が、同日 2:27am〜1:35pm PT の約11時間配布されました。** Anthropic 製ではありません。ホスト情報を収集して送信し、攻撃者の SSH 鍵を `authorized_keys` に追加し、リバース SSH トンネルを LaunchAgent やスケジュールタスクで永続化しようとします。

**該当する方は、拡張を消すだけでは終わりません。** ペイロードは独立した永続化スクリプトを置いて動き続けます。鍵は `svc-telemetry` のラベルで追記されるので、macOS では `grep -qs svc-telemetry ~/.ssh/authorized_keys` で確認できます。見つかったら、ホストの隔離、永続化機構とトンネルプロセスの除去、**信頼できる別のマシンからの資格情報ローテーション**まで行ってください。攻撃者サーバーは停止済みで、多くのホストではトンネル自体は成立しませんが、鍵の追加と情報送信は成立します。

**なお 2.1.313 は公式 CHANGELOG に存在しません**（2.1.312 の次は 2.1.314）。偽物は欠番を使っていました。

**期限がもう1つあります。Opus 4.8 の fast mode が 2026-11-30 に削除されます**（2.1.316）。削除後はエラーになり、**通常の Opus 4.8 へフォールバックしません。** Opus 5.5 へ移行してください。

## 変更一覧

**権限とサンドボックス** — **`permissions.blockWritesOutsideWorkingDirectories` を追加**（Write / Edit / NotebookEdit が全権限モードで作業ディレクトリ外のパスを拒否） (2.1.314)。**`--restricted` セッションが、Read の許可ルールに覆われた作業ディレクトリ外のファイルをアップロードしていた問題を修正** (2.1.316)。`claude -p --resume` で入った worktree にサンドボックス保護が適用されない、Monitor ツール発のシェルコマンドに Bash 対応フックが走らない、も修正 (2.1.314)。**PowerShell のフックが、型キャスト・`param`・`using`・属性で始まるコマンドでは exit code 2 で止めなかった問題も修正** (2.1.316)。

**企業管理（Claude apps gateway）** — グループ共有の月額予算 `pooled_budget`、全ポリシーを重ねる `managed.policy_mode: layered` (2.1.316)、IdP グループ指定 `groups` (2.1.314)、`oidc.user_id_claim` (2.1.312)。**リクエストが名指しする全モデルを `availableModels` / `deniedModels` / `models` と照合していなかった問題を修正し、ブロック済みモデルを含む要求は 400 になります** (2.1.316)。

**モデル名と文脈** — **`claude-opus-4.8` のようにドットで綴ったモデル ID が古いモデル扱いされ、context window・出力上限・effort・コストが誤っていた問題を修正** (2.1.314)。未知のモデル名には短い system prompt を使います (2.1.312)。200K 超過時に「1M context に credits が必要」で止まらず自動 compact して続行 (2.1.311)。**prompt / agent フックはセッションあたり同時24件まで** (2.1.312)。

## 拾わなかったもの

VS Code 拡張、Cloud Sessions、Claude Tag、Code Review、self-hosted runner の修正が多数あります。

- [anthropics/claude-code CHANGELOG](https://raw.githubusercontent.com/anthropics/claude-code/main/CHANGELOG.md)
- [Cursor のセキュリティ告知（2026-10-29）](https://cursor.com/blog/claude-code-extension-security-notice)
