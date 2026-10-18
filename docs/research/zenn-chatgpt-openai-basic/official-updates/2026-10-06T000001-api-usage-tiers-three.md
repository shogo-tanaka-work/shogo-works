---
date: 2026-10-06
title: "API の利用ティアが5段階から3段階（Build / Launch / Grow）へ統合"
service: "OpenAI API"
source: https://developers.openai.com/api/docs/changelog
fetched_at: 2026-10-07T09:20:00+09:00
published_at: 2026-10-06
date_precision: date-only
category: policy
---

# 2026-10-06 API の利用ティアが3段階へ統合

## 公式内容の日本語要約

OpenAI が 2026-10-06 付の API changelog で、**有料の利用ティアを5段階から3段階へ統合した**と告知した。新しいティア名は **Build / Launch / Grow** で、組織の累計クレジット購入額が各ティアの下限に達すると**自動で昇格**する。手動の申請手続きはない。

rate limits ドキュメントに記載された条件は次の通りである。**Free**（対象地域のユーザー、月 $100 まで）、**Build**（累計購入 $5 / 月間利用上限 $500）、**Launch**（$100 / $5,000）、**Grow**（$500 / $200,000）。

レート上限はモデル系列ごとに示されている。Astra / Sol / Terra 系は Build が 5,000 RPM・1,000,000 TPM、Launch が 10,000 RPM・4,000,000 TPM、Grow が 15,000 RPM・40,000,000 TPM。Luna 系は Build が 5,000 RPM・2,000,000 TPM、Launch が 10,000 RPM・10,000,000 TPM、Grow が 30,000 RPM・180,000,000 TPM である。

**最上位ティアの到達条件が下がった点が実務上の変化である。** 従来の最上位は累計 $1,000 が条件だったが、新しい Grow は **$500** で到達する。段階が減ったことで、各段階の間の飛び幅（月間利用上限で $500 → $5,000 → $200,000）は大きくなっている。

## できるようになったこと

- **累計 $500 の購入で最上位 Grow に到達**できる（従来の最上位条件 $1,000 から半減）
- ティア構造が3段階になり、自社がどこにいるかの把握が単純になる

## 影響範囲

- 対象ユーザー: OpenAI API を使うすべての組織
- 対象プラン: API（Free を含む）
- API / UI / 管理者機能: 課金・レート上限（管理者が見る設定画面と請求計画に影響）

教材化メモ: src/content/ai-news-notes/chatgpt-openai/api-usage-tiers-three.mdx

## 原文確認

- 公式見出し: 「We simplified our usage tiers from five to three: Build, Launch, and Grow.」（2026-10-06 エントリ）
- 公式URL: https://developers.openai.com/api/docs/changelog 、https://developers.openai.com/api/docs/guides/rate-limits
- 原文全文は公式ページで確認してください。
