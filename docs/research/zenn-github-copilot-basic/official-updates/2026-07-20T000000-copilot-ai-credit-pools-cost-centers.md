---
date: 2026-07-20
title: "GitHub Copilot — コストセンター向けAIクレジットプールを課金UIから直接管理可能に"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-07-20-ai-credit-pools-for-cost-centers-in-the-billing-ui/
fetched_at: 2026-07-21T15:55:00+09:00
published_at: 2026-07-20T00:00:00Z
date_precision: date-only
category: enhancement
---

# 2026-07-20 GitHub Copilot AIクレジットプール（コストセンター）課金UI対応

## 公式内容の日本語要約

これまでREST API経由でしか設定できなかった「コストセンター単位のAIクレジットプール管理」が、GitHub課金UIから直接設定できるようになった。コストセンター作成・編集時にAIクレジットプールのON/OFFを切り替え可能。プール上限は割り当てられたライセンス数から自動計算され、ライセンスの増減に応じて自動調整される。上限到達時の挙動（利用ブロック／超過分を追加課金として許可）も設定できる。コストセンター予算とは独立して動作し、両方を同一コストセンターに併用設定できる。

## できるようになったこと

- 課金UIからコストセンターごとのAIクレジットプールをON/OFF・上限設定
- ライセンス数変動に応じたプール上限の自動再計算
- プール上限到達時の挙動（ブロック／オーバーエイジ許可）の選択
- コストセンター予算とAIクレジットプールの併用設定

## 影響範囲

- 対象ユーザー: GitHub Enterprise Cloud上でコストセンターを運用する管理者
- 対象プラン: Copilot Business、Copilot Enterprise（GitHub Enterprise Cloudのみ）
- API / UI / 管理者機能: 課金UI（コストセンター設定）、既存のREST APIとの併用可

## 教材化メモ

組織内でCopilot利用コストを部門別に分配・上限管理したいケースの実務Tipsとして紹介できる。API専用機能がUI化された事例として、Copilot導入企業のコスト管理フローの教材に使える。

## 原文確認

- 公式見出し: AI credit pools for cost centers in the billing UI
- 公式URL: https://github.blog/changelog/2026-07-20-ai-credit-pools-for-cost-centers-in-the-billing-ui/
- 原文全文は公式ページで確認してください。
