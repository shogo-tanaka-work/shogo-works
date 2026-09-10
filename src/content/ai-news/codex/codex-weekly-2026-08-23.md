---
title: "Codex 週次まとめ（8/17〜8/23） — `codex agents` ダッシュボードと `codex queue` で、複数タスクの並行運用が一覧操作になった"
tool: "codex"
toolLabel: "OpenAI Codex"
date: 2026-08-23
sourceUrl: "https://github.com/openai/codex/releases"
summary: "2026-08-17 から 08-23 の OpenAI Codex（0.148.0 / 0.149.0）をまとめる。0.149.0 で `codex agents` ダッシュボードが入り、タスクの検索・開始・オープン・リネーム・停止を対話的に操作できるようになった。`codex queue` で既存のローカル / リモートセッションへメッセージを送れる。Codex を「1セッションの CLI」ではなく「複数エージェントの実行環境」として扱う前提が整った週である。0.148.0 では Amazon Bedrock Runtime が組み込みプロバイダーになり、Hooks からコマンドを非同期実行して MCP ツールを呼び出せるようになった。会話全体は `/export` で Markdown 出力できる。"
description: "2026-08-17〜08-23 の OpenAI Codex のリリースをまとめて振り返る。codex agents ダッシュボード、codex queue、Bedrock Runtime の組み込み、Hooks からの MCP 呼び出しが中心。"
impact: "AWS 上で完結させたい組織は導入経路が増えた。Hooks から MCP を呼べるようになったことで自動化の設計自体が変わる。権限プロファイルが resume / fork 時に正しく復元されるようになったため、隔離を前提にした運用は更新の価値がある。"
tags: ["codex", "weekly-rollup", "harness-engineering", "mcp", "権限管理"]
status: "candidate"
relatedKnowledge: []
draft: false
---

## 今週の要点

**複数タスクを並行させているなら 0.149.0 です。** `codex agents` ダッシュボードでタスクの検索・開始・オープン・リネーム・停止を対話的に操作でき、`codex queue` で既存のローカル / リモートセッションへメッセージを送れます。**Codex を「複数エージェントの実行環境」として扱う前提**が整いました。

**自動化を組んでいるなら 0.148.0 の Hooks 拡張が効きます。** Hooks がコマンドを非同期で実行でき、**MCP ツールを呼び出せる**ようになりました。自動化の設計自体が変わる変更です。

**権限プロファイルの復元が修正されました** (0.149.0)。スレッドの resume / fork 時に正しく復元されなかったため、隔離を前提にした運用は更新の価値があります。

## 変更一覧

**エージェント運用** — `codex agents` ダッシュボード、`codex queue`、キュー投入したメッセージがアイドル状態のセッションを確実に起こす修正、セッション名の重複解決の改善 (0.149.0)。TUI 内には `/cd`、`/pwd`、`/cwd` が追加されました。

**Hooks と MCP** — Hooks の非同期実行と MCP ツール呼び出し (0.148.0)。

**Bedrock** — Amazon Bedrock Runtime が組み込みプロバイダーになり、AWS プロファイル / リージョン / GPT-5.6 のルーティングに対応 (0.148.0)。

**セッション操作** — `/export` で TUI の会話全体を Markdown 出力（クリップボードまたはファイル）、`codex exec fork` によるセッション分岐、resume picker からのアーカイブ・復元 (0.148.0)。TUI の初期化中にプロンプトを下書きでき、resume / fork の進捗が起動中に表示されます。

**コスト表示** — `/status`、ステータスライン、ターミナルタイトルに推定クレジット / コストが表示されます（対象ワークスペース）(0.148.0)。

**SDK と編集** — SDK が CLI 設定の厳密なオーバーライドに対応し、reasoning effort に `max` / `ultra` を選べます。Vim 編集は文字置換と `cw` / `c$` / `cc` などの change motion に対応しました (0.149.0)。

**診断とドキュメント** — `codex doctor` がエンドポイント保護、ネットワーク / プロキシの失敗、デスクトップアプリの状態、アップデート接続性まで診断します。ドキュメントには secure devcontainer の DNS エクスフィルトレーションのリスクと信頼境界の限界が明記されました (0.149.0)。

## 拾わなかったもの

サブエージェント活動の重複表示、WebRTC Realtime の再接続、TUI 再生バッファの上限など、個別の改善があります。全件は公式リリースノートを参照してください。

- [openai/codex releases](https://github.com/openai/codex/releases)
