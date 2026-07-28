---
date: 2026-07-27
title: "GitHub Copilot for JetBrains — OpenTelemetry設定・モデル管理を強化"
service: "GitHub Copilot"
source: https://github.blog/changelog/label/copilot/
fetched_at: 2026-07-28T21:44:59+09:00
published_at: 2026-07-27
date_precision: date-only
category: enhancement
---

# 2026-07-27 GitHub Copilot for JetBrains — OpenTelemetry / モデル管理

## 公式内容の日本語要約

JetBrains向けGitHub Copilotに設定・管理系の機能強化が入った。

- OpenTelemetryのエクスポート設定を `Settings > Tools > GitHub Copilot > Chat` から構成可能に
- カスタムエンドポイント/BYOKモデル向けにトークン上限設定（`maxInputToken` / `maxOutputToken`）を追加
- モデル管理コントロールから組み込みCopilotモデルの有効/無効を切り替え可能に
- MCPサーバー・カスタムエージェントをエージェントフロー内で直接利用可能に
- Copilot CLIセッションがフォーク、`/rubber-duck` コマンド、todoリスト表示に対応
- モデル/アクションピッカーの一貫性向上、セットアップ簡素化、Markdownでのセッションプロンプト表示、MCP診断改善
- ユーザーレベル予算未設定時にAIクレジット消費量を企業組織向けに表示
- macOS/LinuxでのパスCapitalization処理の不具合修正

## できるようになったこと

- OpenTelemetryエクスポート設定をJetBrains内から構成できる
- カスタムエンドポイント/BYOKモデルにトークン上限を設定できる
- MCPサーバー・カスタムエージェントをJetBrains上のエージェントフローで直接使える
- Copilot CLIセッションのフォーク、`/rubber-duck`、todoリスト表示ができる

## 影響範囲

- 対象ユーザー: JetBrains IDEでGitHub Copilotを利用する開発者
- 対象プラン: Copilot全プラン（エンタープライズ向けクレジット表示は組織管理者）
- API / UI / 管理者機能: JetBrains設定UI、Copilot CLI、エンタープライズのAIクレジット表示

## 教材化メモ

- MCPサーバー/カスタムエージェントのJetBrains対応は、他IDE（VS Code）との機能パリティ比較の教材ネタとして使える。

## 原文確認

- 公式見出し: GitHub Copilot for JetBrains adds improved OpenTelemetry configuration and model management
- 公式URL: https://github.blog/changelog/2026-07-27-github-copilot-for-jetbrains-adds-improvved-opentelemetry-configuration-and-model-management/
- 原文全文は公式ページで確認してください。
