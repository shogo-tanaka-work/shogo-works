---
date: 2026-09-01
title: "Gemini にエージェント的動画理解 — トークン最大88%減、コスト最大66%減"
service: "Gemini"
source: https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-agentic-video-in-gemini/
fetched_at: 2026-09-02T09:05:00+09:00
published_at: 2026-09-01T17:00:00Z
date_precision: timestamp
category: enhancement
---

# 2026-09-01 Gemini のエージェント的動画理解

教材化メモ: src/content/ai-news-notes/gemini/agentic-video-understanding.mdx

## 公式内容の日本語要約

Google が **agentic video understanding（エージェント的動画理解）** を Gemini の最新モデル群へ導入した。

従来の動画処理は、**固定フレームレートで動画全体を一律に処理**していた。今回の方式では、**モデル自身が「どの区間を、どの速度で、どのモダリティ（フレーム / 音声 / 文字起こし）で調べるか」を動的に決める。** 公式の表現では「対象となる動画区間を動的に検索・スキャン・検査する」。

効果として公式が挙げている数値は3つ。**トークン消費が最大88%減、コストが最大66%減、品質が最大7%向上。** 一律処理では動画全体を等しくトークン化するため、問いに関係のない区間にも同じコストが掛かっていた。必要な区間だけを深く見る方式に変えることで、コストと精度が同時に改善したという構造である。

対応モデルは **Gemini 3.7 Flash / Gemini 3.6 Flash / Gemini 3.5 Flash-Lite** の3つ。開発者は Gemini API 経由で、Google AI Studio または Gemini Enterprise Agent Platform から利用する。**有効化は API の設定に `"processing": "agentic"` を指定するだけ**で、動画 URI を渡す既存の呼び出しにパラメータを1つ足す形になる。

**課金は Gemini API の標準トークン単価のままで、機能追加料金はない。** つまり、トークン消費が減った分がそのままコスト削減になる。

提供状況は、**API 経由は即日利用可能**。Gemini アプリのユーザーには「まもなく」展開予定。YouTube の「Ask YouTube」機能への統合は「今後数か月のうちに」とされている。

## できるようになったこと

- Gemini API の動画処理で `"processing": "agentic"` を指定して、エージェント的な区間選択を有効化できる
- Gemini 3.7 Flash / 3.6 Flash / 3.5 Flash-Lite の3モデルで利用可能
- Google AI Studio と Gemini Enterprise Agent Platform から利用可能
- 追加費用なしで、同じ動画タスクのトークン消費とコストを削減できる

## 影響範囲

- 対象ユーザー: Gemini API を使って動画を処理している開発者
- 対象プラン: 標準の Gemini API トークン課金。**機能追加料金なし**
- API / UI / 管理者機能: API のリクエスト設定に1パラメータ追加するだけ。既存実装からの移行コストが低い
- Gemini アプリ / YouTube Ask YouTube への展開は今後

## 原文確認

- 公式見出し: Introducing agentic video understanding with Gemini
- 公式URL: https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-agentic-video-in-gemini/
- 原文全文は公式ページで確認してください。
