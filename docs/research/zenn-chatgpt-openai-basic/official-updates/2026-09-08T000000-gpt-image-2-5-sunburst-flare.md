---
date: 2026-09-08
title: "GPT Image 2.5 Sunburst / GPT Image 2.5 Flare を API に追加"
service: "OpenAI API（画像生成）"
source: https://developers.openai.com/api/docs/changelog
fetched_at: 2026-09-09T09:02:00+09:00
published_at: 2026-09-08T00:00:00Z
date_precision: date-only
category: release
---

# 2026-09-08 GPT Image 2.5 Sunburst / Flare

## 公式内容の日本語要約

OpenAI は API changelog の 2026-09-08 付エントリで、画像生成モデル **GPT Image 2.5 Sunburst** と **GPT Image 2.5 Flare** の2種を公開した。いずれも **Image API** と **Responses API の image generation tool** の両方から利用できる。

2モデルは用途で使い分ける前提で提示されている。**Sunburst は編集精度を優先するワークフロー向け**、**Flare は日常的な画像生成を高速かつ高品質にこなす用途向け**である。単一モデルの後継ではなく、精度側と速度側に振った2本立てという構成になっている。

品質設定として新たに **`xhigh` と `max`** が両モデルで使えるようになった。課金は **GPT Image 2 と同じトークンレート**を用いると明記されている。個別の価格表と実装詳細は image generation guide と pricing ページ側を参照する形で、changelog 本文には数値が載っていない。

## できるようになったこと

- 画像生成で **Sunburst（編集精度重視）と Flare（高速・日常用途）を選択**できる
- **Image API と Responses API の image generation tool の両方**から呼べる
- 品質設定 **`xhigh` / `max`** を指定できる
- 課金は **GPT Image 2 のトークンレートを踏襲**（新レート体系ではない）

## 影響範囲

- 対象ユーザー: OpenAI API で画像生成を実装している開発者
- 対象プラン: API 利用者（changelog にプラン限定の記載なし）
- API / UI / 管理者機能: API のみ。ChatGPT 側 UI への反映は本エントリでは言及されていない

教材化メモ: src/content/ai-news-notes/chatgpt-openai/gpt-image-2-5-sunburst-flare.mdx

## 原文確認

- 公式見出し: New image generation models（2026-09-08 エントリ）
- 公式URL: https://developers.openai.com/api/docs/changelog
- 原文全文は公式ページで確認してください。
