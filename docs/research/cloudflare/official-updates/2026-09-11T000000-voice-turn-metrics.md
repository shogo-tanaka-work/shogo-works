---
date: 2026-09-11
title: "Voice Agent のターン所要時間と終了理由を計測可能に（@cloudflare/voice v0.4.0）"
service: "Cloudflare Agents"
product: "Agents"
source: https://developers.cloudflare.com/changelog/post/2026-09-11-voice-diagnostics-turn-metrics/
fetched_at: 2026-09-12T09:20:00+09:00
published_date: 2026-09-11
date_precision: date-only
category: enhancement
---

# 2026-09-11 Voice Agent のターンメトリクス

教材化メモ: src/content/ai-news-notes/cloudflare/voice-turn-metrics.mdx

## 公式内容の日本語要約

`@cloudflare/voice` の **v0.4.0** で、Voice Agent の各ターンが **どこで時間を使い、どう終わったか** を検査できるようになりました。

`@cloudflare/voice` は Cloudflare Agents 上でリアルタイム音声エージェントを作るパッケージです。マイク音声を WebSocket で Agent へ流し、音声認識し、`onTurn()` でモデルを走らせ、応答を音声合成して返します。1ターンは `ユーザー発話 → STT → モデル → TTS → 音声` という段階を通ります。

**従来は集計メトリクスが4つあるだけで、成功して出力があったターンしか見えませんでした。** 失敗・中断・空・テキストのターンがどう終わったかは分かりませんでした。

v0.4.0 では、音声・テキストの各ターンが型付きの **`VoiceTurnMetrics`** を生成します。含まれるのは次の3つです。

- 同一ターンのイベントを突き合わせる **`turnId`**
- 終了理由（terminal outcome）: `completed` / `no_output` / `output_limit` / `content_filtered` / `model_error` / `tts_error` / `aborted`
- 主要段階の所要時間: 発話から最終トランスクリプトまで、モデルから最初のテキストまで、TTS から最初の音声まで、ターン全体

**これらの所要時間は重なりうるもので、足し合わせても全体にはなりません。** 到達しなかった段階の時間は省略されます。最新のサマリーは `VoiceClient`、`useVoiceAgent()`、`useVoiceInput()` から取得できます（`useVoiceInput()` は計測可能な発話・文字起こし部分のみ）。

結果として、**エージェントが音声を返さなかったとき、モデルが何も返さなかったのか、出力上限に達したのか、コンテンツフィルタに掛かったのか、失敗したのかを区別できる** ようになりました。

あわせてローカルデバッグ用に、`withVoice(Agent, { diagnostics: { browserConsole: true } })` でサーバー側のライフサイクルイベントをブラウザコンソールへ転送できます。

## できるようになったこと

- ターンごとの `VoiceTurnMetrics`（`turnId` / 終了理由 / 段階別所要時間）の取得
- 無音声終了の原因切り分け（`no_output` / `output_limit` / `content_filtered` / `model_error` / `tts_error` / `aborted`）
- `VoiceClient` / `useVoiceAgent()` / `useVoiceInput()` からの最新サマリー参照
- `diagnostics.browserConsole` でのサーバーライフサイクルイベントのブラウザ転送

## 影響範囲

- 対象ユーザー: Cloudflare Agents で音声エージェントを作る開発者
- 対象プラン: `@cloudflare/voice` v0.4.0 以降
- API / UI / 管理者機能: SDK（イベント `turnmetrics`、`withVoice` の `diagnostics` オプション）

## 原文確認

- 公式見出し: Inspect Voice Agent turn latency and outcomes
- 公式URL: https://developers.cloudflare.com/changelog/post/2026-09-11-voice-diagnostics-turn-metrics/
- 原文全文は公式ページで確認してください。
