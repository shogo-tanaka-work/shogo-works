---
date: 2026-10-06
title: "Models API に capabilities.server_tools を追加【追補】"
service: "Claude API（Models API）"
source: https://platform.claude.com/docs/en/release-notes/api
fetched_at: 2026-10-09T09:20:00+09:00
published_at: 2026-10-06
date_precision: date-only
category: enhancement
---

# 2026-10-06 Models API に capabilities.server_tools を追加【追補】

## 公式内容の日本語要約

**本件は 2026-10-07 および 2026-10-08 の日次チェックで取りこぼしたもので、追補として記録する。** 10-07 の実行では同じページから 10-05 の `capabilities.thinking.types.disabled` を追補で拾っているが、その隣の 10-06 エントリが抜けていた。date-only エントリの取りこぼしである。

Models API に **`capabilities.server_tools`** が追加された。`GET /v1/models` と `GET /v1/models/{model_id}` が、**各モデルが web search ツールと code execution ツールを受け付けるか**を返すようになった。

公式が注意しているのは**2つの似た名前のフィールドの意味の違い**である。モデルが code execution ツールを受け付けるかを確認するには **`capabilities.server_tools.code_execution`** を読む。一方でトップレベルの **`capabilities.code_execution`** は、**コードがそのリクエストの他のツールを呼べるか**を表す。名前が近いが別の問いに答えるフィールドであり、取り違えると「使えるはずの構成が使えないと判定される」「逆に未対応モデルへツールを渡して失敗する」のどちらにも転びうる。

2026-10-05 の `capabilities.thinking.types.disabled`、2026-10-01 の `line` フィールドと合わせ、**Models API の capability 報告が週単位で細かくなっている流れ**の一部である。モデル ID を文字列で分岐させる実装を、capability 問い合わせへ置き換えられる範囲が広がっている。

## できるようになったこと

- モデルごとに web search / code execution ツールの受け付け可否を API から取得できる
- `capabilities.server_tools.code_execution`（ツールを受け付けるか）と `capabilities.code_execution`（コードが他ツールを呼べるか）を区別できる

## 影響範囲

- 対象ユーザー: Claude API の開発者
- 対象プラン: API 全般
- API / UI / 管理者機能: API のみ。既存実装を壊さない追加変更

教材化メモ: src/content/ai-news-notes/claude/models-api-server-tools-capability.mdx

## 原文確認

- 公式見出し: October 6, 2026（Claude API release notes）
- 公式URL: https://platform.claude.com/docs/en/release-notes/api
- 原文全文は公式ページで確認してください。
