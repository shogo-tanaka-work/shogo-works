---
date: 2026-10-26
title: "Workers tracing に spanContext() / setStatus() / updateName() を追加"
service: "Workers"
source: https://developers.cloudflare.com/changelog/post/2026-10-26-span-context-status-update-name/
official_url: https://developers.cloudflare.com/changelog/post/2026-10-26-span-context-status-update-name/
fetched_at: 2026-10-27T09:09:00+09:00
published_date: 2026-10-26
date_precision: date-only
category: enhancement
---

# 2026-10-26 Workers tracing の span API

## 公式内容の日本語要約

Workers のカスタムスパンで、OpenTelemetry の span API のうち3メソッドが使える。`span.spanContext()` は traceId / spanId / traceFlags を返し、Workers Observability とエクスポート先のトレースと一致する。`span.setStatus()` は unset / ok / error とエラーメッセージを設定し、OpenTelemetry 宛てにエクスポートされるが、Workers Observability のダッシュボードにはまだ表示されない。`span.updateName()` は開始後のスパン名変更で、`tracing.getActiveSpan()` が返すルートスパンにも使える。

記事化判断: 見送り（スコア不足・4点）。1 / 1 / 1 / 0 / 1。AI・エージェントとの関連が薄い観測性 API の小さな追加。

教材化メモ: 記事化しないため省略。

## 原文確認

- 公式URL: https://developers.cloudflare.com/changelog/post/2026-10-26-span-context-status-update-name/
- 原文全文は公式ページで確認してください。
