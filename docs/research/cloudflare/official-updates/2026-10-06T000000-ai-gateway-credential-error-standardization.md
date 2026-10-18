---
date: 2026-10-06
title: "AI Gateway — プロバイダーの資格情報拒否時のエラー応答を HTTP 401 / code 2009 に統一"
service: "AI Gateway"
product: "AI Gateway"
source: https://developers.cloudflare.com/changelog/post/2026-10-05-provider-credential-errors/
official_url: https://developers.cloudflare.com/changelog/post/2026-10-05-provider-credential-errors/
fetched_at: 2026-10-07T09:35:00+09:00
published_at: 2026-10-06
date_precision: date-only
category: enhancement
---

# 2026-10-06 AI Gateway のプロバイダー資格情報エラーの統一

## 公式内容の日本語要約

Cloudflare AI Gateway の REST API が、**プロバイダー側が資格情報を拒否したときに返す HTTP ステータスコードを統一した。** 従来はプロバイダーごとに応答が異なっていた。

`POST /ai/run` の新しい挙動は2つである。**大半の資格情報拒否は HTTP 401・エラーコード 2009** を返す。**Unified Billing を使っていてプロバイダーが資格情報を拒否した場合は HTTP 503** を返す。

従来の挙動は実際にばらついていた。**ElevenLabs はプロバイダー固有の `UserCredentialsError`（403）**、**Google Vertex は 500 を返しリトライが走る**、その他のプロバイダーは 402 や独自コードを返していた。これらが **401 に集約**され、Google Vertex については **500＋リトライから 401（リトライなし）**へ変わった。

公式は開発者向けのアクションとして「**AI Gateway REST API のエラーを扱うアプリケーションは、HTTP 401 を『プロバイダー資格情報が無効または拒否された』として扱うこと**」と明記している。

**既存の実装がステータスコードで分岐している場合、挙動が変わる種類の変更である。** 特に Google Vertex で 500 を一時障害としてリトライしていた実装は、**401 でリトライされなくなる**ため、エラーハンドリングの見直しが必要になる。

## できるようになったこと

- プロバイダーを問わず **HTTP 401（code 2009）で資格情報エラーを判定**できる
- Unified Billing 経由の資格情報拒否を **503** で区別できる

## 影響範囲

- 対象ユーザー: AI Gateway の REST API（`POST /ai/run`）を使う開発者
- 対象プラン: AI Gateway 全般
- API / UI / 管理者機能: API（エラー応答のステータスコード）

教材化メモ: src/content/ai-news-notes/cloudflare/ai-gateway-credential-error-401.mdx

## 原文確認

- 公式見出し: 「Standardize provider credential error responses in AI Gateway」
- 公式URL: https://developers.cloudflare.com/changelog/post/2026-10-05-provider-credential-errors/
- 原文全文は公式ページで確認してください。
