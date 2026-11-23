---
date: 2026-11-18
title: "GitHub Copilot - 新モデル4系列の追加（GPT-6.2 Astra / Sol、MAI Code 2 / 2 Flash、Gemini 4 Neon）と Fusion の拡張"
service: "GitHub Copilot"
source: https://github.blog/changelog/label/copilot/
fetched_at: 2026-11-23T09:35:00+09:00
published_at: 2026-11-17 / 2026-11-18
date_precision: date-only
category: release
---

# GitHub Copilot - 新モデルの追加と Fusion の拡張

## 公式内容の日本語要約

窓内で4系列のモデルが Copilot へ入った。いずれも usage-based billing のプロバイダー定価課金で、Business / Enterprise は管理者がモデルポリシーでアクセスを制御する。

**GPT-6.2 Astra / GPT-6.2 Sol（2026-11-17、GA）**。どちらもエージェント型コーディングとコードレビュー向け。公式は初期テストで**従来の GPT-6 系より少ないトークンで実際の不具合をより多く検出した**としている。Astra はエージェント型コーディングとターミナル作業、Sol は複雑なエージェント型コーディングと踏み込んだレビューが対象。Pro+ / Max / Business / Enterprise で段階展開。

**MAI Code 2 / MAI Code 2 Flash（2026-11-17）**。Microsoft AI の次世代コーディングモデル。MAI Code 2 は深いデバッグ、複数ファイル変更、リファクタリングのような複雑な作業向けの汎用モデル。MAI Code 2 Flash は説明・限定編集・簡易修正のような日常作業向けの軽量・低コスト版。**MAI Code 2 は Pro 以上、Flash は Free / Student プランでも利用可**。年額プラン加入者も対象。

**Gemini 4 Neon（2026-11-18、GA）**。エージェント型コーディングと多段ツール利用向け。Google の報告として、**Gemini 4 Carbon に近い性能をより低いトークンコストで出し、応答が速く、依頼していないコード変更が少ない**としている。Pro+ / Max / Business / Enterprise で段階展開。

**Copilot Fusion の拡張（2026-11-17）**。Fusion が公開 Terminal-Bench 4.1 リーダーボードに掲載された。**Fusion Max は解決率 71.2%** で、公式は「フロンティアモデル2種より 5.4 ポイント高く、コストは 57〜88% 低い」としている。提供面は github.com、Visual Studio、GitHub Mobile ベータアプリへ拡大（モバイル本番対応は近日）。構成モデルの追加は Fusion Max に Claude Sonnet 5.5、Fusion High に GPT-6.1 Terra、Fusion Standard に MAI-Code-2。

## 影響範囲

- 対象ユーザー: Copilot 全プラン（Flash は Free / Student も）
- 対象プラン: Pro+ / Max / Business / Enterprise が中心。MAI Code 2 Flash のみ Free / Student を含む
- API / UI / 管理者機能: Business / Enterprise はモデルポリシーでの有効化が必要。課金は usage-based billing のプロバイダー定価

## 教材化メモ

単独記事化はしない（週次ソースのため）。ベンチマーク値はいずれもベンダー自己申告であり、Fusion Max の 71.2% は Terminal-Bench 4.1 という単一ベンチ上の値である点を、モデル比較を教える際の注意として添える。

## 原文確認

- 公式見出し: "OpenAI's GPT-6.2 Astra and GPT-6.2 Sol now available" / "MAI Code 2 and MAI Code 2 Flash in GitHub Copilot" / "Gemini 4 Neon in GitHub Copilot" / "GitHub Copilot Fusion updates: more availability, benchmarks, and models"
- 公式URL: https://github.blog/changelog/2026-11-17-openais-gpt-6-2-astra-and-gpt-6-2-sol-now-available 、https://github.blog/changelog/2026-11-17-mai-code-2-and-mai-code-2-flash-in-github-copilot 、https://github.blog/changelog/2026-11-18-gemini-4-neon-in-github-copilot 、https://github.blog/changelog/2026-11-17-github-copilot-fusion-updates-more-availability-benchmarks-and-models
- 原文全文は公式ページで確認してください。
