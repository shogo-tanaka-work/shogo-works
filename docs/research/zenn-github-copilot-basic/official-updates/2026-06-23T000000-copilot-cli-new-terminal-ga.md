---
date: 2026-06-23
title: "GitHub Copilot CLI — 新しいターミナルインターフェースが GA"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-06-23-copilot-cli-new-terminal-interface-is-generally-available
fetched_at: 2026-06-24T12:00:00+09:00
published_at: 2026-06-23
date_precision: date-only
category: rollout
---

# 2026-06-23 GitHub Copilot CLI 新ターミナルインターフェース GA

## 公式内容の日本語要約

Microsoft Build 2026 でプレビューされた Copilot CLI の再設計ターミナルインターフェースが正式 GA（一般提供）になった。タブ付きレイアウト・MCP/スキル設定の簡略化・アクセシビリティ対応が主な改善点。

## できるようになったこと

- **タブ付きレイアウト**: ターミナル上部にタブ表示。リポジトリ内では Issues・Pull Requests・Gists タブが自動追加。キーボードショートカット（`c`で参照・`o`でブラウザ起動・`/`で検索）とマウス操作に対応
- **ツール設定の簡略化**: 設定ファイルの手動編集が不要に。`/mcp add` / `/mcp search` で MCP サーバーを即時追加、`/skills` でスキル切り替え、`/plugin` でプラグインインストール
- **アクセシビリティ対応**: テーマ対応のセマンティックカラーを採用。`/theme` で「default / dim / high-contrast / colorblind」から選択。スクリーンリーダーは自動検出で有効化

## 影響範囲

- 対象ユーザー: Copilot CLI 利用者全員
- 対象プラン: 全プラン
- 更新方法: `copilot update` コマンドで更新

## 教材化メモ

- MCP サーバーを CLI で設定できるようになった点はエージェント型ワークフロー構築の観点で重要
- `copilot update` だけで新 UI が使える点はアップデートコストの低さとして教材で強調できる

## 原文確認

- 公式見出し: "Copilot CLI: New terminal interface is generally available"
- 公式URL: https://github.blog/changelog/2026-06-23-copilot-cli-new-terminal-interface-is-generally-available
- 原文全文は公式ページで確認してください。
