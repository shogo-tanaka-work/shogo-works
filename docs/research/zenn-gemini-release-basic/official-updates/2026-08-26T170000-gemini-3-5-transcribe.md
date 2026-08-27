---
date: 2026-08-26
title: "Gemini 3.5 Transcribe 公開。85言語超の音声認識を Live API / Interactions API で提供"
service: "Gemini"
source: https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-5-transcribe/
fetched_at: 2026-08-27T09:05:00+09:00
published_at: 2026-08-26T17:00:00Z
date_precision: timestamp
category: release
---

# 2026-08-26 Gemini 3.5 Transcribe

## 公式内容の日本語要約

Google が音声認識モデル **Gemini 3.5 Transcribe** を公開した。従来の音声認識が苦手としてきた背景ノイズ・専門用語・言い淀みの除去を、生の音声から直接「整形済みテキスト」へ変換する形で扱う。従来モデル **Chirp 3 の後継**にあたる。

開発者向けには **Gemini API（Google AI Studio）と Gemini Enterprise Agent Platform** で提供され、2系統の API に分かれる。

- **リアルタイムストリーミング**: Live API の `gemini-3.5-transcribe-live`。サブ秒レイテンシの双方向ストリーミング
- **録音済み音声**: Interactions API の `gemini-3.5-transcribe`。話者帰属と単語レベルのタイムスタンプ付き

主な特性は、言い直しの吸収（「火曜日に会おう——いや水曜日」）、フィラー除去、自動整形、カスタム語彙への適応、**85言語超の自動検出**、録音音声での**最大3話者**の帰属（3話者超は experimental）、そして他の Gemini モデルへの function calling による委譲（画像生成・ファイル分析。現時点では Gemini macOS アプリ）。

精度は Artificial Analysis 計測で **WER 平均 4.0%（ストリーミング）/ 2.6%（非ストリーミング）**。FLEURS ベンチマークの主要言語・ロケールでは **5.50%（ストリーミング）/ 5.04%（非ストリーミング）**。最終テキスト確定までの時間は Chirp 3 比で **約70%改善**。

製品側では、Android の Gboard 新機能 **Rambler**、**Google Antigravity**（画面コンテキストとチャット履歴を許諾のうえ参照して精度を上げる）、**Google AI Studio の Build モード**（音声でのコーディング）、**Gemini macOS アプリ**（音声コマンドで要約・画像生成）で使われる。**Chrome への搭載は近日**（任意の Web 入力欄での音声入力）。

## できるようになったこと

- Live API / Interactions API から新音声認識モデルを利用（ストリーミングと録音の2系統）
- 話者帰属・単語レベルタイムスタンプ・カスタム語彙・85言語超の自動検出
- Gboard Rambler、Antigravity、AI Studio Build モード、Gemini macOS アプリでの音声入力強化

## 影響範囲

- 対象ユーザー: Gemini API 開発者、Gemini Enterprise Agent Platform 利用者、Android / macOS の Gemini 利用者
- 対象プラン: Gemini API（AI Studio）、Gemini Enterprise Agent Platform、Gemini アプリ
- API / UI / 管理者機能: API（Live / Interactions）+ 各プロダクト UI

教材化メモ: src/content/ai-news-notes/gemini/gemini-3-5-transcribe.mdx

## 原文確認

- 公式見出し: Intelligent transcription with Gemini 3.5 Transcribe
- 公式URL: https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-5-transcribe/
- 原文全文は公式ページで確認してください。
