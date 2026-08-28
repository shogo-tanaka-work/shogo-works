---
date: 2026-08-27
title: "Google Flow に始点終点フレーム指定と 1080p / 4K 書き出し。Gemini Omni 1.1 Flash が基盤"
service: "Gemini / Google Labs"
source: https://blog.google/innovation-and-ai/models-and-research/google-labs/new-creative-controls-google-flow/
fetched_at: 2026-08-28T09:05:00+09:00
published_at: 2026-08-27T16:00:00Z
date_precision: timestamp
category: enhancement
---

# 2026-08-27 Google Flow の新しい制作コントロール

## 公式内容の日本語要約

Google Labs の動画制作ツール **Google Flow** に3つの機能が追加された。基盤は同日公開の **Gemini Omni 1.1 Flash**（Google I/O で初出したモデルの更新版）である。

1. **始点／終点フレームの指定**: トランジション中もキャラクターと物語の一貫性を保てる
2. **1080p / 4K 書き出し**: デジタル配信、SNS、放送向けの編集ワークフローにそのまま渡せる品質
3. **解像度の段階的ワークフロー**: 360p で素早く下書きし、720p で書き出し、必要なら 1080p / 4K でレンダリングする

提供は 2026-08-27 開始で、Google Flow の Web 版とモバイルアプリの両方から利用できる。

同日の Gemini Omni 1.1 Flash 発表がモデル／API 側の話であるのに対し、こちらは**その機能が製品 UI に降りてきた**側の発表にあたる。

## できるようになったこと

- Flow 上で始点・終点フレームを指定した生成
- 1080p / 4K での書き出し
- 360p ドラフト → 720p → 1080p / 4K という解像度の使い分け

## 影響範囲

- 対象ユーザー: Google Flow 利用者（Web / モバイルアプリ）
- 対象プラン: AI Plus / Pro / Ultra（Omni 1.1 Flash の Flow 提供条件に準じる）
- API / UI / 管理者機能: Google Flow の UI

## 教材化メモ

- **「まず粗く作って、選んでから仕上げる」ワークフローがツール側に組み込まれた**事例。生成 AI のコストは試行回数に比例するので、**下書き用の低品質モードを用意することが、そのまま費用対効果の設計になる**。画像・動画に限らず、モデル選択（安いモデルで下書き→高いモデルで仕上げ）と同じ構造。
- モデル発表（Omni 1.1 Flash）と製品反映（Flow）が同日に分かれて出ている点は、**「どちらの発表を読むべきか」の判断材料**として教えられる。API を触る人は前者、業務で使う人は後者。
- 記事化は見送った（本数上限・スコア6）。同日の Gemini Omni 1.1 Flash 記事に、Flow への反映内容を含めて説明した。

## 原文確認

- 公式見出し: Google Flow brings new creative control features to enhance video editing
- 公式URL: https://blog.google/innovation-and-ai/models-and-research/google-labs/new-creative-controls-google-flow/
- 原文全文は公式ページで確認してください。
