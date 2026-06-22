---
date: 2026-06-22
title: "GitHub Copilot: JetBrains IDEで Claude をエージェントプロバイダーとして選択可能に（Public Preview）+ Cloud Agent GA"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-06-22-new-features-and-claude-as-agent-provider-preview-in-jetbrains-ides
fetched_at: 2026-06-23T07:44:10+09:00
published_at: 2026-06-22T00:00:00Z
date_precision: date-only
category: enhancement
---

# 2026-06-22 GitHub Copilot JetBrains: Claude as Agent Provider（Public Preview）+ Cloud Agent GA

## 公式内容の日本語要約

JetBrains IDE の GitHub Copilot で Claude Code CLI をインストールしてパスを設定することで、Copilot のエージェントプロバイダーとして Claude を選択できる Public Preview を開始。Cloud Agent が正式 GA（一般提供）昇格。組織・Enterprise 向けカスタムエージェントの一括デプロイ、CLI 実行中のメッセージキュー機能なども追加。

## できるようになったこと

- JetBrains IDE 内の Copilot Chat で Claude をエージェントプロバイダーとして選択（Claude Code CLI が必要。Business/Enterprise の管理者がプレビューポリシー有効化が必要）
- Cloud Agent が GA 昇格（プレビューフラグ不要）
- 組織・Enterprise 管理者が定義したカスタムエージェントを自動配布可能に
- CLI 実行中に「Add to Queue」「Steer with Message」「Stop and Send」の3オプションでメッセージ送信可能
- `/models` スラッシュコマンド追加、大規模コンテキストウィンドウ選択対応、最近使用モデル表示
- 各ターンの AI クレジット消費量を可視化

## 影響範囲

- 対象ユーザー: JetBrains IDE 利用の GitHub Copilot Business/Enterprise ユーザー
- 対象プラン: Copilot Business / Enterprise（管理者のプレビュー機能有効化が必要）
- API / UI / 管理者機能: IDE プラグイン・管理コンソール

## 教材化メモ

「JetBrains × Claude Code × GitHub Copilot」という複数ツールの統合は、エンタープライズ開発環境でのマルチ AI 活用の具体例として使える。Cloud Agent GA は「Copilot がクラウド上でエージェントタスクを実行する」という方向性の確立を示す。

## 原文確認

- 公式見出し: New features and Claude as agent provider preview in JetBrains IDEs
- 公式URL: https://github.blog/changelog/2026-06-22-new-features-and-claude-as-agent-provider-preview-in-jetbrains-ides
- 原文全文は公式ページで確認してください。
