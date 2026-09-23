---
date: 2026-09-22
title: "Google Meet「Take notes for me」の新しい既定値が 2026-09-29 に発効。Business Standard / Plus は ON 既定"
service: "Gemini / Workspace"
source: http://workspaceupdates.googleblog.com/2026/09/new-google-meet-take-notes-for-me-settings-for-admins-and-end-users-take-effect-September-29th.html
fetched_at: 2026-09-23T09:10:00+09:00
published_at: 2026-09-22
date_precision: date-only
rollout_date: 2026-09-29
category: policy
---

# 2026-09-22 Google Meet「Take notes for me」既定値の発効告知

## 公式内容の日本語要約

Google は 2026-09-22、Google Meet の AI 自動議事録機能「**Take notes for me**」について、**管理者・エンドユーザー双方の新しい設定が 2026-09-29 に発効する**と告知した。2026-07 に予告されていた変更の、発効日を確定させる続報である。

**変更の中身は選択肢の追加である。** これまで管理者は自動議事録を「全会議で有効」か「無効」かの二択でしか設定できなかった。ここに**第3の選択肢として「参加者3人以上の会議でのみ有効」**が加わる。1対1の面談やコーチングを自動記録の対象から外したい、という運用に対応するものである。

**発効時の既定値がプランによって分かれる点が、この告知の要点である。**

- **Business Standard / Business Plus: ON が既定**
- Enterprise Standard / Enterprise Plus / Frontline Plus / Google AI Pro for Education: **OFF が既定**

つまり Business Standard / Plus の組織は、**何もしなければ 2026-09-29 から自動議事録が有効側へ倒れる。** 公式は、意図と違う場合は発効日より前に Admin console で設定を変更するよう求めている。Gemini Alpha プログラムの参加組織は、現在の設定状態を確認するよう別途案内されている。

エンドユーザー側にも同じ「3人以上のみ」の選択肢が提供される。既定値は 2026-09-29 に適用され、その後は各自で上書きできる。

ロールアウトは Rapid Release / Scheduled Release とも 2026-09-29 開始の extended rollout である。

## できるようになったこと

- 自動議事録の有効範囲を「参加者3人以上の会議のみ」に絞れる（管理者・利用者の双方）

## 影響範囲

- 対象ユーザー: Google Meet で Gemini の自動議事録が使える全組織
- 対象プラン: Business Standard / Plus、Enterprise Standard / Plus、Frontline Plus、Google AI Pro for Education
- API / UI / 管理者機能: **管理者の作業が期限付きで発生する。Business Standard / Plus は 2026-09-29 までに Admin console を確認しないと既定 ON になる**

教材化メモ: src/content/ai-news-notes/gemini/meet-take-notes-defaults.mdx

## 原文確認

- 公式見出し: New Google Meet 'Take notes for me' settings for admins and end users take effect September 29th
- 公式URL: http://workspaceupdates.googleblog.com/2026/09/new-google-meet-take-notes-for-me-settings-for-admins-and-end-users-take-effect-September-29th.html
- 先行告知（2026-07）: https://workspaceupdates.googleblog.com/2026/07/new-google-meet-take-notes-for-me-settings-for-admins-and-end-users.html
- 原文全文は公式ページで確認してください。
