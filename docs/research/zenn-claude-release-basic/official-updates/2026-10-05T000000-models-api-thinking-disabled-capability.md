---
date: 2026-10-05
title: "Models API に capabilities.thinking.types.disabled を追加（thinking 無効化の可否を事前に判定できる）"
service: "Claude Platform / Claude API"
source: https://platform.claude.com/docs/en/release-notes/api
fetched_at: 2026-10-07T09:25:00+09:00
published_at: 2026-10-05
date_precision: date-only
category: enhancement
---

# 2026-10-05 Models API に capabilities.thinking.types.disabled を追加【追補】

## 公式内容の日本語要約

Claude Platform の API リリースノート 2026-10-05 付エントリで、**Models API に `capabilities.thinking.types.disabled` フィールドが追加された。** `GET /v1/models` と `GET /v1/models/{model_id}` のレスポンスが、**各モデルが `thinking: {type: "disabled"}` を受け付けるか**を返すようになった。

**これは 2026-09-28 の Claude Sonnet 5.5 公開に伴う破壊的変更と対になっている。** Sonnet 5.5 では thinking を切るのに `"disabled"` ではなく `thinking: {"type": "between_tools"}` を使う必要があり、**モデルによって `"disabled"` を受け付けるかどうかが分かれた状態**になった。今回のフィールドは、その差を**リクエストを投げる前に API から判定できる**ようにするものである。

**本件は 2026-10-07 の実行で追補として検出した。** 公開日（10-05）は 2026-10-06 の日次チェックの窓（10-05T00:10Z → 10-06T00:11Z）に入っていたが、**当日のサマリーには記録されていない**（当日は Claude Platform の API リリースノートを確認し、最新は 10-01 の `line` フィールドと記録していた）。date-only エントリの取りこぼしである。

## できるようになったこと

- **モデル一覧から「thinking を無効化できるモデル」を機械的に判別**できる
- モデルを動的に切り替える実装で、**`thinking` パラメータの組み立てをモデル ID のハードコードなしに決められる**

## 影響範囲

- 対象ユーザー: Claude API で複数モデルを扱う開発者
- 対象プラン: Claude API
- API / UI / 管理者機能: API（`GET /v1/models`、`GET /v1/models/{model_id}`）

教材化メモ: src/content/ai-news-notes/claude/models-api-thinking-disabled-capability.mdx

## 原文確認

- 公式見出し: 「Added a `capabilities.thinking.types.disabled` field to the Models API」（2026-10-05 エントリ）
- 公式URL: https://platform.claude.com/docs/en/release-notes/api
- 原文全文は公式ページで確認してください。
