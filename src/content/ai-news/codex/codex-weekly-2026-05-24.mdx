---
title: "Codex 週次まとめ（5/18〜5/24） — Goals が既定になり、権限プロファイルが組織で管理できるようになった"
tool: "codex"
toolLabel: "OpenAI Codex"
date: 2026-05-24
sourceUrl: "https://github.com/openai/codex/releases"
summary: "2026-05-18 から 05-24 の OpenAI Codex（rust-v0.131.0 / 132.0 / 133.0）をまとめる。この期間で Codex は「単発でコマンドを実行するツール」から「目標を保持して進捗を追うエージェント」へ既定が移った。0.133.0 で Goals が experimental を外れて既定有効になり、専用ストレージに保存されてターンをまたいで進捗を追跡する。権限プロファイルには list API・継承・managed な `requirements.toml` 対応・実行時リフレッシュが入り、複数チーム・複数環境で権限境界を統制する実務基盤が揃った。0.131.0 では旧 function 形式の `apply_patch` と after-tool-use hooks が削除されており、破壊的変更にあたる。"
description: "2026-05-18〜05-24 の OpenAI Codex のリリースをまとめて振り返る。Goals の既定化、権限プロファイルの組織管理、apply_patch の削除が中心。"
impact: "旧 function 形式の apply_patch や after-tool-use hooks に依存した構成は動かなくなるため、移行確認が必要。権限プロファイルの継承と requirements.toml により、組織が Codex の権限境界を中央で定義できるようになった。"
tags: ["codex", "weekly-rollup", "権限管理", "ai-governance", "plugin"]
status: "candidate"
relatedKnowledge: []
draft: false
---

## 今週の要点

**破壊的変更があります。** 旧 function 形式の `apply_patch` と after-tool-use hooks が削除されました (0.131.0)。どちらかに依存した構成は動かなくなるため、移行の確認が要ります。

**Goals が既定で有効になりました** (0.133.0)。experimental の扱いが外れ、専用ストレージに保存されてターンをまたいで進捗を追跡します。**Codex を「目標を保持するエージェント」として使う前提が標準になった**変更です。

**組織で権限を統制するなら 0.133.0 が土台になります。** 権限プロファイルに list API、継承、managed な `requirements.toml` 対応、実行時リフレッシュが入りました。複数チーム・複数環境で境界を定義できます。

## 変更一覧

**Goals と権限** — Goals の既定有効化、権限プロファイルの継承と managed 化 (0.133.0)。Goal continuation は usage limit に達した時点で停止し、過剰なループを防ぎます (0.132.0)。Windows サンドボックスと権限プロファイルの統合も強化されました (0.133.0)。

**プラグインと hooks** — plugin hooks が既定で有効になり、プラグインマーケットプレイスの CLI コマンドとバージョン認識の共有が入りました (0.131.0)。`SubagentStart` / `SubagentStop` フックが追加され、サブエージェントの開始・停止、ツール実行、ターンメタデータ、非同期の承認処理まで拡張から観測できるようになっています (0.133.0)。

**リモート実行** — `codex remote-control` がデーモン管理になり、実行時の有効化・無効化 API とステータス読み取り、レジストリ連携のリモート環境に対応しました (0.131.0)。0.133.0 ではフォアグラウンドコマンドのように動作し、準備完了まで待機してマシン状態を報告します。Remote Executor の登録は標準の Codex 認証に統合され、別レジストリの認証が不要になりました (0.132.0)。

**Python SDK** — パッケージが `openai-codex` / `openai_codex` へ移行し、並行ターンのルーティングと承認モードに対応 (0.131.0)。認証は API キー / ChatGPT ブラウザ / device-code の3フローが first-class になり、Turn API は plain string 入力を受けて `TurnResult` にメトリクスを含めます (0.132.0)。

**診断と TUI** — `codex doctor` が runtime / auth / terminal / network / config / ローカル状態を横断して診断します (0.131.0)。TUI にはトークン使用量・承認モード・有効な workspace root の表示が入り、`@` メンションでファイル・ディレクトリ・プラグイン・スキルを1つのピッカーから横断検索できます。起動はターミナル機能チェックのバッチ化で高速化されました (0.132.0)。

**Windows** — サンドボックスの deny-read ルール、スコープ付き write root、PowerShell のエッジケースが堅牢化 (0.131.0)。インストールの堅牢性と MSVC バイナリの外部依存解消も入りました (0.132.0)。

## 拾わなかったもの

セッションピッカーの表示改善、画像解像度の保持、リモートセッションの WebSocket 接続維持など、細かな改善があります。同期間に Codex アプリ 26.519 も公開されました。全件は公式リリースノートを参照してください。

- [openai/codex releases](https://github.com/openai/codex/releases)
