---
date: 2026-07-23
title: "Copilot cloud agentがLinearで一般提供開始"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-07-23-copilot-cloud-agent-for-linear-is-now-generally-available/
fetched_at: 2026-07-24T10:20:00+09:00
published_at: 2026-07-23T00:00:00Z
date_precision: date-only
category: release
---

# 2026-07-23 Copilot cloud agentがLinearで一般提供開始

## 公式内容の日本語要約

GitHub Copilot cloud agentをLinearのIssueに直接アサインできる機能が一般提供（GA）になった。Publicプレビュー（2025-10-28）からの正式リリース。アサインされたエージェントはIssueを分析し、GitHub Actions環境内で自律的にドラフトPRを作成する。

## できるようになったこと

- Linear IssueにCopilot cloud agentをアサインし、自律的にタスク処理させる
- タスクごとにモデルを選択可能
- リポジトリ固有のカスタムエージェントをチームのワークフローに合わせてデプロイ可能
- Issueごとにターゲットブランチ・作業ブランチを設定可能
- 実行中にコメントでCopilotにメンションして指示を軌道修正可能（in-progress steering）
- Issue単位・ワークスペース単位でエージェントガイダンスを設定可能

## 影響範囲

- 対象ユーザー: Linearを使うチーム（GitHub Marketplaceから「GitHub Copilot for Linear」アプリのインストールが必要）
- 対象プラン: Copilot Pro、Pro+、Business、Enterprise
- API / UI / 管理者機能: Linear連携アプリ経由。ワークスペース単位のエージェントガイダンス設定あり

## 教材化メモ

Issueトラッカー（Linear）からコーディングエージェントを直接起動する導線がGA化。Jira連携（2026-03公開preview）に続きLinear連携も正式版になり、非GitHub Issue管理ツールとの統合が進んでいる。

## 原文確認

- 公式見出し: Copilot cloud agent for Linear is now generally available
- 公式URL: https://github.blog/changelog/2026-07-23-copilot-cloud-agent-for-linear-is-now-generally-available/
- 原文全文は公式ページで確認してください。
