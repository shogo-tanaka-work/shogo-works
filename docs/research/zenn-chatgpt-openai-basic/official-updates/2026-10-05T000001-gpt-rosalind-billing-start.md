---
date: 2026-10-05
title: "GPT-Rosalind の課金が 2026-10-05 に開始（$5 / 1M 入力トークン）"
service: "OpenAI Platform (API) / GPT-Rosalind"
source: https://developers.openai.com/api/docs/changelog
fetched_at: 2026-10-06T09:40:00+09:00
published_at: 2026-09-08
date_precision: date-only
rollout_date: 2026-10-05
category: policy
---

# 2026-10-05 GPT-Rosalind の課金開始（発効日が窓内）

## 公式内容の日本語要約

OpenAI の API changelog の **2026-09-08 付エントリ**に、GPT-Rosalind の価格と課金開始日が明記されている。原文は「Standard pricing is $5 per 1M input tokens, $0.50 per 1M cached input tokens, and $25 per 1M output tokens. Billing begins on October 5, 2026.」である。

**発表日（2026-09-08）は窓外だが、課金開始日（2026-09-05 ではなく 2026-10-05）が本日の窓内に当たる**ため、`rollout_date` を立てて追補として記録する。

GPT-Rosalind は **trusted-access プログラム経由**で、**承認された社内のライフサイエンス研究目的**に限って提供されるモデルである。本リポジトリでは 2026-06-04 に機能面の発表を記録・記事化している（`2026-06-04T071500-gpt-rosalind-new-capabilities.md`）。今回は価格の発効のみで、機能面の変更ではない。

**提供範囲が trusted-access に限られるため、一般の読者が本日から影響を受けるものではない。** 価格の棚卸し項目として記録しておく性質の更新である。

## できるようになったこと

- （課金の発効）2026-10-05 から GPT-Rosalind が標準価格で課金される
- 価格: 入力 $5 / 1M トークン、キャッシュ入力 $0.50 / 1M トークン、出力 $25 / 1M トークン

## 影響範囲

- 対象ユーザー: trusted-access プログラムで承認されたライフサイエンス研究用途の組織のみ
- 対象プラン: OpenAI Platform（API）、trusted-access
- API / UI / 管理者機能: 課金（API）

## 教材化メモ

- **AIニュース記事化は見送った（スコア4）。** trusted-access 限定で、一般読者が触れられないモデルの価格発効であり、実務上の行動が発生しない。
- 教材で使うなら「価格ページと changelog のどちらが正本か」の例として使える。今回は**発表（09-08）から課金開始（10-05）まで約1か月のラグ**があり、発表時点のスクリーンショットを教材に貼ると「無料に見える」期間が残る。価格は日付つきで引用する、という原則の実例になる。
- 期限管理の観点では、**本日が発効日なので棚卸しは完了**であり、以降の引き継ぎは不要である。

## 原文確認

- 公式見出し: （2026-09-08 エントリ内）Standard pricing is $5 per 1M input tokens, ... Billing begins on October 5, 2026.
- 公式URL: https://developers.openai.com/api/docs/changelog
- 参考（機能面の既報、2026-06-04）: docs/research/zenn-chatgpt-openai-basic/official-updates/2026-06-04T071500-gpt-rosalind-new-capabilities.md
- 原文全文は公式ページで確認してください。
