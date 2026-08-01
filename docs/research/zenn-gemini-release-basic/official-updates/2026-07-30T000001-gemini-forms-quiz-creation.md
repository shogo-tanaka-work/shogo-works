---
date: 2026-07-30
title: "Google Forms の Gemini でクイズを生成できる（Drive のファイルを出典に指定可能）"
service: "Gemini / Workspace"
source: https://workspaceupdates.googleblog.com/2026/07/use-gemini-in-google-forms-to-quickly-create-a-new-quiz.html
fetched_at: 2026-07-31T11:55:00+09:00
published_at: 2026-07-30
date_precision: date-only
category: rollout
rollout_date: 2026-07-24
---

# 2026-07-30 Google Forms の Gemini によるクイズ生成

## 公式内容の日本語要約

Google Forms の「Help me create」機能が、プロンプト指定によるクイズ生成に対応した。Google Drive 上のファイル（ドキュメント、スライド、PDF）を出典として参照させることができ、適切な設定と正解が入った状態のクイズが生成される。対応する設問形式は multiple choice、grid、checkboxes、grid question types。

ロールアウトは段階的で、Rapid Release ドメインは 2026-07-24 から、Scheduled Release ドメインは 2026-08-05 から開始し、それぞれ全ユーザーへの反映まで最大15日かかる。

対象エディションは Business Standard / Plus、Enterprise Standard / Plus、Education Plus、および一般向けの Google AI Pro / Ultra。Education 向けアドオンとして Google AI Pro for Education、Teaching and Learning も対象。

管理者は Admin console で「smart features and personalization」を有効にする必要がある。これは Workspace アプリ内の Gemini 機能全般へのアクセス条件。

## できるようになったこと

- Google Forms の「Help me create」でプロンプトからクイズを生成できる
- Drive 上のドキュメント / スライド / PDF を出典として参照させられる
- 正解と設定が入った状態で生成される
- multiple choice / grid / checkboxes / grid question types に対応

## 影響範囲

- 対象ユーザー: 対象エディションの Workspace ユーザー、および Google AI Pro / Ultra
- 対象プラン: Business Standard/Plus、Enterprise Standard/Plus、Education Plus、Google AI Pro / Ultra、Google AI Pro for Education、Teaching and Learning
- API / UI / 管理者機能: Forms UI。管理者は Admin console の「smart features and personalization」を有効化する必要がある
- ロールアウト: Rapid Release 2026-07-24 開始、Scheduled Release 2026-08-05 開始（各最大15日）

## 教材化メモ

- 社内研修・eラーニングの理解度テスト作成が対象業務。既存の教材ドキュメントを出典に指定できる点が実務的で、「教材を作る → テストを作る」の後半を自動化できる
- 管理者の「smart features and personalization」有効化が前提条件になっている点は、Workspace の Gemini 機能全般に共通する構造。個別機能ごとではなく1つの設定で決まることを教材で明示したい
- Scheduled Release ドメインは 2026-08-05 開始なので、企業環境では「まだ出ていない」ケースがある。ロールアウトの2系統の違いを説明する例として使える

## 原文確認

- 公式見出し: Use Gemini in Google Forms to quickly create a new quiz
- 公式URL: https://workspaceupdates.googleblog.com/2026/07/use-gemini-in-google-forms-to-quickly-create-a-new-quiz.html
- 原文全文は公式ページで確認してください。
