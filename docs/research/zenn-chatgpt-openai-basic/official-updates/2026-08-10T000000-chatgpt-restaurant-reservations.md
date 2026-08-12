---
date: 2026-08-10
title: "ChatGPT がレストラン予約に対応（OpenTable / Resy / Yelp）"
service: "ChatGPT / OpenAI"
source: https://help.openai.com/en/articles/6825453-chatgpt-release-notes
fetched_at: 2026-08-12T10:05:00+09:00
published_at: 2026-08-10
date_precision: date-only
category: release
---

# 2026-08-10 ChatGPT のレストラン予約

## 公式内容の日本語要約

ChatGPT が OpenTable / Resy / Yelp と連携し、空いているレストランの予約枠を探して予約できるようになった。

チャットで場所と日時、人数、料理の種類・予算・食事制限・雰囲気などの希望を伝えると、空き時間が応答の中に直接表示される。追加の質問で候補を絞り込んだり、特定の店を確認したりもできる。都合の良い時間を選ぶとその場で予約が確定する。

提供範囲はモバイル / Web / デスクトップの全 ChatGPT プランへのロールアウトである。予約サービス側の対応地域は分かれており、OpenTable はグローバル、Resy は米国、Yelp は米国とカナダとなる。

ChatGPT Work にはレストラン予約検索が含まれない。

なお本項目は 2026-08-11 の巡回時点では release notes に掲載されておらず、同日の更新で追加されたため、2026-08-12 の窓で確認して追補した。

## できるようになったこと

- チャットから空きのあるレストラン予約枠を検索し、その場で予約できる
- 料理の種類・予算・食事制限・雰囲気などの条件で絞り込める
- モバイル / Web / デスクトップの全 ChatGPT プランで利用できる

## 影響範囲

- 対象ユーザー: ChatGPT の個人利用者（ChatGPT Work は対象外）
- 対象プラン: 全 ChatGPT プラン。予約サービスは OpenTable がグローバル、Resy が米国、Yelp が米国・カナダ
- API / UI / 管理者機能: チャット UI

## 教材化メモ

- 予約という「外部で不可逆に確定する操作」を AI が実行する例として扱える。承認モードや human-in-the-loop の話をするとき、コード実行より直感的に伝わる題材になる。
- ChatGPT Work が対象外である点は、消費者向け機能と業務向け機能の線引きの実例。業務利用の教材で「ChatGPT でできること」を一括で説明すると誤りになる。
- 予約サービスごとに対応地域が違うため、日本の読者向けには OpenTable のみが実用範囲になる。国内向け教材でそのまま紹介すると再現できない受講者が出る。

## 原文確認

- 公式見出し: Restaurant reservations in ChatGPT（August 10, 2026）
- 公式URL: https://help.openai.com/en/articles/6825453-chatgpt-release-notes
- 原文全文は公式ページで確認してください。
