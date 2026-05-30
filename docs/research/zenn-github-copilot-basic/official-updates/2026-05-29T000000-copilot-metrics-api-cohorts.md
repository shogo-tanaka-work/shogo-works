---
date: 2026-05-29
title: "GitHub Copilot 利用メトリクス API に AI 採用フェーズ・コーホート機能追加 — 28 日利用パターンから 4 段階で分類、`ai_adoption_phase` / `totals_by_ai_adoption_phase` フィールド新設"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-05-29-copilot-usage-metrics-api-adds-cohorts-for-ai-adoption
fetched_at: 2026-05-30T14:30:00+09:00
published_at: 2026-05-29T00:00:00+00:00
date_precision: date-only
category: enhancement
---

# 2026-05-29 GitHub Copilot 利用メトリクス API コーホート対応

## 公式内容の日本語要約

GitHub は Copilot **利用メトリクス API** に **AI 採用フェーズ（adoption phase）コーホート** を追加した。エンゲージしているユーザーを **28 日間の利用パターン** から **4 つのフェーズ** に分類し、`ai_adoption_phase` フィールドと `totals_by_ai_adoption_phase` 配列で REST API レスポンスから取得できる。

フェーズは「code-first（コード中心）」から「multi-agent ワークフロー」までの成熟度を段階表現する。これにより組織は **単純なアクティビティカウント** ではなく **「Copilot をどこまで使いこなしているか」** を測定でき、enablement イニシアチブ（社内研修・支援投資）を効果的にターゲティングできる。

## できるようになったこと

- Enterprise 管理者・組織オーナーが REST API 経由で **チーム別の AI 採用成熟度** を集計できる。
- 各フェーズの利用者数を `totals_by_ai_adoption_phase` で取得し、社内ダッシュボード化できる。
- 「使用率」ではなく「**どんな使い方をしているか**」で内訳を把握でき、低フェーズユーザー向け研修や高フェーズユーザーの事例化に活用できる。

## 影響範囲

- 対象ユーザー: Copilot Enterprise / Business のメトリクス API 利用権限を持つ管理者
- 対象プラン: GitHub Copilot Enterprise / Business
- API / UI / 管理者機能: Copilot Usage Metrics API（REST）

## 教材化メモ

Copilot 管理者向け教材で **利用分析** の章があれば「単純な活用率」だけでなく **採用フェーズ別分析** を節追加。社内で Copilot ROI を経営層に説明するときの「成熟度視点」のメッセージを 1 段強化できる。data analytics 連携（BI ツール）の手順例にも組み込み可能。

## 原文確認

- 公式見出し: "Copilot usage metrics API adds cohorts for AI adoption"
- 公式URL: https://github.blog/changelog/2026-05-29-copilot-usage-metrics-api-adds-cohorts-for-ai-adoption
