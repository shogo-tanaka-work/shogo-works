---
date: 2026-09-29
title: "Amazon Bedrock が Claude の単一リージョン推論をソウル・シンガポールへ、インドは地理内クロスリージョンで提供開始"
service: "Claude (Amazon Bedrock)"
source: https://aws.amazon.com/blogs/machine-learning/introducing-anthropic-models-on-amazon-bedrock-for-in-region-inference-in-seoul-and-singapore/
fetched_at: 2026-10-04T09:35:00+09:00
published_at: 2026-09-29T00:00:00Z
date_precision: date-only
category: rollout
---

# 2026-09-29 Bedrock の Claude 単一リージョン推論（ソウル / シンガポール）とインド展開

> 2026-10-04 の日次実行で**追補**として記録。公開は 2026-09-29 で窓（10-03T00:10Z 〜 10-04T00:10Z）の外だが、本日まで記録が無かったため追加した。

## 公式内容の日本語要約

AWS は 2026-09-29、**Amazon Bedrock で Claude の「単一リージョン推論（in-region inference）」をソウルとシンガポールで提供開始**したと発表した。対象は **ソウル（ap-northeast-2）で Claude Opus 5 と Claude Sonnet 5**、**シンガポール（ap-southeast-1）で Claude Sonnet 5**。

**単一リージョン推論は、クロスリージョン推論プロファイルとは別の仕組みである。** 公式は「リクエストは指定した単一の AWS リージョン内で完全に処理され、そのリージョンから出ない」「ルーティング層が存在しない」と明記している。**交換条件も明記されている。スループットはそのリージョンの容量に縛られ、リクエストはリージョン単位のサービスクォータの対象になる。** 課金は呼び出したリージョンのオンデマンド価格、クォータ消費・CloudWatch メトリクス・CloudTrail ログもすべて同一リージョンにスコープされる。

**同日、インド向けの展開も発表された。** こちらは単一リージョンではなく**地理内クロスリージョン推論（geographic cross-Region inference）**で、**ムンバイとハイデラバードの間**で **Claude Opus 5 / Claude Sonnet 5 / Claude Haiku 4.5** を利用できる。

**想定利用者として、公式は金融サービス・ヘルスケア・公共部門を挙げている。** データを特定の地理内で処理する要件を持つ組織が、スケールさせながら推論を国内に留められるという位置づけである。

**日本リージョン（ap-northeast-1）は、この発表に含まれていない。** AWS の公式ドキュメント上、日本向けには「JP（東京・大阪）の地理内クロスリージョン推論」と global ルートが新しい Claude 世代の主経路であり、モデルごとの可否はリージョン互換性の公式表で確認が必要である。

## できるようになったこと

- **ソウル（ap-northeast-2）で Claude Opus 5 / Claude Sonnet 5 の単一リージョン推論**
- **シンガポール（ap-southeast-1）で Claude Sonnet 5 の単一リージョン推論**
- **インド（ムンバイ・ハイデラバード）で Claude Opus 5 / Sonnet 5 / Haiku 4.5 の地理内クロスリージョン推論**
- 単一リージョン推論では、クォータ・CloudWatch メトリクス・CloudTrail ログが呼び出しリージョンにスコープされる

## 影響範囲

- 対象ユーザー: データ所在地要件を持つ組織（公式は金融 / ヘルスケア / 公共部門を明示）。韓国・シンガポール・インドに拠点やデータを置く案件
- 対象プラン: Amazon Bedrock のオンデマンド（呼び出しリージョンの価格）
- API / UI / 管理者機能: Bedrock のモデル呼び出し経路、サービスクォータ、CloudWatch / CloudTrail のスコープ

教材化メモ: src/content/ai-news-notes/claude/bedrock-in-region-inference-apac.mdx

## 原文確認

- 公式見出し: `Introducing Anthropic models on Amazon Bedrock for in-region inference in Seoul and Singapore`
- 公式URL: https://aws.amazon.com/blogs/machine-learning/introducing-anthropic-models-on-amazon-bedrock-for-in-region-inference-in-seoul-and-singapore/
- AWS What's New（インド / 韓国 / シンガポール）: https://aws.amazon.com/about-aws/whats-new/2026/09/claude-region-expansion-in-sk/
- リージョン互換性の公式表: https://docs.aws.amazon.com/bedrock/latest/userguide/models-region-compatibility.html
- 原文全文は公式ページで確認してください。
