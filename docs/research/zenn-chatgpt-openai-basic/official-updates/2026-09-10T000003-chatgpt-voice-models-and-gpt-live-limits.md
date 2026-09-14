---
date: 2026-09-10
title: "ChatGPT Voice のモデル選択と GPT-Live 利用上限を刷新、Instant/Medium/High は非推奨へ"
service: "ChatGPT / OpenAI"
source: https://help.openai.com/en/articles/6825453-chatgpt-release-notes
fetched_at: 2026-09-12T09:20:00+09:00
published_date: 2026-09-10
date_precision: date-only
category: policy
---

# 2026-09-10 ChatGPT Voice のモデル選択と GPT-Live 利用上限を刷新

教材化メモ: src/content/ai-news-notes/chatgpt-openai/chatgpt-voice-models-and-gpt-live-limits.mdx

## 公式内容の日本語要約

ChatGPT Voice が、検索や難しい推論が必要なときに **GPT-5.6 または GPT-6 Astra を使えるようになりました**。モデルと reasoning effort は、テキストチャットと同じコントロールで選びます。選べるモデルと利用上限はプランに依存します。

あわせて **GPT-Live の日次利用上限が整理** されました。

- **Go**: GPT-Live-1 mini で最大3時間（従来の GPT-Live-1 アクセスを置き換え）
- **Plus**: GPT-Live-1 で最大3時間
- **Pro（$100/月）**: GPT-Live-1 で最大15時間
- **Pro（$200/月）**: GPT-Live-1 無制限

**Plus と Pro は、Voice の上限に達した後に GPT-Live mini へ切り替わる挙動がなくなりました。**

そして最も影響が大きい変更として、**Instant / Medium / High という Voice の intelligence レベルが非推奨（deprecated）になりました。** モデル選択が通常のモデルピッカーへ統合されたことに伴う整理です。

## できるようになったこと

- ChatGPT Voice でのモデル選択（GPT-5.6 / GPT-6 Astra）と reasoning effort 指定
- プラン別に整理された GPT-Live 日次上限（Go 3h/mini、Plus 3h、Pro $100 15h、Pro $200 無制限）

## 変わって困りうること

- **Instant / Medium / High の Voice intelligence レベルが非推奨**。この3段階を前提にした手順書・教材は書き換えが必要
- Go の GPT-Live-1 アクセスが **GPT-Live-1 mini へ置き換え**
- Plus / Pro の上限到達後の mini フォールバックが廃止（上限に達したら止まる）

## 影響範囲

- 対象ユーザー: ChatGPT Voice 利用者全般
- 対象プラン: Go / Plus / Pro（$100・$200）で上限が異なる
- API / UI / 管理者機能: UI（Voice のモデル選択コントロール）とプラン別上限

## 原文確認

- 公式見出し: Updated models and usage limits in ChatGPT Voice（September 10, 2026）
- 公式URL: https://help.openai.com/en/articles/6825453-chatgpt-release-notes
- 補助: https://help.openai.com/en/articles/20001274-chatgpt-voice
- 原文全文は公式ページで確認してください。
