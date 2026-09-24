---
date: 2026-09-23
title: "OpenAI Status: ChatGPT の Plus / Pro でエラー率上昇（Degraded performance）"
service: "ChatGPT / OpenAI"
source: https://status.openai.com/incidents/01M36RMC01ZFWQ861WYJKC4XE1
fetched_at: 2026-09-24T09:40:00+09:00
published_at: 2026-09-23T05:13:00Z
date_precision: timestamp
category: incident
---

# 2026-09-23 ChatGPT Plus / Pro のエラー率上昇

## 公式内容の日本語要約

OpenAI Status に 2026-09-23 05:13 UTC（日本時間 14:13）、**ChatGPT の Plus / Pro プランでエラー率が上昇**するインシデントが登録された。ステータスは `Identified`、影響区分は `Degraded performance`、影響コンポーネントは ChatGPT の1件。公式の更新は「利用者がエラー増加に直面していることを特定した。緩和策の実装に取り組んでいる」という1件のみで、当環境から取得した時点（発生から約22分後の記録）では解消告知は出ていなかった。

2026-09-24 09:40 JST 時点のステータストップは `We're fully operational`（全系統正常）を表示しており、当該インシデントはアクティブな障害一覧に残っていない。ChatGPT の直近3か月の稼働率は 99.62%。

短時間の incident であるため、`daily-ai-update-monitor` の規約どおりAIニュース記事化はせず、日次サマリーと本メモに記録する。

## できるようになったこと

- 該当なし（障害記録）

## 影響範囲

- 対象ユーザー: ChatGPT の Plus / Pro 利用者
- 対象プラン: Plus / Pro
- API / UI / 管理者機能: API 側コンポーネントへの影響は登録されていない

## 教材化メモ

- **「AI を業務フローに組み込むなら、提供側の稼働率を前提条件として明示する」**という運用設計の材料。ChatGPT の3か月稼働率は 99.62%、API 側は 99.93%。同じベンダーでも面によって水準が違う。
- **障害時のフォールバックを決めておく**話に接続できる。今回のように Plus / Pro だけが劣化するケースでは、API 経由の別導線や別ベンダーへ切り替えられる設計かどうかで業務停止の有無が変わる。

## 原文確認

- 公式見出し: Elevated Error Rates for ChatGPT across Plus and Pro plans.
- 公式URL: https://status.openai.com/incidents/01M36RMC01ZFWQ861WYJKC4XE1
- 補助: https://status.openai.com/
- 原文全文は公式ページで確認すること。
