---
date: 2026-07-17
title: "GitHub Copilot — リポジトリ単位の利用状況メトリクスGA、Copilot appのメトリクスAPI対応、コードレビューのカスタマイズ性向上"
service: "GitHub Copilot"
source: https://github.blog/changelog/label/copilot/
fetched_at: 2026-07-18T10:58:20+09:00
published_at: 2026-07-17T00:00:00Z
date_precision: date-only
category: enhancement
---

# 2026-07-17 GitHub Copilot changelog 3件

## 公式内容の日本語要約

3件の更新が同日に公開された。

1つ目は「リポジトリ単位のCopilot利用状況メトリクス」のGeneral Availability。新しいREST APIエンドポイント（`GET /enterprises/{enterprise}/copilot/metrics/reports/repos-1-day` および `GET /orgs/{org}/copilot/metrics/reports/repos-1-day`）が、日次・リポジトリ単位でCopilot coding agentが作成・マージしたPR数、Copilot code reviewがレビューしたPR数、コメント種別ごとの提案数を返す。これまでの組織・ユーザー単位の集計から一段細かい粒度になり、AI活用の恩恵が大きいリポジトリを特定しやすくなった。利用にはEnterprise owner・billing manager・Organization owner、または「View Copilot Metrics」権限を持つカスタムロールと、Copilot利用状況メトリクスポリシーの有効化が必要。

2つ目は、GitHub Copilot appが利用状況メトリクスAPIの対象に追加され、Copilot app経由の利用も可視化できるようになった。

3つ目は、Copilot code reviewのカスタマイズ・設定機能の改善。

## できるようになったこと

- リポジトリ単位でCopilot coding agent / code reviewの活動を日次APIで取得可能に（GA）
- Copilot appの利用がメトリクスAPIに反映される
- Copilot code reviewの設定・カスタマイズがしやすくなった

## 影響範囲

- 対象ユーザー: Enterprise/Organization管理者、Copilot導入効果を計測したいエンジニアリングマネージャー
- 対象プラン: Copilot利用状況メトリクスポリシーが有効なEnterprise/Organization
- API / UI / 管理者機能: Copilot Metrics API（新エンドポイント）、Copilot code reviewの設定画面

## 教材化メモ

- リポジトリ単位メトリクスGAは、企業導入効果測定（ROI可視化）の実務教材として紹介価値が高い。既存のCopilot導入ガイドに追記候補。

## 原文確認

- 公式見出し: "Repository-level GitHub Copilot usage metrics generally available" ほか2件
- 公式URL: https://github.blog/changelog/2026-07-17-repository-level-github-copilot-usage-metrics-generally-available/ 、https://github.blog/changelog/label/copilot/
- 原文全文は公式ページで確認してください。
