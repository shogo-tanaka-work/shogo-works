---
title: "Codex 週次まとめ（10/27〜10/29） — Vertex AI が組み込みプロバイダーになり、GPT-6.1 Terra が選べる"
tool: "codex"
toolLabel: "OpenAI Codex"
date: 2026-11-02
sourceUrl: "https://github.com/openai/codex/releases"
summary: "2026-10-27 と 10-29 の Codex CLI（rust-v0.165.0 / rust-v0.166.0）をまとめる。中心は接続先の拡大で、Google Cloud Vertex AI が model_provider = \"gcp\" として組み込みプロバイダーになり、GPT-6.1 Terra がモデルカタログに入った。会話中に reasoning effort を変更する機能が既定で有効になり、新規プロファイルでは memory v2 が既定になって外部エージェントのメモリを取り込めるようになった。セキュリティでは、marketplace の URL 検証で Git が許可パターンとは別のホストへ接続しうる隙間が 0.165.0 で閉じられた。0.166.0 は安全ブロックの説明と安全な追撃プロンプト、codex doctor --network-only、codex queue --resume を追加している。利用者側の必須対応はない。"
description: "2026-10-27〜10-29 の Codex CLI のパッチをまとめて振り返る。Vertex AI プロバイダー、GPT-6.1 Terra、marketplace URL 検証の修正、安全ブロックの説明が中心。"
impact: "必須の対応はありません。Google Cloud で Codex を使いたい場合は、代理のゲートウェイを立てずに model_provider = \"gcp\" で直接つなげるようになりました。marketplace からプラグインを入れている場合は 0.165.0 以上にしてください。URL 検証をすり抜けて Git が許可パターン外のホストへ接続しうる隙間が閉じられています。承認・権限の設定が resume / fork をまたいで保持されるようになったため、セッションを再開して権限が緩むという挙動は 0.166.0 で解消しています。"
tags: ["codex", "weekly-rollup", "Vertex AI", "モデル選択", "セキュリティ", "harness-engineering"]
status: "candidate"
relatedKnowledge: []
draft: false
---

## 今週の要点

**対応不要です。** 今週の2版（rust-v0.165.0 / rust-v0.166.0）に、利用者が期限までに何かする必要のある変更はありません。

**ただしセキュリティ修正が1件含まれます。** 0.165.0 で、**marketplace の URL 検証において、Git が許可パターンとは別のホストへ接続しうる隙間**が閉じられました。marketplace からプラグインを導入している場合は 0.165.0 以上へ上げてください。

**実務でいちばん効くのは接続先の拡大です。** Google Cloud Vertex AI が `model_provider = "gcp"` として**組み込みプロバイダー**になりました（0.165.0）。これまで Google Cloud 上の Claude や Gemini へ向けるには手前にゲートウェイを立てる構成が必要でしたが、設定1つで済みます。あわせて **GPT-6.1 Terra がモデルカタログに入りました**（0.165.0 / 0.166.0）。

## 変更一覧

**モデルとプロバイダー** — Vertex AI の組み込みプロバイダー化（`model_provider = "gcp"`）、GPT-6.1 Terra のモデルカタログ追加、**会話中の reasoning effort 変更が既定で有効に**、モデルが見つからないときにリトライを止める修正 (0.165.0, 0.166.0)。

**メモリと再開** — **新規プロファイルで memory v2 が既定**になり、外部エージェントのメモリを取り込めるようになりました (0.165.0)。`codex queue --resume` を追加し、**承認・権限の設定が resume / fork をまたいで保持される**よう修正 (0.166.0)。app-server API には実験的な attached thread forks が入りました (0.165.0)。

**安全側の表示** — **安全ブロックに説明が付き、安全な追撃プロンプトが出る**ようになりました (0.166.0)。何が止められたのかが分かる方向の変更です。marketplace URL 検証の修正も同版系列の一部です (0.165.0)。

**診断と画面** — `codex doctor --network-only`、文字起こしのキーボード選択と検索、Markdown 描画の統一 (0.166.0)。セッションピッカーのリポジトリフィルタ、エージェントコマンドセンターのディレクトリ別グルーピング (0.165.0)。

**修正** — TUI の承認レビュアー既定値の反映、実行設定が不正なときの設定編集、リモート MCP ツール要求のキャンセル、Plan モード切替後にキュー済みメッセージが作業を再開する問題 (0.165.0)。

## 拾わなかったもの

alpha 版（`rust-vX.Y.Z-alpha.N`）は本まとめの対象外です。ほかに内部改善と軽微な UI 修正が多数あります。

- [openai/codex Releases](https://github.com/openai/codex/releases)
