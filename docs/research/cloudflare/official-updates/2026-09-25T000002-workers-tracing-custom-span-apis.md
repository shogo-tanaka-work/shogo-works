---
date: 2026-09-25
title: "Workers tracing に getActiveSpan / recordException / startSpan / setAttributes が追加。OpenTelemetry span 仕様への追随"
service: "Workers"
product: "Workers"
source: https://developers.cloudflare.com/changelog/post/2026-09-25-custom-span-apis/
official_url: https://developers.cloudflare.com/changelog/post/2026-09-25-custom-span-apis/
fetched_at: 2026-09-26T09:10:00+09:00
published_at: 2026-09-25
date_precision: date-only
category: enhancement
---

# 2026-09-25 Workers tracing のカスタム span API 追加

## 公式内容の日本語要約

Cloudflare は 2026-09-25、**Workers のトレーシングに4つの API を追加**した。OpenTelemetry の span 仕様への対応範囲を広げるものである。

**`tracing.startSpan(name)`** は、アクティブなコンテキストを変えずに span を作る。終了は `span.end()` の明示呼び出しが必要になる。

**`tracing.getActiveSpan()`** は、現在アクティブな span を取得する。**span オブジェクトを関数の引数として引き回さずに、ヘルパー関数の内側から注釈を付けられる**ようになる。公式の表現では "annotate the current span from anywhere"。

**`span.recordException(exception)`** は、例外イベントを span に直接記録する。受け取れるのは Error オブジェクト、文字列、または `code` / `name` / `message` を持つオブジェクト。

**`span.setAttributes(attributes)`** は、複数の属性を一度に設定する。これと既存の `setAttribute()` の両方が**メソッドチェーンに対応**した。

教材化メモ: src/content/ai-news-notes/cloudflare/workers-tracing-custom-span-apis.mdx

## できるようになったこと

- `tracing.startSpan(name)` でアクティブコンテキストを変えずに span を作成（`span.end()` は手動）
- `tracing.getActiveSpan()` で現在の span を取得し、引き回しなしに注釈を追加
- `span.recordException(exception)` で例外を span に直接記録（Error / 文字列 / `code`・`name`・`message` を持つオブジェクト）
- `span.setAttributes(attributes)` で属性を一括設定。`setAttribute()` と併せてメソッドチェーン対応

## 影響範囲

- 対象ユーザー: Workers で可観測性を実装している開発者
- 対象プラン: 告知に制限の記載なし
- API / UI / 管理者機能: Workers ランタイムの tracing API

## 原文確認

- 公式見出し: Workers - Workers tracing — new getActiveSpan(), recordException(), startSpan(), and setAttributes() APIs
- 公式URL: https://developers.cloudflare.com/changelog/post/2026-09-25-custom-span-apis/
- 原文全文は公式ページで確認してください。
