---
date: 2026-07-07
title: "JetBrains IDEでCodexをエージェントプロバイダーとして選択可能に（パブリックプレビュー）"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-07-07-codex-as-agent-provider-and-agentic-enhancements-in-jetbrains-ides
fetched_at: 2026-07-09T15:42:00+09:00
published_at: 2026-07-08T02:55:53Z
date_precision: timestamp
category: enhancement
---

# 2026-07-07 JetBrains IDEでCodexをエージェントプロバイダーとして選択可能に（パブリックプレビュー）

## 公式内容の日本語要約

JetBrains系IDE向けCopilot Chatで、OpenAI Codexをエージェントプロバイダーとしてパブリックプレビューで選択できるようになった。Codex CLIをインストールしパスを設定すれば利用できる。同時にAgent Customizationsでのフック管理、Copilot CLIセッション向けMCPサーバー管理、`/create-instruction`等のAI支援コマンド、Copilot CLIの承認レベル3種（Default/Bypass/Autopilot(Preview)）、Claudeエージェントの権限モード選択・デバッグログ統合、Business/Enterprise向けカスタムモデル対応も追加された。

## できるようになったこと

- JetBrains IDEでCodexをエージェントプロバイダーとして選択（プレビュー）
- Agent Customizationsでのフック・MCPサーバー管理
- `/create-instruction` `/create-prompt` `/create-skill` によるAI支援ファイル生成
- Copilot CLIの承認レベル選択（Default Approvals / Bypass Approvals / Autopilot Preview）
- Claudeエージェントの権限モード選択・デバッグログ統合
- Business/Enterprise管理者によるカスタムモデル設定

## 影響範囲

- 対象ユーザー: JetBrains IDE利用者全般（Codex機能）、Business/Enterprise管理者（カスタムモデル）
- 対象プラン: 全プラン（Codexプレビュー）、Business/Enterprise（カスタムモデル）
- API / UI / 管理者機能: JetBrains Copilot Chat、Agent Customizations、Copilot CLI設定

## 教材化メモ

- Copilot上でCodex・Claudeなど複数ベンダーのエージェントを横断選択できる構成は、マルチエージェント運用の比較教材に使える良い題材。

## 原文確認

- 公式見出し: "Codex as agent provider and agentic enhancements in JetBrains IDEs"
- 公式URL: https://github.blog/changelog/2026-07-07-codex-as-agent-provider-and-agentic-enhancements-in-jetbrains-ides
- 原文全文は公式ページで確認してください。
