---
date: 2026-09-29
title: "DevDay 2026: GPT-6.1 Sol 公開と高速ティア Ultrafast の新設"
service: "ChatGPT / OpenAI"
source: https://openai.com/index/devday-2026-recap/
fetched_at: 2026-09-30T09:40:00+09:00
published_at: 2026-09-29
date_precision: date-only
category: release
---

# 2026-09-29 DevDay 2026: GPT-6.1 Sol と Ultrafast

## 公式内容の日本語要約

**GPT-6.1 Sol** は GPT-6 Sol の上位更新で、公式表現では「**エージェント型コーディング、コンピュータ操作、専門業務において GPT-6 Astra の知能にほぼ並びながら、Astra の標準入出力トークン単価の5分の1**」とされる。前日（09-28）に GPT-6.1 Astra のリリース中止が報じられた直後の、下位ラインでの性能引き上げにあたる。

**Ultrafast** は新設の高速ティアである。**Codex で最大 300 トークン/秒（標準の約8倍）、API で最大6倍**の生成速度。単価は**標準の6倍で、入力 60 ドル / 出力 300 ドル（100万トークンあたり）**。現時点で **GPT-6 Astra Ultrafast が提供中、GPT-6.1 Sol Ultrafast は近日**とされる。ChatGPT 側では Pro 500 に同梱される。

Codex の stable リリース **0.159.1（2026-09-29T20:34:26Z）で、バンドルカタログおよび Amazon Bedrock Mantle / Runtime カタログの既定モデルが GPT-6.1 Sol に変更**されており、発表と実装が同日に揃っている。

## できるようになったこと

- Astra に近い性能を約5分の1の単価で使える選択肢が増えた
- 速度を金銭で買う軸（Ultrafast）が価格表に追加された

## 影響範囲

- 対象ユーザー: API 利用者、Codex 利用者、ChatGPT Pro 500
- 対象プラン: Ultrafast は標準の6倍単価
- API / UI / 管理者機能: モデル選定と原価試算の前提が変わる

教材化メモ: src/content/ai-news-notes/chatgpt-openai/gpt-6-1-sol-and-ultrafast-tier.mdx

## 原文確認

- 公式見出し: DevDay 2026 Recap
- 公式URL: https://openai.com/index/devday-2026-recap/
- 既定モデル変更の一次情報: https://github.com/openai/codex/releases/tag/rust-v0.159.1
- **制約**: `openai.com` 403。単価と倍率は検索経由の報道（the-decoder、AlphaSignal、DEV Community）で突き合わせた。
