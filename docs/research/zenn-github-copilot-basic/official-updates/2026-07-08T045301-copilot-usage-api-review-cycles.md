---
date: 2026-07-07
title: "Usage APIのAI導入フェーズ集計にレビューサイクル数・レビュー着手時間を追加"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-07-07-add-review-cycles-and-time-to-adoption-phases-in-the-usage-api
fetched_at: 2026-07-09T15:42:00+09:00
published_at: 2026-07-08T04:53:01Z
date_precision: timestamp
category: enhancement
---

# 2026-07-07 Usage APIのAI導入フェーズ集計にレビューサイクル数・レビュー着手時間を追加

## 公式内容の日本語要約

Copilot利用状況メトリクスAPIのAI導入フェーズレポートに、コードレビュー速度に関する新指標2つが追加された。`avg_pull_requests_minutes_to_review`（PR作成から初回レビューまでの中央値、分）と`avg_pull_requests_review_cycles`（マージまでのレビュー提出回数の中央値）。マージ済みPRのみが対象で、エンタープライズ/組織単位の1日・28日間隔レポートで利用できる。

## できるようになったこと

- PR作成から初回レビューまでの所要時間（中央値）を取得
- マージまでのレビューサイクル数（中央値）を取得
- Copilot導入度とレビュー速度・反復回数の相関を組織横断で比較可能に

## 影響範囲

- 対象ユーザー: エンタープライズ/組織のメトリクス管理者
- 対象プラン: Enterprise / Business
- API / UI / 管理者機能: Copilot usage metrics API

## 教材化メモ

- 「Copilot導入度とレビュー速度の相関」は、AI導入効果測定のKPI設計教材でそのまま使える具体例。

## 原文確認

- 公式見出し: "Add review cycles and time to adoption phases in the usage API"
- 公式URL: https://github.blog/changelog/2026-07-07-add-review-cycles-and-time-to-adoption-phases-in-the-usage-api
- 原文全文は公式ページで確認してください。
