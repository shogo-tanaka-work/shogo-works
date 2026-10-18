---
date: 2026-10-05
title: "Google Sheets に株価チャート（HLC / OHLC）が追加、Excel 相互運用も改善"
service: "Google Workspace / Google Sheets"
source: https://workspaceupdates.googleblog.com/2026/10/use-stock-charts-in-sheets-to-better-visualize-price-movements.html
fetched_at: 2026-10-06T09:40:00+09:00
published_at: 2026-10-05
date_precision: date-only
rollout_date: 2026-10-05
category: release
---

# 2026-10-05 Google Sheets に株価チャート（HLC / OHLC）が追加

## 公式内容の日本語要約

Google は 2026-10-05、**Google Sheets に HLC（High-Low-Close）と OHLC（Open-High-Low-Close）の株価チャート**を追加したと告知した。複数の価格ポイントを1つのマーカーへ畳み込むため、**複数の折れ線を読み分けるのではなく、証券の取引レンジ全体を一目で読める**ようになる。

あわせて **Excel との相互運用が改善**し、「Excel と Sheets の間でファイルを移動しても株価チャートが正確に保持される」と明記されている。Excel から取り込んだときにチャートを手で作り直す作業がなくなる。

想定利用者として株式・コモディティを追う**財務アナリスト**を挙げている。管理コントロールは無く、利用者側の設定も不要。

**AI / エージェント要素は無い更新である。** 本リポジトリの巡回では Workspace の機能追加として記録するが、AIニュース記事化の判断は別途スコアで行う。

## できるようになったこと

- Sheets で HLC / OHLC の株価チャートを作成・編集できる
- Excel ⇔ Sheets のファイル往復で株価チャートが保持される

## 影響範囲

- 対象ユーザー: 全 Google Workspace 利用者と個人 Google アカウント利用者
- 対象プラン: 全エディション + 個人アカウント
- API / UI / 管理者機能: UI（Sheets）。管理コントロールなし
- ロールアウト: Rapid Release は 2026-10-05 開始、Scheduled Release は 2026-10-22 開始。いずれも最大15日の段階展開

## 教材化メモ

- **AIニュース記事化は見送った（スコア5）。** 財務アナリスト向けのチャート種別追加で、AI / エージェント要素が無く、本サイトの読者層（AI活用・業務改善）への影響が薄い。
- 教材で使えるとすれば「Excel 互換性の話」の素材としてである。Sheets と Excel の往復でオブジェクトが壊れる・壊れないは、業務でのツール選定の実務論点になりやすい。チャートが保持対象に加わったという事実だけ、既存の Workspace 教材に1行入れる余地がある。
- Gemini 連携の話ではないため、AI 教材側へ持ち込む必要はない。

## 原文確認

- 公式見出し: Use stock charts in Sheets to better visualize price movements
- 公式URL: https://workspaceupdates.googleblog.com/2026/10/use-stock-charts-in-sheets-to-better-visualize-price-movements.html
- 原文全文は公式ページで確認してください。
