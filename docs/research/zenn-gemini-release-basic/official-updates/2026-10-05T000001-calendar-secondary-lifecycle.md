---
date: 2026-10-05
title: "セカンダリカレンダーが所有者アカウントのライフサイクルに追従（削除・停止が連動）"
service: "Google Workspace / Google Calendar"
source: https://workspaceupdates.googleblog.com/2026/10/secondary-calendars-will-now-follow-the-lifecycle-of-their-owner.html
fetched_at: 2026-10-06T09:40:00+09:00
published_at: 2026-10-05
date_precision: date-only
rollout_date: 2026-10-05
category: policy
---

# 2026-10-05 セカンダリカレンダーが所有者アカウントのライフサイクルに追従

## 公式内容の日本語要約

Google は 2026-10-05、**Workspace アカウントのセカンダリカレンダー（個人用以外）が、所有者アカウントのライフサイクルに追従する**よう挙動を変更したと告知した。**所有者のアカウントが削除されると、その所有するセカンダリカレンダーも削除され、所有者が停止（suspend）されるとセカンダリカレンダーも停止される。** プライマリカレンダーと同じ挙動に揃えたという位置づけである。

公式が挙げている理由は組織のデータガバナンスで、「**すべてのセカンダリカレンダーが、そのデータに適用される組織の設定とポリシーを決める有効な所有者に紐づく**」状態にするためと説明している。

**退職者処理の手順に直接影響する。** 所有者の削除・停止の前にカレンダーを残したい場合は、**事前に別ユーザーへ所有権を移管する必要がある。** 管理者は管理コンソールまたは Calendar API の `transferOwnership` で、利用者は Calendar の設定画面から移管できる。

ロールアウトは 2026-10-05 開始の extended rollout で、全機能が見えるまで15日を超える可能性があると明記されている。

## できるようになったこと

- （挙動変更）所有者アカウントの削除でセカンダリカレンダーも削除、停止で停止
- 残したいカレンダーは事前に所有権移管が必要（管理コンソール / Calendar API `transferOwnership` / ユーザーの Calendar 設定）

## 影響範囲

- 対象ユーザー: 全 Google Workspace 利用者、Workspace Individual 契約者。管理者と利用者の双方
- 対象プラン: 全エディション + Workspace Individual
- API / UI / 管理者機能: 管理者機能（管理コンソール）、API（Calendar `transferOwnership`）、UI（Calendar 設定）
- ロールアウト: 2026-10-05 開始、extended rollout（15日超の可能性）

教材化メモ: src/content/ai-news-notes/gemini/calendar-secondary-lifecycle.mdx

## 原文確認

- 公式見出し: Secondary calendars will now follow the lifecycle of their owner
- 公式URL: https://workspaceupdates.googleblog.com/2026/10/secondary-calendars-will-now-follow-the-lifecycle-of-their-owner.html
- 原文全文は公式ページで確認してください。
