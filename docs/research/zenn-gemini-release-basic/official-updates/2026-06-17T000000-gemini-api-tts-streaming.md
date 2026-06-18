---
date: 2026-06-17
title: "Gemini API TTS ストリーミング対応"
service: "Gemini API"
source: https://ai.google.dev/gemini-api/docs/changelog
fetched_at: 2026-06-18T11:30:00+09:00
published_at: 2026-06-17T00:00:00Z
date_precision: date-only
category: enhancement
---

# 2026-06-17 Gemini API TTS ストリーミング

## 公式内容の日本語要約

Gemini API の `gemini-3.1-flash-tts-preview` モデルが `streamGenerateContent` および Interactions API の `stream: true` パラメータ経由でストリーミング音声生成に対応した。

## できるようになったこと

- TTS（Text-to-Speech）結果をリアルタイムにストリーミング受信できる
- `streamGenerateContent` エンドポイントから直接音声ストリームを取得可能
- Interactions API でも `stream: true` で対応

## 影響範囲

- 対象ユーザー: Gemini API を利用する開発者
- 対象プラン: Gemini API の各プラン
- API / UI / 管理者機能: API レベルの変更（UI には影響なし）

## 教材化メモ

「ストリーミング TTS」は音声インターフェースを実装する開発者にとって重要な機能。最初の音声が出るまでのレイテンシを減らせるため、チャットボットや音声アシスタント実装で差が出る。教材では「TTS の実装パターン」や「音声アシスタント構築」の章で言及できる。

## 原文確認

- 公式URL: https://ai.google.dev/gemini-api/docs/changelog
- 原文全文は公式ページで確認してください。
