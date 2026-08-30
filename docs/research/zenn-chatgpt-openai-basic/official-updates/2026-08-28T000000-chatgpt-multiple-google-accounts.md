---
date: 2026-08-28
title: "ChatGPT で Gmail / Google カレンダー / Google 連絡先の複数アカウント接続に対応"
service: "ChatGPT / OpenAI"
source: https://help.openai.com/en/articles/6825453-chatgpt-release-notes
fetched_at: 2026-08-30T09:10:00+09:00
published_at: 2026-08-28
date_precision: date-only
category: release
---

# 2026-08-28 ChatGPT が複数の Google アカウント接続に対応

## 公式内容の日本語要約

2026-08-28 の ChatGPT リリースノートで、**Gmail / Google カレンダー / Google 連絡先プラグインについて、複数のアカウントを同時に接続できる**ようになったと発表された。

これまでは各プラグインにつき1アカウントしか接続できず、**個人用と仕事用の Google アカウントを併用している利用者は、どちらか一方を選ぶか、都度つなぎ替える**必要があった。今回の変更で、両方を同じ会話へ持ち込めるようになる。

公式が挙げているユースケースは2つ。**複数のカレンダーをまとめて見て1日の予定を組む**ことと、**接続済みの複数の受信箱をまたいでメールを探す**ことである。

提供範囲は明確に書かれている。**グローバル提供**で、対象は **Plus / Pro / Business / Enterprise の対応プラン**。プラットフォームは **web / デスクトップ / iOS / Android** である。

## できるようになったこと

- Gmail・Google カレンダー・Google 連絡先の各プラグインで、**複数の Google アカウントを同時接続**できる
- 1つの会話の中で、**個人用と業務用のカレンダー／受信箱を横断**して照会できる

## 影響範囲

- 対象ユーザー: Google プラグインを使う ChatGPT 利用者
- 対象プラン: Plus / Pro / Business / Enterprise（対応プランのみ）
- API / UI / 管理者機能: UI 側のプラグイン接続設定。Business / Enterprise では、どの Google アカウントの接続を許すかが管理者の統制対象になりうる

教材化メモ: src/content/ai-news-notes/chatgpt-openai/chatgpt-multiple-google-accounts.mdx

## 原文確認

- 公式見出し: August 28, 2026 — Connect multiple Google accounts to ChatGPT
- 公式URL: https://help.openai.com/en/articles/6825453-chatgpt-release-notes
- 補足: `help.openai.com` は WebFetch が不安定なため Exa 経由で本文を取得した。
- 原文全文は公式ページで確認してください。
