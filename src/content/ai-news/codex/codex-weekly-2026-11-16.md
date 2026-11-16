---
title: "Codex 週次まとめ（11/10〜11/13） — codex exec が未信頼ディレクトリで MCP を無効にする。CI は --trust が要る"
tool: "codex"
toolLabel: "OpenAI Codex"
date: 2026-11-16
sourceUrl: "https://github.com/openai/codex/releases"
summary: "2026-11-10 から 11-13 の Codex CLI（rust-v0.167.1 / 0.167.2 / 0.168.0 / 0.169.0）をまとめる。対応が必要なのは 0.169.0 の信頼の扱いで、codex exec は未信頼ディレクトリではプロジェクト設定と MCP サーバーを無効のままにするようになった。--sandbox workspace-write を付けても変わらず、明示的に信頼を保存するには --trust が必要になる。CI やスクリプトで MCP 連携に依存していると静かに無効化される。ほかに Vertex AI でツール更新が既定で増分送信になり、ターミナルのワークスペース（opt-in）でサイド会話とタブが使えるようになった。"
description: "2026-11-10〜11-13 の Codex CLI のリリースをまとめて振り返る。codex exec の信頼の扱い、Vertex の増分ツール送信、ターミナルのワークスペースとモデルプロバイダー設定が中心。"
impact: "CI やスクリプトで codex exec を使っている場合は確認してください。未信頼ディレクトリでは --sandbox workspace-write を付けてもプロジェクト設定と MCP サーバーが無効のままになります。明示的に信頼を保存するには codex exec または codex review に --trust を付けます。Google Cloud Vertex AI 経由で使っている場合は、ツール更新が既定で増分送信になりました。問題が出たら config.toml の [features] で incremental_tools_legacy_gcp を false にしてください。features.multi_agent を明示設定している場合は警告が出ます。サブエージェントのツールを無効化する設定は agents.enabled へ移りました。"
tags: ["codex", "weekly-rollup", "サンドボックス", "権限管理", "MCP", "harness-engineering"]
status: "candidate"
relatedKnowledge: []
draft: false
---

## 今週の要点

**CI やスクリプトで `codex exec` を使っているなら、ここだけ先に見てください (0.169.0)。**

**`codex exec` は、未信頼のディレクトリではプロジェクト設定と MCP サーバーを無効のままにします。`--sandbox workspace-write` を付けても変わりません。** 明示的に信頼を保存するには `codex exec` または `codex review` に **`--trust`** を付けます。MCP 連携に依存した自動化は、**エラーではなく「ツールが無い状態」で走る**ため気づきにくい変更です。

**Vertex AI 経由の利用はツール更新の送り方が変わりました (0.167.2)。** ツール更新が既定で増分送信になります。互換の問題が出たら `config.toml` の `[features]` で `incremental_tools_legacy_gcp = false`。

**`features.multi_agent` を明示設定していると警告が出ます (0.168.0)。** サブエージェントのツールを無効化する設定は `agents.enabled` へ移りました。

セキュリティ修正としての明示はありません。関連するのは Windows サンドボックスの処理の修正です（下記）。

## 変更一覧

**信頼とサンドボックス** — 上記の `--trust` に加え、**Windows サンドボックス**で引用符付きの `cmd.exe` パスと、親ディレクトリが読めない作業ディレクトリの PowerShell セッションの扱いを修正 (0.169.0)。Windows でアイドル状態のローカル MCP サーバーが、Codex の他の処理のファイルシステム I/O を塞がなくなりました (0.168.0)。

**ターミナルのワークスペース（opt-in）** — `features.tui_workspace` を有効にすると、メインチャットの横にサイド会話を表示できます。区切りのドラッグでペインを変形、`leader z` でフォーカス中のペインを拡大 (0.168.0)。サイドチャットは**複数タブ**になり、キーボードとマウスで切り替え、再起動後にローカルのサイドチャットを再開できます (0.169.0)。

**モデルプロバイダー** — Sessions → Model providers で一覧し、新規チャットの既定を選べます。既定を変えても、開いているチャットと再開したチャットは保存済みのプロバイダーを使います (0.168.0)。**ターミナルからカスタムプロバイダーを追加・編集**でき、サインイン中に作成することも、SSH 越しやローカルブラウザ無しの環境でデバイスコードを使うこともできます (0.169.0)。

**可読性と入出力** — 過去タスクを名前・プロンプト・作業ディレクトリで検索 (0.169.0)、フルスクリーン transcript の **Collapse turn details**（完了した活動をプロンプト下に畳み、回答とツール出力の検索性は保つ） (0.169.0)、**`Ctrl+S` で診断 ZIP をローカル保存**（アップロードが無効でも可） (0.169.0)。音声対応モデルでの録音添付、`features.image_generation_animation` でのアニメーション GIF 生成、`tui.notification_method = "osc777"` と、**ターミナル入力の要求とネットワークアクセスの要求を区別する承認通知** (0.168.0)。

**Cloud 連携（opt-in、macOS / Linux）** — ターミナルから画像の送信、モデルと reasoning effort の選択、Cloud 会話のアーカイブと復元 (0.169.0)。

## 拾わなかったもの

**0.167.1 は本文が Full Changelog へのリンクのみで、変更内容の記載がありません。** ほかに SQLite 3.54 への更新（WAL の修正）、プラグイン marketplace の Git オブジェクト再利用、app-server リファレンスの追記などがあります。alpha 版は対象外です。

- [openai/codex releases](https://github.com/openai/codex/releases)
