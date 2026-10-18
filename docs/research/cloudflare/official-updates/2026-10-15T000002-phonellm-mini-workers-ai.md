---
date: 2026-10-15
title: "Workers AI に PhoneLLM Mini Alpha 2 が追加 — 音声エージェント向けに Nemotron 3 Nano 30B を電話・サポート領域で追加学習、reasoning を切って使う"
service: "Workers AI"
product: "Workers AI, Realtime"
source: https://developers.cloudflare.com/changelog/post/2026-10-15-phonellm-mini-workers-ai/
fetched_at: 2026-10-16T09:20:00+09:00
published_date: 2026-10-15
date_precision: date-only
category: release
---

# 2026-10-15 Workers AI に PhoneLLM Mini Alpha 2

## 公式内容の日本語要約

**Workers AI に `@cf/daily-co/phonellm-mini-alpha-2`（PhoneLLM Mini Alpha 2）が追加された。** 提供元は Daily の **Pipecat** チームである。

**用途は音声エージェントとリアルタイムアプリである。** モデルが**素早く応答し、会話の途中で正しいツールを呼ぶ**ことを求められる場面を想定している。

**レイテンシに関する説明が、このモデルの存在理由である。** 音声エージェントでは **言語モデルが speech-to-text と text-to-speech の間に挟まる**ため、**モデルの遅延がそのまま発話者の待ち時間に積み上がる。**

**学習の素性が明示されている。** Pipecat が **NVIDIA Nemotron 3 Nano 30B** を**電話・カスタマーサポートのシナリオで事後学習（post-training）**した。その結果、**reasoning モードなしでも指示追従とツール呼び出しが良い。**

**推奨設定が示されている。** `temperature: 0` と `chat_template_kwargs: { enable_thinking: false }`。**reasoning を明示的に切って使う前提**である。

**アクセス方法は2つ。** Workers AI バインディング（`env.AI.run()`）と REST API（`/ai/run`）。

**音声エージェントのサンプルがある。** Cloudflare が提供する Pipecat 音声エージェントのサンプルは、**Durable Object 内で動き、Realtime SFU 経由で WebRTC を使う。** 既定のモデルは DeepSeek V4 Flash で、**コーディングエージェントにプロンプトを渡せば PhoneLLM 構成でデプロイできる**と記載がある。**Python Workers が一般提供になった**ことがこの構成を可能にしている。

**公式に記載がない項目。** **価格は未記載**（Workers AI の価格ページを参照とされる）。**コンテキストウィンドウも未記載**（モデルページを参照）。

## できるようになったこと

- Workers AI 上で音声エージェント向けの小型モデルを `env.AI.run()` または REST で呼べる
- reasoning を切った状態で、低遅延のツール呼び出しを前提にした構成が取れる
- Durable Object + Realtime SFU（WebRTC）の既存サンプルをこのモデルへ差し替えられる

## 影響範囲

- 対象ユーザー: Workers AI で音声エージェント・リアルタイム応答を作る開発者
- 対象プラン: 価格は公式の Workers AI 価格ページに依存（本告知には記載なし）
- API / UI / 管理者機能: Workers AI バインディング、REST API（`/ai/run`）

教材化メモ: src/content/ai-news-notes/cloudflare/phonellm-mini-workers-ai.mdx

## 原文確認

- 公式見出し: Pipecat PhoneLLM Mini now available on Workers AI
- 公式URL: https://developers.cloudflare.com/changelog/post/2026-10-15-phonellm-mini-workers-ai/
- 原文全文は公式ページで確認してください。
