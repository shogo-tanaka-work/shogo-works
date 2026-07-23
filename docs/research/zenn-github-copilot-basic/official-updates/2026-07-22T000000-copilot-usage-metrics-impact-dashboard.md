---
date: 2026-07-22
title: "GitHub Copilot — 利用状況インパクトダッシュボードを新設（AI活用フェーズ別分析）"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-07-22-new-copilot-usage-metrics-impact-dashboard/
fetched_at: 2026-07-23T21:00:00+09:00
published_at: 2026-07-22T00:00:00Z
date_precision: date-only
category: enhancement
---

# 2026-07-22 GitHub Copilot usage metrics impact dashboard

## 公式内容の日本語要約

GitHub Copilotの管理者向けに、新しい「利用状況インパクトダッシュボード」が公開された。単純なアクティブユーザー数ではなく、Copilot利用状況APIで既に提供されているAI活用フェーズ分類（Code-first / Agent-first / Multi-agent・Copilotアプリ / Passive）ごとに、月間PRマージ数、PRマージ速度の中央値、フェーズ内ユーザー数・シェア、1日あたりコード行数などの指標をカード表示する。アクティブ/パッシブユーザーの比較を示す「adoption multiplier」、6か月トレンドチャート、活用度を高めるための推奨アクションも含まれる。既存のCopilot usage metrics API（28日ローリングウィンドウのai_adoption_phase分類）を土台にした可視化機能。

## できるようになったこと

- 組織のCopilot利用者をAI活用フェーズ別（4区分）でダッシュボード表示
- フェーズごとのPRマージ数・速度・コード行数などの指標を可視化
- 6か月トレンドと活用度向上のための推奨アクションを表示

## 影響範囲

- 対象ユーザー: GitHub Copilot Enterprise管理者・Organization owner
- 対象プラン: Enterprise管理機能
- API / UI / 管理者機能: 管理コンソールのダッシュボードUI（既存Copilot usage metrics APIのデータを利用）

## 教材化メモ

Copilot導入効果の可視化は組織導入まわりの教材で使える。「アクティブ人数だけでなく活用フェーズの深さを見る」という指標設計の考え方は、AI導入効果測定の文脈で紹介価値がある。

## 原文確認

- 公式見出し: New Copilot usage metrics impact dashboard
- 公式URL: https://github.blog/changelog/2026-07-22-new-copilot-usage-metrics-impact-dashboard/
- 原文全文は公式ページで確認してください。
