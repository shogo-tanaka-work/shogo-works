---
title: "GitHub Copilot cloud agentがLinearで一般提供開始：Issue直接アサインでドラフトPR自動作成"
tool: "github-copilot"
toolLabel: "GitHub Copilot"
date: 2026-07-23
sourceUrl: "https://github.blog/changelog/2026-07-23-copilot-cloud-agent-for-linear-is-now-generally-available/"
summary: "GitHub Copilot cloud agentをLinearのIssueに直接アサインできる機能が一般提供（GA）になった。2025-10-28のパブリックプレビューからの正式リリースで、アサインされたエージェントはIssueを分析しGitHub Actions環境内で自律的にドラフトPRを作成する。タスクごとのモデル選択、実行中のコメントによる軌道修正にも対応。"
description: "Linear IssueへのCopilot cloud agentアサインがGA化。タスクごとのモデル選択、リポジトリ固有カスタムエージェント、ターゲット/作業ブランチ設定、実行中のin-progress steering、Issue/ワークスペース単位のエージェントガイダンス設定に対応。"
impact: "Linearをイシュートラッカーとして使うチームが、GitHubを行き来せずコーディングタスクをエージェントに委任できるようになる。"
tags: ["github-copilot", "linear", "cloud-agent", "release"]
status: "candidate"
relatedKnowledge: []
draft: false
---

## 要約

GitHub Copilot cloud agentを**Linearのイシューに直接アサイン**できる機能が一般提供（GA）になりました。2025-10-28に始まったパブリックプレビューからの正式リリースです。アサインされたエージェントはイシューの内容を分析し、GitHub Actions環境内で自律的にドラフトPRを作成します。

タスクごとにモデルを選択できるほか、リポジトリ固有のカスタムエージェントをチームのワークフローに合わせてデプロイ可能で、イシューごとにターゲットブランチ・作業ブランチも設定できます。実行中にコメントでCopilotにメンションして指示を軌道修正する「in-progress steering」にも対応し、イシュー単位・ワークスペース単位でエージェントガイダンスを設定できます。利用にはGitHub Marketplaceから「GitHub Copilot for Linear」アプリのインストールが必要です。

## 何が変わったか

- Linear IssueにCopilot cloud agentをアサインし、自律的にタスク処理させることがGA化（プレビューから正式リリース）
- タスクごとにモデルを選択可能
- リポジトリ固有のカスタムエージェントをチームのワークフローに合わせてデプロイ可能
- Issueごとにターゲットブランチ・作業ブランチを設定可能
- 実行中にコメントで指示を軌道修正できるin-progress steeringに対応
- Issue単位・ワークスペース単位でエージェントガイダンスを設定可能

## 業務インパクト（一般企業向け）

GitHubをコード管理に使いつつ、プロジェクト管理はLinearで行っているチームにとって、イシュートラッカーからコーディングタスクを直接エージェントに委任できるのは大きな運用上のメリットです。従来はLinearとGitHubを行き来する必要があった作業フローが、Linear側で完結しやすくなります。Jira連携（2026年3月プレビュー公開）に続きLinear連携も正式版になったことで、非GitHub製のイシュー管理ツールとの統合が着実に進んでいます。開発体制の標準化を検討している組織は、自社の主要プロジェクト管理ツールとの連携状況を確認しておく価値があります。

## 副業・個人活用視点

Linearを使う小規模チームやスタートアップにとっては、イシューを立てるだけでドラフトPRまで自動生成される流れは、開発リソースが限られる状況での実装速度向上に直結します。フリーランスで複数プロジェクトのイシュー管理をLinearに統一している場合、繰り返し発生する定型的な修正タスクをcloud agentに任せることで、本質的な設計判断に時間を割きやすくなります。
