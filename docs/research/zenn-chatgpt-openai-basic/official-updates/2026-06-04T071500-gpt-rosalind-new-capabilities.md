---
date: 2026-06-04
title: "GPT-Rosalind に新機能 — 創薬・ライフサイエンス特化モデルの強化と Rosalind 生体防御プログラム"
service: "OpenAI / GPT-Rosalind"
source: https://openai.com/index/introducing-new-capabilities-to-gpt-rosalind/
fetched_at: 2026-06-04T11:40:00+09:00
published_at: 2026-06-04T07:15:00+09:00
date_precision: timestamp
category: release
---

# 2026-06-04 GPT-Rosalind 新機能

## 公式内容の日本語要約

OpenAI が、ライフサイエンス／創薬特化モデル **GPT-Rosalind** の能力強化を発表。GPT-5.5 のエージェント的コーディング・ツール利用能力を取り込みつつ、医薬化学・ゲノミクスなど中核領域でのモデル知能を高め、ライフサイエンス全般（分析・設計・実験ワークフロー）の性能を底上げした。あわせて trusted developer 向けの「Rosalind 生体防御（Biodefense）プログラム」を立ち上げた。

※ openai.com は WebFetch/curl を 403 でブロックするため、本メモは WebSearch 経由の公式要約と二次報道（VentureBeat / FierceBiotech / TechTarget 等）で内容確認。原文確認は公式 URL を参照。

## できるようになったこと

- GPT-5.5 のエージェント的コーディング・ツール利用を統合し、医薬化学・ゲノミクス・定量生物学・ウェットラボのトラブルシュートで性能向上。
- ベンチマーク:
  - MedChemBench: GPT-Rosalind 27.5% vs GPT-5.5 25.1%、かつトークン 7.2% 削減。
  - GeneBench: 精度 21.6%、トークンは GPT-5.5 比 31% 削減。
- **Rosalind 生体防御プログラム**: trusted developer に GPT-Rosalind へのアクセスを提供。疫学モデリング・早期検知・スクリーニング・備え・非医薬的介入など公衆衛生領域を支援。

## 影響範囲

- 対象ユーザー: 製薬・バイオ・ライフサイエンス研究者、生体防御に取り組む trusted developer。
- 対象プラン: 限定アクセスモデル（trusted access）。一般提供ではない。
- API / UI / 管理者機能: モデル能力（研究ワークフロー向け）。

## 教材化メモ

特化モデル（GPT-5.5-Cyber 等）の系譜に GPT-Rosalind を追加。「汎用モデル＋ドメイン特化＋エージェント能力」の組み合わせ例として整理。一般企業・個人読者には直接の利用機会は薄いが、OpenAI のドメイン特化モデル戦略の動向として押さえる。

## 原文確認

- 公式見出し: Introducing new capabilities to GPT-Rosalind
- 公式URL: https://openai.com/index/introducing-new-capabilities-to-gpt-rosalind/
- 参考（初出）: https://openai.com/index/introducing-gpt-rosalind/
- 原文全文は公式ページで確認してください（openai.com はサーバー直アクセス不可、ブラウザで確認）。
