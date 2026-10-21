---
date: 2026-10-20
title: "Responses API が 12 時間プロンプトキャッシュを選択可能に"
service: "OpenAI API"
source: https://developers.openai.com/api/docs/changelog
official_url: https://developers.openai.com/api/docs/changelog
fetched_at: 2026-10-21T09:10:00+09:00
published_date: 2026-10-20
date_precision: date-only
category: enhancement
---

# 2026-10-20 OpenAI API 12 時間プロンプトキャッシュ

## 公式内容の日本語要約

API（v1/responses）で 12 時間のプロンプトキャッシュを選べるようになった。共通の指示・ツール・コンテキストを長くキャッシュし、リクエストが数時間空いても割安なキャッシュ入力価格の恩恵を受けられる。12 時間キャッシュの書き込みは入力トークン価格の 2.5 倍。詳細は公式の Read more 先（本文は未取得）。

教材化メモ: src/content/ai-news-notes/chatgpt-openai/api-12-hour-prompt-caching.mdx

## できるようになったこと

- キャッシュ保持を 12 時間に延長して選べる
- 間隔の空くリクエストでもキャッシュ入力価格を適用できる

## 影響範囲

- 対象ユーザー: Responses API 利用開発者
- 対象プラン: 記載なし
- API / UI / 管理者機能: API（設定パラメーター名は changelog に記載なし）

## 原文確認

- 公式見出し: Oct 20 Feature · API: v1/responses
- 公式URL: https://developers.openai.com/api/docs/changelog（Exa 取得）
- 原文全文は公式ページで確認してください。
