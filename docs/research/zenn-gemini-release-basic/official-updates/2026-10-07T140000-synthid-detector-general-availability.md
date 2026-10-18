---
date: 2026-10-07
title: "SynthID Detector が誰でも使える単独プラットフォームとして公開（OpenAI / NVIDIA / Kakao 対応）"
service: "Google DeepMind / SynthID"
source: https://blog.google/innovation-and-ai/models-and-research/google-deepmind/synth-id-ai-content/
fetched_at: 2026-10-08T09:30:00+09:00
published_at: 2026-10-07T14:00:00Z
date_precision: timestamp
---

# 2026-10-07 SynthID Detector の一般公開

## 公式内容の日本語要約

Google が **SynthID Detector** を拡張し、**誰でも使える単独プラットフォームとして公開した。** 昨年はメディア関係者向けの早期版だったものが、一般公開に切り替わった。

機能は、画像・動画・音声ファイルが Google または提携企業の AI で作られたものかを判定することである。判定は 2023年から Google が適用している **SynthID の不可視ウォーターマーク**に基づく。

**提携企業として OpenAI、NVIDIA、Kakao が名指しされており、これらのツールで作られたコンテンツも判定対象になる。** Apple は「coming soon」として挙げられている。

提供は 2026-10-07 開始、**全世界・英語のみ。** 同種の検証機能は Search、Gemini アプリ、Chrome にも組み込まれており、公式はそれらが合計で**1日100万件超のリクエスト**を処理していると述べている。

制約として、判定対象は Google と列挙された提携企業のコンテンツに限られ、**それ以外の AI ツールで作られたものをどう扱うかは発表に記載がない。** 精度に関する数値も示されていない。Apple 対応は未稼働である。

## できるようになったこと

- 画像・動画・音声が Google / OpenAI / NVIDIA / Kakao の AI 由来かを、誰でも無料で確認できる
- ウォーターマークベースの検証を、組織の確認フローへ組み込める

## 影響範囲

- 対象ユーザー: 一般利用者、メディア、企業の広報・法務・コンプライアンス
- 対象プラン: 無料・全世界（英語のみ）
- API / UI / 管理者機能: Web UI（単独プラットフォーム）。Search / Gemini アプリ / Chrome にも同種機能

教材化メモ: src/content/ai-news-notes/gemini/synthid-detector-general-availability.mdx

## 原文確認

- 公式見出し: "We're making it easier to identify AI-generated content globally."
- 公式URL: https://blog.google/innovation-and-ai/models-and-research/google-deepmind/synth-id-ai-content/
- 原文全文は公式ページで確認してください。
