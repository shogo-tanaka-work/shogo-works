---
date: 2026-07-02
title: "Cost centerがAIクレジットプールの利用上限設定に対応"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-07-02-cost-centers-now-support-included-usage-caps
fetched_at: 2026-07-05T16:43:00+09:00
published_at: 2026-07-02
date_precision: date-only
category: enhancement
---

# 2026-07-02 Cost centerがAIクレジットプールの利用上限設定に対応

## 公式内容の日本語要約

Cost center単位でAIクレジットの月間利用上限をREST API経由で設定できる機能が追加された（UI管理は近日対応予定）。上限はCopilot Business/Enterpriseライセンス割当数に基づき自動算出され、特定グループが共有クレジットプールを使い尽くすのを防ぐ。既存のCost center予算・従量課金機能と併用できる。

## できるようになったこと

- Cost center単位でAIクレジットの月間利用上限をREST APIから設定
- 上限はライセンス割当数に基づき自動算出
- 特定グループによる共有クレジットプールの独占を防止
- 既存のCost center予算・従量課金設定と併用可能

## 影響範囲

- 対象ユーザー: 大規模組織のAIコスト管理担当者
- 対象プラン: Copilot Business / Enterprise
- API / UI / 管理者機能: REST APIでの上限設定（UI管理は未対応、近日提供予定）

## 教材化メモ

- 「AI利用コストの部門別統制」という組織運用テーマの実例。コスト管理担当者向け教材で、クレジットプールの予算管理手法として紹介できる。

## 原文確認

- 公式見出し: "Cost centers now support included usage caps"
- 公式URL: https://github.blog/changelog/2026-07-02-cost-centers-now-support-included-usage-caps
- 原文全文は公式ページで確認してください。
