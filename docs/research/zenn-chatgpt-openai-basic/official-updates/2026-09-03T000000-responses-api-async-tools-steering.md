---
date: 2026-09-03
title: "Responses API に非同期ツール呼び出し・ターン途中ステアリング・推論強度の途中変更が追加"
service: "ChatGPT / OpenAI"
source: https://developers.openai.com/api/docs/changelog
fetched_at: 2026-09-05T09:30:00+09:00
published_date: 2026-09-03
date_precision: date-only
category: release
---

# 2026-09-03 Responses API に非同期ツール呼び出し・ターン途中ステアリング・推論強度の途中変更が追加

> 本エントリは **2026-09-05 実行時の追補**である。公開日は窓外（2026-09-03）だが、**2026-09-04 実行（未マージ PR #393）で GPT-6 Astra 本体は記事化されたのに対し、同時に入った Responses API 側の3機能は拾われていなかった**。API 実装に直接影響するため追補として記録する。

## 公式内容の日本語要約

OpenAI は GPT-6 Astra の公開と同じ 2026-09-03 に、Responses API へ3つの新機能を追加した。いずれも API Changelog と個別ガイドで公式ドキュメント化されている。

1つ目は **非同期ツール呼び出し（async tool calling）**である。関数ツール／カスタムツールの定義に `async: true` を付けると、モデルはそのツールの結果を待たずに推論を継続し、別のツールを呼んだり独立した質問に答えたりできる。ツールを実行するのはこれまでどおりアプリケーション側で、OpenAI 側がジョブを預かるわけではない。結果は後続の Responses リクエストで、元の `call_id` に紐づけて `function_call_output` / `custom_tool_call_output` として返す。レスポンス生成自体を非同期化する Background mode とは別物である。

2つ目は **ターン途中ステアリング（mid-turn steering）**である。WebSocket 接続の Responses API で `response.create` の実行中に `response.steer` イベントを送ると、進行中のレスポンスへ追加指示を差し込める。API は `response.steer.accepted` でキュー投入を返すが、これは「受理」であって「反映済み」ではない。サーバーは実行中の出力アイテムとホストツールの処理を終えてから、自動的に継続レスポンスを生成する。元のレスポンスは `response.incomplete` かつ `incomplete_details.reason: "steered"` で終わることがある。**GPT-6 Astra 専用機能で、GPT-5.6 以前は非対応。**

3つ目は **推論強度の会話途中変更**である。`configuration_update` 入力アイテムを追加すると、元のプロンプト接頭辞を書き換えずに `reasoning_effort` を上げ下げでき、**プロンプトキャッシュを維持したまま**難所だけ推論を厚くできる。設定は次の `configuration_update` まで持続する。

あわせて Astra の制約も明記された。`none` の推論強度は非対応、EU データレジデンシー環境では Fast mode が使えない。misalignment monitoring（非同期の逸脱監視とアラート）も強化された安全策の一部として動作する。

## できるようになったこと

- 関数／カスタムツールに `async: true` を指定し、ツール実行中もモデルの推論を継続させる
- WebSocket 経由で実行中のレスポンスへ `response.steer` で追加指示を差し込む（Astra のみ）
- `configuration_update` でキャッシュを壊さずに推論強度を会話途中で変更する

## 影響範囲

- 対象ユーザー: Responses API を使う開発者
- 対象プラン: API 利用者。ステアリングは `gpt-6-astra` のみ
- API / UI / 管理者機能: API。WebSocket モード（`wss://api.openai.com/v1/responses`）が前提の機能を含む

教材化メモ: src/content/ai-news-notes/chatgpt-openai/responses-api-async-tools-steering.mdx

## 原文確認

- 公式見出し: Changelog — September 3, 2026 / Async tool calling / Mid-turn steering / Model guidance: GPT-6 Astra
- 公式URL:
  - https://developers.openai.com/api/docs/changelog
  - https://developers.openai.com/api/docs/guides/async-tool-calling
  - https://developers.openai.com/api/docs/guides/steering
  - https://developers.openai.com/api/docs/guides/latest-model?model=gpt-6-astra
- 原文全文は公式ページで確認してください。
