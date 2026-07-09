---
date: 2026-07-07
title: "Cost Centerのユーザー単位予算設定が課金UIに対応"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-07-07-per-user-budgets-for-cost-centers-in-the-billing-ui
fetched_at: 2026-07-09T15:42:00+09:00
published_at: 2026-07-07T17:09:29Z
date_precision: timestamp
category: enhancement
---

# 2026-07-07 Cost Centerのユーザー単位予算設定が課金UIに対応

## 公式内容の日本語要約

これまでREST API経由でしか設定できなかったCost Center内のユーザー単位AIクレジット予算が、課金UI上で直接設定できるようになった。エンタープライズチームや個人ユーザーをCost Centerに追加し、単一のユーザー単位予算を設定すればメンバー全員に自動適用され、チーム構成が変わっても手動再設定が不要になる。

## できるようになったこと

- 課金UIからCost Centerへのエンタープライズチーム/個人ユーザー追加
- 単一のユーザー単位予算設定によるメンバー全員への自動適用
- チームメンバー変更時の予算自動追従

## 影響範囲

- 対象ユーザー: GitHub Enterprise Cloudの管理者
- 対象プラン: Enterprise Cloud
- API / UI / 管理者機能: 課金UI（従来はREST APIのみ）

## 教材化メモ

- API専用機能がUI化される流れは「まずAPIで検証、需要が確認されたらUI化」という機能展開パターンの実例として使える。

## 原文確認

- 公式見出し: "Per-user budgets for cost centers in the billing UI"
- 公式URL: https://github.blog/changelog/2026-07-07-per-user-budgets-for-cost-centers-in-the-billing-ui
- 原文全文は公式ページで確認してください。
