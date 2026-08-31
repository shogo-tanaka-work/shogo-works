---
date: 2026-08-28
title: "GitHub Copilot weekly releases（August 24）— Copilot CLI が Rust ランタイムへ、VS Code 1.135 でセッション横断の再開"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-08-28-github-copilot-weekly-releases-august-24/
fetched_at: 2026-08-31T09:40:00+09:00
published_at: 2026-08-28T00:00:00Z
date_precision: date-only
category: release
---

# 2026-08-28 GitHub Copilot weekly releases（August 24）

## 公式内容の日本語要約

Copilot の週次リリースまとめ。クライアント横断で更新が入っている。

**VS Code 1.135**。**他アプリケーションで開始した Copilot / Claude のエージェントセッションを VS Code で再開**できるようになった。エージェント用の単一ペインレイアウト、セッション操作の改善が入る。**補完的なモデルからセカンドオピニオンを取り、見落としやエッジケースを洗い出す**機能が追加された。会話のターンごとに、モデル別のチャット使用量が見えるようになった。

**Copilot CLI**。ターミナル UI は TypeScript のまま、**ランタイムをネイティブ Rust へ移行**して性能を改善した。新規セッションの既定実行モード・既定権限モードを `defaultMode` / `defaultPermissionMode` で設定できる。プラグイン・MCP サーバー・スキルの管理が簡素化され、中断したセッションの復旧に対応した。

**Copilot アプリ**。Customize タブが一般提供（別エントリ）。**WSL アクセスが実験的にサポート**され、タブを分割・移動して関連作業を並べられる。Azure DevOps の issue / PR を Copilot セッションへ変換できる。

**その他**。Slack / Microsoft Teams の Copilot でチームエージェントセッションが利用可能に。JetBrains に Enterprise 統制機能。Visual Studio にモデル管理と、PR 作成前レビューのための Git 統合。

## できるようになったこと

- 他アプリで始めたエージェントセッションを VS Code で再開できる
- Copilot CLI の既定実行モード・既定権限モードを設定できる
- Copilot アプリから WSL へアクセスできる（実験的）
- Slack / Teams でチームエージェントセッションを使える

## 影響範囲

- 対象ユーザー: Copilot 利用者全般（VS Code / CLI / アプリ / JetBrains / Visual Studio / Slack / Teams）
- 対象プラン: Copilot 利用者全般。Enterprise 統制は Business / Enterprise
- API / UI / 管理者機能: 各クライアント UI + CLI 設定

## 教材化メモ

- **`defaultPermissionMode` の追加**は、Claude Code の `--restricted`（2.1.248）や Codex の権限プロファイル復元（0.151.0）と同じ週の動きである。**エージェント CLI の権限既定値を運用側が握る**という要件が、3ツールで同時に立ち上がっていることを示す材料になる。
- **「他アプリで始めたセッションを VS Code で再開」**は、セッションの所在がツールからサービスへ移る流れの実例。手元のプロセスではなくアカウントに紐づく状態が増えるほど、退職時の棚卸し対象が広がる。
- 記事化はしない（週次確認ソースの通常更新）。

## 原文確認

- 公式見出し: GitHub Copilot weekly releases — August 24（2026-08-28）
- 公式URL: https://github.blog/changelog/2026-08-28-github-copilot-weekly-releases-august-24/
- 原文全文は公式ページで確認してください。
