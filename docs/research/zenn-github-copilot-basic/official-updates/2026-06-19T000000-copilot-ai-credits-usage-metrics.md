---
date: 2026-06-19
title: "GitHub Copilot: AI credits consumed per user がメトリクス API に追加"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-06-19-ai-credits-consumed-per-user-now-in-the-copilot-usage-metrics-api
fetched_at: 2026-06-20T15:32:13+09:00
published_at: 2026-06-19T00:00:00Z
date_precision: date-only
category: enhancement
---

# 2026-06-19 GitHub Copilot: AI credits consumed per user がメトリクス API に追加

## 公式内容の日本語要約

Copilot 使用状況メトリクス API に `ai_credits_used` フィールドが追加された。ユーザー単位の AI クレジット消費量を追跡でき、エンタープライズ・組織レベルで単日および 28 日間のレポートに対応する。コスト把握やチームの AI 採用状況の分析に活用できる。機能・モデル別の内訳ではなく総計のみで、請求データではなく分析用シグナルとして位置付けられている。

## できるようになったこと

- Copilot Usage Metrics API のレスポンスに `ai_credits_used` フィールドが追加
- ユーザー単位で1日分・28日間分の AI クレジット消費量を取得可能
- エンタープライズ・組織レベルのレポートに対応
- 既存の Usage Metrics API と同じエンドポイントで取得できる

## 影響範囲

- 対象ユーザー: Copilot Business・Enterprise 管理者
- 対象プラン: GitHub Copilot Business / Enterprise
- API / UI / 管理者機能: REST API（Usage Metrics API への追加フィールド）

## 教材化メモ

企業での Copilot 導入コスト管理の文脈で有用。AI クレジットは従量課金モデルの理解に繋がる。「AI クレジットとは何か」「どのアクションで消費されるか」という説明への導線になる。

## 原文確認

- 公式見出し: AI credits consumed per user now in the Copilot usage metrics API
- 公式URL: https://github.blog/changelog/2026-06-19-ai-credits-consumed-per-user-now-in-the-copilot-usage-metrics-api
- 原文全文は公式ページで確認してください。
