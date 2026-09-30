---
date: 2026-09-29
title: "DevDay 2026: Private Intelligence — ZDR + Private Safety Processing が提供開始、Private Inference は今秋"
service: "ChatGPT / OpenAI"
source: https://openai.com/index/devday-2026-recap/
fetched_at: 2026-09-30T09:40:00+09:00
published_at: 2026-09-29
date_precision: date-only
category: policy
---

# 2026-09-29 DevDay 2026: Private Intelligence

## 公式内容の日本語要約

**Private Intelligence** は、OpenAI のゼロデータ保持（ZDR）まわりの取り組みをまとめた上位の枠組みである。中身は2層に分かれる。

1層目が **Zero Data Retention with Private Safety Processing**。**OpenAI の担当者が内容そのものへアクセスしないまま自動の安全審査を行う**。暗号化された安全記録は**顧客が管理するストレージ**に置かれ、**ハードウェアで構成証明（attestation）されたランタイム**の中で審査される。**これは提供開始済み**。

2層目が **Private Inference**（今秋予定）。推論——モデルが回答を生成する瞬間——を**コンフィデンシャルコンピューティング**上で走らせる。データをハードウェアのエンクレーブに封じ、**クラウド事業者自身も開けない**状態にしたうえで、検証可能な制御を掛ける。

**当リポジトリでは 2026-08-19 付で Private Safety Processing のプレビューを既に記事化している**（`src/content/ai-news/chatgpt-openai/zero-data-retention-private-safety-processing.md`）。当時「2026年9月に段階的提供開始」とされていた予定が**実際に提供開始まで到達**し、さらに Private Inference が上に積まれた、という関係になる。

## できるようになったこと

- ZDR を維持したまま自動安全審査を受けられる（提供開始済み）
- 推論自体をエンクレーブ内で実行する選択肢が予告された（今秋）

## 影響範囲

- 対象ユーザー: データ持ち出し制約で最新モデルの採用を見送っていた企業
- 対象プラン: API / エンタープライズ
- API / UI / 管理者機能: 情シス・法務のレビュー項目が変わる

教材化メモ: src/content/ai-news-notes/chatgpt-openai/private-intelligence-and-private-inference.mdx

## 原文確認

- 公式見出し: DevDay 2026 Recap
- 公式URL: https://openai.com/index/devday-2026-recap/
- 既存記事: src/content/ai-news/chatgpt-openai/zero-data-retention-private-safety-processing.md（2026-08-19）
- **制約**: `openai.com` 403。内容は検索経由の報道（VentureBeat、Superpower Daily、Decrypt）で突き合わせた。
