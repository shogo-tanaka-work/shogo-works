---
date: 2026-09-25
title: "Usage metrics API に PR レビューの3段階の所要時間を追加。過去分の backfill は無く 2026-09-25 から積み上げ"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-09-25-usage-metrics-api-adds-pull-request-review-stages
fetched_at: 2026-09-28T09:40:00+09:00
published_at: 2026-09-25
date_precision: date-only
category: enhancement
---

# 2026-09-25 Usage metrics API に PR レビュー段階

## 公式内容の日本語要約

Copilot の Usage metrics API の `repos-1-day` エンドポイントに **`pull_request_review_times` 配列**が追加された。

メタデータは `authored_by` と `reviewed_by`（**現時点では `human` のみ**）、`total_merged`（当日マージされた対象 PR 数）。所要時間は**分単位**で、3段階それぞれの median と p90 が入る。

- `median_minutes_ready_to_first_review` / `p90_minutes_ready_to_first_review`
- `median_minutes_first_to_final_review` / `p90_minutes_first_to_final_review`
- `median_minutes_final_review_to_merge` / `p90_minutes_final_review_to_merge`

公式告知は分割の意図を **「待ち時間を3段階に分けると、PR が誰かに見てもらうのを待っているのか、レビュアー間のやり取りを待っているのか、承認済みでマージされずに置かれているのかが分かる」**と説明している。

**注意点が3つある。** (1) **人間のレビューのみが対象で、bot と Copilot のレビューは除外**される。(2) **データは 2026-09-25 から前向きに積み上がり、過去分の backfill は無い。** (3) 対象マージが無い日は空配列になる。

**既存の `pull_requests` フィールドは変更されず、破壊的変更は無い。**

## できるようになったこと

- PR の「レビュー着手待ち」「レビュー往復」「承認後マージ待ち」の3段階を median / p90 で取得

## 影響範囲

- 対象ユーザー: Usage metrics API を使う組織・エンタープライズの管理者
- 対象プラン: enterprise / organization の該当権限が必要
- API / UI / 管理者機能: `repos-1-day` エンドポイントへのフィールド追加（破壊的変更なし）

## 教材化メモ

- **backfill が無い**のが実務上いちばん効く。**今日から取り始めないと、来月「先月と比べる」ができない。** 計測の追加は、**気づいた時点で有効化するだけで価値が確定する**類の作業である。後回しの機会損失が分かりやすい例。
- **bot と Copilot のレビューが除外されている**点は解釈に直結する。Copilot にレビューさせている組織では、**この指標は「人間の待ち時間」しか見ていない。** 指標の定義を確認せずに「レビューが速くなった」と結論づける失敗の型として使える。
- **3段階への分解**そのものが、ボトルネック分析の教材になる。合計時間だけでは打ち手が決まらない。**承認後マージ待ちが長いなら、レビュアーを増やしても何も改善しない。**

## 原文確認

- 公式見出し: Usage metrics API adds pull request review stages
- 公式URL: https://github.blog/changelog/2026-09-25-usage-metrics-api-adds-pull-request-review-stages
- 原文全文は公式ページで確認してください。
