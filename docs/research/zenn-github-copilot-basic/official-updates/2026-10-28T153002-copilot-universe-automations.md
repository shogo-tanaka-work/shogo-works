---
date: 2026-10-28
title: "GitHub Universe 2026: Copilot Automations が共有化・自己改善・コスト上限へ"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-10-28-build-shared-workflows-for-your-team-with-copilot-automations
fetched_at: 2026-11-02T09:40:00+09:00
published_at: 2026-10-28T15:30:00Z
date_precision: timestamp
category: release
---

# 2026-10-28 GitHub Universe 2026: Copilot Automations が共有化・自己改善・コスト上限へ

## 公式内容の日本語要約

**共有 Automations の展開開始。** これまで automations は個人のもので、本人しか見えず編集できず、本人の ID と AI クレジットを使っていた。共有版では、**リポジトリの read 権限がある全員が見え、write 権限がある全員が編集でき、AI クレジットはリポジトリの所有者（organization またはユーザー）に課金され、Copilot として動作する。**

**トリガー・ツール・コスト統制の拡充。** (1) **GitHub REST API からトリガーできる**ようになり、外部システム（Jira、Sentry、PagerDuty 等）の webhook を受けて automation を起動できる。(2) issues / pull requests などの **GitHub イベント24種**を追加し、automation を多段に連鎖できる。(3) **GitHub ツール20種を追加し、カスタム MCP サーバーのツールも接続できる。** (4) **AI クレジットの上限を run / 日 / 週 / 月の単位で設定できる。**

**自己改善。** automation が GitHub 上の実際の成果（適用したラベルが人に変えられたか、レビューコメントが受け入れられたか、開いた PR がマージされたか）をシグナルとして使い、**自分のプロンプトへの改善案を出す。** 変更は必ず利用者のレビューを経てから適用される。Copilot に依頼すると、レビュー用・改善提案用など連携する automation 群をまとめて作れる。

**VS Code からクラウド automations を作成・管理できる。** VS Code を閉じていても個人のスケジュール実行が続き、GitHub 上のイベントに反応する個人 automation も組める。VS Code 1.144 以降 + `chat.automations.cloud.enabled` の有効化が必要。

## 影響範囲

- 対象ユーザー: Copilot 有料プラン、リポジトリ単位の共有
- 課金: 共有 automation の AI クレジットはリポジトリ所有者に課金。run / 日 / 週 / 月の上限設定あり

## 教材化メモ

記事化しない（週次ソースの巡回記録）。**自動化が「個人の便利」から「リポジトリの資産」へ移った**のが要点で、課金主体が本人からリポジトリ所有者に移ることと、write 権限があれば誰でも編集できることが同時に起きる。**権限と課金が連動する設計なので、共有化の前に「誰が write を持っているか」の棚卸しが必要**になる。自己改善ループは、プロンプトを人が書き続けない運用の実例として教材価値が高い（提案は必ずレビューを経る、という歯止めの置き方も含めて）。

## 原文確認

- 公式URL: https://github.blog/changelog/2026-10-28-build-shared-workflows-for-your-team-with-copilot-automations 、https://github.blog/changelog/2026-10-28-new-tools-triggers-and-cost-controls-for-copilot-automations 、https://github.blog/changelog/2026-10-28-copilot-automations-now-learn-from-outcomes-and-self-improve 、https://github.blog/changelog/2026-10-28-create-and-manage-copilot-automations-in-visual-studio-code
- 原文全文は公式ページで確認してください。
