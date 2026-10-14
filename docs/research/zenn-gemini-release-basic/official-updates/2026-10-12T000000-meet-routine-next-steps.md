---
date: 2026-10-12
title: "Google Meet の会議終了画面に routine next steps。Gemini と Workspace Studio でフォローアップメール下書きと Tasks への行動項目書き出しを1タップ自動化"
service: "Google Meet / Google Workspace"
source: https://workspaceupdates.googleblog.com/2026/10/find-your-routine-next-steps-on-post-meeting-screen-in-Google-Meet.html
fetched_at: 2026-10-13T09:20:00+09:00
published_at: 2026-10-12
date_precision: date-only
rollout_date: 2026-10-05
category: enhancement
---

# 2026-10-12 Google Meet の routine next steps

## 公式内容の日本語要約

Google Meet の**会議終了画面（post-meeting screen）に「Routines for this meeting」セクション**が追加され、会議後の定型作業を1タップで自動化できるようになった。公式は **Gemini と Workspace Studio による機能**と明記している。

初期提供される next step は2種類。**(1) Gmail でフォローアップメールの下書きを作る、(2) 行動項目（action items）を Google Tasks へ書き出す。** 今後追加予定があるとされている。

適用は単発会議にも定期会議にも効き、**自分のすべての会議へ一括適用**もできる。**前提条件として、会議中に「Take notes for me」が有効になっている必要がある**（有効でないと next steps が出ない）。

対象エディションは Business Standard / Plus、Enterprise Standard / Plus、教育向けは Google AI Pro for Education アドオン。

**既定で有効（on by default）**であり、管理者はドメイン単位・OU 単位・グループ単位で、Workspace Studio の管理設定または Take Notes for Me の設定からオフにできる。

ロールアウトは Rapid Release と Scheduled Release の両ドメインが対象で、**extended rollout が 2026-10-05 に開始**している。機能の可視化には15日以上かかる場合があると明記されている。

## できるようになったこと

- 会議終了直後の画面から、フォローアップメール下書きと Tasks への行動項目書き出しを1タップで起動できる
- 定期会議や自分の全会議に対して、next step を既定の動作として適用できる
- 管理者はドメイン / OU / グループ単位で無効化できる

## 影響範囲

- 対象ユーザー: Google Meet 利用者（Take notes for me が有効な会議）
- 対象プラン: Business Standard / Plus、Enterprise Standard / Plus、Google AI Pro for Education
- API / UI / 管理者機能: Meet の会議終了画面 UI。管理者は Workspace Studio 管理設定 / Take Notes for Me 設定で制御

教材化メモ: src/content/ai-news-notes/gemini/workspace-meet-routine-next-steps.mdx

## 原文確認

- 公式見出し: Find your routine next steps on the post-meeting screen in Google Meet
- 公式URL: https://workspaceupdates.googleblog.com/2026/10/find-your-routine-next-steps-on-post-meeting-screen-in-Google-Meet.html
- 原文全文は公式ページで確認してください。
