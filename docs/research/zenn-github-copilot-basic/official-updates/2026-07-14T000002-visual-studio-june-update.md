---
date: 2026-07-14
title: "GitHub Copilot in Visual Studio 6月アップデート — C++モダナイゼーションエージェントGA、MCPサーバー信頼検証追加"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-07-14-github-copilot-in-visual-studio-june-update
fetched_at: 2026-07-16T13:43:23+09:00
published_at: 2026-07-14
date_precision: date-only
category: enhancement
---

# 2026-07-14 GitHub Copilot in Visual Studio — June update

## 公式内容の日本語要約

Visual Studio 2026向けCopilotで、リアルタイム更新と請求上限接近時のアラートを表示する刷新済み使用状況ウィンドウを追加。起動時にMCPサーバー設定を信頼済みベースラインと照合し、変更があればユーザー承認を求めるMCPサーバー信頼検証機能を追加した。MSVCアップグレード用のC++モダナイゼーションエージェントがプレビューからGAへ昇格し、自動・ガイド両モードを提供する。編集提案がカーソル付近だけでなくアクティブファイル全体に拡張され、PRをCopilot Chatに追加してコンテキスト付きレビューが可能になった。

## できるようになったこと

- 使用状況ウィンドウがリアルタイム更新＋請求上限アラート対応に刷新
- MCPサーバー設定の信頼済みベースライン照合・変更時承認フロー追加
- C++モダナイゼーションエージェントがGA（自動/ガイド両モード）
- アクティブファイル全体への編集提案拡張、PRをCopilot Chatに追加してレビュー可能

## 影響範囲

- 対象ユーザー: Visual Studio 2026でCopilotを利用する開発者、C++コードベースを保守する企業
- 対象プラン: 制限なし（C++モダナイゼーションエージェントはGA）
- API / UI / 管理者機能: 使用状況ウィンドウ、MCPサーバー信頼設定、C++モダナイゼーションエージェント

## 教材化メモ

- MCPサーバー信頼検証は、MCP経由でツールを拡張する際のセキュリティ設定として教材化の価値がある。
- C++モダナイゼーションエージェントのGA移行は、レガシーC++資産を持つ企業向けの具体的な導入事例として紹介できる。

## 原文確認

- 公式見出し: "GitHub Copilot in Visual Studio — June update"
- 公式URL: https://github.blog/changelog/2026-07-14-github-copilot-in-visual-studio-june-update
- 原文全文は公式ページで確認してください。
