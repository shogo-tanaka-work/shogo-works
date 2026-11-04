---
date: 2026-10-27
title: "xAI API に custom moderation controls が追加"
service: "xAI / Grok"
source: https://docs.x.ai/docs/release-notes
fetched_at: 2026-11-02T09:45:00+09:00
published_at: 2026-10-27T00:00:00Z
date_precision: date-only
category: enhancement
---

# 2026-10-27 xAI API に custom moderation controls が追加

## 公式内容の日本語要約

テキスト API のリクエストで**コンテンツガイドラインを指定できる**ようになった。Chat Completions または Responses API のリクエストに `guidelines` 配列を追加すると、`nsfw` / `violence` / `profanity` の各カテゴリについて Grok の扱い方を指定でき、Grok は応答を生成する際にそのガイドラインに従う。

公式ドキュメントの該当ページは Custom Moderation Controls。

## 影響範囲

- 対象ユーザー: xAI API（Chat Completions / Responses）の利用者
- 管理者: アプリケーション側でモデレーション方針を宣言できるため、従来のプロンプト指示による制御から、API パラメータによる明示的な指定へ移せる

## 教材化メモ

記事化しない（週次ソースの巡回記録）。**モデレーション方針を API パラメータとして宣言する形**は、プロンプト内の指示より監査しやすい。社内利用でコンテンツ方針を決める必要がある場合、「プロンプトに書く」ではなく「リクエストの構造に持たせる」設計の実例として使える。

## 原文確認

- 公式見出し: October 27 — Custom moderation controls
- 公式URL: https://docs.x.ai/docs/release-notes
- 原文全文は公式ページで確認してください。
