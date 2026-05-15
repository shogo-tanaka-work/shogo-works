---
date: 2026-05-14
title: "Team-level Copilot usage metrics now available via API"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-05-14-team-level-copilot-usage-metrics-now-available-via-api/
fetched_at: 2026-05-15T10:18:28+09:00
published_date: 2026-05-14
date_precision: date-only
category: enhancement
---

# 2026-05-14 Team-level Copilot usage metrics API

## 公式内容の日本語要約

GitHub Copilot usage metrics APIに、Copilot licensed userとteam membershipを対応付けるuser-teams reportが追加された。既存のper-user usage reportとjoinすることで、enterprise administratorやorganization ownerはteam単位でactive users、completions、chats、language、IDE、feature、model別の利用状況を集計できる。

## できるようになったこと

- `user-teams-1-day` reportをREST APIで取得できる。
- enterprise / organization単位でteam別のCopilot利用状況を集計できる。
- 小規模team除外や複数team所属ユーザーの重複カウントなどの注意点が明示された。

## 影響範囲

- 対象ユーザー: Copilot Enterprise / Business管理者、billing manager、enablement担当
- 対象プラン: Enterprise / Organization
- API / UI / 管理者機能: REST API / metrics / governance

## 教材化メモ

AI導入効果測定の教材で、個人別ではなくteam別に採用度・活用差を可視化する例として使える。small team exclusionと重複カウント注意は必ず説明する。

## 原文確認

- 公式見出し: Team-level Copilot usage metrics now available via API
- 公式URL: https://github.blog/changelog/2026-05-14-team-level-copilot-usage-metrics-now-available-via-api/
- 原文全文は公式ページで確認してください。
