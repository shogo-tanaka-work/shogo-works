---
date: 2026-10-16
title: "prompt-to-voice が全APIユーザーへ。文章で音声を作れるようになり、GPT-Live に9音声が追加"
service: "OpenAI API / GPT-Live"
source: https://developers.openai.com/api/docs/changelog
fetched_at: 2026-10-17T09:15:00+09:00
published_date: 2026-10-16
date_precision: date-only
category: release
---

# 2026-10-16 prompt-to-voice が全APIユーザーへ、GPT-Live に9音声追加

## 公式内容の日本語要約

OpenAI は API changelog の 2026-10-16 付けエントリで、**prompt-to-voice を全APIユーザーへ提供開始**したと告知した。**音声の特徴を文章で書くと、その音声が生成される。** 録音も話者の同意録音も不要で、API か音声 Playground から作成できる。できた音声は GPT-Live セッションで `session.audio.output.voice.id` に指定して使う。

**作成は `POST /v1/audio/voices` に `type: "prompt"` を送る。** パラメータは `type` / `name` / `prompt` / `model`（例 `"auto"`）と、任意の `script_hint`（2,000字までの読み上げ例。省略すると自動生成される）。レスポンスは `object: "audio.voice"` / `id` / `name` / `created_at` / `type` / `prompt` で、**音声プレビューは返らない。** 訛り・年齢感・声の高さ・話速などは個別パラメータではなく、すべて `prompt` の文章で指定する。

**同じ日に GPT-Live へ9つの音声が追加された。** ドイツ語3（Nuri / Juni / Flitz）、フランス語2（Brise / Sillage）、ヒンディー語1（Nira）、**日本語2（Harema / Shida）**、韓国語1（Noeul）である。前日（10-15）に ChatGPT 側へ降りた GPT-Live-1.1 の音声追加に対して、**こちらは API 側の追加**にあたる。

**作成料金は無料で、課金は通常の GPT-Live セッション料金に乗る。** 上限は prompt 生成音声が**1組織100件まで**、録音ベースの音声が20件まで。録音ベースの作成（`/v1/audio/voice_consents` で同意録音を登録し `consent` を添えて作成する経路）は**対象顧客限定で、営業への問い合わせが必要**であり、prompt 経由とは別枠である。

**制約も明記されている。** `/v1/audio/voices` 経由の音声作成は **Zero Data Retention と併用できない。** 利用面では、実在の人物・著名人・架空のキャラクターの模倣依頼は禁止、子どもの声は不可、**合成音声であることを聞き手に伝えること**と来歴メタデータ・ウォーターマークの保持が求められる。生成音声の一意性は保証されない。

教材化メモ: src/content/ai-news-notes/chatgpt-openai/prompt-to-voice-custom-voices.mdx

## できるようになったこと

- 文章による音声作成（prompt-to-voice）が全APIユーザーで利用可能になった（API / 音声 Playground の両方）
- GPT-Live で独自音声を使える（`session.audio.output.voice.id` に音声IDを指定。prompt 生成音声は `session.instructions` にも音声の説明を入れる）
- GPT-Live に9音声が追加された（日本語の Harema / Shida を含む）
- `script_hint` で読み上げ例を与えて、生成される声の傾向を寄せられる

## 影響範囲

- 対象ユーザー: すべての API 顧客（prompt 経由）。録音ベースの音声作成は対象顧客限定で要問い合わせ
- 対象プラン: changelog・ガイドともにプラン条件の記載なし。必要な権限は `api.voices.read` / `api.voices.write` とカスタム音声アクセス、プロジェクトスコープの API キー
- API / UI / 管理者機能: `POST /v1/audio/voices`（`type: "prompt"`）、`v1/live/sessions`、音声 Playground。**Zero Data Retention 環境では作成不可**

## 原文確認

- 公式見出し: `Prompt-to-voice`（Feature / gpt-live-1 / v1/audio/voices, v1/live/sessions）、`Nine new GPT-Live voices`（Feature / gpt-live-1 / v1/live/sessions）
- 公式URL: https://developers.openai.com/api/docs/changelog
- ガイド: https://developers.openai.com/api/docs/guides/custom-voices#create-a-voice-from-a-description
- 音声一覧: https://developers.openai.com/api/docs/guides/live-conversations#voice-options
- 原文全文は公式ページで確認してください。
