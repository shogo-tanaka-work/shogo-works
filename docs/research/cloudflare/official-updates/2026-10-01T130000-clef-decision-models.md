---
date: 2026-10-01
title: "Clef — Cloudflare 初のオープンソース decision models と RL ファインチューニング基盤"
service: "Workers AI"
product: "Workers AI"
source: https://blog.cloudflare.com/clef-decision-models/
fetched_at: 2026-10-02T09:11:00+09:00
published_at: 2026-10-01T13:00:00Z
date_precision: timestamp
category: release
---

# 2026-10-01 Clef（オープンソース decision models）

## 公式内容の日本語要約

Cloudflare が、分類とエージェントのワークフローに特化した **decision models**（判断モデル）の系列 **Clef** を公開した。decision models は自由文を返すのではなく、**確率付きの型付き回答**（typed answers with probabilities）を返すモデルで、エージェントが人間の確認を挟まずにプログラム的な分岐を行うことを目的とする。

モデルは2つ。**Clef**（Qwen 27B ベース、精度重視）と **Clef-flash**（Qwen 9B ベース、レイテンシ重視）。いずれも **64k コンテキスト**で、**画像分類用の vision encoder を内蔵**する（公式は競合 Jev との差分としてこの点を挙げている）。**両モデルは Apache 2.0 で完全にオープンソース化**され、Hugging Face で配布されるとともに **Workers AI でホスト提供**される。

公式が示した数値は、**Jev Decision Index ベンチマークで首位**、レイテンシ中央値が **Clef 209.3ms / Clef-flash 38.8ms**（Jev は 524.1ms）。

あわせて **強化学習（RL）によるファインチューニング製品**が発表された。当初は forward-deployed engineer チームによるハンズオン提供で、将来はセルフサービス化し「データ取得 → ファインチューニング → 再デプロイ」を Cloudflare 上で完結できるようにするとしている。

価格は本発表では未開示である。

## できるようになったこと

- 確率付きの型付き出力を返す分類・判断専用モデルを Workers AI から呼べる
- Apache 2.0 のため自前ホスティング・改変・商用利用が可能
- 画像を含む入力の分類が同じモデルで扱える（vision encoder 内蔵）
- 自社データでの RL ファインチューニング（当初は伴走型提供）

## 影響範囲

- 対象ユーザー: Workers AI 利用者、エージェントの分岐判断を実装する開発者
- 対象プラン: Workers AI（価格未開示）。Hugging Face からの自前利用は無償
- API / UI / 管理者機能: Workers AI のモデル指定

教材化メモ: src/content/ai-news-notes/cloudflare/clef-open-source-decision-models.mdx

## 原文確認

- 公式見出し: Introducing Clef: our open-source decision models, and new RL fine-tuning platform
- 公式URL: https://blog.cloudflare.com/clef-decision-models/
- changelog: https://developers.cloudflare.com/changelog/post/2026-10-01-clef-workers-ai/
- 原文全文は公式ページで確認してください。
