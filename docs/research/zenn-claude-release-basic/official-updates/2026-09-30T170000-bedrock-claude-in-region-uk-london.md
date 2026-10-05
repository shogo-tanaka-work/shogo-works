---
date: 2026-09-30
title: "Amazon Bedrock の Claude in-region 推論が英国（ロンドン）へ拡大"
service: "Claude / Amazon Bedrock"
source: https://aws.amazon.com/about-aws/whats-new/2026/09/claude-region-expansion-lhr/
fetched_at: 2026-10-05T09:25:00+09:00
published_at: 2026-09-30T17:00:00Z
date_precision: timestamp
category: rollout
---

# 2026-09-30 Amazon Bedrock の Claude in-region 推論が英国（ロンドン）へ拡大

## 公式内容の日本語要約

AWS は 2026-09-30、**Amazon Bedrock の Claude モデルについて、英国（ロンドン、`eu-west-2`）での in-region 推論対応を拡大**したと告知した。対象は **Claude Opus 5.5 と Claude Sonnet 5** の2モデルで、ロンドンリージョンの `bedrock-runtime` エンドポイント経由で呼び出す。

公式の説明は「**Amazon Bedrock は呼び出したリージョン内で推論リクエストとデータを処理し、処理がそのリージョンから出ることはない**」である。想定利用者として**金融サービス、ヘルスケア、公共部門**を挙げており、英国内でのデータ処理要件を持つ組織向けの対応という位置づけになっている。

本件は 2026-09-29 のアジア太平洋向け告知（ソウル / シンガポールの in-region、インドの地理内クロスリージョン）に続く**同一プログラムのリージョン拡大**である。日本は現在も **in-region ではなく `jp.` プレフィックスの地理内クロスリージョン推論（東京・大阪間ルーティング）が主経路**で、新しい世代の Claude は東京の in-region 対応を持たない。英国と日本で「国内で処理される」の実現方式が異なる点が、データ所在地要件の説明では論点になる。

## できるようになったこと

- **ロンドン（`eu-west-2`）での Claude Opus 5.5 / Claude Sonnet 5 の in-region 推論**
- 推論リクエストとデータを英国内に留めたまま、現行世代の Claude を利用できる
- 呼び出しはロンドンの `bedrock-runtime` エンドポイント。モデルの対応状況は Bedrock ユーザーガイドのリージョン対応表が正本

## 影響範囲

- 対象ユーザー: 英国内でのデータ処理要件を持つ Bedrock 利用者（金融・ヘルスケア・公共部門）
- 対象プラン: Amazon Bedrock（追加の申込みに関する記載はなし）
- API / UI / 管理者機能: API（`bedrock-runtime`、ロンドンリージョン）

教材化メモ: src/content/ai-news-notes/claude/bedrock-in-region-inference-uk-london.mdx

## 原文確認

- 公式見出し: Amazon Bedrock expands Claude models in-region support in the UK (London)
- 公式URL: https://aws.amazon.com/about-aws/whats-new/2026/09/claude-region-expansion-lhr/
- 参考（日本の地理内クロスリージョン）: https://aws.amazon.com/blogs/machine-learning/introducing-amazon-bedrock-cross-region-inference-for-claude-sonnet-4-5-and-haiku-4-5-in-japan-and-australia/
- 原文全文は公式ページで確認してください。
