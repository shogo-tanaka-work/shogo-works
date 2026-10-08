---
date: 2026-10-07
title: "Claude Sonnet 5.5 のプロンプトキャッシュ読み取りが $0.20 → $0.10 へ半額"
service: "Claude / Claude Platform"
source: https://platform.claude.com/docs/en/release-notes/api
fetched_at: 2026-10-08T09:30:00+09:00
published_at: 2026-10-07
date_precision: date-only
category: policy
---

# 2026-10-07 Sonnet 5.5 のキャッシュ読み取りが半額

## 公式内容の日本語要約

Claude Sonnet 5.5 のプロンプトキャッシュ読み取り（cache hits and refreshes）単価が、100万トークンあたり **$0.20 から $0.10 へ引き下げられた。** 基準入力価格に対する倍率が 0.1x から **0.05x** になったということである。キャッシュ書き込み（5分 $2.50 / 1時間 $4.00）とその他の価格（入力 $2 / 出力 $10）は変わらない。

**倍率 0.05x は現在 Claude Opus 5.5 と Claude Sonnet 5.5 だけに適用される。** 他モデルは標準の 0.1x で、Claude Fable 5.1 と Claude Mythos 5.1 はさらに低い 0.025x である。Opus 5.5 のキャッシュ読み取りは $0.20、Sonnet 5.5 が今回 $0.10 になった。

公式ドキュメントの説明では、キャッシュが元を取るタイミングは「5分キャッシュ（書き込み 1.25x）なら読み取り1回、1時間キャッシュ（書き込み 2x）なら読み取り2回」とされている。読み取り単価が半分になったことで、**同じ会話でキャッシュを読む回数が多いワークロードほど効果が大きい。** 長いシステムプロンプトや大きなドキュメントを前置して何度も問い合わせる構成、エージェントの多ターン実行が該当する。

倍率は Batch API の割引やデータレジデンシーの倍率と**積算される。**

## できるようになったこと

- Sonnet 5.5 でキャッシュを多用する構成のトークン費用が、読み取り分に限り半分になる
- Opus 5.5 とのキャッシュ読み取り単価差が $0.20 対 $0.10 になり、モデル振り分けの判断材料が変わる

## 影響範囲

- 対象ユーザー: Claude API で Sonnet 5.5 とプロンプトキャッシュを使う開発者
- 対象プラン: Claude API（first-party）、Claude Platform on AWS。パートナー運用の Bedrock / Google Cloud は各社の価格体系
- API / UI / 管理者機能: 課金のみ。コード変更は不要

教材化メモ: src/content/ai-news-notes/claude/sonnet-5-5-cache-read-price-cut.mdx

## 原文確認

- 公式見出し: "We've lowered the price of prompt cache reads on Claude Sonnet 5.5 from $0.20 USD to $0.10 USD per million tokens"
- 公式URL: https://platform.claude.com/docs/en/release-notes/api
- 併記: https://platform.claude.com/docs/en/about-claude/pricing#prompt-caching
- 原文全文は公式ページで確認してください。
