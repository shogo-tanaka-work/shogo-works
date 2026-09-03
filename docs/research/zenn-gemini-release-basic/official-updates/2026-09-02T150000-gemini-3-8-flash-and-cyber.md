---
date: 2026-09-02
title: "Gemini 3.8 Flash と Gemini 3.8 Flash Cyber を公開"
service: "Gemini"
source: https://blog.google/innovation-and-ai/models-and-research/gemini-models/3-8-flash-and-3-8-flash-cyber/
fetched_at: 2026-09-03T09:20:00+09:00
published_at: 2026-09-02T15:00:00Z
date_precision: timestamp
category: release
---

# 2026-09-02 Gemini 3.8 Flash と Gemini 3.8 Flash Cyber

## 公式内容の日本語要約

Google が Gemini 3.8 を公開した。3.7 Flash から3週間、**6週間で3回目の Flash リリース**である。3.7 と同じ速度・同じ低コストのまま、推論とコーディングを引き上げたと位置づけている。

変種は2つ。**Gemini 3.8 Flash** は汎用の主力モデルで、ソフトウェアエンジニアリング、エージェント的タスク、専門領域の多段推論が 3.7 Flash から改善している。**Gemini 3.8 Flash Cyber** は脆弱性発見と自動パッチに特化したモデルで、後述の Fairwind Program 経由で「信頼された防御側」にのみ提供される。両者は**同じ基盤知能**を共有し、モデルを再帰的に評価・改良する長時間のエージェントループで加速させたとしている。コーディングと推論の向上は、**サイバーセキュリティという要求の厳しい領域での訓練**によって駆動されたと明言している。

3.8 Flash のベンチマークは、DeepSWE v1.1（長期ホライズンのソフトウェアエンジニアリング）で多くのより大きなフロンティアモデルを上回り、HLE-Verified で 54.9%、Vals Finance Agent V2 と Harvey's Legal Agent Benchmark でも 3.7 Flash と他のフロンティアモデルを上回る。

性能向上の理由として「**3.8 Flash はより多く働く**」と説明している。複雑なタスクでは推論ステップを追加し、ツールを反復的に呼ぶ。**特に高い effort 水準では、性能を最大化するためにトークンを多く使うことがある**。計算効率が第一の制約になる用途では、effort を下げるか、引き続きサポートされる 3.7 Flash を使うよう案内している。

3.8 Flash Cyber 側は、CyberGym で 3.5 Flash Cyber と大幅に大きなフロンティアモデルの双方を上回り、20言語にまたがる社内ベンチマークで**成功率70%超**。パッチ生成は CWE-Bench で **pass@1 47.2%**（先行フロンティアモデルは 47.8%）を大幅に低いコストで達成した。実運用では Chrome Security チームが「はるかに大きい商用モデルより 2.6 倍多くの正しいパッチ」を得たと報告している。安全性では、CBRN とサイバー攻撃領域の悪用対策を組み込み、Gray Swan の評価でプロンプトインジェクション耐性が大きく向上したとしている。

## できるようになったこと

- **Gemini 3.8 Flash**: 導入価格は 3.7 Flash と同じ **$0.75 / 100万入力トークン、$3.75 / 100万出力トークン**。導入価格は **2026-12-31 まで**で、以後は $1.50 / $7.50 の標準価格
- 提供先: **Google Antigravity、Google AI Studio、Android Studio、Gemini Enterprise、Gemini アプリ（Pro / Ultra 加入者）、Google 検索の AI Mode**
- effort 水準を下げてトークン消費を抑える運用が可能。効率優先のワークロードは 3.7 Flash を継続利用してよい
- **Gemini 3.8 Flash Cyber**: 自律的な脆弱性発見と自動パッチ。**Fairwind Program 経由で信頼された防御側にのみ提供**（一般提供ではない）

## 影響範囲

- 対象ユーザー: API / AI Studio 利用の開発者、Gemini アプリの Pro / Ultra 加入者、Gemini Enterprise 利用組織。Cyber 版は Fairwind 参加組織のみ
- 対象プラン: Gemini アプリは Pro / Ultra。API は従量課金
- API / UI / 管理者機能: モデル ID の追加。既存の 3.7 Flash は継続サポート

教材化メモ: src/content/ai-news-notes/gemini/gemini-3-8-flash-and-cyber.mdx

## 原文確認

- 公式見出し: Introducing Gemini 3.8 Flash and 3.8 Flash Cyber
- 公式URL: https://blog.google/innovation-and-ai/models-and-research/gemini-models/3-8-flash-and-3-8-flash-cyber/
- 原文全文は公式ページで確認してください。
