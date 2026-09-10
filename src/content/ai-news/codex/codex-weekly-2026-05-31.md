---
title: "Codex 週次まとめ（5/25〜5/31） — `--profile` が権限の主セレクタへ昇格し、legacy profile v1 が廃止された"
tool: "codex"
toolLabel: "OpenAI Codex"
date: 2026-05-31
sourceUrl: "https://github.com/openai/codex/releases"
summary: "2026-05-25 から 05-31 の OpenAI Codex（rust-v0.134.0 / 135.0）をまとめる。0.134.0 で `--profile` が CLI・TUI の権限・サンドボックスの主セレクタへ昇格し、legacy profile v1 の解決経路・書き込み経路・テレメトリが削除された。互換は移行ガイドのみで、profile v1 の設定をそのまま使っている環境は書き換えが必須になる。ローカルの会話履歴検索が入り、MCP はサーバー単位の環境ルーティングと streamable HTTP の OAuth に対応した。0.135.0 では `codex doctor` の診断範囲が広がり、`/permissions` が名前付きプロファイルを扱えるようになった。"
description: "2026-05-25〜05-31 の OpenAI Codex のリリースをまとめて振り返る。--profile の主セレクタ化と legacy profile v1 の廃止、会話履歴検索、MCP の OAuth 対応が中心。"
impact: "profile v1 を前提にした設定や社内手順は書き換えが必須。MCP を OAuth 付きで運用したい組織は streamable HTTP 経由の選択肢が増えた。codex doctor と /status の強化で、サポート問い合わせ前の自己診断がしやすくなった。"
tags: ["codex", "weekly-rollup", "権限管理", "mcp", "ai-governance"]
status: "candidate"
relatedKnowledge: []
draft: false
---

## 今週の要点

**profile v1 を使っているなら書き換えが必要です。** `--profile` が CLI・TUI の権限とサンドボックスの主セレクタへ昇格し、**legacy profile v1 の解決経路・書き込み経路・テレメトリが削除**されました (0.134.0)。互換として残っているのは移行ガイドだけです。社内手順書で profile v1 を前提に書いている箇所も対象になります。

**MCP を OAuth で繋ぎたいなら 0.134.0 です。** streamable HTTP の MCP に OAuth オプションが入り、`codex mcp add` も OAuth に対応しました。MCP サーバーはサーバー単位の環境へルーティングされます。

**過去の会話を探せるようになりました。** ローカルの会話履歴検索（大文字小文字を区別せず、結果プレビュー付き）が入りました (0.134.0)。

## 変更一覧

**権限とプロファイル** — `--profile` の主セレクタ化と legacy profile v1 の廃止、`codex sandbox` の `--profile` 受け入れ (0.134.0)。`/permissions` が名前付きプロファイルに対応し、カスタムプロファイルを表示します (0.135.0)。auto-review 起動時には有効な権限プロファイルのメタデータが保持されます (0.134.0)。

**MCP と拡張** — サーバー単位の環境ルーティング、streamable HTTP の OAuth 対応、コネクタのツールスキーマが local `$ref` / `$defs` を保持（過大なスキーマは公開前に best-effort で圧縮）、`readOnlyHint` を申告するツールの並列実行許可 (0.134.0)。拡張ツールへ会話履歴を渡せるようになり、hook の入力にサブエージェントの識別情報が含まれます。

**診断** — `codex doctor` が環境 / Git / terminal / app-server / スレッド在庫を含むサポート向け診断を返します。`/status` はリモート接続の詳細とサーバーバージョンを表示します (0.135.0)。

**エディタ操作** — Vim モードにテキストオブジェクト編集、word / line-end の改善、interrupt-turn バインディングの設定が入りました (0.135.0)。

**接続の安定性** — exec-server の WebSocket 再接続、認証復旧後のリトライ、リモート compaction v2 のリトライ (0.134.0)。Windows TUI の描画崩れ（VT モード復元）も修正されています。

**基盤** — Bedrock Mantle の GovCloud リージョン追加、Python SDK の Sandbox preset API、パッケージ済みビルドでの patched zsh helper 同梱（macOS / Linux）(0.134.0, 0.135.0)。

## 拾わなかったもの

インストーラのドキュメント追記、リリースビルドのパッケージング変更、プラグインのアイコン共有など、内部寄りの変更があります。全件は公式リリースノートを参照してください。

- [openai/codex releases](https://github.com/openai/codex/releases)
