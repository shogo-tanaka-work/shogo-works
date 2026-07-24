---
date: 2026-07-23
title: "GitHub Issuesにエージェント自動化の承認・確信度・根拠機能がパブリックプレビュー"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-07-23-agent-automation-controls-in-github-issues-in-public-preview/
fetched_at: 2026-07-24T10:20:00+09:00
published_at: 2026-07-23T00:00:00Z
date_precision: date-only
category: enhancement
---

# 2026-07-23 GitHub Issuesにエージェント自動化の承認・確信度・根拠機能がパブリックプレビュー

## 公式内容の日本語要約

GitHub Issuesのラベル付け・タイプ変更・アサイン・クローズなどを行うエージェント自動化に、3つの管理機能がパブリックプレビューで追加された。(1) Approvals: 自動化が変更を直接適用せず提案し、ユーザーがレビューして承認/却下できる。(2) Confidence Ratings: エージェントがアクションを高・中・低の確信度で評価し、高確信度のみ自動適用、それ以外はレビュー待ちにする。(3) Rationale/Audit Trail: すべてのアクションに理由が付き、変更内容と理由の透明な記録が残る。

## できるようになったこと

- ラベル・フィールド・タイプ・クローズステータス・アサインへの変更を対象に承認フローを設定
- `has:suggestions` で保留中の提案を検索
- リポジトリ管理者が自動化のしきい値を設定可能
- GitHub Agentic Workflows（`issue-intents: true` オプションが必要）およびCopilot cloud agentの自動化と連携
- REST / GraphQL API経由でも利用可能

## 影響範囲

- 対象ユーザー: GitHub Issuesでエージェント自動化を使うチーム・管理者
- 対象プラン: パブリックプレビュー（プラン限定情報は記載なし）
- API / UI / 管理者機能: Issues UI、REST/GraphQL API、リポジトリ管理者向けしきい値設定

## 教材化メモ

「エージェントに任せる／人がレビューする」を確信度ベースで自動分岐させる設計は、Manusの Plan Mode（2026-07-22）など他社の「実行前レビュー」トレンドと並ぶ、AIエージェントのガバナンス機能強化の一例。監査証跡（rationale）を残す設計は業務導入の説明責任の観点で参考になる。

## 原文確認

- 公式見出し: Agent automation controls in GitHub Issues in public preview
- 公式URL: https://github.blog/changelog/2026-07-23-agent-automation-controls-in-github-issues-in-public-preview/
- 原文全文は公式ページで確認してください。
