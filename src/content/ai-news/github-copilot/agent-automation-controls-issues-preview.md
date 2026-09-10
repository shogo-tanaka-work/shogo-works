---
title: "GitHub Issuesにエージェント自動化の承認・確信度・監査証跡機能がパブリックプレビュー"
tool: "github-copilot"
toolLabel: "GitHub Copilot"
date: 2026-07-23
sourceUrl: "https://github.blog/changelog/2026-07-23-agent-automation-controls-in-github-issues-in-public-preview/"
summary: "GitHub Issuesのラベル付け・タイプ変更・アサイン・クローズなどを行うエージェント自動化に、Approvals（提案→レビュー承認）、Confidence Ratings（確信度に応じた自動適用可否）、Rationale/Audit Trail（変更理由の透明な記録）の3つの管理機能がパブリックプレビューで追加された。"
description: "エージェント自動化に承認フロー・確信度評価・監査証跡を追加。高確信度のみ自動適用、それ以外はレビュー待ちに分岐。リポジトリ管理者がしきい値を設定可能。GitHub Agentic WorkflowsやCopilot cloud agentの自動化と連携、REST/GraphQL API対応。"
impact: "AIエージェントによるIssue操作を組織のガバナンス方針に沿って統制できるようになり、監査説明責任のある企業導入で重要な機能。"
tags: ["github-copilot", "governance", "agent-automation", "audit-trail", "enhancement"]
status: "candidate"
relatedKnowledge: []
draft: false
---

## 要約

GitHub Issuesのラベル付け・タイプ変更・アサイン・クローズなどを行うエージェント自動化に、3つの管理機能がパブリックプレビューで追加されました。**Approvals**は自動化が変更を直接適用せず提案し、ユーザーがレビューして承認・却下できる仕組みです。**Confidence Ratings**は、エージェントがアクションを高・中・低の確信度で評価し、高確信度のみ自動適用、それ以外はレビュー待ちにする機能です。**Rationale／Audit Trail**では、すべてのアクションに理由が付き、変更内容と理由が透明に記録されます。

ラベル・フィールド・タイプ・クローズステータス・アサインへの変更を対象に承認フローを設定でき、`has:suggestions`で保留中の提案を検索できます。リポジトリ管理者は自動化のしきい値を設定可能で、GitHub Agentic Workflows（`issue-intents: true`オプションが必要）やCopilot cloud agentの自動化とも連携します。REST／GraphQL API経由での利用にも対応しています。

## 何が変わったか

- エージェント自動化の変更を「提案 → レビュー承認」フローに乗せられる（Approvals）
- エージェントのアクションを高・中・低の確信度で評価し、高確信度のみ自動適用（Confidence Ratings）
- すべての自動化アクションに理由を記録する監査証跡機能（Rationale/Audit Trail）
- リポジトリ管理者が自動化のしきい値を設定可能
- `has:suggestions`で保留中の提案を検索、REST/GraphQL API経由でも利用可能

## 業務インパクト（一般企業向け）

AIエージェントにIssue管理の一部を任せる際、最大の懸念は「意図しない変更が無審査で適用されてしまうこと」です。今回の機能は、確信度に応じて自動適用とレビュー待ちを分岐させ、すべての判断に理由を残すことで、この懸念に正面から対応しています。Manus Plan Mode（2026-07-22発表）のような「実行前レビュー」トレンドと軌を一にする機能であり、AIエージェントの自律性と人間の統制のバランスを取る設計として、他社サービスの機能設計でも参考になります。

監査証跡が標準機能として提供される点は、コンプライアンス・内部統制の観点からAIエージェント導入の説明責任を果たしやすくする変更です。GitHub上でIssue管理を行っている組織は、自動化のしきい値設定を検討する価値があります。

## 副業・個人活用視点

個人開発やフリーランスの小規模プロジェクトでは、確信度ベースの自動適用によって定型的なIssue管理作業（ラベル付けなど）の手間を削減しつつ、重要な判断だけレビューに回すという使い分けができます。クライアントワークでIssue管理の透明性を求められる場合、監査証跡機能はそのまま説明資料として活用できる点も実務的なメリットです。
