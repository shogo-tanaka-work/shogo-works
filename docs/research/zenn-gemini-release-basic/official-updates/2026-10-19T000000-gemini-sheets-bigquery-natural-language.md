---
date: 2026-10-19
title: "Gemini in Google Sheets で BigQuery データを自然言語で分析"
service: "Gemini / Workspace"
source: http://workspaceupdates.googleblog.com/2026/10/analyze-bigquery-data-using-natural-language-with-Gemini-in-Google-Sheets.html
fetched_at: 2026-10-20T09:10:00+09:00
published_date: 2026-10-19
date_precision: date-only
category: release
---

# 2026-10-19 Gemini in Sheets × BigQuery

## 公式内容の日本語要約

BigQuery に接続した Connected Sheets のスプレッドシートで、Gemini サイドパネルから**自然言語で BigQuery データに問い合わせ**できるようになった。クエリはシートに表示された行ではなく **BigQuery のデータセット全体**に対して実行される。フォローアップの質問ができ、Gemini はピボットテーブル、グラフ、データベース数式など**接続された更新可能なオブジェクト**でダッシュボードを組み立てる。

要件はシートが BigQuery に接続済みで、利用者に接続先データのクエリ権限があること。**既定でオン、管理者向けの個別制御はない**と明記されている。ロールアウトは Rapid Release / Scheduled Release ドメインで 2026-10-19 開始、反映まで最大15日。対象は Business Standard / Plus、Enterprise Standard / Plus、Google AI Pro / Ultra、Google AI Pro for Education、AI Expanded Access。リージョンと利用上限の記載はない。

教材化メモ: src/content/ai-news-notes/gemini/gemini-sheets-bigquery-natural-language.mdx

## できるようになったこと

- シートを開いたまま、全件データに自然言語で質問できる
- 結果を更新可能なピボット・グラフ・数式として残せる

## 影響範囲

- 対象ユーザー: Connected Sheets で BigQuery を使う利用者
- 対象プラン: 上記エディション
- API / UI / 管理者機能: Gemini サイドパネル。管理者の個別制御なし

## 原文確認

- 公式見出し: Analyze BigQuery data using natural language with Gemini in Google Sheets
- 公式URL: http://workspaceupdates.googleblog.com/2026/10/analyze-bigquery-data-using-natural-language-with-Gemini-in-Google-Sheets.html
- 原文全文は公式ページで確認してください。
